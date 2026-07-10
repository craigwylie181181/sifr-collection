#!/usr/bin/env node
/* Sifr Collection data integrity gate.
 *
 * Exists because on 6 Jul 2026 an unsourced "~3x CCP premium" shipped to production, and an
 * 8 Jul 2026 audit then found five entirely invented carbon projects and a fabricated soil
 * carbon monitoring table on the live site. Being careful did not prevent that. A gate might.
 *
 * Run:  node tools/verify-data.js
 * Exit: 0 clean, 1 on any failure. CI blocks the deploy on a non-zero exit.
 *
 * This cannot detect a plausible lie. It CAN detect the shapes that fabrication takes here:
 * a number with no source, a claim of registry status with nothing behind it, a resurrected
 * project name, and a price hardcoded into HTML where it will drift from the sourced file.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const failures = [];
const warnings = [];
const fail = (file, msg) => failures.push(`${file}: ${msg}`);
const warn = (file, msg) => warnings.push(`${file}: ${msg}`);

function load(file) {
  const full = path.join(ROOT, file);
  if (!fs.existsSync(full)) { fail(file, 'file is missing'); return null; }
  const sandbox = { window: {} };
  try {
    // eslint-disable-next-line no-new-func
    new Function('window', fs.readFileSync(full, 'utf8'))(sandbox.window);
  } catch (e) {
    fail(file, `does not parse: ${e.message}`);
    return null;
  }
  return sandbox.window;
}

function read(file) {
  const full = path.join(ROOT, file);
  return fs.existsSync(full) ? fs.readFileSync(full, 'utf8') : '';
}

/* ------------------------------------------------------------------ *
 * 1. Basis fields that look like citations but are not.
 * ------------------------------------------------------------------ */
const BANNED_BASIS = [
  'market reporting', 'class estimate', 'industry estimate', 'analyst consensus',
  'internal estimate', 'estimated', 'approx', 'various sources', 'public sources',
  'market data', 'indicative ref',
];

/* Project names deleted on 8 Jul 2026 for being unverifiable. If any reappears anywhere in
 * the repo, someone (or something) has regenerated fabricated content. Hard fail. */
const DELETED_PROJECTS = [
  'Qassim Soil Restoration', 'Qassim Basin',
  'Abu Dhabi Soil Sequestration', 'Abu Dhabi Soil',
  'Nile Delta Mangrove', 'Nile Delta North',
  'Dhofar Rangeland', 'Dhofar Highlands',
  'Jordan Valley Watershed',
  'Al-Ahsa Oasis',
  'NEOM Green Spine',
];

/* Capability claims Sifr cannot make. It has no field measurements and no MRV pipeline. */
const FALSE_CAPABILITIES = [
  /Sifr\s+tracks\s+soil\s+organic\s+carbon\s+using/i,
  /Soil organic carbon and vegetation data draw on Sentinel-2/i,
  /our\s+(satellite|MRV)\s+(pipeline|measurements)/i,
];

/* Price reporting agencies whose individual prices may not be republished without a licence. */
const LICENSED_PRAS = ['Argus', 'Platts', 'S&P Global Commodity Insights', 'OPIS'];

/* Values that were WRONG and are now corrected. They lived in prose, JSON-LD and stat tiles as
 * well as the data files, which is why the first pass of this gate missed them. If any string
 * below reappears, a stale copy has been reintroduced somewhere the data files do not reach. */
const CORRECTED_LITERALS = [
  { bad: '$107',           why: 'MEA VCM 2023 figure could not be verified; use $173.2M (2025, Grand View Research)' },
  { bad: '27% a year',     why: 'unsourced CAGR; Grand View gives 22.6% CAGR 2026-2033' },
  { bad: '~27% CAGR',      why: 'as above' },
  // The string is allowed only where the text explicitly corrects the misattribution.
  { bad: '44 Mtpa by 2035', requires: 'national CCS target', why: "that is Saudi Arabia's NATIONAL CCS target, not the Jubail hub's capacity" },
  { bad: '$300+',          why: 'unsourced durable removal price; SOVCM 2025 gives biochar >$160 and no DAC price' },
  { bad: '+20-40%',        why: 'Gold Standard premium over Verra is +53% ($7.10 vs $4.65), SOVCM 2025' },
  { bad: '$2-5',           why: 'reduction/avoidance average is $4.05, SOVCM 2025' },
  { bad: '$30-45',         why: 'blue carbon average is $29.72 on 0.2 Mt, SOVCM 2025' },
  { bad: 'direct air capture plus peridotite', why: '44.01 does mineralisation, not capture' },
  { bad: 'Nations tracked', requires: '>12<', why: 'coverage is 12 countries, not 14' },
];

