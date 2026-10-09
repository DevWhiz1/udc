import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Modern Residence',
    location: 'Lahore, Pakistan',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    description: 'Contemporary residential architecture, construction and interior finishing.'
  },
  {
    id: 2,
    title: 'Corporate Headquarters',
    location: 'Islamabad, Pakistan',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    description: 'A state-of-the-art office building with sustainable design features.'
  },
  {
    id: 3,
    title: 'Luxury Villa',
    location: 'Karachi, Pakistan',
    category: 'Turnkey',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    description: 'Complete turnkey construction including premium interior detailing.'
  },
  {
    id: 4,
    title: 'Minimalist Heights',
    location: 'Lahore, Pakistan',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    description: 'Architectural planning and structural design for a modern residential complex.'
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-warm-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-gold-primary tracking-[0.2em] text-sm font-semibold uppercase mb-4 block">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-charcoal-dark">
              Featured Projects
            </h2>
          </div>
          <Link 
            to="/projects"
            className="mt-6 md:mt-0 text-charcoal-dark font-medium hover:text-gold-primary transition-colors border-b border-charcoal-dark hover:border-gold-primary pb-1"
          >
            View All Projects <span className="ml-2">→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-charcoal-dark text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded">
                  {project.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-charcoal-dark mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-gold-primary mb-4 uppercase tracking-wide">
                  {project.location}
                </p>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <Link 
                  to={`/projects/${project.id}`}
                  className="inline-block text-charcoal-dark font-medium group-hover:text-gold-primary transition-colors"
                >
                  View Project <span className="ml-2">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
