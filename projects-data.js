/* Sifr Collection, project dataset.
   Single source of truth for the map, the table, the project cards and the detail panels.

   RULE: an entry may only claim registry status, a methodology, a credited tonnage or a price
   if that claim is verifiable in a named public source. Where a real initiative exists but is
   NOT a registered carbon project, `registered` is false and the entry says so plainly.
   No indicative prices. Sifr does not publish prices it cannot source.

   Audited 8 Jul 2026. Five entries were removed because no evidence could be found that they
   exist as carbon projects: Qassim Soil Restoration, Abu Dhabi Soil Sequestration, Nile Delta
   Mangrove, Dhofar Rangeland, Jordan Valley Watershed. Their areas, tonnages, methodologies
   and prices were not corroborated by any public source. Three surviving entries (AlUla, NEOM,
   Mesopotamian Marshes) are real initiatives that are not registered carbon projects and are
   now labelled as such. */
window.SIFR_PROJECTS = [
  {
    id:"alula", name:"AlUla Landscape Restoration", flag:"🇸🇦", cc:"KSA", country:"Saudi Arabia",
    type:"land", nature:"Removal", status:"Initiative", lat:26.62, lon:37.95,
    registered:false,
    area:"Not published", annual:"Not published", std:"Not registered", methodology:"n/a",
    registry:"Not a registered carbon project", vintage:"n/a", lifetime:"n/a", developer:"Royal Commission for AlUla",
    price:"Not listed", priceUnit:"no public price",
    coBenefits:["Native juniper and acacia woodland","Biodiversity","Cultural heritage landscape"],
    summary:"Native woodland restoration under the Royal Commission for AlUla. Not a registered carbon project.",
    detail:"The Royal Commission for AlUla runs a landscape restoration programme across the Hejaz mountains, planting native juniper and acacia inside a UNESCO-listed heritage landscape. RCU's stated goals are around 10 million trees and carbon neutrality by 2035. It is not registered on Verra, Gold Standard or any other carbon registry, and no credited tonnage exists. Tracked here as regional supply pipeline, not as issuable credits.",
    url:"https://www.rcu.gov.sa/en"
  },
  {
    id:"neom", name:"NEOM Regreening Programme", flag:"🇸🇦", cc:"KSA", country:"Saudi Arabia",
    type:"land", nature:"Removal", status:"Initiative", lat:27.9, lon:35.5,
    registered:false,
    area:"Not published", annual:"Not published", std:"Not registered", methodology:"n/a",
    registry:"Not a registered carbon project", vintage:"n/a", lifetime:"n/a", developer:"NEOM",
    price:"Not listed", priceUnit:"no public price",
    coBenefits:["Large-scale planting announced","Desert ecosystem restoration","Part of NEOM development"],
    summary:"NEOM's announced regreening and planting. Not a registered carbon project.",
    detail:"NEOM has announced tree planting and regreening across the Tabuk region, with figures given in corporate communications rather than project design documents. It carries no carbon registry listing and no credited tonnage. Note: the 'Green Spine' name belongs to a separate Dubai linear-park project by URB and should not be attached to NEOM. Tracked as announced pipeline, not as issuable credits.",
    url:"https://www.neom.com/"
  },
  {
    id:"redsea", name:"Red Sea Mangrove Belt", flag:"🇸🇦", cc:"KSA", country:"Saudi Arabia",
    type:"blue", nature:"Removal", status:"Development", lat:22.0, lon:38.5,
    registered:false,
    area:"Not published", annual:"Not published", std:"Not registered", methodology:"n/a",
    registry:"Not a registered carbon project", vintage:"n/a", lifetime:"n/a", developer:"Red Sea Global",
    price:"Not listed", priceUnit:"no public price",
    coBenefits:["50M mangroves by 2030 target","Coastal resilience","Tourism and conservation"],
    summary:"Red Sea Global's stated 50 million mangrove commitment by 2030.",
    detail:"Red Sea Global has publicly committed to planting 50 million mangroves by 2030 along the Saudi Red Sea coast. It separately reports more than 3 million grey mangroves restored, which is a restoration count rather than a running total toward the 50 million target. No carbon registry listing and no credited tonnage. One of the region's most watched blue carbon efforts, but nothing is issuable yet.",
    url:"https://www.redseaglobal.com/"
  },
  {
    id:"mesopotamia", name:"Mesopotamian Marshes", flag:"🇮🇶", cc:"IRQ", country:"Iraq",
    type:"redd", nature:"Avoidance", status:"Initiative", lat:30.9, lon:47.0,
    registered:false,
    area:"Not published", annual:"Not published", std:"Not registered", methodology:"n/a",
    registry:"Not a registered carbon project", vintage:"n/a", lifetime:"n/a", developer:"UNDP, Wetlands International and partners",
    price:"Not listed", priceUnit:"no public price",
    coBenefits:["UNESCO heritage protection","Reed-bed biodiversity","Water and marsh restoration"],
    summary:"UNESCO-listed wetland under active restoration. Not a carbon crediting project.",
    detail:"The Mesopotamian marshes are a UNESCO World Heritage site under restoration by UNDP, Wetlands International and partners. The work is donor-funded conservation, not carbon crediting: there is no registry listing, no methodology and no credited tonnage. Included because a future wetland crediting project here would be regionally significant, not because one exists.",
    url:"https://whc.unesco.org/en/list/1481/"
  },
  {
    id:"habshan", name:"ADNOC Habshan CCS", flag:"🇦🇪", cc:"UAE", country:"United Arab Emirates",
    type:"capture", nature:"Reduction", status:"Development", lat:24.05, lon:53.65,
    registered:false,
    area:"Industrial site", annual:"1,500,000 tCO₂e/yr capture", std:"CCS, operational", methodology:"Carbon capture and geological storage",
    registry:"Not a credit listing", vintage:"n/a", lifetime:"Asset life", developer:"ADNOC",
    price:"Not listed", priceUnit:"operational decarbonisation",
    coBenefits:["Triples ADNOC capture to 2.3 Mtpa","Feeds 10 Mtpa-by-2030 target","Permanent geological storage"],
    summary:"1.5 Mtpa capture, building on Al Reyadah CCUS.",
    detail:"Capture and permanent storage of 1.5 million tonnes a year, tripling ADNOC capture capacity to 2.3 Mtpa toward a 10 Mtpa 2030 target. Builds on Al Reyadah, the region's first commercial CCUS plant. This is operational decarbonisation of ADNOC's own emissions, not a voluntary credit listing, but it is central to the region's carbon picture.",
    url:"https://www.adnoc.ae/"
  },
  {
    id:"jubail", name:"Aramco Jubail CCUS Hub", flag:"🇸🇦", cc:"KSA", country:"Saudi Arabia",
    type:"capture", nature:"Reduction", status:"Development", lat:27.0, lon:49.65,
    registered:false,
    area:"Industrial hub", annual:"Up to 9,000,000 tCO₂e/yr by end-2027", std:"CCUS, operational", methodology:"Carbon capture, utilisation and storage",
    registry:"Not a credit listing", vintage:"n/a", lifetime:"Asset life", developer:"Aramco (60%), Linde (20%), SLB (20%)",
    price:"Not listed", priceUnit:"operational decarbonisation",
    coBenefits:["One of the world's largest CCUS hubs","Later phases announced without figures","Joint venture scale"],
    summary:"Up to 9 Mtpa by end-2027, phase one of a joint venture.",
    detail:"One of the world's largest planned CCUS hubs, targeting up to 9 million tonnes a year by end-2027 on the Saudi east coast, developed by Aramco with Linde and SLB. Aramco has announced later phases without quantifying them. Note: the widely cited 44 Mtpa by 2035 figure is Saudi Arabia's national CCS target, not the Jubail hub's capacity, and should not be attributed to this project. Operational capture, not a credit listing.",
    url:"https://www.aramco.com/"
  },
  {
    id:"raslaffan", name:"QatarEnergy Ras Laffan CCS", flag:"🇶🇦", cc:"QAT", country:"Qatar",
    type:"capture", nature:"Reduction", status:"Development", lat:25.9, lon:51.55,
    registered:false,
    area:"Industrial site", annual:"Up to 4.1M tCO₂e/yr by 2030", std:"CCS, operational", methodology:"Carbon capture and storage",
    registry:"Not a credit listing", vintage:"n/a", lifetime:"Asset life", developer:"QatarEnergy",
    price:"Not listed", priceUnit:"operational decarbonisation",
    coBenefits:["More than 11 Mtpa across assets by 2035","Tied to North Field LNG","Permanent storage"],
    summary:"Up to 4.1 Mtpa by 2030, tied to North Field LNG.",
    detail:"CO2 capture tied to North Field LNG, targeting up to 4.1 million tonnes a year by 2030 and more than 11 Mtpa across QatarEnergy assets by 2035. Operational capture, not a credit listing.",
    url:"https://www.qatarenergy.qa/"
  },
  {
    id:"hajar", name:"44.01 Al Qabil Mineralisation", flag:"🇴🇲", cc:"OMN", country:"Oman",
    type:"capture", nature:"Removal", status:"Development", lat:22.9, lon:58.4,
    registered:false,
    area:"Al Qabil concession", annual:"Not published", std:"Mineralisation removal", methodology:"Peridotite mineralisation; CO₂ from DAC partners or industrial capture",
    registry:"Early issuances", vintage:"Early issuances", lifetime:"Permanent", developer:"44.01 with Oman Ministry of Energy and Minerals",
    price:"Not listed", priceUnit:"permanent removal credits",
    coBenefits:["World-first commercial peridotite mineralisation","Permanent, high-durability removal","XPRIZE-recognised"],
    summary:"World-first peridotite mineralisation concession. Storage, not capture.",
    detail:"The world's first commercial-scale peridotite mineralisation concession, at Al Qabil in Oman's Samail Ophiolite. Important distinction: 44.01 is a mineralisation and storage company, not a capture company. Its concession mineralises CO2 sourced from the atmosphere or from industrial processes, with direct air capture supplied by partners such as Mission Zero and Aircapture rather than by 44.01 itself. The output is permanent removal, the highest-durability category in the voluntary market.",
    url:"https://www.4401.earth/"
  },
  {
    id:"benban", name:"Benban Solar Park", flag:"🇪🇬", cc:"EGY", country:"Egypt",
    type:"renewable", nature:"Reduction", status:"Active", lat:24.46, lon:32.74,
    registered:true,
    area:"~1.8 GW (park)", annual:"~2,000,000 tCO₂e/yr avoided (park-wide)", std:"Global Carbon Council", methodology:"Grid-connected renewable electricity",
    registry:"Global Carbon Council (bundled sub-projects, ~830 MW)", vintage:"Issuing", lifetime:"25 years", developer:"Multiple IPPs in the park",
    price:"Not listed", priceUnit:"avoided-emissions credits",
    coBenefits:["One of the world's largest solar complexes","Jobs and grid capacity","Displaces fossil generation"],
    summary:"~1.8 GW solar near Aswan. GCC registration covers bundled sub-projects, not the whole park.",
    detail:"One of the world's largest solar complexes, about 1.8 GW near Aswan, avoiding roughly 2 million tonnes of CO2 a year park-wide. Carbon registration under the Global Carbon Council covers bundled sub-projects totalling around 830 MW, not the full park, so park-wide avoidance and credited volume are not the same number. As avoided-emissions credits from grid renewables, additionality is increasingly questioned as solar becomes cost-competitive, which weighs on pricing.",
    url:"https://globalcarboncouncil.com/"
  },
  {
    id:"tafila", name:"Tafila Wind Farm", flag:"🇯🇴", cc:"JOR", country:"Jordan",
    type:"renewable", nature:"Reduction", status:"Active", lat:30.8, lon:35.6,
    registered:false,
    area:"117 MW", annual:"~224,000 tCO₂e/yr avoided", std:"No registration verified", methodology:"Grid-connected wind power",
    registry:"No carbon registry listing verified", vintage:"n/a", lifetime:"20 years", developer:"Jordan Wind Project Company",
    price:"Not listed", priceUnit:"n/a",
    coBenefits:["Region's first utility-scale wind","Energy security","Local employment"],
    summary:"117 MW, the region's first utility-scale wind farm. No verified carbon registration.",
    detail:"Jordan and the region's first utility-scale wind farm, 116.85 MW at Tafila, avoiding about 224,000 tonnes of CO2 a year versus conventional generation according to Masdar. Commissioned in 2015. Sifr previously listed this as CDM or Verra registered; no such registration could be verified in either registry, and the claim has been withdrawn. The avoided-emissions figure is the developer's, not a credited volume.",
    url:"https://jordanwind.com/"
  },
  {
    id:"sharjahwte", name:"Sharjah Waste-to-Energy", flag:"🇦🇪", cc:"UAE", country:"United Arab Emirates",
    type:"waste", nature:"Reduction", status:"Active", lat:25.3, lon:55.5,
    registered:false,
    area:"30 MW", annual:"~450,000 tCO₂e/yr displaced", std:"Operational", methodology:"Waste-to-energy, landfill diversion",
    registry:"Not a credit listing", vintage:"Since 2022", lifetime:"Asset life", developer:"Bee'ah and Masdar (Emirates Waste to Energy)",
    price:"Not listed", priceUnit:"n/a",
    coBenefits:["UAE's first commercial WtE plant","Diverts waste from landfill","Phase-two expansion announced"],
    summary:"The UAE's first commercial waste-to-energy plant, operating since 2022.",
    detail:"The UAE's first commercial-scale waste-to-energy plant, inaugurated in May 2022, displacing almost 450,000 tonnes of CO2 a year by diverting waste from landfill and gas-fired power. A Bee'ah and Masdar joint venture with a phase-two expansion announced. Waste-to-energy credits hinge on the avoided-methane baseline; no carbon credit listing is claimed here.",
    url:"https://www.beeahgroup.com/"
  }
];
