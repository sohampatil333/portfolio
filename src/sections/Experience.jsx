import { motion } from "framer-motion";
import { Briefcase, Activity } from "lucide-react";
import { internships } from "../data/internships";
import SectionHeader from "../components/SectionHeader";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "../animations/variants";

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-[#0a0f1c] relative overflow-hidden">
      {/* Timeline center line (desktop only) */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          title="Professional Trajectory"
          subtitle="Internships & Work"
          icon={Briefcase}
        />

        <div className="space-y-16 lg:space-y-24">
          {internships.map((job, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row gap-6 lg:gap-16 items-center ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-[#0a0f1c] border-2 border-cyan-500 rounded-full z-20 shadow-[0_0_12px_rgba(6,182,212,0.6)]">
                  <div className="absolute inset-0 rounded-full bg-cyan-500/40 animate-ping" />
                </div>

                {/* Duration badge */}
                <div
                  className={`w-full lg:w-1/2 flex ${
                    isEven ? "lg:justify-end" : "lg:justify-start"
                  } pl-12 lg:pl-0`}
                >
                  <div className="bg-white/[0.04] border border-white/[0.08] px-4 py-2 rounded-lg text-cyan-400 font-mono text-sm">
                    {job.duration}
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  className="w-full lg:w-1/2 pl-12 lg:pl-0"
                  variants={isEven ? slideInRight : slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="bg-gradient-to-br from-[#131b2e] to-[#0f1524] p-7 rounded-2xl border border-white/[0.05] hover:border-cyan-500/25 transition-all duration-500 group relative overflow-hidden hover:shadow-[0_0_40px_rgba(6,182,212,0.05)]">
                    {/* Color glow */}
                    <div
                      className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${job.color} opacity-[0.04] blur-[50px] rounded-full`}
                    />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-5">
                        <div
                          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${job.color} flex items-center justify-center text-white font-bold text-lg shadow-lg overflow-hidden shrink-0`}
                        >
                          {job.logo.length > 1 ? (
                            <img
                              src={job.logo}
                              alt={job.company}
                              className="w-full h-full object-cover bg-white"
                              loading="lazy"
                            />
                          ) : (
                            job.logo
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {job.role}
                          </h3>
                          <p className="text-slate-400 text-sm">
                            {job.company}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-3">
                        {job.description.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                          >
                            <Activity
                              size={14}
                              className="mt-1 text-cyan-500/70 shrink-0"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
