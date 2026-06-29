/* Sifr Collection, registry activity for the MENA region.
   RVCMC auction volumes are public and verified. Per-registry MENA issuance and retirement
   totals are filled by the daily job from CarbonPlan OffsetsDB and the registries. */
window.SIFR_REGISTRY = {
  updated: "2026-06-29",
  note: "RVCMC auction volumes are public and verified. Per-registry MENA issuance and retirement totals sync daily from CarbonPlan OffsetsDB and the public registries.",
  auctions: [
    { operator:"RVCMC", volume:"1.4M tCO₂e", when:"2022", location:"Riyadh, KSA" },
    { operator:"RVCMC", volume:"2.2M tCO₂e", when:"Jun 2023", location:"Nairobi, Kenya" },
    { operator:"RVCMC", volume:"2.5M tCO₂e", when:"Nov 2024", location:"COP29, Baku" }
  ],
  auctionTotal: "6.1M tCO₂e",
  registries: [
    { name:"Verra (VCS)", scope:"MENA projects", issued:"Syncing", retired:"Syncing" },
    { name:"Gold Standard", scope:"MENA projects", issued:"Syncing", retired:"Syncing" },
    { name:"Global Carbon Council", scope:"GCC-based standard", issued:"Syncing", retired:"Syncing" }
  ]
};
