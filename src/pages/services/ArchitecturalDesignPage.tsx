import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDraftingCompass, 
  faBuilding, 
  faCheckCircle, 
  faFileCircleCheck, 
  faSun, 
  faCompass, 
  faArrowRight, 
  faLayerGroup,
  faPhone,
  faSliders
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import PageHeader from '../../components/layout/PageHeader';

const architecturalStyles = [
  {
    id: 'contemporary',
    name: 'Modern Contemporary',
    tagline: 'Geometric lines, floating cantilevers, double-height glass & natural stone louvers',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    popularIn: 'DHA Phase 6 & 8 Lahore, CDA Sector F-6 & F-7 Islamabad',
    features: ['Double-height glazed lobby', 'Cantilevered balconies & pergolas', 'Travertine and fluted stone facade cladding', 'Minimalist linear fenestration']
  },
  {
    id: 'spanish',
    name: 'Spanish Colonial Revival',
    tagline: 'Terracotta tile sloping roofs, stucco walls, arched verandas & ornate ironwork',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    popularIn: 'Bahria Town Lahore & Islamabad, DHA Phase 5',
    features: ['Red clay Spanish roof tiles (Khaprail)', 'Carved wooden eaves & arched windows', 'Central courtyard with water fountain', 'Rustic warm earth-toned plaster finishes']
  },
  {
    id: 'classical',
    name: 'Neo-Classical & Georgian',
    tagline: 'Grand symmetrical porticos, Corinthian columns, crowned moldings & stately presence',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    popularIn: 'DHA Karachi Phase 8, Bahria Golf City, Diplomatic Enclave Islamabad',
    features: ['Fluted classical RCC columns & pediments', 'Symmetrical balanced window bays', 'Grand arched wrought-iron entrance portals', 'Ornate cornice and parapet balustrades']
  }
];

const authorityBylaws = [
  {
    authority: 'DHA (Lahore, Karachi, Islamabad, Multan, Gujranwala)',
    setbacks: 'Front: 10ft (10 Marla) / 15ft (1 Kanal) | Rear: 7ft | Sides: 5ft',
    regulations: ['Strict maximum height limit of 35ft from road crown', 'Mandatory water recharge pit & rainwater harvesting connection', 'Basement allowed with retaining wall setback & damp-proof drainage', 'Compulsory fire escape provisions on multi-storey residential']
  },
  {
    authority: 'CDA & RDA (Islamabad & Rawalpindi)',
    setbacks: 'Front: 15-20ft | Rear: 10ft | Side Setbacks governed by plot sector plan',
    regulations: ['Strict seismic design compliance (Zone 2B/3 structural engineering)', 'Elevation materials restricted to approved natural stone / textured finish', 'Rooftop mumty area capped at standard percentage of covered footprint', 'Compulsory underground water reservoir with dual inspection chambers']
  },
  {
    authority: 'Bahria Town (Karachi, Rawalpindi, Lahore)',
    setbacks: 'Front: 8-10ft | Rear: 5ft | Side Setbacks according to sector bylaws',
    regulations: ['Architectural design vetting by Town Planning Directorate prior to digging', 'Boundary wall heights capped at standard 6ft (masonry) + 2ft (railing)', 'Exterior air conditioner condenser units must be concealed behind louvers', 'Harmonious streetscape facade color scheme conformity']
  }
];

