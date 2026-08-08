import { createFileRoute } from "@tanstack/react-router";
import heritageImg from "@/assets/heritage.jpg";
import craftImg from "@/assets/craft-hands.jpg";
import goldImg from "@/assets/collection-gold.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, RevealText } from "@/components/site/Reveal";
import { CtaRow, Diamond, SectionHeading } from "@/components/site/Atoms";
import { WA } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Maison Jaipur Heritage Jewellery House" },
      {
        name: "description",
        content:
          "Three generations of Jaipur goldsmiths. Read the story, legacy, values and promise behind Maison Jaipur's handcrafted jewellery.",
      },
      { property: "og:title", content: "Our Story — Maison Jaipur" },
      {
        property: "og:description",
        content: "The legacy, values and promise of a Jaipur heritage jewellery house.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const legacy = [
  { year: "1947", title: "The First Bench", text: "A single workbench off Johari Bazaar, and an obsession with uncut diamonds." },
  { year: "1968", title: "The Royal Commission", text: "A ceremonial polki set commissioned for a Rajasthan wedding house." },
  { year: "1994", title: "The Atelier", text: "Forty karigars gathered under one roof in the Pink City." },
  { year: "2011", title: "Certified Standards", text: "Every stone independently certified; every gram hallmarked." },
  { year: "Today", title: "The Third Generation", text: "Fewer than 300 pieces a year, each made entirely by hand." },
];

const values = [
  { title: "Honesty of Material", text: "What we say is in the piece is in the piece. Always documented." },
  { title: "Slowness", text: "A commission takes as long as it takes. Deadlines never set the finish." },
  { title: "The Karigar", text: "Our artisans are named, credited and paid for mastery, not speed." },
  { title: "Discretion", text: "Private rooms, private records. Your commission is your business." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About the House"
        title="Seventy-eight years at the same bench."
        subtitle="Maison Jaipur is a family house of goldsmiths working in the old quarter of the Pink City — the way jewellery was made before it became a business."
        image={heritageImg}
        imageAlt="Heritage bridal necklace displayed in the Maison Jaipur showroom"
      />

      {/* Our Story */}
      <section className="py-24 lg:py-36">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-12">
          <div>
            <Reveal className="eyebrow block">Our Story</Reveal>
            <h2 className="display mt-6 text-4xl sm:text-5xl">
              <RevealText text="It began with a refusal." />
            </h2>
            <Reveal delay={180}>
              <p className="mt-8 text-base leading-[1.9] font-light text-muted-foreground text-pretty">
                In 1947, our founder refused to sell a necklace he considered unfinished.
                The customer waited eleven weeks. That necklace is still worn by his
                granddaughter. The refusal became the house rule: nothing leaves until it is
                right.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <p className="mt-6 text-base leading-[1.9] font-light text-muted-foreground text-pretty">
                We have never opened a second branch, never sold online, and never held a
                sale. What we have done is teach three generations of Jaipur karigars to set
                a polki so that no light escapes the stone.
              </p>
            </Reveal>
          </div>
          <Reveal variant="image" className="relative aspect-[4/5]">
            <img
              src={craftImg}
              alt="Hands of a Jaipur master goldsmith at work"
              width={1600}
              height={1200}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="hairline pointer-events-none absolute inset-5" aria-hidden />
          </Reveal>
        </div>
      </section>

      {/* Our Legacy timeline */}
      <section className="border-y border-border/50 bg-card py-24 lg:py-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeading eyebrow="Our Legacy" title="A quiet chronology." />
          <ol className="mx-auto mt-20 max-w-3xl border-l border-border/70 pl-10">
            {legacy.map((l, i) => (
              <Reveal key={l.year} as="li" delay={i * 110} className="relative pb-14 last:pb-0">
                <span className="absolute top-2 -left-[46px] h-2 w-2 rotate-45 border border-primary bg-card" />
                <span className="text-[0.58rem] tracking-[0.34em] text-primary uppercase">
                  {l.year}
                </span>
                <h3 className="mt-3 font-serif text-3xl">{l.title}</h3>
                <p className="mt-3 text-sm leading-relaxed font-light text-muted-foreground">
                  {l.text}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 lg:py-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeading eyebrow="Our Values" title="Four things we will not trade." />
          <div className="mt-20 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90} className="glass lift-card p-10">
                <Diamond />
                <h3 className="mt-6 font-serif text-2xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed font-light text-muted-foreground">
                  {v.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship + Promise */}
      <section className="relative overflow-hidden border-t border-border/50 py-24 lg:py-36">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-12">
          <Reveal variant="image" className="relative aspect-[5/4] lg:order-2">
            <img
              src={goldImg}
              alt="22 karat gold bangles and chains on ivory silk"
              width={1400}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <div className="lg:order-1">
            <Reveal className="eyebrow block">Craftsmanship &amp; Our Promise</Reveal>
            <h2 className="display mt-6 text-4xl sm:text-5xl">
              <RevealText text="You will always know exactly what you own." />
            </h2>
            <Reveal delay={200}>
              <p className="mt-8 text-base leading-[1.9] font-light text-muted-foreground text-pretty">
                Every piece leaves with its hallmark, its stone certification, its weight
                card and the name of the karigar who made it. Cleaning, re-polishing and
                re-stringing are complimentary for life — bring your grandmother's piece and
                we will treat it as our own.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 py-24 text-center lg:py-32">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="display text-4xl sm:text-5xl">
            <RevealText text="Come and see the work in person." />
          </h2>
          <CtaRow
            className="mt-12"
            primaryLabel="Book Appointment"
            primaryHref="/contact"
            whatsappHref={WA.appointment}
          />
        </div>
      </section>
    </>
  );
}
