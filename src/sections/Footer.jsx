import { BarChart3 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/[0.04] bg-[#05080f]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <BarChart3 size={16} className="text-cyan-500" />
          <span className="text-cyan-500 font-bold text-sm">Soham Patil</span>
        </div>
        <p className="text-slate-500 text-xs">
          Business Analyst & Data Analytics Portfolio © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