export default function ArchitecturalDesignPage() {
  const [activeStyle, setActiveStyle] = useState(architecturalStyles[0]);

  return (
    <div className="bg-warm-offwhite min-h-screen">
      <PageHeader
        title="Architectural Design"
        subtitle="PCATP-Certified Custom Blueprints, 3D Facades & 100% Guaranteed Municipal Approvals in Pakistan"
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1800"
      />

      {/* Blueprint Subnav */}
      <div className="bg-white border-b border-gray-200 sticky top-[72px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between text-xs md:text-sm">
            <div className="flex items-center space-x-2 text-gray-500">
              <Link to="/" className="hover:text-gold-primary">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-gold-primary">Services</Link>
              <span>/</span>
              <span className="text-gold-primary font-medium">Architectural Design</span>
            </div>
            <div className="flex items-center space-x-3 text-xs">
              <span className="text-gray-400 hidden sm:inline">PCATP Registered</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-emerald-700 font-medium">100% Map Approval Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Spatial Mastery & Vision */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-gold-primary/10 flex items-center justify-center text-gold-primary">
                <FontAwesomeIcon icon={faDraftingCompass} />
              </div>
              <span className="text-xs font-bold text-gold-primary uppercase tracking-widest">
                Discipline 01 · Architectural Practice
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-playfair font-semibold text-charcoal-dark leading-tight">
              Spaces Designed for Living, Not Just Built for Looking
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              In Pakistan, a house is more than shelter—it is a sanctuary for extended family life, social hospitality, and an enduring family legacy. Standard template maps fail because they ignore your family’s unique rituals: the separation between formal guests in the drawing room and private family living in the lounge, the necessity of a heavy-cooking dirty kitchen, and privacy for domestic staff.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Our architects study your exact plot orientation, solar trajectory across summer and winter, street wind channels, and housing authority setbacks. The result is a custom home flooded with natural light, shielded from blistering heat, and planned down to the millimeter.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div>
                <div className="text-3xl font-playfair font-bold text-gold-primary">80+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Detailed Drawings Per Project</div>
              </div>
              <div>
                <div className="text-3xl font-playfair font-bold text-gold-primary">100%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">First-Pass Map Approvals</div>
              </div>
              <div>
                <div className="text-3xl font-playfair font-bold text-gold-primary">4K</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Photorealistic 3D Renders</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
                alt="Architectural Blueprint and 3D Model"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs uppercase tracking-wider text-gold-primary font-semibold mb-1">
                  Blueprint to Reality
                </span>
                <p className="text-lg font-playfair font-medium">
                  Designed for 10 Marla, 1 Kanal & 2 Kanal Luxury Plots Across Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Architectural Style Studio */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-primary tracking-[0.2em] text-xs font-bold uppercase mb-3 block">
              Design Typologies
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charcoal-dark mb-4">
              Explore Our Signature Pakistani Architectural Facades
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Whether you envision sharp geometric contemporary lines or romantic Spanish arches, our design studio tailors every facade to complement local estate streetscapes.
            </p>

            {/* Style Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {architecturalStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setActiveStyle(style)}
                  className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all ${
                    activeStyle.id === style.id
                      ? 'bg-charcoal-dark text-gold-primary shadow-md'
                      : 'bg-warm-offwhite text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {style.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Style Showcase */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStyle.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-12 gap-8 items-center bg-warm-offwhite rounded-2xl p-6 md:p-10 border border-gray-200"
            >
              <div className="lg:col-span-7 rounded-xl overflow-hidden aspect-video shadow-lg">
                <img 
                  src={activeStyle.image} 
                  alt={activeStyle.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-primary">
                    Signature Palette
                  </span>
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal-dark mt-1">
                    {activeStyle.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 italic">
                    "{activeStyle.tagline}"
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <span className="text-xs font-bold text-charcoal-dark uppercase tracking-wider block mb-1">
                    Prime Locations in Pakistan:
                  </span>
                  <span className="text-xs text-gold-secondary font-medium">
                    {activeStyle.popularIn}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">
                    Architectural Hallmarks:
                  </span>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {activeStyle.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center space-x-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-sm font-semibold text-charcoal-dark hover:text-gold-primary transition-colors"
                  >
                    <span>Request Custom Concept for this Style</span>
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs text-gold-primary" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Section 3: Authority Approval & Bylaws Mastery */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-primary tracking-[0.2em] text-xs font-bold uppercase mb-3 block">
            Regulatory Compliance
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charcoal-dark mb-4">
            Mastery Over Pakistani Municipal & Society Bylaws
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Every millimeter of your building must align with housing authority regulations to prevent stop-work notices, non-completion penalties, and demolition notices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {authorityBylaws.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 border border-gray-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-gold-primary/10 flex items-center justify-center text-gold-primary mb-6">
                  <FontAwesomeIcon icon={faBuilding} />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-charcoal-dark mb-3">
                  {item.authority}
                </h3>
                <div className="bg-light-gray p-3 rounded text-xs text-gray-700 mb-6 font-mono">
                  <span className="font-bold block text-gray-500 uppercase mb-1">Setbacks:</span>
                  {item.setbacks}
                </div>
                <ul className="space-y-2.5 text-xs text-gray-600 leading-relaxed">
                  {item.regulations.map((reg, ri) => (
                    <li key={ri} className="flex items-start space-x-2">
                      <span className="text-gold-primary font-bold">›</span>
                      <span>{reg}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center text-xs text-emerald-700 font-medium">
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                <span>100% Submission Pass Rate Guaranteed</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Climate-Responsive Design for Pakistan */}
      <section className="py-20 bg-charcoal-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-gold-primary tracking-[0.2em] text-xs font-bold uppercase block">
                Sustainable Engineering
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold leading-tight">
                Architectural Engineering for Pakistan’s 48°C Heatwaves
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Most houses in Lahore, Multan, and Islamabad turn into thermal ovens during the 5-month summer season because copy-paste maps place massive unshaded glass windows directly facing the afternoon western sun.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-4 bg-white/5 p-4 rounded-lg border border-white/10">
                  <FontAwesomeIcon icon={faSun} className="text-gold-primary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-base">Solar Geometry & Sun Shading</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      We orient bedrooms and living spaces toward prevailing morning light while installing architectural concrete overhangs and vertical louvers that block direct 12 PM–5 PM solar heat gain.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/5 p-4 rounded-lg border border-white/10">
                  <FontAwesomeIcon icon={faCompass} className="text-gold-primary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-base">Natural Cross-Ventilation Wind Shafts</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      Strategically positioned courtyard air wells pull cool evening air through the ground floor, reducing air conditioning load by up to 35% across summer months.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/5 p-4 rounded-lg border border-white/10">
                  <FontAwesomeIcon icon={faLayerGroup} className="text-gold-primary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-base">Cavity Wall & Rooftop Thermal Insulation</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      Exterior perimeter walls detailed with 2-inch insulation cavities and rooftop clay tile + Jumbolon insulation schemes that keep upper bedrooms remarkably cool.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-6">
                <h3 className="font-playfair text-2xl font-semibold text-white">
                  What is Inside Our 80+ Page Blueprint Dossier?
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Before a single shovel touches your plot, our clients receive a comprehensive engineering dossier that eliminates all ambiguity on site:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 text-xs text-gray-300">
                  <div className="bg-white/5 p-3 rounded">
                    <span className="font-bold text-gold-primary block mb-1">01. Architectural Sets</span>
                    Site layout, ground & 1st floor maps, mumty, roof plan, 4 exterior elevations, 4 cross-sections.
                  </div>
                  <div className="bg-white/5 p-3 rounded">
                    <span className="font-bold text-gold-primary block mb-1">02. Structural Calculations</span>
                    PEC stamped foundation detail, beam rebar schedules, slab reinforcement, bar bending schedule (BBS).
                  </div>
                  <div className="bg-white/5 p-3 rounded">
                    <span className="font-bold text-gold-primary block mb-1">03. Electrical Schematics</span>
                    Point-to-point conduit pathways, breaker load sizing, distribution boards, solar inverter net-metering.
                  </div>
                  <div className="bg-white/5 p-3 rounded">
                    <span className="font-bold text-gold-primary block mb-1">04. Plumbing & Drainage</span>
                    Hot/cold PPRC water lines, storm water harvesting, inspection pits, septic tank & underground reservoir.
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 text-center">
                  <Link
                    to="/contact"
                    className="inline-block bg-gold-primary hover:bg-gold-secondary text-white px-8 py-3.5 rounded font-medium text-sm transition-colors"
                  >
                    Schedule Architectural Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: The Comparison (Architect vs Thekedaar Draftsman) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-primary tracking-[0.2em] text-xs font-bold uppercase mb-3 block">
            True Professionalism
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charcoal-dark mb-4">
            PCATP Architect vs Local Thekedaari Draftsman
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Why investing in professional architectural planning saves millions in wasted construction materials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl border border-red-200 shadow-2xs">
            <div className="text-xs font-bold text-red-700 uppercase tracking-wider mb-2">
              The Common Pakistani Trap
            </div>
            <h3 className="text-xl font-playfair font-semibold text-charcoal-dark mb-4">
              Local Thekedaar / Unlicensed Draftsman
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start space-x-2">
                <span className="text-red-500 font-bold">✗</span>
                <span>Recycles the same 5-year-old floor plan that does not suit your family’s privacy or lifestyle.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 font-bold">✗</span>
                <span>Zero understanding of solar path; places master bedrooms where they boil under western afternoon sun.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 font-bold">✗</span>
                <span>Submits inaccurate setback drawings; client suffers repeated society rejection penalties.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 font-bold">✗</span>
                <span>Provides only 2-page sketch; masons build by guesswork, leading to cracked walls and misaligned doors.</span>
              </li>
            </ul>
          </div>

          <div className="bg-gold-primary/5 p-8 rounded-xl border-2 border-gold-primary shadow-md relative">
            <div className="text-xs font-bold text-gold-secondary uppercase tracking-wider mb-2">
              The Urban Design & Construction Standard
            </div>
            <h3 className="text-xl font-playfair font-semibold text-charcoal-dark mb-4">
              PCATP Registered Architectural Practice
            </h3>
            <ul className="space-y-3 text-sm text-charcoal-dark">
              <li className="flex items-start space-x-2">
                <span className="text-gold-primary font-bold">✓</span>
                <span>Bespoke custom layouts designed around your family’s exact daily rituals, entertaining style, and staff.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-gold-primary font-bold">✓</span>
                <span>Climate-responsive sun and wind modeling that naturally reduces cooling costs and illuminates every room.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-gold-primary font-bold">✓</span>
                <span>100% municipal approval guarantee with DHA, CDA, Bahria, and LDA with zero penalty delays.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-gold-primary font-bold">✓</span>
                <span>Complete 80+ page working blueprint set with regular site alignment inspections by our architects.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-playfair font-semibold text-charcoal-dark mb-4">
            Ready to Begin Designing Your Dream Residence?
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-8">
            Schedule a confidential design consultation at our studio or book a virtual session for overseas Pakistani clients.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="bg-gold-primary hover:bg-gold-secondary text-white px-8 py-3.5 rounded font-medium text-sm transition-colors w-full sm:w-auto"
            >
              Book Studio Consultation
            </Link>
            <a
              href="https://wa.me/923155874112"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 hover:border-charcoal-dark text-charcoal-dark px-8 py-3.5 rounded font-medium text-sm transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-emerald-600 text-lg" />
              <span>Discuss via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
