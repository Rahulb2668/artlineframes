import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { sitePhotos } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Dubai Framing & Art Workshop",
  description:
    "Meet Artline Frames — a Dubai framing and art workshop with in-house artists and framers, serving homes, interior designers and businesses across the UAE.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: "frame",
    title: "Craftsmanship",
    text: "Every frame is measured, cut, joined and finished by hand. We don't rush, and we don't cut corners.",
  },
  {
    icon: "award",
    title: "Quality Materials",
    text: "Premium mouldings, acid-free mounts and conservation glass that protect your art for years to come.",
  },
  {
    icon: "truck",
    title: "Convenience",
    text: "Collection, delivery and installation at your door — so beautiful framing never becomes a chore.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Framing the stories that matter"
        text="Artline Frames is a Dubai-based studio for custom art, printing and professional framing — built on craftsmanship, honest advice and service that comes to you."
      />

      {/* TODO: replace with the founder's real story (who, when, why) */}
      <section className="py-24">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 translate-x-5 translate-y-5 border border-gold" />
            <div className="absolute inset-0 overflow-hidden">
              <Image src={sitePhotos.workshop2} alt="Picture frames in the Artline studio" fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-6 flex size-32 items-center justify-center bg-charcoal p-4 shadow-xl">
              <Image src="/brand/logo-gold.png" alt="Artline Frames" width={120} height={108} className="h-auto w-full" />
            </div>
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Our Story" title="A workshop built on a love for art" />
            <div className="mt-8 space-y-5 leading-relaxed text-stone">
              <p>
                Artline Frames began with a simple belief: the art and memories people treasure deserve to be
                displayed beautifully. With {site.yearsExperience} years of experience in framing and fine art, our
                team has helped families, designers and businesses across the UAE turn photos, paintings and
                keepsakes into pieces they&apos;re proud to hang.
              </p>
              <p>
                Today, our Dubai workshop brings everything together under one roof — professional artists creating
                custom oil paintings, large-format printing, and skilled framers handcrafting each frame to order.
              </p>
              <p>
                And because life in the UAE is busy, we come to you: we collect your artwork, craft it, deliver it
                back and hang it perfectly on your wall.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-x">
          <SectionHeading eyebrow="What We Stand For" title="Our values" />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="border border-sand bg-ivory p-10 text-center">
                <Icon name={v.icon} className="mx-auto size-10 text-gold-dark" />
                <h3 className="mt-6 font-serif text-3xl font-medium">{v.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-stone">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Workshop"
              title="Artists and framers under one roof"
              text="Keeping everything in-house means better quality control, faster turnaround and one point of contact from first idea to final installation."
            />
            <ul className="mt-8 space-y-4">
              {[
                `Most framing orders ready in ${site.turnaround}`,
                "Professional artists for custom oil paintings",
                "Large-format printing on canvas, paper and fabric",
                site.deliveryNote,
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <Icon name="check" className="size-4 text-gold" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src={sitePhotos.artist} alt="Artist painting a portrait" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </div>
            <div className="relative mt-12 aspect-[3/4] overflow-hidden">
              <Image src={sitePhotos.workshop} alt="Measuring a framed photograph" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Let's create something together" />
    </>
  );
}
