// Central business details. Everything marked TODO must be confirmed with the client before launch.

export const site = {
  name: "Artline Frames",
  legalName: "Artline Frames", // TODO: trade licence name if different
  url: "https://artlineframes.com",
  tagline: "Your Vision. Our Craftsmanship.",
  description:
    "Bespoke picture framing, canvas stretching, custom oil paintings and large-format printing in Dubai. Free doorstep collection, delivery and professional installation across the UAE.",

  // Contact — TODO: replace with the real numbers (international format, digits only for WhatsApp)
  whatsapp: "971500000000",
  phone: "+971 50 000 0000",
  email: "hello@artlineframes.com", // TODO: confirm mailbox exists
  address: "Dubai, United Arab Emirates", // TODO: full shop / workshop address
  mapsUrl: "https://maps.google.com/?q=Artline+Frames+Dubai", // TODO: Google Business profile link
  hours: [
    { days: "Saturday – Thursday", time: "9:00 AM – 9:00 PM" }, // TODO: confirm
    { days: "Friday", time: "2:00 PM – 9:00 PM" },
  ],
  social: {
    instagram: "", // TODO: e.g. https://instagram.com/artlineframes
    facebook: "",
    tiktok: "",
  },

  // Selling points — TODO: confirm numbers
  yearsExperience: "10+",
  turnaround: "48–72 hours",
  deliveryNote: "Free collection & delivery across the UAE",

  // Keep false until real customer reviews are added in src/lib/content.ts
  showTestimonials: false,
};

export function whatsappLink(message = "Hello Artline Frames, I'd like a quote.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const phoneHref = `tel:${site.phone.replace(/\s/g, "")}`;
