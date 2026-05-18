import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 sm:py-24 bg-neutral-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-amber-500 text-xs uppercase tracking-[0.3em] mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Client <span className="text-amber-500">Stories</span>
          </h2>
        </motion.div>

        <div className="relative bg-black/40 backdrop-blur-sm border border-amber-500/10 p-8 sm:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Quote className="w-10 h-10 text-amber-500/30 mx-auto mb-6" />
              <p className="text-white text-lg sm:text-xl md:text-2xl font-medium leading-relaxed mb-6 max-w-3xl mx-auto" style={{ fontFamily: "'Playfair Display', serif" }}>
                "{testimonials[current].text}"
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < testimonials[current].rating ? 'text-amber-500 fill-amber-500' : 'text-neutral-700'}`} />
                ))}
              </div>
              <h4 className="text-amber-500 font-medium text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{testimonials[current].name}</h4>
              <p className="text-neutral-500 text-sm mt-1">{testimonials[current].location}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-8">
            <button onClick={prev} className="w-10 h-10 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-amber-500/30 transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="w-10 h-10 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-amber-500/30 transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
