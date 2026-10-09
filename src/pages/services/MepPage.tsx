import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBolt, 
  faFaucetDrip, 
  faSolarPanel, 
  faFireFlameCurved, 
  faGaugeHigh, 
  faShieldHalved,
  faTriangleExclamation,
  faCheckCircle,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import PageHeader from '../../components/layout/PageHeader';

const mepDisciplines = [
  {
    icon: faBolt,
    title: '1. Electrical Power Engineering',
    tag: 'Fire-Safe 99.9% Electrolytic Copper',
    points: [
      'Exclusively 100% certified Pakistan Cables or Fast Cables with flame-retardant PVC insulation.',
      'Balanced 3-Phase load calculations ensuring zero phase dropping when 4-6 inverter ACs turn on simultaneously.',
      'Schneider / ABB miniature circuit breakers (MCBs) and residual-current circuit breakers (RCCBs) for human shock protection.',
      'Chemical copper earthing bore with bentonite clay, verified < 5 Ohms electrical resistance.'
    ]
  },
  {
    icon: faFaucetDrip,
    title: '2. Precision Sanitary & Water Supply',
    tag: 'Fusion-Welded PPRC PN-20 Rated',
    points: [
      'Master Pipe / Popular Pipes PN-20 high-pressure, high-heat PPRC water lines with solid brass union fittings.',
      '24-Hour hydrostatic pressure testing at 10 Bar (150 PSI) with pressure gauge verification before plastering.',
      'Two-pipe drainage system separating toilet soil from grey bath water to prevent blockages.',
      'Deep P-traps and rooftop vent stack pipes that completely stop foul sewer gases from entering bathrooms.'
    ]
  },
  {
    icon: faSolarPanel,
    title: '3. Solar Net-Metering & Inverter Infrastructure',
    tag: 'NEPRA / LESCO / IESCO Net-Metering Ready',
    points: [
      'Pre-routed heavy-gauge DC conduits from the rooftop mumty down to the solar inverter location.',
      'Split-busbar distribution board allowing seamless automatic switching between solar, grid, and battery storage.',
      'Bi-directional green meter conduit infrastructure approved by LESCO, IESCO, and K-Electric.',
      'Supports 5kW, 10kW, 15kW, and 20kW residential solar PV generation systems.'
    ]
  },
  {
    icon: faFireFlameCurved,
    title: '4. HVAC & Concealed Refrigerant Systems',
    tag: 'Pre-piped Muller / Osprey Copper',
    points: [
      'High-grade insulated copper refrigerant tubes and signal cables pre-routed inside walls for all split AC units.',
      'Rigid PVC gravity condensate drain lines routed directly to storm drains (no unsightly outdoor dripping pipes).',
      'Dedicated SS 304 gas piping manifolds with emergency ball valves for geysers and kitchens.',
      'High-CFM dirty-kitchen exhaust ducts routed through the mumty roof for zero cooking odor recirculation.'
    ]
  }
];

