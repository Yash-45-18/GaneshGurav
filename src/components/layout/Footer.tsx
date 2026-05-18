import { Link } from 'react-router-dom';
import { Camera, Mail, Phone, MapPin, ArrowUpRight, Share2, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Camera className="w-5 h-5 text-amber-500" />
              <span className="text-lg font-bold tracking-[0.15em] text-white uppercase">Ganesh Gurav</span>
            </Link>
            <p className="text-amber-500/60 text-xs tracking-widest uppercase mb-3">BMF International Magazine</p>
            <p className="text-neutral-500 text-sm leading-relaxed mb-4">
              Professional Wedding, Fashion & Event Photography. Maharashtra Icon Event Organiser. Capturing your most precious moments with artistic vision.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/ganesh_n_gurav" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-amber-500/20 flex items-center justify-center text-neutral-400 hover:text-amber-500 hover:border-amber-500 transition-all">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="https://wa.me/919890079396" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-amber-500/20 flex items-center justify-center text-neutral-400 hover:text-green-500 hover:border-green-500 transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-amber-500 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Portfolio', 'About', 'Services', 'Booking', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-neutral-500 text-sm hover:text-amber-500 transition-colors flex items-center gap-2 group"
                  >
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-amber-500 mb-4">Services</h4>
            <ul className="space-y-2">
              {['Wedding Photography', 'Fashion Shoots', 'Event Coverage', 'Birthday Photography', 'Couple Shoots', 'Cinematic Reels'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-neutral-500 text-sm hover:text-amber-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-amber-500 mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <span className="text-neutral-500 text-sm">Opp. Sonai Mangal Karyalay, Near Dr Shah Clinic, Thergaon, Pimpri-Chinchwad, Maharashtra 411033</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:+919890079396" className="text-neutral-500 text-sm hover:text-amber-500 transition-colors">+91 98900 79396</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:ganeshgurav@gmail.com" className="text-neutral-500 text-sm hover:text-amber-500 transition-colors">ganeshgurav@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="https://www.instagram.com/ganesh_n_gurav" target="_blank" rel="noopener noreferrer" className="text-neutral-500 text-sm hover:text-amber-500 transition-colors">@ganesh_n_gurav</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-neutral-600 text-xs tracking-wide">
            © {new Date().getFullYear()} Ganesh Gurav Photography. All rights reserved.
          </p>
          <p className="text-amber-500/60 text-xs tracking-widest uppercase">Open 24 Hours • Pimpri-Chinchwad, Maharashtra</p>
        </div>
      </div>
    </footer>
  );
}
