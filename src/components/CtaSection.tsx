import Link from "next/link";

export function CtaSection() {
  return (
    <section aria-labelledby="cta-heading" className="px-5 py-20">
      <div className="mx-auto max-w-3xl rounded-2xl bg-paper px-6 py-14 text-center shadow-sm ring-1 ring-black/5 sm:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Let&apos;s connect</p>
        <h2 id="cta-heading" className="mt-3 font-serif text-3xl text-forest sm:text-4xl">
          There is room to begin again.
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
          Whether you are looking for psychological support, planning a mental health programme,
          seeking a speaker for your next event, or exploring opportunities to learn and grow in
          psychology, I would be glad to hear from you.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-md bg-sage px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-sage-dark"
        >
          Get in touch
        </Link>
        <p className="mt-6 font-serif text-sm italic text-muted">
          Every meaningful conversation begins somewhere.
        </p>
      </div>
    </section>
  );
}
