import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAVIGATION, SITE_CONFIG } from '@/src/constants';
import { Button } from './Button';
import { cn } from '@/src/utils/cn';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled ? "py-4 bg-bg/80 backdrop-blur-xl border-bottom border-white/5" : "py-5 md:py-8 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="https://res.cloudinary.com/dd8pjjxsm/image/upload/v1773081022/WhatsApp_Image_2025-09-29_at_09.39.54_adslkb.jpg" 
            alt="Cash Closers Logo" 
            className="w-10 h-10 rounded-lg object-cover"
            referrerPolicy="no-referrer"
          />
          <span className="text-base sm:text-xl font-serif tracking-tight font-medium group-hover:text-gold transition-colors">
            CASH CLOSERS
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            <Link 
              key={item.name} 
              to={item.href}
              className={cn(
                "text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold nav-link",
                location.pathname === item.href ? "text-gold after:w-full" : "text-white/70"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button variant="gold" size="sm" href={SITE_CONFIG.links.businessApply}>
            Hire Elite Closers
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg border-t border-white/5 p-8 md:hidden flex flex-col gap-6"
          >
            {NAVIGATION.map((item) => (
              <Link 
                key={item.name} 
                to={item.href}
                className="text-2xl font-serif hover:text-gold transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-4">
              <Button variant="gold" href={SITE_CONFIG.links.businessApply} className="w-full">
                Hire Elite Closers
              </Button>
              <Button variant="outline" href={SITE_CONFIG.links.closerApply} className="w-full">
                Apply as Closer
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
