import { terser } from 'rollup-plugin-terser';
import buble from '@rollup/plugin-buble';
import nodeResolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import vue from 'rollup-plugin-vue';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const config = {
  input: 'src/index.js',
  output: {
    name: 'VsDatepicker',
    exports: 'named',
  },
  plugins: [
    vue({
      css: true,
      compileTemplate: true,
      needMap: false,
      style: {
        preprocessOptions: {
          scss: {
            includePaths: ['node_modules'],
          },
        },
      },
    }),
    buble(),
    image(),
    nodeResolve(),
  ],
};

// Only minify browser (iife) version
if (argv.format === 'iife') {
  config.plugins.push(terser());
}

export default config;
