import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "../data/certifications";
import SectionHeader from "../components/SectionHeader";
import { fadeInUp, staggerContainer } from "../animations/variants";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 lg:py-32 bg-[#0a0f1c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Certifications" subtitle="Continuous Learning" icon={Award} />
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          {certifications.map((cert, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="flex items-start gap-4 bg-[#131b2e]/60 p-5 rounded-xl border border-white/[0.05] hover:border-cyan-500/30 hover:bg-[#1a233b]/60 transition-all duration-300 group cursor-default">
              <div className="p-2 bg-gradient-to-br from-cyan-500/15 to-blue-500/[0.08] rounded-lg text-cyan-400 group-hover:text-white transition-colors shrink-0 group-hover:scale-110 transition-transform">
                <Award size={18} />
              </div>
              <span className="text-slate-300 font-medium group-hover:text-white transition-colors leading-relaxed text-sm">{cert}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
