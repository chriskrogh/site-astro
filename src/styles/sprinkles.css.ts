import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import { colors, fullWithoutPadding, space } from "./vars.css";

export const MIN_WIDTH_BREAKPOINTS = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  xlDesktop: 1440,
} as const;

export const RESPONSIVE_MEDIA_QUERIES = {
  mobile: `screen and (min-width: ${MIN_WIDTH_BREAKPOINTS.mobile}px)`,
  tablet: `screen and (min-width: ${MIN_WIDTH_BREAKPOINTS.tablet}px)`,
  desktop: `screen and (min-width: ${MIN_WIDTH_BREAKPOINTS.desktop}px)`,
  xlDesktop: `screen and (min-width: ${MIN_WIDTH_BREAKPOINTS.xlDesktop}px)`,
} as const;

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": RESPONSIVE_MEDIA_QUERIES.tablet },
    desktop: { "@media": RESPONSIVE_MEDIA_QUERIES.desktop },
    xlDesktop: { "@media": RESPONSIVE_MEDIA_QUERIES.xlDesktop },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "normal",
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["normal", "stretch", "flex-start", "center", "flex-end"],

    width: { ...space, ...fullWithoutPadding },
    height: { ...space, ...fullWithoutPadding },
    minWidth: { ...space, ...fullWithoutPadding },
    minHeight: { ...space, ...fullWithoutPadding },

    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,

    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,

    top: space,
    bottom: space,
    left: space,
    right: space,
  },
  shorthands: {
    size: ["width", "height"],

    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],

    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],

    placeItems: ["justifyContent", "alignItems"],
  },
});

const colorProperties = defineProperties({
  conditions: {
    lightMode: { "@media": "(prefers-color-scheme: light)" },
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: ["lightMode", "darkMode"],
  properties: {
    color: colors,
    background: colors,
    textDecorationColor: colors,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
