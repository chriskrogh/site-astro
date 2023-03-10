import type { CollectionEntry } from "astro:content";

type Position = CollectionEntry<"experiences">["data"]["positions"][number];

export const getMostRecentPosition = (positions: Position[]): Position =>
  positions.sort(
    (a, b) =>
      new Date(b.duration.start).getTime() -
      new Date(a.duration.start).getTime(),
  )[0];
