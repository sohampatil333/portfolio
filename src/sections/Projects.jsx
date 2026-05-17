import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, ExternalLink, Github } from "lucide-react";
import { projects, projectCategories } from "../data/projects";
import SectionHeader from "../components/SectionHeader";
import TechBadge from "../components/TechBadge";
import { fadeInUp } from "../animations/variants";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects = useMemo(
    () => activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter),
    [activeFilter]
  );
  const featuredProject = projects.find((p) => p.featured);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#0d1221]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Featured Analytics" subtitle="Case Studies & Dashboards" icon={TrendingUp} />

        {featuredProject && (
          <motion.div className="mb-16" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
            <div className="bg-gradient-to-br from-[#131b2e] to-[#0f1524] rounded-2xl border border-cyan-500/10 overflow-hidden group hover:border-cyan-500/25 transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-64 md:h-full bg-[#0f1524] relative overflow-hidden flex items-center justify-center min-h-[280px]">
                  <div className="absolute inset-0 bg-cyan-500/[0.03]" />
                  <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-center gap-3 px-8 pb-8 opacity-30 group-hover:opacity-60 transition-opacity">
                    {[40, 70, 50, 90, 60, 75, 45].map((h, i) => (
                      <div key={i} className="w-8 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-[10px] uppercase font-bold text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20 tracking-wider">Featured</span>
                  </div>
                  <div className="absolute bottom-4 right-4 z-10 bg-[#0a0f1c]/90 backdrop-blur px-3 py-1.5 rounded-lg border border-cyan-500/20 text-cyan-400 font-mono text-xs">{featuredProject.stat}</div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{featuredProject.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {featuredProject.tech.split("•").map((tech, i) => (<TechBadge key={i} label={tech.trim()} />))}
                  </div>
                  <ul className="space-y-3 mb-6">
                    {featuredProject.details.map((detail, i) => (
                      <li key={i} className="text-sm text-slate-400 flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />{detail}
                      </li>
                    ))}
                  </ul>
                  <a href={featuredProject.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg text-sm font-semibold transition-all w-fit">
                    <Github size={16} /> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div className="flex flex-wrap gap-2 mb-10" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {projectCategories.map((cat) => (
            <button key={cat} onClick={() => setActiveFilter(cat)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeFilter === cat ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30" : "bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:text-white hover:border-white/10"}`}>{cat}</button>
          ))}
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div key={project.title} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }} className="group h-full bg-[#131b2e] rounded-2xl overflow-hidden border border-white/[0.05] hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.1)] flex flex-col">
                <div className="h-44 bg-[#0f1524] relative overflow-hidden flex items-center justify-center border-b border-white/[0.04]">
                  {project.image ? (
                    <>
                      <div className="absolute inset-0 bg-cyan-900/15 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" loading="lazy" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-cyan-500/[0.03] flex items-end justify-center gap-2 px-6 pb-6 opacity-30 group-hover:opacity-50 transition-opacity">
                      {[40, 70, 50, 90, 60].map((h, i) => (<div key={i} className="w-6 bg-cyan-500 rounded-t-sm" style={{ height: `${h}%` }} />))}
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 z-20 bg-[#0a0f1c]/90 backdrop-blur px-3 py-1 rounded-lg border border-cyan-500/20 text-cyan-400 font-mono text-[11px]">{project.stat}</div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-cyan-500/20 transition-all" aria-label={`View ${project.title}`}><ExternalLink size={16} /></a>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.split("•").map((tech, i) => (<TechBadge key={i} label={tech.trim()} />))}
                  </div>
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {project.details.map((detail, i) => (<li key={i} className="text-sm text-slate-400 flex items-start gap-2.5"><span className="w-1 h-1 rounded-full bg-cyan-500 mt-2 shrink-0" />{detail}</li>))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full py-2.5 rounded-lg bg-white/[0.03] hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 text-slate-400 hover:text-white font-medium transition-all text-center text-sm border border-white/[0.05] hover:border-transparent">View Analysis</a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
