




























"use client"

import { useEffect, useRef } from "react";

const colors = ['#00d4ff','#ffe04d','#a855f7','#22d3ee','#f87171','#4ade80','#fb923c'];

const cards = [
  {
    id: 'c0',
    r: '16px', glow: '#00f0ff',
    bg: 'linear-gradient(135deg,#003d5b,#006080)',
    border: '1.5px solid #00d4ff44',
    labelColor: '#fff', labelText: 'AI',
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="8" y="8" width="16" height="16" rx="3" fill="none" stroke="#00d4ff" strokeWidth="1.5"/>
        <rect x="11" y="11" width="10" height="10" rx="2" fill="#00d4ff" opacity=".3"/>
        <text x="16" y="20" textAnchor="middle" fontSize="9" fontWeight="900" fill="#00d4ff" fontFamily="Arial">AI</text>
        <line x1="8" y1="13" x2="4" y2="13" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="8" y1="19" x2="4" y2="19" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="24" y1="13" x2="28" y2="13" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="24" y1="19" x2="28" y2="19" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="13" y1="8" x2="13" y2="4" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="19" y1="8" x2="19" y2="4" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="13" y1="24" x2="13" y2="28" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="19" y1="24" x2="19" y2="28" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'c1',
    r: '50%', glow: '#ffe04d',
    bg: 'linear-gradient(135deg,#3a2a00,#604800)',
    border: '1.5px solid #ffe04d44',
    labelColor: '#ffe04d', labelText: 'Idea',
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="14" rx="7" ry="7.5" fill="none" stroke="#ffe04d" strokeWidth="1.5"/>
        <path d="M12 20.5 Q12 23 16 23 Q20 23 20 20.5" stroke="#ffe04d" strokeWidth="1.5" fill="none"/>
        <line x1="13" y1="25" x2="19" y2="25" stroke="#ffe04d" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="16" y1="4" x2="16" y2="2" stroke="#ffe04d" strokeWidth="2" strokeLinecap="round"/>
        <line x1="22" y1="6" x2="23.5" y2="4.5" stroke="#ffe04d" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="10" y1="6" x2="8.5" y2="4.5" stroke="#ffe04d" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="25" y1="13" x2="27" y2="13" stroke="#ffe04d" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="7" y1="13" x2="5" y2="13" stroke="#ffe04d" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="14" r="2.5" fill="#ffe04d" opacity=".5"/>
      </svg>
    ),
  },
  {
    id: 'c2',
    r: '10px', glow: '#a855f7',
    bg: 'linear-gradient(135deg,#1e0638,#3b1270)',
    border: '1.5px solid #a855f744',
    labelColor: '#c084fc', labelText: 'Book',
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="6" width="20" height="22" rx="2" fill="none" stroke="#c084fc" strokeWidth="1.5"/>
        <line x1="16" y1="6" x2="16" y2="28" stroke="#c084fc" strokeWidth="1"/>
        <line x1="10" y1="11" x2="14" y2="11" stroke="#c084fc" strokeWidth="1" strokeLinecap="round"/>
        <line x1="10" y1="14" x2="14" y2="14" stroke="#c084fc" strokeWidth="1" strokeLinecap="round"/>
        <line x1="10" y1="17" x2="14" y2="17" stroke="#c084fc" strokeWidth="1" strokeLinecap="round"/>
        <line x1="18" y1="11" x2="22" y2="11" stroke="#c084fc" strokeWidth="1" strokeLinecap="round"/>
        <line x1="18" y1="14" x2="22" y2="14" stroke="#c084fc" strokeWidth="1" strokeLinecap="round"/>
        <rect x="6" y="24" width="20" height="4" rx="2" fill="#a855f7" opacity=".4"/>
      </svg>
    ),
  },
  {
    id: 'c3',
    r: '8px', glow: '#22d3ee',
    bg: 'linear-gradient(135deg,#002a2e,#004d55)',
    border: '1.5px solid #22d3ee44',
    labelColor: '#22d3ee', labelText: 'Notes',
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="5" width="20" height="24" rx="2" fill="none" stroke="#22d3ee" strokeWidth="1.5"/>
        <line x1="10" y1="10" x2="22" y2="10" stroke="#22d3ee" strokeWidth="1" strokeLinecap="round" opacity=".5"/>
        <circle cx="10" cy="15" r="1.5" fill="#22d3ee"/>
        <line x1="13" y1="15" x2="22" y2="15" stroke="#22d3ee" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="10" cy="19.5" r="1.5" fill="#22d3ee"/>
        <line x1="13" y1="19.5" x2="20" y2="19.5" stroke="#22d3ee" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="10" cy="24" r="1.5" fill="#22d3ee" opacity=".5"/>
        <line x1="13" y1="24" x2="18" y2="24" stroke="#22d3ee" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
        <rect x="9" y="3" width="14" height="4" rx="2" fill="#004d55" stroke="#22d3ee" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    id: 'c4',
    r: '14px', glow: '#f87171',
    bg: 'linear-gradient(135deg,#2a0505,#5a0f0f)',
    border: '1.5px solid #f8717144',
    labelColor: '#f87171', labelText: 'Video',
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="8" width="26" height="18" rx="4" fill="none" stroke="#f87171" strokeWidth="1.5"/>
        <polygon points="13,13 22,18 13,23" fill="#f87171" opacity=".85"/>
        <circle cx="26" cy="9" r="4" fill="#5a0f0f" stroke="#f87171" strokeWidth="1"/>
        <circle cx="26" cy="9" r="1.5" fill="#f87171"/>
      </svg>
    ),
  },
  {
    id: 'c5',
    r: '50% 50% 50% 0', glow: '#4ade80',
    bg: 'linear-gradient(135deg,#012010,#024020)',
    border: '1.5px solid #4ade8044',
    labelColor: '#4ade80', labelText: 'Grad',
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <polygon points="16,6 28,12 16,18 4,12" fill="none" stroke="#4ade80" strokeWidth="1.5"/>
        <path d="M8 14 L8 22 Q16 27 24 22 L24 14" fill="none" stroke="#4ade80" strokeWidth="1.5"/>
        <line x1="26" y1="12" x2="26" y2="20" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="26" cy="21" r="2" fill="#4ade80" opacity=".7"/>
        <ellipse cx="16" cy="24" rx="8" ry="2.5" fill="#4ade80" opacity=".15"/>
      </svg>
    ),
  },
  {
    id: 'c6',
    r: '18px 18px 18px 4px', glow: '#fb923c',
    bg: 'linear-gradient(135deg,#2a0f00,#5a2000)',
    border: '1.5px solid #fb923c44',
    labelColor: '#fb923c', labelText: 'Chat',
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="5" width="24" height="17" rx="5" fill="none" stroke="#fb923c" strokeWidth="1.5"/>
        <line x1="9" y1="11" x2="23" y2="11" stroke="#fb923c" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="9" y1="16" x2="19" y2="16" stroke="#fb923c" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 22 L4 29 L16 22" fill="#2a0f00" stroke="#fb923c" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function OrbitalIcons() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const angleRef = useRef(0);
  const rafRef = useRef<number>(0);

  const cx = 250, cy = 250, R = 175;
  const N = cards.length;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    function drawOrbit() {
      ctx.clearRect(0, 0, 500, 500);

      // outer glow ring
      ctx.save();
      ctx.strokeStyle = 'rgba(100,200,255,0.06)';
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.arc(cx, cy, R + 4, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // dashed orbit ring
      ctx.save();
      ctx.strokeStyle = 'rgba(100,200,255,0.18)';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 7]);
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // inner glow center
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 120);
      grad.addColorStop(0, 'rgba(0,80,160,0.15)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, 120, 0, Math.PI * 2);
      ctx.fill();

      // connector lines between consecutive cards with color trails
      for (let i = 0; i < N; i++) {
        const a0 = angleRef.current + (i / N) * Math.PI * 2;
        const a1 = angleRef.current + ((i + 1) / N) * Math.PI * 2;
        const x0 = cx + R * Math.cos(a0), y0 = cy + R * Math.sin(a0);
        const x1 = cx + R * Math.cos(a1), y1 = cy + R * Math.sin(a1);
        const mx = cx + R * Math.cos((a0 + a1) / 2), my = cy + R * Math.sin((a0 + a1) / 2);

        ctx.save();
        ctx.strokeStyle = colors[i] + '55';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.quadraticCurveTo(mx, my, x1, y1);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();

        // arrowhead
        const dx = x1 - mx, dy = y1 - my;
        const len = Math.sqrt(dx * dx + dy * dy) || 1;
        const nx = dx / len, ny = dy / len;
        ctx.save();
        ctx.strokeStyle = colors[i] + '99';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(x1 - nx * 8 - ny * 4, y1 - ny * 8 + nx * 4);
        ctx.lineTo(x1, y1);
        ctx.lineTo(x1 - nx * 8 + ny * 4, y1 - ny * 8 - nx * 4);
        ctx.stroke();
        ctx.restore();
      }

      // particle dots along orbit
      const t = Date.now() / 1000;
      for (let p = 0; p < 14; p++) {
        const pa = (t * 0.6 + (p / 14) * Math.PI * 2) % (Math.PI * 2);
        const px = cx + R * Math.cos(pa);
        const py = cy + R * Math.sin(pa);
        const idx = Math.floor(p % N);
        ctx.save();
        ctx.globalAlpha = 0.5 + 0.5 * Math.sin(t * 2 + p);
        ctx.fillStyle = colors[idx];
        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    function positionCards() {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const a = angleRef.current + (i / N) * Math.PI * 2;
        const x = cx + R * Math.cos(a) - 37;
        const y = cy + R * Math.sin(a) - 37;
        card.style.left = x + 'px';
        card.style.top = y + 'px';
        card.style.transform = 'none';
      });
    }

    function loop() {
      angleRef.current += 0.004;
      drawOrbit();
      positionCards();
      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '500px' }}>
      <div style={{ position: 'relative', width: '500px', height: '500px' }}>

        {/* Canvas — orbit ring, connectors, particles */}
        <canvas
          ref={canvasRef}
          width={500}
          height={500}
          style={{ position: 'absolute', top: 0, left: 0 }}
        />

        {/* Cards */}
        {cards.map((card, i) => (
          <div
            key={card.id}
            ref={(el) => { cardRefs.current[i] = el; }}
            style={{
              position: 'absolute',
              width: '74px',
              height: '74px',
              borderRadius: card.r,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              transformOrigin: '250px 250px',
              transition: 'filter .2s',
              cursor: 'pointer',
              background: card.bg,
              border: card.border,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.filter =
                `brightness(1.35) drop-shadow(0 0 12px ${card.glow})`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.filter = 'none';
            }}
          >
            {card.svg}
            <span
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '.06em',
                textTransform: 'uppercase',
                color: card.labelColor,
                opacity: 0.85,
              }}
            >
              {card.labelText}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}