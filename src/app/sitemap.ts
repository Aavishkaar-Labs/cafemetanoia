import type { MetadataRoute } from "next";
import { absoluteUrl, services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/about"), changeFrequency: "yearly", priority: 0.8 },
    ...services.map((s) => ({
      url: absoluteUrl(`/services/${s.slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
    { url: absoluteUrl("/contact"), changeFrequency: "yearly", priority: 0.6 },
  ];
}
