import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const links = defineCollection({
  loader: file("src/links.json"),
  schema: z.object({
    title: z.string(),
    url: z.string(),
  }),
});

export const collections = { links };
