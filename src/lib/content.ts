// Page content. Prices are "starting from" in AED — TODO: confirm every price with the client.

import { site } from "./site";

export type Service = {
  name: string;
  description: string;
  from?: string;
};

export type ServiceGroup = {
  id: string;
  title: string;
  intro: string;
  icon: "brush" | "frame" | "truck";
  services: Service[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "canvas-artwork",
    title: "Canvas & Artwork",
    intro: "From a blank canvas to a finished masterpiece, created and printed in-house.",
    icon: "brush",
    services: [
      {
        name: "Custom Canvas Stretching",
        description: "Hand-stretched on kiln-dried wooden bars for a tight, gallery-ready finish that lasts.",
        from: "AED 120",
      },
      {
        name: "Custom Oil Paintings",
        description: "Portraits, landscapes and abstracts painted by our professional artists from your photo or idea.",
        from: "AED 950",
      },
      {
        name: "Large-Format Printing",
        description: "Fine-art giclée prints on canvas, photo paper and fabric — up to wall-sized pieces.",
        from: "AED 60",
      },
      {
        name: "Customised Printing Solutions",
        description: "Bespoke prints for homes, offices, events and branded spaces, matched to your colours.",
      },
    ],
  },
  {
    id: "framing",
    title: "Professional Framing",
    intro: "Every frame is cut, joined and finished by hand in our Dubai workshop.",
    icon: "frame",
    services: [
      {
        name: "Custom Picture & Artwork Framing",
        description: "Hundreds of mouldings — gold, wood, black, minimalist and ornate — cut to your exact size.",
        from: "AED 95",
      },
      {
        name: "Museum-Quality Framing",
        description: "Acid-free mounts, conservation glass and archival methods that protect valuable art for decades.",
        from: "AED 350",
      },
      {
        name: "Box Framing",
        description: "Deep shadow-box frames for 3D objects, keepsakes, medals, flowers and collectibles.",
        from: "AED 250",
      },
      {
        name: "T-Shirt & Memorabilia Framing",
        description: "Signed jerseys, shirts, boots and match memorabilia mounted and framed like a trophy.",
        from: "AED 450",
      },
      {
        name: "Framing with Glass & Mounting",
        description: "Clear, anti-reflective or museum glass with single, double or float mounts.",
      },
      {
        name: "Frame & Mount Selection",
        description: "Not sure what suits your piece? We help you choose the perfect frame and mount colour.",
      },
    ],
  },
  {
    id: "installation",
    title: "Installation & Convenience",
    intro: "We come to you — collection, delivery and hanging handled end to end.",
    icon: "truck",
    services: [
      {
        name: "Professional Artwork Installation",
        description: "Level, secure hanging on any wall — single pieces, gallery walls and large commercial installs.",
        from: "AED 150",
      },
      {
        name: "Doorstep Collection & Delivery",
        description: "We collect your artwork and return it framed, carefully packed and protected.",
      },
      {
        name: "Customised Service at Your Doorstep",
        description: "Bring frame samples to your home or office so you can choose in the space where it will hang.",
      },
    ],
  },
];

export const usps = [
  { icon: "award", title: "Years of Experience", key: "years" },
  { icon: "clock", title: "Fast Turnaround", key: "turnaround" },
  { icon: "truck", title: "Free Collection & Delivery", key: "delivery" },
  { icon: "brush", title: "In-House Artists & Workshop", key: "workshop" },
] as const;

export const audiences = [
  {
    title: "Homes & Villas",
    text: "Family portraits, wedding photos, gifts and personal art — framed to suit your interior.",
  },
  {
    title: "Interior Designers & Fit-Out",
    text: "Reliable trade partner for projects of any size, with samples, consistent finishes and on-time installation.",
  },
  {
    title: "Hotels, Offices & Restaurants",
    text: "Commercial art supply, bulk framing and installation for hospitality and corporate spaces.",
  },
  {
    title: "Sports Fans & Collectors",
    text: "Jerseys, signed memorabilia, medals and certificates displayed the way they deserve.",
  },
];

export const steps = [
  { title: "Send a photo", text: "Share your artwork, photo or idea on WhatsApp and get a quote." },
  { title: "We collect", text: "Free doorstep collection, or visit our workshop with samples." },
  { title: "We craft", text: "Our artists and framers create your piece by hand in Dubai." },
  { title: "Deliver & install", text: "Delivered to your door and hung perfectly on your wall." },
];

export type GalleryCategory = "Framing" | "Canvas" | "Oil Paintings" | "Memorabilia" | "Printing" | "Installation";

export type GalleryItem = {
  title: string;
  category: GalleryCategory;
  // Put real photos in /public/gallery and set src, e.g. "/gallery/wedding-portrait.jpg"
  src?: string;
  frame: "gold" | "black" | "walnut" | "white" | "box";
  art: number; // placeholder artwork style, used until src is set
  tall?: boolean;
};

export const galleryCategories: GalleryCategory[] = [
  "Framing",
  "Canvas",
  "Oil Paintings",
  "Memorabilia",
  "Printing",
  "Installation",
];

