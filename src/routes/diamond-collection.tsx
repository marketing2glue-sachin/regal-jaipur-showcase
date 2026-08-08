import { createFileRoute } from "@tanstack/react-router";
import diamondImg from "@/assets/collection-diamond.jpg";
import mensImg from "@/assets/collection-mens.jpg";
import goldImg from "@/assets/collection-gold.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaRow, SectionHeading } from "@/components/site/Atoms";
import { WA } from "@/lib/site";

export const Route = createFileRoute("/diamond-collection")({
  head: () => ({
    meta: [
      { title: "Diamond Collection — Certified Diamond Jewellery, Jaipur" },
      {
        name: "description",
        content:
          "Certified diamond rings, solitaires, necklaces, earrings, bracelets and wedding bands, handcrafted in Jaipur. Speak with a diamond expert.",
      },
      { property: "og:title", content: "Diamond Collection — Maison Jaipur" },
      {
        property: "og:description",
        content: "IGI and GIA certified diamonds, set by hand in our Jaipur atelier.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/diamond-collection" },
    ],
    links: [{ rel: "canonical", href: "/diamond-collection" }],
  }),
  component: Diamonds,
});

const catalogue = [
  {
    name: "Diamond Rings",
    text: "Halo, three-stone and vintage-inspired settings in platinum or 18K gold.",
    image: diamondImg,
  },
  {
    name: "Solitaires",
    text: "0.30ct to 5ct, each stone selected in person and IGI certified.",
    image: diamondImg,
  },
  {
    name: "Diamond Necklaces",
    text: "Rivière, pendant and bib forms, articulated to move with the wearer.",
    image: goldImg,
  },
  {
    name: "Diamond Earrings",
    text: "Studs, drops and chandeliers balanced for a full evening of wear.",
    image: mensImg,
  },
  {
    name: "Bracelets",
    text: "Tennis lines and cuff kadas, each stone matched for colour and cut.",
    image: mensImg,
  },
  {
    name: "Wedding Bands",
    text: "Paired bands finished together so they age at the same pace.",
    image: goldImg,
  },
];

const criteria = [
  { k: "Cut", v: "Excellent / Ideal only" },
  { k: "Colour", v: "D – G" },
  { k: "Clarity", v: "VVS – VS" },
  { k: "Certification", v: "IGI · GIA" },
];

function Diamonds() {
  return (
    <>
      <PageHero
        eyebrow="Diamonds"
        title="Chosen by eye. Confirmed by certificate."
        subtitle="Our buyer selects loose stones in person. Nothing enters the house on a photograph, and nothing leaves it without paperwork."
        image={diamondImg}
        imageAlt="Solitaire diamond ring in gold on black velvet"
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeading
            eyebrow="The Catalogue"
            title="Six forms, one standard of light."
            intro="Every piece below is made to order in our atelier. Nothing is stocked, so the stone is always chosen for you."
          />

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {catalogue.map((c, i) => (
              <Reveal key={c.name} delay={i * 90} className="group border border-border/60">
                <div className="sparkle relative aspect-[4/3] overflow-hidden">
                  <img
                    src={c.image}
                    alt={`${c.name} by Maison Jaipur`}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-75 transition-[transform,opacity] duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl">{c.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed font-light text-muted-foreground">
                    {c.text}
                  </p>
                  <a
                    href={WA.diamond}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-6 inline-block text-[0.6rem] tracking-[0.28em] text-primary uppercase transition-opacity duration-500 hover:opacity-70"
                  >
                    Speak with Diamond Expert →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <CtaRow
            className="mt-16"
            primaryLabel="Speak with Diamond Expert"
            primaryHref="/contact"
            whatsappHref={WA.diamond}
          />
        </div>
      </section>

      <section className="border-y border-border/50 bg-card py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeading eyebrow="Our Threshold" title="What we will not buy." />
          <div className="mt-16 grid gap-px border border-border/60 sm:grid-cols-2 lg:grid-cols-4">
            {criteria.map((c, i) => (
              <Reveal key={c.k} delay={i * 80} className="glass p-10 text-center">
                <span className="text-[0.58rem] tracking-[0.34em] text-primary uppercase">
                  {c.k}
                </span>
                <span className="mt-4 block font-serif text-2xl">{c.v}</span>
              </Reveal>
            ))}
          </div>
          <CtaRow
            className="mt-16"
            primaryLabel="Book Appointment"
            primaryHref="/contact"
            whatsappHref={WA.diamond}
          />
        </div>
      </section>
    </>
  );
}
