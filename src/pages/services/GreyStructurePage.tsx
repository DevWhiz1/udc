import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHardHat, 
  faWater, 
  faCube, 
  faLayerGroup, 
  faShieldCat, 
  faCheckCircle, 
  faFileShield,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import PageHeader from '../../components/layout/PageHeader';

const fourCornerstones = [
  {
    icon: faCube,
    title: '1. Special Awwal Burnt Clay Bricks (اول اینٹ)',
    spec: 'Kiln-fired, 9" x 4.5" x 3", Uniform Red Color',
    details: 'We reject porous "Doem" (second class) or warped "Khengur" bricks. Every brick must produce a clear metallic ringing sound when struck, absorb less than 15% water, and be completely free of saltpetre (Shora / Kallur) that eats through paint years later.'
  },
  {
    icon: faLayerGroup,
    title: '2. 100% Deformed Grade-60 Billet Steel',
    spec: 'Mughal Supreme / Amreli Steels / Pak Iron',
    details: 'We never compromise on rebar. Exclusively prime billet steel with 60,000 PSI minimum yield strength. We enforce exact lap lengths, hook bends, and provide steel chair spacers so reinforcement never sinks into the shuttering boards.'
  },
  {
    icon: faWater,
    title: '3. Dual-Layer DPC & Moisture Barrier (Seem Defense)',
    spec: 'Sika Admixture + Bitumen + 500 Gauge Polythene',
    details: 'Dampness (Seem) ruins 90% of Pakistani homes. We install a dual-layer horizontal Damp Proof Course (DPC) at plinth level with bitumen hot-coat and heavy-gauge polythene sheeting, plus vertical bitu-plastic tanking on all retaining walls.'
  },
  {
    icon: faShieldCat,
    title: '4. Monolithic RCC Water Reservoirs',
    spec: 'Cast-in-Place Concrete with Crystalline Waterproofing',
    details: 'Traditional brick water tanks develop micro-cracks that silently seep into foundation soil, causing house settling. We pour monolithic RCC underground and overhead tanks with crystalline waterproofing chemicals in a single continuous pour.'
  }
];

const greyMilestones = [
  { step: '01', title: 'Excavation & Termite Injection', desc: 'Digging down to virgin load-bearing strata, chemical soil trenching with Termidor, and 4-inch lean concrete leveling bed.' },
  { step: '02', title: 'Plinth Beam & Underground Tank', desc: 'Raft/strip footing reinforcement, plinth tie beams, plinth soil compaction, DPC application, and monolithic RCC tank casting.' },
  { step: '03', title: 'Ground Floor Columns & Masonry', desc: 'RCC column casting with mechanical vibrators, Awwal brick wall construction with 1:4 cement-sand mortar, and lintel beams.' },
  { step: '04', title: 'Ground Floor Slab & MEP Conduits', desc: 'Steel formwork shuttering, double-layer Grade-60 steel rebar mat, electrical PVC pipe routing, fan boxes, and slab pouring.' },
  { step: '05', title: 'First Floor & Mumty Structure', desc: 'Upper floor columns, masonry, first floor slab casting, rooftop mumty, overhead water tank, and parapet boundary walls.' },
  { step: '06', title: 'Plastering with Wire Mesh Protection', desc: 'Galvanized wire mesh (jalee) anchored at all column-masonry junctions to prevent settlement cracks, followed by 2-coat laser-plumbed plaster.' }
];

