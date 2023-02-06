// https://astro.build/config
import partytown from "@astrojs/partytown";
import { defineConfig } from "astro/config";
// https://astro.build/config
import vanillaExtract from "astro-vanilla-extract";

// https://astro.build/config
export default defineConfig({
  integrations: [
    vanillaExtract(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
