import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsComplete(true), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[200] bg-bg flex flex-col items-center justify-center"
        >
          <div className="relative mb-12">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src="https://res.cloudinary.com/dd8pjjxsm/image/upload/v1773081022/WhatsApp_Image_2025-09-29_at_09.39.54_adslkb.jpg"
              alt="Cash Closers Logo"
              className="w-24 h-24 rounded-2xl object-cover shadow-[0_0_50px_rgba(212,175,55,0.3)]"
              referrerPolicy="no-referrer"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-gold/20 rounded-full border-t-gold"
            />
          </div>

          <div className="w-64 h-[2px] bg-white/5 relative overflow-hidden rounded-full">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="absolute inset-y-0 left-0 bg-gold"
            />
          </div>
          
          <div className="mt-6 flex items-center gap-4 overflow-hidden h-8">
            <motion.span 
              key={progress}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-gold font-serif text-2xl"
            >
              {progress}%
            </motion.span>
            <span className="text-white/20 uppercase tracking-[0.3em] text-xs font-medium">
              Diagnosing Opportunities
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