export default function MepPage() {
  return (
    <div className="bg-warm-offwhite min-h-screen">
      <PageHeader
        title="MEP Engineering"
        subtitle="Mechanical, Electrical & Plumbing Systems Engineered for 50+ Years of Fire-Safe, Leak-Free Living"
        image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1800"
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
              <span className="text-gold-primary font-medium">MEP Engineering</span>
            </div>
            <div className="flex items-center space-x-3 text-xs">
              <span className="text-gray-400 hidden sm:inline">10 Bar Hydrostatic Testing</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
              <span className="text-gold-secondary font-semibold">Solar Net-Metering Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: The Invisible Circulatory System */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-gold-primary/10 flex items-center justify-center text-gold-primary">
                <FontAwesomeIcon icon={faBolt} />
              </div>
              <span className="text-xs font-bold text-gold-primary uppercase tracking-widest">
                Discipline 04 · Building Systems Engineering
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-playfair font-semibold text-charcoal-dark leading-tight">
              The Invisible Engineering That Protects Your Home
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              When building in Pakistan, most of your budget is visible on the surface. But the mechanical, electrical, and plumbing (MEP) systems running behind the plaster determine whether your daily life is effortless or plagued by constant headaches: breaker tripping during summer, high power bills from undersized copper cables, water pressure drops in showers, and foul sewer smells in guest powder rooms.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Urban MEP engineers calculate current loads and water flow velocity down to the mathematical decimal. We install oversized Distribution Boards (DBs), verify genuine factory cable holograms, pre-route inverter AC copper tubes, and pressure-test every pipe under 10 Bar of water pressure for 24 hours before a single drop of plaster touches the wall.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4 text-xs md:text-sm">
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs">
                <span className="font-bold text-charcoal-dark block mb-1">Zero Counterfeit Wire Guarantee</span>
                <p className="text-gray-500">100% genuine Pakistan Cables & Fast Cables purchased directly from authorized distributors.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs">
                <span className="font-bold text-charcoal-dark block mb-1">Odor-Free Sanitary Guarantee</span>
                <p className="text-gray-500">Two-pipe drainage with individual deep water traps and rooftop vent termination stacks.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200" 
                alt="MEP Engineering in Pakistan"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs uppercase tracking-wider text-gold-primary font-semibold mb-1">
                  Engineered Infrastructure
                </span>
                <p className="text-lg font-playfair font-medium">
                  3-Phase Balanced Load, Solar Net-Metering Conduits & Pressure-Tested PPRC
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The 4 Core MEP Disciplines */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-primary tracking-[0.2em] text-xs font-bold uppercase mb-3 block">
              System Engineering
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charcoal-dark mb-4">
              Comprehensive MEP Engineering Standards
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Engineered systems that run silently and seamlessly behind your finished walls for decades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mepDisciplines.map((item, idx) => (
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
                      {item.tag}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2 text-xs md:text-sm text-gray-600 leading-relaxed pl-13">
                  {item.points.map((pt, pi) => (
                    <li key={pi} className="flex items-start space-x-2">
                      <span className="text-gold-primary font-bold">›</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Why Wires Catch Fire & Bathrooms Smell in Pakistan */}
      <section className="py-20 bg-charcoal-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-gold-primary tracking-[0.2em] text-xs font-bold uppercase block">
                Technical Vulnerabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold leading-tight">
                Why Electrical Short Circuits & Bathroom Odors Occur in Pakistan
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Most electrical fires in Pakistani cities are not accidents—they are the direct mathematical result of local electricians using cheap copper-clad aluminum (CCA) wire and loading 3 air conditioners onto an undersized 16-Amp circuit breaker.
              </p>

              <div className="space-y-4 pt-2 text-xs md:text-sm text-gray-300">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 flex items-start space-x-3">
                  <FontAwesomeIcon icon={faTriangleExclamation} className="text-amber-400 text-lg mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">The Counterfeit Cable Trap</span>
                    Local markets are flooded with counterfeit cables using impure copper scrap. These wires heat up under summer AC loads, melt their PVC sleeves, and ignite wooden wardrobes or roof cavities.
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-lg border border-white/10 flex items-start space-x-3">
                  <FontAwesomeIcon icon={faTriangleExclamation} className="text-amber-400 text-lg mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">Plumbing Omission of Vent Pipes</span>
                    Local plumbers connect floor waste and WC drains into a single pipe without rooftop atmospheric vent stacks. When a toilet flushes upstairs, it siphons the water seal out of the downstairs sink, letting sewer gas fill the room.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-6">
                <div className="flex items-center space-x-3 text-gold-primary">
                  <FontAwesomeIcon icon={faGaugeHigh} className="text-2xl" />
                  <h3 className="font-playfair text-2xl font-semibold text-white">
                    Our 24-Hour 10-Bar Pressure Test Protocol
                  </h3>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  Before any bathroom or kitchen wall is plastered, our plumbing team connects a hydraulic hand pump with a calibrated pressure gauge:
                </p>

                <div className="space-y-3 text-xs text-gray-300">
                  <div className="bg-white/5 p-3 rounded">
                    <span className="font-bold text-gold-primary block mb-1">Step 1: Water Line Flooding</span>
                    The entire hot and cold PPRC piping network is charged with clean water, releasing all trapped air pockets.
                  </div>
                  <div className="bg-white/5 p-3 rounded">
                    <span className="font-bold text-gold-primary block mb-1">Step 2: Pressurization to 10 Bar (150 PSI)</span>
                    The pressure is pumped to over 3 times normal household municipal pressure.
                  </div>
                  <div className="bg-white/5 p-3 rounded">
                    <span className="font-bold text-gold-primary block mb-1">Step 3: 24-Hour Gauge Lock</span>
                    The gauge needle must remain rock-steady for 24 continuous hours. Any micro-fissure or poor joint causes an immediate needle drop, which is resolved on the spot.
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 text-center">
                  <Link
                    to="/contact"
                    className="inline-block bg-gold-primary hover:bg-gold-secondary text-white px-8 py-3.5 rounded font-medium text-sm transition-colors"
                  >
                    Request MEP Engineering Consultation
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
            Build Fire-Safe, Leak-Proof Mechanical & Electrical Infrastructure
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-8">
            Consult our registered MEP engineers regarding electrical load schedules, solar net-metering preparation, or high-pressure plumbing for your custom residence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="bg-gold-primary hover:bg-gold-secondary text-white px-8 py-3.5 rounded font-medium text-sm transition-colors w-full sm:w-auto"
            >
              Consult MEP Specialist
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
