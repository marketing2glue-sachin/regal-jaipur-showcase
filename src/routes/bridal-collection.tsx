import { createFileRoute } from "@tanstack/react-router";
import bridalImg from "@/assets/collection-bridal.jpg";
import heroImg from "@/assets/hero-jewellery.jpg";
import heritageImg from "@/assets/heritage.jpg";
import goldImg from "@/assets/collection-gold.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaRow, SectionHeading } from "@/components/site/Atoms";
import { WA } from "@/lib/site";

export const Route = createFileRoute("/bridal-collection")({
  head: () => ({
    meta: [
      { title: "Bridal Collection — Handcrafted Wedding Jewellery, Jaipur" },
      {
        name: "description",
        content:
          "Polki, kundan and diamond bridal jewellery handcrafted in Jaipur — necklaces, bangles, earrings, maang tikka and complete bridal sets. Book a bridal consultation.",
      },
      { property: "og:title", content: "Bridal Collection — Maison Jaipur" },
      {
        property: "og:description",
        content: "Ceremonial bridal heirlooms handcrafted in the Pink City.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/bridal-collection" },
    ],
    links: [{ rel: "canonical", href: "/bridal-collection" }],
  }),
  component: Bridal,
});

const groups = [
  {
    title: "The Ceremonial Neck",
    image: heroImg,
    items: [
      { name: "Necklaces", text: "Rani haars, chokers and layered temple sets weighted for the mandap." },
      { name: "Bridal Sets", text: "Necklace, earrings, tikka and haath phool composed as one." },
    ],
  },
  {
    title: "The Adorned Hand & Brow",
    image: bridalImg,
    items: [
      { name: "Bangles", text: "Chooda-companion kadas in 22K, engraved and enamelled by hand." },
      { name: "Earrings", text: "Chandbalis and jhumkas balanced to sit without weight." },
      { name: "Maang Tikka", text: "Borla and matha patti, strung to the exact parting." },
    ],
  },
  {
    title: "The Stone Traditions",
    image: heritageImg,
    items: [
      { name: "Polki Bridal", text: "Uncut diamonds set in gold foil, the Jaipur way." },
      { name: "Kundan Bridal", text: "Pure gold pressed around each stone, no solder, no shortcut." },
      { name: "Diamond Bridal", text: "Certified brilliant-cut suites for the reception evening." },
    ],
  },
];

function Bridal() {
  return (
    <>
      <PageHero
        eyebrow="Bridal"
        title="For the one day she will remember forever."
        subtitle="Bridal commissions begin nine to eleven months before the wedding. Every set is drawn for one bride, and never repeated."
        image={bridalImg}
        imageAlt="Gold kundan bridal jewellery set on black velvet"
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeading
            eyebrow="The Bridal Atelier"
            title="Eight disciplines of the wedding trousseau."
            intro="Choose a category to explore, then bring us a photograph, a memory or a fabric swatch. We design from there."
          />
        </div>
      </section>

      {groups.map((group, gi) => (
        <section
          key={group.title}
          className={gi % 2 === 1 ? "border-y border-border/50 bg-card py-20 lg:py-28" : "py-20 lg:py-28"}
        >
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <Reveal
                variant="image"
                className={`relative aspect-[4/3] ${gi % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <img
                  src={group.image}
                  alt={`${group.title} bridal jewellery by Maison Jaipur`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="hairline pointer-events-none absolute inset-5" aria-hidden />
              </Reveal>

              <div>
                <Reveal className="eyebrow block">{`0${gi + 1} — Bridal`}</Reveal>
                <h2 className="display mt-5 text-4xl sm:text-5xl">{group.title}</h2>
                <ul className="mt-10 space-y-8">
                  {group.items.map((item, i) => (
                    <Reveal as="li" key={item.name} delay={i * 90} className="border-t border-border/60 pt-6">
                      <h3 className="font-serif text-2xl">{item.name}</h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed font-light text-muted-foreground">
                        {item.text}
                      </p>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>

            <CtaRow
              className="mt-16 lg:justify-start"
              primaryLabel="Book Bridal Consultation"
              primaryHref="/contact"
              whatsappHref={WA.bridal}
            />
          </div>
        </section>
      ))}

      <section className="relative overflow-hidden border-t border-border/50 py-28 text-center lg:py-36">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal variant="image" className="mx-auto mb-14 aspect-[16/7] w-full">
            <img
              src={goldImg}
              alt="Gold bridal bangles resting on ivory silk"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <h2 className="display text-4xl text-balance sm:text-5xl">
            Begin the trousseau conversation.
          </h2>
          <CtaRow
            className="mt-12"
            primaryLabel="Book Bridal Consultation"
            primaryHref="/contact"
            whatsappHref={WA.bridal}
          />
        </div>
      </section>
    </>
  );
}
