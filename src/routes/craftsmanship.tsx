import { createFileRoute } from "@tanstack/react-router";
import craftImg from "@/assets/craft-hands.jpg";
import heroImg from "@/assets/hero-jewellery.jpg";
import goldImg from "@/assets/collection-gold.jpg";
import diamondImg from "@/assets/collection-diamond.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, RevealText } from "@/components/site/Reveal";
import { CtaRow, SectionHeading } from "@/components/site/Atoms";
import { GoldGlow } from "@/components/site/Ambience";
import { WA } from "@/lib/site";

export const Route = createFileRoute("/craftsmanship")({
  head: () => ({
    meta: [
      { title: "Our Craftsmanship — Jaipur Karigars & Handmade Jewellery" },
      {
        name: "description",
        content:
          "Inside the Maison Jaipur atelier: hand-drawn gold, kundan setting, meenakari enamel and weeks of finishing by master Jaipur karigars.",
      },
      { property: "og:title", content: "Our Craftsmanship — Maison Jaipur" },
      {
        property: "og:description",
        content: "The hands, tools and traditions behind every Maison Jaipur piece.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/craftsmanship" },
    ],
    links: [{ rel: "canonical", href: "/craftsmanship" }],
  }),
  component: Craft,
});

const chapters = [
  {
    eyebrow: "Chapter One",
    title: "The gold is drawn, never cast.",
    text: "Ingots are rolled and drawn into wire on the same hand-cranked machine we have used since 1963. Drawn gold holds its structure; cast gold remembers nothing.",
    image: goldImg,
  },
  {
    eyebrow: "Chapter Two",
    title: "Kundan is pressure, not solder.",
    text: "Pure 24K gold is worked cold around each uncut stone until it grips. No heat, no adhesive — a technique that takes a karigar eleven years to master.",
    image: craftImg,
  },
  {
    eyebrow: "Chapter Three",
    title: "The reverse is as finished as the front.",
    text: "Meenakari enamel is fired onto the hidden face of every ceremonial piece. Only the wearer will ever see it. That is precisely the point.",
    image: heroImg,
  },
  {
    eyebrow: "Chapter Four",
    title: "Light is the final material.",
    text: "Polishing runs for up to three weeks, by hand, with progressively finer compounds until the metal returns light softly rather than sharply.",
    image: diamondImg,
  },
];

const artisans = [
  { name: "Ram Prasad", craft: "Kundan Setting", years: "41 years" },
  { name: "Iqbal Hussain", craft: "Meenakari Enamel", years: "33 years" },
  { name: "Mahesh Soni", craft: "Chasing & Repoussé", years: "27 years" },
  { name: "Dinesh Verma", craft: "Diamond Setting", years: "22 years" },
];

function Craft() {
  return (
    <>
      <PageHero
        eyebrow="The Atelier"
        title="Forty pairs of hands in the Pink City."
        subtitle="Nothing here is outsourced. From the drawing of the wire to the final polish, every stage happens within one building in Jaipur."
        image={craftImg}
        imageAlt="Close-up of a Jaipur artisan setting stones into gold"
      />

      {chapters.map((c, i) => (
        <section
          key={c.title}
          className={
            i % 2 === 1
              ? "relative overflow-hidden border-y border-border/50 bg-card py-24 lg:py-36"
              : "relative overflow-hidden py-24 lg:py-36"
          }
        >
          {i % 2 === 0 ? (
            <GoldGlow className="pointer-events-none absolute top-1/2 -right-40 h-[420px] w-[420px] blur-3xl" />
          ) : null}
          <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 lg:grid-cols-2 lg:gap-24 lg:px-12">
            <Reveal
              variant="image"
              className={`relative aspect-[4/3] ${i % 2 === 1 ? "lg:order-2" : ""}`}
            >
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="hairline pointer-events-none absolute inset-5" aria-hidden />
            </Reveal>
            <div>
              <Reveal className="eyebrow block">{c.eyebrow}</Reveal>
              <h2 className="display mt-6 text-4xl text-balance sm:text-5xl">
                <RevealText text={c.title} />
              </h2>
              <Reveal delay={200}>
                <p className="mt-8 max-w-md text-base leading-[1.9] font-light text-muted-foreground text-pretty">
                  {c.text}
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 lg:py-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeading
            eyebrow="The Karigars"
            title="We put their names on the box."
            intro="Every piece carries a card naming the artisan who made it. Mastery deserves attribution."
          />
          <div className="mt-20 grid gap-px border border-border/60 sm:grid-cols-2 lg:grid-cols-4">
            {artisans.map((a, i) => (
              <Reveal key={a.name} delay={i * 90} className="glass p-10">
                <span className="text-[0.58rem] tracking-[0.32em] text-primary uppercase">
                  {a.years}
                </span>
                <h3 className="mt-5 font-serif text-2xl">{a.name}</h3>
                <p className="mt-2 text-sm font-light text-muted-foreground">{a.craft}</p>
              </Reveal>
            ))}
          </div>
          <CtaRow
            className="mt-16"
            primaryLabel="Visit the Atelier"
            primaryHref="/contact"
            whatsappHref={WA.appointment}
          />
        </div>
      </section>
    </>
  );
}
