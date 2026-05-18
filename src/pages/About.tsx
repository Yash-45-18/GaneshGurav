import { motion } from 'framer-motion';
import { Star, Award, Globe, Heart } from 'lucide-react';

export function About() {
  const achievements = [
    { icon: Award, title: 'BMF International Magazine', desc: 'Founder & CEO' },
    { icon: Globe, title: 'Maharashtra Icon', desc: 'Event Organiser' },
    { icon: Star, title: '4.6 Google Rating', desc: '37+ Five-Star Reviews' },
    { icon: Heart, title: '500+ Weddings', desc: 'Successfully Documented' },
  ];

  return (
    <main className="pt-20 sm:pt-24 pb-16 sm:pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14 sm:mb-20"
        >
          <p className="text-amber-500 text-xs uppercase tracking-[0.3em] mb-3">About Us</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Meet <span className="text-amber-500">Ganesh Gurav</span>
          </h1>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden border border-amber-500/20">
              <img
                src="/images/about-photo.jpg"
                alt="Ganesh Gurav - Professional Photographer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-amber-500/30 hidden sm:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Passionate About <span className="text-amber-500">Storytelling</span>
            </h2>
            <div className="space-y-4 text-neutral-400 leading-relaxed text-sm">
              <p>
                <span className="text-amber-500 font-medium">Ganesh Gurav</span> is a professional photographer and
                event planner based in Pimpri-Chinchwad, Maharashtra. With a deep passion for capturing emotions,
                traditions, and beautiful moments, he has established himself as one of the region's most sought-after
                wedding and fashion photographers.
              </p>
              <p>
                As the <span className="text-white font-medium">Founder & CEO of BMF International Magazine</span>,
                Ganesh brings a unique editorial perspective to every shoot. His expertise spans across wedding
                photography, fashion editorials, event coverage, and cinematic videography.
              </p>
              <p>
                Recognized as a <span className="text-white font-medium">Maharashtra Icon Event Organiser</span>,
                he brings the same creative vision and meticulous attention to detail that makes every celebration
                truly unforgettable. With 4.6⭐ Google rating and 37+ reviews, his work speaks for itself.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
            Achievements & <span className="text-amber-500">Recognition</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border border-amber-500/10 bg-neutral-950/50 hover:border-amber-500/30 transition-all duration-500 text-center"
              >
                <item.icon className="w-8 h-8 text-amber-500 mx-auto mb-4" />
                <h3 className="text-white text-sm font-medium mb-1">{item.title}</h3>
                <p className="text-amber-500/60 text-xs uppercase tracking-wider">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Quick Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our <span className="text-amber-500">Specializations</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Wedding Photography', 'Fashion Photography', 'Pre-Wedding Shoots',
              'Event Coverage', 'Birthday Photography', 'Couple Shoots',
              'Cinematic Reels', 'Magazine Shoots', 'Drone Photography'
            ].map((spec, i) => (
              <motion.span
                key={spec}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 border border-amber-500/20 text-amber-500 text-xs uppercase tracking-wider hover:bg-amber-500/10 transition-all cursor-default"
              >
                {spec}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
