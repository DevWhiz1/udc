import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faKey, 
  faFileContract, 
  faClock, 
  faShieldHalved, 
  faHandshakeAngle, 
  faVideo, 
  faCircleCheck,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import PageHeader from '../../components/layout/PageHeader';

const turnkeyPillars = [
  {
    icon: faHandshakeAngle,
    title: 'Single Point of Absolute Responsibility',
    desc: 'No finger-pointing between the architect, the civil thekedaar, and the interior designer. Urban Design & Construction assumes 100% legal, structural, aesthetic, and financial responsibility from the moment soil is turned until the key turns in your front door.'
  },
  {
    icon: faClock,
    title: 'Binding Handover Date with Delay Penalties',
    desc: 'In Pakistan, projects routinely stretch from 10 months into 2-3 years. We sign a contractually guaranteed completion date backed by liquidated damages financial penalty clauses if we are ever late.'
  },
  {
    icon: faFileContract,
    title: 'Fixed Itemized Scope with Zero Hidden Surprises',
    desc: 'Every single square foot of tile, brand of cement, gauge of electrical cable, and model of sanitary fixture is cataloged and frozen before work begins. You never suffer arbitrary demands for extra cash halfway through the build.'
  },
  {
    icon: faShieldHalved,
    title: 'Comprehensive 10-Year Structural Warranty',
    desc: 'Full long-term peace of mind covering foundation stability, structural concrete, and moisture proofing, accompanied by 1 year of complimentary maintenance and seasonal snag-free care.'
  }
];

const turnkeyJourney = [
  {
    stage: '01',
    title: 'Concept & Municipal Approvals',
    timeline: 'Month 1',
    scope: 'Soil investigation, custom 2D floor plans, 3D exterior renders, detailed Bill of Quantities (BOQ), and 100% guaranteed DHA, Bahria, LDA, or CDA map approvals.'
  },
  {
    stage: '02',
    title: 'Heavy Grey Structure Civil Engineering',
    timeline: 'Months 2 - 4',
    scope: 'Deep excavation, termite barrier, Grade-60 steel rebar cages, Awwal brick masonry, slab pouring with mechanical vibrators, and monolithic RCC water reservoirs.'
  },
  {
    stage: '03',
    title: 'Concealed MEP Systems & Pre-wiring',
    timeline: 'Months 5 - 6',
    scope: 'Concealed Pakistan Cables wiring, Master PPRC water lines with 24-hr 10-Bar pressure tests, AC copper tubing, solar net-metering conduits, and wire-mesh plastering.'
  },
  {
    stage: '04',
    title: 'Luxury Finishing & Surface Artistry',
    timeline: 'Months 7 - 9',
    scope: 'Zero-lipping porcelain tiling, 7-stage diamond mirror marble crystallization, multi-coat Jotun paint systems, and Grohe / Kohler concealed sanitary fixture installation.'
  },
  {
    stage: '05',
    title: 'Custom Millwork, Kitchens & Lighting',
    timeline: 'Month 10',
    scope: 'Show & Dirty kitchen cabinetry with Blum hardware, 8-foot solid ash doors, walk-in closets, designer false ceilings, and architectural 3000K layered lighting.'
  },
  {
    stage: '06',
    title: 'Gold-Key Handover & Warranty Dossier',
    timeline: 'Month 10 - 11',
    scope: '150-point zero-snag inspection, industrial chemical deep cleaning, landscaped lawn, society completion certificate assistance, and formal key handover ceremony.'
  }
];

