import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'motion/react';

const serviceSublinks = [
  { name: 'Architectural Design', path: '/services/architectural-design', num: '01' },
  { name: 'General Construction', path: '/services/construction', num: '02' },
  { name: 'Grey Structure', path: '/services/grey-structure', num: '03' },
  { name: 'MEP Engineering', path: '/services/mep', num: '04' },
  { name: 'Interior Design', path: '/services/interior-design', num: '05' },
  { name: 'Finishing Works', path: '/services/finishing', num: '06' },
  { name: 'Turnkey Construction', path: '/services/turnkey-construction', num: '07' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdown when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <img 
              src="/assets/logo.jpeg" 
              alt="Urban Design & Construction" 
              className="h-14 md:h-16 w-auto object-contain rounded-md shadow-sm transition-transform duration-200 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-7">
            <Link
              to="/"
              className={clsx(
                'text-[15px] font-medium transition-colors hover:text-gold-primary',
                location.pathname === '/' ? 'text-gold-primary' : 'text-charcoal-dark'
              )}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={clsx(
                'text-[15px] font-medium transition-colors hover:text-gold-primary',
                location.pathname === '/about' ? 'text-gold-primary' : 'text-charcoal-dark'
              )}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={clsx(
                  'text-[15px] font-medium transition-colors hover:text-gold-primary flex items-center space-x-1.5 py-2',
                  isServicesActive ? 'text-gold-primary' : 'text-charcoal-dark'
                )}
              >
                <span>Services</span>
                <FontAwesomeIcon icon={faChevronDown} className="text-[10px] mt-0.5" />
              </Link>

              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-3 z-50"
                  >
                    <div className="px-4 py-1.5 border-b border-gray-100 mb-1">
                      <Link 
                        to="/services"
                        className="text-xs font-bold uppercase tracking-wider text-gold-primary hover:text-gold-secondary flex items-center justify-between"
                      >
                        <span>All Services Overview</span>
                        <span>→</span>
                      </Link>
                    </div>

                    {serviceSublinks.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className={clsx(
                          'flex items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-warm-offwhite hover:text-gold-primary',
                          location.pathname === sub.path ? 'text-gold-primary bg-gold-primary/5 font-semibold' : 'text-charcoal-dark'
                        )}
                      >
                        <span>{sub.name}</span>
                        <span className="text-[11px] font-mono text-gray-400">{sub.num}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/projects"
              className={clsx(
                'text-[15px] font-medium transition-colors hover:text-gold-primary',
                location.pathname === '/projects' ? 'text-gold-primary' : 'text-charcoal-dark'
              )}
            >
              Projects
            </Link>

            <Link
              to="/process"
              className={clsx(
                'text-[15px] font-medium transition-colors hover:text-gold-primary',
                location.pathname === '/process' ? 'text-gold-primary' : 'text-charcoal-dark'
              )}
            >
              Process
            </Link>

            <Link
              to="/blog"
              className={clsx(
                'text-[15px] font-medium transition-colors hover:text-gold-primary',
                location.pathname === '/blog' ? 'text-gold-primary' : 'text-charcoal-dark'
              )}
            >
              Media
            </Link>

            <Link
              to="/contact"
              className={clsx(
                'text-[15px] font-medium transition-colors hover:text-gold-primary',
                location.pathname === '/contact' ? 'text-gold-primary' : 'text-charcoal-dark'
              )}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="bg-gold-primary text-white px-5 py-2.5 rounded hover:bg-gold-secondary transition-colors font-medium text-sm ml-2"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-charcoal-dark text-2xl focus:outline-none p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl lg:hidden border-t border-gray-100 max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col px-4 pt-2 pb-6 space-y-1">
              <Link
                to="/"
                className={clsx(
                  'block px-3 py-2.5 text-base font-medium rounded-md',
                  location.pathname === '/' ? 'bg-gold-primary/10 text-gold-primary' : 'text-charcoal-dark'
                )}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={clsx(
                  'block px-3 py-2.5 text-base font-medium rounded-md',
                  location.pathname === '/about' ? 'bg-gold-primary/10 text-gold-primary' : 'text-charcoal-dark'
                )}
              >
                About
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <div className="flex items-center justify-between px-3 py-2.5 text-base font-medium rounded-md text-charcoal-dark">
                  <Link to="/services" className={isServicesActive ? 'text-gold-primary' : ''}>
                    Services
                  </Link>
                  <button 
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="p-1 text-gray-500"
                    aria-label="Toggle services list"
                  >
                    <FontAwesomeIcon icon={faChevronDown} className={clsx('transition-transform', isMobileServicesOpen && 'rotate-180')} />
                  </button>
                </div>

                {isMobileServicesOpen && (
                  <div className="pl-6 pr-2 py-1 space-y-1 bg-warm-offwhite rounded-md mb-2">
                    <Link
                      to="/services"
                      className="block py-2 text-xs font-bold uppercase tracking-wider text-gold-primary"
                    >
                      All Services
                    </Link>
                    {serviceSublinks.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className={clsx(
                          'block py-2 text-sm',
                          location.pathname === sub.path ? 'text-gold-primary font-semibold' : 'text-gray-700'
                        )}
                      >
                        {sub.num}. {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/projects"
                className={clsx(
                  'block px-3 py-2.5 text-base font-medium rounded-md',
                  location.pathname === '/projects' ? 'bg-gold-primary/10 text-gold-primary' : 'text-charcoal-dark'
                )}
              >
                Projects
              </Link>
              <Link
                to="/process"
                className={clsx(
                  'block px-3 py-2.5 text-base font-medium rounded-md',
                  location.pathname === '/process' ? 'bg-gold-primary/10 text-gold-primary' : 'text-charcoal-dark'
                )}
              >
                Process
              </Link>
              <Link
                to="/blog"
                className={clsx(
                  'block px-3 py-2.5 text-base font-medium rounded-md',
                  location.pathname === '/blog' ? 'bg-gold-primary/10 text-gold-primary' : 'text-charcoal-dark'
                )}
              >
                Media
              </Link>
              <Link
                to="/contact"
                className={clsx(
                  'block px-3 py-2.5 text-base font-medium rounded-md',
                  location.pathname === '/contact' ? 'bg-gold-primary/10 text-gold-primary' : 'text-charcoal-dark'
                )}
              >
                Contact
              </Link>

              <div className="pt-4 px-1">
                <Link
                  to="/contact"
                  className="block text-center w-full bg-gold-primary text-white px-6 py-3 rounded hover:bg-gold-secondary transition-colors font-medium text-base"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
