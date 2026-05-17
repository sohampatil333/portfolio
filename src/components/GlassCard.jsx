import { motion } from "framer-motion";
import { fadeInUp } from "../animations/variants";

export default function GlassCard({
  children,
  className = "",
  hoverGlow = true,
  delay = 0,
}) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay }}
      className={`
        bg-[#131b2e]/60 backdrop-blur-md rounded-2xl
        border border-white/[0.06]
        ${hoverGlow ? "hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)]" : ""}
        transition-all duration-500
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
