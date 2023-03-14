import { style } from "@vanilla-extract/css";

import {
  RESPONSIVE_MEDIA_QUERIES,
  sprinkles,
} from "../../../styles/sprinkles.css";
import { CARD_SIZE } from "../consts.css";

export const container = style({
  cursor: "pointer",
  "@media": {
    "(prefers-color-scheme: dark)": {
      backgroundColor: "#111",
    },
    "(prefers-color-scheme: light)": {
      backgroundColor: "#eee",
    },
    [RESPONSIVE_MEDIA_QUERIES.mobile]: {
      width: CARD_SIZE.mobile,
    },
    [RESPONSIVE_MEDIA_QUERIES.tablet]: {
      width: CARD_SIZE.tablet,
    },
    [RESPONSIVE_MEDIA_QUERIES.desktop]: {
      width: CARD_SIZE.desktop,
    },
  },
});

export const image = style({
  aspectRatio: "1",
  objectFit: "contain",
  "@media": {
    [RESPONSIVE_MEDIA_QUERIES.mobile]: {
      width: CARD_SIZE.mobile,
    },
    [RESPONSIVE_MEDIA_QUERIES.tablet]: {
      width: CARD_SIZE.tablet,
    },
    [RESPONSIVE_MEDIA_QUERIES.desktop]: {
      width: CARD_SIZE.desktop,
    },
  },
});

export const infoContainer = sprinkles({
  display: "flex",
  flexDirection: "column",
  padding: "2x",
});
