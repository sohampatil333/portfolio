import { motion } from "framer-motion";
import {
  Download,
  Linkedin,
  Github,
  Globe,
  Database,
  PieChart,
  FileSpreadsheet,
  TrendingUp,
  Zap,
  Briefcase,
  BarChart3,
  Award,
} from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { profileData } from "../data/profileData";
import Typewriter from "../components/Typewriter";
import { fadeInUp, staggerContainer } from "../animations/variants";

// Mini chart data for the floating analytics card
const miniChartData = [
  { v: 20 }, { v: 40 }, { v: 35 }, { v: 55 }, { v: 48 },
  { v: 65 }, { v: 60 }, { v: 78 }, { v: 72 }, { v: 90 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 lg:pt-0 lg:pb-0 overflow-hidden min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-7 order-2 lg:order-1"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Availability Badge */}
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-500/[0.06] border border-cyan-500/20 text-cyan-400 text-sm font-medium tracking-wide">
                <Zap
                  size={14}
                  className="text-yellow-400 fill-yellow-400 animate-pulse"
                />
                <span>Available for Immediate Joining</span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Turning Raw Data
                <br />
                Into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500">
                  Business Growth
                </span>
              </h1>

              <div className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light flex items-center gap-2 flex-wrap">
                <span>I am a</span>
                <Typewriter
                  words={[
                    "Business Analyst.",
                    "Data Storyteller.",
                    "Analytics Consultant.",
                    "SQL Expert.",
                    "Equity Research Enthusiast.",
                  ]}
                />
              </div>

              <p className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed">
                {profileData.summary}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 pt-1"
            >
              <a
                href={profileData.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30"
              >
                <Download size={18} />
                Download Resume
              </a>
              <div className="flex gap-3 justify-center sm:justify-start">
                {[
                  { icon: Linkedin, link: profileData.links.linkedin, label: "LinkedIn" },
                  { icon: Github, link: profileData.links.github, label: "GitHub" },
                  { icon: Globe, link: profileData.links.portfolio, label: "Portfolio" },
                ].map(({ icon: Icon, link, label }) => (
                  <a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="p-3 bg-[#131b2e] hover:bg-[#1c263d] rounded-xl border border-white/[0.06] hover:border-cyan-500/40 text-slate-400 hover:text-white transition-all duration-300"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* KPI Row */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-3 pt-4 max-w-md"
            >
              {[
                { icon: Briefcase, label: "Internships", value: "5+" },
                { icon: BarChart3, label: "Projects", value: "3+" },
                { icon: Award, label: "Certifications", value: "7+" },
              ].map(({ icon: Icon, label, value }, i) => (
                <div
                  key={label}
                  className="text-center p-3 bg-[#131b2e]/50 rounded-xl border border-white/[0.04]"
                >
                  <Icon
                    size={16}
                    className="text-cyan-500 mx-auto mb-1.5"
                  />
                  <p className="text-lg font-bold text-white">{value}</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Center */}
          <motion.div
            className="relative order-1 lg:order-2 flex justify-center items-center h-[380px] md:h-[480px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Central Profile */}
            <div className="relative z-20 w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full opacity-15 blur-3xl animate-pulse" />

              {/* Rotating Rings */}
              <div className="absolute inset-0 border border-cyan-500/15 rounded-full animate-[spin_12s_linear_infinite]" />
              <div className="absolute -inset-5 border border-dashed border-blue-500/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute -inset-10 border border-cyan-500/[0.06] rounded-full animate-[spin_30s_linear_infinite]" />

              {/* Image */}
              <div className="relative w-full h-full rounded-full border-2 border-[#1a2540] overflow-hidden shadow-2xl shadow-cyan-500/10 group">
                <img
                  src={profileData.profileImage}
                  alt="Soham Patil"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="eager"
                  onError={(e) => {
                    e.target.src =
                      "https://ui-avatars.com/api/?name=Soham+Patil&background=0D8ABC&color=fff&size=320";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/60 via-transparent to-transparent" />
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 animate-[float_5s_ease-in-out_infinite]">
                <div className="bg-[#131b2e]/90 backdrop-blur-md p-2.5 rounded-xl border border-cyan-500/20 shadow-lg">
                  <Database className="text-cyan-400" size={20} />
                </div>
              </div>
              <div className="absolute bottom-8 -right-6 animate-[float_6s_ease-in-out_infinite_0.5s]">
                <div className="bg-[#131b2e]/90 backdrop-blur-md p-2.5 rounded-xl border border-orange-500/20 shadow-lg">
                  <PieChart className="text-orange-400" size={20} />
                </div>
              </div>
              <div className="absolute bottom-8 -left-6 animate-[float_7s_ease-in-out_infinite_1s]">
                <div className="bg-[#131b2e]/90 backdrop-blur-md p-2.5 rounded-xl border border-green-500/20 shadow-lg">
                  <FileSpreadsheet className="text-green-400" size={20} />
                </div>
              </div>

              {/* Floating Card — Status */}
              <div className="absolute -top-8 -right-8 md:-right-16 bg-[#131b2e]/80 backdrop-blur-xl p-3.5 rounded-xl border border-white/[0.08] shadow-xl animate-[float_6s_ease-in-out_infinite]">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  <div>
                    <p className="text-[10px] text-slate-500 font-medium">
                      Status
                    </p>
                    <p className="text-xs font-semibold text-white">
                      Open to Work
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card — Mini Chart */}
              <div className="absolute -bottom-4 -left-4 md:-left-14 bg-[#131b2e]/80 backdrop-blur-xl p-3 rounded-xl border border-white/[0.08] shadow-xl animate-[float_7s_ease-in-out_infinite_reverse]">
                <div className="flex items-center gap-2.5 mb-1">
                  <TrendingUp className="text-cyan-400" size={14} />
                  <p className="text-[10px] text-slate-500 font-medium">
                    Growth
                  </p>
                </div>
                <div className="w-24 h-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={miniChartData}>
                      <defs>
                        <linearGradient
                          id="heroGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#06b6d4"
                            stopOpacity={0.4}
                          />
                          <stop
                            offset="100%"
                            stopColor="#06b6d4"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="v"
                        stroke="#06b6d4"
                        strokeWidth={1.5}
                        fill="url(#heroGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
