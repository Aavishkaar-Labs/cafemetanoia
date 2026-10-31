import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-5 py-28 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">404</p>
      <h1 className="mt-3 font-serif text-4xl text-forest">This page has wandered off.</h1>
      <p className="mt-4 text-muted">Let&apos;s find our way back.</p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-md bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-dark"
      >
        Return home
      </Link>
    </section>
  );
}
