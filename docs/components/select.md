---
title: Select
---

<masthead title="Select" description="A simple vue select. Perfect for all your select / dropdown scenarios.">
  <component-links
    codesandbox="https://codesandbox.io/s/vs-select-4ek10"
    github="https://github.com/ashwinkshenoy/vue-simple/tree/master/packages/vs-select"
    packageName="@vuesimple/vs-select">
  </component-links>
</masthead>

## Install

```bash
npm i @vuesimple/vs-select
```

```bash
yarn add @vuesimple/vs-select
```

## Usage

```html
<template>
  <vs-select :options="options1"></vs-select>
  <vs-multiselect :options="options1"></vs-multiselect>
</template>

<script>
  import { VsSelect, VsMultiselect } from '@vuesimple/vs-select';

  export default {
    components: {
      VsSelect,
      VsMultiselect,
    },

    data() {
      return {
        options1: ['Derek', 'Ryan', 'BB', 'Chris'],
        options2: [
          { label: 'Derek', value: 'D' },
          { label: 'Ryan', value: 'R' },
          { label: 'BB', value: 'BB' },
          { label: 'Chris', value: 'C' },
        ],
      };
    },
  };
</script>
```

## CDN

```html
<script src="https://unpkg.com/@vuesimple/vs-select/dist/vs-select.min.js"></script>
```

```html
<template>
  <vs-select :options="options1"></vs-select>
  <vs-multiselect :options="options1"></vs-multiselect>
</template>
```

## Nuxt.js

Nuxt Code Snippet

After installation,

- Create a file `/plugins/vs-select.js`

  ```javascript
  import Vue from 'vue';
  import { VsSelect, VsMultiselect } from '@vuesimple/vs-select';

  Vue.component('vs-select', VsSelect);
  Vue.component('vs-multiselect', VsMultiselect);
  ```

- Update `nuxt.config.js`

  ```javascript
  module.exports = {
    ...
    plugins: [
      { src: '~plugins/vs-select', mode: 'client' }
      ...
    ]
  }
  ```

- In the page/ component

  ```html
  <template>
    <vs-select :options="options1"></vs-select>
    <vs-multiselect :options="options1"></vs-multiselect>
  </template>
  ```

## Props

| Name           | Type    | Default             | Description                                                                                       |
| -------------- | ------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| options        | Array   | -                   | This can be array or array of objects. `['Tony', 'Bruce']` or `[{ label: 'Derek', value: 'D' }]`, |
| isSearch       | Boolean | false               | Searchable select                                                                                 |
| label          | String  | 'Select'            | Placeholder text                                                                                  |
| preselected    | Array   | -                   | Preselected items. For array of objects, pass `value` as array items ex: `['D', 'BB']`            |
| disabled       | Boolean | false               | To disable select box                                                                             |
| isError        | Boolean | false               | To show error in select box                                                                       |
| isMenu         | Boolean | false               | To display like menu dropdown. Available only on `vs-select`                                      |
| isCompact      | Boolean | false               | Applies compact style to vs-select                                                                |
| emptyItemsText | String  | `No Data Available` | Empty text                                                                                        |

::: tip
You can also pass `disable: true` in array of objects to disable particular item.
:::

```html
// Example
<template>
  <vs-select :options="options"></vs-select>
</template>

<script>
  import { VsSelect } from '@vuesimple/vs-select';

  export default {
    data() {
      return {
        options: [
          { label: 'Iron Man', value: 'Tony' },
          { label: 'Thor', value: 'thor', disabled: true },
          { label: 'Captain America', value: 'Steve Roger' },
        ],
      };
    },
  };
</script>
```

## Events

| Name     | Description                        |
| -------- | ---------------------------------- |
| v-model  | Emitted when the item is selected. |
| onSelect | Emitted when the item is selected. |

::: tip

Colors/ radius can be modified for the select box using css variables.
Default colors used:

```css
<style>
  .vs-select,
  .vs-multiselect {
    --vs-select-bg: #ffffff;
    --vs-select-border: #d8dcde;
    --vs-select-border-hover: #5293c7;
    --vs-select-hover: #edf7ff;
    --vs-select-error: #cc3340;
    --vs-select-icon: #68737d;
    --vs-select-border-radius: 4px;
  }
</style>
```

:::
