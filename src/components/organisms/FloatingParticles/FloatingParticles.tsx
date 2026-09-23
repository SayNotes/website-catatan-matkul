import { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  delay: number;
}

export function FloatingParticles({ count = 30 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const list: Particle[] = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.15,
      speedY: (Math.random() - 0.5) * 0.15,
      opacity: Math.random() * 0.5 + 0.2,
      delay: Math.random() * 5,
    }));
    setParticles(list);
  }, [count]);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      setParticles((prev) =>
        prev.map((p) => {
          let nx = p.x + p.speedX;
          let ny = p.y + p.speedY;
          if (nx < 0) nx = 100;
          if (nx > 100) nx = 0;
          if (ny < 0) ny = 100;
          if (ny > 100) ny = 0;
          return { ...p, x: nx, y: ny };
        })
      );
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-gradient-to-b from-amber-300/40 to-amber-200/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animation: 'float-up 12s ease-in-out infinite alternate',
          }}
        />
      ))}
    </div>
  );
}
