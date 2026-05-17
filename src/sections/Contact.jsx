import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Facebook, Send } from "lucide-react";
import { profileData } from "../data/profileData";
import SectionHeader from "../components/SectionHeader";
import { fadeInUp, staggerContainer } from "../animations/variants";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${profileData.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden bg-[#0a0f1c]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] to-[#060911]" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader title="Let's Collaborate" subtitle="Contact" icon={Mail} />

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <motion.div variants={fadeInUp} className="bg-[#131b2e]/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/[0.06] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto text-center leading-relaxed">
              Ready to transform your business data into actionable strategies? I'm available for full-time roles, internships, and analytics projects.
            </p>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {[
                { icon: Phone, label: "Call Me", val: profileData.phone, href: `tel:${profileData.phone}` },
                { icon: Mail, label: "Email Me", val: profileData.email, href: `mailto:${profileData.email}` },
                { icon: MapPin, label: "Location", val: "Indore, India", href: "#" },
              ].map((item, i) => (
                <a key={i} href={item.href} className="flex flex-col items-center p-5 bg-[#0a0f1c]/80 rounded-xl border border-white/[0.04] hover:border-cyan-500/30 transition-all group text-center">
                  <item.icon className="text-cyan-500 mb-3 group-hover:scale-110 transition-transform" size={22} />
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-white font-medium text-sm break-all">{item.val}</p>
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 mb-10">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-[#0a0f1c]/80 border border-white/[0.06] rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/40 transition-colors" />
                <input type="email" placeholder="Your Email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-[#0a0f1c]/80 border border-white/[0.06] rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/40 transition-colors" />
              </div>
              <textarea placeholder="Your Message" required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 bg-[#0a0f1c]/80 border border-white/[0.06] rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/40 transition-colors resize-none" />
              <button type="submit" className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]">
                {submitted ? "Opening Email Client..." : (<><Send size={16} /> Send Message</>)}
              </button>
            </form>

            {/* Socials */}
            <div className="flex justify-center gap-4">
              {[
                { icon: Linkedin, link: profileData.links.linkedin, hoverColor: "hover:text-blue-400 hover:border-blue-400/30" },
                { icon: Github, link: profileData.links.github, hoverColor: "hover:text-white hover:border-white/20" },
                { icon: Twitter, link: profileData.links.twitter, hoverColor: "hover:text-sky-400 hover:border-sky-400/30" },
                { icon: Facebook, link: profileData.links.facebook, hoverColor: "hover:text-blue-500 hover:border-blue-500/30" },
              ].map((social, i) => (
                <a key={i} href={social.link} target="_blank" rel="noreferrer" className={`p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-slate-400 ${social.hoverColor} transition-all duration-300 hover:-translate-y-1`}>
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
