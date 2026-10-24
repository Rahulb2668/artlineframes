import Image from "next/image";
import type { GalleryItem } from "@/lib/content";

// Placeholder "artworks" drawn with CSS so the layout looks finished before real photos arrive.
const artStyles = [
  "radial-gradient(circle at 50% 38%, #e9d7b8 0 16%, transparent 17%), linear-gradient(180deg, #6d5a45 0%, #3b2f25 100%)",
  "linear-gradient(180deg, #f1d6a8 0%, #e3a86b 38%, #c27a45 55%, #8d5a36 70%, #5a3a24 100%)",
  "linear-gradient(90deg, transparent 46%, #f6f1e7 46% 54%, transparent 54%), linear-gradient(180deg, #1f3c6e 0%, #1a2f55 100%)",
  "conic-gradient(from 210deg at 30% 60%, #c9a66b, #e8dfd0, #3a3a3a, #c9a66b)",
  "linear-gradient(135deg, #2d2a26 0 30%, #b08d57 30% 34%, #e9e2d4 34% 70%, #6a6257 70%)",
  "radial-gradient(ellipse at 30% 70%, #9bb3a4 0 25%, transparent 26%), radial-gradient(ellipse at 70% 30%, #d9c7a6 0 30%, transparent 31%), linear-gradient(#efe9de, #e2d8c6)",
  "linear-gradient(160deg, #e7dccb 0%, #cbb89a 50%, #a48d6b 100%)",
  "radial-gradient(circle at 50% 35%, #d9b99a 0 14%, transparent 15%), radial-gradient(circle at 30% 45%, #c8a383 0 10%, transparent 11%), radial-gradient(circle at 70% 45%, #c8a383 0 10%, transparent 11%), linear-gradient(#3d3327, #241e17)",
  "radial-gradient(circle at 35% 50%, #d4af37 0 12%, transparent 13%), radial-gradient(circle at 65% 50%, #c0c0c0 0 12%, transparent 13%), linear-gradient(#1e3a2b, #13261c)",
  "linear-gradient(120deg, #c96f4a 0 33%, #e9c46a 33% 66%, #2a9d8f 66%)",
  "linear-gradient(90deg, #b08d57 0 2%, transparent 2% 49%, #b08d57 49% 51%, transparent 51% 98%, #b08d57 98%), linear-gradient(#efe6d6, #d9cbb2)",
  "radial-gradient(ellipse at 50% 50%, transparent 0 30%, #1d1a16 31% 33%, transparent 34%), linear-gradient(#f4efe6, #e8dece)",
];

const frameStyles: Record<GalleryItem["frame"], string> = {
  gold: "p-3 bg-gold-gradient shadow-[inset_0_0_0_1px_rgba(0,0,0,.25)]",
  black: "p-2.5 bg-[#1b1917]",
  walnut: "p-3 bg-[linear-gradient(135deg,#5b3d27,#7a5236,#4a3020)]",
  white: "p-2.5 bg-[#fbfaf7] ring-1 ring-sand",
  box: "p-4 bg-[#111] shadow-[inset_0_0_14px_rgba(0,0,0,.9)]",
};

export function ArtFrame({
  item,
  className = "",
  sizes = "(min-width: 1024px) 33vw, 50vw",
}: {
  item: Pick<GalleryItem, "frame" | "art" | "src" | "title">;
  className?: string;
  sizes?: string;
}) {
  if (item.src) {
    return (
      <div className={`relative overflow-hidden bg-cream ${className}`}>
        <Image src={item.src} alt={item.title} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }

  return (
    <div className={`flex ${frameStyles[item.frame]} shadow-xl shadow-ink/15 ${className}`} role="img" aria-label={item.title}>
      <div className="flex flex-1 bg-[#fbf8f2] p-[9%] shadow-[inset_0_2px_6px_rgba(0,0,0,.18)]">
        <div className="flex-1" style={{ background: artStyles[item.art % artStyles.length] }} />
      </div>
    </div>
  );
}
