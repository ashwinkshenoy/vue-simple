# Vue Simple Menu

#### 🗃 A simple vue Menu. Perfect for all your Menu scenarios.

A light weight vue plugin built groundup.

[![npm](https://img.shields.io/npm/v/@vuesimple/vs-menu.svg)](https://www.npmjs.com/package/@vuesimple/vs-menu)
[![npm](https://img.shields.io/npm/dt/@vuesimple/vs-menu.svg)](https://img.shields.io/npm/dt/@vuesimple/vs-menu.svg)
<br />

![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)
![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)
![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)

<br />

### 📺 Live Demo

Demo: [Link](https://vuesimple.netlify.app)

<br />

### Install

```bash
npm i @vuesimple/vs-menu
```

### Usage

```html
<template>
  <vs-menu :items="items" v-model="selectedItem" @item-selected="onItemSelected">Menu</vs-menu>
</template>

<script>
  import VsMenu from '@vuesimple/vs-menu';

  export default {
    components: {
      VsMenu,
    },

    data() {
      return {
        items: [
          { label: 'Item 1', key: 'item_1' },
          { label: 'Item 2', key: 'item_2' },
          { label: 'Item 3', key: 'item_3' },
          { label: 'Item 4', key: 'item_4', disabled: true },
          { label: 'Item 5', key: 'item_5' },
        ],
        selectedItem: '',
      };
    },

    methods: {
      onItemSelected(item) {
        console.info('Selected Item:', item);
      },
    },
  };
</script>
```

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@vuesimple/vs-menu@<version>/dist/index.min.js"></script>
```

```javascript
// Main/Entry file
app.use(VsMenu.plugin);
```

```html
<template>
  <vs-menu :items="items" v-model="selectedItem" @item-selected="onItemSelected">Menu</vs-menu>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { label: 'Item 1', key: 'item_1' },
          { label: 'Item 2', key: 'item_2' },
          { label: 'Item 3', key: 'item_3' },
          { label: 'Item 4', key: 'item_4', disabled: true },
          { label: 'Item 5', key: 'item_5' },
        ],
        selectedItem: '',
      };
    },

    methods: {
      onItemSelected(item) {
        console.info('Selected Item:', item);
      },
    },
  };
</script>
```

### Nuxt.js

After installation,

- Create a file `/plugins/vs-menu.js`

  ```javascript
  import Vue from 'vue';
  import VsMenu from '@vuesimple/vs-menu';

  Vue.component('vs-menu', VsMenu);
  ```

- Update `nuxt.config.js`
  ```javascript
  module.exports = {
    ...
    plugins: [
      { src: '~plugins/vs-menu', mode: 'client' }
      ...
    ]
  }
  ```
- In the page/ component

  ```html
  <template>
    <vs-menu :items="items" v-model="selectedItem" @item-selected="onItemSelected">Menu</vs-menu>
  </template>

  <script>
    export default {
      data() {
        return {
          items: [
            { label: 'Item 1', key: 'item_1' },
            { label: 'Item 2', key: 'item_2' },
            { label: 'Item 3', key: 'item_3' },
            { label: 'Item 4', key: 'item_4', disabled: true },
            { label: 'Item 5', key: 'item_5' },
          ],
          selectedItem: '',
        };
      },

      methods: {
        onItemSelected(item) {
          console.info('Selected Item:', item);
        },
      },
    };
  </script>
  ```

**Note**

- For older Nuxt versions, use `<no-ssr>...</no-ssr>` tag.
- You can also do
  `import VsMenu from '@vuesimple/vs-menu'`
  & add in `component:{VsMenu}` and use it within component, without globally installing in plugin folder.

### Props

| Name      | Type             | Default  | Description                                                                                               |
| --------- | ---------------- | -------- | --------------------------------------------------------------------------------------------------------- |
| items     | Array of Objects | -        | Available: `{label: "Item 1", key: "item_1" disabled: true}`.                                             |
| variant   | String           | -        | Type of button to be shown. (`default`, `primary`, `secondary`, `warning`, `danger`, `success`, `light`). |
| v-model   | Array of Objects | -        | Returns the selected item.                                                                                |
| alignment | String           | `left`   | Left align the menu. Available: `left` & `right`.                                                         |
| size      | String           | `medium` | Size of Menu button. Available: `small`, `medium` & `large`.                                              |
| fill      | Boolean          | `false`  | Fill the Menu button.                                                                                     |
| isRound   | Boolean          | `false`  | Make the Menu button round.                                                                               |
| disabled  | Boolean          | `false`  | To disable the Menu button.                                                                               |

## Events

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| item-selected | Emitted when the menu closes and an item is selected. |

## Slots

You can define own item markup via #slot-name:

| Name      | Description                                                     |
| --------- | --------------------------------------------------------------- |
| (default) | Holds the menu button text                                      |
| menu      | Holds the menu dropdown content.                                |
| item      | Holds the menu dropdown content line item. Access it via `item` |
