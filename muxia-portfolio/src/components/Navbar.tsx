import { motion, AnimatePresence } from "motion/react";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { Language } from "../translations";

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: any;
}

export default function Navbar({ lang, setLang, t }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLang = (target: Language) => {
    setLang(target);
  };

  const navItems = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.gallery, href: "#gallery" },
    { name: t.nav.shop, href: "#shop" },
  ];

  return (
    <header className="px-8 lg:px-12 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 absolute top-0 left-0 w-full z-50">
      <div>
        <h1 className="text-3xl font-light tracking-widest uppercase mb-1 flex items-center">
          MUXIA <span className="text-primary font-bold ml-2">DADA</span>
        </h1>
        <p className="text-[10px] uppercase tracking-widest-pro opacity-40">Professional Discipline & Sovereignty</p>
      </div>

      <div className="flex items-center gap-6 lg:gap-10">
        {/* Desktop Nav Items (Integrated in Header) */}
        <nav className="hidden xl:flex gap-8 text-[11px] uppercase tracking-widest font-medium">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Language Toggle */}
        <div className="flex gap-4 text-[11px] font-semibold tracking-tighter-pro">
          <button
            onClick={() => toggleLang("en")}
            className={`cursor-pointer transition-colors ${lang === "en" ? "text-primary border-b border-primary pb-0.5" : "opacity-40 hover:opacity-100"}`}
          >
            EN
          </button>
          <button
            onClick={() => toggleLang("cn")}
            className={`cursor-pointer transition-colors ${lang === "cn" ? "text-primary border-b border-primary pb-0.5" : "opacity-40 hover:opacity-100"}`}
          >
            CN
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden text-white/60 hover:text-white"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-surface border-b border-white/10 p-6 flex flex-col gap-4 xl:hidden shadow-2xl"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-xs uppercase tracking-widest font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
