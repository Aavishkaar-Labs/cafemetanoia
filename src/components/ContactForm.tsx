"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/site";

// No backend is wired up yet: submitting opens the visitor's email client with a
// pre-filled message. Swap `handleSubmit` for a Server Action or form service later.
export function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Enquiry: ${data.get("topic")} from ${data.get("name")}`;
    const body = `${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "mt-1.5 w-full rounded-md border border-black/15 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/25";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="topic" className="text-sm font-medium">
          I&apos;m enquiring about
        </label>
        <select id="topic" name="topic" className={field} defaultValue={services[0].title}>
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
          <option>Institutional collaboration</option>
          <option>Something else</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Share as much or as little as you'd like."
          className={field}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-sage px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sage-dark"
      >
        Send message
      </button>
      <p role="status" className="text-center text-xs text-muted">
        {sent
          ? "Your email app should open with your message. If it didn't, write to me directly at " + email + "."
          : "Your message is confidential."}
      </p>
    </form>
  );
}
