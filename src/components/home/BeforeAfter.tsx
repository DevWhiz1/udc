import { useState, useRef, useEffect, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';
import { motion } from 'motion/react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: ReactMouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: ReactTouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-primary tracking-[0.2em] text-sm font-semibold uppercase mb-4 block">
            From Structure to Signature
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-charcoal-dark mb-6">
            Witness the Transformation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Slide to see how we turn raw structures into beautiful, finished living spaces through our turnkey construction and interior expertise.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/3] md:aspect-[16/9] w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl select-none"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* Before Image (Background) */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&q=80&w=1200" 
              alt="Before Construction" 
              className="w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 right-4 bg-charcoal-dark/70 text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded backdrop-blur">
              Grey Structure
            </div>
          </div>

          {/* After Image (Foreground, Clipped) */}
          <div 
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200" 
              alt="After Construction" 
              className="w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 left-4 bg-gold-primary/90 text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded backdrop-blur">
              Finished Project
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gold-primary">
              <div className="w-1 h-4 border-l border-r border-gray-300 mx-auto" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
