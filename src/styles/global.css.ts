import { globalStyle } from "@vanilla-extract/css";

globalStyle("html", {
  height: "100%",
});

globalStyle("body", {
  height: "100%",
  margin: 0,
  padding: 0,
  overflowX: "hidden",

  "@media": {
    "(prefers-color-scheme: light)": {
      background: "white",
    },
    "(prefers-color-scheme: dark)": {
      background: "black",
    },
  },
});

globalStyle("h1, h2, h3, h4, h5, p, li", {
  margin: 0,
  "@media": {
    "(prefers-color-scheme: light)": {
      color: "black",
    },
    "(prefers-color-scheme: dark)": {
      color: "white",
    },
  },
});

globalStyle("h1", {
  fontFamily: "Inter",
  fontSize: 52,
});

globalStyle("h2", {
  fontFamily: "Inter",
  fontSize: 44,
});

globalStyle("h3", {
  fontFamily: "Inter",
  fontSize: 36,
});

globalStyle("h4", {
  fontFamily: "Jost",
  fontSize: 28,
});

globalStyle("h5", {
  fontFamily: "Jost",
  fontSize: 22,
});

globalStyle("p, li", {
  fontFamily: "Jost",
  fontSize: 18,
});
