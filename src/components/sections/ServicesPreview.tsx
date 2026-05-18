import { motion } from 'framer-motion';
import { Camera, Film, Calendar, Heart, Sparkles, BookOpen } from 'lucide-react';
import { services } from '@/lib/data';

const iconMap: Record<string, React.ElementType> = {
  'Wedding Shoots': Heart,
  'Fashion Photography': Sparkles,
  'Event Coverage': Calendar,
  'Birthday Photography': Heart,
  'Couple Shoots': Heart,
  'Reels & Cinematic Videos': Film,
  'Magazine Shoots': BookOpen,
};

export function ServicesPreview() {
  return (
    <section className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-amber-500 text-xs uppercase tracking-[0.3em] mb-3">What We Do</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our <span className="text-amber-500">Services</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.title] || Camera;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-6 border border-white/5 hover:border-amber-500/30 bg-neutral-950/50 hover:bg-neutral-900/50 transition-all duration-500"
              >
                <Icon className="w-7 h-7 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white text-base font-medium mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {service.title}
                </h3>
                <p className="text-neutral-500 text-xs leading-relaxed mb-4">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
