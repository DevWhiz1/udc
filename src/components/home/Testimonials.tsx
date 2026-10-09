import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  {
    id: 1,
    text: "Urban transformed our initial concept into a home that feels thoughtful in every detail. Their team handled everything from architecture to interior finishing flawlessly.",
    name: "Ahmed Raza",
    projectType: "Residential Villa",
    location: "Lahore"
  },
  {
    id: 2,
    text: "The level of professionalism and transparency Urban provided during the construction of our corporate office was unmatched. Delivered on time and above expectations.",
    name: "Zainab Ali",
    projectType: "Corporate Office",
    location: "Islamabad"
  },
  {
    id: 3,
    text: "Their turnkey solution took all the stress away. We were kept in the loop at every stage, and the final finishing quality is truly premium.",
    name: "Kamran Shah",
    projectType: "Modern Residence",
    location: "Karachi"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-warm-offwhite rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-gold-primary tracking-[0.2em] text-sm font-semibold uppercase mb-4 block">
          Client Stories
        </span>
        <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-charcoal-dark mb-16">
          See Why Clients Trust Urban
        </h2>

        <div className="relative h-[250px] md:h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="text-6xl text-gold-primary/20 font-playfair leading-none mb-4">"</div>
              <p className="text-xl md:text-2xl text-charcoal-dark font-playfair italic mb-8 leading-relaxed max-w-3xl">
                {testimonials[currentIndex].text}
              </p>
              <div>
                <h4 className="font-semibold text-charcoal-dark">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-gray-500 mt-1 uppercase tracking-wide">
                  {testimonials[currentIndex].projectType} • {testimonials[currentIndex].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                idx === currentIndex ? 'w-8 bg-gold-primary' : 'w-2 bg-gray-200 hover:bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
