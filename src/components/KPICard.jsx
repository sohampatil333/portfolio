import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function KPICard({ icon: Icon, label, value, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#131b2e]/70 backdrop-blur-md p-5 rounded-xl border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-300 group"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform">
          <Icon size={18} />
        </div>
        <div>
          <p className="text-[11px] text-slate-500 uppercase tracking-widest font-medium">
            {label}
          </p>
          <p className="text-lg font-bold text-white">{value}</p>
        </div>
      </div>
    </motion.div>
  );
}
