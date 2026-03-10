import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '@/src/components/Motion';
import { Button } from '@/src/components/Button';

export const Contact = () => {
  const [formType, setFormType] = useState<'business' | 'closer'>('business');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <FadeIn direction="right">
            <h1 className="text-4xl sm:text-5xl md:text-7xl mb-8">Let's Talk <br /><span className="gold-text italic">Performance.</span></h1>
            <p className="text-xl text-white/60 mb-12 leading-relaxed">
              Whether you're looking to scale your revenue or your career, the first step is a diagnostic conversation.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-4">Email Us</h4>
                <p className="text-xl sm:text-2xl font-serif">hello@cashclosers.com</p>
              </div>
              <div>
                <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-4">Visit Us</h4>
                <p className="text-xl sm:text-2xl font-serif">Powered by Pytch Marketing <br />Global Remote Operations</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="glass p-8 md:p-12 rounded-[2rem] border-white/10">
              {!submitted ? (
                <>
                  <div className="flex gap-4 mb-10">
                    <button 
                      onClick={() => setFormType('business')}
                      className={`flex-1 py-3 rounded-full text-sm font-medium transition-all ${formType === 'business' ? 'bg-gold text-black' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
                    >
                      I Need Closers
                    </button>
                    <button 
                      onClick={() => setFormType('closer')}
                      className={`flex-1 py-3 rounded-full text-sm font-medium transition-all ${formType === 'closer' ? 'bg-gold text-black' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
                    >
                      I Want to Close
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Full Name</label>
                        <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Email Address</label>
                        <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
                      </div>
                    </div>
                    
                    {formType === 'business' ? (
                      <>
                        <div>
                          <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Company Name</label>
                          <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Monthly Revenue Range</label>
                          <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors appearance-none">
                            <option>$0 - $10k</option>
                            <option>$10k - $50k</option>
                            <option>$50k - $250k</option>
                            <option>$250k+</option>
                          </select>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Sales Experience (Years)</label>
                          <input type="number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">LinkedIn Profile URL</label>
                          <input type="url" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
                        </div>
                      </>
                    )}

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Tell us more</label>
                      <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none"></textarea>
                    </div>

                    <Button variant="gold" className="w-full py-4">
                      Submit Application <Send size={18} className="ml-2" />
                    </Button>
                  </form>
                </>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center text-black mx-auto mb-8">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl mb-4">Application Received</h3>
                  <p className="text-white/60 mb-8">
                    Our team will review your details and get back to you within 24-48 hours for a diagnostic call.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another</Button>
                </motion.div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
