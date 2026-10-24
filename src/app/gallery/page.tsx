import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Gallery — Framing, Canvas & Art Work",
  description:
    "Browse custom picture framing, canvas stretching, oil paintings, jersey framing and art installations by Artline Frames in Dubai.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A few pieces we're proud of"
        text="Every frame is made to order. Browse our recent framing, canvas, painting and installation work for homes, designers and businesses across the UAE."
      />
      <section className="py-20">
        <div className="container-x">
          <GalleryGrid />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
