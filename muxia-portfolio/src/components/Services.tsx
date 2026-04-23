import { motion } from "motion/react";
import { Coffee, Shield, Eye, Lock, Zap, Clock } from "lucide-react";

interface ServicesProps {
  t: any;
}

export default function Services({ t }: ServicesProps) {
  const serviceList = [
    { icon: Lock, title: "Psychological Control", desc: "Advanced mind-play and behavioral conditioning protocols." },
    { icon: Shield, title: "Protocol Training", text: "Introduction to high-etiquette serving and protocol maintenance." },
    { icon: Eye, title: "Observation Sessions", desc: "Structured sessions focused on the gaze and absolute awareness." },
    { icon: Zap, title: "Intensity Leveling", desc: "Graduated intensity training tailored to individual thresholds." },
    { icon: Coffee, title: "Daily Subsistence", desc: "Curated daily tasks for long-distance serving and devotion." },
    { icon: Clock, title: "Extended Residency", desc: "Immersion sessions for deep behavioral restructuring." }
  ];

  return (
    <section id="services" className="p-8 lg:p-12 py-32 bg-surface relative overflow-hidden">
        {/* Background Text */}
        <div className="absolute top-1/2 left-0 text-[20vw] font-bold text-white/[0.01] select-none pointer-events-none -translate-y-1/2 -rotate-90">
            DISCIPLINE
        </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h3
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[11px] uppercase tracking-widest-pro text-primary font-bold mb-16 flex items-center gap-4"
        >
          <span className="w-12 h-[1px] bg-primary"></span> 
          SPECIALIZED SERVICES / 专业服务
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {serviceList.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col group"
            >
              <div className="w-12 h-12 bg-background border border-white/5 flex items-center justify-center mb-6 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300">
                <service.icon size={20} className="text-white/40 group-hover:text-primary transition-colors" />
              </div>
              <h4 className="text-xl font-display font-medium text-offwhite mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
              <p className="text-sm font-light text-white/40 leading-relaxed max-w-xs">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 p-1 rounded-sm bg-linear-to-r from-primary/20 via-primary/5 to-transparent shadow-2xl"
        >
            <div className="bg-background/90 p-8 lg:p-12 flex flex-col lg:flex-row justify-between items-center gap-8">
                <div className="max-w-xl text-center lg:text-left">
                    <h3 className="text-2xl lg:text-3xl font-serif italic mb-4 text-primary">Custom Protocol Development</h3>
                    <p className="text-offwhite/50 font-light">Seeking a unique experience beyond the standard offerings? I specialize in creating bespoke discipline protocols for refined individuals.</p>
                </div>
                <a href="#contact" className="px-10 py-4 border border-primary text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all whitespace-nowrap">Request Consultation</a>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
