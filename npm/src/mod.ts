import type { AstroIntegration } from "npm:astro@4.4.15";

export default function denoAstroIntegration(): AstroIntegration {
  return {
    name: "deno-astro-integration",
    hooks: {
      "astro:config:setup": ({ logger }) => {
        logger.info("astro:config:setup");
      },
      "astro:config:done": ({ logger }) => {
        logger.info("astro:config:done");
      },
      "astro:server:setup": ({ logger }) => {
        logger.info("astro:server:setup");
      },
      "astro:server:start": ({ logger }) => {
        logger.info("astro:server:start");
      },
      "astro:server:done": ({ logger }) => {
        logger.info("astro:server:done");
      },
      "astro:build:start": ({ logger }) => {
        logger.info("astro:build:start");
      },
      "astro:build:setup": ({ logger }) => {
        logger.info("astro:build:setup");
      },
      "astro:build:generated": ({ logger }) => {
        logger.info("astro:build:generated");
      },
      "astro:build:ssr": ({ logger }) => {
        logger.info("astro:build:ssr");
      },
      "astro:build:done": ({ logger }) => {
        logger.info("astro:build:done");
      },
    },
  };
}
