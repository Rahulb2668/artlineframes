import Image from "next/image";
import Link from "next/link";
import { ArtFrame } from "@/components/ArtFrame";
import { ContactForm } from "@/components/ContactForm";
import { Icon, WhatsAppIcon } from "@/components/Icon";
import { Testimonials } from "@/components/Testimonials";
import { btnOutline, btnPrimary, SectionHeading } from "@/components/ui";
import { gallery, serviceGroups, sitePhotos, steps, usps } from "@/lib/content";
import { phoneHref, site, whatsappLink } from "@/lib/site";

const uspText: Record<(typeof usps)[number]["key"], string> = {
  years: `${site.yearsExperience} years framing art and memories in the UAE.`,
  turnaround: `Most framing orders ready in ${site.turnaround}.`,
  delivery: "Doorstep pickup and return anywhere in the UAE.",
  workshop: "Professional artists and framers under one roof in Dubai.",
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-x grid items-center gap-16 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow">Custom Art · Printing · Professional Framing</p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.02] font-medium sm:text-6xl xl:text-7xl">
              Your Vision.
              <br />
              <span className="text-gold-gradient italic">Our Craftsmanship.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-stone">
              Bespoke framing, hand-painted art and fine-art printing from our Dubai workshop — collected from your
              door, crafted by hand and installed on your wall, anywhere in the UAE.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                <WhatsAppIcon className="size-4" /> Get a Free Quote
              </a>
              <Link href="/gallery" className={btnOutline}>
                View Our Work <Icon name="arrow" className="size-4" />
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-stone">
              {[site.deliveryNote, `Ready in ${site.turnaround}`, "In-house artists"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Icon name="check" className="size-4 text-gold" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-xl">
            <div className="absolute top-0 left-0 h-[82%] w-[62%] translate-x-4 translate-y-4 border border-gold" />
            <div className="absolute top-0 left-0 h-[82%] w-[62%] overflow-hidden shadow-2xl shadow-ink/20">
              <Image src={sitePhotos.heroMain} alt="Gilded picture frames on a stone wall" fill priority sizes="(min-width: 1024px) 30vw, 60vw" className="object-cover" />
            </div>
            <div className="absolute top-[12%] right-0 h-[40%] w-[34%] overflow-hidden border-8 border-ivory shadow-xl shadow-ink/20">
              <Image src={sitePhotos.heroSecond} alt="Oil portrait commission on an easel" fill sizes="20vw" className="object-cover" />
            </div>
            <div className="absolute right-[4%] bottom-0 h-[44%] w-[50%] overflow-hidden border-8 border-ivory shadow-xl shadow-ink/20">
              <Image src={sitePhotos.heroThird} alt="Black frames with double mounts" fill sizes="25vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="border-y border-sand bg-cream">
        <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((u) => (
            <div key={u.key} className="flex gap-4">
              <Icon name={u.icon} className="size-8 shrink-0 text-gold-dark" />
              <div>
                <h3 className="font-serif text-xl font-medium">{u.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-stone">{uspText[u.key]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="About Artline Frames"
            title={
              <>
                Dubai&apos;s atelier for <em className="text-gold-dark">frames & fine art</em>
              </>
            }
            text="Artline Frames brings together skilled framers, professional artists and large-format printing under one roof. Whether it's a treasured family photo, a signed jersey, a commissioned oil painting or art for an entire hotel, we treat every piece with the same care — and take care of everything from collection to installation."
          />
          <div>
          <div className="relative mb-px aspect-[16/9] overflow-hidden">
            <Image src={sitePhotos.workshop} alt="Framer measuring a framed photograph in the workshop" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
          <dl className="grid grid-cols-2 gap-px bg-sand">
            {[
              [site.yearsExperience, "Years of experience"],
              [site.turnaround, "Typical turnaround"],
              ["7", "Emirates served"],
              ["100%", "Handcrafted in Dubai"],
            ].map(([value, label]) => (
              <div key={label} className="bg-ivory p-8">
                <dt className="sr-only">{label}</dt>
                <dd className="font-serif text-4xl text-gold-dark">{value}</dd>
                <dd className="mt-2 text-sm text-stone">{label}</dd>
              </div>
            ))}
          </dl>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-cream py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Services"
            title="Everything your art needs"
            text="From creating the artwork to hanging it on your wall — one trusted team."
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {serviceGroups.map((g) => (
              <article key={g.id} className="flex flex-col border border-sand bg-ivory p-8 transition-shadow hover:shadow-xl hover:shadow-ink/5">
                <Icon name={g.icon} className="size-9 text-gold-dark" />
                <h3 className="mt-6 font-serif text-3xl font-medium">{g.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{g.intro}</p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-sand pt-6 text-sm">
                  {g.services.map((s) => (
                    <li key={s.name} className="flex items-baseline justify-between gap-4">
                      <span className="flex items-baseline gap-2">
                        <Icon name="check" className="size-3.5 shrink-0 text-gold" />
                        {s.name}
                      </span>
                      {s.from && <span className="shrink-0 text-xs text-gold-dark">from {s.from}</span>}
                    </li>
                  ))}
                </ul>
                <Link href={`/services#${g.id}`} className="mt-8 inline-flex items-center gap-2 text-sm text-gold-dark hover:text-ink">
                  Learn more <Icon name="arrow" className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-charcoal py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.4fr]">
          <Image src="/brand/logo-gold.png" alt="Artline Frames logo" width={400} height={360} className="mx-auto h-auto w-56 lg:w-72" />
          <div>
            <p className="eyebrow !text-gold-light">Our Vision</p>
            <blockquote className="mt-6 font-serif text-3xl leading-snug text-ivory sm:text-4xl">
              “To bring your ideas to life through customised artwork, premium framing and professional finishing —
              so every space in the UAE can tell its own story.”
            </blockquote>
            <div className="mt-8 h-px w-16 bg-gold" />
            <p className="mt-8 max-w-xl leading-relaxed text-ivory/70">
              We believe great framing is invisible until you notice how good the art looks. That&apos;s why we use
              quality mouldings, conservation materials and careful craftsmanship on every order, big or small.
            </p>
          </div>
        </div>
      </section>

      {/* Mini gallery */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Our Work" title="Recently framed & created" />
          <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {gallery.slice(0, 6).map((item) => (
              <Link key={item.title} href="/gallery" className="group block">
                <div className="overflow-hidden">
                  <ArtFrame item={item} className="aspect-[4/5] transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="mt-3 font-serif text-lg">{item.title}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/gallery" className={btnOutline}>
              See the Full Gallery <Icon name="arrow" className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-sand bg-cream py-24">
        <div className="container-x">
          <SectionHeading eyebrow="How It Works" title="Framing made effortless" />
          <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="text-center">
                <span className="mx-auto flex size-14 items-center justify-center rounded-full border border-gold font-serif text-2xl text-gold-dark">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-serif text-2xl font-medium">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Testimonials />

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 py-24">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Contact Us"
              title="Let's frame something beautiful"
              text="Tell us about your piece and we'll get back to you with ideas and a quote. Prefer to talk? Call or WhatsApp us directly."
            />
            <ul className="mt-10 space-y-6">
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-gold-dark">
                  <span className="flex size-12 items-center justify-center rounded-full bg-cream text-gold-dark">
                    <WhatsAppIcon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-widest text-stone uppercase">WhatsApp</span>
                    Chat with us now
                  </span>
                </a>
              </li>
              <li>
                <a href={phoneHref} className="flex items-center gap-4 hover:text-gold-dark">
                  <span className="flex size-12 items-center justify-center rounded-full bg-cream text-gold-dark">
                    <Icon name="phone" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-widest text-stone uppercase">Call</span>
                    {site.phone}
                  </span>
                </a>
              </li>
              <li>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-gold-dark">
                  <span className="flex size-12 items-center justify-center rounded-full bg-cream text-gold-dark">
                    <Icon name="pin" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-widest text-stone uppercase">Workshop</span>
                    {site.address}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-cream text-gold-dark">
                  <Icon name="clock" />
                </span>
                <span>
                  <span className="block text-xs tracking-widest text-stone uppercase">Opening hours</span>
                  {site.hours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
          <div className="border border-sand bg-cream p-8 sm:p-10">
            <h3 className="font-serif text-3xl font-medium">Request a free quote</h3>
            <p className="mt-2 mb-8 text-sm text-stone">We usually reply within the hour during opening times.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
