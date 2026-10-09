import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const articles = [
  {
    id: 1,
    title: 'How Much Does It Cost to Build a House in Pakistan?',
    category: 'Guides',
    date: 'Oct 12, 2026',
    image: 'https://images.unsplash.com/photo-1541881451213-9799292db200?auto=format&fit=crop&q=80&w=600',
    excerpt: 'A comprehensive breakdown of construction costs per square foot, covering grey structure and finishing materials.'
  },
  {
    id: 2,
    title: '10 Things to Consider Before Building a House',
    category: 'Planning',
    date: 'Sep 28, 2026',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600',
    excerpt: 'From soil testing to architectural approvals, here is what you need to know before breaking ground.'
  },
  {
    id: 3,
    title: 'Grey Structure vs Turnkey Construction',
    category: 'Construction',
    date: 'Sep 15, 2026',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&q=80&w=600',
    excerpt: 'Understanding the difference between different construction contracts and which one is right for your project.'
  }
];

export default function Blog() {
  return (
    <section className="py-24 bg-warm-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-gold-primary tracking-[0.2em] text-sm font-semibold uppercase mb-4 block">
              From The Journal
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-charcoal-dark">
              Construction Insights
            </h2>
          </div>
          <Link 
            to="/blog"
            className="mt-6 md:mt-0 text-charcoal-dark font-medium hover:text-gold-primary transition-colors border-b border-charcoal-dark hover:border-gold-primary pb-1"
          >
            Read All Articles <span className="ml-2">→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group flex flex-col h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-charcoal-dark text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded">
                  {article.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-sm text-gray-500 mb-3">{article.date}</div>
                <h3 className="text-xl font-playfair font-semibold text-charcoal-dark mb-4 group-hover:text-gold-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {article.excerpt}
                </p>
                <Link 
                  to={`/blog/${article.id}`} 
                  className="inline-flex items-center text-charcoal-dark font-medium hover:text-gold-primary transition-colors text-sm mt-auto uppercase tracking-wide"
                >
                  Read Article <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs text-gold-primary" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
