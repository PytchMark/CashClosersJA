import { FadeIn } from '@/src/components/Motion';

export const Process = () => {
  return (
    <div className="pt-32">
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <FadeIn className="text-center mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-8xl mb-8">The <span className="gold-text italic">Doctor's Visit.</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            We don't "sell". We diagnose. We only prescribe a solution if the prospect admits to having a problem that we can solve.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {[
            { title: 'Diagnose First', desc: 'We ask the hard questions to find the root cause of the prospect\'s pain.' },
            { title: 'Prescribe Second', desc: 'We only offer our solution if it\'s a perfect fit for the diagnosed problem.' },
            { title: 'Insight-Driven', desc: 'No hard sells. We use logic, empathy, and insight to guide the decision.' },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] text-center">
              <h3 className="text-2xl mb-4 text-gold">{item.title}</h3>
              <p className="text-white/50 leading-relaxed">{item.desc}</p>
            </FadeIn>
          ))}
        </div>

        <div className="space-y-24">
          {[
            { step: '01', title: 'Diagnostic Audit', desc: 'We analyze your current sales process, scripts, and CRM data to identify bottlenecks and opportunities.' },
            { step: '02', title: 'Strategic Scripting', desc: 'Our team crafts a custom sales framework based on the "Doctor\'s Visit" methodology.' },
            { step: '03', title: 'Talent Deployment', desc: 'We place certified Appointment Setters, Closers, and Account Managers into your campaign.' },
            { step: '04', title: 'Performance Loop', desc: 'Continuous optimization through weekly data reviews and strategy adjustments.' },
          ].map((item, i) => (
            <FadeIn key={i} direction={i % 2 === 0 ? 'right' : 'left'} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <span className="text-8xl font-serif text-white/5 block mb-4">{item.step}</span>
                <h3 className="text-3xl sm:text-4xl mb-6">{item.title}</h3>
                <p className="text-white/50 text-lg leading-relaxed">{item.desc}</p>
              </div>
              <div className={`aspect-video rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="w-24 h-24 rounded-full border border-gold/20 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full gold-gradient animate-pulse" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
};
