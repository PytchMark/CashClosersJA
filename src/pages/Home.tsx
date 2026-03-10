import { ArrowRight, CheckCircle2, Play, Star, Users, Briefcase, GraduationCap, ShieldCheck } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Button } from '@/src/components/Button';
import { FadeIn, StaggerContainer, TextReveal } from '@/src/components/Motion';
import { HERO_HEADLINES, SITE_CONFIG } from '@/src/constants';

export const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="overflow-hidden" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gold/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gold/5 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-medium uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              The Elite Sales Academy
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif leading-[0.9] mb-8">
              <TextReveal>Master the Art of</TextReveal>
              <TextReveal className="gold-text italic">High-Ticket Sales.</TextReveal>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-lg mb-8 sm:mb-10 leading-relaxed">
              Join the Cash Closers Sales Academy. We don't just teach sales; we build careers through elite connections and world-class opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" href="/closers">
                Join the Academy <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" href="/businesses">
                Hire Our Graduates
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    alt="User" 
                    className="w-10 h-10 rounded-full border-2 border-bg object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-gold mb-1">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-white/40">Trusted by 50+ high-growth brands</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="relative hidden lg:block">
            <motion.div style={{ y }} className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
                alt="Professional Closer" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-black">
                    <Play fill="currentColor" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">The Cash Closer Method</p>
                    <p className="text-xs text-white/60">Watch our 2-min philosophy</p>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Floating Stats Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 p-6 glass rounded-2xl border-gold/20"
            >
              <p className="text-3xl font-serif text-gold mb-1">$12M+</p>
              <p className="text-xs uppercase tracking-widest text-white/40">Revenue Generated</p>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* Dual Path Section */}
      <section className="py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn direction="right" className="p-12 rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent flex flex-col justify-between group hover:border-gold/30 transition-all duration-500">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:gold-gradient group-hover:text-black transition-all">
                  <Briefcase size={32} />
                </div>
                <h2 className="text-3xl sm:text-4xl mb-6">For Businesses</h2>
                <p className="text-white/60 text-lg mb-8 leading-relaxed">
                  Stop gambling on unvetted talent. Hire "Certified Cash Closers" trained in our rigorous academy to deliver quality sales experiences that scale your revenue.
                </p>
                <ul className="space-y-4 mb-12">
                  {['Vetted Elite Talent', 'Quality Sales Experiences', 'CRM Ready Graduates', 'Performance Guaranteed'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/80">
                      <CheckCircle2 size={18} className="text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant="outline" href="/businesses" className="w-fit">Hire Talent</Button>
            </FadeIn>

            <FadeIn direction="left" className="p-12 rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent flex flex-col justify-between group hover:border-gold/30 transition-all duration-500">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:gold-gradient group-hover:text-black transition-all">
                  <GraduationCap size={32} />
                </div>
                <h2 className="text-3xl sm:text-4xl mb-6">For Closers</h2>
                <p className="text-white/60 text-lg mb-8 leading-relaxed">
                  Master the art of high-ticket sales. Join our academy, get certified, and access elite connections and world-class opportunities.
                </p>
                <ul className="space-y-4 mb-12">
                  {['Internal Bootcamp', 'Certified Closer Status', 'Elite Talent Network', 'Career Placement'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/80">
                      <CheckCircle2 size={18} className="text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant="outline" href="/closers" className="w-fit">Join the Academy</Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust / Proof Section */}
      <section className="py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-5xl mb-16 italic">The Gold Standard in Sales.</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Revenue Generated', value: '$12.4M' },
              { label: 'Certified Closers', value: '150+' },
              { label: 'Active Campaigns', value: '42' },
              { label: 'Avg. Close Rate', value: '28%' },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <p className="text-5xl font-serif text-gold mb-2">{stat.value}</p>
                <p className="text-xs uppercase tracking-widest text-white/40">{stat.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <FadeIn direction="right">
              <h2 className="text-5xl mb-8 leading-tight">
                Diagnose First. <br />
                <span className="text-gold italic">Prescribe Second.</span>
              </h2>
              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                Most sales teams focus on the "close." We focus on the "fit." Our closers are trained to act as consultants, ensuring that every deal is a win-win for both the client and the business.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'No Hard Sells', desc: 'We don\'t use pressure. We use logic and empathy.' },
                  { title: 'Payment Security', desc: 'Escrow-backed commission structures for total peace of mind.' },
                  { title: 'Elite Network', desc: 'Access to a global ecosystem of high-ticket sales opportunities.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <ShieldCheck className="text-gold" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                      <p className="text-white/40">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="left" className="relative">
              <div className="aspect-square rounded-full border border-gold/20 p-12 flex items-center justify-center relative">
                <div className="absolute inset-0 animate-spin-slow border-t border-gold/40 rounded-full" />
                <div className="text-center">
                  <p className="text-7xl font-serif text-gold mb-4">CC</p>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/40">Methodology</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="gold-gradient p-16 md:p-24 rounded-[3rem] text-black text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Users size={200} />
            </div>
            <h2 className="text-5xl md:text-7xl mb-8 max-w-3xl mx-auto">Ready to turn conversations into cash?</h2>
            <p className="text-xl mb-12 max-w-xl mx-auto font-medium opacity-80">
              Whether you're a business looking to scale or a closer looking for your next big opportunity, we have the engine to get you there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/apply/business" className="bg-black text-white hover:bg-black/80">
                I Need Closers
              </Button>
              <Button variant="outline" size="lg" href="/apply/closer" className="border-black text-black hover:bg-black/10">
                I Want to Close
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
