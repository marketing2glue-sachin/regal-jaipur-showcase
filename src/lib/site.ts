/**
 * Central site configuration for Maison Jaipur.
 * Update WHATSAPP_NUMBER here — it is used everywhere on the site.
 * Format: country code + number, digits only (no +, spaces or dashes).
 */
export const WHATSAPP_NUMBER = "919829000000";

export const SITE = {
  name: "Maison Jaipur",
  tagline: "Heritage Jewellery House · Jaipur",
  phoneDisplay: "+91 98290 00000",
  phoneHref: "tel:+919829000000",
  email: "appointments@maisonjaipur.com",
  addressLines: ["Johari Bazaar Road, Pink City", "Jaipur, Rajasthan 302003, India"],
  hours: ["Monday – Saturday · 11:00 – 20:00", "Sunday · By appointment only"],
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  mapsUrl: "https://maps.google.com/?q=Johari+Bazaar+Jaipur",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA = {
  general: whatsappLink(
    "Hello Maison Jaipur, I would like to know more about your collections.",
  ),
  appointment: whatsappLink(
    "Hello Maison Jaipur, I would like to book a private consultation at your Jaipur showroom.",
  ),
  bridal: whatsappLink(
    "Hello Maison Jaipur, I would like to book a bridal consultation.",
  ),
  diamond: whatsappLink(
    "Hello Maison Jaipur, I would like to speak with a diamond expert.",
  ),
  custom: whatsappLink(
    "Hello Maison Jaipur, I would like to share an idea for a custom piece.",
  ),
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Bridal Collection", to: "/bridal-collection" },
  { label: "Diamond Collection", to: "/diamond-collection" },
  { label: "Custom Jewellery", to: "/custom-jewellery" },
  { label: "Our Craftsmanship", to: "/craftsmanship" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
] as const;
