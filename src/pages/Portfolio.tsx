import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { portfolioImages, categories } from '@/lib/data';
import type { PortfolioImage } from '@/types';

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<PortfolioImage | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = activeCategory === 'All'
    ? portfolioImages
    : portfolioImages.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((image: PortfolioImage, index: number) => {
    setLightbox(image);
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const nextImage = useCallback(() => {
    const next = (lightboxIndex + 1) % filtered.length;
    setLightboxIndex(next);
    setLightbox(filtered[next]);
  }, [lightboxIndex, filtered]);

  const prevImage = useCallback(() => {
    const prev = (lightboxIndex - 1 + filtered.length) % filtered.length;
    setLightboxIndex(prev);
    setLightbox(filtered[prev]);
  }, [lightboxIndex, filtered]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox, closeLightbox, nextImage, prevImage]);

  return (
    <main className="pt-20 sm:pt-24 pb-16 sm:pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-amber-500 text-xs uppercase tracking-[0.3em] mb-3">Our Work</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our <span className="text-amber-500">Portfolio</span>
          </h1>
          <p className="text-neutral-500 mt-3 max-w-lg mx-auto text-sm">
            A curated collection of wedding, fashion, event & portrait photography
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-xs uppercase tracking-wider transition-all duration-300 border ${
                activeCategory === cat
                  ? 'border-amber-500 text-amber-500 bg-amber-500/10'
                  : 'border-white/10 text-neutral-500 hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((image, i) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="break-inside-avoid group relative overflow-hidden cursor-pointer"
                onClick={() => openLightbox(image, i)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-12 h-12 border border-amber-500/50 flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <p className="text-amber-500 text-[10px] uppercase tracking-widest">{image.category}</p>
                  <h3 className="text-white text-lg font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 sm:w-12 h-10 sm:h-12 border border-white/20 flex items-center justify-center text-white hover:border-white/50 transition-all z-10">
              <X className="w-5 h-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 border border-white/20 flex items-center justify-center text-white hover:border-white/50 transition-all z-10">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 border border-white/20 flex items-center justify-center text-white hover:border-white/50 transition-all z-10">
              <ChevronRight className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-4xl max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.title} className="max-w-full max-h-[75vh] object-contain mx-auto rounded-sm" />
              <div className="text-center mt-4">
                <h3 className="text-white text-xl sm:text-2xl font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>{lightbox.title}</h3>
                <p className="text-amber-500 text-xs uppercase tracking-widest mt-1">{lightbox.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
