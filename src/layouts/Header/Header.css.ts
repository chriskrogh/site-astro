import { style } from "@vanilla-extract/css";

import { sprinkles } from "../../styles/sprinkles.css";

export const link = style([
  sprinkles({ paddingX: "1x" }),
  {
    "@media": {
      "(prefers-color-scheme: light)": {
        ":hover": {
          background: "rgba(0, 0, 0, 0.1)",
        },
      },
      "(prefers-color-scheme: dark)": {
        ":hover": {
          background: "rgba(255, 255, 255, 0.2)",
        },
      },
    },
    borderRadius: 8,
  },
]);

export const activeText = style({
  "@media": {
    "(prefers-color-scheme: light)": {
      color: "#777",
    },
    "(prefers-color-scheme: dark)": {
      color: "#bbb",
    },
  },
});

export const spacer = sprinkles({ paddingX: "1x" });
