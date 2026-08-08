import { FloatingDiamonds, GoldGlow, GoldParticles, useMouseParallax } from "./Ambience";
import { Ornament } from "./Atoms";
import { RevealText, Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
}) {
  const parallax = useMouseParallax(10);

  return (
    <section className="relative flex min-h-[78vh] items-center justify-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover opacity-45"
          style={{
            transform: `scale(1.08) translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
            transition: "transform 1.4s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-veil)" }}
          aria-hidden
        />
      </div>
      <GoldParticles count={16} />
      <FloatingDiamonds />
      <GoldGlow className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 blur-2xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <Reveal className="eyebrow block">{eyebrow}</Reveal>
        <h1 className="display mt-7 text-5xl text-balance sm:text-6xl lg:text-7xl">
          <RevealText text={title} delay={120} />
        </h1>
        <Reveal delay={340}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed font-light text-muted-foreground text-pretty">
            {subtitle}
          </p>
        </Reveal>
        <Ornament className="mt-12" />
      </div>
    </section>
  );
}
