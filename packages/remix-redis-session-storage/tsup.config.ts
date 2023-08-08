import { defineConfig } from "tsup";
import type { Options } from "tsup";

import pkgJSON from "./package.json";

// @ts-expect-error
let external = Object.keys(pkgJSON.dependencies || {});

export default defineConfig(() => {
  let options: Options = {
    sourcemap: true,
    external,
    tsconfig: "./tsconfig.json",
    dts: true,
  };

  return [
    {
      ...options,
      entry: ["src/index.ts"],
      format: "cjs",
    },

    {
      ...options,
      entry: ["src/index.ts"],
      format: "esm",
    },
  ];
});
