import { useEffect, useState } from "react";

export function LuxuryLoader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("mj-intro");
    if (seen) {
      setDone(true);
      setHidden(true);
      return;
    }
    const t1 = setTimeout(() => {
      setDone(true);
      sessionStorage.setItem("mj-intro", "1");
    }, 2200);
    const t2 = setTimeout(() => setHidden(true), 3600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{ opacity: done ? 0 : 1, pointerEvents: done ? "none" : "auto" }}
    >
      <span className="mb-6 h-3 w-3 rotate-45 border border-primary/70" />
      <span className="animate-shimmer font-serif text-3xl tracking-[0.45em] uppercase">
        Maison
      </span>
      <span className="mt-4 text-[0.6rem] tracking-[0.5em] text-muted-foreground uppercase">
        Jaipur
      </span>
      <span className="relative mt-10 block h-px w-40 overflow-hidden bg-border">
        <span
          className="absolute inset-y-0 left-0 bg-primary transition-[width] duration-[2200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ width: done ? "100%" : "0%" }}
        />
      </span>
    </div>
  );
}

/** Slow fade between routes. */
export function PageTransition({ routeKey }: { routeKey: string }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
    const t = setTimeout(() => setActive(false), 620);
    return () => clearTimeout(t);
  }, [routeKey]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[90] bg-background transition-opacity duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{ opacity: active ? 0.85 : 0 }}
    />
  );
}
