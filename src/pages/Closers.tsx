import { GraduationCap, Trophy, DollarSign, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '@/src/components/Motion';
import { Button } from '@/src/components/Button';
import { SITE_CONFIG } from '@/src/constants';

export const Closers = () => {
  return (
    <div className="pt-32">
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <FadeIn className="text-center mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-8xl mb-8">Turn a Skill <br /><span className="gold-text italic">Into a Career.</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Join the elite 1% of sales professionals. We bridge the gap between your ambition and high-ticket placement.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {[
            { icon: <GraduationCap />, title: 'Internal Bootcamp', desc: 'Master frameworks from Belfort, Hormozi, Lok, and Jeremy Miner.' },
            { icon: <Trophy />, title: 'Certified Closer', desc: 'Earn your "Certified Cash Closer" status and get placed immediately.' },
            { icon: <DollarSign />, title: 'High-Ticket Offers', desc: 'Work on campaigns with offers ranging from $2k to $50k+.' },
            { icon: <Globe />, title: 'Caribbean Roots', desc: 'Perfect English & Spanish. Remote flexibility with global impact.' },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-gold/30 transition-all">
              <div className="text-gold mb-6">{item.icon}</div>
              <h3 className="text-xl mb-3">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </FadeIn>
          ))}
        </div>

        {/* Roles Section */}
        <div className="mb-32">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">Placement Tracks</h2>
            <p className="text-white/40">From entry-level to strategic management.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Appointment Setters', desc: 'Early stage specialists focused on booking high-quality meetings.' },
              { title: 'Elite Closers', desc: 'Masters of the "Doctor\'s Visit" approach. Converting leads into partners.' },
              { title: 'Account Managers', desc: 'Handling post-sale relationships and ensuring long-term success.' },
            ].map((role, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] text-center">
                <h3 className="text-2xl mb-4 text-gold">{role.title}</h3>
                <p className="text-white/50 leading-relaxed">{role.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Academy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <FadeIn direction="right">
            <div className="inline-block px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-medium uppercase tracking-widest mb-6">
              The Bootcamp
            </div>
            <h2 className="text-5xl mb-8">The Science of <br /><span className="italic">Persuasion.</span></h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              We don't just teach you how to talk; we teach you how to listen. Our internal bootcamp covers the psychological frameworks used by the world's top 1% of closers.
            </p>
            <ul className="space-y-4 mb-10">
              {['Discovery & Diagnosis Selling', 'Advanced Objection Handling', 'High-Ticket Closing Frameworks', 'CRM & Follow-up Discipline'].map(item => (
                <li key={item} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 size={18} className="text-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="gold" size="lg" href={SITE_CONFIG.links.whatsapp} target="_blank">Apply via WhatsApp <ArrowRight size={18} /></Button>
          </FadeIn>
          <FadeIn direction="left" className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 glass p-1">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Academy Session" 
                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>
        </div>

        {/* FAQ / Objection Handling */}
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4">Common Questions</h2>
          </FadeIn>
          <div className="space-y-4">
            {[
              { q: 'Do I need prior sales experience?', a: 'While experience helps, we value hunger and coachability more. Our academy is designed to build the foundation from scratch.' },
              { q: 'How much can I realistically earn?', a: 'Our average closer earns between $4k-$8k per month. Top performers consistently clear $15k+.' },
              { q: 'Is there a cost for the academy?', a: 'We offer both paid and performance-based scholarship tracks. Placement is guaranteed for all certified graduates.' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-6 rounded-xl border border-white/5 bg-white/[0.01]">
                <h4 className="text-lg font-medium mb-2">{item.q}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{item.a}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
