import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import heroImg from "@/assets/hero-jewellery.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { LuxButton, Ornament } from "@/components/site/Atoms";
import { SITE, WA, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Appointments — Maison Jaipur Showroom" },
      {
        name: "description",
        content:
          "Visit our Johari Bazaar showroom in Jaipur or book a private consultation. Send your enquiry directly to us on WhatsApp.",
      },
      { property: "og:title", content: "Contact & Appointments — Maison Jaipur" },
      {
        property: "og:description",
        content: "Showroom timings, location and private appointment enquiries.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const collectionOptions = [
  "Bridal Collection",
  "Diamond Collection",
  "Custom Jewellery",
  "Gold Jewellery",
  "Polki Collection",
  "Kundan Collection",
  "Men's Jewellery",
  "Not sure yet",
];

const occasionOptions = [
  "Wedding",
  "Engagement",
  "Anniversary",
  "Festive / Gifting",
  "Personal Collection",
  "Other",
];

const fieldClass =
  "w-full border-0 border-b border-border bg-transparent py-3 text-base font-light text-foreground outline-none transition-colors duration-500 placeholder:text-muted-foreground/60 focus:border-primary";

const labelClass = "block text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase";

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim() || "—";

    const message = [
      "Hello,",
      "",
      `My Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Collection Interested: ${get("collection")}`,
      `Occasion: ${get("occasion")}`,
      `Preferred Visit Date: ${get("date")}`,
      `Message: ${get("message")}`,
      "",
      "I would like to book a jewellery consultation.",
    ].join("\n");

    setSent(true);
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <PageHero
        eyebrow="Appointments"
        title="The door is always open, by appointment."
        subtitle="Private viewings are unhurried and never obligate a purchase. Tell us a little, and we will prepare the room before you arrive."
        image={heroImg}
        imageAlt="Handcrafted jewellery at the Maison Jaipur showroom"
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-12">
          {/* Details */}
          <div>
            <Reveal className="eyebrow block">The Showroom</Reveal>
            <h2 className="display mt-6 text-4xl sm:text-5xl">Johari Bazaar, Jaipur</h2>

            <div className="mt-12 space-y-9">
              <Reveal className="flex gap-5">
                <MapPin size={18} strokeWidth={1.1} className="mt-1 shrink-0 text-primary" />
                <address className="text-base leading-relaxed font-light text-muted-foreground not-italic">
                  {SITE.addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
              </Reveal>
              <Reveal delay={80} className="flex gap-5">
                <Clock size={18} strokeWidth={1.1} className="mt-1 shrink-0 text-primary" />
                <div className="text-base leading-relaxed font-light text-muted-foreground">
                  {SITE.hours.map((h) => (
                    <span key={h} className="block">
                      {h}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={160} className="flex gap-5">
                <Phone size={18} strokeWidth={1.1} className="mt-1 shrink-0 text-primary" />
                <a
                  href={SITE.phoneHref}
                  className="text-base font-light text-muted-foreground transition-colors duration-500 hover:text-primary"
                >
                  {SITE.phoneDisplay}
                </a>
              </Reveal>
              <Reveal delay={240} className="flex gap-5">
                <Mail size={18} strokeWidth={1.1} className="mt-1 shrink-0 text-primary" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-base font-light text-muted-foreground transition-colors duration-500 hover:text-primary"
                >
                  {SITE.email}
                </a>
              </Reveal>
              <Reveal delay={320} className="flex gap-5">
                <Instagram size={18} strokeWidth={1.1} className="mt-1 shrink-0 text-primary" />
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-base font-light text-muted-foreground transition-colors duration-500 hover:text-primary"
                >
                  @maisonjaipur
                </a>
              </Reveal>
            </div>

            <Reveal delay={200} className="mt-14">
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative block aspect-[4/3] w-full overflow-hidden border border-border/60 bg-secondary/40"
                aria-label="Open Maison Jaipur location in Google Maps"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(color-mix(in oklab, var(--gold) 16%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--gold) 16%, transparent) 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                  }}
                />
                <span className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <MapPin size={26} strokeWidth={1} className="text-primary" />
                  <span className="text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
                    View on Google Maps
                  </span>
                </span>
              </a>
            </Reveal>
          </div>

          {/* Enquiry form */}
          <Reveal delay={120} className="glass p-8 sm:p-12">
            <span className="eyebrow block">Private Enquiry</span>
            <h2 className="display mt-5 text-3xl sm:text-4xl">Request an appointment</h2>
            <p className="mt-4 text-sm leading-relaxed font-light text-muted-foreground">
              Submitting opens WhatsApp with your details already written out — simply press
              send.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-8">
              <div>
                <label className={labelClass} htmlFor="name">
                  Name
                </label>
                <input id="name" name="name" required className={fieldClass} placeholder="Your full name" />
              </div>

              <div>
                <label className={labelClass} htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className={fieldClass}
                  placeholder="+91"
                />
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="occasion">
                    Occasion
                  </label>
                  <select id="occasion" name="occasion" className={`${fieldClass} [&>option]:bg-card`}>
                    {occasionOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="collection">
                    Interested Collection
                  </label>
                  <select
                    id="collection"
                    name="collection"
                    className={`${fieldClass} [&>option]:bg-card`}
                  >
                    {collectionOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="date">
                  Preferred Visit Date
                </label>
                <input id="date" name="date" type="date" className={fieldClass} />
              </div>

              <div>
                <label className={labelClass} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className={`${fieldClass} resize-none`}
                  placeholder="Anything you would like us to prepare"
                />
              </div>

              <div className="flex flex-wrap items-center gap-5 pt-2">
                <LuxButton>Send on WhatsApp</LuxButton>
                {sent ? (
                  <span className="text-[0.62rem] tracking-[0.24em] text-primary uppercase">
                    WhatsApp opened — press send
                  </span>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border/50 py-20 text-center lg:py-28">
        <div className="mx-auto max-w-2xl px-6">
          <Ornament />
          <p className="mt-10 text-base leading-relaxed font-light text-muted-foreground">
            Prefer to simply talk? Message us directly — we reply personally.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={WA.general}
              target="_blank"
              rel="noreferrer noopener"
              className="border border-primary/70 px-9 py-4 text-[0.7rem] tracking-[0.3em] text-primary uppercase transition-colors duration-700 hover:bg-primary hover:text-primary-foreground"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
