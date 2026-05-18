import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Ganesh Gurav Photography - Premium Wedding Photography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-8 w-32 h-32 border border-amber-500/10 rotate-45 hidden lg:block" />
      <div className="absolute bottom-20 right-8 w-24 h-24 border border-amber-500/10 rotate-12 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 border border-amber-500/30 bg-amber-500/10 mb-6"
        >
          <Camera className="w-4 h-4 text-amber-500" />
          <span className="text-amber-500 text-xs uppercase tracking-[0.3em]">Pimpri-Chinchwad • Maharashtra</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Capturing
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Timeless</span> Moments
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Premium Wedding, Fashion & Event Photography by <span className="text-amber-500 font-medium">Ganesh Gurav</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-amber-500/70 text-xs uppercase tracking-[0.2em] mb-10"
        >
          BMF International Magazine • Founder & CEO
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/booking">
            <Button size="lg" className="group">
              Book a Session
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button variant="outline" size="lg">
              View Portfolio
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-neutral-500 text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-amber-500/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
