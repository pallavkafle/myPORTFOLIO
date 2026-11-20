import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/", // Keep API routes hidden from crawlers
    },
    sitemap: "https://pallavkafle.com.np/sitemap.xml",
  };
}