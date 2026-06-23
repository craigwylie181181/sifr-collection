/* Sifr Collection, MENA carbon compliance calendar.
   Regulatory status and dated obligations per jurisdiction, from public sources.
   Information only, not legal or compliance advice. Refreshable by the daily data job. */
window.SIFR_COMPLIANCE = {
  updated: "2026-06-23",
  note: "Regulatory status and milestones from public sources. Information only, not legal advice. Verify obligations against the primary legislation and a qualified adviser.",

  /* Per-jurisdiction status board: the data a generic price tracker does not carry. */
  jurisdictions: [
    {
      cc:"UAE", name:"United Arab Emirates", flag:"🇦🇪",
      bindingLaw:{ has:true, label:"Yes, Federal Decree-Law No. 11 of 2024" },
      reporting:{ has:true, label:"Mandatory, in force" },
      venue:{ has:true, label:"ADGM regulated, ACX exchange" },
      penalty:"Up to AED 2,000,000",
      netZero:"2050",
      next:"Third NDC: 47% cut by 2035",
      summary:"The region's only binding corporate climate law and the only fully regulated carbon exchange. The compliance front-runner."
    },
    {
      cc:"KSA", name:"Saudi Arabia", flag:"🇸🇦",
      bindingLaw:{ has:false, label:"No binding corporate law yet" },
      reporting:{ has:false, label:"Not mandatory" },
      venue:{ has:true, label:"RVCMC voluntary market, GCOM in development" },
      penalty:"n/a",
      netZero:"2060",
      next:"RVCMC: 30M+ tonnes committed by 2030",
      summary:"Largest voluntary market and supply pipeline. GCOM, a national crediting mechanism, is the one to watch for a future compliance layer."
    },
    {
      cc:"EGY", name:"Egypt", flag:"🇪🇬",
      bindingLaw:{ has:false, label:"No binding corporate law" },
      reporting:{ has:false, label:"Not mandatory" },
      venue:{ has:true, label:"Regulated VCM under the FRA, on the EGX" },
      penalty:"n/a",
      netZero:"No firm year",
      next:"Scale the FRA voluntary market",
      summary:"Africa's first regulated voluntary carbon market. Regulated venue, but no binding reporting obligation on corporates."
    },
    {
      cc:"OMN", name:"Oman", flag:"🇴🇲",
      bindingLaw:{ has:false, label:"No binding corporate law" },
      reporting:{ has:false, label:"Not mandatory" },
      venue:{ has:false, label:"No domestic exchange" },
      penalty:"n/a",
      netZero:"2050",
      next:"NDC: 7% reduction by 2030",
      summary:"Net zero by 2050 and home to the region's premier permanent-removal project. No compliance market yet."
    },
    {
      cc:"QAT", name:"Qatar", flag:"🇶🇦",
      bindingLaw:{ has:false, label:"No binding corporate law" },
      reporting:{ has:false, label:"Not mandatory" },
      venue:{ has:false, label:"No domestic exchange" },
      penalty:"n/a",
      netZero:"No firm year",
      next:"NDC: 25% reduction by 2030",
      summary:"The Gulf outlier with no net-zero year. Carbon effort is operational CCS at Ras Laffan, not a market."
    },
    {
      cc:"BHR", name:"Bahrain", flag:"🇧🇭",
      bindingLaw:{ has:false, label:"No binding corporate law" },
      reporting:{ has:false, label:"Not mandatory" },
      venue:{ has:false, label:"No domestic exchange" },
      penalty:"n/a",
      netZero:"2060",
      next:"NDC: 30% reduction by 2035",
      summary:"Net zero by 2060 with interim targets. Market and project activity is early-stage."
    },
    {
      cc:"KWT", name:"Kuwait", flag:"🇰🇼",
      bindingLaw:{ has:false, label:"No binding corporate law" },
      reporting:{ has:false, label:"Not mandatory" },
      venue:{ has:false, label:"No domestic exchange" },
      penalty:"n/a",
      netZero:"2060 (oil sector 2050)",
      next:"Conditional NDC",
      summary:"Net zero by 2060, oil and gas sector by 2050. Market infrastructure is nascent."
    },
    {
      cc:"JOR", name:"Jordan", flag:"🇯🇴",
      bindingLaw:{ has:false, label:"No binding corporate law" },
      reporting:{ has:false, label:"Not mandatory" },
      venue:{ has:false, label:"No domestic exchange" },
      penalty:"n/a",
      netZero:"No firm year",
      next:"NDC: 31% reduction by 2030 (with support)",
      summary:"Strong renewables and a 31% conditional NDC. No compliance market."
    }
  ],

  /* Dated deadline timeline: the calendar a buyer actually plans against.
     sort by `year`, then render under year headings. type: compliance | market | target. */
  timeline: [
    {
      year:2025, dateLabel:"30 May 2025", cc:"UAE", flag:"🇦🇪", jurisdiction:"United Arab Emirates",
      title:"UAE Climate Law takes effect", type:"compliance", status:"In force",
      detail:"Federal Decree-Law No. 11 of 2024 on the Reduction of Climate Change Effects entered into force, starting the transition to mandatory emissions reporting and reduction plans for all entities, free zones included.",
      source:"https://uaelegislation.gov.ae/en/legislations/2558"
    },
    {
      year:2026, dateLabel:"30 May 2026", cc:"UAE", flag:"🇦🇪", jurisdiction:"United Arab Emirates",
      title:"UAE full compliance date reached", type:"compliance", status:"In force",
      detail:"Full compliance with the UAE Climate Law is now required. Every public and private entity must report greenhouse gas emissions and submit a reduction plan. Penalties run up to AED 2 million. Reporting is an ongoing annual obligation from here.",
      source:"https://uaelegislation.gov.ae/en/legislations/2558"
    },
    {
      year:2026, dateLabel:"Active 2026", cc:"UAE", flag:"🇦🇪", jurisdiction:"United Arab Emirates",
      title:"ADGM regulates carbon as financial instruments, ACX exchange live", type:"market", status:"Active",
      detail:"Abu Dhabi Global Market regulates carbon credits and allowances as financial instruments, with ACX operating the first fully regulated exchange and clearing house. A carbon trade can clear inside a real regulatory perimeter.",
      source:"https://www.adgm.com/"
    },
    {
      year:2026, dateLabel:"Active 2026", cc:"EGY", flag:"🇪🇬", jurisdiction:"Egypt",
      title:"Egypt voluntary carbon market trading under the FRA", type:"market", status:"Active",
      detail:"Egypt's regulated voluntary carbon market lists and trades credits on the Egyptian Exchange under the Financial Regulatory Authority. Africa's first regulated VCM and a second large North African venue.",
      source:"https://fra.gov.eg/"
    },
    {
      year:2026, dateLabel:"In development", cc:"KSA", flag:"🇸🇦", jurisdiction:"Saudi Arabia",
      title:"Saudi GCOM national crediting mechanism", type:"market", status:"Developing",
      detail:"The Greenhouse Gas Crediting and Offsetting Mechanism is Saudi Arabia's own national crediting standard, developing alongside the RVCMC voluntary market. No firm launch date, but the foundation for any future Saudi compliance layer.",
      source:"https://www.vision2030.gov.sa/"
    },
    {
      year:2030, dateLabel:"By 2030", cc:"KSA", flag:"🇸🇦", jurisdiction:"Saudi Arabia",
      title:"RVCMC to deliver 30M+ tonnes of credits", type:"market", status:"Committed",
      detail:"RVCMC has signed agreements to deliver more than 30 million tonnes of carbon credits by 2030, against roughly 6.1 million auctioned across 2022 to 2024. The delivery gap is the key supply risk to watch.",
      source:"https://vcm.sa/"
    },
    {
      year:2030, dateLabel:"By 2030", cc:"UAE", flag:"🇦🇪", jurisdiction:"United Arab Emirates",
      title:"UAE 100 million mangroves target", type:"target", status:"On track",
      detail:"The National Carbon Sequestration Project targets 100 million mangroves by 2030, with more than 30 million already planted. The region's flagship blue carbon supply programme.",
      source:"https://www.moccae.gov.ae/"
    },
    {
      year:2030, dateLabel:"By 2030", cc:"OMN", flag:"🇴🇲", jurisdiction:"Oman",
      title:"Oman NDC: 7% emissions reduction", type:"target", status:"Pledged",
      detail:"Oman's Nationally Determined Contribution targets a 7% reduction by 2030, with the energy transition built around green hydrogen and permanent mineral removal.",
      source:"https://www.unfccc.int/"
    },
    {
      year:2030, dateLabel:"By 2030", cc:"EGY", flag:"🇪🇬", jurisdiction:"Egypt",
      title:"Egypt conditional sector targets", type:"target", status:"Pledged",
      detail:"Egypt's NDC sets conditional sector targets to 2030, backed by one of the world's largest solar build-outs at Benban.",
      source:"https://www.unfccc.int/"
    },
    {
      year:2035, dateLabel:"By 2035", cc:"UAE", flag:"🇦🇪", jurisdiction:"United Arab Emirates",
      title:"UAE third NDC: 47% reduction", type:"target", status:"Pledged",
      detail:"The UAE's third Nationally Determined Contribution targets a 47% reduction by 2035, tightening the demand signal that the Climate Law already created.",
      source:"https://www.unfccc.int/"
    },
    {
      year:2035, dateLabel:"By 2035", cc:"QAT", flag:"🇶🇦", jurisdiction:"Qatar",
      title:"QatarEnergy CCS: 11+ Mtpa", type:"target", status:"Pledged",
      detail:"Qatar's carbon effort centres on QatarEnergy's CCS programme at Ras Laffan, targeting more than 11 million tonnes a year across assets by 2035 alongside North Field LNG.",
      source:"https://www.qatarenergy.qa/"
    },
    {
      year:2035, dateLabel:"By 2035", cc:"BHR", flag:"🇧🇭", jurisdiction:"Bahrain",
      title:"Bahrain NDC: 30% reduction", type:"target", status:"Pledged",
      detail:"Bahrain's interim NDC targets a 30% reduction by 2035 on the path to net zero by 2060.",
      source:"https://www.unfccc.int/"
    },
    {
      year:2050, dateLabel:"By 2050", cc:"UAE", flag:"🇦🇪", jurisdiction:"United Arab Emirates",
      title:"UAE net zero", type:"target", status:"Pledged",
      detail:"The first Gulf state to commit to net zero, targeted for 2050.",
      source:"https://www.moccae.gov.ae/"
    },
    {
      year:2050, dateLabel:"By 2050", cc:"OMN", flag:"🇴🇲", jurisdiction:"Oman",
      title:"Oman net zero", type:"target", status:"Pledged",
      detail:"Oman targets net zero by 2050, anchored by green hydrogen and permanent removal.",
      source:"https://www.unfccc.int/"
    },
    {
      year:2060, dateLabel:"By 2060", cc:"KSA", flag:"🇸🇦", jurisdiction:"Saudi Arabia",
      title:"Saudi Arabia net zero", type:"target", status:"Pledged",
      detail:"Net zero by 2060 under the Saudi Green Initiative and Circular Carbon Economy framework, including 10 billion trees.",
      source:"https://www.sgi.gov.sa/"
    },
    {
      year:2060, dateLabel:"By 2060", cc:"BHR", flag:"🇧🇭", jurisdiction:"Bahrain",
      title:"Bahrain net zero", type:"target", status:"Pledged",
      detail:"Bahrain targets net zero by 2060 with interim reduction milestones.",
      source:"https://www.unfccc.int/"
    },
    {
      year:2060, dateLabel:"By 2060", cc:"KWT", flag:"🇰🇼", jurisdiction:"Kuwait",
      title:"Kuwait net zero", type:"target", status:"Pledged",
      detail:"Kuwait targets net zero across total emissions by 2060, and across the oil and gas sector by 2050.",
      source:"https://www.unfccc.int/"
    }
  ]
};
