import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pallavkafle.com.np",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}