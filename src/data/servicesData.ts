export interface ServiceDetail {
  slug: string;
  aliases: string[];
  number: string;
  title: string;
  tagline: string;
  heroImage: string;
  secondaryImage: string;
  metaDescription: string;
  overview: string;
  pakistanContext: {
    plotSizes: string[];
    bylawsAuthority: string[];
    marketChallenges: string;
    urbanSolution: string;
  };
  keyFeatures: {
    title: string;
    description: string;
    standards: string;
  }[];
  specifications: {
    category: string;
    details: string[];
    pakistaniBrands: string[];
  }[];
  processSteps: {
    phase: string;
    title: string;
    description: string;
    timeline: string;
  }[];
  costBreakdown: {
    coverageAreaNote: string;
    ratesPerSqFt: {
      type: string;
      rate: string;
      scope: string;
    }[];
    typicalEstimates: {
      plotSize: string;
      coveredArea: string;
      approxCost: string;
    }[];
  };
  pakistanCompanyComparison: {
    category: string;
    traditionalThekedaar: string;
    massDevelopers: string; // e.g. GFS / speculative commercial builders
    urbanDesignApproach: string;
  }[];
  deliverables: string[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: Record<string, ServiceDetail> = {
  'architectural-design': {
    slug: 'architectural-design',
    aliases: ['architecture', 'architectural-design'],
    number: '01',
    title: 'Architectural Design',
    tagline: 'Custom House Plans, 3D Elevations & Municipal Approval Drawings for Pakistan',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600',
    secondaryImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
    metaDescription: 'PCATP certified architectural design for Pakistani residential and commercial projects. Complete DHA, Bahria, LDA, CDA approval maps, 3D exterior renders, and floor plans.',
    overview: 'Our architectural practice combines contemporary aesthetics, climate-responsive design for Pakistan’s harsh summers, and absolute compliance with local development authorities. Every layout is calibrated for optimal solar orientation, cross-ventilation, cross-generational family privacy, and modern Pakistani lifestyles (including dedicated dirty kitchens, servant quarters, powder rooms, and expansive formal drawing rooms).',
    pakistanContext: {
      plotSizes: ['5 Marla (25\' x 45\')', '10 Marla (35\' x 65\')', '1 Kanal (50\' x 90\')', '2 Kanal (75\' x 120\')', 'Commercial Plazas (4 & 8 Marla)'],
      bylawsAuthority: ['DHA (Lahore, Karachi, Islamabad, Multan, Gujranwala)', 'Bahria Town (Karachi, Rawalpindi, Lahore)', 'CDA & RDA (Islamabad & Rawalpindi)', 'LDA & private housing societies across Punjab'],
      marketChallenges: 'Most local draftspersons replicate standard copy-paste maps that ignore plot orientation, resulting in stifling heat, dark interior rooms, wasted corridor spaces, and costly rejection fines from housing societies.',
      urbanSolution: 'Our PCATP-registered architects create bespoke layouts tailored to your exact family requirements, Vastu/sunlight orientation, and guarantee 100% municipal and housing authority map approval on the first submission.'
    },
    keyFeatures: [
      {
        title: 'Bespoke 2D Floor Plans & Space Planning',
        description: 'Meticulously crafted room dimensions, double-height lobbies, split-level living zones, and seamless indoor-outdoor courtyards.',
        standards: 'Tailored for 5 Marla to 2 Kanal standard Pakistani plot grids'
      },
      {
        title: 'Photorealistic 3D Exterior Elevations',
        description: 'Ultra-realistic 4K daylight and night-lit 3D exterior renderings in Modern Contemporary, Spanish Colonial, Minimalist, or Classical styles.',
        standards: '360° virtual walkthroughs before civil construction begins'
      },
      {
        title: 'Submission Maps & Authority Approvals',
        description: 'Complete sanction drawing dossiers including site plan, structural calculations, water supply, sewerage layout, and vetting certificates.',
        standards: 'DHA, Bahria Town, LDA, CDA, and Cantonment Board compliant'
      },
      {
        title: 'Comprehensive Working Drawing Dossier',
        description: 'Over 80+ pages of construction-ready blueprints: masonry dimensions, door/window schedules, staircase sections, and detail blow-ups.',
        standards: 'Zero ambiguity for site supervisors and steel fixers'
      }
    ],
    specifications: [
      {
        category: 'Architectural Drawings Package',
        details: ['Master Site Layout & Boundary Setbacks', 'Ground, First Floor, and Mumty Plans', 'Cross Sections & Front/Rear Elevations', 'Door & Window Fabrication Schedules'],
        pakistaniBrands: ['AutoCAD 2024', 'Revit BIM', 'Lumion Pro', '3ds Max Photorealistic Rendering']
      },
      {
        category: 'Climatic & Environmental Engineering',
        details: ['Cavity wall insulation specs for Punjab & Sindh heatwaves', 'Double-glazed Low-E UPVC / Aluminum window positioning', 'Natural cross-ventilation shafts & rooftop thermal insulation schemes', 'Rainwater harvesting and storm drainage planning'],
        pakistaniBrands: ['Master Polyfoam Insulation', 'Jumbolon Thermal Sheets', 'Chawinda / Faisalabad Clay Tiles']
      }
    ],
    processSteps: [
      {
        phase: 'Step 01',
        title: 'Client Discovery & Site Survey',
        description: 'Plot demarcation, soil testing coordination, orientation check, and detailed family requirement questionnaire.',
        timeline: '3 - 5 Days'
      },
      {
        phase: 'Step 02',
        title: 'Concept Floor Plans (2-3 Options)',
        description: 'Drafting schematic layouts balancing room proportions, privacy, airflow, and bylaw setbacks.',
        timeline: '7 - 10 Days'
      },
      {
        phase: 'Step 03',
        title: '3D Exterior Elevation Modeling',
        description: 'Developing the signature exterior facade with texture mapping (travertine, louvers, lighting, glass).',
        timeline: '7 - 10 Days'
      },
      {
        phase: 'Step 04',
        title: 'Authority Sanction & Working Sets',
        description: 'Final submission drawing filing with DHA/LDA/CDA and handover of full execution blueprint set.',
        timeline: '10 - 15 Days'
      }
    ],
    costBreakdown: {
      coverageAreaNote: 'Architectural fees in Pakistan are typically charged either on a per-square-foot basis or as a fixed package according to plot size.',
      ratesPerSqFt: [
        { type: 'Basic Submission Package', rate: 'PKR 35 - 50 / sq ft', scope: '2D Floor plans, 1 Elevation, Authority approval drawings' },
        { type: 'Standard Architectural Package', rate: 'PKR 65 - 90 / sq ft', scope: 'Full 2D sets, 3D renders, Structural vetting, MEP layouts' },
        { type: 'Premium Executive Architecture', rate: 'PKR 110 - 160 / sq ft', scope: 'Bespoke design, 3D Walkthroughs, Bill of Quantities (BOQ), Periodic site supervision' }
      ],
      typicalEstimates: [
        { plotSize: '5 Marla (Approx 2,000 sq ft covered area)', coveredArea: '2,000 sq ft', approxCost: 'PKR 120,000 - 180,000' },
        { plotSize: '10 Marla (Approx 3,300 sq ft covered area)', coveredArea: '3,300 sq ft', approxCost: 'PKR 220,000 - 320,000' },
        { plotSize: '1 Kanal (Approx 5,500 sq ft covered area)', coveredArea: '5,500 sq ft', approxCost: 'PKR 380,000 - 580,000' },
        { plotSize: '2 Kanal (Approx 9,000 sq ft covered area)', coveredArea: '9,000 sq ft', approxCost: 'PKR 700,000 - 1,100,000' }
      ]
    },
    pakistanCompanyComparison: [
      {
        category: 'Authority Approval Guarantee',
        traditionalThekedaar: 'No license. Relies on third-party peons; drawings often rejected repeatedly with hefty fines.',
        massDevelopers: 'Generic cookie-cutter templates with minimal modifications permitted.',
        urbanDesignApproach: 'PCATP certified architects personally coordinate with DHA/LDA/CDA town planning committees with 100% approval record.'
      },
      {
        category: '3D Architectural Realism',
        traditionalThekedaar: 'Provides blurry sketches or downloads pictures from Google.',
        massDevelopers: 'Pre-rendered brochure art not aligned with your specific plot shape.',
        urbanDesignApproach: 'Ultra-high-definition 4K Lumion & 3ds Max renders tailored precisely to your plot coordinates and surroundings.'
      },
      {
        category: 'Site Execution Supervision',
        traditionalThekedaar: 'Builds by guesswork ("Andaza"), resulting in misaligned walls and skewed door openings.',
        massDevelopers: 'Site engineers manage 40+ sites simultaneously with zero personal attention.',
        urbanDesignApproach: 'Detailed structural & architectural supervision at key milestones (foundation, slab reinforcement, finishing).'
      }
    ],
    deliverables: [
      'Approved Sanction Drawings (Municipal Approval Map with Stamped Authority Seals)',
      'High-Resolution Photorealistic 3D Elevations (Day & Night Perspectives)',
      'Complete Structural Engineering Blueprints with Steel Bending Schedules (BBS)',
      'Detailed Plumbing, Drainage, and Septic Tank Plans',
      'Electrical Conduit, Switchboard, DB, and Inverter AC Routing Drawings',
      'Complete Itemized Bill of Quantities (BOQ) with Material Quantity Estimates'
    ],
    faq: [
      {
        question: 'How long does it take to get approval from DHA or CDA?',
        answer: 'Authority review generally takes 2 to 4 weeks depending on the specific housing society. Because our blueprints adhere strictly to front, rear, and side setback rules, building height limits, and seismic codes, our dossiers pass through scrutiny smoothly without clearance holdups.'
      },
      {
        question: 'Can you design Spanish or Contemporary Modern houses?',
        answer: 'Yes. We specialize in both Modern Contemporary architecture (stone facades, cantilevered louvers, double-height glass) and Spanish / Classical styles (terracotta roof tiles, arched colonnades, crown cornices) popular in DHA Phase 6/7/8/9, Bahria Town, and CDA Sectors.'
      }
    ]
  },

  'construction': {
    slug: 'construction',
    aliases: ['construction', 'general-construction'],
    number: '02',
    title: 'General Construction',
    tagline: 'End-to-End Civil & Commercial Construction with Uncompromising Engineering in Pakistan',
    heroImage: 'https://images.unsplash.com/photo-1541881451213-9799292db200?auto=format&fit=crop&q=80&w=1600',
    secondaryImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=1200',
    metaDescription: 'Full-scope residential and commercial building construction in Pakistan. PEC licensed engineers, lab-tested concrete, certified steel, and transparent milestone billing.',
    overview: 'Urban Design & Construction provides comprehensive, end-to-end building construction across Lahore, Islamabad, Rawalpindi, and Karachi. We bridge the gap between architectural vision and on-ground reality, replacing chaotic unmonitored labor with engineered quality assurance, daily photographic milestones, laser leveling, and certified material procurement.',
    pakistanContext: {
      plotSizes: ['5 Marla', '10 Marla', '1 Kanal', '2 Kanal', 'Multi-Storey Commercial Plazas'],
      bylawsAuthority: ['PEC (Pakistan Engineering Council)', 'DHA Construction Regulations', 'LDA/CDA Building Control Directives'],
      marketChallenges: 'The Pakistani construction market suffers from rampant material adulteration (substandard steel, recycled cement, salty water mixing), sudden contractor abandonment, and arbitrary price escalations halfway through the project.',
      urbanSolution: 'We operate with ironclad legal contracts, fixed itemized BOQ commitments, milestone-based escrow payments, and mandatory third-party lab testing (Cube Crush Tests & Steel Tensile Tests) for absolute peace of mind.'
    },
    keyFeatures: [
      {
        title: 'PEC-Registered Site Engineering',
        description: 'Dedicated site engineers supervise every batch of concrete mixing, steel tying, and brick alignment on site.',
        standards: 'No subcontracting to unqualified local petty thekedaars'
      },
      {
        title: 'Material Lab Testing & Verification',
        description: 'Concrete core testing (3,000 PSI min for slabs) and Grade-60 steel tensile testing certificates provided directly to the client.',
        standards: 'ASTM / BSS testing protocols at university engineering labs'
      },
      {
        title: 'Moisture, Damp & Termite Defense',
        description: 'Rigorous chemical soil pre-treatment and multi-layered DPC (Damp Proof Course) with bitumen and heavy polythene sheeting.',
        standards: 'Eliminates dampness (Seem) and salt efflorescence (Kallur) permanently'
      },
      {
        title: 'Weekly Digital Progress Reporting',
        description: 'Clients receive weekly drone/camera visual reports, material consumption logs, and updated Gantt chart timelines via dedicated portal.',
        standards: 'Ideal for overseas Pakistanis in UAE, UK, USA, and Saudi Arabia'
      }
    ],
    specifications: [
      {
        category: 'Heavy Structural Elements',
        details: ['Excavation to virgin load-bearing soil strata', 'Compacted lean concrete footing', 'Deformed Grade-60 steel rebar cage', 'Ready-Mix Concrete (RMC) or on-site mechanical batching with vibrators'],
        pakistaniBrands: ['Bestway / Maple Leaf / Fauji OPC 53 Grade', 'Mughal Supreme / Amreli Steels Grade 60', 'Chenab Sand (coarse) & Margalla Crushed Aggregate']
      },
      {
        category: 'Quality Control Standards',
        details: ['Slump Cone Test at every pouring', '28-day water curing protocol with automated sprinklers and jute sacks', 'Laser level verification for horizontal beam and floor flatness', 'Proper cover block spacers for all slab reinforcement rebar'],
        pakistaniBrands: ['Sika Waterproofing Admixtures', 'Termidor Chemical Termite Barrier', 'Fosroc Concrete Chemicals']
      }
    ],
    processSteps: [
      {
        phase: 'Phase 01',
        title: 'Mobilization & Soil Investigation',
        description: 'Site clearance, temporary water/power connection, benchmark datum leveling, and soil bearing capacity validation.',
        timeline: 'Week 1 - 2'
      },
      {
        phase: 'Phase 02',
        title: 'Substructure & Foundation Execution',
        description: 'Deep excavation, termite piping/spray, raft/strip footing reinforcement, and plinth beam tie casting.',
        timeline: 'Week 3 - 6'
      },
      {
        phase: 'Phase 03',
        title: 'Superstructure Concrete & Masonry',
        description: 'Column erection, Awwal red brick masonry, formwork shuttering, and slab reinforcement with MEP pipe embedding.',
        timeline: 'Month 2 - 4'
      },
      {
        phase: 'Phase 04',
        title: 'Finishing Works & Testing',
        description: 'Plastering, tile setting, paint systems, fixture installation, and thorough pressure testing of all conduits.',
        timeline: 'Month 5 - 8'
      }
    ],
    costBreakdown: {
      coverageAreaNote: 'Complete construction rates vary based on whether you choose Grey Structure only or Full Turnkey execution.',
      ratesPerSqFt: [
        { type: 'Grey Structure Construction', rate: 'PKR 2,900 - 3,500 / sq ft', scope: 'Foundation, Columns, Beams, Slabs, Masonry, Plaster, Underground Tank, MEP rough-in' },
        { type: 'Standard Construction (Finishing Included)', rate: 'PKR 5,500 - 6,500 / sq ft', scope: 'Complete move-in house with high-standard Pakistani fixtures and finishes' },
        { type: 'Executive Luxury Construction', rate: 'PKR 7,500 - 9,500+ / sq ft', scope: 'Imported Spanish tiles, solid Ash wood, Grohe sanitary, smart home automation' }
      ],
      typicalEstimates: [
        { plotSize: '5 Marla (Approx 2,000 sq ft)', coveredArea: '2,000 sq ft', approxCost: 'PKR 5.8M (Grey) / PKR 11.5M - 13.5M (Full Turnkey)' },
        { plotSize: '10 Marla (Approx 3,300 sq ft)', coveredArea: '3,300 sq ft', approxCost: 'PKR 9.8M (Grey) / PKR 19.5M - 23.0M (Full Turnkey)' },
        { plotSize: '1 Kanal (Approx 5,500 sq ft)', coveredArea: '5,500 sq ft', approxCost: 'PKR 16.5M (Grey) / PKR 33.0M - 42.0M (Full Turnkey)' },
        { plotSize: '2 Kanal (Approx 9,000 sq ft)', coveredArea: '9,000 sq ft', approxCost: 'PKR 27.0M (Grey) / PKR 54.0M - 72.0M (Full Turnkey)' }
      ]
    },
    pakistanCompanyComparison: [
      {
        category: 'Contract Integrity & Escalations',
        traditionalThekedaar: 'Agrees verbally to low rates, then demands extra money every month under threat of halting work.',
        massDevelopers: 'Focuses primarily on commercial high-rises or mass residential schemes with lengthy backlog delays.',
        urbanDesignApproach: 'Signed legal contract with fixed itemized rate agreement and clear escalation caps based on transparent indices.'
      },
      {
        category: 'Quality of Materials Used',
        traditionalThekedaar: 'Uses unbranded scrap steel ("Tukra saria") and inferior class-3 bricks to pocket hidden profit.',
        massDevelopers: 'Bulk procurement with varying quality control across individual project towers.',
        urbanDesignApproach: '100% verified factory mill test certificates for Mughal/Amreli Grade 60 and factory-sealed Bestway/Maple Leaf cement.'
      },
      {
        category: 'Warranty & Accountability',
        traditionalThekedaar: 'Vanishes the day the last payment is made. No warranty for leaks, cracks, or plumbing failure.',
        massDevelopers: 'Protracted customer service bureaucracy that takes months to address defect inquiries.',
        urbanDesignApproach: 'Formal 10-Year Structural Integrity Warranty + 1-Year Free Maintenance & snag resolution period.'
      }
    ],
    deliverables: [
      'PEC-Certified Structural Stability Certificate',
      'As-Built CAD Architectural & Electrical/Sanitary Schematics',
      'Material Mill & Lab Test Records (Tensile & Compressive Strength)',
      'Waterproofing & Anti-Termite Chemical Warranty Certificates (10 Years)',
      'DHA / CDA / LDA Final Completion Certificate Assistance'
    ],
    faq: [
      {
        question: 'How do you prevent dampness (Seem) in Pakistani homes?',
        answer: 'Dampness is the number one defect in Pakistani construction caused by poor DPC and uncompacted soil. We install dual-layer horizontal Damp Proof Courses with Sika waterproofing admixtures, bitumen coating, and 500-gauge polythene membrane, alongside vertical bitu-plastic tanking in all underground/plinth walls.'
      },
      {
        question: 'Do you manage construction for Overseas Pakistanis?',
        answer: 'Over 60% of our clients reside in the UK, UAE, USA, and Canada. We provide weekly video logs, milestone photo archives, and escrow milestone payments so you have full transparency without needing to travel.'
      }
    ]
  },

  'grey-structure': {
    slug: 'grey-structure',
    aliases: ['grey-structure', 'grey-structure-construction', 'gray-structure'],
    number: '03',
    title: 'Grey Structure Construction',
    tagline: 'The Unbreakable Backbone of Your Home — Civil Engineering Without Compromise',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&q=80&w=1600',
    secondaryImage: 'https://images.unsplash.com/photo-1541881451213-9799292db200?auto=format&fit=crop&q=80&w=1200',
    metaDescription: 'Grey structure construction in Pakistan for 5 Marla, 10 Marla, 1 Kanal & 2 Kanal homes. Grade-60 steel, Awwal red bricks, underground water tanks, and MEP conduit integration.',
    overview: 'In Pakistani real estate, the "Grey Structure" (خام ڈھانچہ) is the most critical phase of building. Once plastered and tiled, hidden structural shortcuts cannot be undone. Our Grey Structure package covers robust foundation excavation, columns, tie beams, Awwal burnt clay brick masonry, reinforced concrete slabs, parapet walls, complete underground and overhead RCC water storage tanks, boundary walls, and integrated MEP concealed conduits.',
    pakistanContext: {
      plotSizes: ['5 Marla (Approx 1,800 - 2,100 sq ft covered area)', '10 Marla (Approx 3,100 - 3,500 sq ft)', '1 Kanal (Approx 5,200 - 6,000 sq ft)', '2 Kanal (Approx 8,500 - 10,000 sq ft)'],
      bylawsAuthority: ['DHA Engineering Inspection Stages', 'Bahria Town Structural Clearance', 'CDA Plinth Level Certification'],
      marketChallenges: 'Local thekedaars skimp on steel overlap ratios, use porous substandard bricks that absorb moisture, ignore concrete vibrators (causing honeycombing in columns), and terminate water curing after only 3 days.',
      urbanSolution: 'We adhere strictly to ACI (American Concrete Institute) guidelines: mandatory 14 to 21-day continuous water curing with burlap sacks, steel chair spacers, steel-faced shuttering panels (no warped timber planks), and 1:2:4 / 1:1.5:3 engineered concrete mix designs.'
    },
    keyFeatures: [
      {
        title: 'Guaranteed 100% Deformed Grade-60 Steel',
        description: 'We exclusively deploy prime billet steel with 60,000 PSI minimum yield strength from Pakistan’s top mills.',
        standards: 'No re-rolled steel, ship-breaking scrap, or underweight saria'
      },
      {
        title: 'Special Awwal Burnt Clay Bricks',
        description: 'First-class kiln-fired red bricks with sharp edges, uniform metallic ring when struck, and zero salt efflorescence.',
        standards: 'Proper soaking in water tanks prior to laying in 1:4 cement-sand mortar'
      },
      {
        title: 'Monolithic RCC Water Storage Tanks',
        description: 'Reinforced cement concrete underground and overhead tanks poured with crystalline waterproofing admixtures.',
        standards: 'Zero seepage risk into adjacent foundation soils'
      },
      {
        title: 'Steel Shuttering & Mechanical Vibrators',
        description: 'Smooth steel formwork creates pristine concrete surfaces without dangerous honeycombing or structural hollows.',
        standards: 'Laser-checked slab levels preventing uneven water pooling on rooftops'
      }
    ],
    specifications: [
      {
        category: 'Structural Materials',
        details: ['Steel: 60 Grade deformed bars with standard lap lengths & hook bends', 'Cement: Fresh ordinary Portland cement delivered in moisture-proof packaging', 'Aggregate (Bajri): Margalla / Sargodha crushed stone (1/2" to 3/4" graded size)', 'Sand (Reti): Coarse Chenab river sand for concrete; fine Ravi sand for plaster'],
        pakistaniBrands: ['Mughal Supreme / Amreli Steels / Pak Iron', 'Bestway / Maple Leaf / Fauji Cement', 'Margalla Crush Source']
      },
      {
        category: 'Rough-in MEP embedded during Grey Structure',
        details: ['Concealed electric PVC conduit pipes and fan boxes installed before slab pouring', 'Plumbing drop shafts (ducts) cast with proper sleeves', 'AC copper pipe sleeves and drain provisions cast in beams and walls', 'Boundary wall with foundation beam and RCC columns'],
        pakistaniBrands: ['Popular / Shavyl PVC Electrical Conduits', 'Adamjee / Diamond PVC Pipe Accessories']
      }
    ],
    processSteps: [
      {
        phase: 'Stage 01',
        title: 'Excavation & Termite Injection',
        description: 'Deep excavation, heavy rammer compaction, termite soil chemical trenching, and lean concrete bed.',
        timeline: 'Week 1 - 3'
      },
      {
        phase: 'Stage 02',
        title: 'Plinth Level & Underground Tank',
        description: 'Foundation reinforcement, plinth beam casting, DPC application, and monolith underground water tank.',
        timeline: 'Week 4 - 6'
      },
      {
        phase: 'Stage 03',
        title: 'Ground Floor Columns, Walls & Slab',
        description: 'Awwal brick masonry, lintel beams, steel shuttering, MEP conduit insertion, and concrete slab pour.',
        timeline: 'Week 7 - 11'
      },
      {
        phase: 'Stage 04',
        title: 'First Floor, Mumty & Plastering',
        description: 'Upper floor structure, roof heat insulation treatment, parapet walls, and dual-coat internal/external plaster.',
        timeline: 'Week 12 - 18'
      }
    ],
    costBreakdown: {
      coverageAreaNote: 'Current 2024 - 2026 grey structure costs in Punjab and Islamabad based on standard DHA / Bahria specifications.',
      ratesPerSqFt: [
        { type: 'Economy Grey Structure', rate: 'PKR 2,650 - 2,850 / sq ft', scope: 'Local steel, standard bricks, basic shuttering (not recommended by Urban)' },
        { type: 'Standard Quality Grey Structure', rate: 'PKR 2,950 - 3,250 / sq ft', scope: 'Grade 60 steel, Bestway cement, Awwal bricks, Sika DPC, steel shuttering' },
        { type: 'Executive A+ Grey Structure', rate: 'PKR 3,350 - 3,600 / sq ft', scope: 'Mughal Supreme/Amreli, Margalla crush, double DPC, heavy water tank, premium plaster mesh' }
      ],
      typicalEstimates: [
        { plotSize: '5 Marla House (~ 1,900 sq ft covered area)', coveredArea: '1,900 sq ft', approxCost: 'PKR 5.6M - 6.4M' },
        { plotSize: '10 Marla House (~ 3,300 sq ft covered area)', coveredArea: '3,300 sq ft', approxCost: 'PKR 9.8M - 11.0M' },
        { plotSize: '1 Kanal House (~ 5,600 sq ft covered area)', coveredArea: '5,600 sq ft', approxCost: 'PKR 16.8M - 19.5M' },
        { plotSize: '2 Kanal House (~ 9,200 sq ft covered area)', coveredArea: '9,200 sq ft', approxCost: 'PKR 28.0M - 32.5M' }
      ]
    },
    pakistanCompanyComparison: [
      {
        category: 'Steel Grade & Verification',
        traditionalThekedaar: 'Claims "Grade 60" but frequently buys non-tested commercial grade saria from local scrap dealers.',
        massDevelopers: 'Procures in mass batches without providing individual site lab test certificates.',
        urbanDesignApproach: 'Direct mill delivery challans and lab test reports (tensile stress & elongation) handed to homeowner.'
      },
      {
        category: 'Brick Quality Standard',
        traditionalThekedaar: 'Mixes "Doem" (second class) and "Khengur" over-burnt bricks with mortar to save costs.',
        massDevelopers: 'Variable brick consistency resulting in porous walls and thermal leakage.',
        urbanDesignApproach: 'Strict rejection of any second-class bricks; 100% hand-inspected Awwal kiln bricks with uniform dimensions.'
      },
      {
        category: 'Plaster Quality & Cracking',
        traditionalThekedaar: 'Skips wire mesh (jalee) at column-brick junctions; plaster develops spiderweb cracks within 6 months.',
        massDevelopers: 'Rushes plastering before masonry has cured, causing internal hollow spots.',
        urbanDesignApproach: 'Galvanized expanded metal lath (wire mesh) anchored at all RCC-masonry joints prior to 1:4 cement-sand plastering.'
      }
    ],
    deliverables: [
      'Complete Excavation, Soil Compaction & Termite Barrier',
      'RCC Foundation Footings, Columns, Plinth Beams, and Retaining Walls',
      'Burnt Clay Awwal Brick Masonry for All Exterior and Interior Partitions',
      'Reinforced Roof Slabs with Embedded Electric Conduit Routing and Fan Boxes',
      'Underground and Overhead Water Storage Tanks with Waterproofing Admixture',
      'Internal and External 2-Coat Cement Plaster with Wire Mesh Joint Protection'
    ],
    faq: [
      {
        question: 'What is included in the Grey Structure scope vs Finishing?',
        answer: 'Grey Structure encompasses all civil works: foundation, concrete frame, brick walls, roof slabs, underground/overhead tanks, boundary wall, internal/external plaster, and concealed electrical and plumbing pipe conduits. Finishing starts after this, including tiles, paint, doors, kitchens, ceilings, and sanitary fixtures.'
      },
      {
        question: 'Can I contract Urban Design for Grey Structure and do finishing later?',
        answer: 'Yes. Many clients choose our Grey Structure package first to lock in uncompromising structural safety, and then transition seamlessly into our custom Finishing or Turnkey phase at their own timeline.'
      }
    ]
  },

  'mep': {
    slug: 'mep',
    aliases: ['mep', 'mep-services', 'mechanical-electrical-plumbing'],
    number: '04',
    title: 'MEP Engineering',
    tagline: 'Mechanical, Electrical & Plumbing Systems Engineered for 50+ Years of Trouble-Free Living',
    heroImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1600',
    secondaryImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200',
    metaDescription: 'Complete MEP engineering services in Pakistan. Pakistan Cables, Fast Cables, Master PPRC water piping, solar net-metering prep, inverter AC copper piping, and DB panel load calculations.',
    overview: 'MEP (Mechanical, Electrical, and Plumbing) forms the invisible circulatory system of a building. In Pakistan, substandard electrical cables cause catastrophic short-circuit fires, while un-engineered plumbing causes foul sewage odors and costly wall leakages. Our MEP engineering ensures balanced three-phase electrical distribution, solar-ready conduit routing, pressurized water systems, and whisper-quiet HVAC cooling.',
    pakistanContext: {
      plotSizes: ['5 Marla', '10 Marla', '1 Kanal', '2 Kanal', 'Commercial Plazas'],
      bylawsAuthority: ['WAPDA / LESCO / IESCO / K-Electric Grid Connection Rules', 'DHA Water & Sewerage By-laws', 'NEPRA Solar Net Metering Protocols'],
      marketChallenges: 'Untrained local electricians ("Ustaad") guess circuit load sizes, bridge ground wires, overload single phases, and use counterfeit copper cables that hike electricity bills and create fire hazards.',
      urbanSolution: 'Our qualified MEP engineers perform precise load calculations per room, install dedicated Breakers (RCBO/MCB), use 99.9% pure electrolytic copper cables, and hydrostatically pressure-test all sanitary pipes at 10 Bar for 24 hours before wall closure.'
    },
    keyFeatures: [
      {
        title: 'Fire-Safe 100% Pure Copper Electrical Cabling',
        description: 'Exclusively wiring with certified Pakistan Cables or Fast Cables with flame-retardant PVC insulation.',
        standards: 'Zero copper-clad aluminum (CCA) or counterfeit wire risk'
      },
      {
        title: '3-Phase Balanced Load & Solar Net-Metering Ready',
        description: 'Engineered Distribution Boards (DBs) balancing AC loads across phases, with dedicated bidirectional solar inverter conduits.',
        standards: 'Compatible with 5kW, 10kW, 15kW, and 20kW on-grid solar systems'
      },
      {
        title: 'Fusion-Welded PPRC Water Supply Network',
        description: 'High-temperature, high-pressure PPRC piping with brass fittings for hot and cold water delivery.',
        standards: 'Master / Popular / Dadex PN-20 rated pipes tested at 150 PSI'
      },
      {
        title: 'Odorless Soil & Waste Drainage System',
        description: 'Multi-stack PVC sewerage pipes with dedicated P-traps, anti-siphon vent pipes extending through the roof, and deep inspection chambers.',
        standards: 'Guarantees zero sewer gas backflow into bathrooms'
      }
    ],
    specifications: [
      {
        category: 'Electrical & Automation Systems',
        details: ['Heavy-gauge PVC conduits cast into slabs and chased into walls', 'Schneider / Hager / ABB miniature circuit breakers (MCBs) and earth-leakage breakers (RCCBs)', 'Dedicated earthing/grounding copper rod bore with bentonite clay', 'CAT-6 Gigabit data cabling and coaxial TV conduit drops to all bedrooms'],
        pakistaniBrands: ['Pakistan Cables (General Cables)', 'Fast Cables', 'Schneider Electric', 'Legrand / Clipsal Switches']
      },
      {
        category: 'Plumbing & Gas Infrastructure',
        details: ['PPRC hot & cold fresh water lines with high-grade thermal insulation for geysers', 'Heavy-duty PVC sewerage & rainwater drainage pipes with leak-proof solvent cement', 'Dedicated SS 304 gas piping manifolds with emergency shut-off valves', 'Automated pressure pump system with dry-run protection sensors'],
        pakistaniBrands: ['Master Pipe (PPRC/PVC)', 'Popular Pipes of Pakistan', 'IIL (International Industries Ltd) Steel Gas Pipes']
      }
    ],
    processSteps: [
      {
        phase: 'Phase 01',
        title: 'Load Calculation & Schematics',
        description: 'Sizing electrical cables for air conditioning, geysers, kitchens, and water pumps; hydraulic flow calculations for bathrooms.',
        timeline: 'Week 1 - 2'
      },
      {
        phase: 'Phase 02',
        title: 'Concealed Conduit & Pipe Routing',
        description: 'Wall chasing, installing electrical back boxes, laying hot/cold PPRC pipes and sewerage soil lines before plastering.',
        timeline: 'Week 3 - 6'
      },
      {
        phase: 'Phase 03',
        title: 'Hydrostatic Pressure & Continuity Testing',
        description: 'Pressurizing water pipes to 10-15 bar to check for hidden micro-leaks; Megger insulation testing of all electrical loops.',
        timeline: 'Week 7 - 8'
      },
      {
        phase: 'Phase 04',
        title: 'DB Termination & Fixture Installation',
        description: 'Color-coded wiring termination into main DB, breaker labeling, switchboard plates, and sanitary fixture connections.',
        timeline: 'Week 9 - 12'
      }
    ],
    costBreakdown: {
      coverageAreaNote: 'MEP works cover both rough-in (conduits & pipes) and final fixtures/cables depending on scope.',
      ratesPerSqFt: [
        { type: 'MEP Concealed Piping & Conduit Only', rate: 'PKR 350 - 450 / sq ft', scope: 'PVC conduits, backboxes, PPRC/PVC pipe installation, pressure testing' },
        { type: 'Complete MEP Rough-in + Cabling + DBs', rate: 'PKR 850 - 1,200 / sq ft', scope: 'Complete Fast/Pakistan Cables wiring, main DB panels, earthing bore, AC copper lines' },
        { type: 'Full MEP with Sanitary & Smart Automation', rate: 'PKR 1,600 - 2,400 / sq ft', scope: 'Smart switches, sensor taps, Grohe concealed cisterns, CCTV cameras, solar hookups' }
      ],
      typicalEstimates: [
        { plotSize: '5 Marla House (~ 2,000 sq ft)', coveredArea: '2,000 sq ft', approxCost: 'PKR 1.8M - 2.5M' },
        { plotSize: '10 Marla House (~ 3,300 sq ft)', coveredArea: '3,300 sq ft', approxCost: 'PKR 3.0M - 4.2M' },
        { plotSize: '1 Kanal House (~ 5,500 sq ft)', coveredArea: '5,500 sq ft', approxCost: 'PKR 5.2M - 7.5M' },
        { plotSize: '2 Kanal House (~ 9,000 sq ft)', coveredArea: '9,000 sq ft', approxCost: 'PKR 9.0M - 13.0M' }
      ]
    },
    pakistanCompanyComparison: [
      {
        category: 'Electrical Wire Quality',
        traditionalThekedaar: 'Buys unbranded scrap copper or undersized wires (claims 7/29 but supplies 3/29) leading to voltage drop.',
        massDevelopers: 'Standard commercial wiring with frequent breaker tripping under full AC summer loads.',
        urbanDesignApproach: 'Guaranteed 100% genuine Pakistan Cables or Fast Cables with factory hologram verification seals.'
      },
      {
        category: 'Plumbing Leak Testing',
        traditionalThekedaar: 'Plasters immediately over pipes without pressure testing; leaks appear only after expensive tiles are laid.',
        massDevelopers: 'Basic visual inspection with minimal pressure gauge hold time.',
        urbanDesignApproach: 'Mandatory 24-hour hydrostatic pump test at 10 Bar pressure with documented gauge certificate before wall plastering.'
      },
      {
        category: 'Solar & Air Conditioning Integration',
        traditionalThekedaar: 'Forgets AC drain pipes and copper sleeves, forcing workers to chisel through finished walls later.',
        massDevelopers: 'Basic split AC provisions without dedicated rooftop inverter wiring channels.',
        urbanDesignApproach: 'Integrated insulated copper lines (Muller/Osprey), gravity condensate drains, and net-metering conduits built right into the structure.'
      }
    ],
    deliverables: [
      'Complete As-Built Electrical Single Line Diagram (SLD) and DB Circuit Schedules',
      'Plumbing Riser Diagrams, Sewerage Trap Locations, and Inspection Chamber Schematics',
      'Hydrostatic Pressure Test Certificate for Water Supply Networks',
      'Megger Insulation & Earth Resistance Test Certificate (< 5 Ohms)',
      'Inverter AC Pre-Installation Copper & Drain Network Ready for All Rooms'
    ],
    faq: [
      {
        question: 'Can you wire my house for Solar Net-Metering in Pakistan?',
        answer: 'Yes. We design the electrical distribution board with a dual-busbar system specifically split between essential and non-essential loads. We install heavy-gauge DC conduits from the rooftop to the inverter location, compliant with LESCO/IESCO/K-Electric net-metering standards.'
      },
      {
        question: 'Why do bathrooms in Pakistan often have bad smells, and how do you prevent it?',
        answer: 'Foul bathroom odors occur when plumbers skip deep P-traps, omit external vent pipes, or connect floor drains directly into the soil stack without a water seal. We install two-pipe drainage systems with deep-seal water traps and rooftop vent terminals that completely eliminate sewer odor.'
      }
    ]
  },

  'interior-design': {
    slug: 'interior-design',
    aliases: ['interior-design', 'interiors', 'interior'],
    number: '05',
    title: 'Interior Design',
    tagline: 'Tailored Luxury Living Spaces Crafted with Pakistani Woodwork, Marble & Warm Elegance',
    heroImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1600',
    secondaryImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    metaDescription: 'Luxury interior design services in Pakistan for DHA, Bahria, and Islamabad residences. 3D interior renders, custom ash wood kitchens, false ceiling layouts, and bespoke furniture.',
    overview: 'Great architecture demands an interior that feels equally magnificent. Our interior design team crafts spaces that embody understated luxury and effortless warmth. We blend rich natural Pakistani stones (Ziarat White, Badal marble) with imported Italian porcelain, solid seasoned Ash and Teak wood millwork, architectural COB lighting, and customized modular kitchens designed for high-heat Pakistani cooking.',
    pakistanContext: {
      plotSizes: ['5 Marla', '10 Marla', '1 Kanal', '2 Kanal Luxury Mansions'],
      bylawsAuthority: ['Residential lifestyle zoning (Formal Drawing / Dining vs Informal Family TV Lounge)'],
      marketChallenges: 'Local interior decorators prioritize gaudy, over-the-top ornamentation that quickly looks dated, use non-seasoned wood that bends in summer humidity, and install cheap kitchen boards that swell when exposed to water.',
      urbanSolution: 'We deliver cohesive contemporary minimalism with warm textural accents. Every cabinet, walk-in closet, and false ceiling is 3D visualized before fabrication using marine-grade water-resistant substrates, Blum hardware, and seasoned hardwood.'
    },
    keyFeatures: [
      {
        title: 'Photorealistic 3D Interior Visualizations',
        description: 'See every room in high-definition 3D with true-to-life textures, lighting fixtures, curtain draping, and material palettes.',
        standards: 'Complete visual walkthrough for every bedroom, lounge, and kitchen'
      },
      {
        title: 'Custom Modular Dirty & Show Kitchens',
        description: 'Ergonomic dual-kitchen layouts: an aesthetic Show Kitchen with island breakfast bar, plus a heavy-duty Dirty Kitchen with high-CFM exhaust.',
        standards: 'UV acrylic & matte anti-scratch shutters with Blum / Hafele soft-close hardware'
      },
      {
        title: 'Architectural False Ceilings & Lighting Design',
        description: 'Minimalist clean-line gypsum ceilings with hidden indirect warm LED profiles and anti-glare COB magnetic spotlights.',
        standards: 'No heavy sagging POP (Plaster of Paris); genuine Gyproc / Knauf boards'
      },
      {
        title: 'Bespoke Solid Wood Doors & Wardrobes',
        description: '8-foot high grand entrance doors, solid seasoned Ash/Teak wood frames, and floor-to-ceiling walk-in closets with integrated lighting.',
        standards: 'Kiln-dried moisture content < 10% to prevent seasonal warping'
      }
    ],
    specifications: [
      {
        category: 'Flooring & Wall Coverings',
        details: ['Imported 60x120cm & 80x160cm glazed porcelain vitrified tiles', 'Locally quarried and polished Ziarat Superior / Lasbela / Black & Gold marble', 'Fluted wood wall paneling, charcoal louvers, and bespoke brass metal inlays', 'Washable luxury emulsion paint & custom textured micro-cement feature walls'],
        pakistaniBrands: ['Master Tiles (Granite series)', 'RAK Ceramics', 'Kajaria', 'Jotun / Dulux Velvet Finish']
      },
      {
        category: 'Joinery & Hardware Specifications',
        details: ['Seasoned Ash Wood / Malaysian Teak veneer press boards', 'High-density moisture-resistant (HDMR) sheets for kitchen and vanity carcasses', 'Concealed magnetic door locks and architectural brass lever handles', 'Toughened 10mm glass shower enclosures with stainless steel 304 channel fittings'],
        pakistaniBrands: ['Al-Noor Lasani MDF / Particle Boards', 'ZRK Group HDMR', 'Blum Austria Hardware', 'Hafele Germany']
      }
    ],
    processSteps: [
      {
        phase: 'Step 01',
        title: 'Mood Boards & Space Planning',
        description: 'Defining design themes (Modern Luxury, Japandi, Contemporary Classic) and furniture spatial clearance layout.',
        timeline: 'Week 1 - 2'
      },
      {
        phase: 'Step 02',
        title: 'Detailed 3D Interior Views',
        description: 'Detailed 3D renders for TV lounge, drawing room, master suite, kitchen, and designer bathrooms with material callouts.',
        timeline: 'Week 3 - 5'
      },
      {
        phase: 'Step 03',
        title: 'Carpentry & False Ceiling Execution',
        description: 'Laser-level installation of gypsum ceilings, electrical light positioning, and on-site or factory carpentry fabrication.',
        timeline: 'Week 6 - 10'
      },
      {
        phase: 'Step 04',
        title: 'Polishing, Paint & Styling Handover',
        description: 'High-gloss / PU wood polishing, feature wall textures, lighting fixture commissioning, and final designer styling.',
        timeline: 'Week 11 - 14'
      }
    ],
    costBreakdown: {
      coverageAreaNote: 'Interior costs depend heavily on whether you choose semi-custom finishes or bespoke imported materials.',
      ratesPerSqFt: [
        { type: 'Interior Design Consultancy (3D & Drawings Only)', rate: 'PKR 80 - 150 / sq ft', scope: '3D renders, working drawings for carpenter, lighting layouts, material specs' },
        { type: 'Executive Interior Execution Package', rate: 'PKR 2,200 - 3,500 / sq ft', scope: 'Ceilings, feature walls, doors, closets, kitchens, paint, vanities' },
        { type: 'Ultra-Luxury Signature Interior', rate: 'PKR 4,000 - 6,500+ / sq ft', scope: 'Imported marble, custom Italian hardware, motorized curtains, high-end millwork' }
      ],
      typicalEstimates: [
        { plotSize: '5 Marla House (~ 2,000 sq ft)', coveredArea: '2,000 sq ft', approxCost: 'PKR 4.5M - 6.5M' },
        { plotSize: '10 Marla House (~ 3,300 sq ft)', coveredArea: '3,300 sq ft', approxCost: 'PKR 7.5M - 11.0M' },
        { plotSize: '1 Kanal House (~ 5,500 sq ft)', coveredArea: '5,500 sq ft', approxCost: 'PKR 12.0M - 18.0M' },
        { plotSize: '2 Kanal House (~ 9,000 sq ft)', coveredArea: '9,000 sq ft', approxCost: 'PKR 20.0M - 32.0M' }
      ]
    },
    pakistanCompanyComparison: [
      {
        category: 'Wood Seasoning & Durability',
        traditionalThekedaar: 'Uses green, unseasoned wood from local timber yards; doors jam and warp within the first monsoon season.',
        massDevelopers: 'Pre-fabricated hollow core doors with paper-thin veneer that chips easily.',
        urbanDesignApproach: 'Kiln-dried seasoned Ash and Teak wood with moisture testing; engineered 40mm thick solid-core flush doors.'
      },
      {
        category: 'Kitchen Engineering & Heat Resistance',
        traditionalThekedaar: 'Constructs concrete slabs covered with tiles; zero ergonomic pull-outs, easily ruined by grease and steam.',
        massDevelopers: 'Standard modular cabinets lacking dual dirty-kitchen ventilation planning.',
        urbanDesignApproach: 'Dedicated Show & Dirty kitchen dual-concept with quartz countertops, soft-close Blum hinges, and high-suction hoods.'
      },
      {
        category: 'Lighting Ambiance & Glare',
        traditionalThekedaar: 'Installs harsh blue-white 6500K LED panel lights that create an uncomfortable hospital-like atmosphere.',
        massDevelopers: 'Basic center ceiling bulbs with zero layered mood or task lighting.',
        urbanDesignApproach: 'Architectural warm-white (3000K) layered illumination: ambient cove, accent magnetic tracks, and task downlights.'
      }
    ],
    deliverables: [
      '3D Photorealistic Interior Views for Every Room & Living Zone',
      'Detailed False Ceiling Reflectance Plans with Lighting Dimensions',
      'Millwork & Wardrobe Fabrication Shop Drawings',
      'Complete Kitchen Layout Blueprints (Water, Gas, Electrical, Exhaust)',
      'Material Board with Exact Paint Codes, Tile Models & Fabric References'
    ],
    faq: [
      {
        question: 'What is the advantage of having a Dirty Kitchen in Pakistani homes?',
        answer: 'Pakistani culinary habits involve deep frying, spices, and high-heat cooking. A separate, well-ventilated Dirty Kitchen keeps oil fumes and food prep away from the public areas, allowing the open Show Kitchen to stay spotless and pristine for family gatherings.'
      },
      {
        question: 'Do you manufacture custom doors and cabinets in a factory or on-site?',
        answer: 'We utilize precision factory-pressed laminates and CNC-routed panels for all cabinets and doors, ensuring razor-sharp edges and factory-level PU paint finishes, with only final fitting and alignment performed on site.'
      }
    ]
  },

  'finishing': {
    slug: 'finishing',
    aliases: ['finishing', 'finishing-works'],
    number: '06',
    title: 'Finishing Works',
    tagline: 'Master Craftsmanship in Tiling, Marble, Paint, Woodwork & Sanitary Detailing',
    heroImage: 'https://images.unsplash.com/photo-1581858326456-7888b52125e1?auto=format&fit=crop&q=80&w=1600',
    secondaryImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200',
    metaDescription: 'Premium finishing works for homes in Pakistan. Flawless tile installation, Italian marble polishing, Jotun paint systems, Grohe bathroom fittings, and solid woodwork.',
    overview: 'Finishing is where a bare concrete shell transforms into a showcase of elegance. In Pakistan, even an expensive grey structure can look cheap if finishing works are rushed or executed by clumsy labor. We employ specialized master tile setters, polishers, and painters who follow zero-tolerance leveling, clean 1mm tile grout lines, diamond-pad marble polishing, and multi-stage wall sanding.',
    pakistanContext: {
      plotSizes: ['5 Marla', '10 Marla', '1 Kanal', '2 Kanal'],
      bylawsAuthority: ['Quality control inspection protocols for DHA, Bahria, and Islamabad luxury developments'],
      marketChallenges: 'Local finishing contractors use cheap acid-based marble polish that turns yellow, lay tiles with uneven lips ("Thekedaari takkar"), skip epoxy grouting, and water-down paint coats.',
      urbanSolution: 'Our finishing teams use laser leveling tools, tile leveling clips, waterproof epoxy grouts, imported diamond-resin marble polishing machines, and three-stage primer, putty, and topcoat paint procedures.'
    },
    keyFeatures: [
      {
        title: 'Zero-Lipping Tile Installation with Leveling Clips',
        description: 'Large-format porcelain tiles (60x120cm) laid with polymer-modified adhesive and leveling wedges for perfectly flat surfaces.',
        standards: 'No hollow sound underneath; 100% full mortar coverage'
      },
      {
        title: 'Italian Mirror Marble Polishing',
        description: 'Multi-grit diamond polishing from 50 to 3000 grit, finished with Italian crystallization powder for a glassy, mirror-like reflection.',
        standards: 'Zero harmful oxalic acid; long-lasting natural stone sheen'
      },
      {
        title: 'Multi-Coat Flawless Wall Paint Systems',
        description: 'Surface preparation with acrylic primer, two coats of water-resistant wall putty, machine sanding, and two coats of luxury emulsion.',
        standards: 'Jotun Fenomastic / Dulux Velvet touch finish'
      },
      {
        title: 'Premium Sanitary & Vanity Installations',
        description: 'Concealed wall-hung cisterns, thermostatic shower mixers, anti-shatter glass partitions, and seamless undermount basins.',
        standards: 'Grohe, Kohler, TOTO, and Porta executive fixtures'
      }
    ],
    specifications: [
      {
        category: 'Flooring & Wall Tile Materials',
        details: ['High-performance polymer tile bond (no cement-only adhesion that causes pop-offs)', 'Stain-proof epoxy tile grout resistant to mold and discolouration', 'Marble skirting with pencil round or bevel edge profiling', 'Rooftop heat-reflective white ceramic tiles or terracotta Khaprail pavers'],
        pakistaniBrands: ['Bostik Tile Bond', 'Sika Ceram Adhesive', 'Master Granito Porcelain', 'Laticrete Epoxy Grout']
      },
      {
        category: 'Hardware, Sanitary & Fixtures',
        details: ['SS 304 anti-odor floor drains with hair catchers', 'Concealed diverters with 10-year ceramic cartridge warranties', 'Granite or solid surface vanity countertops with polished basin cutouts', 'Custom mirrors with defogger pads and perimeter touch LED backlighting'],
        pakistaniBrands: ['Grohe Germany', 'Kohler USA', 'Master Sanitary Ware Pakistan', 'Porta Sanitary']
      }
    ],
    processSteps: [
      {
        phase: 'Stage 01',
        title: 'Surface Preparation & Curing Check',
        description: 'Testing moisture levels of plaster walls, cleaning floors, and applying bonding agent to concrete slabs.',
        timeline: 'Week 1 - 2'
      },
      {
        phase: 'Stage 02',
        title: 'Tile Laying & Marble Grinding',
        description: 'Setting floor and bathroom tiles using leveling clips; dry-grinding and grouting marble floors.',
        timeline: 'Week 3 - 6'
      },
      {
        phase: 'Stage 03',
        title: 'Woodwork, Doors & Cabinet Installation',
        description: 'Fitting door frames, solid wood shutters, kitchen cabinets, vanities, and wardrobe carcasses.',
        timeline: 'Week 7 - 10'
      },
      {
        phase: 'Stage 04',
        title: 'Paint Topcoats, Fixtures & Snagging',
        description: 'Final coats of emulsion, fixing sanitary ware, switch plates, chandeliers, and deep chemical cleaning.',
        timeline: 'Week 11 - 14'
      }
    ],
    costBreakdown: {
      coverageAreaNote: 'Finishing costs range based on choice of local vs imported porcelain, marble varieties, and sanitary fixture tiers.',
      ratesPerSqFt: [
        { type: 'Standard Quality Finishing', rate: 'PKR 2,600 - 3,200 / sq ft', scope: 'Master tiles, Porta sanitary ware, Brighto/Berger paint, local ash wood doors' },
        { type: 'Executive Quality Finishing', rate: 'PKR 3,500 - 4,500 / sq ft', scope: 'Imported porcelain, Ziarat White marble, Grohe fittings, Jotun paint, solid ash doors' },
        { type: 'Luxury Signature Finishing', rate: 'PKR 5,000 - 6,800+ / sq ft', scope: 'Italian marble, Kohler fixtures, custom glass work, high-end imported veneers' }
      ],
      typicalEstimates: [
        { plotSize: '5 Marla House (~ 2,000 sq ft)', coveredArea: '2,000 sq ft', approxCost: 'PKR 5.2M - 7.5M' },
        { plotSize: '10 Marla House (~ 3,300 sq ft)', coveredArea: '3,300 sq ft', approxCost: 'PKR 9.5M - 13.5M' },
        { plotSize: '1 Kanal House (~ 5,500 sq ft)', coveredArea: '5,500 sq ft', approxCost: 'PKR 16.5M - 23.0M' },
        { plotSize: '2 Kanal House (~ 9,000 sq ft)', coveredArea: '9,000 sq ft', approxCost: 'PKR 28.0M - 40.0M' }
      ]
    },
    pakistanCompanyComparison: [
      {
        category: 'Tile Leveling & Alignment',
        traditionalThekedaar: 'Lays tiles by eye without clips; edges catch feet ("Thokar"), tiles hollow out and crack within 2 years.',
        massDevelopers: 'Rapid batch installation with noticeable grout color variations and misaligned borders.',
        urbanDesignApproach: 'Mandatory mechanical leveling wedge clips on every tile, polymer bond adhesive, and 100% solid acoustic tap testing.'
      },
      {
        category: 'Marble Mirror Polish',
        traditionalThekedaar: 'Uses cheap oxalic acid that creates a fake temporary shine that fades after 3 months and etches the stone.',
        massDevelopers: 'Basic 3-stone grinding that leaves visible swirl marks and dull edges.',
        urbanDesignApproach: '7-stage Italian diamond pad crystallization polish that hardens the marble surface for decades of natural luster.'
      },
      {
        category: 'Bathroom Waterproofing Beneath Tiles',
        traditionalThekedaar: 'Pours tiles directly on damp concrete; water seeps through floor into living room ceiling below.',
        massDevelopers: 'Single bitumen brush coat that easily tears during plumbing rough-in.',
        urbanDesignApproach: 'Two coats of elastomeric cementitious waterproofing (SikaTop Seal 107) pond-tested for 48 hours before tiling.'
      }
    ],
    deliverables: [
      'Comprehensive Snag List Resolution with Zero Outstanding Defects',
      'Operating Manuals & Warranty Cards for All Fixtures (Pumps, Geysers, Hoods)',
      'Spare Tile & Marble Batch Archive Handed to Client for Future Maintenance',
      'Deep Chemical Floor & Glass Cleaning Prior to Handover',
      '1-Year Free Maintenance & Touch-Up Warranty'
    ],
    faq: [
      {
        question: 'Why do tiles in Pakistani bathrooms come loose or hollow out?',
        answer: 'Traditional masons mix pure cement and water (Neeru) to glue tiles. Porcelain tiles have nearly zero water absorption, so cement cannot grip them. We exclusively use polymer-modified tile adhesives (Bostik / Sika Ceram) that bond chemically to porcelain, preventing any hollowness.'
      },
      {
        question: 'Which paint is best suited for the weather extremes of Lahore and Islamabad?',
        answer: 'For interiors, we apply Jotun Fenomastic Pure Colours (washable, anti-fungal luxury emulsion). For exterior facades exposed to intense sun and monsoon rains, we use Jotun Jotashield Extreme or Dulux Weathershield, which reflect infrared heat and prevent damp stains.'
      }
    ]
  },

  'turnkey-construction': {
    slug: 'turnkey-construction',
    aliases: ['turnkey', 'turnkey-construction'],
    number: '07',
    title: 'Turnkey Construction',
    tagline: 'Complete Concept-to-Key Handover — Zero Hassle, Fixed Budget, Guaranteed Handover Date',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600',
    secondaryImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    metaDescription: 'Complete turnkey home construction in Pakistan for 5 Marla, 10 Marla, 1 Kanal & 2 Kanal villas in DHA and Bahria Town. Architecture, grey structure, luxury finishing, and key handover.',
    overview: 'Turnkey Construction (چابی پکڑو پروجیکٹ) is our flagship all-inclusive building solution. Building a home in Pakistan typically requires managing 25+ separate uncoordinated sub-contractors, corrupt suppliers, municipal inspectors, and endless material shortages. With Urban Turnkey, you deal with a single, accountable partner. We manage everything: architectural design, municipal approvals, civil grey structure, MEP engineering, luxury interior finishing, landscaping, and final key handover.',
    pakistanContext: {
      plotSizes: ['5 Marla', '10 Marla', '1 Kanal', '2 Kanal Luxury Villas'],
      bylawsAuthority: ['DHA (Lahore, Karachi, Islamabad)', 'Bahria Town', 'CDA / RDA', 'Naval Anchorage & PAF Housing'],
      marketChallenges: 'Clients usually suffer severe mental fatigue, budget overruns of 30-50%, delayed completion dates by 12+ months, and finger-pointing between the architect, civil thekedaar, and interior decorator.',
      urbanSolution: 'One contract, one transparent price, one guaranteed completion date with liquidated damages penalty for delays, and a unified engineering team aligned to deliver an award-winning residence.'
    },
    keyFeatures: [
      {
        title: 'Single Point of Absolute Accountability',
        description: 'No finger-pointing between the architect and builder. We take 100% legal, financial, and structural responsibility.',
        standards: 'Dedicated Senior Project Director assigned to your home'
      },
      {
        title: 'Guaranteed Handover Date with Delay Penalties',
        description: 'We commit to a binding completion date in the legal agreement, backed by a daily penalty clause if we are ever late.',
        standards: 'Transparent Gantt-chart milestones updated in real time'
      },
      {
        title: 'Fixed Itemized BOQ with Zero Hidden Charges',
        description: 'Every single bag of cement, square foot of tile, and electrical switch is itemized by brand and model before you sign.',
        standards: 'No surprise bills halfway through the build'
      },
      {
        title: 'Comprehensive 10-Year Structural Warranty',
        description: 'Complete peace of mind covering foundation integrity, structural concrete, and roof waterproofing, plus 1 year free maintenance.',
        standards: 'Includes bi-annual structural health inspections'
      }
    ],
    specifications: [
      {
        category: 'Scope of All-Inclusive Turnkey Delivery',
        details: [
          'Phase 1: Soil testing, 3D architectural design & DHA/CDA map approval',
          'Phase 2: Heavy Grey Structure (Grade 60 steel, Bestway cement, Awwal bricks, DPC, water tanks)',
          'Phase 3: Complete MEP engineering (Pakistan Cables, Master PPRC, AC piping, DB panels, earthing)',
          'Phase 4: Luxury Finishing (Imported tiles/marble, Jotun paints, false ceilings, Grohe sanitary)',
          'Phase 5: Woodwork & Millwork (Kitchens with appliances, solid ash doors, wardrobes, vanities)',
          'Phase 6: Exterior Landscaping (Front lawn turf, planter boxes, automated gate prep, exterior illumination)'
        ],
        pakistaniBrands: ['Mughal Supreme / Amreli', 'Bestway / Maple Leaf', 'Pakistan Cables', 'Master Pipes', 'Jotun', 'Grohe', 'Master Tiles']
      },
      {
        category: 'Turnkey Handover Standards',
        details: [
          'Pre-handover deep industrial cleaning and glass descaling',
          'Full-house electrical circuit testing & water pressure commissioning',
          'Key handover ceremony with engraved brass box and all master keys',
          'Assistance with DHA / Bahria / CDA permanent utility meters (Electricity, Gas, Water)'
        ],
        pakistaniBrands: ['Turnkey Executive Care', '10-Year Urban Warranty', '1-Year Free Snag Care']
      }
    ],
    processSteps: [
      {
        phase: 'Month 01',
        title: 'Design, BOQ & Authority Approval',
        description: 'Architectural planning, 3D renders, itemized BOQ finalization, contract signing, and submission map approval.',
        timeline: 'Weeks 1 - 4'
      },
      {
        phase: 'Month 02 - 04',
        title: 'Foundation & Grey Structure',
        description: 'Excavation, termite barrier, columns, brickwork, beam casting, slabs, and underground/overhead water tanks.',
        timeline: 'Weeks 5 - 16'
      },
      {
        phase: 'Month 05 - 07',
        title: 'MEP Rough-in & Plastering',
        description: 'PPRC plumbing, electrical wiring, AC copper tubes, double-layer cement plastering, and waterproofing.',
        timeline: 'Weeks 17 - 28'
      },
      {
        phase: 'Month 08 - 10',
        title: 'Finishing, Kitchens & Handover',
        description: 'Flooring tiles/marble, paint, custom kitchens, doors, sanitary fittings, lighting, final snagging, and key handover.',
        timeline: 'Weeks 29 - 40'
      }
    ],
    costBreakdown: {
      coverageAreaNote: 'Complete turnkey packages cover everything from blueprint conception to physical key handover.',
      ratesPerSqFt: [
        { type: 'Executive Standard Turnkey', rate: 'PKR 5,600 - 6,500 / sq ft', scope: 'Complete A-Grade home with high-end Pakistani and imported finishes' },
        { type: 'Premium Luxury Turnkey', rate: 'PKR 6,800 - 7,800 / sq ft', scope: 'Imported Spanish tiles, solid ash doors, Grohe fittings, designer false ceilings, Jotun paint' },
        { type: 'Ultra-Luxury Signature Turnkey', rate: 'PKR 8,200 - 10,500+ / sq ft', scope: 'Italian marble, custom high-end kitchens with appliances, smart home automation, luxury facade' }
      ],
      typicalEstimates: [
        { plotSize: '5 Marla Villa (~ 2,000 sq ft covered area)', coveredArea: '2,000 sq ft', approxCost: 'PKR 11.5M - 14.5M (Complete Turnkey)' },
        { plotSize: '10 Marla Villa (~ 3,300 sq ft covered area)', coveredArea: '3,300 sq ft', approxCost: 'PKR 19.5M - 24.5M (Complete Turnkey)' },
        { plotSize: '1 Kanal Villa (~ 5,500 sq ft covered area)', coveredArea: '5,500 sq ft', approxCost: 'PKR 34.0M - 44.0M (Complete Turnkey)' },
        { plotSize: '2 Kanal Villa (~ 9,000 sq ft covered area)', coveredArea: '9,000 sq ft', approxCost: 'PKR 58.0M - 75.0M (Complete Turnkey)' }
      ]
    },
    pakistanCompanyComparison: [
      {
        category: 'Accountability & Stress Level',
        traditionalThekedaar: 'Homeowner must buy materials daily, negotiate with 15 stubborn sub-trades, and suffer endless headaches.',
        massDevelopers: 'Corporate rigidity; refuses bespoke customizations or personal architectural alterations.',
        urbanDesignApproach: 'Complete peace of mind. We manage every single detail while you focus on your career and family.'
      },
      {
        category: 'Budget Predictability',
        traditionalThekedaar: 'Initial estimate of PKR 15M balloons to PKR 25M with zero explanation or receipts.',
        massDevelopers: 'Frequent escalation surcharge notices and hidden development charges.',
        urbanDesignApproach: 'Signed fixed itemized BOQ contract with milestone payments tied directly to verified physical progress.'
      },
      {
        category: 'Project Timeline Guarantee',
        traditionalThekedaar: 'A 9-month project typically stretches into 24-30 months of agonizing delays and excuses.',
        massDevelopers: 'Subject to macro commercial project schedules and periodic construction pauses.',
        urbanDesignApproach: 'Strict project delivery schedule with liquidated damages financial penalty if we miss the agreed handover date.'
      }
    ],
    deliverables: [
      'Gold-Key Handover Ceremony with Complete Executive Documentation Dossier',
      'Original DHA / Bahria / CDA Stamped Sanction Maps & Completion Approvals',
      'As-Built 3D & 2D Blueprints for Architecture, Electrical, Plumbing, and HVAC',
      '10-Year Structural Integrity Warranty Certificate',
      '1-Year Free Maintenance & Snag-Free Emergency Support Package',
      'Appliance, Pump, Geyser, and Fixture Manufacturer Warranty Handover'
    ],
    faq: [
      {
        question: 'What is the biggest advantage of Turnkey Construction for Overseas Pakistanis?',
        answer: 'Overseas Pakistanis often send money to relatives or local thekedaars who misuse funds or deliver poor quality. With Urban Turnkey, you have a formal legal contract, milestone payments held until quality is verified, weekly video reports, and a professional engineering firm legally bound to deliver your luxury home on time.'
      },
      {
        question: 'Can I customize the finishing materials during a Turnkey contract?',
        answer: 'Absolutely. Before work starts, you receive a detailed material schedule. During the finishing phase, our interior design team accompanies you (or coordinates virtually via 3D renders) to select your preferred tile patterns, marble slabs, paint shades, and sanitary ware models.'
      }
    ]
  }
};
