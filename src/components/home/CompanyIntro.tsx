import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CompanyIntro() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1541881451213-9799292db200?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern architectural building" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold-primary tracking-[0.2em] text-sm font-semibold uppercase mb-4 block">
              Urban Design & Construction
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-charcoal-dark mb-6 leading-tight">
              Building Spaces That Define the Way You Live
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Urban Design & Construction provides comprehensive design and construction services, bringing architectural planning, engineering, construction, interiors, and finishing together under one professional team.
            </p>
            
            <Link 
              to="/about"
              className="inline-flex items-center text-charcoal-dark font-medium hover:text-gold-primary transition-colors border-b border-charcoal-dark hover:border-gold-primary pb-1 mb-16"
            >
              Discover Our Story 
              <span className="ml-2">→</span>
            </Link>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-12">
              <div>
                <div className="text-4xl font-playfair font-bold text-gold-primary mb-2">10+</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-playfair font-bold text-gold-primary mb-2">100+</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-playfair font-bold text-gold-primary mb-2">50+</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Professional Specialists</div>
              </div>
              <div>
                <div className="text-4xl font-playfair font-bold text-gold-primary mb-2">100%</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Commitment to Quality</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
