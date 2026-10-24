"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { whatsappLink } from "@/lib/site";
import { Icon, WhatsAppIcon } from "./Icon";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-sand/70 bg-ivory/90 backdrop-blur-md">
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Artline Frames — home">
          <Image src="/brand/logo-mark.png" alt="" width={70} height={40} priority className="h-10 w-auto" />
          <span className="leading-none">
            <span className="block font-display text-xl tracking-[0.18em] text-gold-gradient">ART LINE</span>
            <span className="mt-1 block text-[0.6rem] tracking-[0.5em] text-stone">FRAMES</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active = item.href === pathname;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors hover:text-gold-dark ${
                  active ? "text-gold-dark" : "text-ink/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 bg-ink px-5 py-2.5 text-sm tracking-wide text-ivory transition-colors hover:bg-gold-dark sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            Get a Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="p-2 text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <Icon name={open ? "close" : "menu"} className="size-6" />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-sand bg-ivory md:hidden" aria-label="Mobile">
          <div className="container-x flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-sand/60 py-3 font-serif text-2xl text-ink last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-ink px-5 py-3 text-ivory"
            >
              <WhatsAppIcon className="size-4" />
              Get a Quote on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
