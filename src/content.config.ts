import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * EVENTS — one Markdown file per event in src/content/events/.
 * Upcoming vs past is worked out automatically from `date`.
 */
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    time: z.string().optional(), // e.g. "10:00 to 18:00"
    city: z.string(),
    venue: z.string().optional(),
    tag: z.string(), // Festival, Workshop, Conference...
    summary: z.string(),
    lede: z.string().optional(), // big intro sentence on the detail page
    image: z.string().optional(), // e.g. /images/your-photo.jpg
    registration: z.boolean().default(false),
    guests: z.array(z.object({ name: z.string(), role: z.string(), photo: z.string().optional() })).default([]),
    agenda: z.array(z.object({ time: z.string(), title: z.string(), detail: z.string().optional() })).default([]),
    gallery: z.array(z.string()).default([]),
  }),
});

/** BLOG — one Markdown file per article in src/content/blog/. */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Essay', 'Poetry', 'Event report', 'Newsletter']),
    author: z.string(),
    authorRole: z.string().optional(),
    excerpt: z.string().optional(),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

/**
 * LIBRARY — one JSON file per book in src/content/library/.
 * `file` is either a full URL (e.g. on Cloudflare R2) or a file name that is
 * resolved against `site.libraryBaseUrl` in src/data/site.ts.
 */
const library = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/library' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    genre: z.string(),
    language: z.string().default('English'),
    year: z.union([z.string(), z.number()]).optional(),
    pages: z.number().optional(),
    description: z.string().optional(),
    cover: z.string().optional(),
    file: z.string(),
    added: z.coerce.date().optional(),
  }),
});

export const collections = { events, blog, library };
