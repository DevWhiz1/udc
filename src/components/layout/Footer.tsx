import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 */}
          <div>
            <div className="mb-6 flex items-center">
              <Link to="/">
                <img 
                  src="/assets/logo.jpeg" 
                  alt="Urban Design & Construction" 
                  className="h-16 md:h-20 w-auto object-contain rounded shadow-lg border border-gold-primary/20" 
                />
              </Link>
            </div>
            <p className="text-gray-300 text-[15px] leading-relaxed mb-6">
              Urban Design & Construction provides architectural design, construction, interior design, finishing and turnkey building solutions for residential and commercial projects in Pakistan.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61584618107154" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Urban Design & Construction on Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-primary transition-colors text-white"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a 
                href="https://wa.me/923155874112" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Contact Urban Design on WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-600 transition-colors text-white"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="#" aria-label="Urban Design on Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-primary transition-colors text-white">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" aria-label="Urban Design on LinkedIn" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-primary transition-colors text-white">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" aria-label="Urban Design on YouTube" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-primary transition-colors text-white">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Process', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-gray-300 hover:text-gold-primary transition-colors text-[15px]">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'Architectural Design', path: '/services/architectural-design' },
                { name: 'General Construction', path: '/services/construction' },
                { name: 'Grey Structure', path: '/services/grey-structure' },
                { name: 'MEP Engineering', path: '/services/mep' },
                { name: 'Interior Design', path: '/services/interior-design' },
                { name: 'Finishing Works', path: '/services/finishing' },
                { name: 'Turnkey Construction', path: '/services/turnkey-construction' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-300 hover:text-gold-primary transition-colors text-[15px]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faPhone} className="text-gold-primary mt-1" />
                <div className="flex flex-col text-gray-300 text-[15px]">
                  <a href="tel:+923155874112" className="hover:text-gold-primary transition-colors">+92 315-587 4112</a>
                  <a href="tel:+923333834040" className="hover:text-gold-primary transition-colors">+92 333-383 4040</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faWhatsapp} className="text-gold-primary mt-1" />
                <a 
                  href="https://wa.me/923155874112" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 text-[15px] hover:text-gold-primary transition-colors"
                >
                  +92 315-587 4112 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-gold-primary mt-1" />
                <a 
                  href="mailto:urbandesconstb17@gmail.com" 
                  className="text-gray-300 text-[15px] hover:text-gold-primary transition-colors break-all"
                >
                  urbandesconstb17@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faLocationDot} className="text-gold-primary mt-1" />
                <span className="text-gray-300 text-[15px]">
                  Multi Gardens B-17, Islamabad, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2026 Urban Design & Construction. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="/privacy" className="hover:text-gold-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
