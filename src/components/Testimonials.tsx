import { testimonials } from "@/lib/content";
import { site } from "@/lib/site";
import { SectionHeading } from "./ui";

// Hidden on the live site until site.showTestimonials is true; visible in `npm run dev` for layout review.
export function Testimonials() {
  const isDev = process.env.NODE_ENV === "development";
  if (!site.showTestimonials && !isDev) return null;

  return (
    <section className="bg-cream py-24">
      <div className="container-x">
        {!site.showTestimonials && (
          <p className="mx-auto mb-8 w-fit border border-dashed border-gold-dark px-4 py-2 text-xs text-gold-dark">
            Draft preview (dev only) — replace with real reviews in src/lib/content.ts, then set showTestimonials: true
          </p>
        )}
        <SectionHeading eyebrow="Testimonials" title="Loved by homes & businesses across the UAE" />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="flex flex-col border border-sand bg-ivory p-8">
              <div className="text-gold" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote className="mt-5 flex-1 font-serif text-xl leading-relaxed text-ink">“{t.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-sand pt-4 text-sm">
                <span className="font-medium text-ink">{t.name}</span>
                <span className="text-stone"> · {t.area}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
