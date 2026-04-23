import { motion } from "motion/react";
import { translations, Language } from "../translations";

interface HeroProps {
  t: any;
  lang: Language;
}

export default function Hero({ t, lang }: HeroProps) {
  return (
    <section id="home" className="pt-32 pb-20 px-8 lg:px-12 max-w-7xl mx-auto min-h-screen flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center w-full">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl lg:text-7xl font-serif italic mb-6 leading-tight"
          >
            {t.hero.quote}
          </motion.h2>
          
          <p className="text-base lg:text-lg leading-relaxed opacity-60 mb-10 max-w-lg font-light text-offwhite/80">
            {t.about.p1}
            <span className="block mt-4 opacity-40 italic text-primary">
              {lang === "en" ? translations.cn.hero.subtitle : translations.en.hero.subtitle}
            </span>
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#shop"
              className="px-10 py-4 bg-primary text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-accent transition-all duration-300 orange-glow rounded-sm"
            >
              {t.hero.cta}
            </a>
            <a
              href="#gallery"
              className="px-10 py-4 border border-white/10 text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-all duration-300 rounded-sm"
            >
              The Realm
            </a>
          </div>
        </motion.div>

        {/* Right: Video Column with Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-video lg:aspect-square w-full max-w-xl mx-auto"
        >
          {/* Stylized Frame */}
          <div className="absolute -inset-4 border border-primary/20 rounded-lg pointer-events-none" />
          <div className="absolute -inset-2 border border-primary/40 rounded-lg pointer-events-none" />
          
          {/* Corner Elements */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-primary" />

          <div className="w-full h-full relative overflow-hidden bg-surface rounded-md shadow-2xl group">
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
             
             <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono tracking-tighter text-white/80 bg-black/40 px-2 py-0.5 rounded-sm">CAPTURING PROTOCOL</span>
             </div>

             <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              src="/images/hero.mp4"
            />

            <div className="absolute bottom-8 left-8 z-20">
              <p className="text-xl font-display font-medium tracking-widest-pro text-white leading-none">MUXIA PORTFOLIO</p>
              <p className="text-[10px] opacity-60 text-white uppercase tracking-[0.4em] mt-1">Live Feed Established</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
