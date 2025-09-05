import { defineConfig, rspack } from "@rsbuild/core";
import { pluginNodePolyfill } from "@rsbuild/plugin-node-polyfill";

export default defineConfig({
  plugins: [pluginNodePolyfill()],
  source: {
    entry: {
      cli: "./index.js",
    },
  },
  output: {
    module: true,
    target: "node",
    legalComments: "none",
  },
  tools: {
    rspack: (config, { rspack }) => {
      config.plugins.push(
        new rspack.BannerPlugin({
          raw: true,
          entryOnly: true,
          banner: "#!/usr/bin/env node",
        })
      );
      return config;
    },
  },
});
