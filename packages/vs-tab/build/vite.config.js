import vue from '@vitejs/plugin-vue';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default {
  plugins: [vue(), cssInjectedByJsPlugin()],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: './src/index.js',
      formats: ['es', 'umd', 'iife'],
      name: 'VsTab',
      fileName: format => {
        if (format === 'es') {
          return 'index.esm.js';
        }
        if (format === 'umd') {
          return 'index.umd.js';
        }
        return 'index.min.js';
      },
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
};
