import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link href="/" className="font-serif text-lg font-bold tracking-tight text-forest">
          {site.brand}
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-charcoal">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-sage">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="rounded-md bg-sage px-4 py-2 text-white transition-colors hover:bg-sage-dark"
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu: native <details> so it works without JavaScript. */}
        <details className="group relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-md border border-black/10 px-3 py-2 text-sm font-medium [&::-webkit-details-marker]:hidden">
            Menu
            <span aria-hidden className="transition-transform group-open:rotate-180">
              ▾
            </span>
          </summary>
          <nav
            aria-label="Mobile"
            className="absolute right-0 mt-2 w-56 rounded-lg border border-black/5 bg-paper p-2 shadow-lg"
          >
            <ul className="flex flex-col text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block rounded px-3 py-2 hover:bg-sage-mist">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="mt-1 block rounded bg-sage px-3 py-2 text-center text-white"
                >
                  Get in touch
                </Link>
              </li>
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
