import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDraftingCompass, 
  faBuilding, 
  faHardHat, 
  faBolt, 
  faCouch, 
  faPaintRoller, 
  faArrowRight, 
  faShieldHalved,
  faCheckCircle,
  faCalculator
} from '@fortawesome/free-solid-svg-icons';
import PageHeader from '../components/layout/PageHeader';
import Process from '../components/home/Process';
import { servicesData } from '../data/servicesData';

export default function ServicesPage() {
  const serviceList = Object.values(servicesData);

  const iconsMap: Record<string, any> = {
    'architectural-design': faDraftingCompass,
    'construction': faBuilding,
    'grey-structure': faHardHat,
    'mep': faBolt,
    'interior-design': faCouch,
    'finishing': faPaintRoller,
    'turnkey-construction': faBuilding,
  };

  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="Complete architectural, engineering, grey structure, interior and turnkey solutions across Pakistan."
        image="https://images.unsplash.com/photo-1541881451213-9799292db200?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Services Grid with Direct Links to Detail Pages */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-primary tracking-[0.2em] text-xs font-bold uppercase mb-3 block">
              Architectural & Engineering Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-playfair font-semibold text-charcoal-dark mb-4">
              Comprehensive Construction Services in Pakistan
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Explore our dedicated service offerings engineered for DHA, Bahria Town, CDA, and high-end residential & commercial projects. Select any service below to view engineering specifications, architectural blueprints, and Pakistan bylaws compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((service, idx) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-warm-offwhite rounded-xl overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={service.heroImage} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-charcoal-dark/80 backdrop-blur text-gold-primary text-xs font-bold px-3 py-1 rounded">
                    Service {service.number}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] uppercase tracking-wider text-gold-primary font-semibold block">
                      Pakistani Standards
                    </span>
                    <span className="text-xs text-gray-200 line-clamp-1">
                      {service.pakistanContext.bylawsAuthority[0]}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-white shadow-xs flex items-center justify-center text-gold-primary mb-4">
                      <FontAwesomeIcon icon={iconsMap[service.slug] || faBuilding} className="text-lg" />
                    </div>
                    <h3 className="text-xl font-playfair font-semibold text-charcoal-dark mb-2 group-hover:text-gold-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-gold-secondary mb-3">
                      {service.tagline}
                    </p>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-6 leading-relaxed">
                      {service.overview}
                    </p>
                  </div>

                  <div className="border-t border-gray-200/60 pt-4 mt-auto">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-charcoal-dark hover:text-gold-primary transition-colors"
                    >
                      <span>Explore Dedicated Service Page</span>
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs text-gold-primary transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Pakistan Comparison Section */}
      <section className="py-20 bg-charcoal-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-primary tracking-[0.2em] text-xs font-bold uppercase mb-3 block">
              Industry Standard vs Urban
            </span>
            <h2 className="text-3xl md:text-5xl font-playfair font-semibold mb-6">
              Why We Stand Apart from Other Construction Entities in Pakistan
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Understanding the difference between traditional local thekedaars, speculative commercial developers, and Urban Design & Construction’s client-centric engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Box 1: Traditional Thekedaar */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="text-red-400 font-bold uppercase text-xs tracking-wider mb-2">
                Category 01
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-4 text-white">
                Traditional Thekedaar (Local Petty Contractor)
              </h3>
              <ul className="space-y-3 text-sm text-gray-400 leading-relaxed">
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>No formal engineering degree or PEC registration; builds by guesswork.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Unreliable oral agreements; frequent budget escalations mid-project.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Rampant material adulteration (re-rolled saria, 2nd-class bricks).</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Zero warranty or after-handover support when leakages arise.</span>
                </li>
              </ul>
            </div>

            {/* Box 2: Mass Commercial Developers (GFS / Speculative builders) */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="text-amber-400 font-bold uppercase text-xs tracking-wider mb-2">
                Category 02
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-4 text-white">
                Mass Speculative Developers (e.g. GFS Style)
              </h3>
              <ul className="space-y-3 text-sm text-gray-400 leading-relaxed">
                <li className="flex items-start space-x-2">
                  <span className="text-amber-400 font-bold">!</span>
                  <span>Focus primarily on high-density commercial towers & installment file sales.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-400 font-bold">!</span>
                  <span>Standardized cookie-cutter floor plans with rigid customization limits.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-400 font-bold">!</span>
                  <span>Large corporate bureaucracies with slow response times for individual private home builders.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-400 font-bold">!</span>
                  <span>Delivery timelines often impacted by overall development project phases.</span>
                </li>
              </ul>
            </div>

            {/* Box 3: Urban Design & Construction */}
            <div className="bg-gold-primary/10 border-2 border-gold-primary rounded-xl p-8 relative shadow-xl">
              <span className="absolute -top-3 right-6 bg-gold-primary text-charcoal-dark text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                The Gold Standard
              </span>
              <div className="text-gold-primary font-bold uppercase text-xs tracking-wider mb-2">
                Category 03
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-4 text-white">
                Urban Design & Construction
              </h3>
              <ul className="space-y-3 text-sm text-gray-200 leading-relaxed">
                <li className="flex items-start space-x-2">
                  <span className="text-gold-primary font-bold">✓</span>
                  <span>PCATP registered architects & PEC licensed civil structural engineers.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold-primary font-bold">✓</span>
                  <span>Ironclad legal contract with guaranteed completion date & delay penalty.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold-primary font-bold">✓</span>
                  <span>Itemized BOQ with 100% verified Mughal/Amreli Grade 60 and Bestway cement.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold-primary font-bold">✓</span>
                  <span>10-Year Structural Integrity Warranty + 1-Year Free Maintenance support.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Process */}
      <Process />
    </>
  );
}
