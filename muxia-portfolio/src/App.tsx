import { useState, useMemo } from "react";
import { translations, Language } from "./translations";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Shop from "./components/Shop";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [lang, setLang] = useState<Language>("cn");

  const t = useMemo(() => translations[lang], [lang]);

  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <Navbar lang={lang} setLang={setLang} t={t} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={lang}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Hero t={t} lang={lang} />
          
          <div className="relative">
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-1/3 h-96 bg-primary/5 blur-3xl rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-1/4 h-96 bg-primary/5 blur-3xl rounded-full -z-10" />
            
            <About t={t} />
            <Services t={t} />
            <Gallery t={t} />
            <Shop t={t} />
          </div>
          
          <Footer t={t} />
        </motion.main>
      </AnimatePresence>

      {/* Background Decor overlay */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none z-50" />
    </div>
  );
}

