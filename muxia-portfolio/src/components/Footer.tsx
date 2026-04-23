import { motion } from "motion/react";
import { Twitter, Instagram, Send, Mail } from "lucide-react";

interface FooterProps {
  t: any;
}

export default function Footer({ t }: FooterProps) {
  const social = [
    { icon: Twitter, href: "https://x.com/muxiadada" },
    { icon: Instagram, href: "#" },
    { icon: Send, href: "#" },
    { icon: Mail, href: "#" },
  ];

  return (
    <footer className="p-8 lg:p-12 border-t border-white/5 bg-background mt-auto overflow-hidden">
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-12">
        <nav className="flex flex-wrap gap-8 lg:gap-10 text-[11px] uppercase tracking-widest-pro font-medium">
          <a href="#home" className="text-primary">Home / 首页</a>
          <a href="#about" className="hover:text-primary transition-colors">Intro / 简介</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery / 图库</a>
          <a href="#shop" className="hover:text-primary transition-colors">Contact / 联系</a>
        </nav>

        <div className="flex space-x-4">
          {social.map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="w-10 h-10 border border-white/5 flex items-center justify-center text-white/30 hover:text-primary hover:border-primary/40 transition-all duration-300"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-16 sm:mt-24 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 opacity-20 text-[9px] uppercase tracking-[0.4em] font-bold">
        <p>{t.footer.rights}</p>
        <div className="flex gap-8">
           <a href="#" className="hover:text-white">Privacy</a>
           <a href="#" className="hover:text-white">Terms</a>
           <span>System v1.0.4</span>
        </div>
      </div>
    </footer>
  );
}
