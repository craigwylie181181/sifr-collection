/* Sifr Collection, market reference data.
   Real, sourced benchmark figures. The EUA compliance price is refreshed daily by the data-refresh job;
   voluntary figures are benchmark ranges from public market reporting, dated below. */
window.SIFR_MARKET = {
  updated: "2026-07-02",
  mode: "reference",
  note: "Reference benchmarks from public sources. EUA is a live compliance price; voluntary figures are published market ranges.",
  prices: [
    { sym:"EUA", label:"EU Allowance (EU ETS)", value:"€79.81", change:"-0.4%", dir:"dn", basis:"EU ETS compliance", asof:"2026-07-01" },
    { sym:"NBS-ARR", label:"Nature-based removal (ARR)", value:"$24", change:"▲", dir:"up", basis:"2025 market reporting", asof:"2025" },
    { sym:"NBS-AVOID", label:"Nature-based avoidance", value:"$2-5", change:"▼", dir:"dn", basis:"2025 market reporting", asof:"2025" },
    { sym:"GS-PREM", label:"Gold Standard premium", value:"+20-40%", change:"▲", dir:"up", basis:"vs comparable Verra", asof:"2025" },
    { sym:"BLUE-C", label:"Blue carbon (mangrove)", value:"$30-45", change:"▲", dir:"up", basis:"class estimate", asof:"2025" },
    { sym:"TECH-REM", label:"Durable tech removal", value:"$300+", change:"▲", dir:"up", basis:"2025 market reporting", asof:"2025" }
  ],
  indices: [
    { sym:"RVCMC", label:"RVCMC credits auctioned", value:"6.1M t", basis:"2022 to 2024" },
    { sym:"MEA-VCM", label:"MEA voluntary market 2023", value:"$107.5M", basis:"Grand View Research" }
  ]
};
