import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  // Astro v6 requires an explicit loader to know where the markdown files live
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    readTime: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    coverImage: z.string().url().optional(), 
  }),
});

export const collections = {
  'blog': blogCollection,
};