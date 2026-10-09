import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPaintRoller, 
  faGem, 
  faSquareCheck, 
  faSliders, 
  faShower, 
  faClipboardCheck,
  faCircleCheck,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import PageHeader from '../../components/layout/PageHeader';

const finishingStandards = [
  {
    icon: faSliders,
    title: 'Zero-Lipping Mechanical Tile Leveling',
    subtitle: '60x120cm & 80x160cm Porcelain Vitrified Tiles',
    desc: 'Local masons install tiles by eye, leaving sharp edges ("Takkar") that stub toes. We deploy mechanical leveling wedge clips on every tile corner, using polymer-modified flexible adhesive (Bostik / Sika) that guarantees 100% solid acoustic tap feedback with zero hollowness.'
  },
  {
    icon: faGem,
    title: '7-Stage Italian Diamond Marble Crystallization',
    subtitle: 'Ziarat White, Badal, Lasbela & Imported Carrera',
    desc: 'Traditional contractors pour cheap oxalic acid onto marble for a quick temporary shine that yellows within 3 months. Our stonemasons execute a 7-stage diamond-pad resin grinding sequence from 50 to 3000 grit, followed by Italian chemical crystallization that hardens the stone into a permanent glassy mirror.'
  },
  {
    icon: faPaintRoller,
    title: 'Multi-Stage Flawless Wall Paint Systems',
    subtitle: 'Jotun Fenomastic / Dulux Velvet Luxury Emulsion',
    desc: 'We never paint over damp or uneven plaster. Every wall undergoes moisture meter testing, one coat of penetrating acrylic primer, two coats of water-resistant acrylic putty, halogen-light machine sanding, and two topcoats of washable luxury emulsion.'
  },
  {
    icon: faShower,
    title: 'Concealed Sanitary & Frameless Glass Enclosures',
    subtitle: 'Grohe Germany, Kohler USA, TOTO & Master Sanitary',
    desc: 'Concealed wall-hung cisterns, thermostatic shower diverters with anti-scald cartridges, linear stainless-steel floor drains, and 10mm toughened glass shower enclosures with SS 304 waterproof channels.'
  }
];

