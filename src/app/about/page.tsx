import type { Metadata } from "next";
import Image from "next/image";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { Journey } from "@/components/Journey";
import { absoluteUrl, site } from "@/lib/site";

const title = "About Me: Clinical Expertise, Human Understanding";
const description =
  "Clinical psychologist with experience across psychiatric hospitals, government mental health services and higher education, including as Institute Psychologist at IIT Roorkee.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about", type: "profile" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: absoluteUrl("/about"),
          name: title,
          mainEntity: { "@id": absoluteUrl("/#person") },
        }}
      />
      <section className="px-5 pb-10 pt-16 sm:pt-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] shadow-xl md:sticky md:top-24">
            <Image
              src="/images/portrait.jpg"
              alt={`Portrait of ${site.person}`}
              fill
              preload
              sizes="(min-width: 768px) 384px, 90vw"
              className="object-cover object-[72%_30%]"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">About me</p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-forest sm:text-5xl">
              Clinical expertise. <span className="text-sage">Human understanding.</span>
            </h1>
            <div className="mt-8 space-y-5 leading-relaxed text-muted">
              <p>
                I am a Clinical Psychologist with experience across corporate psychiatric hospitals,
                government mental health services, and higher educational institutions.
              </p>
              <p>
                My professional journey has taken me from working with individuals experiencing
                psychiatric disorders and addiction to supporting children, marginalised communities,
                adolescents, and young adults navigating the complexities of life.
              </p>
              <p>
                As an Institute Psychologist at IIT Roorkee, my work has focused on the psychological
                challenges associated with life transitions, academic and interpersonal pressures,
                identity, adjustment, and emotional well-being. I have also designed and facilitated
                life-skills programmes, conducted sensitisation initiatives for faculty, and worked with
                administrators to strengthen psychological support systems within educational
                institutions.
              </p>
            </div>
            <blockquote className="mt-10 border-l-4 border-sage bg-paper px-6 py-5 font-serif text-lg leading-relaxed text-forest">
              Across these diverse settings, one belief continues to guide my work: mental health care
              must go beyond addressing distress; it must also help people understand themselves,
              navigate change, and build lives that feel meaningful to them.
            </blockquote>
          </div>
        </div>
      </section>

      <Journey />
      <CtaSection />
    </>
  );
}
