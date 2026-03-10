import { Link } from 'react-router-dom';
import { SITE_CONFIG, NAVIGATION } from '@/src/constants';
import { Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-bg border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img 
                src="https://res.cloudinary.com/dd8pjjxsm/image/upload/v1773081022/WhatsApp_Image_2025-09-29_at_09.39.54_adslkb.jpg" 
                alt="Cash Closers Logo" 
                className="w-8 h-8 rounded-lg object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl font-serif tracking-tight font-medium">
                CASH CLOSERS
              </span>
            </Link>
            <p className="text-white/50 max-w-sm mb-8 leading-relaxed">
              The elite on-demand sales force. Caribbean-based with perfect English and Spanish speaking agents. We don't just close; we diagnose and prescribe.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white/60 hover:text-gold transition-colors flex items-center gap-1 group">
                    {item.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Join Us</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/apply/business" className="text-white/60 hover:text-gold transition-colors">Hire Talent</Link>
              </li>
              <li>
                <Link to="/apply/closer" className="text-white/60 hover:text-gold transition-colors">Become a Closer</Link>
              </li>
              <li>
                <Link to="/academy" className="text-white/60 hover:text-gold transition-colors">Sales Academy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Cash Closers. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
