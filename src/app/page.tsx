import Image from "next/image";
import Link from "next/link";
import { CtaSection } from "@/components/CtaSection";
import { Journey } from "@/components/Journey";
import { services, site } from "@/lib/site";

const highlights = [
  { value: "3", label: "care settings: psychiatric hospitals, public mental health & higher education" },
  { value: "IIT", label: "Institute Psychologist at IIT Roorkee, supporting young adults" },
  { value: "1:1", label: "evidence-based therapy, tailored to your unique story" },
];

export default function Home() {
  return (
    <>
      {/* Banner strip, echoing the landscape header of the design */}
      <div className="hills relative h-24 sm:h-28">
        <div className="absolute inset-x-5 -bottom-6 mx-auto max-w-3xl rounded-md bg-sage px-6 py-3 text-center font-serif text-white shadow-md sm:text-lg">
          {site.tagline} <span className="hidden sm:inline">·</span>{" "}
          <span className="block text-sm opacity-90 sm:inline sm:text-base">{site.jobTitle}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="px-5 pb-16 pt-20 sm:pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr_1fr]">
          <div className="text-center md:text-left">
            <h1 className="font-serif text-4xl leading-tight text-forest sm:text-5xl">
              <span className="text-sage">Understanding You,</span> Beyond Diagnosis.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted">
              A space to pause, understand, and find your way forward.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <Link
                href="/contact"
                className="rounded-md bg-sage px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sage-dark"
              >
                Book a session
              </Link>
              <Link
                href="#offer"
                className="rounded-md border border-sage/50 px-6 py-3 text-sm font-semibold text-sage-dark transition-colors hover:bg-sage-mist"
              >
                What I offer
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xs">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-black/5">
              <Image
                src="/images/portrait.jpg"
                alt={`Portrait of ${site.person}, smiling, in a terracotta saree`}
                fill
                preload
                sizes="(min-width: 768px) 320px, 80vw"
                className="object-cover object-[72%_30%]"
              />
            </div>
          </div>

          <ul className="space-y-0 divide-y divide-sage/30 text-center">
            {highlights.map((h) => (
              <li key={h.value} className="px-4 py-5">
                <p className="font-serif text-3xl text-sage">{h.value}</p>
                <p className="mx-auto mt-1 max-w-[16rem] text-xs leading-relaxed text-muted">{h.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Intro card */}
      <section aria-labelledby="intro-heading" className="px-5">
        <div className="relative mx-auto max-w-4xl rounded-xl bg-paper px-6 py-12 shadow-sm ring-1 ring-black/5 sm:px-16">
          <span aria-hidden className="absolute left-6 top-6 font-serif text-6xl leading-none text-sage-light sm:left-10">
            &ldquo;
          </span>
          <h2 id="intro-heading" className="text-center font-serif text-2xl text-forest sm:text-3xl">
            Life does not always unfold the way we imagine it.
          </h2>
          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-center text-[15px] leading-relaxed text-muted">
            <p>
              Sometimes, we struggle with our thoughts and emotions; at other times, we find ourselves
              navigating changes we were never quite prepared for.
            </p>
            <p>
              I offer psychological support to individuals navigating{" "}
              <span className="text-sage-dark">emotional distress, relationship concerns, personal challenges</span>
              , and the uncertainties that accompany different stages of life. My approach brings together
              clinical understanding, evidence-based therapeutic practices, and a compassionate appreciation
              of each person&apos;s unique experiences.
            </p>
            <p>
              Beyond individual therapy, I work towards building{" "}
              <span className="text-sage-dark">psychologically informed communities</span> through workshops,
              training, and conversations that make mental health more accessible and meaningful.
            </p>
            <p className="font-serif italic text-forest">
              Because understanding yourself is often where change begins.
            </p>
          </div>
          <span aria-hidden className="absolute bottom-0 right-6 font-serif text-6xl leading-none text-sage-light sm:right-10">
            &rdquo;
          </span>
        </div>

        <div className="mx-auto mt-6 grid max-w-4xl grid-cols-3 gap-3 sm:gap-5">
          {[services[0], services[1], services[2]].map((s) => (
            <div key={s.slug} className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image src={s.image.src} alt={s.image.alt} fill sizes="(min-width: 896px) 290px, 33vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Services band */}
      <section id="offer" aria-labelledby="offer-heading" className="leaf-texture mt-20 scroll-mt-20 px-5 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 id="offer-heading" className="font-serif text-3xl sm:text-4xl">
              What I Offer
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80">
              Therapy for individuals, and learning experiences for institutions, organisations, and
              aspiring psychologists.
            </p>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full overflow-hidden rounded-xl bg-paper text-charcoal shadow-lg transition-transform hover:-translate-y-1"
                >
                  <div className="relative hidden w-2/5 shrink-0 sm:block">
                    <Image src={s.image.src} alt="" fill sizes="240px" className="object-cover" />
                  </div>
                  <div className="flex flex-col p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">{s.kicker}</p>
                    <h3 className="mt-2 font-serif text-xl text-forest">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{s.summary}</p>
                    <span className="mt-auto pt-4 text-sm font-semibold text-sage-dark group-hover:underline">
                      Learn more →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section aria-labelledby="approach-heading" className="px-5 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
            <Image
              src="/images/therapy-space.jpg"
              alt="A quiet, light-filled room with an armchair, a space for therapy"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">My approach</p>
            <h2 id="approach-heading" className="mt-3 font-serif text-3xl leading-snug text-forest sm:text-4xl">
              Therapy is not about having all the answers.
            </h2>
            <p className="mt-3 font-serif text-lg italic text-sage-dark">
              It is about creating the space to ask better questions.
            </p>
            <p className="mt-6 leading-relaxed text-muted">
              I believe that every person brings a unique history, set of relationships, strengths, and
              struggles into the therapeutic space. Rather than viewing people only through the lens of
              their difficulties, I aim to understand the larger context of their experiences and work
              alongside them towards change.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Whether you are seeking support during a difficult phase, trying to make sense of
              long-standing concerns, or simply hoping to understand yourself better, therapy can be a
              place to begin.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block rounded-md border border-sage/50 px-6 py-3 text-sm font-semibold text-sage-dark transition-colors hover:bg-sage-mist"
            >
              More about me
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-sage-mist/60">
        <Journey />
      </div>

      <CtaSection />
    </>
  );
}
