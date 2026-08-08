import { createFileRoute } from "@tanstack/react-router";
import sketchImg from "@/assets/custom-sketch.jpg";
import craftImg from "@/assets/craft-hands.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, RevealText } from "@/components/site/Reveal";
import { CtaRow, LuxAnchor, Ornament, SectionHeading } from "@/components/site/Atoms";
import { GoldParticles } from "@/components/site/Ambience";
import { WA } from "@/lib/site";

export const Route = createFileRoute("/custom-jewellery")({
  head: () => ({
    meta: [
      { title: "Custom Jewellery — Bespoke Commissions in Jaipur" },
      {
        name: "description",
        content:
          "From inspiration to CAD preview to handcrafted delivery — commission a one-of-a-kind piece with Maison Jaipur's design atelier. Share your idea on WhatsApp.",
      },
      { property: "og:title", content: "Custom Jewellery — Maison Jaipur" },
      {
        property: "og:description",
        content: "Bespoke jewellery designed with you and handcrafted in Jaipur.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/custom-jewellery" },
    ],
    links: [{ rel: "canonical", href: "/custom-jewellery" }],
  }),
  component: Custom,
});

const steps = [
  {
    n: "01",
    title: "Share Inspiration",
    text: "A photograph of your mother's necklace, a sketch on a napkin, a colour you cannot forget. Send it on WhatsApp.",
  },
  {
    n: "02",
    title: "Design Discussion",
    text: "We sit together — in the showroom or on a call — and resolve form, stone, weight and budget honestly.",
  },
  {
    n: "03",
    title: "CAD Preview",
    text: "You receive photoreal renders from every angle, and we refine until you say yes without hesitation.",
  },
  {
    n: "04",
    title: "Handcrafted",
    text: "Your karigar is assigned. Gold is drawn, stones are set by hand, and you receive progress photographs.",
  },
  {
    n: "05",
    title: "Delivery",
    text: "Final fitting, certification, hallmark card and the name of the artisan who made it.",
  },
];

function Custom() {
  return (
    <>
      <PageHero
        eyebrow="Bespoke"
        title="Bring us a memory. Leave with an heirloom."
        subtitle="Roughly half of everything we make begins as someone's idea rather than ours. Commissions take eight weeks to eleven months."
        image={sketchImg}
        imageAlt="A jewellery designer sketching an ornate necklace by hand"
      />

      <section className="py-24 lg:py-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeading
            eyebrow="The Commission"
            title="Five steps, no surprises."
            intro="You approve every stage before we move to the next, and the quotation never changes once agreed."
          />

          <div className="mt-20 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            <ol className="relative border-l border-border/70 pl-10">
              {steps.map((s, i) => (
                <Reveal as="li" key={s.n} delay={i * 110} className="relative pb-14 last:pb-0">
                  <span className="absolute top-2 -left-[46px] h-2 w-2 rotate-45 border border-primary bg-background" />
                  <span className="text-[0.58rem] tracking-[0.34em] text-primary uppercase">
                    {s.n}
                  </span>
                  <h3 className="mt-3 font-serif text-3xl">{s.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed font-light text-muted-foreground">
                    {s.text}
                  </p>
                </Reveal>
              ))}
            </ol>

            <Reveal variant="image" className="relative aspect-[3/4] lg:sticky lg:top-32 lg:h-fit">
              <img
                src={craftImg}
                alt="A karigar handcrafting a bespoke gold piece in the Jaipur atelier"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="hairline pointer-events-none absolute inset-5" aria-hidden />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border/50 py-32 text-center lg:py-44">
        <GoldParticles count={20} />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <Ornament />
          <h2 className="display mt-10 text-4xl text-balance sm:text-5xl lg:text-6xl">
            <RevealText text="Share Your Design on WhatsApp" />
          </h2>
          <Reveal delay={200}>
            <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed font-light text-muted-foreground text-pretty">
              Send a photograph or a description. Our design head replies personally, usually
              within a few hours.
            </p>
          </Reveal>
          <Reveal delay={320} className="mt-12 flex flex-wrap justify-center gap-5">
            <LuxAnchor href={WA.custom}>Share Your Design on WhatsApp</LuxAnchor>
          </Reveal>
          <CtaRow
            className="mt-8"
            primaryLabel="Book Design Appointment"
            primaryHref="/contact"
            whatsappHref={WA.appointment}
          />
        </div>
      </section>
    </>
  );
}
