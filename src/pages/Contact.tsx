import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactForm) => {
    const accessKey = (import.meta as any).env?.VITE_WEB3FORMS_ACCESS_KEY;
    if (accessKey) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `📧 Contact: ${data.subject}`,
            name: data.name, email: data.email,
            subject_line: data.subject, message: data.message,
          }),
        });
      } catch (e) {
        console.error("Email failed:", e);
      }
    }
    reset();
  };

  return (
    <main className="pt-20 sm:pt-24 pb-16 sm:pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14 sm:mb-20">
          <p className="text-amber-500 text-xs uppercase tracking-[0.3em] mb-3">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Let's <span className="text-amber-500">Connect</span>
          </h1>
          <p className="text-neutral-500 max-w-xl mx-auto mt-3 text-sm">
            Have a question or ready to book? We would love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-xl sm:text-2xl text-white font-medium mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Contact Information
            </h2>
            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-medium mb-1">Studio Address</h3>
                  <p className="text-neutral-500 text-sm">Opp. Sonai Mangal Karyalay, Near Dr Shah Clinic,<br />Pawar Nagar 3, Samarth Colony, Thergaon,<br />Pimpri-Chinchwad, Maharashtra 411033</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-medium mb-1">Phone</h3>
                  <a href="tel:+919890079396" className="text-neutral-500 text-sm hover:text-amber-500 transition-colors">+91 98900 79396</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-medium mb-1">Email</h3>
                  <a href="mailto:ganeshgurav@gmail.com" className="text-neutral-500 text-sm hover:text-amber-500 transition-colors">ganeshgurav@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-medium mb-1">Business Hours</h3>
                  <p className="text-green-400 text-sm font-medium">Open 24 Hours</p>
                  <p className="text-neutral-500 text-xs">Always available for your special moments</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/919890079396?text=Namaste Ganesh bhai! I'm interested in your photography services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-green-600/20 border border-green-600/30 text-green-400 hover:bg-green-600/30 transition-all text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <a
                href="https://www.instagram.com/ganesh_n_gurav"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-amber-500/20 text-amber-500 hover:bg-amber-500/10 transition-all text-sm"
              >
                <Mail className="w-4 h-4" />
                @ganesh_n_gurav
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-xl sm:text-2xl text-white font-medium mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Send a Message
            </h2>
            {isSubmitSuccessful ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-8 border border-amber-500/20 bg-amber-500/5 text-center">
                <h3 className="text-white text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Message Sent!</h3>
                <p className="text-neutral-400 text-sm">We will get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Name</label>
                    <input {...register('name')} placeholder="Your name" className="w-full bg-neutral-900/50 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50" />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Email</label>
                    <input type="email" {...register('email')} placeholder="your@email.com" className="w-full bg-neutral-900/50 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50" />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Subject</label>
                  <input {...register('subject')} placeholder="How can we help?" className="w-full bg-neutral-900/50 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50" />
                  {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Message</label>
                  <textarea {...register('message')} rows={4} placeholder="Tell us about your project..." className="w-full bg-neutral-900/50 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50 resize-none" />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>
                <Button type="submit" className="group">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
          <div className="aspect-[21/9] w-full border border-amber-500/10 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.8!2d73.7497!3d18.6314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2be9f50e5c8a1%3A0x8e4e2b3c4d5e6f7a!2sThergaon%2C+Pimpri-Chinchwad%2C+Maharashtra+411033!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0, filter: 'grayscale(100%) invert(92%)' }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Ganesh Gurav Photography - Thergaon, Pimpri-Chinchwad"
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
