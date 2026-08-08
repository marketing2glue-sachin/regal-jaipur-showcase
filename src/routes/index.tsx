import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-jewellery.jpg";
import heritageImg from "@/assets/heritage.jpg";
import craftImg from "@/assets/craft-hands.jpg";
import bridalImg from "@/assets/collection-bridal.jpg";
import diamondImg from "@/assets/collection-diamond.jpg";
import goldImg from "@/assets/collection-gold.jpg";
import mensImg from "@/assets/collection-mens.jpg";
import sketchImg from "@/assets/custom-sketch.jpg";
import { Reveal, RevealText } from "@/components/site/Reveal";
import {
  CtaRow,
  Diamond,
  LuxAnchor,
  LuxLink,
  Ornament,
  SectionHeading,
} from "@/components/site/Atoms";
import {
  FloatingDiamonds,
  GoldGlow,
  GoldParticles,
  useMouseParallax,
} from "@/components/site/Ambience";
import { SITE, WA } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Jaipur — Heritage Jewellery House in Jaipur" },
      {
        name: "description",
        content:
          "Handcrafted polki, kundan and diamond jewellery from Jaipur. Book a private consultation at our showroom or begin a conversation on WhatsApp.",
      },
      { property: "og:title", content: "Maison Jaipur — Heritage Jewellery House" },
      {
        property: "og:description",
        content:
          "Timeless bridal, diamond and bespoke jewellery inspired by the royal heritage of Jaipur.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JewelryStore",
          name: SITE.name,
          description:
            "Heritage jewellery house in Jaipur crafting bridal, polki, kundan and diamond jewellery by hand.",
          telephone: SITE.phoneDisplay,
          email: SITE.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Johari Bazaar Road, Pink City",
            addressLocality: "Jaipur",
            addressRegion: "Rajasthan",
            postalCode: "302003",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 11:00-20:00",
        }),
      },
    ],
  }),
  component: Home,
});

const collections = [
  { title: "Bridal Collection", note: "Ceremonial heirlooms", image: bridalImg, to: "/bridal-collection" },
  { title: "Diamond Collection", note: "Certified brilliance", image: diamondImg, to: "/diamond-collection" },
  { title: "Custom Jewellery", note: "Designed with you", image: sketchImg, to: "/custom-jewellery" },
  { title: "Gold Jewellery", note: "22K hallmarked", image: goldImg, to: "/craftsmanship" },
  { title: "Polki Collection", note: "Uncut diamonds", image: heritageImg, to: "/bridal-collection" },
  { title: "Kundan Collection", note: "Royal setting", image: heroImg, to: "/bridal-collection" },
  { title: "Men's Jewellery", note: "Quiet authority", image: mensImg, to: "/craftsmanship" },
];

const process = [
  { step: "01", title: "Sketch", text: "A hand drawing, born from conversation and memory." },
  { step: "02", title: "Design", text: "Proportion, motif and stone architecture are resolved." },
  { step: "03", title: "Handcrafting", text: "Gold is drawn, shaped and chased by our karigars." },
  { step: "04", title: "Stone Setting", text: "Each polki and diamond is seated by hand, one by one." },
  { step: "05", title: "Polishing", text: "Weeks of finishing until the metal holds light softly." },
  { step: "06", title: "Final Masterpiece", text: "Certified, hallmarked and presented to you." },
];

const assurances = [
  { title: "Hallmarked Gold", text: "Every gram BIS hallmarked and independently verified." },
  { title: "Certified Diamonds", text: "IGI and GIA certification accompanies every stone." },
  { title: "Personal Consultation", text: "A private room, unhurried time, no obligation." },
  { title: "Custom Designs", text: "Bespoke commissions from sketch to finished heirloom." },
  { title: "Generational Trust", text: "Three generations of families, served since 1947." },
  { title: "Jaipur Craftsmanship", text: "Made entirely in our Pink City atelier." },
];

const testimonials = [
  {
    quote:
      "They understood a memory of my grandmother's necklace and gave it back to me, made new. I wept in the showroom.",
    name: "Aditi Rathore",
    detail: "Bridal commission · Udaipur",
  },
  {
    quote:
      "The most patient, least pushy jewellery experience in India. Nothing was sold to me — everything was explained.",
    name: "Rohan Mehta",
    detail: "Diamond solitaire · Mumbai",
  },
  {
    quote:
      "We flew in from London for the fittings. The craftsmanship is genuinely museum-grade.",
    name: "Priya & James",
    detail: "Wedding set · London",
  },
];