// TODO: these are free Pexels stock photos (pexels.com/license) for preview only —
// replace with real photos of Artline work before launch.
export const gallery: GalleryItem[] = [
  { title: "Gilded frames on stone", category: "Framing", src: "/gallery/gold-frames-stone-wall.jpg", frame: "gold", art: 0, tall: true },
  { title: "Portrait commission in oil", category: "Oil Paintings", src: "/gallery/oil-portrait-commission.jpg", frame: "walnut", art: 1 },
  { title: "Jersey & memorabilia wall", category: "Memorabilia", src: "/gallery/jersey-memorabilia-wall.jpg", frame: "box", art: 2, tall: true },
  { title: "Stretched canvas, studio", category: "Canvas", src: "/gallery/canvas-studio.jpg", frame: "white", art: 3 },
  { title: "Gallery wall installation", category: "Installation", src: "/gallery/gallery-wall-installation.jpg", frame: "black", art: 4 },
  { title: "Fine-art photography prints", category: "Printing", src: "/gallery/fine-art-photo-prints.jpg", frame: "black", art: 5 },
  { title: "Double mount, black frames", category: "Framing", src: "/gallery/double-mount-black-frames.jpg", frame: "white", art: 6 },
  { title: "Seascape commission", category: "Oil Paintings", src: "/gallery/seascape-oil-painting.jpg", frame: "gold", art: 7, tall: true },
  { title: "Pressed flower box frames", category: "Memorabilia", src: "/gallery/pressed-flower-box-frames.jpg", frame: "box", art: 8 },
  { title: "Palette & canvas", category: "Canvas", src: "/gallery/palette-and-canvas.jpg", frame: "walnut", art: 9, tall: true },
  { title: "Gallery hallway installation", category: "Installation", src: "/gallery/gallery-hallway-installation.jpg", frame: "gold", art: 10 },
  { title: "Large-format printing", category: "Printing", src: "/gallery/large-format-printing.jpg", frame: "walnut", art: 11 },
  { title: "Ornate gilded moulding", category: "Framing", src: "/gallery/ornate-gilded-frame.jpg", frame: "gold", art: 0 },
  { title: "Mixed media framing", category: "Framing", src: "/gallery/mixed-media-framing.jpg", frame: "white", art: 6, tall: true },
  { title: "Café feature wall", category: "Installation", src: "/gallery/cafe-feature-wall.jpg", frame: "black", art: 4 },
  { title: "Custom fabric printing", category: "Printing", src: "/gallery/fabric-printing.jpg", frame: "black", art: 5 },
];

// Extra photos used around the site (also Pexels placeholders)
export const sitePhotos = {
  heroMain: "/gallery/gold-frames-stone-wall.jpg",
  heroSecond: "/gallery/oil-portrait-commission.jpg",
  heroThird: "/gallery/double-mount-black-frames.jpg",
  about: "/gallery/frame-corner-detail.jpg",
  workshop: "/gallery/framing-workshop.jpg",
  workshop2: "/gallery/frames-in-studio.jpg",
  artist: "/gallery/portrait-artist.jpg",
  livingRoom: "/gallery/living-room-art.jpg",
  services: {
    "canvas-artwork": "/gallery/seascape-oil-painting.jpg",
    framing: "/gallery/framed-collection.jpg",
    installation: "/gallery/gallery-wall-installation.jpg",
  } as Record<string, string>,
};

// Draft wording for layout only. Do NOT publish — set site.showTestimonials = true
// only after replacing these with genuine customer reviews (with their permission).
export const testimonials = [
  {
    quote:
      "They collected our wedding photos from home and brought them back beautifully framed in three days. The gold frame looks stunning in our living room.",
    name: "Sarah M.",
    area: "Dubai Marina",
  },
  {
    quote:
      "We use Artline for our villa projects. Consistent quality, great frame selection and the installation team is always on time.",
    name: "Omar K.",
    area: "Interior Designer, Jumeirah",
  },
  {
    quote:
      "My signed jersey is now the centrepiece of my office. The box frame and mounting are perfect.",
    name: "Rahul P.",
    area: "Business Bay",
  },
];

// Sample names shown only in `npm run dev` so the Clients section can be previewed.
export const sampleClients = ["Client One", "Hotel Two", "Design Studio Three", "Fit-Out Co. Four", "Restaurant Five"];

// Real client names / logos only. The section is hidden while this list is empty.
// e.g. { name: "Hotel Name", logo: "/clients/hotel.png" }
export const clients: { name: string; logo?: string }[] = [];

export const faqs = [
  {
    q: "How much does framing cost in Dubai?",
    a: "It depends on size, moulding, glass and mount. Our custom framing starts from AED 95. Send a photo with the approximate size on WhatsApp for an exact quote within minutes.",
  },
  {
    q: "Do you collect and deliver?",
    a: "Yes — we offer free doorstep collection and delivery across the UAE, and professional installation if you'd like us to hang it.",
  },
  {
    q: "How long does it take?",
    a: `Most framing orders are ready in ${site.turnaround}. Custom oil paintings and large projects take longer — we'll give you a clear timeline with your quote.`,
  },
  {
    q: "Can you frame jerseys and 3D objects?",
    a: "Absolutely. We specialise in shadow-box and memorabilia framing for jerseys, medals, boots, keepsakes and more.",
  },
  {
    q: "Do you work with interior designers and businesses?",
    a: "Yes. We supply and install art for villas, hotels, offices and restaurants, with trade pricing for repeat and bulk orders.",
  },
];