/* ------------------------------------------------------------------ *
 * 2. market-data.js  -- every value needs a named source and a URL.
 * ------------------------------------------------------------------ */
(function checkMarket() {
  const F = 'market-data.js';
  const w = load(F);
  if (!w || !w.SIFR_MARKET) { fail(F, 'window.SIFR_MARKET not defined'); return; }
  const M = w.SIFR_MARKET;

  if (!/^\d{4}-\d{2}-\d{2}$/.test(M.updated || '')) fail(F, '`updated` must be YYYY-MM-DD');

  (M.prices || []).forEach((p) => {
    const id = p.sym || '(no sym)';
    ['sym', 'label', 'value', 'change', 'dir', 'basis', 'asof'].forEach((k) => {
      if (!p[k]) fail(F, `${id}: missing required key \`${k}\``);
    });
    if (!p.src) fail(F, `${id}: has a value (${p.value}) but no \`src\` URL. Source it or delete the row.`);
    if (p.src && !/^https?:\/\//.test(p.src)) fail(F, `${id}: \`src\` is not a URL (${p.src})`);
    const basis = String(p.basis || '').toLowerCase();
    BANNED_BASIS.forEach((b) => {
      if (basis.includes(b)) fail(F, `${id}: basis "${p.basis}" is not a citation. Name the publication.`);
    });
    LICENSED_PRAS.forEach((pra) => {
      if (String(p.basis).includes(pra)) {
        fail(F, `${id}: cites ${pra}. Their terms forbid republishing individual prices without a licence.`);
      }
    });
    // A bare multiple or percentage with no stated base of comparison is how "~3x" happened.
    if (/^[+~]?\d+(\.\d+)?(x|%)$/.test(String(p.value).trim()) && !String(p.change || '').trim()) {
      fail(F, `${id}: value "${p.value}" is a ratio with no base of comparison in \`change\`.`);
    }
  });

  (M.indices || []).forEach((i) => {
    if (!i.basis) fail(F, `${i.sym || '(no sym)'}: index has no \`basis\``);
  });

  if (/~\s*\d+x/.test(read(F))) fail(F, 'contains a "~Nx" style multiple. State the two prices instead.');
})();

/* ------------------------------------------------------------------ *
 * 3. projects-data.js -- no registry status, methodology, tonnage or
 *    price unless the project is actually registered.
 * ------------------------------------------------------------------ */
(function checkProjects() {
  const F = 'projects-data.js';
  const w = load(F);
  if (!w || !Array.isArray(w.SIFR_PROJECTS)) { fail(F, 'window.SIFR_PROJECTS not an array'); return; }

  w.SIFR_PROJECTS.forEach((p) => {
    const id = p.name || p.id || '(unnamed)';
    if (typeof p.registered !== 'boolean') {
      fail(F, `${id}: must declare \`registered: true|false\`. Ambiguity is how invented projects survive.`);
    }
    if (!p.url || !/^https?:\/\//.test(p.url || '')) fail(F, `${id}: missing evidence \`url\``);

    if (p.registered === false) {
      // An unregistered project may not imply credits exist.
      const claimsMethod = p.methodology && !/^n\/a$/i.test(p.methodology) &&
                           !/DAC partners|industrial capture|geological storage|Carbon capture|Waste-to-energy|Grid-connected/i.test(p.methodology);
      if (claimsMethod) fail(F, `${id}: registered=false but claims methodology "${p.methodology}"`);
      if (/^\$/.test(String(p.price || ''))) fail(F, `${id}: registered=false but carries a price (${p.price})`);
      if (/VM\d{4}|VCS|Gold Standard/i.test(String(p.std || '')) ) {
        fail(F, `${id}: registered=false but \`std\` names a registry standard (${p.std})`);
      }
    }
    if (p.registered === true && !p.registry) fail(F, `${id}: registered=true but no \`registry\` named`);

    // No indicative prices anywhere, registered or not.
    if (/^[$€]/.test(String(p.price || ''))) {
      fail(F, `${id}: carries price ${p.price}. Sifr does not publish prices it cannot cite to a PRA-free public source.`);
    }
    if (/indicative/i.test(String(p.priceUnit || ''))) fail(F, `${id}: priceUnit "${p.priceUnit}" reintroduces indicative pricing`);
  });
})();

/* ------------------------------------------------------------------ *
 * 4. news / compliance / standards -- every item needs a link.
 * ------------------------------------------------------------------ */
(function checkSourcedFeeds() {
  const news = load('news-data.js');
  if (news && news.SIFR_NEWS) {
    (news.SIFR_NEWS.items || []).forEach((it, i) => {
      if (!it.url || !/^https?:\/\//.test(it.url)) fail('news-data.js', `item ${i + 1} ("${(it.text || '').slice(0, 40)}...") has no source URL`);
      if (!it.source) fail('news-data.js', `item ${i + 1} has no source name`);
    });
  }

  const comp = load('compliance-data.js');
  if (comp && comp.SIFR_COMPLIANCE) {
    (comp.SIFR_COMPLIANCE.timeline || []).forEach((it) => {
      if (!it.source || !/^https?:\/\//.test(it.source)) fail('compliance-data.js', `"${it.title}" has no source URL`);
    });
  }

  const std = load('standards-data.js');
  if (std && std.SIFR_STANDARDS) {
    (std.SIFR_STANDARDS.items || []).forEach((it) => {
      if (!it.url || !/^https?:\/\//.test(it.url)) fail('standards-data.js', `"${(it.title || '').slice(0, 50)}..." (${it.body}) has no source URL`);
    });
  }
})();

/* ------------------------------------------------------------------ *
 * 5. Whole-repo checks: resurrected fabrications, false capability
 *    claims, and prices hardcoded into HTML.
 * ------------------------------------------------------------------ */
(function checkRepo() {
  const files = fs.readdirSync(ROOT).filter((f) => /\.(html|js)$/.test(f) && f !== 'coverage-data.js');

  files.forEach((f) => {
    const txt = read(f);

    DELETED_PROJECTS.forEach((name) => {
      // projects-data.js documents the deletions in its header comment; that is allowed.
      const inAuditComment = f === 'projects-data.js' || f === 'tools/verify-data.js';
      if (!inAuditComment && txt.includes(name)) {
        fail(f, `contains "${name}", a project deleted on 8 Jul 2026 as unverifiable. Do not resurrect it.`);
      }
    });

    FALSE_CAPABILITIES.forEach((re) => {
      if (re.test(txt)) fail(f, `claims a measurement capability Sifr does not have (matched ${re}).`);
    });

    // Prose, JSON-LD and stat tiles carry copies of the data. Stale copies are still lies.
    CORRECTED_LITERALS.forEach((c) => {
      const isSelf = f === 'tools/verify-data.js';
      if (isSelf) return;
      if (c.requires) {
        if (txt.includes(c.bad) && !txt.includes(c.requires)) fail(f, `"${c.bad}" without ${c.requires}: ${c.why}`);
      } else if (txt.includes(c.bad)) {
        fail(f, `contains corrected-away value "${c.bad}". ${c.why}`);
      }
    });
  });

  // The gate only reads the repo root; tools/ holds the denylists themselves.
  ['research.html'].forEach((f) => {
    const txt = read(f);
    const blocks = txt.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g) || [];
    blocks.forEach((b, i) => {
      const body = b.replace(/<\/?script[^>]*>/g, '');
      try { JSON.parse(body); } catch (e) { fail(f, `JSON-LD block ${i + 1} does not parse: ${e.message}`); }
    });
  });

  // index.html must render prices from market-data.js, never inline them.
  const idx = read('index.html');
  if (!/src="market-data\.js"/.test(idx)) fail('index.html', 'does not load market-data.js but displays reference prices');
  const priceRowLiterals = idx.match(/class="pr-price[^"]*">\s*[$€]/g);
  if (priceRowLiterals) fail('index.html', `${priceRowLiterals.length} hardcoded price literal(s) in .pr-price. Render from SIFR_MARKET instead.`);

  // Any tC/ha figure outside the schematic is a measurement claim.
  files.forEach((f) => {
    const txt = read(f);
    const m = txt.match(/\d+\.\d+\s*(tC\/ha|tCO2\/ha)/g);
    if (m) fail(f, `states measured soil carbon stock(s) ${m.join(', ')}. Sifr has no field measurements.`);
  });

  // robots.txt invites AI crawlers, so an unlinked page is still a published page.
  const orphan = 'map-options.html';
  if (fs.existsSync(path.join(ROOT, orphan)) && fs.statSync(path.join(ROOT, orphan)).size > 2000) {
    warn(orphan, 'large unlinked page is publicly reachable and robots.txt allows AI crawlers. Confirm it holds no unverified data.');
  }
})();

/* ------------------------------------------------------------------ *
 * Report
 * ------------------------------------------------------------------ */
if (warnings.length) {
  console.log('\nWARNINGS');
  warnings.forEach((w) => console.log('  ~ ' + w));
}

if (failures.length) {
  console.error('\nDATA INTEGRITY GATE FAILED (' + failures.length + ')\n');
  failures.forEach((f) => console.error('  x ' + f));
  console.error('\nEvery value on Sifr must be traceable to a named, dated, public source.');
  console.error('If you cannot source it, delete the row. A missing row costs nothing.\n');
  process.exit(1);
}

console.log('\nData integrity gate passed. Every value carries a source.\n');
process.exit(0);
