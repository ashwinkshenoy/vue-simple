// rollup.config.js
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';
import buble from '@rollup/plugin-buble';
import image from '@rollup/plugin-image';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const config = {
  input: 'src/index.js',
  output: {
    name: 'VsModal',
    exports: 'named',
  },
  plugins: [
    vue({
      css: true,
      compileTemplate: true,
      needMap: false,
    }),
    buble(),
    image(),
  ],
};

// Only minify browser (iife) version
if (argv.format === 'iife') {
  config.plugins.push(terser());
}

export default config;
