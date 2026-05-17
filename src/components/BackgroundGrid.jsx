export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#0a0f1c] to-transparent" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0a0f1c] to-transparent" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-cyan-500/[0.03] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/[0.04] rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-teal-500/[0.02] rounded-full blur-[100px]" />
    </div>
  );
}
