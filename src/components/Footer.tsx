import Image from "next/image";
import Link from "next/link";
import { serviceGroups } from "@/lib/content";
import { phoneHref, site, whatsappLink } from "@/lib/site";
import { Icon, WhatsAppIcon } from "./Icon";

export function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => url);

  return (
    <footer className="bg-charcoal text-ivory/70">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src="/brand/logo-gold.png" alt="Artline Frames" width={180} height={162} className="h-auto w-40" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            Custom art, printing and professional framing in Dubai — delivered and installed across the UAE.
          </p>
        </div>

        <div>
          <h3 className="eyebrow !text-gold-light">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              ["/", "Home"],
              ["/services", "Services"],
              ["/gallery", "Gallery"],
              ["/about", "About Us"],
              ["/#contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-gold-light">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow !text-gold-light">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {serviceGroups.map((g) => (
              <li key={g.id}>
                <Link href={`/services#${g.id}`} className="hover:text-gold-light">
                  {g.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services#framing" className="hover:text-gold-light">
                Jersey & Memorabilia Framing
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow !text-gold-light">Get in touch</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gold-light">
                <WhatsAppIcon className="size-4 text-gold-light" /> WhatsApp us
              </a>
            </li>
            <li>
              <a href={phoneHref} className="flex items-center gap-3 hover:text-gold-light">
                <Icon name="phone" className="size-4 text-gold-light" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-gold-light">
                <Icon name="mail" className="size-4 text-gold-light" /> {site.email}
              </a>
            </li>
            <li>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-gold-light">
                <Icon name="pin" className="mt-0.5 size-4 shrink-0 text-gold-light" /> {site.address}
              </a>
            </li>
            {socials.length > 0 && (
              <li className="flex gap-4 pt-2">
                {socials.map(([name, url]) => (
                  <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="capitalize hover:text-gold-light">
                    {name}
                  </a>
                ))}
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-ivory/50 sm:flex-row sm:justify-between">
          <p>© {site.legalName}. All rights reserved.</p>
          <p>Picture framing · Canvas · Oil paintings · Printing · Installation — Dubai, UAE</p>
        </div>
      </div>
    </footer>
  );
}
