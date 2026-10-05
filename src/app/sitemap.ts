import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: "https://zoria.es",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://zoria.es/aviso-legal",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://zoria.es/privacidad",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://zoria.es/cookies",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
