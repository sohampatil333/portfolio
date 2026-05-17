import { motion } from "framer-motion";
import {
  User,
  MapPin,
  Mail,
  Globe,
  Target,
  BarChart3,
  PieChart,
  TrendingUp,
  Briefcase,
  Award,
  Database,
  MessageSquare,
} from "lucide-react";
import { profileData } from "../data/profileData";
import SectionHeader from "../components/SectionHeader";
import { fadeInUp, staggerContainer } from "../animations/variants";

const whatIDo = [
  {
    icon: BarChart3,
    title: "Business Analysis",
    desc: "Translating data into actionable business strategies and KPIs.",
  },
  {
    icon: PieChart,
    title: "Data Visualization",
    desc: "Building interactive dashboards with Power BI, Tableau & Excel.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    desc: "SQL-driven analysis, data cleaning, and pattern identification.",
  },
  {
    icon: MessageSquare,
    title: "Data Storytelling",
    desc: "Communicating insights clearly for stakeholder decision-making.",
  },
];

const stats = [
  { label: "Internships", value: "5+", icon: Briefcase },
  { label: "Records Analyzed", value: "10K+", icon: TrendingUp },
  { label: "Certifications", value: "7+", icon: Award },
  { label: "Projects", value: "3+", icon: BarChart3 },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#0d1221]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Professional Profile"
          subtitle="About Me"
          icon={User}
        />

        <motion.div
          className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left Column: Text */}
          <motion.div
            className="md:col-span-7 space-y-6"
            variants={fadeInUp}
          >
            <p className="text-lg text-white font-medium border-l-4 border-cyan-500 pl-5 bg-gradient-to-r from-cyan-500/[0.07] to-transparent py-3 rounded-r-lg leading-relaxed">
              I am currently pursuing an MBA in Business Analytics and building
              a strong foundation in data analysis, visualization, and business
              problem-solving.
            </p>

            <p className="text-slate-400 leading-relaxed">
              I am particularly interested in how data-driven insights can
              support better decision-making and improve business performance.
              Through academic learning and internships, I have gained hands-on
              exposure to tools such as{" "}
              <span className="text-cyan-400 font-medium">
                Excel, SQL, Power BI, Python, and R
              </span>
              .
            </p>

            <p className="text-slate-400 leading-relaxed">
              I have worked on practical use cases including customer churn
              analysis, data cleaning, visualization, and reporting. These
              experiences have helped me understand how raw data can be
              transformed into meaningful insights for stakeholders. I also
              have exposure to finance, marketing, and commercial operations,
              giving me a broader understanding of business functions.
            </p>

            {/* Analytical Approach */}
            <div className="bg-[#131b2e]/80 p-6 rounded-xl border border-white/[0.05] mt-4">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2.5">
                <Target className="text-cyan-500" size={18} />
                My Analytical Approach
              </h3>
              <ul className="space-y-3">
                {[
                  "Understanding business and stakeholder requirements",
                  "Analyzing data to identify patterns and opportunities",
                  "Communicating insights clearly through dashboards and reports",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="font-medium text-white pt-2">
              I am actively seeking entry-level opportunities or internships in
              Business Analysis / Data Analytics, where I can apply my
              analytical skills, learn from real-world challenges, and
              contribute to data-driven business decisions.
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div className="md:col-span-5 space-y-6" variants={fadeInUp}>
            {/* Profile Card */}
            <div className="relative bg-gradient-to-br from-[#131b2e] to-[#0f1524] p-[1px] rounded-2xl group">
              <div className="bg-[#0d1221] rounded-2xl p-7 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/[0.06] rounded-full blur-2xl -mr-12 -mt-12" />

                <h3 className="text-xl font-bold text-white mb-1">
                  {profileData.name}
                </h3>
                <p className="text-cyan-400 text-sm mb-5 font-medium">
                  MBA Scholar • Business Analytics
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    { icon: MapPin, text: "Indore, Madhya Pradesh" },
                    { icon: Mail, text: profileData.email },
                    { icon: Globe, text: "Open to Relocate" },
                  ].map(({ icon: Icon, text }, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-slate-400"
                    >
                      <Icon size={14} className="text-slate-500 shrink-0" />
                      <span className="truncate">{text}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="block w-full py-3 text-center bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg font-semibold transition-all duration-300 text-sm"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map(({ label, value, icon: Icon }, i) => (
                <div
                  key={label}
                  className="bg-[#131b2e]/60 p-4 rounded-xl border border-white/[0.04] text-center group hover:border-cyan-500/20 transition-all"
                >
                  <Icon
                    size={16}
                    className="text-cyan-500 mx-auto mb-2 group-hover:scale-110 transition-transform"
                  />
                  <p className="text-xl font-bold text-white">{value}</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* What I Do */}
        <motion.div
          className="mt-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-bold text-white mb-8"
          >
            What I Do
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whatIDo.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                className="bg-[#131b2e]/60 backdrop-blur-md p-6 rounded-xl border border-white/[0.05] hover:border-cyan-500/25 transition-all duration-300 group"
              >
                <div className="p-2.5 bg-cyan-500/10 rounded-lg text-cyan-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={20} />
                </div>
                <h4 className="text-white font-semibold mb-2">{title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
