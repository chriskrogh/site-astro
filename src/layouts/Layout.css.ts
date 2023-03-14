import "../styles/global.css";

import { style } from "@vanilla-extract/css";

import { Sprinkles, sprinkles } from "../styles/sprinkles.css";

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

export const header = style([
  sprinkles({ paddingTop: "2x" }),
  {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
]);

export const headerLink = style([
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

const contentContainerPadding: Sprinkles["padding"] = {
  mobile: "2x",
  desktop: "5x",
};

const contentContainerSize: Sprinkles["width"] = {
  mobile: `full-2*${contentContainerPadding.mobile ?? "1x"}`,
  desktop: `full-2*${contentContainerPadding.desktop ?? "1x"}`,
};

export const contentContainer = style([
  sprinkles({
    padding: contentContainerPadding,
    width: contentContainerSize,
    height: contentContainerSize,
  }),
  {
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
