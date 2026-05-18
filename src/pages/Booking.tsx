import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, ChevronRight, ChevronLeft, Calendar, Users, MapPin, DollarSign, MessageSquare, Sparkles, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { eventTypes, budgetRanges } from '@/lib/data';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Valid phone required'),
  eventType: z.string().min(1, 'Event type required'),
  date: z.string().min(1, 'Date required'),
  location: z.string().min(2, 'Location required'),
  budget: z.string().min(1, 'Budget required'),
  message: z.string().optional(),
});

type BookingForm = z.infer<typeof bookingSchema>;

const steps = [
  { id: 1, title: 'Event', icon: Calendar },
  { id: 2, title: 'Details', icon: MapPin },
  { id: 3, title: 'Contact', icon: Users },
  { id: 4, title: 'Review', icon: Sparkles },
];

export function Booking() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { eventType: '', budget: '' },
  });

  const formData = watch();

  const nextStep = async () => {
    let fields: (keyof BookingForm)[] = [];
    if (step === 1) fields = ['eventType', 'date'];
    if (step === 2) fields = ['location', 'budget'];
    if (step === 3) fields = ['name', 'email', 'phone'];

    const valid = await trigger(fields);
    if (valid) setStep((s) => Math.min(s + 1, 4));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const onSubmit = async (data: BookingForm) => {
    // Send to WhatsApp
    const whatsappMsg = encodeURIComponent(
      ` *New Booking Inquiry - Ganesh Gurav Photography*\n\n` +
      ` Name: ${data.name}\n Email: ${data.email}\n📱 Phone: ${data.phone}\n` +
      `🎉 Event: ${data.eventType}\n📅 Date: ${data.date}\n📍 Location: ${data.location}\n` +
      `💰 Budget: ${data.budget}\n` +
      (data.message ? `\n💬 Message: ${data.message}` : '')
    );

    // Try to send email via Web3Forms
    const accessKey = (import.meta as any).env?.VITE_WEB3FORMS_ACCESS_KEY;
    if (accessKey) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `✨ New Booking from ${data.name}`,
            name: data.name, email: data.email, phone: data.phone,
            event_type: data.eventType, date: data.date,
            location: data.location, budget: data.budget,
            message: data.message || "No additional message",
          }),
        });
      } catch (e) {
        console.error("Email failed, WhatsApp will still work:", e);
      }
    }

    window.open(`https://wa.me/919890079396?text=${whatsappMsg}`, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="pt-20 sm:pt-24 pb-16 sm:pb-24 bg-black min-h-screen flex items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md mx-auto px-6">
          <div className="w-20 h-20 bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-8">
            <Check className="w-10 h-10 text-amber-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Inquiry Sent!
          </h1>
          <p className="text-neutral-400 mb-8 text-sm">
            Your details have been shared via WhatsApp. We will get back to you within 24 hours!
          </p>
          <Button onClick={() => window.location.reload()}>Make Another Inquiry</Button>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="pt-20 sm:pt-24 pb-16 sm:pb-24 bg-black min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <p className="text-amber-500 text-xs uppercase tracking-[0.3em] mb-3">Book a Session</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Start Your <span className="text-amber-500">Journey</span>
          </h1>
          <p className="text-neutral-500 mt-2 text-sm">Fill in the details and we will be in touch shortly</p>
        </motion.div>

        {/* Stepper */}
        <div className="flex justify-between mb-10">
          {steps.map((s, i) => (
            <div key={s.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div className={`w-9 h-9 flex items-center justify-center border transition-all ${
                  step >= s.id ? 'border-amber-500 bg-amber-500/10 text-amber-500' : 'border-white/10 text-neutral-600'
                }`}>
                  {step > s.id ? <Check className="w-4 h-4" /> : <s.icon className="w-4 h-4" />}
                </div>
                <span className={`text-[10px] mt-1 hidden sm:block ${step >= s.id ? 'text-white' : 'text-neutral-600'}`}>{s.title}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-[1px] mx-2 ${step > s.id ? 'bg-amber-500' : 'bg-white/10'}`} />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                <h2 className="text-xl text-white font-medium mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Event Details</h2>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Event Type</label>
                  <select {...register('eventType')} className="w-full bg-neutral-900/50 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50">
                    <option value="">Select event type</option>
                    {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {errors.eventType && <p className="text-red-400 text-xs mt-1">{errors.eventType.message}</p>}
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Event Date</label>
                  <input type="date" {...register('date')} className="w-full bg-neutral-900/50 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50" />
                  {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date.message}</p>}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                <h2 className="text-xl text-white font-medium mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Location & Budget</h2>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">
                    <MapPin className="w-3 h-3 inline mr-1" /> Location
                  </label>
                  <input {...register('location')} placeholder="City, Venue" className="w-full bg-neutral-900/50 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50" />
                  {errors.location && <p className="text-red-400 text-xs mt-1">{errors.location.message}</p>}
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">
                    <DollarSign className="w-3 h-3 inline mr-1" /> Budget Range
                  </label>
                  <select {...register('budget')} className="w-full bg-neutral-900/50 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50">
                    <option value="">Select budget range</option>
                    {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                  {errors.budget && <p className="text-red-400 text-xs mt-1">{errors.budget.message}</p>}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                <h2 className="text-xl text-white font-medium mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Info</h2>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Full Name</label>
                  <input {...register('name')} placeholder="Your name" className="w-full bg-neutral-900/50 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50" />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Email</label>
                    <input type="email" {...register('email')} placeholder="your@email.com" className="w-full bg-neutral-900/50 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50" />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Phone</label>
                    <input type="tel" {...register('phone')} placeholder="+91 98765 43210" className="w-full bg-neutral-900/50 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50" />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">
                    <MessageSquare className="w-3 h-3 inline mr-1" /> Message (Optional)
                  </label>
                  <textarea {...register('message')} rows={3} placeholder="Tell us more about your vision..." className="w-full bg-neutral-900/50 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50 resize-none" />
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                <h2 className="text-xl text-white font-medium mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Review Your Inquiry</h2>
                <div className="border border-white/5 bg-neutral-950/50 p-4 sm:p-6 space-y-3">
                  {[
                    { label: 'Event Type', value: formData.eventType },
                    { label: 'Date', value: formData.date },
                    { label: 'Location', value: formData.location },
                    { label: 'Budget', value: formData.budget },
                    { label: 'Name', value: formData.name },
                    { label: 'Email', value: formData.email },
                    { label: 'Phone', value: formData.phone },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between py-2 border-b border-white/5 last:border-0">
                      <span className="text-neutral-500 text-xs">{item.label}</span>
                      <span className="text-white text-xs">{item.value || '-'}</span>
                    </div>
                  ))}
                  {formData.message && (
                    <div className="pt-2">
                      <span className="text-neutral-500 text-xs block mb-1">Message</span>
                      <p className="text-white text-xs">{formData.message}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-between mt-8">
            {step > 1 ? (
              <Button type="button" variant="outline" onClick={prevStep}>
                <ChevronLeft className="w-4 h-4 mr-2" /> Back
              </Button>
            ) : <div />}
            {step < 4 ? (
              <Button type="button" onClick={nextStep}>
                Next <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button type="submit">
                <Send className="w-4 h-4 mr-2" /> Send Inquiry
              </Button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
