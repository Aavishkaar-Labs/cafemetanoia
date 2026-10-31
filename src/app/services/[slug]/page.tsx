import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, services, site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

const getService = (slug: string) => services.find((s) => s.slug === slug);

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const path = `/services/${service.slug}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: path,
      images: [{ url: service.image.src, alt: service.image.alt }],
    },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: service.title,
              description: service.summary,
              url: absoluteUrl(`/services/${service.slug}`),
              image: absoluteUrl(service.image.src),
              audience: { "@type": "Audience", audienceType: service.audience },
              provider: { "@id": absoluteUrl("/#practice") },
              serviceType: service.title,
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: site.url },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: service.title,
                  item: absoluteUrl(`/services/${service.slug}`),
                },
              ],
            },
          ],
        }}
      />

      <section className="px-5 pb-16 pt-12 sm:pt-16">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="text-xs text-muted">
            <ol className="flex gap-2">
              <li>
                <Link href="/" className="hover:text-sage">Home</Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-charcoal">{service.title}</li>
            </ol>
          </nav>

          <div className="mt-8 grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">{service.kicker}</p>
              <h1 className="mt-3 font-serif text-4xl leading-tight text-forest sm:text-5xl">{service.title}</h1>
              <p className="mt-6 text-lg leading-relaxed text-charcoal">{service.summary}</p>
              <p className="mt-4 leading-relaxed text-muted">{service.intro}</p>
              <p className="mt-6 text-sm text-muted">
                <span className="font-semibold text-forest">For: </span>
                {service.audience}
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                preload
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-16 rounded-2xl bg-paper p-8 shadow-sm ring-1 ring-black/5 sm:p-12">
            <h2 className="font-serif text-2xl text-forest">{service.listHeading}</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.points.map((point) => (
                <li key={point} className="flex gap-3 text-[15px] leading-relaxed">
                  <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sage" />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-10 inline-block rounded-md bg-sage px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sage-dark"
            >
              Enquire about {service.shortTitle.toLowerCase()}
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="more-heading" className="bg-sage-mist/60 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 id="more-heading" className="font-serif text-2xl text-forest">Also offered</h2>
          <ul className="mt-6 grid gap-5 md:grid-cols-3">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="block h-full rounded-xl bg-paper p-6 shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-1"
                >
                  <h3 className="font-serif text-lg text-forest">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
