import { FadeIn } from '@/src/components/Motion';
import { Button } from '@/src/components/Button';
import { BookOpen, Video, FileText, ArrowRight } from 'lucide-react';

export const Resources = () => {
  const resources = [
    {
      title: "The Doctor's Visit Framework",
      type: "Guide",
      icon: <FileText className="text-gold" />,
      desc: "Our core diagnostic selling script that helped us build our foundation."
    },
    {
      title: "High-Ticket Objection Handling",
      type: "Video",
      icon: <Video className="text-gold" />,
      desc: "A 20-minute masterclass on handling the toughest price objections."
    },
    {
      title: "Sales Psychology 101",
      type: "Course",
      icon: <BookOpen className="text-gold" />,
      desc: "The essential psychological principles every closer must master."
    }
  ];

  return (
    <div className="pt-32">
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <FadeIn className="text-center mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-8xl mb-8">Free <span className="gold-text italic">Resources.</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            The content, courses, and guided information that helped us build the foundation we have today.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {resources.map((res, i) => (
            <FadeIn key={i} delay={i * 0.1} className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-gold/30 transition-all group">
              <div className="mb-6">{res.icon}</div>
              <span className="text-xs uppercase tracking-widest text-white/40 mb-2 block">{res.type}</span>
              <h3 className="text-2xl mb-4">{res.title}</h3>
              <p className="text-white/50 leading-relaxed mb-8">{res.desc}</p>
              <Button variant="outline" size="sm" className="w-full">Access Now <ArrowRight size={16} className="ml-2" /></Button>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="p-16 rounded-[3rem] border border-gold/20 bg-gold/5 text-center">
          <h2 className="text-3xl sm:text-4xl mb-6 italic">Want the full curriculum?</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
            Join our internal bootcamp and get certified as a Cash Closer.
          </p>
          <Button variant="gold" size="lg" href="/closers">Learn About the Bootcamp</Button>
        </FadeIn>
      </section>
    </div>
  );
};
