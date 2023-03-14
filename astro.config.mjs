// https://astro.build/config
import partytown from "@astrojs/partytown";
// https://astro.build/config
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
// https://astro.build/config
import vanillaExtract from "astro-vanilla-extract";

// https://astro.build/config
export default defineConfig({
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    react(),
    vanillaExtract(),
  ],
});
