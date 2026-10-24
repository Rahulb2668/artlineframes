import { phoneHref, whatsappLink } from "@/lib/site";
import { Icon, WhatsAppIcon } from "./Icon";

const button =
  "flex size-14 items-center justify-center rounded-full bg-ink text-gold-light shadow-lg shadow-ink/30 ring-1 ring-gold/60 transition hover:scale-105 hover:bg-gold-dark hover:text-ivory";

export function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <a href={phoneHref} aria-label="Call Artline Frames" className={button}>
        <Icon name="phone" className="size-6" />
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Artline Frames on WhatsApp"
        className={button}
      >
        <WhatsAppIcon className="size-6" />
      </a>
    </div>
  );
}