export default function TurnkeyPage() {
  return (
    <div className="bg-warm-offwhite min-h-screen">
      <PageHeader
        title="Turnkey Construction"
        subtitle="Concept-to-Key White-Glove Villa Construction in Pakistan — One Accountable Partner, Fixed Timeline, Zero Stress"
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1800"
      />

      {/* Subnav */}
      <div className="bg-white border-b border-gray-200 sticky top-[72px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between text-xs md:text-sm">
            <div className="flex items-center space-x-2 text-gray-500">
              <Link to="/" className="hover:text-gold-primary">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-gold-primary">Services</Link>
              <span>/</span>
              <span className="text-gold-primary font-medium">Turnkey Construction</span>
            </div>
            <div className="flex items-center space-x-3 text-xs">
              <span className="text-gray-400 hidden sm:inline">Concept-to-Key</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
              <span className="text-gold-secondary font-semibold">Contractual Completion Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: The White-Glove Promise */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-gold-primary/10 flex items-center justify-center text-gold-primary">
                <FontAwesomeIcon icon={faKey} />
              </div>
              <span className="text-xs font-bold text-gold-primary uppercase tracking-widest">
                Discipline 07 · Executive Turnkey Delivery
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-playfair font-semibold text-charcoal-dark leading-tight">
              Building a Home in Pakistan Without the Agony & Stress
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Traditionally, building a custom home in Pakistan is an ordeal that exhausts families. Homeowners find themselves coordinating over 25 separate uncommunicative sub-contractors—masons, steel fixers, electricians, plumbers, tile setters, carpenters, painters—dealing with stolen materials, municipal corruption, and constant work stoppages.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Our Turnkey Construction (چابی پکڑو سروس) replaces this chaos with executive order. You partner with a single, elite engineering entity. We handle every detail: soil analysis, 3D architectural design, municipal maps, civil grey structure, MEP systems, luxury finishing, and landscaped gardens. You simply inspect progress at your leisure and turn the key into a pristine, move-in-ready masterpiece.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4 text-xs md:text-sm">
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs">
                <span className="font-bold text-charcoal-dark block mb-1">Contractual Delay Penalties</span>
                <p className="text-gray-500">We commit to a binding handover date in writing, backed by daily delay compensation.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs">
                <span className="font-bold text-charcoal-dark block mb-1">10-Year Structural Warranty</span>
                <p className="text-gray-500">Formal legal warranty covering foundation stability, concrete frames, and roof sealing.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200" 
                alt="Turnkey Luxury Residence in Pakistan"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs uppercase tracking-wider text-gold-primary font-semibold mb-1">
                  Concept to Key Handover
                </span>
                <p className="text-lg font-playfair font-medium">
                  Designed, Engineered, Finished & Landscaped by Urban Design & Construction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The 4 Turnkey Pillars */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-primary tracking-[0.2em] text-xs font-bold uppercase mb-3 block">
              Executive Guarantees
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charcoal-dark mb-4">
              Four Pillars of Our Turnkey Building Model
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Why discerning families in DHA Lahore, Islamabad, and Bahria Town trust us with their life savings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {turnkeyPillars.map((item, idx) => (
              <div key={idx} className="bg-warm-offwhite rounded-xl p-8 border border-gray-200 shadow-2xs">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold-primary/10 text-gold-primary flex items-center justify-center text-lg">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <h3 className="text-lg md:text-xl font-playfair font-semibold text-charcoal-dark">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pl-13">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The 6-Stage Turnkey Journey */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-primary tracking-[0.2em] text-xs font-bold uppercase mb-3 block">
            The Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charcoal-dark mb-4">
            The 6-Stage Turnkey Construction Journey
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            From preliminary architectural sketches to your formal key handover ceremony.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {turnkeyJourney.map((j) => (
            <div key={j.stage} className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-gold-primary uppercase tracking-widest">
                    Stage {j.stage}
                  </span>
                  <span className="text-xs font-mono bg-light-gray px-2 py-0.5 rounded text-gray-600">
                    {j.timeline}
                  </span>
                </div>
                <h3 className="font-playfair font-semibold text-lg text-charcoal-dark mb-2">
                  {j.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {j.scope}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs text-emerald-700 font-medium">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-1.5" />
                <span>Single-Source Responsibility</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: VIP Remote Portal for Overseas Pakistanis */}
      <section className="py-20 bg-charcoal-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-gold-primary tracking-[0.2em] text-xs font-bold uppercase block">
                Expatriate Peace of Mind
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold leading-tight">
                Complete Oversight for Overseas Pakistani Homeowners
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Living in London, Dubai, New York, or Riyadh shouldn't prevent you from building your dream home in Pakistan. Our turnkey portal gives you more oversight than a homeowner visiting a dusty construction site every day.
              </p>

              <div className="space-y-4 pt-2 text-xs md:text-sm text-gray-300">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 flex items-start space-x-3">
                  <FontAwesomeIcon icon={faVideo} className="text-gold-primary text-lg mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">Weekly Drone & 4K Site Video Walkthroughs</span>
                    Every Sunday, you receive a video briefing from your designated Project Director showing exact milestone progress, material arrivals, and current work.
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-lg border border-white/10 flex items-start space-x-3">
                  <FontAwesomeIcon icon={faFileContract} className="text-gold-primary text-lg mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">Bank-Verified Milestone Escrow Releases</span>
                    You only release funds as verified physical milestones are achieved and inspected. Zero advance risk.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-6">
                <div className="flex items-center space-x-3 text-gold-primary">
                  <FontAwesomeIcon icon={faKey} className="text-2xl" />
                  <h3 className="font-playfair text-2xl font-semibold text-white">
                    What You Receive at Key Handover
                  </h3>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  Upon completion, we present you with our signature Executive Handover Dossier:
                </p>

                <ul className="space-y-2.5 text-xs text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-gold-primary font-bold">✓</span>
                    <span>Gold-Key presentation box with master keys for all entrance and interior doors.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-gold-primary font-bold">✓</span>
                    <span>Approved completion certificate from DHA, CDA, or local housing directorate.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-gold-primary font-bold">✓</span>
                    <span>10-Year Structural Integrity Warranty Certificate.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-gold-primary font-bold">✓</span>
                    <span>1-Year Free Maintenance & Emergency Snag Resolution Card.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-gold-primary font-bold">✓</span>
                    <span>All manufacturer warranties for kitchen appliances, geysers, pumps, and electrical panels.</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-white/10 text-center">
                  <Link
                    to="/contact"
                    className="inline-block bg-gold-primary hover:bg-gold-secondary text-white px-8 py-3.5 rounded font-medium text-sm transition-colors"
                  >
                    Schedule Turnkey Discovery Session
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-playfair font-semibold text-charcoal-dark mb-4">
            Build Your Luxury Villa with Complete Peace of Mind
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-8">
            Speak with our Managing Director and Principal Engineers to plan your turnkey project for 5 Marla, 10 Marla, 1 Kanal, or 2 Kanal plots in Pakistan.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="bg-gold-primary hover:bg-gold-secondary text-white px-8 py-3.5 rounded font-medium text-sm transition-colors w-full sm:w-auto"
            >
              Book Turnkey Consultation
            </Link>
            <a
              href="https://wa.me/923155874112"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 hover:border-charcoal-dark text-charcoal-dark px-8 py-3.5 rounded font-medium text-sm transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-emerald-600 text-lg" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
