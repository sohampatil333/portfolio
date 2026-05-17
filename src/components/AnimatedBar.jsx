import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedBar({ name, level }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="mb-5 group">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-slate-300 group-hover:text-cyan-300 transition-colors">
          {name}
        </span>
        <span className="text-sm font-semibold text-cyan-400 tabular-nums">
          {level}%
        </span>
      </div>
      <div className="w-full bg-slate-800/60 rounded-full h-2 overflow-hidden border border-white/[0.04]">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-600 via-teal-500 to-blue-500 shadow-[0_0_8px_rgba(6,182,212,0.3)] relative overflow-hidden"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </motion.div>
      </div>
    </div>
  );
}
