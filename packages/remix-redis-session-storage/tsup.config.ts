import { defineConfig } from "tsup";
import type { Options } from "tsup";

import pkgJSON from "./package.json";

// @ts-expect-error
let external = Object.keys(pkgJSON.dependencies || {});

export default defineConfig(() => {
  let shared_options: Options = {
    sourcemap: true,
    external,
    tsconfig: "./tsconfig.json",
  };

  return [
    {
      ...shared_options,
      entry: ["src/index.ts"],
      format: "cjs",
    },

    {
      ...shared_options,
      entry: ["src/index.ts"],
      format: "esm",
      dts: true,
    },
  ];
});
