import { ArrowRight, CheckCircle2, BarChart3, Users2, Zap, Shield } from 'lucide-react';
import { FadeIn } from '@/src/components/Motion';
import { Button } from '@/src/components/Button';
import { SITE_CONFIG } from '@/src/constants';

export const Businesses = () => {
  return (
    <div className="pt-32">
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <FadeIn className="text-center mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-8xl mb-8">Elite Sales <br /><span className="gold-text italic">That Just Works.</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Stop gambling on unvetted talent. Hire "Certified Cash Closers" trained in our rigorous academy to deliver quality sales experiences that scale your revenue.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button variant="gold" size="lg" href={SITE_CONFIG.links.whatsapp} target="_blank">Hire Academy Graduates</Button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { 
              icon: <Shield size={32} />, 
              title: 'Vetted & Certified', 
              desc: 'Every closer has passed our internal bootcamp and diagnostic selling exam. We only place the top 1% of our graduates.' 
            },
            { 
              icon: <Zap size={32} />, 
              title: 'Plug & Play', 
              desc: 'Our graduates are trained on modern CRM stacks and high-ticket frameworks, ready to integrate into your campaign in days.' 
            },
            { 
              icon: <BarChart3 size={32} />, 
              title: 'Quality First', 
              desc: 'We focus on the "Doctor\'s Visit" approach, ensuring a premium, non-pressured experience for your leads.' 
            },
          ].map((feature, i) => (
            <FadeIn key={i} delay={i * 0.1} className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-gold/30 transition-all text-center">
              <div className="text-gold mb-6 flex justify-center">{feature.icon}</div>
              <h3 className="text-2xl mb-4">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed">{feature.desc}</p>
            </FadeIn>
          ))}
        </div>

        {/* Engagement Models */}
        <div className="mb-32">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">How We Work</h2>
            <p className="text-white/40">Flexible structures designed for your ROI. Commissions are negotiable.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn direction="right" className="p-12 rounded-3xl border border-gold/20 bg-gold/5">
              <h3 className="text-2xl sm:text-3xl mb-6">Commission Only</h3>
              <p className="text-white/60 mb-8">Ideal for established offers with high volume. You only pay when we close. Zero upfront risk.</p>
              <ul className="space-y-4 mb-8">
                {['No Retainer Fees', 'High-Volume Capacity', 'Performance Incentives', 'Full CRM Integration'].map(item => (
                  <li key={item} className="flex items-center gap-3"><CheckCircle2 size={18} className="text-gold" /> {item}</li>
                ))}
              </ul>
              <Button variant="gold" href={SITE_CONFIG.links.whatsapp} target="_blank" className="w-full">Tap to find out your rate</Button>
            </FadeIn>
            <FadeIn direction="left" className="p-12 rounded-3xl border border-white/10 bg-white/[0.02]">
              <h3 className="text-2xl sm:text-3xl mb-6">Monthly Management</h3>
              <p className="text-white/60 mb-8">Best for new offers or complex enterprise sales requiring dedicated strategic management + lower commission shares.</p>
              <ul className="space-y-4 mb-8">
                {['Dedicated Account Manager', 'Strategy Consulting', 'Custom Scripting', 'Lower Commission %'].map(item => (
                  <li key={item} className="flex items-center gap-3"><CheckCircle2 size={18} className="text-gold" /> {item}</li>
                ))}
              </ul>
              <Button variant="outline" href={SITE_CONFIG.links.whatsapp} target="_blank" className="w-full">Inquire for Details</Button>
            </FadeIn>
          </div>
        </div>

        {/* Trust Signal */}
        <FadeIn className="p-16 rounded-[3rem] border border-white/5 bg-white/[0.01] text-center">
          <Shield className="mx-auto text-gold mb-8" size={64} />
          <h2 className="text-3xl sm:text-4xl mb-6 italic">Our Performance Guarantee</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
            We don't just send you "leads." We send you closers who are committed to your brand's reputation. If a closer doesn't meet our performance standards within the first 30 days, we replace them at no cost to you.
          </p>
          <Button variant="gold" size="lg" href="/apply/business">Start Your Campaign</Button>
        </FadeIn>
      </section>
    </div>
  );
};
