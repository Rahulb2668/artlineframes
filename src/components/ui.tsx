import Link from "next/link";
import { whatsappLink } from "@/lib/site";
import { Icon, WhatsAppIcon } from "./Icon";

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 bg-gold-gradient px-7 py-3.5 text-sm font-medium tracking-wide text-ink shadow-md shadow-gold/30 transition hover:brightness-105";
export const btnOutline =
  "inline-flex items-center justify-center gap-2 border border-ink/80 px-7 py-3.5 text-sm tracking-wide text-ink transition-colors hover:bg-ink hover:text-ivory";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${dark ? "!text-gold-light" : ""}`}>{eyebrow}</p>
      <h2 className={`mt-4 font-serif text-4xl leading-tight font-medium sm:text-5xl ${dark ? "text-ivory" : "text-ink"}`}>
        {title}
      </h2>
      <div className={`mt-6 h-px w-16 bg-gold ${align === "center" ? "mx-auto" : ""}`} />
      {text && <p className={`mt-6 leading-relaxed ${dark ? "text-ivory/70" : "text-stone"}`}>{text}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="border-b border-sand bg-cream">
      <div className="container-x py-20 text-center sm:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mx-auto mt-5 max-w-3xl font-serif text-5xl leading-[1.05] font-medium sm:text-6xl">{title}</h1>
        <div className="mx-auto mt-7 h-px w-16 bg-gold" />
        <p className="mx-auto mt-7 max-w-2xl leading-relaxed text-stone">{text}</p>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Have something special to frame?",
  text = "Send us a photo on WhatsApp — we'll reply with frame ideas and a quote, usually within the hour.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-charcoal">
      <div className="container-x flex flex-col items-center gap-8 py-20 text-center">
        <h2 className="max-w-2xl font-serif text-4xl font-medium text-ivory sm:text-5xl">{title}</h2>
        <p className="max-w-xl text-ivory/70">{text}</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
            <WhatsAppIcon className="size-4" /> Get a Free Quote
          </a>
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center gap-2 border border-gold-light/60 px-7 py-3.5 text-sm tracking-wide text-gold-light transition-colors hover:bg-gold-light hover:text-ink"
          >
            View Our Work <Icon name="arrow" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
