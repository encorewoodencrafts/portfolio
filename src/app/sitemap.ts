import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { projects } from "@/data/projects";
import { news } from "@/data/news";
import { blogPosts } from "@/data/blog";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://encorewoodcrafts.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/products",
    "/add-ons",
    "/projects",
    "/architects",
    "/partners",
    "/about",
    "/news",
    "/blog",
    "/contact",
    "/faq",
    "/login",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const newsRoutes: MetadataRoute.Sitemap = news.map((n) => ({
    url: `${BASE_URL}/news/${n.slug}`,
    lastModified: new Date(n.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...projectRoutes,
    ...newsRoutes,
    ...blogRoutes,
  ];
}
