import vue from '@vitejs/plugin-vue';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default {
  plugins: [vue(), cssInjectedByJsPlugin()],
  build: {
    // separate css file or not
    cssCodeSplit: true,
    lib: {
      entry: './src/index.js',
      formats: ['es', 'umd', 'iife'],
      name: 'VsModal',
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
      // Not to bundle vue core in this plugin
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
};
