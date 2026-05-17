import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { skills } from "../data/skills";
import SectionHeader from "../components/SectionHeader";
import AnimatedBar from "../components/AnimatedBar";
import { fadeInUp, staggerContainer } from "../animations/variants";

const radarData = [
  { subject: "SQL", A: 80 },
  { subject: "Excel", A: 85 },
  { subject: "Analysis", A: 95 },
  { subject: "Python", A: 75 },
  { subject: "Strategy", A: 85 },
  { subject: "Viz", A: 75 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-[#0a0f1c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader title="Analytical Toolkit" subtitle="Technical Proficiency" icon={Layers} />

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skillGroup, idx) => (
            <motion.div key={idx} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="bg-[#131b2e]/60 backdrop-blur-md p-7 rounded-2xl border border-white/[0.05] hover:border-cyan-500/25 transition-all duration-300 group">
              <div className="flex items-center gap-3.5 mb-7">
                <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  <skillGroup.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white">{skillGroup.category}</h3>
              </div>
              <div className="space-y-1">
                {skillGroup.items.map((skill) => (
                  <AnimatedBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Radar Chart */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="bg-[#131b2e]/40 backdrop-blur-md p-8 rounded-2xl border border-white/[0.05] max-w-md mx-auto">
          <h3 className="text-lg font-bold text-white text-center mb-4">Skill Distribution</h3>
          <ResponsiveContainer width="100%" height={260}>
            <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="75%">
              <PolarGrid stroke="rgba(255,255,255,0.06)" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <Radar name="Skills" dataKey="A" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.15} strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
}
