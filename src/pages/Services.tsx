import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Film, Calendar, Sparkles, Camera, Check, ChevronDown, BookOpen } from 'lucide-react';
import { services, packages, faqs } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ElementType> = {
  'Wedding Shoots': Heart,
  'Fashion Photography': Sparkles,
  'Event Coverage': Calendar,
  'Birthday Photography': Camera,
  'Couple Shoots': Heart,
  'Reels & Cinematic Videos': Film,
  'Magazine Shoots': BookOpen,
};

export function Services() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <main className="pt-20 sm:pt-24 pb-16 sm:pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14 sm:mb-20"
        >
          <p className="text-amber-500 text-xs uppercase tracking-[0.3em] mb-3">What We Offer</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our <span className="text-amber-500">Services</span>
          </h1>
          <p className="text-neutral-500 max-w-2xl mx-auto mt-3 text-sm">
            From intimate weddings to grand celebrations, fashion editorials to cinematic reels
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-20">
          {services.map((service, i) => {
            const Icon = iconMap[service.title] || Camera;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-6 border border-white/5 hover:border-amber-500/30 bg-neutral-950/30 hover:bg-neutral-900/30 transition-all duration-500"
              >
                <Icon className="w-7 h-7 text-amber-500 mb-4" />
                <h3 className="text-white text-base font-medium mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {service.title}
                </h3>
                <p className="text-neutral-500 text-xs leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-1.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-neutral-400 text-xs">
                      <Check className="w-3 h-3 text-amber-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-amber-500 text-xs uppercase tracking-[0.3em] mb-3">Investment</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Wedding <span className="text-amber-500">Packages</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-20">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-6 border ${
                pkg.popular
                  ? 'border-amber-500/40 bg-amber-500/5'
                  : 'border-white/5 bg-neutral-950/30'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-black text-xs uppercase tracking-widest font-bold">
                  Most Popular
                </div>
              )}
              <h3 className="text-white text-lg font-medium mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {pkg.name}
              </h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-amber-500" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {pkg.price}
                </span>
              </div>
              <ul className="space-y-2.5 mb-6">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-neutral-400 text-xs">
                    <Check className="w-3 h-3 text-amber-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/booking" className="block">
                <Button variant={pkg.popular ? 'primary' : 'outline'} className="w-full text-xs">
                  Book Now
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-amber-500 text-xs uppercase tracking-[0.3em] mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Common <span className="text-amber-500">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-white/5 bg-neutral-950/30"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === String(i) ? null : String(i))}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
                >
                  <span className="text-white text-sm pr-4 font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-500 shrink-0 transition-transform duration-300 ${
                      openFaq === String(i) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === String(i) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-neutral-400 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
