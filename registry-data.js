/* Sifr Collection, registry activity for the MENA region.
   RVCMC auction volumes are public and verified.

   Per-registry MENA issuance and retirement totals are read from CarbonPlan OffsetsDB
   (https://carbonplan.org/research/offsets-db), filtered to the covered countries.
   OffsetsDB was last updated 2 Jun 2026, so these totals are dated to that snapshot, not today.

   Of the 12 countries Sifr covers, 10 have projects in OffsetsDB: Saudi Arabia, UAE, Oman,
   Qatar, Bahrain, Iraq, Jordan, Egypt, Yemen and Syria. Kuwait and Lebanon return no projects,
   so they contribute nothing to these totals rather than being excluded by choice.

   Global Carbon Council is NOT one of the seven registries OffsetsDB collects (ACR, ART, CCB,
   CAR, GLD, ISO, VCS). Its row stays "Syncing" because there is no source for it here, not
   because a sync is pending. Do not fill it from an unsourced figure. */
window.SIFR_REGISTRY = {
  updated: "2026-07-18",
  note: "RVCMC auction volumes are public and verified. Verra and Gold Standard MENA totals are from CarbonPlan OffsetsDB, snapshot dated 2 Jun 2026, across the 10 covered countries that have registered projects. Global Carbon Council is not covered by OffsetsDB and has no published MENA total here.",
  auctions: [
    { operator:"RVCMC", volume:"1.4M tCO₂e", when:"2022", location:"Riyadh, KSA" },
    { operator:"RVCMC", volume:"2.2M tCO₂e", when:"Jun 2023", location:"Nairobi, Kenya" },
    { operator:"RVCMC", volume:"2.5M tCO₂e", when:"Nov 2024", location:"COP29, Baku" }
  ],
  auctionTotal: "6.1M tCO₂e",
  registries: [
    { name:"Verra (VCS)", scope:"MENA, 29 projects, OffsetsDB 2 Jun 2026", issued:"2.22M tCO₂e", retired:"216K tCO₂e" },
    { name:"Gold Standard", scope:"MENA, 17 projects, OffsetsDB 2 Jun 2026", issued:"4.28M tCO₂e", retired:"410K tCO₂e" },
    { name:"Global Carbon Council", scope:"GCC-based standard, not covered by OffsetsDB", issued:"Syncing", retired:"Syncing" }
  ]
};