export default function FinishingPage() {
  return (
    <div className="bg-warm-offwhite min-h-screen">
      <PageHeader
        title="Finishing Works"
        subtitle="Master Craftsmanship in Tiling, Diamond Marble Crystallization, Luxury Paint Systems & Concealed Sanitary Detailing"
        image="https://images.unsplash.com/photo-1581858326456-7888b52125e1?auto=format&fit=crop&q=80&w=1800"
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
              <span className="text-gold-primary font-medium">Finishing Works</span>
            </div>
            <div className="flex items-center space-x-3 text-xs">
              <span className="text-gray-400 hidden sm:inline">Zero-Lipping Tile Leveling</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
              <span className="text-gold-secondary font-semibold">150-Point Snag-Free Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: The Art of Detailing */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-gold-primary/10 flex items-center justify-center text-gold-primary">
                <FontAwesomeIcon icon={faPaintRoller} />
              </div>
              <span className="text-xs font-bold text-gold-primary uppercase tracking-widest">
                Discipline 06 · Master Craftsmanship & Surface Engineering
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-playfair font-semibold text-charcoal-dark leading-tight">
              Where Engineering Meets Artistic Perfection
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              You can spend tens of millions on concrete, bricks, and steel, but the quality of your home will ultimately be judged by what your hands touch and what your eyes see every day: the hairline alignment of floor grout, the depth of reflection in your marble drawing room, the silent latching of a solid door, and the velvet texture of your walls.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              In Pakistan, finishing is where traditional thekedaars cut corners because their labor lacks specialized training. At Urban Design & Construction, our finishing craftsmen are master specialists: dedicated Italian-trained marble polishers, certified tile setters using mechanical leveling wedges, and painters who sand under halogen inspection lamps to reveal the slightest imperfection.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4 text-xs md:text-sm">
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs">
                <span className="font-bold text-charcoal-dark block mb-1">Zero-Hollow Tile Guarantee</span>
                <p className="text-gray-500">Polymer bond adhesives eliminate tile pop-offs and hollow thuds completely.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs">
                <span className="font-bold text-charcoal-dark block mb-1">Mirror Marble Reflection</span>
                <p className="text-gray-500">7-stage diamond resin pads create a liquid glass sheen without harmful acids.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1581858326456-7888b52125e1?auto=format&fit=crop&q=80&w=1200" 
                alt="Finishing Works in Pakistan"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs uppercase tracking-wider text-gold-primary font-semibold mb-1">
                  Master Detailing
                </span>
                <p className="text-lg font-playfair font-medium">
                  Laser Leveling, Mechanical Tile Clips & Jotun Multi-Coat Luxury Emulsion
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The 4 Golden Standards */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-primary tracking-[0.2em] text-xs font-bold uppercase mb-3 block">
              Execution Standards
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charcoal-dark mb-4">
              Our 4 Golden Standards of Luxury Finishing
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              The meticulous quality controls that elevate our residences above generic contractors in Pakistan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {finishingStandards.map((item, idx) => (
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
                      {item.subtitle}
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

      {/* Section 3: 150-Point Snag-Free Handover Protocol */}
      <section className="py-20 bg-charcoal-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-gold-primary tracking-[0.2em] text-xs font-bold uppercase block">
                Quality Assurance
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold leading-tight">
                Our 150-Point Zero-Snag Handover Protocol
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Before we ever invite a client to inspect their finished residence, our quality audit team walks through with a comprehensive 150-point inspection clipboard.
              </p>

              <div className="space-y-3 pt-2 text-xs md:text-sm text-gray-300">
                <div className="p-3.5 bg-white/5 rounded-lg border border-white/10 flex items-center space-x-3">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-gold-primary" />
                  <span>Acoustic tap inspection of every tile for void-free mortar adhesion.</span>
                </div>
                <div className="p-3.5 bg-white/5 rounded-lg border border-white/10 flex items-center space-x-3">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-gold-primary" />
                  <span>Water slope drainage tests on all bathroom floors and shower traps.</span>
                </div>
                <div className="p-3.5 bg-white/5 rounded-lg border border-white/10 flex items-center space-x-3">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-gold-primary" />
                  <span>Halogen beam surface scrutiny on all walls to verify zero paint lap lines.</span>
                </div>
                <div className="p-3.5 bg-white/5 rounded-lg border border-white/10 flex items-center space-x-3">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-gold-primary" />
                  <span>Alignment, soft-close dampening & magnetic latching checks on all doors and cabinetry.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-6">
                <div className="flex items-center space-x-3 text-gold-primary">
                  <FontAwesomeIcon icon={faClipboardCheck} className="text-2xl" />
                  <h3 className="font-playfair text-2xl font-semibold text-white">
                    Post-Handover 1-Year Maintenance Guarantee
                  </h3>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  We stand behind our finishing work with a formal 1-Year Free Maintenance and Touch-Up Guarantee:
                </p>

                <ul className="space-y-2.5 text-xs text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-gold-primary font-bold">✓</span>
                    <span>Free paint touch-ups after furniture move-in scuffs and settling.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-gold-primary font-bold">✓</span>
                    <span>Door hinge adjustments and seasonal wood expansion re-alignment.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-gold-primary font-bold">✓</span>
                    <span>Sanitary mixer pressure checks and cartridge maintenance.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-gold-primary font-bold">✓</span>
                    <span>Full spare material archive handed to homeowner (extra matching tiles, marble offcuts, and paint code records).</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-white/10 text-center">
                  <Link
                    to="/contact"
                    className="inline-block bg-gold-primary hover:bg-gold-secondary text-white px-8 py-3.5 rounded font-medium text-sm transition-colors"
                  >
                    Request Finishing Consultation & Material Swatches
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
            Demand Flawless Finishing for Your Residence
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-8">
            Already have a grey structure completed and want to upgrade to executive finishing? Let our master craftsmen review your site and provide an itemized finishing audit.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="bg-gold-primary hover:bg-gold-secondary text-white px-8 py-3.5 rounded font-medium text-sm transition-colors w-full sm:w-auto"
            >
              Book Finishing Audit
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
