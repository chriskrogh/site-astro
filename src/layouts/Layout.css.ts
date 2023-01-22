import "../styles/global.css";

import { style } from "@vanilla-extract/css";

import { sprinkles } from "../styles/sprinkles.css";

export const container = style([
  sprinkles({
    background: {
      lightMode: "white",
      darkMode: "black",
    },
  }),
  {
    width: "100%",
    height: "100%",
  },
]);
