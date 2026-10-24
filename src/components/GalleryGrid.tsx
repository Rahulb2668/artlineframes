"use client";

import { useState } from "react";
import { gallery, galleryCategories, type GalleryCategory } from "@/lib/content";
import { ArtFrame } from "./ArtFrame";

export function GalleryGrid() {
  const [filter, setFilter] = useState<GalleryCategory | "All">("All");
  const items = filter === "All" ? gallery : gallery.filter((g) => g.category === filter);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter gallery">
        {(["All", ...galleryCategories] as const).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={`border px-5 py-2 text-sm tracking-wide transition-colors ${
              filter === c ? "border-ink bg-ink text-ivory" : "border-sand text-stone hover:border-gold hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-12 columns-1 gap-8 sm:columns-2 lg:columns-3">
        {items.map((item) => (
          <figure key={item.title} className="mb-10 break-inside-avoid">
            <div className={`group overflow-hidden ${item.src ? "" : "bg-cream p-6 sm:p-8"}`}>
              <ArtFrame
                item={item}
                className={`${item.tall ? "aspect-[3/4]" : "aspect-[4/3]"} transition-transform duration-700 group-hover:scale-105`}
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between gap-4">
              <span className="font-serif text-xl">{item.title}</span>
              <span className="eyebrow shrink-0 !text-[0.65rem]">{item.category}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