export default function GreyStructurePage() {
  return (
    <div className="bg-warm-offwhite min-h-screen">
      <PageHeader
        title="Grey Structure Construction"
        subtitle="The Unbreakable Backbone of Your Home — Grade-60 Deformed Steel, Awwal Brick Masonry & Permanent Moisture Defense"
        image="https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&q=80&w=1800"
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
              <span className="text-gold-primary font-medium">Grey Structure</span>
            </div>
            <div className="flex items-center space-x-3 text-xs">
              <span className="text-gray-400 hidden sm:inline">100% Prime Billet Steel</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
              <span className="text-gold-secondary font-semibold">Zero-Seem Damp Proofing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: The Raw Backbone */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-gold-primary/10 flex items-center justify-center text-gold-primary">
                <FontAwesomeIcon icon={faHardHat} />
              </div>
              <span className="text-xs font-bold text-gold-primary uppercase tracking-widest">
                Discipline 03 · Structural Civil Engineering
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-playfair font-semibold text-charcoal-dark leading-tight">
              The Critical Phase You Cannot Fix Once Plastered
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              In the Pakistani real estate landscape, tiles can be replaced, paints can be recoated, and lights can be swapped. But the Grey Structure (خام ڈھانچہ) is the permanent skeleton of your residence. If a thekedaar cuts corners on steel rebar thickness, uses salty sand, or forgets the Damp Proof Course, the damage is irreversible.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              At Urban Design & Construction, our grey structures are engineered to stand for generations. We utilize steel-faced formwork (not warped wooden planks), high-frequency mechanical vibrators to eliminate dangerous honeycombing, and strict water curing regimes that produce rock-solid compressive concrete strength.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4 text-xs md:text-sm">
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs">
                <span className="font-bold text-charcoal-dark block mb-1">Mughal / Amreli Prime Steel</span>
                <p className="text-gray-500">Factory mill delivery receipts verified at gate before unloading.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs">
                <span className="font-bold text-charcoal-dark block mb-1">Maple Leaf / Bestway OPC Cement</span>
                <p className="text-gray-500">Fresh 53-grade Portland cement stored in dry, elevated on-site silos.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&q=80&w=1200" 
                alt="Grey structure construction in Pakistan"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs uppercase tracking-wider text-gold-primary font-semibold mb-1">
                  Civil Engineering Standard
                </span>
                <p className="text-lg font-playfair font-medium">
                  Awwal Red Brick Masonry, Rebar Spacer Chairs & Laser-Plumbed Slabs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The 4 Cornerstones of Unbreakable Grey Structure */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-primary tracking-[0.2em] text-xs font-bold uppercase mb-3 block">
              Structural Fundamentals
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charcoal-dark mb-4">
              The 4 Cornerstones of an Urban Grey Structure
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              The difference between a home that cracks and dampens in 3 years versus a fortress that endures for a century.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {fourCornerstones.map((item, idx) => (
              <div key={idx} className="bg-warm-offwhite rounded-xl p-8 border border-gray-200 shadow-2xs">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold-primary/10 text-gold-primary flex items-center justify-center text-lg">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-playfair font-semibold text-charcoal-dark">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono text-gold-secondary font-medium">
                      {item.spec}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pl-13">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Step-by-Step Grey Structure Roadmap */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-primary tracking-[0.2em] text-xs font-bold uppercase mb-3 block">
            Construction Sequence
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charcoal-dark mb-4">
            Step-by-Step Grey Structure Execution
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Every phase must be signed off by our structural site engineer before proceeding to the next level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {greyMilestones.map((m) => (
            <div key={m.step} className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-gold-primary uppercase tracking-widest block mb-2">
                  Stage {m.step}
                </span>
                <h3 className="font-playfair font-semibold text-lg text-charcoal-dark mb-2">
                  {m.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {m.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs text-gray-400">
                <FontAwesomeIcon icon={faCheckCircle} className="text-gold-primary mr-1.5" />
                <span>Engineered Quality Gate</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Dampness (Seem) & Termite Deep-Dive */}
      <section className="py-20 bg-charcoal-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-gold-primary tracking-[0.2em] text-xs font-bold uppercase block">
                Permanently Curing Seem
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold leading-tight">
                Why Dampness (Seem) Destroys Pakistani Homes & How We Stop It
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                In cities like Lahore and Islamabad with high water tables, capillary action sucks ground moisture up through porous brick foundations. Within 12 months, paint bubbles, plaster crumbles, and black mold spreads.
              </p>

              <div className="space-y-4 pt-2 text-sm text-gray-300">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="font-bold text-gold-primary block mb-1">1. Chemical Soil Anti-Termite Injection</span>
                  Flooding the virgin soil trench with Bayer Termidor chemical before concrete pouring creates an impenetrable chemical shield against underground white ants.
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="font-bold text-gold-primary block mb-1">2. Continuous Dual DPC Membrane</span>
                  We cast plinth beams with Sika waterproof admixtures, coat them with hot grade bitumen, and sandwich 500-gauge heavy polythene sheeting so capillary action is completely broken.
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="font-bold text-gold-primary block mb-1">3. Galvanized Wire Mesh (Jalee)</span>
                  We fasten expanded galvanized metal lath at every joint between concrete columns and brick walls. This prevents structural vibration hairline cracks from forming.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-6">
                <div className="flex items-center space-x-3 text-gold-primary">
                  <FontAwesomeIcon icon={faFileShield} className="text-2xl" />
                  <h3 className="font-playfair text-2xl font-semibold text-white">
                    Grey Structure Technical Warranties
                  </h3>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  Upon completion of our Grey Structure package, the homeowner receives an official technical handover folder containing:
                </p>

                <ul className="space-y-2.5 text-xs text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-gold-primary font-bold">✓</span>
                    <span>10-Year Structural Stability Certificate signed by registered PEC Structural Engineer.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-gold-primary font-bold">✓</span>
                    <span>Third-party laboratory compressive strength cube test results (7-day and 28-day break tests).</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-gold-primary font-bold">✓</span>
                    <span>Original steel mill test certificates verifying Grade-60 chemical composition and tensile elongation.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-gold-primary font-bold">✓</span>
                    <span>Anti-termite chemical application warranty certificate (10 years).</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-white/10 text-center">
                  <Link
                    to="/contact"
                    className="inline-block bg-gold-primary hover:bg-gold-secondary text-white px-8 py-3.5 rounded font-medium text-sm transition-colors"
                  >
                    Request Grey Structure Technical Dossier
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
            Lock In Structural Safety for Your Next Home
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-8">
            Consult our structural engineers regarding soil investigation, rebar bar bending schedules, or society NOCs for your 5 Marla, 10 Marla, 1 Kanal or 2 Kanal plot.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="bg-gold-primary hover:bg-gold-secondary text-white px-8 py-3.5 rounded font-medium text-sm transition-colors w-full sm:w-auto"
            >
              Consult Structural Engineer
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
