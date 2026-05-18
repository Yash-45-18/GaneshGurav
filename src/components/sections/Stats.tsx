import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Heart, Globe, Camera, Star } from 'lucide-react';
import { stats } from '@/lib/data';

function AnimatedValue({ value }: { value: string }) {
  const [display, setDisplay] = useState('0');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isNumber = !isNaN(parseFloat(value.replace('+', '')));

  useEffect(() => {
    if (!isInView || !isNumber) {
      setDisplay(value);
      return;
    }
    const num = parseFloat(value.replace('+', ''));
    const suffix = value.includes('+') ? '+' : '';
    const duration = 2000;
    const start = Date.now();

    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * num);
      setDisplay(current.toString() + suffix);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value, isNumber]);

  return <span ref={ref}>{display}</span>;
}

const iconMap: Record<number, React.ElementType> = {
  0: Heart,
  1: Camera,
  2: Globe,
  3: Star,
};

export function Stats() {
  return (
    <section className="py-16 sm:py-20 bg-neutral-950 border-y border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, i) => {
            const Icon = iconMap[i] || Camera;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 border border-amber-500/20 flex items-center justify-center group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-all duration-500">
                  <Icon className="w-6 h-6 text-amber-500" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <AnimatedValue value={stat.value} />
                </div>
                <p className="text-neutral-500 text-xs uppercase tracking-[0.15em]">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
