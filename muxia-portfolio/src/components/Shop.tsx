import { motion } from "motion/react";
import { CreditCard, Heart, Gift, Coffee, Shield } from "lucide-react";

interface ShopProps {
  t: any;
}

const icons = [Heart, Shield, Coffee, Gift];

export default function Shop({ t }: ShopProps) {

  return (
    <section id="shop" className="p-8 lg:p-12 pb-24 relative overflow-hidden bg-background">
      <div className="max-w-2xl">
        <motion.h3
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[11px] uppercase tracking-widest-pro text-primary font-bold mb-8 flex items-center gap-4"
        >
          <span className="w-12 h-[1px] bg-primary"></span> 
          {t.nav.shop.toUpperCase()} / {t.nav.shop.toUpperCase()}
        </motion.h3>

        <div className="space-y-4">
          {t.shop.items.map((item: any, i: number) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white/5 p-4 lg:p-6 rounded-sm border border-white/5 hover:border-primary/20 hover:bg-white/10 transition-all duration-300 gap-4"
              >
                <div className="flex flex-col">
                  <span className="text-xs lg:text-sm font-medium text-offwhite group-hover:text-primary transition-colors">{item.name}</span>
                  <span className="text-[10px] opacity-40 uppercase tracking-widest mt-1">{item.desc}</span>
                </div>
                <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                   <span className="text-primary font-mono text-xs lg:text-sm tracking-widest">SUBMIT TRIBUTE</span>
                   <button className="p-2 border border-white/10 hover:border-primary group-hover:bg-primary transition-all">
                     <CreditCard size={14} className="group-hover:text-white" />
                   </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-8 border border-white/5 bg-surface rounded-sm flex items-center gap-6"
        >
          <div className="flex-shrink-0 w-12 h-12 bg-primary/20 flex items-center justify-center rounded-full">
            <Shield className="text-primary w-6 h-6" />
          </div>
          <div className="flex-1">
            <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Authenticated Protocol</p>
            <p className="text-xs text-white/40 leading-relaxed">Transactions are handled via high-encryption channels. Protocol execution is guaranteed upon verified recognition.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
