import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: false,
  sourcemap: true,
  clean: true,
  minify: true,
  external: ["react", "react-dom"],
  banner: {
    js: '"use client";',
  },
});
