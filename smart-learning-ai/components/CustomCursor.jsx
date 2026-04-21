'use client';

import { useEffect } from 'react';

const NUM = 20;

export default function CustomCursor() {
  useEffect(() => {
    const pool = Array.from({ length: NUM }, () => {
      const d = document.createElement('div');
      d.style.cssText = `
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        border-radius: 50%;
        transform: translate(-50%,-50%);
        background: #7F77DD;
        opacity: 0;
      `;
      document.body.appendChild(d);
      return d;
    });

    let idx = 0;

    const onMove = (e) => {
      const d = pool[idx % NUM];
      idx++;

      const size = 4 + Math.random() * 6;
      d.style.width     = size + 'px';
      d.style.height    = size + 'px';
      d.style.left      = e.clientX + (Math.random() - 0.5) * 20 + 'px';
      d.style.top       = e.clientY + (Math.random() - 0.5) * 20 + 'px';
      d.style.opacity   = '0.9';
      d.style.transition = 'opacity 0s, transform 0s';

      setTimeout(() => {
        d.style.transition = 'opacity 0.5s, transform 0.5s';
        d.style.opacity    = '0';
        d.style.transform  = `translate(-50%,-50%) translate(${(Math.random() - 0.5) * 30}px, ${(Math.random() - 0.5) * 30}px)`;
      }, 10);

      setTimeout(() => {
        d.style.transform = 'translate(-50%,-50%)';
      }, 600);
    };

    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('mousemove', onMove);
      pool.forEach(d => d.remove());
    };
  }, []);

  return null;
}