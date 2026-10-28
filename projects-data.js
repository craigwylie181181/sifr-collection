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
   now labelled as such.

   Updated 28 Oct 2026. Figures for existing entries re-checked against the source page in each
   `url` (several evidence links now point to the specific page, not a homepage). Ten projects
   added, each verified on its registry page or developer/government source: Ras Ghareb (Gold
   Standard), Zafarana KfW IV, Zafarana 8, Amman Al-Ghabawi LFG and Shams 1 (UN CDM), Al Reyadah,
   SABIC Jubail CCU, Aramco DAC test unit, ADNOC/44.01 Fujairah pilot, Abu Dhabi mangroves. */
window.SIFR_PROJECTS = [
  {
    id:"alula", name:"AlUla Landscape Restoration", flag:"🇸🇦", cc:"KSA", country:"Saudi Arabia",
    type:"land", nature:"Removal", status:"Initiative", lat:26.62, lon:37.95,
    registered:false,
    area:"1,540 km² (Sharaan Nature Reserve)", annual:"Not published", std:"Not registered", methodology:"n/a",
    registry:"Not a registered carbon project", vintage:"n/a", lifetime:"n/a", developer:"Royal Commission for AlUla",
    price:"Not listed", priceUnit:"no public price",
    coBenefits:["Native juniper and acacia woodland","Biodiversity","Cultural heritage landscape"],
    summary:"Native woodland restoration under the Royal Commission for AlUla. 500,000 trees and shrubs planted by Dec 2024. Not a registered carbon project.",
    detail:"The Royal Commission for AlUla runs a landscape restoration programme across the Hejaz mountains, planting native juniper and acacia inside a UNESCO-listed heritage landscape. RCU's stated goals are around 10 million trees and carbon neutrality by 2035. It is not registered on Verra, Gold Standard or any other carbon registry, and no credited tonnage exists. Tracked here as regional supply pipeline, not as issuable credits.",
    url:"https://www.rcu.gov.sa/en/media-resources/news-press/rcu-plants-500,000-trees"
  },
  {
    id:"neom", name:"NEOM Regreening Programme", flag:"🇸🇦", cc:"KSA", country:"Saudi Arabia",
    type:"land", nature:"Removal", status:"Initiative", lat:27.9, lon:35.5,
    registered:false,
    area:"≥1.5 million ha (rehabilitation target)", annual:"Not published", std:"Not registered", methodology:"n/a",
    registry:"Not a registered carbon project", vintage:"n/a", lifetime:"n/a", developer:"NEOM",
    price:"Not listed", priceUnit:"no public price",
    coBenefits:["Large-scale planting announced","Desert ecosystem restoration","Part of NEOM development"],
    summary:"Target: rehabilitate at least 1.5 million hectares and return 100 million native trees, shrubs and grasses by 2030. Not a registered carbon project.",
    detail:"NEOM has announced tree planting and regreening across the Tabuk region, with figures given in corporate communications rather than project design documents. It carries no carbon registry listing and no credited tonnage. Note: the 'Green Spine' name belongs to a separate Dubai linear-park project by URB and should not be attached to NEOM. Tracked as announced pipeline, not as issuable credits.",
    url:"https://www.neom.com/en-us/newsroom/neom-regreening-initiative"
  },
  {
    id:"redsea", name:"Red Sea Mangrove Belt", flag:"🇸🇦", cc:"KSA", country:"Saudi Arabia",
    type:"blue", nature:"Removal", status:"Development", lat:22.0, lon:38.5,
    registered:false,
    area:"~50 million mangroves (commitment)", annual:"Not published", std:"Not registered", methodology:"n/a",
    registry:"Not a registered carbon project", vintage:"n/a", lifetime:"n/a", developer:"Red Sea Global",
    price:"Not listed", priceUnit:"no public price",
    coBenefits:["50M mangroves by 2030 target","Coastal resilience","Tourism and conservation"],
    summary:"Red Sea Global's commitment to around 50 million mangroves; over 1 million seedlings transplanted from its nursery.",
    detail:"Red Sea Global has publicly committed to planting 50 million mangroves by 2030 along the Saudi Red Sea coast. It separately reports more than 3 million grey mangroves restored, which is a restoration count rather than a running total toward the 50 million target. No carbon registry listing and no credited tonnage. One of the region's most watched blue carbon efforts, but nothing is issuable yet.",
    url:"https://www.redseaglobal.com/en/portfolio/projects/mangrove-nursery/"
  },
  {
    id:"mesopotamia", name:"Mesopotamian Marshes", flag:"🇮🇶", cc:"IRQ", country:"Iraq",
    type:"redd", nature:"Avoidance", status:"Initiative", lat:30.9, lon:47.0,
    registered:false,
    area:"210,000+ ha (wetland core) + 200,000 ha buffer", annual:"Not published", std:"Not registered", methodology:"n/a",
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
    area:"Industrial site", annual:"1.5 Mtpa capture capacity (planned)", std:"CCS, FID Sep 2023", methodology:"Carbon capture and geological storage",
    registry:"Not a credit listing", vintage:"n/a", lifetime:"Asset life", developer:"ADNOC",
    price:"Not listed", priceUnit:"operational decarbonisation",
    coBenefits:["Triples ADNOC capture to 2.3 Mtpa","Feeds 10 Mtpa-by-2030 target","Permanent geological storage"],
    summary:"1.5 Mtpa capture project (FID 2023), building on Al Reyadah CCUS.",
    detail:"Capture and permanent storage of 1.5 million tonnes a year, tripling ADNOC capture capacity to 2.3 Mtpa toward a 10 Mtpa 2030 target. Builds on Al Reyadah, the region's first commercial CCUS plant. This is operational decarbonisation of ADNOC's own emissions, not a voluntary credit listing, but it is central to the region's carbon picture.",
    url:"https://www.adnoc.ae/en/news-and-media/press-releases/2023/adnoc-to-invest-in-one-of-the-largest-integrated-carbon-capture-projects-in-mena"
  },
  {
    id:"jubail", name:"Aramco Jubail CCUS Hub", flag:"🇸🇦", cc:"KSA", country:"Saudi Arabia",
    type:"capture", nature:"Reduction", status:"Development", lat:27.0, lon:49.65,
    registered:false,
    area:"Industrial hub", annual:"Up to 9,000,000 tCO₂e/yr by end-2027", std:"CCUS, under construction", methodology:"Carbon capture, utilisation and storage",
    registry:"Not a credit listing", vintage:"n/a", lifetime:"Asset life", developer:"Aramco (60%), Linde (20%), SLB (20%)",
    price:"Not listed", priceUnit:"operational decarbonisation",
    coBenefits:["One of the world's largest CCUS hubs","Later phases announced without figures","Joint venture scale"],
    summary:"Up to 9 Mtpa by end-2027, phase one of a joint venture.",
    detail:"One of the world's largest planned CCUS hubs, targeting up to 9 million tonnes a year by end-2027 on the Saudi east coast, developed by Aramco with Linde and SLB. Aramco has announced later phases without quantifying them. Note: the widely cited 44 Mtpa by 2035 figure is Saudi Arabia's national CCS target, not the Jubail hub's capacity, and should not be attributed to this project. Operational capture, not a credit listing.",
    url:"https://www.aramco.com/en/news-media/news/2024/aramco-linde-and-slb-sign-shareholders-agreement-for-one-of-the-largest-ccs-hubs-globally"
  },
  {
    id:"raslaffan", name:"QatarEnergy Ras Laffan CCS", flag:"🇶🇦", cc:"QAT", country:"Qatar",
    type:"capture", nature:"Reduction", status:"Active", lat:25.9, lon:51.55,
    registered:false,
    area:"Industrial site", annual:"2.2 Mtpa operating since 2019; 4.1 Mtpa project contracted", std:"CCS, operational", methodology:"Carbon capture and storage",
    registry:"Not a credit listing", vintage:"n/a", lifetime:"Asset life", developer:"QatarEnergy",
    price:"Not listed", priceUnit:"operational decarbonisation",
    coBenefits:["More than 11 Mtpa across assets by 2035","Tied to North Field LNG","Permanent storage"],
    summary:"Operating since 2019 at 2.2 Mtpa, with more than 8.9 Mt stored. A further 4.1 Mtpa project is contracted.",
    detail:"QatarEnergy launched its first CCS project at Ras Laffan in 2019 with a capacity of 2.2 Mtpa and reports more than 8.9 million tonnes of CO2 captured and stored since then. An EPC contract has been awarded for a further project to capture and store up to 4.1 Mtpa, and the company targets over 11 Mtpa of CCS capacity by 2035. Operational capture, not a credit listing.",
    url:"https://www.qatarenergy.qa/en/Sustainability/Pages/ClimateChangeAction.aspx"
  },
  {
    id:"hajar", name:"44.01 Al Qabil Mineralisation", flag:"🇴🇲", cc:"OMN", country:"Oman",
    type:"capture", nature:"Removal", status:"Development", lat:22.9, lon:58.4,
    registered:false,
    area:"Al Qabil concession", annual:"Not published", std:"Mineralisation removal", methodology:"Peridotite mineralisation; CO₂ from DAC partners or industrial capture",
    registry:"No registry listing found", vintage:"n/a", lifetime:"Permanent", developer:"44.01 with Oman Ministry of Energy and Minerals",
    price:"Not listed", priceUnit:"permanent removal credits",
    coBenefits:["World-first commercial peridotite mineralisation","Permanent, high-durability removal","XPRIZE-recognised"],
    summary:"World-first peridotite mineralisation concession. Storage, not capture.",
    detail:"The world's first commercial-scale peridotite mineralisation concession, at Al Qabil in Oman's Samail Ophiolite. Important distinction: 44.01 is a mineralisation and storage company, not a capture company. Its concession mineralises CO2 sourced from the atmosphere or from industrial processes, with direct air capture supplied by partners such as Mission Zero and Aircapture rather than by 44.01 itself. The output is permanent removal, the highest-durability category in the voluntary market.",
    url:"https://www.4401.earth/blog/44-01-signs-agreement-with-oman-s-ministry-of-energy-and-minerals-for-a-first-of-its-kind-carbon-removal-project"
  },
  {
    id:"benban", name:"Benban Solar Park", flag:"🇪🇬", cc:"EGY", country:"Egypt",
    type:"renewable", nature:"Reduction", status:"Active", lat:24.46, lon:32.74,
    registered:true,
    area:"830 MW registered (GCC bundles)", annual:"~1,165,000 tCO₂e/yr (registered bundles, avg)", std:"Global Carbon Council", methodology:"Grid-connected renewable electricity",
    registry:"Global Carbon Council (five bundled sub-projects, 830 MW)", vintage:"Issuing", lifetime:"25 years", developer:"Multiple IPPs in the park",
    price:"Not listed", priceUnit:"avoided-emissions credits",
    coBenefits:["One of the world's largest solar complexes","Jobs and grid capacity","Displaces fossil generation"],
    summary:"Solar park near Aswan. Five GCC-registered bundles total 830 MW and ~1.17 Mt CO₂e a year.",
    detail:"One of the world's largest solar complexes, near Aswan. Five bundled sub-projects registered with the Global Carbon Council total 830 MW, with an average emission reduction of about 1.17 million tCO2e a year; the registration covers these bundles, not the whole park, so park-wide avoidance is larger than the credited volume. As avoided-emissions credits from grid renewables, additionality is increasingly questioned as solar becomes cost-competitive, which weighs on pricing.",
    url:"https://globalcarboncouncil.com/africas-first-gcc-registered-solar-triumph-benban-solar-park-bundled-project/"
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
    url:"https://jordanwind.com/who-we-are/"
  },
  {
    id:"sharjahwte", name:"Sharjah Waste-to-Energy", flag:"🇦🇪", cc:"UAE", country:"United Arab Emirates",
    type:"waste", nature:"Reduction", status:"Active", lat:25.3, lon:55.5,
    registered:false,
    area:"30 MW (80,000 m² plant)", annual:"~450,000 tCO₂e/yr displaced", std:"Operational", methodology:"Waste-to-energy, landfill diversion",
    registry:"Not a credit listing", vintage:"Since 2022", lifetime:"Asset life", developer:"Bee'ah and Masdar (Emirates Waste to Energy)",
    price:"Not listed", priceUnit:"n/a",
    coBenefits:["UAE's first commercial WtE plant","Diverts waste from landfill","Phase-two expansion announced"],
    summary:"The UAE's first commercial waste-to-energy plant, operating since 2022. Phase two aims for ~60 MW.",
    detail:"The UAE's first commercial-scale waste-to-energy plant, inaugurated in May 2022, displacing almost 450,000 tonnes of CO2 a year by diverting waste from landfill and gas-fired power. A Bee'ah and Masdar joint venture with a phase-two expansion announced. Waste-to-energy credits hinge on the avoided-methane baseline; no carbon credit listing is claimed here.",
    url:"https://www.beeahgroup.com/beeah-and-masdar-announce-phase-two-expansion-of-sharjah-waste-to-energy-plant-doubling-capacity-and-clean-energy-contributions/"
  },
  {
    id:"rasghareb", name:"Ras Ghareb Wind Energy", flag:"🇪🇬", cc:"EGY", country:"Egypt",
    type:"renewable", nature:"Reduction", status:"Active", lat:28.36, lon:33.08,
    registered:true,
    area:"262.5 MW", annual:"~583,360 credits/yr (registry estimate)", std:"Gold Standard", methodology:"Grid-connected wind power",
    registry:"Gold Standard (GS ID 11557)", vintage:"Issuing", lifetime:"Asset life", developer:"Ras Ghareb Wind Energy SAE (ENGIE, Toyota Tsusho, Eurus, Orascom)",
    price:"Not listed", priceUnit:"avoided-emissions credits",
    coBenefits:["Large-scale wind on the Gulf of Suez","Displaces fossil generation","Grid capacity"],
    summary:"262.5 MW wind farm on the Gulf of Suez, registered with Gold Standard (GS ID 11557).",
    detail:"A 262.5 MW wind farm at Ras Ghareb on the Gulf of Suez, listed on the Gold Standard registry as GS ID 11557 with annual estimated credits of 583,360. The registry records more than 3 million VERs issued. As grid-connected renewable credits, they are avoided-emissions credits, not removals.",
    url:"https://registry.goldstandard.org/projects/details/3652"
  },
  {
    id:"zafkfw4", name:"Zafarana KfW IV Wind Farm", flag:"🇪🇬", cc:"EGY", country:"Egypt",
    type:"renewable", nature:"Reduction", status:"Active", lat:29.15, lon:32.6,
    registered:true,
    area:"Wind farm (Zafarana)", annual:"~171,500 tCO₂e/yr (CDM estimate)", std:"CDM", methodology:"Grid-connected wind power",
    registry:"UN CDM (registered 2 Mar 2010)", vintage:"CDM crediting period ended 2017", lifetime:"Asset life", developer:"New and Renewable Energy Authority (NREA)",
    price:"Not listed", priceUnit:"CDM certified emission reductions",
    coBenefits:["Part of Egypt's Zafarana wind cluster","Displaces fossil generation"],
    summary:"CDM-registered wind farm at Zafarana on the Red Sea coast, ~171,500 tCO₂e a year estimated.",
    detail:"A wind farm in Egypt's Zafarana cluster, registered under the UN Clean Development Mechanism on 2 March 2010 with estimated reductions of 171,500 tonnes CO2e a year. Developed by Egypt's New and Renewable Energy Authority. Its CDM crediting period ended in 2017.",
    url:"https://cdm.unfccc.int/Projects/DB/JACO1247041916.85/view"
  },
  {
    id:"zaf8", name:"Zafarana 8 Wind Power Plant", flag:"🇪🇬", cc:"EGY", country:"Egypt",
    type:"renewable", nature:"Reduction", status:"Active", lat:29.08, lon:32.66,
    registered:true,
    area:"Wind farm (Zafarana)", annual:"~209,714 tCO₂e/yr (CDM estimate)", std:"CDM", methodology:"Grid-connected wind power",
    registry:"UN CDM (registered 23 Sep 2010)", vintage:"CDM crediting period ended 2017", lifetime:"Asset life", developer:"New and Renewable Energy Authority (NREA)",
    price:"Not listed", priceUnit:"CDM certified emission reductions",
    coBenefits:["Part of Egypt's Zafarana wind cluster","Displaces fossil generation"],
    summary:"CDM-registered wind plant at Zafarana, ~209,714 tCO₂e a year estimated.",
    detail:"The eighth phase of Egypt's Zafarana wind development, registered under the UN Clean Development Mechanism on 23 September 2010 with estimated reductions of 209,714 tonnes CO2e a year. Developed by the New and Renewable Energy Authority. Its CDM crediting period ended in 2017.",
    url:"https://cdm.unfccc.int/Projects/DB/DNV-CUK1268916200.69/view"
  },
  {
    id:"ghabawi", name:"Amman Al-Ghabawi Landfill Gas", flag:"🇯🇴", cc:"JOR", country:"Jordan",
    type:"waste", nature:"Reduction", status:"Active", lat:31.95, lon:36.17,
    registered:true,
    area:"~4.8 MW (+3 MW expansion)", annual:"~335,922 tCO₂e/yr (CDM estimate)", std:"CDM", methodology:"ACM0001 landfill gas capture",
    registry:"UN CDM", vintage:"Crediting period 2019 to 2026", lifetime:"Asset life", developer:"Greater Amman Municipality, financed by EBRD",
    price:"Not listed", priceUnit:"CDM certified emission reductions",
    coBenefits:["Captures landfill methane","Generates electricity","Improves landfill management"],
    summary:"Landfill gas capture and power at Amman's main landfill, CDM-registered, ~335,922 tCO₂e a year estimated.",
    detail:"Landfill gas capture and power generation at the Al-Ghabawi landfill serving Greater Amman, registered under the UN Clean Development Mechanism (ACM0001) with estimated reductions of 335,922 tonnes CO2e a year. Generation of about 4.8 MW is being expanded by a further 3 MW. The renewed crediting period ran from May 2019 to May 2026.",
    url:"https://cdm.unfccc.int/Projects/DB/TUEV-SUED1265645036.88/view"
  },
  {
    id:"shams1", name:"Shams 1 Solar Thermal Plant", flag:"🇦🇪", cc:"UAE", country:"United Arab Emirates",
    type:"renewable", nature:"Reduction", status:"Active", lat:23.57, lon:53.71,
    registered:true,
    area:"Concentrated solar plant (Madinat Zayed)", annual:"~174,800 tCO₂e/yr (CDM estimate)", std:"CDM", methodology:"Grid-connected renewable electricity",
    registry:"UN CDM (registered 13 Aug 2009)", vintage:"CDM crediting period ended 2019; no issuances recorded", lifetime:"Asset life", developer:"Masdar, with Abengoa and Total",
    price:"Not listed", priceUnit:"no credits issued",
    coBenefits:["Early large-scale CSP in the Gulf","Displaces gas-fired generation"],
    summary:"Masdar's concentrated solar plant near Madinat Zayed. CDM-registered in 2009, though no credits were ever issued.",
    detail:"Concentrated solar power plant near Madinat Zayed in Abu Dhabi, registered under the UN Clean Development Mechanism on 13 August 2009 as the Abu Dhabi solar thermal power project, with estimated reductions of 174,800 tonnes CO2e a year. The registry shows no issuance requests and the crediting period ended in 2019, so it is registered but has not produced credits.",
    url:"https://cdm.unfccc.int/Projects/DB/SGS-UKL1240326340.92/view"
  },
  {
    id:"alreyadah", name:"Al Reyadah CCUS (Emirates Steel)", flag:"🇦🇪", cc:"UAE", country:"United Arab Emirates",
    type:"capture", nature:"Reduction", status:"Active", lat:24.35, lon:54.5,
    registered:false,
    area:"Industrial site (Mussafah)", annual:"Up to 800,000 tCO₂/yr capacity", std:"CCUS, operational since 2016", methodology:"Carbon capture, utilisation and storage",
    registry:"Not a credit listing", vintage:"n/a", lifetime:"Asset life", developer:"Al Reyadah (ADNOC and Masdar joint venture)",
    price:"Not listed", priceUnit:"operational decarbonisation",
    coBenefits:["The region's first commercial CCUS plant","Captures steel-plant CO₂"],
    summary:"The region's first commercial CCUS plant, capturing CO₂ from Emirates Steel since 2016.",
    detail:"Captures CO2 from the Emirates Steel plant in Abu Dhabi and sends it for enhanced oil recovery in ADNOC fields, with capacity of up to 800,000 tonnes of CO2 a year. Opened in 2016 as a joint venture of ADNOC and Masdar. Verified annual capture volumes are not published. Not a credit listing.",
    url:"https://masdar.ae/en/news/newsroom/menas-first-carbon-capture-utilisation--amp-storage-ccus-project-now-on-stream-23"
  },
  {
    id:"sabicjubail", name:"SABIC Jubail CO₂ Capture and Utilisation", flag:"🇸🇦", cc:"KSA", country:"Saudi Arabia",
    type:"capture", nature:"Reduction", status:"Active", lat:27.05, lon:49.55,
    registered:false,
    area:"1,500 tCO₂/day capacity", annual:"Not published", std:"Capture and utilisation, operational", methodology:"Carbon capture and utilisation",
    registry:"Not a credit listing", vintage:"n/a", lifetime:"Asset life", developer:"SABIC (United Jubail Petrochemical Company)",
    price:"Not listed", priceUnit:"operational decarbonisation",
    coBenefits:["Reuses CO₂ in methanol and urea","Recognised by the CSLF in 2015"],
    summary:"Purifies more than 1,500 tonnes a day of CO₂ from ethylene glycol plants for use in methanol and urea.",
    detail:"SABIC's plant at Jubail captures and purifies more than 1,500 tonnes of CO2 a day from ethylene glycol production for use in methanol and urea manufacture. Recognised by the Carbon Sequestration Leadership Forum in 2015. This is utilisation rather than permanent storage, and not a credit listing.",
    url:"https://hgeo.energy.gov/archives/cslf/Projects/SABIC.html"
  },
  {
    id:"aramcodac", name:"Aramco Direct Air Capture Test Unit", flag:"🇸🇦", cc:"KSA", country:"Saudi Arabia",
    type:"capture", nature:"Removal", status:"Active", lat:26.29, lon:50.11,
    registered:false,
    area:"Pilot unit (Dhahran)", annual:"12 tCO₂/yr design capacity", std:"DAC pilot", methodology:"Carbon capture (direct air capture test unit)",
    registry:"Not a credit listing", vintage:"n/a", lifetime:"Pilot", developer:"Saudi Aramco with Siemens Energy",
    price:"Not listed", priceUnit:"research pilot",
    coBenefits:["Saudi Arabia's first DAC unit","Tests capture materials"],
    summary:"Saudi Arabia's first direct air capture unit, a 12-tonne-a-year test platform launched in 2025.",
    detail:"A direct air capture test unit launched by Aramco with Siemens Energy in 2025, able to capture 12 tonnes of CO2 a year. It is a research platform for testing capture materials, not a commercial removal project, and is tracked here as a marker of regional DAC activity.",
    url:"https://www.aramco.com/en/news-media/news/2025/saudi-aramco-launches-the-first-direct-air-capture-and-carbon-dioxide"
  },
  {
    id:"fujairahmin", name:"ADNOC / 44.01 Fujairah Mineralisation", flag:"🇦🇪", cc:"UAE", country:"United Arab Emirates",
    type:"capture", nature:"Removal", status:"Development", lat:25.3, lon:56.2,
    registered:false,
    area:"10 t pilot, >300 t scale-up", annual:"Not published", std:"Mineralisation pilot", methodology:"Carbon mineralisation in peridotite (geological storage)",
    registry:"Not a credit listing", vintage:"n/a", lifetime:"Permanent", developer:"ADNOC with 44.01, Fujairah Natural Resources Corporation and Masdar",
    price:"Not listed", priceUnit:"pilot",
    coBenefits:["Permanent storage in rock","UAE's first mineralisation pilot"],
    summary:"Pilot that permanently mineralised 10 tonnes of CO₂ in Fujairah's peridotite, now scaling to more than 300 tonnes.",
    detail:"ADNOC and 44.01 injected CO2 into peridotite rock in Fujairah, permanently mineralising 10 tonnes in a pilot, and announced an expansion to more than 300 tonnes. Separate from 44.01's Al Qabil concession in Oman. No credit listing.",
    url:"https://gulfnews.com/business/energy/adnoc-expands-carbon-to-rock-project-in-fujairah-after-successful-pilot-1.1730788290613"
  },
  {
    id:"admangroves", name:"Abu Dhabi Mangrove Programme", flag:"🇦🇪", cc:"UAE", country:"United Arab Emirates",
    type:"blue", nature:"Removal", status:"Initiative", lat:24.6, lon:54.3,
    registered:false,
    area:"44 million mangroves planted since 2020 (Dec 2023)", annual:"~233,000 t/yr storage (projected)", std:"Not registered", methodology:"n/a",
    registry:"Not a registered carbon project", vintage:"n/a", lifetime:"n/a", developer:"Environment Agency – Abu Dhabi",
    price:"Not listed", priceUnit:"no public price",
    coBenefits:["Coastal protection","Habitat for marine life","Supports the UAE's 100 million mangrove pledge"],
    summary:"Abu Dhabi's planting programme: 44 million mangroves since 2020, toward the UAE's 100 million by 2030 pledge.",
    detail:"The Environment Agency – Abu Dhabi reported 44 million mangroves planted across the emirate since 2020, including 23 million in two years covering about 9,200 hectares, with projected storage of around 233,000 tonnes of carbon emissions a year. Later press reports give a lower planted total, so progress figures should be read with caution. Not a registered carbon project.",
    url:"https://www.mediaoffice.abudhabi/en/environment/under-the-directives-of-hamdan-bin-zayed-environment-agency-abu-dhabi-accomplishes-planting-44-million-mangroves/"
  }
];
