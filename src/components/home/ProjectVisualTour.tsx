import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const tourImages = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    title: 'Modern Facade',
    location: 'Lahore',
    category: 'Architecture',
    size: 'large' // span 2 rows/cols if CSS grid supports, or just handle manually
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
    title: 'Minimalist Interior',
    location: 'Islamabad',
    category: 'Interior',
    size: 'small'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&q=80&w=800',
    title: 'Site Progress',
    location: 'Karachi',
    category: 'Construction',
    size: 'small'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1541881451213-9799292db200?auto=format&fit=crop&q=80&w=800',
    title: 'Corporate Building',
    location: 'Lahore',
    category: 'Commercial',
    size: 'wide'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800',
    title: 'Luxury Villa',
    location: 'Islamabad',
    category: 'Residential',
    size: 'small'
  }
];

export default function ProjectVisualTour() {
  return (
    <section className="py-24 bg-charcoal-dark text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-primary tracking-[0.2em] text-sm font-semibold uppercase mb-4 block">
            Visual Tour
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-6">
            Architecture That Speaks for Itself
          </h2>
        </div>

        {/* Masonry/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[250px]">
          {tourImages.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded cursor-pointer ${
                item.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                item.size === 'wide' ? 'md:col-span-2 row-span-1' : 
                'col-span-1 row-span-1'
              }`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-charcoal-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-gold-primary text-xs font-semibold uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.category} • {item.location}
                </div>
                <h3 className="text-2xl font-playfair font-semibold mb-2">{item.title}</h3>
                <div className="text-sm font-medium text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  View Project <span className="ml-1">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <Link 
              to="/gallery" 
              className="inline-block border border-gold-primary text-gold-primary px-8 py-3 rounded hover:bg-gold-primary hover:text-white transition-colors font-medium text-sm tracking-wide"
            >
              View Full Gallery
            </Link>
        </div>
      </div>
    </section>
  );
}
