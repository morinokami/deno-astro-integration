import { build, emptyDir } from "$dnt";

await emptyDir("./npm");

await build({
  entryPoints: ["./src/mod.ts"],
  outDir: "./npm",
  shims: {
    deno: true,
  },
  package: {
    name: "deno-astro-integration",
    version: "0.0.1",
    description:
      "An Astro integration built with Deno, published to npm using dnt.",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/morinokami/deno-astro-integration.git",
    },
    bugs: {
      url: "https://github.com/morinokami/deno-astro-integration/issues",
    },
  },
  postBuild() {
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});
