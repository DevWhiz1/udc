import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDraftingCompass, faBuilding, faHardHat, faBolt, faCouch, faPaintRoller, faHouse, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const services = [
  {
    id: '01',
    slug: 'architectural-design',
    title: 'Architectural Design',
    description: 'PCATP certified 2D plans, 3D elevations, and 100% guaranteed DHA, Bahria, LDA & CDA municipal map approvals.',
    icon: faDraftingCompass,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '02',
    slug: 'construction',
    title: 'General Construction',
    description: 'PEC-licensed site engineering, verified Grade-60 steel, lab-tested concrete, and transparent milestone billing.',
    icon: faBuilding,
    image: 'https://images.unsplash.com/photo-1541881451213-9799292db200?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '03',
    slug: 'grey-structure',
    title: 'Grey Structure Construction',
    description: 'Awwal red brick masonry, Mughal/Amreli deformed steel, monolithic water tanks, and dual-layer DPC damp proofing.',
    icon: faHardHat,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '04',
    slug: 'mep',
    title: 'MEP Services',
    description: 'Pakistan Cables wiring, Master PPRC piping, solar net-metering conduits, and 24-hr hydrostatic pressure testing.',
    icon: faBolt,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '05',
    slug: 'interior-design',
    title: 'Interior Design',
    description: 'Modern luxury living spaces, photorealistic 3D interior renders, seasoned Ash wood millwork, and custom dirty/show kitchens.',
    icon: faCouch,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '06',
    slug: 'finishing',
    title: 'Finishing Works',
    description: 'Zero-lipping porcelain tiling, Italian diamond marble polishing, Jotun luxury paint systems, and Grohe sanitary fittings.',
    icon: faPaintRoller,
    image: 'https://images.unsplash.com/photo-1581858326456-7888b52125e1?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '07',
    slug: 'turnkey-construction',
    title: 'Turnkey Construction',
    description: 'Concept-to-key complete villa handover in Pakistan. Single accountable partner, fixed budget, and guaranteed delivery date.',
    icon: faBuilding,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-primary tracking-[0.2em] text-sm font-semibold uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-charcoal-dark mb-6">
            Complete Construction Solutions Under One Roof
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-light-gray/50 rounded-lg overflow-hidden flex flex-col h-full border border-gray-100 hover:border-gold-primary/30 transition-colors"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-charcoal-dark/20 group-hover:bg-charcoal-dark/10 transition-colors" />
                <div className="absolute top-4 right-4 text-4xl font-playfair font-bold text-white/90 drop-shadow-md">
                  {service.id}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gold-primary mb-6 shadow-sm">
                  <FontAwesomeIcon icon={service.icon} className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal-dark mb-3">
                  <Link to={`/services/${service.slug}`} className="hover:text-gold-primary transition-colors">
                    {service.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  to={`/services/${service.slug}`} 
                  className="mt-auto text-gold-primary font-medium hover:text-charcoal-dark transition-colors inline-flex items-center text-sm group/link"
                >
                  Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
