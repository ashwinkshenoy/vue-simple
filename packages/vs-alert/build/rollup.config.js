import { terser } from 'rollup-plugin-terser';
import buble from '@rollup/plugin-buble';
import image from '@rollup/plugin-image';
import vue from 'rollup-plugin-vue';
import minimist from 'minimist';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const argv = minimist(process.argv.slice(2));

const config = {
  input: 'src/index.js',
  output: {
    name: 'VsAlert',
    exports: 'named',
  },
  plugins: [
    vue({
      css: false,
      compileTemplate: true,
      needMap: false,
      preprocessStyles: true,
    }),
    postcss(),
    buble(),
    image(),
    peerDepsExternal(),
  ],
};

// Only minify browser (iife) version
if (argv.format === 'iife') {
  config.plugins.push(terser());
}

export default config;
