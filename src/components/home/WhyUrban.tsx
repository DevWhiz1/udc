import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDraftingCompass, faHardHat, faMagnifyingGlass, faUsers, faStar, faClock } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    title: 'Design Excellence',
    description: 'Award-winning architectural concepts that maximize space, light, and aesthetic value.',
    icon: faDraftingCompass,
  },
  {
    title: 'Quality Construction',
    description: 'Uncompromising structural integrity using premium materials and advanced engineering.',
    icon: faHardHat,
  },
  {
    title: 'Transparent Process',
    description: 'Clear communication, detailed estimates, and regular progress updates throughout the project.',
    icon: faMagnifyingGlass,
  },
  {
    title: 'Experienced Professionals',
    description: 'A dedicated team of licensed architects, engineers, and skilled craftsmen.',
    icon: faUsers,
  },
  {
    title: 'Premium Finishing',
    description: 'Meticulous attention to detail in every corner, ensuring a flawless final handover.',
    icon: faStar,
  },
  {
    title: 'Project Management',
    description: 'Strict adherence to timelines and budgets without compromising on quality.',
    icon: faClock,
  }
];

export default function WhyUrban() {
  return (
    <section className="py-24 lg:py-32 bg-charcoal-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-primary tracking-[0.2em] text-sm font-semibold uppercase mb-4 block">
            Why Urban
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-6">
            Built on Design. Engineering. Quality. Trust.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-start space-x-6"
            >
              <div className="flex-shrink-0 mt-1">
                <FontAwesomeIcon icon={feature.icon} className="text-4xl text-gold-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
