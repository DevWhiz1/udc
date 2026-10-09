import { motion } from 'motion/react';
import { Fragment } from 'react';

const steps = [
  { id: '01', title: 'Consultation', description: 'Initial meeting to understand your vision and requirements.' },
  { id: '02', title: 'Site Assessment', description: 'Detailed analysis of the plot, soil, and environment.' },
  { id: '03', title: 'Architectural Design', description: 'Creation of floor plans, 3D models, and elevations.' },
  { id: '04', title: 'Planning & Estimation', description: 'Material selection and transparent cost breakdown.' },
  { id: '05', title: 'Construction', description: 'Execution of grey structure and MEP systems.' },
  { id: '06', title: 'Finishing', description: 'Interior detailing, flooring, and final touches.' },
  { id: '07', title: 'Inspection', description: 'Rigorous quality control and safety checks.' },
  { id: '08', title: 'Handover', description: 'Final project delivery and post-construction support.' },
];

export default function Process() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-primary tracking-[0.2em] text-sm font-semibold uppercase mb-4 block">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-charcoal-dark mb-6">
            How We Build Excellence
          </h2>
        </div>

        {/* Desktop Process Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-8 left-0 right-0 h-[2px] bg-gray-100" />
          
          <div className="grid grid-cols-4 gap-y-16 gap-x-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Connecting Line (active) */}
                <div className="absolute top-8 left-0 right-0 h-[2px] bg-gold-primary transform origin-left scale-x-0 transition-transform duration-1000 group-hover:scale-x-100" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-gold-primary flex items-center justify-center text-gold-primary font-bold text-xl mb-6 shadow-sm">
                    {step.id}
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal-dark mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden relative">
          <div className="absolute top-0 bottom-0 left-8 w-[2px] bg-gold-primary/20" />
          
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex items-start"
              >
                <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-gold-primary flex-shrink-0 flex items-center justify-center text-gold-primary font-bold text-xl shadow-sm">
                  {step.id}
                </div>
                <div className="ml-6 pt-2">
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
