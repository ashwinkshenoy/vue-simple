const path = require('path');

module.exports = {
  stories: ['../stories/*.stories.js'],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-docs',
      options: {
        vueDocgenOptions: {
          alias: {
            '@': path.resolve(__dirname, '../'),
          },
        },
      },
    },
  ],
};
