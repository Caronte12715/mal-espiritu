// Archivo: src/content/config.mjs
import { defineCollection, z } from 'astro:content';

const historiasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    location: z.string(),
    image: z.string(),
    extract: z.string(),
    isNew: z.boolean().default(false).optional(),
    isPopular: z.boolean().default(false).optional(),
    tags: z.array(z.string()).optional(), 
  }),
});

export const collections = {
  'historias': historiasCollection,
};
