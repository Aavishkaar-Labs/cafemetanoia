import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

const title = "Contact: Book a Session or Enquire";
const description =
  "Get in touch for individual therapy appointments, institutional collaborations, workshops, guest lectures, and internship enquiries.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Let&apos;s connect</p>
          <h1 className="mt-3 font-serif text-4xl text-forest sm:text-5xl">There is room to begin again.</h1>
          <p className="mt-5 leading-relaxed text-muted">
            For individual appointments, institutional collaborations, workshops, guest lectures, and
            internship enquiries, I would be glad to hear from you.
          </p>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-2xl bg-paper shadow-lg ring-1 ring-black/5 md:grid-cols-[1fr_1.3fr]">
          <div className="relative min-h-64 md:min-h-full">
            <Image
              src="/images/therapy-space.jpg"
              alt="A calm, sunlit room with an armchair"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-xl bg-paper/95 p-5 text-sm shadow backdrop-blur">
              <dl className="space-y-3">
                <div>
                  <dt className="font-semibold text-sage-dark">Email</dt>
                  <dd>
                    <a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a>
                  </dd>
                </div>
                {site.phone && (
                  <div>
                    <dt className="font-semibold text-sage-dark">Phone</dt>
                    <dd>
                      <a href={`tel:${site.phone}`} className="hover:underline">{site.phone}</a>
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="font-semibold text-sage-dark">Sessions</dt>
                  <dd>{site.location}</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="p-8 sm:p-12">
            <ContactForm email={site.email} />
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted">
          This is not an emergency service. If you are in crisis or at immediate risk, please contact
          your local emergency number or Tele-MANAS at 14416 (India, 24×7).
        </p>
      </div>
    </section>
  );
}
