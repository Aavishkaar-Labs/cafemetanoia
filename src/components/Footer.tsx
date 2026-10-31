import Link from "next/link";
import { services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-sage-light/70 text-forest">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-xl font-bold">{site.brand}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-forest/80">
            {site.disciplines}
          </p>
          <p className="mt-4 font-serif text-sm italic text-forest/80">
            Because understanding yourself is often where change begins.
          </p>
        </div>

        <nav aria-label="Services">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest/70">What I offer</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-sage-dark hover:underline">
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-forest/70">Connect</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-sage-dark hover:underline">
                About me
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-sage-dark hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-sage-dark hover:underline">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-forest/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-forest/70">
          © {site.brand}. All rights reserved. If you are in crisis or at risk of harm, please contact
          your local emergency services or Tele-MANAS at 14416 (India).
        </p>
      </div>
      <div className="bg-forest text-white/70">
        <p className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 px-5 py-4 text-xs">
          <span>Designed &amp; developed by</span>
          <a
            href="https://github.com/Aavishkaar-Labs"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-sage-light"
          >
            <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
              <path d="M12 2 3 20h4.2l1.5-3.2h6.6l1.5 3.2H21L12 2Zm-1.9 11.8L12 9.6l1.9 4.2h-3.8Z" />
            </svg>
            Aavishkaar Labs
          </a>
        </p>
      </div>
    </footer>
  );
}
