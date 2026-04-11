'use client';

import { useEffect, useRef } from 'react';

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  cardRefs.current = []; // reset on every render (IMPORTANT)

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Explicit non-null assertion to kill ctx errors permanently
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    const cx = 250;
    const cy = 250;
    const R = 175;

    const colors = [
      '#00d4ff',
      '#ffe04d',
      '#a855f7',
      '#22d3ee',
      '#f87171',
      '#4ade80',
      '#fb923c',
    ];

    let angle = 0;
    let rafId = 0;

    function drawOrbit() {
      ctx.clearRect(0, 0, 500, 500);

      ctx.strokeStyle = 'rgba(100,200,255,0.18)';
      ctx.setLineDash([5, 7]);
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      const t = Date.now() / 1000;
      for (let i = 0; i < 14; i++) {
        const a = t * 0.6 + (i / 14) * Math.PI * 2;
        const x = cx + R * Math.cos(a);
        const y = cy + R * Math.sin(a);

        ctx.fillStyle = colors[i % colors.length];
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function positionCards() {
      const cards = cardRefs.current;
      const N = cards.length;
      if (N === 0) return;

      cards.forEach((card, i) => {
        const a = angle + (i / N) * Math.PI * 2;
        card.style.left = `${cx + R * Math.cos(a) - 37}px`;
        card.style.top = `${cy + R * Math.sin(a) - 37}px`;
      });
    }

    function loop() {
      angle += 0.004;
      drawOrbit();
      positionCards();
      rafId = requestAnimationFrame(loop);
    }

    loop();

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050d1a]">
      <div className="relative h-[500px] w-[500px]">
        <canvas
          ref={canvasRef}
          width={500}
          height={500}
          className="absolute inset-0"
        />

        <Card refCb={el => el && cardRefs.current.push(el)} glow="#00f0ff" bg="from-[#003d5b] to-[#006080]" label="AI" color="#00d4ff">
          <rect x="8" y="8" width="16" height="16" rx="3" fill="none" stroke="#00d4ff" strokeWidth="1.5" />
          <text x="16" y="20" textAnchor="middle" fontSize="9" fill="#00d4ff">AI</text>
        </Card>

        <Card refCb={el => el && cardRefs.current.push(el)} glow="#ffe04d" bg="from-[#3a2a00] to-[#604800]" label="Idea" color="#ffe04d">
          <ellipse cx="16" cy="14" rx="7" ry="7.5" fill="none" stroke="#ffe04d" strokeWidth="1.5" />
        </Card>

        <Card refCb={el => el && cardRefs.current.push(el)} glow="#a855f7" bg="from-[#1e0638] to-[#3b1270]" label="Book" color="#c084fc">
          <rect x="6" y="6" width="20" height="22" rx="2" fill="none" stroke="#c084fc" strokeWidth="1.5" />
        </Card>

        <Card refCb={el => el && cardRefs.current.push(el)} glow="#22d3ee" bg="from-[#002a2e] to-[#004d55]" label="Notes" color="#22d3ee">
          <rect x="6" y="5" width="20" height="24" rx="2" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
        </Card>

        <Card refCb={el => el && cardRefs.current.push(el)} glow="#f87171" bg="from-[#2a0505] to-[#5a0f0f]" label="Video" color="#f87171">
          <polygon points="13,13 22,18 13,23" fill="#f87171" />
        </Card>

        <Card refCb={el => el && cardRefs.current.push(el)} glow="#4ade80" bg="from-[#012010] to-[#024020]" label="Grad" color="#4ade80">
          <polygon points="16,6 28,12 16,18 4,12" fill="none" stroke="#4ade80" strokeWidth="1.5" />
        </Card>

        <Card refCb={el => el && cardRefs.current.push(el)} glow="#fb923c" bg="from-[#2a0f00] to-[#5a2000]" label="Chat" color="#fb923c">
          <rect x="4" y="5" width="24" height="17" rx="5" fill="none" stroke="#fb923c" strokeWidth="1.5" />
        </Card>
      </div>
    </main>
  );
}

function Card({
  children,
  label,
  color,
  glow,
  bg,
  refCb,
}: {
  children: React.ReactNode;
  label: string;
  color: string;
  glow: string;
  bg: string;
  refCb: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div
      ref={refCb}
      className={`absolute flex h-[74px] w-[74px] flex-col items-center justify-center gap-1 rounded-xl border border-white/10 bg-gradient-to-br ${bg}`}
      style={{ filter: `drop-shadow(0 0 12px ${glow})` }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32">
        {children}
      </svg>
      <span className="text-[9px] font-bold tracking-widest" style={{ color }}>
        {label.toUpperCase()}
      </span>
    </div>
  );
}
