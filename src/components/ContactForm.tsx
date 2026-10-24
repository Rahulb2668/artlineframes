"use client";

import { useState } from "react";
import { serviceGroups } from "@/lib/content";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "./Icon";

const serviceOptions = serviceGroups.flatMap((g) => g.services.map((s) => s.name));
const emirates = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"];

const field =
  "w-full border border-sand bg-ivory px-4 py-3 text-ink placeholder:text-stone/60 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none";

// No email backend: the form composes a WhatsApp message and opens the chat with it pre-filled.
export function ContactForm() {
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    if (!name) {
      setError("Please enter your name.");
      return;
    }
    setError("");

    const lines = [
      "Hello Artline Frames, I'd like a quote.",
      "",
      `Name: ${name}`,
      `Service: ${data.get("service")}`,
      `Emirate: ${data.get("emirate")}`,
    ];
    const size = String(data.get("size") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (size) lines.push(`Size: ${size}`);
    if (message) lines.push(`Details: ${message}`);

    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm text-stone">
          Your name *
        </label>
        <input id="name" name="name" type="text" autoComplete="name" required className={field} placeholder="e.g. Sarah" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-2 block text-sm text-stone">
            Service
          </label>
          <select id="service" name="service" className={field} defaultValue={serviceOptions[0]}>
            {serviceOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
            <option>Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="emirate" className="mb-2 block text-sm text-stone">
            Emirate
          </label>
          <select id="emirate" name="emirate" className={field} defaultValue="Dubai">
            {emirates.map((e) => (
              <option key={e}>{e}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="size" className="mb-2 block text-sm text-stone">
          Approximate size (optional)
        </label>
        <input id="size" name="size" type="text" className={field} placeholder="e.g. 60 × 90 cm" />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-stone">
          Tell us about your piece (optional)
        </label>
        <textarea id="message" name="message" rows={4} className={field} placeholder="Wedding photo, signed jersey, painting for the living room…" />
      </div>

      {error && (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 bg-ink px-7 py-4 text-sm tracking-wide text-ivory transition-colors hover:bg-gold-dark"
      >
        <WhatsAppIcon className="size-5" /> Send Enquiry via WhatsApp
      </button>
      <p className="text-center text-xs text-stone">Opens WhatsApp with your details filled in — you can attach photos in the chat.</p>
    </form>
  );
}
