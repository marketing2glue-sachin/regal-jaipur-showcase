import { useEffect, useState } from "react";

/** Slow-rising gold dust particles. Rendered client-side only to avoid hydration noise. */
export function GoldParticles({ count = 26 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const particles = Array.from({ length: count }, (_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const rand = seed / 233280;
    return {
      left: `${(rand * 100).toFixed(2)}%`,
      size: 1 + ((i * 7) % 3),
      duration: 16 + ((i * 5) % 18),
      delay: -((i * 3.7) % 22),
      opacity: 0.25 + ((i % 5) * 0.12),
    };
  });

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="animate-drift absolute bottom-0 rounded-full bg-primary"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            boxShadow: "0 0 8px 1px color-mix(in oklab, var(--gold) 60%, transparent)",
          }}
        />
      ))}
    </div>
  );
}

/** Floating diamond outlines drifting in the background. */
export function FloatingDiamonds() {
  const items = [
    { top: "18%", left: "8%", size: 16, delay: "0s" },
    { top: "62%", left: "14%", size: 10, delay: "1.8s" },
    { top: "28%", left: "88%", size: 14, delay: "3.2s" },
    { top: "74%", left: "78%", size: 8, delay: "2.4s" },
    { top: "44%", left: "52%", size: 6, delay: "4.1s" },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((d, i) => (
        <span
          key={i}
          className="animate-float-slow absolute border border-primary/30"
          style={{
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size,
            animationDelay: d.delay,
          }}
        />
      ))}
    </div>
  );
}

/** Subtle mouse parallax wrapper — returns a transform style object. */
export function useMouseParallax(strength = 14) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setOffset({ x: x * strength, y: y * strength });
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [strength]);

  return offset;
}

/** Soft glowing reflection blooms. */
export function GoldGlow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={className}
      style={{
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--gold) 22%, transparent) 0%, transparent 70%)",
      }}
    />
  );
}
