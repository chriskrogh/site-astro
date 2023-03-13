import { defineCollection, z } from "astro:content";

import { TECHNOLOGIES } from "../utils/tech";

const experiences = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string(),
    link: z.string(),
    location: z.string(),
    positions: z.array(
      z.object({
        title: z.string(),
        "employment-type": z.enum([
          "Full-time",
          "Part-time",
          "Contract",
          "Internship",
        ]),
        achievements: z.array(z.string()),
        duration: z.object({
          start: z.string(),
          end: z.string().optional(),
        }),
      }),
    ),
    tech: z.array(z.enum(TECHNOLOGIES)),
  }),
});

export const collections = {
  experiences,
};
