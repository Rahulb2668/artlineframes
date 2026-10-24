import Link from "next/link";
import { btnOutline } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container-x py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-5 font-serif text-5xl">This page isn&apos;t in our gallery</h1>
      <Link href="/" className={`${btnOutline} mt-10`}>
        Back to Home
      </Link>
    </section>
  );
}
