import { style } from "@vanilla-extract/css";

import { Sprinkles, sprinkles } from "../../styles/sprinkles.css";

const containerPadding: Sprinkles["padding"] = {
  mobile: "2x",
  desktop: "5x",
};

const containerSize: Sprinkles["width"] = {
  mobile: `full-2*${containerPadding.mobile ?? "1x"}`,
  desktop: `full-2*${containerPadding.desktop ?? "1x"}`,
};

export const container = style([
  sprinkles({
    padding: containerPadding,
    width: containerSize,
    height: containerSize,
  }),
  {
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
]);

export const profilePicture = style({
  borderRadius: "50%",
});

export const descriptionText = style({
  textAlign: "center",
});

export const contactContainer = style({
  display: "flex",
  flexDirection: "row",
});

const hover = style({
  "@media": {
    "(prefers-color-scheme: light)": {
      ":hover": {
        background: "rgba(0, 0, 0, 0.15)",
      },
    },
    "(prefers-color-scheme: dark)": {
      ":hover": {
        background: "rgba(255, 255, 255, 0.15)",
      },
    },
  },
  ":hover": {
    cursor: "pointer",
  },
});

const ICON_SIZE = 36;

export const icon = style([
  sprinkles({
    color: {
      lightMode: "black",
      darkMode: "white",
    },
    padding: "1x",
  }),
  {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: "50%",
  },
  hover,
]);

export const linkText = style([
  sprinkles({
    textDecorationColor: {
      lightMode: "black",
      darkMode: "white",
    },
    padding: "1x",
  }),
  {
    textDecorationLine: "underline",
    borderRadius: "8px",
  },
  hover,
]);

export const CONTENT_SIZE = 340;

export const spotifyCard = style({
  width: CONTENT_SIZE,
  height: 80,
});
