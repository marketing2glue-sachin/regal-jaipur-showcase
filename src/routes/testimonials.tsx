import { createFileRoute } from "@tanstack/react-router";
import heritageImg from "@/assets/heritage.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaRow, SectionHeading } from "@/components/site/Atoms";
import { SITE, WA } from "@/lib/site";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Stories — Maison Jaipur Jewellery Reviews" },
      {
        name: "description",
        content:
          "Read what brides, families and collectors say about commissioning jewellery with Maison Jaipur in Jaipur, India.",
      },
      { property: "og:title", content: "Client Stories — Maison Jaipur" },
      {
        property: "og:description",
        content: "Reviews and stories from families we have served for three generations.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

const reviews = [
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
      "We flew in from London for the fittings. The craftsmanship is genuinely museum-grade, and the paperwork is impeccable.",
    name: "Priya & James",
    detail: "Wedding set · London",
  },
  {
    quote:
      "My mother bought her wedding jewellery here in 1979. I bought mine in the same room, from the same family.",
    name: "Shruti Agarwal",
    detail: "Kundan bridal set · Jaipur",
  },
  {
    quote:
      "The CAD previews meant there were no surprises. What arrived was exactly what we approved, only better in the hand.",
    name: "Karan Malhotra",
    detail: "Custom commission · Delhi",
  },
  {
    quote:
      "They re-polished my mother-in-law's fifty-year-old polki set without charging a rupee. That told me everything.",
    name: "Neha Singhania",
    detail: "Restoration · Kolkata",
  },
];

const films = [
  "A bridal fitting, filmed",
  "Inside the atelier",
  "A family's third generation",
];

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Client Stories"
        title="Trust, earned one family at a time."
        subtitle="We have never advertised. Everyone who walks in was sent by someone who wore the work first."
        image={heritageImg}
        imageAlt="Heritage jewellery displayed in the Maison Jaipur showroom"
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeading eyebrow="In Their Words" title="Letters from the drawing room." />
          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 90} className="glass lift-card p-10">
                <span className="font-serif text-5xl leading-none text-primary/50">&ldquo;</span>
                <p className="mt-5 text-base leading-[1.9] font-light text-pretty">{r.quote}</p>
                <div className="mt-8">
                  <span className="rule-gold block max-w-[60px]" />
                  <span className="mt-5 block font-serif text-lg">{r.name}</span>
                  <span className="mt-1 block text-[0.6rem] tracking-[0.28em] text-muted-foreground uppercase">
                    {r.detail}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-card py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeading eyebrow="Films" title="Stories, told in motion." />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {films.map((f, i) => (
              <Reveal key={f} delay={i * 110}>
                <div className="group relative flex aspect-video items-center justify-center border border-border/60 bg-secondary/40 transition-colors duration-700 hover:border-primary/50">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/60 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
                    <span className="ml-1 h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-primary" />
                  </span>
                  <span className="absolute bottom-5 text-[0.58rem] tracking-[0.3em] text-muted-foreground uppercase">
                    {f}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={180} className="glass mt-8 flex flex-wrap items-center justify-between gap-6 p-10">
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

      <section className="py-24 text-center lg:py-32">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="display text-4xl text-balance sm:text-5xl">
            The next story could be yours.
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
