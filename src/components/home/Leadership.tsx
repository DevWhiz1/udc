import { motion } from 'motion/react';

export default function Leadership() {
  return (
    <section className="py-24 bg-warm-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] md:aspect-[4/5] rounded overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200" 
                alt="CEO" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold-primary/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold-primary tracking-[0.2em] text-sm font-semibold uppercase mb-4 block">
              A Message From Our Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-charcoal-dark mb-8 leading-tight">
              Building With Purpose. <br className="hidden md:block" /> Creating With Integrity.
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed relative">
              <span className="absolute -top-10 -left-6 text-8xl font-playfair text-gold-primary/20 leading-none select-none">"</span>
              <p>
                At Urban Design & Construction, we believe every building begins with an idea, but exceptional spaces are created through thoughtful design, skilled execution and uncompromising attention to detail.
              </p>
              <p>
                Our vision has always been to elevate the standard of construction in Pakistan. By bringing together the finest architectural minds and the most skilled engineering teams, we ensure that every project we deliver is a testament to quality and longevity.
              </p>
              <p>
                When you choose Urban, you are not just hiring a contractor; you are partnering with a team that treats your investment with the utmost respect.
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-xl font-semibold text-charcoal-dark font-playfair">John Doe</h4>
              <p className="text-sm text-gold-primary uppercase tracking-wider font-medium mt-1">Founder / Managing Director</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
