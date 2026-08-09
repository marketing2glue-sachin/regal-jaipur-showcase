import { useEffect, useRef, useState } from "react";

/**
 * Fixed cinematic backdrop:
 *  - drifting gold "star dust" field across the whole page
 *  - a glowing orb behind the hero that fades out on scroll
 *  - a soft grid overlay
 * Respects prefers-reduced-motion (renders a static field, no animation loop).
 */
export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const orbRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;

    type Star = { x: number; y: number; r: number; a: number; vx: number; vy: number; t: number };
    let stars: Star[] = [];

    function seed() {
      const density = Math.min(180, Math.round((width * height) / 14000));
      stars = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.1 + 0.25,
        a: Math.random() * 0.5 + 0.15,
        vx: (Math.random() - 0.5) * 0.06,
        vy: -(Math.random() * 0.07 + 0.015),
        t: Math.random() * Math.PI * 2,
      }));
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (reduced) draw(false);
    }

    function draw(animate: boolean) {
      ctx!.clearRect(0, 0, width, height);
      for (const s of stars) {
        if (animate) {
          s.x += s.vx;
          s.y += s.vy;
          s.t += 0.012;
          if (s.y < -4) s.y = height + 4;
          if (s.x < -4) s.x = width + 4;
          if (s.x > width + 4) s.x = -4;
        }
        const twinkle = animate ? 0.65 + Math.sin(s.t) * 0.35 : 1;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(199, 163, 72, ${(s.a * twinkle).toFixed(3)})`;
        ctx!.fill();
      }
    }

    function loop() {
      draw(true);
      raf = requestAnimationFrame(loop);
    }

    resize();
    window.addEventListener("resize", resize);
    if (!reduced) raf = requestAnimationFrame(loop);

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const fade = Math.max(0, 1 - y / (window.innerHeight * 0.8));
        if (orbRef.current) {
          orbRef.current.style.opacity = String(fade);
          orbRef.current.style.transform = `translate3d(-50%, ${(-y * 0.12).toFixed(1)}px, 0) scale(${(1 + (1 - fade) * 0.15).toFixed(3)})`;
        }
        ticking = false;
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, [mounted]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* soft grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in oklab, var(--gold) 9%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--gold) 9%, transparent) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black 0%, transparent 75%)",
        }}
      />
      {/* hero orb */}
      <div
        ref={orbRef}
        className="absolute top-[12vh] left-1/2 h-[62vh] w-[62vh] -translate-x-1/2 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--gold) 26%, transparent) 0%, color-mix(in oklab, var(--gold) 8%, transparent) 45%, transparent 70%)",
        }}
      />
      {mounted ? <canvas ref={canvasRef} className="absolute inset-0" /> : null}
    </div>
  );
}
