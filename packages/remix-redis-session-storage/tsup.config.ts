import { defineConfig } from "tsup";
import type { Options } from "tsup";

import pkgJSON from "./package.json";

// @ts-expect-error
let external = Object.keys(pkgJSON.dependencies || {});

let shared_options: Options = {
  sourcemap: true,
  external,
  tsconfig: "./tsconfig.json",
};

function node(): Array<Options> {
  return [
    {
      ...shared_options,
      entry: ["src/node.ts"],
      format: "cjs",
    },

    {
      ...shared_options,
      entry: ["src/node.ts"],
      format: "esm",
      dts: true,
    },
  ];
}

function cloudflare(): Array<Options> {
  return [
    {
      ...shared_options,
      entry: ["src/cloudflare.ts"],
      format: "esm",
      dts: true,
    },
  ];
}

function deno(): Array<Options> {
  return [
    {
      ...shared_options,
      entry: ["src/deno.ts"],
      format: "esm",
      dts: true,
    },
  ];
}

export default defineConfig(() => {
  return [...node(), ...cloudflare(), ...deno()];
});
