import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faShieldHalved, 
  faHardHat, 
  faVial, 
  faCheckDouble, 
  faFileContract, 
  faVideo, 
  faCircleCheck,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import PageHeader from '../../components/layout/PageHeader';

const engineeringProtocols = [
  {
    title: 'Soil Bearing Capacity & Foundation Engineering',
    desc: 'Excavation down to virgin load-bearing strata with plate load / standard penetration testing (SPT). We never cast footings on loose uncompacted backfill.',
    metric: 'Depth verified against soil geotechnical report'
  },
  {
    title: 'Third-Party Laboratory Concrete Cube Crush Testing',
    desc: 'Sample cubes cast from every major pour (footings, columns, roof slabs) tested at 7-day and 28-day intervals at accredited university engineering labs.',
    metric: 'Target strength: 3,000 to 4,000 PSI certified'
  },
  {
    title: 'Grade-60 Prime Billet Steel Tensile Verification',
    desc: 'Only certified deformed billet steel from top-tier mills (Mughal Supreme / Amreli). We verify yield strength (60,000 PSI min) and elongation percentage.',
    metric: '100% mill test certificates provided to client'
  },
  {
    title: 'Continuous 14 to 21-Day Water Curing Protocol',
    desc: 'In Pakistan’s arid climate, premature drying causes structural micro-fissures. Our sites maintain saturated burlap (jute sacks) and automated ponding.',
    metric: 'Mandatory 21 days for roof slabs & columns'
  }
];

const constructionPhases = [
  {
    number: '01',
    phase: 'Substructure & Earthwork',
    scope: 'Demarcation, mechanical excavation, chemical termite trenching, lean concrete leveling bed, raft or isolated strip footings, and plinth tie-beam casting.'
  },
  {
    number: '02',
    phase: 'Superstructure Frame Execution',
    scope: 'Reinforced concrete columns, Awwal burnt red brick masonry, lintel beam framing, steel formwork shuttering, and slab reinforcement with embedded MEP conduits.'
  },
  {
    number: '03',
    phase: 'Waterproofing & Enclosure',
    scope: 'Dual-layer horizontal DPC bitumen membranes, vertical basement tanking, parapet walls, rooftop heat-insulation screed, and monolithic RCC water tanks.'
  },
  {
    number: '04',
    phase: 'Dual-Coat Cement Plastering',
    scope: 'Galvanized wire mesh anchored at all column-masonry junctions to prevent settlement cracks, followed by 1:4 ratio laser-plumbed internal and external plaster.'
  }
];

