import { style } from "@vanilla-extract/css";

import { sprinkles } from "../../styles/sprinkles.css";

export const topSectionContainer = style([
  sprinkles({
    display: "flex",
    flexDirection: {
      mobile: "column",
      tablet: "row",
    },
    alignItems: { mobile: "center", tablet: "flex-start" },
    justifyContent: { mobile: "flex-start", tablet: "center" },
  }),
  {
    maxWidth: 1280,
  },
]);

export const IMAGE_SIZE = 340;

export const image = style({
  borderRadius: 16,
});

export const titleLink = style({
  "@media": {
    "(prefers-color-scheme: light)": {
      textDecorationColor: "black",
    },
    "(prefers-color-scheme: dark)": {
      textDecorationColor: "white",
    },
  },
});

export const ICON_SIZE = 32;

export const iconContainer = style({
  display: "grid",
  gridGap: 16,
  gridTemplateColumns: `repeat(auto-fit, ${ICON_SIZE}px)`,
});

export const iconLink = style({
  textDecoration: "none",
  "@media": {
    "(prefers-color-scheme: light)": {
      color: "black",
    },
    "(prefers-color-scheme: dark)": {
      color: "white",
    },
  },
});
