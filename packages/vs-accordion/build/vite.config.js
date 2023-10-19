import vue from '@vitejs/plugin-vue';
import VitePluginStyleInject from 'vite-plugin-style-inject';

export default {
  plugins: [vue(), VitePluginStyleInject()],
  build: {
    // separate css file or not
    cssCodeSplit: false,
    lib: {
      entry: './src/index.js',
      formats: ['es', 'umd', 'iife'],
      name: 'VsAccordion',
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
