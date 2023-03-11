import { style } from "@vanilla-extract/css";

import { RESPONSIVE_MEDIA_QUERIES } from "../../styles/sprinkles.css";
import { CARD_SIZE } from "./consts.css";

export const container = style({
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
