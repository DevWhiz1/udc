import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="py-24 lg:py-32 bg-warm-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-charcoal-dark text-white rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <span className="text-gold-primary tracking-[0.2em] text-sm font-semibold uppercase mb-6 block">
                Urban Design & Construction
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-8 leading-tight">
                We Don't Just Build Buildings. <br/>We Build Long-Term Value.
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
                <p>
                  Our comprehensive approach combines architectural brilliance with robust engineering and precise project management.
                </p>
                <p>
                  From the initial blueprint to the final coat of paint, we maintain rigorous quality control to ensure that every project we deliver is aesthetically striking, structurally sound, and perfectly tailored to our clients' needs.
                </p>
              </div>
              <div>
                <Link 
                  to="/about"
                  className="inline-block bg-gold-primary text-white px-8 py-4 rounded hover:bg-gold-secondary transition-colors font-medium text-sm tracking-wide"
                >
                  Learn About Urban
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative h-full min-h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                alt="Architecture" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark to-transparent opacity-90" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
