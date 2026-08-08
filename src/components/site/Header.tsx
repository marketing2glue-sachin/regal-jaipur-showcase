import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, WA } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,padding,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        scrolled
          ? "border-b border-border/70 bg-background/80 py-4 backdrop-blur-xl"
          : "border-b border-transparent py-7",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <Link to="/" className="group flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-serif text-xl tracking-[0.42em] text-foreground uppercase transition-colors duration-500 group-hover:text-primary">
            Maison
          </span>
          <span className="mt-1 text-[0.55rem] tracking-[0.5em] text-primary/80 uppercase">
            Jaipur
          </span>
        </Link>

        <nav className="hidden items-center gap-8 xl:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-primary" }}
              className="relative text-[0.65rem] tracking-[0.24em] text-foreground/75 uppercase transition-colors duration-500 hover:text-primary after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WA.general}
            target="_blank"
            rel="noreferrer noopener"
            className="border border-primary/60 px-5 py-2.5 text-[0.62rem] tracking-[0.26em] text-primary uppercase transition-colors duration-500 hover:bg-primary hover:text-primary-foreground"
          >
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-primary transition-opacity duration-300 hover:opacity-70 xl:hidden"
        >
          {open ? <X size={22} strokeWidth={1} /> : <Menu size={22} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile / tablet overlay menu */}
      <div
        className={cn(
          "fixed inset-0 top-0 -z-10 flex flex-col justify-center bg-background/98 px-8 backdrop-blur-2xl transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] xl:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col gap-6" aria-label="Mobile">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${open ? 120 + i * 55 : 0}ms` }}
              className={cn(
                "font-serif text-3xl text-foreground transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-primary",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WA.general}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 self-start border border-primary/60 px-7 py-3 text-[0.65rem] tracking-[0.3em] text-primary uppercase"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
