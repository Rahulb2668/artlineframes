import type { Metadata } from "next";
import Image from "next/image";
import { Icon, WhatsAppIcon } from "@/components/Icon";
import { btnPrimary, CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { audiences, clients as realClients, faqs, sampleClients, serviceGroups, sitePhotos } from "@/lib/content";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — Framing, Canvas, Printing & Installation",
  description:
    "Custom picture framing, museum-quality and box framing, jersey framing, canvas stretching, custom oil paintings, large-format printing and artwork installation in Dubai and across the UAE.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const showSample = realClients.length === 0 && process.env.NODE_ENV === "development";
  const clients = showSample ? sampleClients.map((name) => ({ name, logo: undefined })) : realClients;

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Custom art, printing & professional framing"
        text="One team for the whole journey — we create, print, frame, deliver and install. Prices below are starting points; send us your piece for an exact quote."
      />

      {serviceGroups.map((g, i) => (
        <section key={g.id} id={g.id} className={`scroll-mt-20 py-24 ${i % 2 ? "bg-cream" : ""}`}>
          <div className="container-x grid gap-14 lg:grid-cols-[1fr_2fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Icon name={g.icon} className="size-10 text-gold-dark" />
              <p className="eyebrow mt-6">0{i + 1}</p>
              <h2 className="mt-3 font-serif text-4xl font-medium sm:text-5xl">{g.title}</h2>
              <div className="mt-6 h-px w-16 bg-gold" />
              <p className="mt-6 leading-relaxed text-stone">{g.intro}</p>
              {sitePhotos.services[g.id] && (
                <div className="relative mt-8 aspect-[4/3] overflow-hidden">
                  <Image src={sitePhotos.services[g.id]} alt={g.title} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
                </div>
              )}
              <a
                href={whatsappLink(`Hello Artline Frames, I'd like a quote for ${g.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnPrimary} mt-8`}
              >
                <WhatsAppIcon className="size-4" /> Ask for a Quote
              </a>
            </div>
            <div className="grid gap-px self-start bg-sand sm:grid-cols-2">
              {g.services.map((s) => (
                <article key={s.name} className={`flex flex-col p-8 sm:odd:last:col-span-2 ${i % 2 ? "bg-cream" : "bg-ivory"}`}>
                  <h3 className="font-serif text-2xl font-medium">{s.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">{s.description}</p>
                  <p className="mt-6 text-sm text-gold-dark">{s.from ? `Starting from ${s.from}` : "Price on request"}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Who we work with */}
      <section className="bg-charcoal py-24">
        <div className="container-x">
          <SectionHeading
            dark
            eyebrow="Who We Work With"
            title="Trusted by homes, designers & businesses"
            text="Whether it's one frame or a full hotel fit-out, you get the same attention to detail."
          />
          <div className="mt-16 grid gap-px bg-ivory/10 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a) => (
              <div key={a.title} className="bg-charcoal p-8">
                <h3 className="font-serif text-2xl text-gold-light">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">{a.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-ivory/70">
            Interior designer or business?{" "}
            <a
              href={whatsappLink("Hello Artline Frames, I'm interested in trade / bulk pricing for a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-light underline underline-offset-4 hover:text-ivory"
            >
              Ask about trade & bulk pricing
            </a>
          </p>
        </div>
      </section>

      {/* Clients — renders only once real client names are added */}
      {clients.length > 0 && (
        <section className="border-b border-sand py-20">
          <div className="container-x">
            {showSample && (
              <p className="mx-auto mb-8 w-fit border border-dashed border-gold-dark px-4 py-2 text-xs text-gold-dark">
                Draft preview (dev only) — add real clients in src/lib/content.ts
              </p>
            )}
            <SectionHeading eyebrow="Our Clients" title="Brands that trust Artline" />
            <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
              {clients.map((c) => (
                <li key={c.name} className="text-stone">
                  {c.logo ? (
                    <Image src={c.logo} alt={c.name} width={140} height={60} className="h-12 w-auto opacity-70 grayscale" />
                  ) : (
                    <span className="font-serif text-2xl">{c.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-24">
        <div className="container-x max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Questions we're often asked" />
          <div className="mt-14 divide-y divide-sand border-y border-sand">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl">
                  {f.q}
                  <span className="text-2xl text-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-relaxed text-stone">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
