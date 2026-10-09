import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2075',
    headline: 'FROM VISION TO COMPLETION',
  },
  {
    image: 'https://images.unsplash.com/photo-1541881451213-9799292db200?auto=format&fit=crop&q=80&w=2000',
    headline: 'WE DESIGN. WE BUILD. WE FINISH.',
  },
  {
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000',
    headline: 'ARCHITECTURAL EXCELLENCE',
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] md:h-[100vh] w-full overflow-hidden bg-charcoal-dark">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark/90 via-charcoal-dark/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-gold-primary tracking-[0.2em] text-sm font-semibold uppercase mb-4 block">
              Urban Design & Construction
            </span>
            <h1 className="text-white font-playfair text-5xl md:text-6xl lg:text-[82px] leading-[1.1] mb-6">
              {slides[currentSlide].headline}
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
              Complete architectural, construction, interior and finishing solutions for residential and commercial projects across Pakistan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/projects" 
                className="bg-gold-primary text-white px-8 py-4 text-center rounded hover:bg-gold-secondary transition-colors font-medium text-sm tracking-wide"
              >
                Explore Our Projects
              </Link>
              <Link 
                to="/contact" 
                className="border border-white text-white px-8 py-4 text-center rounded hover:bg-white hover:text-charcoal-dark transition-colors font-medium text-sm tracking-wide"
              >
                Get a Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1 transition-all duration-300 ${
              idx === currentSlide ? 'w-12 bg-gold-primary' : 'w-6 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
