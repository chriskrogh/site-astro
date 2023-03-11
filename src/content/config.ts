import { defineCollection, z } from "astro:content";

const experiences = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string(),
    link: z.string(),
    location: z.string(),
    positions: z.array(
      z.object({
        title: z.string(),
        achievements: z.array(z.string()),
        duration: z.object({
          start: z.string(),
          end: z.string().optional(),
        }),
      }),
    ),
    tech: z.array(z.string()),
  }),
});

export const collections = {
  experiences,
};
