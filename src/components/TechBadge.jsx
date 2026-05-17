export default function TechBadge({ label }) {
  return (
    <span className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-white/[0.04] rounded-md border border-white/[0.06] hover:text-cyan-400 hover:border-cyan-500/30 transition-colors">
      {label}
    </span>
  );
}
