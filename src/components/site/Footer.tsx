import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin } from "lucide-react";
import { NAV_LINKS, SITE, WA } from "@/lib/site";

const collections = [
  { label: "Bridal Collection", to: "/bridal-collection" },
  { label: "Diamond Collection", to: "/diamond-collection" },
  { label: "Custom Jewellery", to: "/custom-jewellery" },
  { label: "Our Craftsmanship", to: "/craftsmanship" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-card">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-serif text-xl tracking-[0.42em] uppercase">Maison</span>
            <span className="mt-2 block text-[0.55rem] tracking-[0.5em] text-primary/80 uppercase">
              Jaipur
            </span>
            <p className="mt-7 max-w-xs text-sm leading-relaxed font-light text-muted-foreground">
              A heritage jewellery house in the Pink City, crafting heirlooms by hand since
              1947.
            </p>
          </div>

          <div>
            <h3 className="eyebrow">Quick Links</h3>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm font-light text-muted-foreground transition-colors duration-500 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow">Collections</h3>
            <ul className="mt-6 space-y-3">
              {collections.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm font-light text-muted-foreground transition-colors duration-500 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow">The Showroom</h3>
            <address className="mt-6 space-y-2 text-sm leading-relaxed font-light text-muted-foreground not-italic">
              {SITE.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <a
                href={SITE.phoneHref}
                className="block transition-colors duration-500 hover:text-primary"
              >
                {SITE.phoneDisplay}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="block transition-colors duration-500 hover:text-primary"
              >
                {SITE.email}
              </a>
            </address>
            <div className="mt-6 flex items-center gap-5">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="text-muted-foreground transition-colors duration-500 hover:text-primary"
              >
                <Instagram size={17} strokeWidth={1.2} />
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook"
                className="text-muted-foreground transition-colors duration-500 hover:text-primary"
              >
                <Facebook size={17} strokeWidth={1.2} />
              </a>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Location"
                className="text-muted-foreground transition-colors duration-500 hover:text-primary"
              >
                <MapPin size={17} strokeWidth={1.2} />
              </a>
              <a
                href={WA.general}
                target="_blank"
                rel="noreferrer noopener"
                className="text-[0.62rem] tracking-[0.26em] text-primary uppercase transition-opacity duration-500 hover:opacity-70"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="rule-gold my-14" />

        <div className="flex flex-col items-center justify-between gap-4 text-[0.62rem] tracking-[0.22em] text-muted-foreground/70 uppercase sm:flex-row">
          <span>© {new Date().getFullYear()} Maison Jaipur</span>
          <span>Handcrafted in the Pink City</span>
        </div>
      </div>
    </footer>
  );
}
