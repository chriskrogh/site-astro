import "../styles/global.css";

import { style } from "@vanilla-extract/css";

import { sprinkles } from "../styles/sprinkles.css";

const FOOTER_HEIGHT = 100;

export const container = style([
  sprinkles({
    background: {
      lightMode: "white",
      darkMode: "black",
    },
  }),
  {
    position: "relative",
    width: "100%",
    height: "auto",
    minHeight: `calc(100% - ${FOOTER_HEIGHT}px)`,
    paddingBottom: FOOTER_HEIGHT,
  },
]);

export const footer = style([
  sprinkles({
    bottom: {
      mobile: "2x",
      desktop: "5x",
    },
    display: "flex",
    flexDirection: "column",
    placeItems: "center",
  }),
  {
    position: "absolute",
    width: "100%",
  },
]);

export const footerText = sprinkles({
  color: {
    lightMode: "notBlack",
    darkMode: "offWhite",
  },
});
