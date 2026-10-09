import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCouch, 
  faUtensils, 
  faLightbulb, 
  faGem, 
  faTree, 
  faEye,
  faCircleCheck,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import PageHeader from '../../components/layout/PageHeader';

const interiorPillars = [
  {
    icon: faUtensils,
    title: 'The Dual Kitchen Concept (Show & Dirty Kitchen)',
    desc: 'Pakistani culinary traditions demand deep frying, rich spices, and intense heat that quickly degrade open-plan kitchens. We engineer an aesthetic open Show Kitchen with an island bar for family breakfast, complemented by a heavy-duty, stainless-steel Dirty Kitchen with high-CFM outdoor exhaust.',
    highlight: 'Blum Austria soft-close hardware & quartz stone counters'
  },
  {
    icon: faTree,
    title: 'Kiln-Dried Hardwood Joinery & Solid Doors',
    desc: 'Unseasoned wood twists and jams during humid monsoon months. We exclusively deploy kiln-dried seasoned Ash Wood and Teak (Saagwan) with moisture content below 10%. We craft 8-foot high grand entrance doors, full-height flush interior doors, and custom walk-in closets with integrated sensor lighting.',
    highlight: 'Moisture content < 10% certified'
  },
  {
    icon: faGem,
    title: 'Natural Pakistani Marble & Italian Porcelain',
    desc: 'We curate locally quarried, premium-grade Ziarat White and Badal marble with bookmatched natural veining, seamlessly juxtaposed with large-format imported Spanish and Italian porcelain slabs (60x120cm, 80x160cm) for modern bathrooms and public entertaining lounges.',
    highlight: 'Bookmatched natural stone & diamond mirror polish'
  },
  {
    icon: faLightbulb,
    title: 'Architectural Layered Lighting (Warm 3000K)',
    desc: 'We reject the harsh, sterile blue-white 6500K tubelights common in local homes. Our lighting plans balance three distinct layers: ambient indirect ceiling cove profiles, focused magnetic track spotlights for artwork, and low-level architectural step and baseboard lights.',
    highlight: 'Zero-glare COB magnetic profiles & dimmable scenes'
  }
];

export default function InteriorDesignPage() {
  return (
    <div className="bg-warm-offwhite min-h-screen">
      <PageHeader
        title="Interior Design"
        subtitle="Curated Luxury Living Spaces Crafted with Natural Pakistani Stone, Seasoned Hardwood & Timeless Elegance"
        image="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1800"
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
              <span className="text-gold-primary font-medium">Interior Design</span>
            </div>
            <div className="flex items-center space-x-3 text-xs">
              <span className="text-gray-400 hidden sm:inline">Seasoned Ash Wood</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
              <span className="text-gold-secondary font-semibold">Dual Kitchen Specialists</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: The Atelier Vision */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-gold-primary/10 flex items-center justify-center text-gold-primary">
                <FontAwesomeIcon icon={faCouch} />
              </div>
              <span className="text-xs font-bold text-gold-primary uppercase tracking-widest">
                Discipline 05 · Interior Architecture & Millwork
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-playfair font-semibold text-charcoal-dark leading-tight">
              Spaces That Evoke Warmth, Luxury & Effortless Grace
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              True luxury is not about filling a room with shiny gold trims and heavy crystal chandeliers. It is the subtle feeling of stepping barefoot onto silk-smooth Ziarat white marble, the tactile satisfaction of closing a solid 40mm thick Ash wood door, and the calming ambiance of warm indirect lighting tailored for evening family conversations.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Our interior designers bridge international contemporary aesthetics with Pakistani cultural hospitality. We honor the dual spatial rhythm of formal guest drawing rooms and private TV lounges, tailoring every millwork partition, vanity counter, and coffered false ceiling into a cohesive work of art.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4 text-xs md:text-sm">
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs">
                <span className="font-bold text-charcoal-dark block mb-1">Photorealistic 3D Walkthroughs</span>
                <p className="text-gray-500">Preview every angle, texture, and light fixture in ultra-high resolution before fabrication begins.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs">
                <span className="font-bold text-charcoal-dark block mb-1">Factory-Pressed Carpentry</span>
                <p className="text-gray-500">CNC-precision edge banding and polyurethane (PU) spray finishes that never peel.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury Interior Living in Pakistan"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs uppercase tracking-wider text-gold-primary font-semibold mb-1">
                  Atelier Craftsmanship
                </span>
                <p className="text-lg font-playfair font-medium">
                  Ziarat White Marble, Solid Ash Wood Paneling & Layered Architectural Lighting
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The 4 Interior Pillars */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-primary tracking-[0.2em] text-xs font-bold uppercase mb-3 block">
              Design Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charcoal-dark mb-4">
              Four Pillars of Our Bespoke Pakistani Interiors
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Engineered specifically to solve the environmental and lifestyle challenges of high-end homes in Pakistan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {interiorPillars.map((item, idx) => (
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
                      {item.highlight}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pl-13">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Dual Kitchen Deep-Dive */}
      <section className="py-20 bg-charcoal-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-gold-primary tracking-[0.2em] text-xs font-bold uppercase block">
                Culinary Architecture
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold leading-tight">
                Why Every Luxury Home in Pakistan Needs a Dual Kitchen
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Nothing ruins an expensive imported German or Italian open kitchen faster than daily Pakistani cooking—curry splatters, mustard oil fumes, and heavy spice boiling destroy delicate veneers within months.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-base text-gold-primary mb-1">
                    01. The Open Show Kitchen
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Designed for family breakfasts, tea, and hosting guests. Features waterfall quartz breakfast island, matte anti-fingerprint acrylic shutters, built-in coffee maker, and under-counter ambient LED profile illumination.
                  </p>
                </div>

                <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-base text-gold-primary mb-1">
                    02. The High-Efficiency Dirty Kitchen
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Concealed behind a seamless flush door. Fitted with heavy-gauge SS 304 commercial five-burner range, high-velocity external centrifugal exhaust hood, deep sink basins, and washable porcelain floor-to-ceiling tiling.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Custom Kitchen Interior Design"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                  <span className="text-xs uppercase tracking-wider text-gold-primary font-semibold mb-1">
                    Precision Cabinetry
                  </span>
                  <p className="text-lg font-playfair font-medium">
                    Blum Soft-Close Drawers, Marine-Grade HDMR & Heat-Resistant Countertops
                  </p>
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
            Transform Your House into a Signature Sanctuary
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-8">
            Schedule an appointment at our interior design studio to review material sample boards, marble slabs, and custom woodwork finishes.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="bg-gold-primary hover:bg-gold-secondary text-white px-8 py-3.5 rounded font-medium text-sm transition-colors w-full sm:w-auto"
            >
              Book Interior Design Consultation
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
