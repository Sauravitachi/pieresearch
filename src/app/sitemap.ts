import { MetadataRoute } from "next";
import { legalDocuments } from "@/data/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thecometresearch.com";

  const legalRoutes = Object.keys(legalDocuments).map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: "2026-10-21",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: "2026-10-21",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...legalRoutes,
  ];
}
