import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'rollup';

export default defineConfig({
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'es',
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'VsTabs',
      globals: {
        vue: 'Vue',
      },
    },
    {
      file: 'dist/index.min.js',
      format: 'iife',
      name: 'VsTabs',
      globals: {
        vue: 'Vue',
      },
    },
  ],
  external: ['vue'],
  plugins: [vue()],
});
