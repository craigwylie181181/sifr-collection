/* Sifr Collection, market reference data.

   RULE: every value below must be traceable to a named, dated, publicly available source.
   The source name goes in `basis`, the URL goes in `src`. No value may be entered on the
   strength of "market reporting", a "class estimate", or an unattributed figure. If a number
   cannot be sourced, the row is deleted, not softened.

   EUA is a live compliance price refreshed by the daily data-refresh job.
   Voluntary figures are 2024 transaction data from Ecosystem Marketplace SOVCM 2025,
   published 29 May 2025. They are annual averages, not live prices, and are dated as such. */
window.SIFR_MARKET = {
  updated: "2026-07-18",
  mode: "reference",
  note: "Reference benchmarks from named public sources. EUA is a live compliance price. Voluntary figures are 2024 annual transaction averages from Ecosystem Marketplace, not live quotes.",
  prices: [
    { sym:"EUA", label:"EU Allowance (EU ETS)", value:"€79.50", change:"+0.39% d, vs €79.19", dir:"up", basis:"Trading Economics, EU ETS compliance", asof:"2026-07-17", src:"https://tradingeconomics.com/commodity/carbon" },
    { sym:"NBS-ARR", label:"Nature-based removal (ARR)", value:"$20.44", change:"+19%", dir:"up", basis:"EM SOVCM 2025", asof:"2024", src:"https://www.ecosystemmarketplace.com/publications/2025-state-of-the-voluntary-carbon-market-sovcm/" },
    { sym:"NBS-AVOID", label:"Reduction / avoidance credits", value:"$4.05", change:"-13%", dir:"dn", basis:"EM SOVCM 2025", asof:"2024", src:"https://www.ecosystemmarketplace.com/publications/2025-state-of-the-voluntary-carbon-market-sovcm/" },
    { sym:"REM-PREM", label:"Removals premium vs reductions", value:"+381%", change:"was +245%", dir:"up", basis:"EM SOVCM 2025", asof:"2024", src:"https://www.ecosystemmarketplace.com/publications/2025-state-of-the-voluntary-carbon-market-sovcm/" },
    { sym:"GS-PREM", label:"Gold Standard vs Verra (VCS)", value:"+53%", change:"$7.10 vs $4.65", dir:"up", basis:"EM SOVCM 2025", asof:"2024", src:"https://www.ecosystemmarketplace.com/publications/2025-state-of-the-voluntary-carbon-market-sovcm/" },
    { sym:"CCP-LFG", label:"Landfill gas, post CCP approval", value:"+35%", change:"H1 to H2", dir:"up", basis:"EM SOVCM 2025, ICVCM effect", asof:"2024", src:"https://www.ecosystemmarketplace.com/publications/2025-state-of-the-voluntary-carbon-market-sovcm/" },
    { sym:"BLUE-C", label:"Blue carbon (thin volume, 0.2 Mt)", value:"$29.72", change:"+257%", dir:"up", basis:"EM SOVCM 2025", asof:"2024", src:"https://www.ecosystemmarketplace.com/publications/2025-state-of-the-voluntary-carbon-market-sovcm/" },
    { sym:"ENG-REM", label:"Engineered removal (biochar)", value:"$160+", change:"▲", dir:"up", basis:"EM SOVCM 2025", asof:"2024", src:"https://www.ecosystemmarketplace.com/publications/2025-state-of-the-voluntary-carbon-market-sovcm/" }
  ],
  indices: [
    { sym:"RVCMC", label:"RVCMC credits auctioned", value:"6.1M t", basis:"2022 to 2024" },
    { sym:"VCM-AVG", label:"VCM average credit price", value:"$6.34", basis:"EM SOVCM 2025, 2024" },
    { sym:"MEA-VCM", label:"MEA voluntary market 2025", value:"$173.2M", basis:"Grand View Research" }
  ]
};
