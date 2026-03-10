import { FadeIn } from '@/src/components/Motion';
import { Button } from '@/src/components/Button';

export const About = () => {
  return (
    <div className="pt-32">
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <FadeIn direction="right">
            <h1 className="text-4xl sm:text-5xl md:text-7xl mb-8">Elite Sales. <br /><span className="gold-text italic">Caribbean Heart.</span></h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              Cash Closers was founded on a simple principle: Sales shouldn't feel like a transaction. It should feel like a solution.
            </p>
            <p className="text-lg text-white/40 mb-10 leading-relaxed">
              Based in the Caribbean, we've built a world-class team of agents who possess perfect English and Spanish fluency. We bridge the gap between high-growth global businesses and elite sales talent that understands the nuances of human connection.
            </p>
            <div className="flex gap-4">
              <Button variant="gold" href="/contact">Work With Us</Button>
              <Button variant="outline" href="/closers">Join the Team</Button>
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <div className="aspect-square rounded-3xl overflow-hidden grayscale border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>
        </div>

        <div className="py-24 border-t border-white/5">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 italic">The Cash Closers DNA</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Empathy', desc: 'We seek to understand the "patient" before we ever suggest a "prescription".' },
              { title: 'Strategy', desc: 'Every interaction is structured, measured, and optimized for conversion.' },
              { title: 'Discipline', desc: 'We know that the fortune is in the follow-up. We never drop the ball.' },
            ].map((value, i) => (
              <FadeIn key={i} delay={i * 0.1} className="text-center">
                <h3 className="text-2xl mb-4 text-gold">{value.title}</h3>
                <p className="text-white/50 leading-relaxed">{value.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
