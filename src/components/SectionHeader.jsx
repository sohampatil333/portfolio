import { motion } from "framer-motion";
import { fadeInUp } from "../animations/variants";

export default function SectionHeader({ title, icon: Icon, subtitle }) {
  return (
    <motion.div
      className="mb-16 relative z-10"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2.5 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-xl text-cyan-400 border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
          <Icon size={22} />
        </div>
        <span className="text-cyan-500 font-semibold tracking-[0.2em] text-xs uppercase">
          {subtitle}
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
        {title}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-transparent mt-5 rounded-full" />
    </motion.div>
  );
}
