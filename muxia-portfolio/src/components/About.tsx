import { motion } from "motion/react";
import { Shield, Sparkles, Zap } from "lucide-react";

interface AboutProps {
  t: any;
}

export default function About({ t }: AboutProps) {
  const features = [
    { icon: Shield, title: "Protocol", text: "Highest standards of professional boundaries." },
    { icon: Zap, title: "Intensity", text: "Psychological discipline and physical mastery." },
    { icon: Sparkles, title: "Aesthetics", text: "A curated realm of power and submission." }
  ];

  return (
    <section id="about" className="p-8 lg:p-12 pb-24 relative overflow-hidden bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
        <div className="max-w-2xl">
          <motion.h3
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[11px] uppercase tracking-widest-pro text-primary font-bold mb-8 flex items-center gap-4"
          >
            <span className="w-12 h-[1px] bg-primary"></span> 
            {t.nav.about.toUpperCase()} / {t.nav.about.toUpperCase()}
          </motion.h3>

          <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative aspect-video lg:aspect-[21/9] w-full mb-12 overflow-hidden border border-white/10"
          >
            <img 
              src="images/GFa00bVbwAAVGN2.jpg" 
              alt="Muxia" 
              className="w-full h-full object-contain transition-all duration-1000"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8 text-offwhite/60 leading-relaxed font-light text-sm lg:text-base mb-16"
          >
            <p className="text-xl lg:text-3xl font-serif italic text-offwhite leading-tight">{t.about.p1}</p>
            <p className="max-w-xl">{t.about.p2}</p>
            <p className="max-w-xl">{t.about.p3}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col gap-4"
              >
                <div className="flex items-center gap-2">
                  <f.icon className="w-4 h-4 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary/80 group-hover:text-primary transition-colors">{f.title}</h4>
                </div>
                <p className="text-xs text-white/40 font-light leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
