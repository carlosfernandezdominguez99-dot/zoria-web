import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: "https://zoriadigital.es",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://zoriadigital.es/aviso-legal",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://zoriadigital.es/privacidad",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://zoriadigital.es/cookies",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
