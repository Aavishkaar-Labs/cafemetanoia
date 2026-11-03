"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/site";

// Submitting opens WhatsApp (app or web) with the enquiry pre-filled as a chat message.
export function ContactForm({ whatsapp }: { whatsapp: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = `Hi, I'm ${data.get("name")}.\nEnquiry: ${data.get("topic")}\n\n${data.get("message")}`;
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
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
        Send message on WhatsApp
      </button>
      <p role="status" className="text-center text-xs text-muted">
        {sent
          ? "WhatsApp should open with your message ready to send. If it didn't, message +91 81309 36991 directly."
          : "Your message is confidential."}
      </p>
    </form>
  );
}
