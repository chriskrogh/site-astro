import { defineCollection, z } from "astro:content";

import { TECHNOLOGIES } from "../utils/tech";

const experiences = defineCollection({
  type: "content",
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

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    link: z.string().optional(),
    gitHub: z.string().optional(),
    figma: z.string().optional(),
    outcomes: z.array(z.string()),
    date: z.string(),
    tech: z.array(z.enum(TECHNOLOGIES)),
  }),
});

export const collections = {
  experiences,
  projects,
};
