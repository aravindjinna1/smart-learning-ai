
export default function CyberBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft radial glow */}
      <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Noise overlay (optional but recommended) */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
    </div>
  );
}