import { motion } from "motion/react";

interface GalleryProps {
  t: any;
}

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
];

export default function Gallery({ t }: GalleryProps) {
  return (
    <section id="gallery" className="p-8 lg:p-12 py-32 relative overflow-hidden bg-background max-w-7xl mx-auto">
      <div className="w-full">
        <motion.h3
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[11px] uppercase tracking-widest-pro text-white/40 font-bold mb-12 flex items-center gap-4"
        >
          <span className="w-12 h-[1px] bg-white/20"></span> 
          {t.nav.gallery.toUpperCase()} / {t.nav.gallery.toUpperCase()}
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10 }}
              className="relative aspect-square overflow-hidden group cursor-pointer bg-surface rounded-sm border border-white/5"
            >
              <img 
                src={img} 
                alt={`Gallery ${i + 1}`} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
                onError={(e) => {
                  // Fallback for demo purposes if files don't exist yet
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${i + 20}/800/800`;
                }}
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Image Number Overlay */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-mono text-white/60 tracking-widest uppercase">P-{String(i + 1).padStart(2, '0')}</span>
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="aspect-square bg-surface rounded-sm flex items-center justify-center text-[10px] tracking-widest text-white/20 hover:text-primary transition-colors cursor-pointer border border-white/10 hover:border-primary/40 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 text-center px-4">VIEW FULL ARCHIVE</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