export default function ConstructionPage() {
  return (
    <div className="bg-warm-offwhite min-h-screen">
      <PageHeader
        title="General Construction"
        subtitle="PEC-Licensed Civil Engineering, Lab-Tested Materials & Uncompromising Site Supervision in Pakistan"
        image="https://images.unsplash.com/photo-1541881451213-9799292db200?auto=format&fit=crop&q=80&w=1800"
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
              <span className="text-gold-primary font-medium">General Construction</span>
            </div>
            <div className="flex items-center space-x-3 text-xs">
              <span className="text-gray-400 hidden sm:inline">PEC Licensed Engineers</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
              <span className="text-gold-secondary font-semibold">10-Year Structural Integrity Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Civil Engineering Excellence */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-gold-primary/10 flex items-center justify-center text-gold-primary">
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <span className="text-xs font-bold text-gold-primary uppercase tracking-widest">
                Discipline 02 · Civil & Structural Engineering
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-playfair font-semibold text-charcoal-dark leading-tight">
              Building with Scientific Rigor, Not Uneducated Guesswork
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              In Pakistan’s residential construction market, building a house is too often left to untrained petty thekedaars who mix concrete by eye ("Andaza"), use bent recycled steel, and pour slabs without compaction vibrators. The result is structural cracking, sinking foundations, and catastrophic water seepage within just 24 months of moving in.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Urban Design & Construction approaches building as a rigorous engineering discipline. Every foundation footing, concrete batch mix, column tie, and brick alignment is monitored on-site by certified Pakistan Engineering Council (PEC) civil engineers. We test every truckload of material and stand behind our work with a legally binding 10-Year Structural Integrity Warranty.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs flex items-center space-x-3">
                <FontAwesomeIcon icon={faShieldHalved} className="text-gold-primary text-2xl" />
                <div>
                  <div className="font-semibold text-charcoal-dark text-sm">PEC Certified Site Engineers</div>
                  <div className="text-xs text-gray-500">Full-time resident on your site</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs flex items-center space-x-3">
                <FontAwesomeIcon icon={faVial} className="text-gold-primary text-2xl" />
                <div>
                  <div className="font-semibold text-charcoal-dark text-sm">Laboratory Certified Strength</div>
                  <div className="text-xs text-gray-500">Concrete cube crush & tensile testing</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1541881451213-9799292db200?auto=format&fit=crop&q=80&w=1200" 
                alt="Construction engineering site in Pakistan"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs uppercase tracking-wider text-gold-primary font-semibold mb-1">
                  Quality Assurance
                </span>
                <p className="text-lg font-playfair font-medium">
                  Laser Leveling, Steel Vibrators & Engineered Mix Designs on Every Pour
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Laboratory Testing & Quality Assurance */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-primary tracking-[0.2em] text-xs font-bold uppercase mb-3 block">
              Testing Protocols
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charcoal-dark mb-4">
              Scientific Quality Control at Every Construction Stage
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              We never take a supplier’s word for granted. Every batch of concrete and rebar is sampled and verified against international ASTM and BSS standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {engineeringProtocols.map((proto, idx) => (
              <div key={idx} className="bg-warm-offwhite rounded-xl p-8 border border-gray-200 shadow-2xs hover:border-gold-primary/40 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-8 h-8 rounded-full bg-gold-primary/10 text-gold-primary flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <span className="bg-white px-3 py-1 rounded text-xs font-mono text-gray-500 border border-gray-200">
                    {proto.metric}
                  </span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-charcoal-dark mb-3">
                  {proto.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {proto.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The 4 Phases of Civil Execution */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-primary tracking-[0.2em] text-xs font-bold uppercase mb-3 block">
            Execution Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charcoal-dark mb-4">
            How We Execute Civil Superstructures
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            From deep soil excavation to double-coat plastering, every phase is recorded with digital milestones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {constructionPhases.map((phase) => (
            <div key={phase.number} className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="text-3xl font-playfair font-bold text-gold-primary mb-3">
                  {phase.number}
                </div>
                <h3 className="font-playfair font-semibold text-lg text-charcoal-dark mb-3">
                  {phase.phase}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {phase.scope}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs text-emerald-700 font-medium">
                <FontAwesomeIcon icon={faCheckDouble} className="mr-1.5" />
                <span>Supervised by PEC Engineer</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Remote Management for Overseas Pakistanis */}
      <section className="py-20 bg-charcoal-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-gold-primary tracking-[0.2em] text-xs font-bold uppercase block">
                Expatriate Client Care
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold leading-tight">
                Designed for Overseas Pakistanis (UK, UAE, USA, Saudi Arabia)
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Over 60% of our custom home construction projects belong to non-resident Pakistanis. We understand the heartbreak of sending hard-earned remittances to local relatives or thekedaars who mismanage funds, buy cheap materials, and leave the project stranded.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-4 bg-white/5 p-4 rounded-lg border border-white/10">
                  <FontAwesomeIcon icon={faVideo} className="text-gold-primary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-base">Weekly 4K Drone & Video Walkthroughs</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      Every Sunday, you receive high-resolution drone footage and site walk videos detailing concrete progress, brick counts, and structural milestones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/5 p-4 rounded-lg border border-white/10">
                  <FontAwesomeIcon icon={faFileContract} className="text-gold-primary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-base">Milestone-Based Escrow Payments</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      Payments are tied strictly to physical progress verified by photographic proof. You never pay for uncast concrete or unlaid bricks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-6">
                <h3 className="font-playfair text-2xl font-semibold text-white">
                  Why Construction Fails in Pakistan vs Our Guarantee
                </h3>

                <div className="space-y-4 text-xs md:text-sm">
                  <div className="p-4 rounded-lg bg-red-950/40 border border-red-800/40">
                    <span className="font-bold text-red-400 block mb-1">Common Contractor Pitfall:</span>
                    <p className="text-gray-300">
                      Contractor vanishes halfway through the build after receiving an advance payment, or uses salty brackish ground water that rots internal steel rebar within 5 years.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-gold-primary/10 border border-gold-primary/30">
                    <span className="font-bold text-gold-primary block mb-1">Urban Engineering Standard:</span>
                    <p className="text-gray-200">
                      Legally binding corporate contract backed by PEC registration, fresh water supply tankers, factory mill steel delivery receipts, and a 10-Year Structural Integrity Warranty.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 text-center">
                  <Link
                    to="/contact"
                    className="inline-block bg-gold-primary hover:bg-gold-secondary text-white px-8 py-3.5 rounded font-medium text-sm transition-colors"
                  >
                    Request Technical Site Consultation
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
            Building in DHA, Bahria Town, or Islamabad?
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-8">
            Speak directly with our senior site engineers to evaluate your plot’s soil bearing capacity, boundary coordinates, and structural blueprint vetting.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="bg-gold-primary hover:bg-gold-secondary text-white px-8 py-3.5 rounded font-medium text-sm transition-colors w-full sm:w-auto"
            >
              Book Site Feasibility Session
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
