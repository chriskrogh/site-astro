import { style } from "@vanilla-extract/css";

import {
  RESPONSIVE_MEDIA_QUERIES,
  Sprinkles,
  sprinkles,
} from "../../styles/sprinkles.css";
import { CARD_SIZE } from "./consts.css";

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

export const contentContainer = style({
  display: "grid",
  "@media": {
    [RESPONSIVE_MEDIA_QUERIES.mobile]: {
      gridGap: 16,
      gridTemplateColumns: `repeat(2, ${CARD_SIZE.mobile}px)`,
    },
    [RESPONSIVE_MEDIA_QUERIES.tablet]: {
      gridGap: 24,
      gridTemplateColumns: `repeat(3, ${CARD_SIZE.tablet}px)`,
    },
    [RESPONSIVE_MEDIA_QUERIES.desktop]: {
      gridGap: 32,
      gridTemplateColumns: `repeat(3, ${CARD_SIZE.desktop}px)`,
    },
  },
});