function Home() {
  const parallax = useMouseParallax(16);

  return (
    <>
      {/* SECTION 1 — Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Bride wearing a handcrafted gold polki and emerald necklace from Maison Jaipur"
            width={1920}
            height={1280}
            fetchPriority="high"
            className="h-full w-full object-cover object-center"
            style={{
              transform: `scale(1.1) translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
              transition: "transform 1.6s cubic-bezier(0.16,1,0.3,1)",
            }}
          />
          <div
            className="absolute inset-0"
            aria-hidden
            style={{
              background:
                "linear-gradient(90deg, oklch(0.13 0 0 / 0.92) 0%, oklch(0.13 0 0 / 0.55) 55%, oklch(0.13 0 0 / 0.75) 100%)",
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-64"
            aria-hidden
            style={{
              background: "linear-gradient(180deg, transparent, oklch(0.13 0 0))",
            }}
          />
        </div>

        <GoldParticles />
        <FloatingDiamonds />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-32 pb-24 lg:px-12">
          <div className="max-w-2xl">
            <Reveal className="eyebrow block">
              <span className="inline-flex items-center gap-3">
                <Diamond className="h-1 w-1" />
                {SITE.tagline}
              </span>
            </Reveal>

            <h1 className="display mt-8 text-[2.9rem] leading-[1.03] text-balance sm:text-6xl lg:text-[5.2rem]">
              <RevealText text="Crafted for Generations." delay={200} />
              <span className="mt-2 block text-primary italic">
                <RevealText text="Treasured Forever." delay={520} />
              </span>
            </h1>

            <Reveal delay={900}>
              <p className="mt-9 max-w-md text-base leading-relaxed font-light text-muted-foreground text-pretty">
                Experience timeless jewellery inspired by the royal heritage of Jaipur —
                handcrafted in our atelier, worn for a lifetime, passed down for many more.
              </p>
            </Reveal>

            <Reveal delay={1080} className="mt-12 flex flex-wrap gap-5">
              <LuxLink to="/contact">Book Private Consultation</LuxLink>
              <LuxAnchor href={WA.appointment} variant="ivory">
                Chat on WhatsApp
              </LuxAnchor>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center">
          <span className="block text-[0.55rem] tracking-[0.4em] text-muted-foreground/70 uppercase">
            Scroll
          </span>
          <span className="mx-auto mt-3 block h-12 w-px bg-gradient-to-b from-primary/70 to-transparent" />
        </div>
      </section>

      {/* SECTION 2 — Heritage */}
      <section className="relative overflow-hidden py-28 lg:py-40">
        <GoldGlow className="pointer-events-none absolute top-1/3 -left-40 h-[500px] w-[500px] blur-3xl" />
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-12">
          <Reveal variant="image" className="relative aspect-[4/5] w-full">
            <img
              src={heritageImg}
              alt="A royal bridal necklace displayed in a heritage vitrine at the Maison Jaipur showroom"
              width={1408}
              height={1760}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="hairline pointer-events-none absolute inset-5" aria-hidden />
          </Reveal>

          <div>
            <Reveal className="eyebrow block">Since 1947 · The Pink City</Reveal>
            <h2 className="display mt-6 text-4xl text-balance sm:text-5xl lg:text-[3.6rem]">
              <RevealText text="A house built on patience, not production." />
            </h2>
            <Reveal delay={200}>
              <p className="mt-8 text-base leading-[1.9] font-light text-muted-foreground text-pretty">
                Three generations ago, our founder set up a single workbench off Johari
                Bazaar with a handful of tools and an obsession with uncut diamonds. That
                bench still stands in our atelier. Around it, forty karigars — many of them
                sons of the men who trained beside him — still shape gold by hand.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-6 text-base leading-[1.9] font-light text-muted-foreground text-pretty">
                We make fewer than three hundred pieces a year. Each takes between six weeks
                and eleven months. Nothing here is stocked, discounted or hurried.
              </p>
            </Reveal>
            <Reveal delay={420} className="mt-10 grid grid-cols-3 gap-8">
              {[
                { n: "78", l: "Years" },
                { n: "40", l: "Karigars" },
                { n: "3", l: "Generations" },
              ].map((s) => (
                <div key={s.l}>
                  <span className="font-serif text-4xl text-primary">{s.n}</span>
                  <span className="mt-2 block text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
                    {s.l}
                  </span>
                </div>
              ))}
            </Reveal>
            <Reveal delay={520} className="mt-12">
              <LuxLink to="/about" variant="ghost" className="px-0">
                Read our story →
              </LuxLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Collections */}
      <section className="relative border-y border-border/50 bg-card py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeading
            eyebrow="The Collections"
            title="Seven houses of craft, one standard."
            intro="Each collection is a discipline of its own — different stones, different hands, the same refusal to compromise."
          />

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <Link
                  to={c.to}
                  className="lift-card sparkle group relative block aspect-[4/5] overflow-hidden border border-border/60"
                >
                  <img
                    src={c.image}
                    alt={`${c.title} by Maison Jaipur`}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-70 transition-[transform,opacity] duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:opacity-95"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0"
                    style={{ background: "var(--gradient-veil)" }}
                  />
                  <span className="absolute inset-x-0 bottom-0 p-7">
                    <span className="block text-[0.58rem] tracking-[0.34em] text-primary uppercase">
                      {c.note}
                    </span>
                    <span className="mt-3 block font-serif text-2xl">{c.title}</span>
                    <span className="mt-4 block h-px w-0 bg-primary transition-[width] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-16" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Craftsmanship timeline */}
      <section className="relative overflow-hidden py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeading
            eyebrow="The Making"
            title="Six hands. Six months. One heirloom."
            align="left"
          />
          <div className="mt-20 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <Reveal variant="image" className="relative aspect-[4/3] lg:sticky lg:top-32 lg:h-fit">
              <img
                src={craftImg}
                alt="A Jaipur karigar setting uncut polki diamonds into a gold necklace by hand"
                width={1600}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </Reveal>

            <ol className="relative border-l border-border/70 pl-10">
              {process.map((p, i) => (
                <Reveal key={p.step} as="li" delay={i * 110} className="relative pb-14 last:pb-0">
                  <span className="absolute top-2 -left-[46px] h-2 w-2 rotate-45 border border-primary bg-background" />
                  <span className="text-[0.58rem] tracking-[0.34em] text-primary uppercase">
                    {p.step}
                  </span>
                  <h3 className="mt-3 font-serif text-3xl">{p.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed font-light text-muted-foreground">
                    {p.text}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Why choose us */}
      <section className="border-y border-border/50 bg-card py-28 lg:py-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeading eyebrow="Why Maison Jaipur" title="Assurances, quietly kept." />
          <div className="mt-20 grid gap-px overflow-hidden border border-border/60 sm:grid-cols-2 lg:grid-cols-3">
            {assurances.map((a, i) => (
              <Reveal
                key={a.title}
                delay={i * 80}
                className="glass group relative p-10 transition-colors duration-700 hover:bg-primary/5"
              >
                <Diamond className="opacity-70" />
                <h3 className="mt-6 font-serif text-2xl">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed font-light text-muted-foreground">
                  {a.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Testimonials */}
      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeading
            eyebrow="In Their Words"
            title="Families who came back with their daughters."
          />

          <div className="mt-20 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 120} className="glass lift-card p-10">
                <span className="font-serif text-5xl leading-none text-primary/50">&ldquo;</span>
                <p className="mt-5 text-base leading-[1.9] font-light text-pretty">{t.quote}</p>
                <div className="mt-8">
                  <span className="rule-gold block max-w-[60px]" />
                  <span className="mt-5 block font-serif text-lg">{t.name}</span>
                  <span className="mt-1 block text-[0.6rem] tracking-[0.28em] text-muted-foreground uppercase">
                    {t.detail}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {["Bridal fitting film", "Atelier documentary", "Client story"].map((v, i) => (
              <Reveal key={v} delay={i * 110}>
                <div className="group relative flex aspect-video items-center justify-center border border-border/60 bg-secondary/40 transition-colors duration-700 hover:border-primary/50">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/60 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
                    <span className="ml-1 h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-primary" />
                  </span>
                  <span className="absolute bottom-5 text-[0.58rem] tracking-[0.3em] text-muted-foreground uppercase">
                    {v}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="glass mt-8 flex flex-wrap items-center justify-between gap-6 p-10">
            <div>
              <span className="font-serif text-4xl text-primary">4.9</span>
              <span className="ml-3 text-sm font-light text-muted-foreground">
                out of 5 · 1,240+ Google reviews
              </span>
            </div>
            <div className="flex gap-1.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="h-2 w-2 rotate-45 bg-primary" />
              ))}
            </div>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="text-[0.62rem] tracking-[0.28em] text-primary uppercase transition-opacity duration-500 hover:opacity-70"
            >
              Read reviews on Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* SECTION 7 — Appointment CTA */}
      <section className="relative overflow-hidden border-t border-border/50 py-32 lg:py-44">
        <GoldParticles count={18} />
        <GoldGlow className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[720px] -translate-x-1/2 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <Ornament />
          <h2 className="display mt-10 text-4xl text-balance sm:text-5xl lg:text-6xl">
            <RevealText text="Let's Create Something Timeless Together" />
          </h2>
          <Reveal delay={220}>
            <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed font-light text-muted-foreground text-pretty">
              Visit our Jaipur showroom for an unhurried private viewing, or begin the
              conversation from wherever you are.
            </p>
          </Reveal>
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
