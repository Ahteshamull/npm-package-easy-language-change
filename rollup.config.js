import resolve from "@rollup/plugin-node-resolve";
import { terser } from "@rollup/plugin-terser";

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: "dist/languagechangesimple.esm.js",
        format: "esm",
        sourcemap: true,
      },
      {
        file: "dist/languagechangesimple.cjs.js",
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [resolve(), terser()],
  },
];
