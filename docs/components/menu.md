---
title: Menu
---

<masthead title="Menu" description="A light weight & flexible menu, with importance to accessibility.">
  <component-links
    github="https://github.com/ashwinkshenoy/vue-simple/tree/master/packages/vs-menu"
    packageName="@vuesimple/vs-menu">
  </component-links>
</masthead>

## Demo

<script setup>
  import MenuComponent from '../../src/DemoComponents/Menu.vue';
</script>

<menu-component class="demo"></menu-component>

<br />

## Install

```bash
npm i @vuesimple/vs-menu
```

## Usage

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

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@vuesimple/vs-menu@<version>/dist/index.min.js"></script>
```

::: tip

Replace `<version>` with a version number in the above url.

:::

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

## Nuxt.js

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

::: tip

- For older Nuxt versions, use `<no-ssr>...</no-ssr>` tag.
- You can also do
  `import VsMenu from '@vuesimple/vs-menu'`
  & add in `component:{VsMenu}` and use it within component, without globally installing in plugin folder.

:::

## Props

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
