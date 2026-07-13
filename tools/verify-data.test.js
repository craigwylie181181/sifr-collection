#!/usr/bin/env node
/* Self-test for the data integrity gate.
 *
 * A gate that always passes is worse than no gate: it manufactures confidence.
 * This copies the repo to a temp dir, reintroduces each specific failure that actually
 * shipped to production, and asserts the gate rejects every one of them.
 *
 * Run: node tools/verify-data.test.js   (exit 0 = the gate has teeth)
 */
'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');

function stage() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'sifr-gate-'));
  fs.cpSync(ROOT, dir, {
    recursive: true,
    filter: (src) => !/(^|\/)(\.git|node_modules)(\/|$)/.test(src),
  });
  return dir;
}

function gatePasses(dir) {
  try {
    execFileSync('node', [path.join(dir, 'tools', 'verify-data.js')], { stdio: 'pipe' });
    return true;
  } catch (_) {
    return false;
  }
}

function edit(dir, file, fn) {
  const f = path.join(dir, file);
  fs.writeFileSync(f, fn(fs.readFileSync(f, 'utf8')));
}

const cases = [
  {
    name: 'unsourced price row (the original "~3x CCP premium")',
    mutate: (d) => edit(d, 'market-data.js', (t) => t.replace(
      /(\n\s*\{ sym:"NBS-ARR")/,
      '\n    { sym:"CCP-PREM", label:"CCP-labelled premium", value:"~3x", change:"▲", dir:"up", basis:"2026 market reporting", asof:"2026" },$1')),
  },
  {
    name: 'price row with a src but a banned basis phrase',
    mutate: (d) => edit(d, 'market-data.js', (t) => t.replace('basis:"EM SOVCM 2025", asof:"2024"', 'basis:"class estimate", asof:"2024"')),
  },
  {
    name: 'price row with no src URL at all',
    mutate: (d) => edit(d, 'market-data.js', (t) => t.replace(/, src:"https:\/\/www\.ecosystemmarketplace[^"]*"/, '')),
  },
  {
    name: 'republishing an Argus / Platts price',
    mutate: (d) => edit(d, 'market-data.js', (t) => t.replace('basis:"EM SOVCM 2025"', 'basis:"Argus assessment"')),
  },
  {
    name: 'resurrected fabricated project (Qassim Soil Restoration)',
    mutate: (d) => edit(d, 'index.html', (t) => t.replace('<title>', '<!-- Qassim Soil Restoration -->\n<title>')),
  },
  {
    name: 'unregistered project claiming a registry standard',
    mutate: (d) => edit(d, 'projects-data.js', (t) => t.replace(
      'id:"alula", name:"AlUla Landscape Restoration"', 'id:"alula", name:"AlUla Landscape Restoration"')
      .replace('std:"Not registered", methodology:"n/a",\n    registry:"Not a registered carbon project"',
               'std:"Verra VCS", methodology:"VM0042",\n    registry:"Not a registered carbon project"')),
  },
  {
    name: 'project carrying an indicative price',
    mutate: (d) => edit(d, 'projects-data.js', (t) => t.replace('price:"Not listed", priceUnit:"no public price"', 'price:"$28.90", priceUnit:"indicative ref / tCO₂e"')),
  },
  {
    name: 'project with no `registered` flag',
    mutate: (d) => edit(d, 'projects-data.js', (t) => t.replace(/\n\s*registered:false,/, '')),
  },
  {
    name: 'false capability claim (Sifr measures soil carbon)',
    mutate: (d) => edit(d, 'index.html', (t) => t.replace('<p>Sifr does not measure soil carbon.', '<p>Sifr tracks soil organic carbon using Sentinel-2 satellite data.')),
  },
  {
    name: 'fabricated measured SOC stock (42.8 tC/ha)',
    mutate: (d) => edit(d, 'dashboard.html', (t) => t.replace('<tbody id="projRows">', '<tbody id="projRows"><tr><td>42.8 tC/ha</td></tr>')),
  },
  {
    name: 'price hardcoded into index.html instead of read from market-data.js',
    mutate: (d) => edit(d, 'index.html', (t) => t.replace('<div id="homeRefPrices"></div>', '<div class="price-row"><span class="pr-sym">NBS-ARR</span><span class="pr-price">$24.00</span></div>')),
  },
  {
    name: 'index.html stops loading market-data.js',
    mutate: (d) => edit(d, 'index.html', (t) => t.replace('<script src="market-data.js"></script>\n', '')),
  },
  {
    name: 'news item with no source URL',
    mutate: (d) => edit(d, 'news-data.js', (t) => t.replace(/url:"https?:\/\/[^"]+"/, 'url:""')),
  },
  {
    name: 'compliance timeline item with no source',
    mutate: (d) => edit(d, 'compliance-data.js', (t) => t.replace('source:"https://uaelegislation.gov.ae/en/legislations/2558"', 'source:""')),
  },
  {
    name: 'standards item with no source URL',
    mutate: (d) => edit(d, 'standards-data.js', (t) => t.replace(/url: "https:\/\/icvcm\.org[^"]*"/, 'url: ""')),
  },
  {
    name: 'stale $107.5M market size reintroduced into prose',
    mutate: (d) => edit(d, 'research.html', (t) => t.replace('$173.2 million in 2025', '$107.5 million in 2023')),
  },
  {
    name: 'stale "44 Mtpa by 2035" attributed to the Jubail hub',
    mutate: (d) => edit(d, 'dashboard.html', (t) => t.replace('<body', '<!-- 44 Mtpa by 2035 --><body')),
  },
  {
    name: 'broken JSON-LD in research.html',
    mutate: (d) => edit(d, 'research.html', (t) => t.replace('{"@type":"Question"', '{"@type":Question', 1)),
  },
];

// Baseline: the real repo must pass, otherwise every result below is meaningless.
const clean = stage();
if (!gatePasses(clean)) {
  console.error('\nSELF-TEST ABORTED: the gate fails on the unmodified repo. Fix the data first.\n');
  fs.rmSync(clean, { recursive: true, force: true });
  process.exit(1);
}
fs.rmSync(clean, { recursive: true, force: true });

let escaped = 0;
console.log('\nGate self-test: each case reintroduces a real failure and must be caught.\n');

for (const c of cases) {
  const dir = stage();
  let caught;
  try {
    c.mutate(dir);
    caught = !gatePasses(dir);
  } catch (e) {
    console.error(`  ? ${c.name} -- mutation could not be applied (${e.message}). Treating as ESCAPED.`);
    caught = false;
  }
  fs.rmSync(dir, { recursive: true, force: true });

  if (caught) {
    console.log(`  caught   ${c.name}`);
  } else {
    escaped += 1;
    console.error(`  ESCAPED  ${c.name}`);
  }
}

if (escaped) {
  console.error(`\n${escaped} of ${cases.length} fabrications slipped past the gate. The gate is not trustworthy.\n`);
  process.exit(1);
}

console.log(`\nAll ${cases.length} fabrications caught. The gate has teeth.`);
console.log('It still cannot detect a plausible, well-formed lie with a real-looking URL.');
console.log('Only checking the source can do that.\n');
process.exit(0);
