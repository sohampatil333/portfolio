import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data/education";
import SectionHeader from "../components/SectionHeader";
import { fadeInUp, staggerContainer } from "../animations/variants";

export default function Education() {
  return (
    <section id="education" className="py-24 lg:py-32 bg-[#0d1221]/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Academic Foundation" subtitle="Education" icon={GraduationCap} />
        <motion.div className="space-y-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          {education.map((edu, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="flex flex-col md:flex-row gap-5 md:items-center bg-[#131b2e]/70 p-7 rounded-2xl border border-white/[0.05] hover:border-cyan-500/25 transition-all duration-300 group">
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-xl bg-white/[0.04] border border-cyan-500/15 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.06)]">
                  {edu.logo ? (
                    <img src={edu.logo} alt={edu.institution} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <GraduationCap size={28} className="text-cyan-400" />
                  )}
                </div>
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{edu.degree}</h3>
                    <p className="text-slate-400 text-sm">{edu.institution}</p>
                  </div>
                  <span className="px-3 py-1 bg-cyan-500/[0.08] border border-cyan-500/15 rounded-full text-cyan-400 text-xs font-mono whitespace-nowrap w-fit">{edu.year}</span>
                </div>
                <span className="inline-block text-xs font-mono text-cyan-500 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.05] mb-2">{edu.score}</span>
                <p className="text-slate-500 text-sm leading-relaxed">{edu.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
