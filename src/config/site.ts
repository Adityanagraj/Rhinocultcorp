/**
 * Central site configuration.
 * Swap these placeholder values for your real business details.
 * The WhatsApp number must be in international format WITHOUT "+", spaces, or dashes.
 * Example: India number +91 98765 43210  ->  "919876543210"
 */
export const site = {
  name: "Rhinocult Corporate",
  tagline: "Thoughtful Gifts, Stronger Connections",
  description:
    "Rhinocult Corporate helps brands source, customize, and deliver premium corporate gifts and branded merchandise from drinkware and tech to travel and lifestyle essentials, delivered on time, every time.",
  keywords: [
    "corporate gifting",
    "branded merchandise",
    "custom corporate gifts",
    "promotional products",
    "employee gifts",
    "client gifts",
  ],
  url: "https://example.com",

  // Contact details (placeholders)
  email: "info@rhinocult.com",
  phone: "+91 63629 90365",
  address: "1838, JAYAMAHAL, TALUK OFFICE ROAD, OPPOSITE TO DEEPASRI HOSTEL, Nelamangala, Bengaluru Rural, Karnataka, 562123",

  // WhatsApp: international format, digits only, no "+"
  whatsappNumber: "6362990365",
  whatsappMessage: "Hi! I found your website and would like to know more about your services. Can I get quote on the Preimium stanley mugs or could you please give me a callback",

  socials: {
    linkedin: "https://in.linkedin.com/company/rhinocult",
    twitter: "https://twitter.com",
    instagram: "https://www.instagram.com/rhinocultindia"
  },
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Why us", href: "#why-us" },
  { label: "Catalogue", href: "#catalogues" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

/** Builds a click-to-chat WhatsApp URL with a prefilled message. */
export function buildWhatsAppUrl(message: string = site.whatsappMessage): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
