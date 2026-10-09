import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faLocationDot, 
  faGlobe, 
  faCheckCircle 
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { companyInfo } from '../../data/companyInfo';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section className="py-24 lg:py-32 bg-charcoal-dark text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-primary tracking-[0.2em] text-xs font-bold uppercase mb-3 block">
            Visit Our Office or Connect Online
          </span>
          <h2 className="text-3xl md:text-5xl font-playfair font-semibold mb-4 leading-tight">
            Let's Build Something Exceptional
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Visit our corporate office in Multi Gardens B-17 Islamabad or connect directly with our engineering team.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Contact Cards & Direct Info (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Cards */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl space-y-6">
              <div>
                <h3 className="text-xl font-playfair font-semibold text-white mb-2">
                  Corporate Office
                </h3>
                <div className="flex items-start space-x-3 text-gray-300 text-sm">
                  <FontAwesomeIcon icon={faLocationDot} className="text-gold-primary mt-1 text-base flex-shrink-0" />
                  <span>{companyInfo.address}</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <span className="text-xs uppercase tracking-wider text-gray-400 block mb-2 font-medium">
                  Direct Phone Lines
                </span>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faPhone} className="text-gold-primary text-sm" />
                    <a href="tel:+923155874112" className="text-white hover:text-gold-primary text-base font-medium transition-colors">
                      +92 315-587 4112
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faPhone} className="text-gold-primary text-sm" />
                    <a href="tel:+923333834040" className="text-white hover:text-gold-primary text-base font-medium transition-colors">
                      +92 333-383 4040
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <span className="text-xs uppercase tracking-wider text-gray-400 block mb-2 font-medium">
                  Email & Web
                </span>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gold-primary" />
                    <a href="mailto:urbandesconstb17@gmail.com" className="text-gray-300 hover:text-gold-primary transition-colors break-all">
                      {companyInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faGlobe} className="text-gold-primary" />
                    <a href="https://www.urbandesconst.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold-primary transition-colors">
                      {companyInfo.website}
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 space-y-3">
                <a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-colors text-sm shadow-md"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                  <span>Chat on WhatsApp (+92 315-587 4112)</span>
                </a>
                <a
                  href={companyInfo.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 w-full py-3 bg-[#1877F2]/20 hover:bg-[#1877F2] text-white border border-[#1877F2]/40 hover:border-[#1877F2] rounded-xl font-medium transition-all text-sm"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="text-base" />
                  <span>Follow us on Facebook</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Lead Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl text-charcoal-dark shadow-2xl"
          >
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-charcoal-dark">
                  Thank You for Your Inquiry
                </h3>
                <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                  Our principal engineering team has received your project details. We will contact you shortly via phone or WhatsApp.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-gold-primary font-medium text-sm hover:underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="border-b border-gray-100 pb-4 mb-2">
                  <h3 className="text-xl font-playfair font-bold text-charcoal-dark">
                    Schedule a Consultation / Request Project Feasibility
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Fill out your plot details for our Islamabad engineering office.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required 
                      className="w-full bg-light-gray border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-gold-primary focus:outline-none transition-shadow" 
                      placeholder="e.g. Ahmad Khan" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      required 
                      className="w-full bg-light-gray border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-gold-primary focus:outline-none transition-shadow" 
                      placeholder="+92 3XX XXXXXXX" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      className="w-full bg-light-gray border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-gold-primary focus:outline-none transition-shadow" 
                      placeholder="client@example.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Project Location / City
                    </label>
                    <input 
                      type="text" 
                      defaultValue="Multi Gardens B-17, Islamabad" 
                      className="w-full bg-light-gray border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-gold-primary focus:outline-none transition-shadow" 
                      placeholder="e.g. B-17 Islamabad / DHA" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Service Required
                    </label>
                    <select className="w-full bg-light-gray border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-gold-primary focus:outline-none transition-shadow text-gray-700">
                      <option>Turnkey Construction (Concept-to-Key)</option>
                      <option>Architectural Design & 3D Approvals</option>
                      <option>Grey Structure Civil Construction</option>
                      <option>MEP Systems Engineering</option>
                      <option>Luxury Interior Design & Millwork</option>
                      <option>Finishing Works & Detailing</option>
                      <option>Commercial Plaza Construction</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Plot / Property Size
                    </label>
                    <select className="w-full bg-light-gray border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-gold-primary focus:outline-none transition-shadow text-gray-700">
                      <option>5 Marla (25' x 45')</option>
                      <option>10 Marla (35' x 65')</option>
                      <option>1 Kanal (50' x 90')</option>
                      <option>2 Kanal (75' x 120')</option>
                      <option>Commercial Plot (4 - 8 Marla)</option>
                      <option>Farmhouse / Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Project Details / Specific Requirements
                  </label>
                  <textarea 
                    rows={3} 
                    className="w-full bg-light-gray border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-gold-primary focus:outline-none transition-shadow resize-none" 
                    placeholder="Tell us about your plot location, expected timeline, or architectural preferences..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gold-primary hover:bg-gold-secondary text-white font-medium py-4 rounded-lg transition-colors tracking-wide text-sm shadow-md"
                >
                  Submit Project Details
                </button>
              </form>
            )}
          </motion.div>

        </div>

        {/* Embedded Interactive Google Map */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div>
              <span className="text-gold-primary text-xs uppercase tracking-wider font-bold block mb-1">
                Office Location Map
              </span>
              <h3 className="text-2xl font-playfair font-semibold text-white">
                Multi Gardens B-17, Islamabad Office
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=33.685005,72.808755"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-semibold bg-white/10 hover:bg-gold-primary text-white px-4 py-2 rounded-lg transition-colors"
            >
              <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-gold-primary" />
              <span>Open in Google Maps App</span>
            </a>
          </div>

          <div className="relative w-full h-[400px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.9250334947565!2d72.80875577550016!3d33.68500527329742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa3409e4ae3df%3A0x2585c8f87696164c!2sBest%20choice%20property!5e0!3m2!1sen!2s!4v1791520297935!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
              title="Urban Design & Construction Location - Multi Gardens B-17 Islamabad"
              className="w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
