/**
 * Catalogues shown in the Offerings section.
 *
 * HOW TO ADD YOUR REAL CATALOGUES:
 * 1. Upload your PDF to Google Drive.
 * 2. Set its sharing to "Anyone with the link".
 * 3. Copy the share link and paste it into `driveUrl` below.
 *    A normal Drive link like
 *      https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 *    works fine and opens the PDF preview in a new tab when clicked.
 *
 * `accent` picks the card's gradient tint: "brand" | "cyan" | "violet".
 */
export type Catalogue = {
  title: string;
  description: string;
  /** Short label shown on the thumbnail, e.g. "2026 · PDF". */
  badge: string;
  driveUrl: string;
  accent: "brand" | "cyan" | "violet";
  /** Optional thumbnail image (path under /public). Falls back to an icon tile. */
  image?: string;
};

export const catalogues: Catalogue[] = [
  {
    title: "Tech Gadgets",
    description:
      "Our full range of brandable tech gadgets and wearables — power banks, earbuds, chargers, and more.",
    badge: "Gadgets · Drive",
    driveUrl: "https://drive.google.com/file/d/10XPGPPEbsNx3YObtTMiXcHIHrtH2-71j/view?usp=sharing",
    accent: "cyan",
    image: "/catalogue-tech-gadgets.png",
  },
  {
    title: "Pens",
    description:
      "Premium metal ballpoint and rollerball pens in matte and brushed finishes — perfect for custom branding.",
    badge: "Pens · PDF",
    driveUrl: "https://drive.google.com/file/d/1zBlKaVBtiB5zIRoLl9em3dDZNPw_k2ia/view?usp=sharing",
    accent: "brand",
    image: "/catalogue-pens.png",
  },
  {
    title: "Bottles",
    description:
      "Insulated stainless steel bottles and tumblers in premium matte finishes — keep drinks hot or cold, on brand.",
    badge: "Bottles · PDF",
    driveUrl: "https://drive.google.com/file/d/15-HGEMVcb6aFKp9vyyMkKFIH686iPrXB/view?usp=sharing",
    accent: "violet",
    image: "/catalogue-bottles.png",
  },
  {
    title: "Corporate Gift Kits",
    description:
      "Curated welcome and gifting kits — notebooks, pens, drinkware, and tech, beautifully packaged and ready to brand.",
    badge: "Gift Kits · PDF",
    driveUrl: "https://drive.google.com/file/d/1tg_3-kwRkj0-VsIyr9i9HL0lbwnKJlME/view?usp=sharing",
    accent: "cyan",
    image: "/catalogue-gift-kits.png",
  },
  {
    title: "Gourmet Food",
    description:
      "Gourmet hampers with artisanal chocolates, cookies, nuts, and treats — a delicious, memorable gift.",
    badge: "Gourmet · PDF",
    driveUrl: "https://drive.google.com/file/d/1XCLNMrcMosaGABms8QjCGSyA3G29L4TR/view?usp=sharing",
    accent: "brand",
    image: "/catalogue-gourmet.png",
  },
  {
    title: "Sustainable Products & Plants",
    description:
      "Eco-friendly gifts — bamboo, cork, and jute essentials plus desk plants for a greener brand impression.",
    badge: "Sustainable · PDF",
    driveUrl: "https://drive.google.com/file/d/1kI984ReGcTZ1O9DQyGTUT8jzOSgngQvq/view?usp=sharing",
    accent: "cyan",
    image: "/catalogue-sustainable.png",
  },
  
];
