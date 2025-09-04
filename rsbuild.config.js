import { defineConfig } from "@rsbuild/core";
import { pluginNodePolyfill } from "@rsbuild/plugin-node-polyfill";

export default defineConfig({
  plugins: [pluginNodePolyfill()],
  source: {
    entry: {
      cli: "./index.js",
    },
  },
  output: {
    target: "node",
    module: true,
  },
});
