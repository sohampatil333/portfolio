import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowRight, X } from "lucide-react";
import { blogs } from "../data/blogs";
import SectionHeader from "../components/SectionHeader";
import { fadeInUp, staggerContainer } from "../animations/variants";

export default function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <>
      {/* Blog Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedBlog(null)}>
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.3 }} className="bg-[#131b2e] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/[0.08] shadow-2xl relative custom-scrollbar" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedBlog(null)} className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-red-500/80 rounded-full text-white transition-colors z-20 backdrop-blur-md"><X size={20} /></button>
              {selectedBlog.image && (
                <div className="h-56 md:h-72 w-full relative">
                  <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e] via-[#131b2e]/40 to-transparent" />
                </div>
              )}
              <div className={`p-8 md:p-12 ${!selectedBlog.image ? "pt-16" : ""}`}>
                <div className="flex flex-wrap gap-3 mb-5 text-sm">
                  <span className="text-cyan-400 font-mono bg-cyan-500/[0.08] px-3 py-1 rounded-full border border-cyan-500/15 text-xs">{selectedBlog.tags[0]}</span>
                  <span className="text-slate-500 text-xs">{selectedBlog.date}</span>
                  <span className="text-slate-500 text-xs">• {selectedBlog.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight">{selectedBlog.title}</h2>
                <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                  {selectedBlog.content.split("\n").map((p, i) => p.trim() !== "" && <p key={i} className="mb-5 leading-relaxed text-[15px]">{p}</p>)}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="blog" className="py-24 lg:py-32 bg-[#0d1221]/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Insights & Thoughts" subtitle="Blog" icon={BookOpen} />
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            {blogs.map((blog, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-[#131b2e] rounded-xl overflow-hidden border border-white/[0.05] hover:border-cyan-500/25 transition-all duration-500 group hover:-translate-y-1 flex flex-col h-full">
                {blog.image && (
                  <div className="h-44 overflow-hidden relative">
                    <img src={blog.image} alt={blog.title} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${blog.imgPosition}`} loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e] to-transparent opacity-50" />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-mono text-cyan-500 bg-cyan-500/[0.08] px-2 py-1 rounded border border-cyan-500/15">{blog.tags[0]}</span>
                    <span className="text-[10px] text-slate-500">{blog.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2.5 group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">{blog.title}</h3>
                  <p className="text-slate-400 text-sm mb-5 leading-relaxed flex-grow line-clamp-3">{blog.excerpt}</p>
                  <div className="border-t border-white/[0.04] pt-3 flex items-center justify-between mt-auto">
                    <span className="text-[10px] text-slate-500">{blog.readTime}</span>
                    <button onClick={() => setSelectedBlog(blog)} className="flex items-center gap-1.5 text-sm text-cyan-400 font-medium hover:text-white transition-colors group/link bg-transparent border-none cursor-pointer">
                      Read <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
