import { journey } from "@/lib/site";

export function Journey() {
  return (
    <section aria-labelledby="journey-heading" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 id="journey-heading" className="font-serif text-3xl text-forest sm:text-4xl">
            A little about my <span className="text-sage">professional journey</span>
          </h2>
          <p className="mt-3 text-sm text-muted">
            Hospitals, public mental health, and higher education.
          </p>
        </div>
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0">
          {journey.map((j, i) => (
            <li
              key={j.step}
              className={`px-2 text-center md:px-8 ${i > 0 ? "md:border-l md:border-sage/40" : ""}`}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded bg-sage font-serif text-sm text-white">
                {j.step}
              </span>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-sage">
                {j.label}
              </p>
              <h3 className="mt-2 font-serif text-lg text-forest">{j.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{j.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
