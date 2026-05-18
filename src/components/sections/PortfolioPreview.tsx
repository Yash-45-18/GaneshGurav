import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import { portfolioImages, categories } from '@/lib/data';
import { useState } from 'react';

export function PortfolioPreview() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? portfolioImages.slice(0, 8)
    : portfolioImages.filter(img => img.category === activeCategory).slice(0, 8);

  return (
    <section className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-amber-500 text-xs uppercase tracking-[0.3em] mb-3">Our Work</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our <span className="text-amber-500">Portfolio</span>
          </h2>
          <p className="text-neutral-500 mt-3 max-w-lg mx-auto text-sm">
            A curated selection of our finest wedding, fashion & event photography
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.slice(0, 5).map((cat) => (
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

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden cursor-pointer break-inside-avoid"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />
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
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-amber-500 text-sm uppercase tracking-[0.15em] hover:text-amber-400 transition-colors group"
          >
            View All Works
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
