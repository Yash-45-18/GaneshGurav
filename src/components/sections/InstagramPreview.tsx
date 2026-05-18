import { motion } from 'framer-motion';
import { portfolioImages } from '@/lib/data';

export function InstagramPreview() {
  return (
    <section className="py-16 sm:py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-amber-500 text-xs uppercase tracking-[0.3em] mb-3">Follow Us</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Instagram <span className="text-amber-500">@ganesh_n_gurav</span>
          </h2>
          <p className="text-neutral-500 mt-2 text-sm">1,224 Followers • 465 Posts</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
          {portfolioImages.slice(0, 6).map((image, i) => (
            <motion.a
              key={image.id}
              href="https://www.instagram.com/ganesh_n_gurav"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative aspect-square overflow-hidden cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-lg">
                  ❤️
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
