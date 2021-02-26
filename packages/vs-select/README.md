# Vue Simple Select

#### 🗃 A simple vue select. Perfect for all your select scenarios.

A light weight vue plugin built groundup.

[![npm](https://img.shields.io/npm/v/vs-select.svg)](https://www.npmjs.com/package/vs-select)
[![npm](https://img.shields.io/npm/dt/vs-select.svg)](https://img.shields.io/npm/dt/vs-select.svg)
<br />

![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)
![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)
![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)

<br />

### 📺 Live Demo

Code Sandbox: [Link](https://codesandbox.io/s/vs-select-4ek10)

<br />

### 🛠 Install

```bash
npm i vs-select
```

```bash
yarn add vs-select
```

<br />

### 🚀 Usage

```html
<template>
  <vs-select :options="options1"></vs-select>
  <vs-multiselect :options="options1"></vs-multiselect>
</template>

<script>
  import { VsSelect, VsMultiselect } from 'vs-select';

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

<br />

### 🌎 CDN

```javascript
<script src="https://unpkg.com/vs-select@0.1.3/dist/vs-select.min.js"></script>
```

```html
<template>
  <vs-select :options="options1"></vs-select>
  <vs-multiselect :options="options1"></vs-multiselect>
</template>
```

<br />

<h3> 
  <img src="https://nuxtjs.org/favicon.ico" width="20px"> Nuxt.js
</h3>

Nuxt Code Snippet

After installation,

- Create a file `/plugins/vs-select.js`

  ```javascript
  import Vue from 'vue';
  import { VsSelect, VsMultiselect } from 'vs-select';

  Vue.component('vs-select', VsSelect);
  Vue.component('vs-select', VsMultiselect);
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

<br />

### 🔥 Customizable

```html
<vs-select :options="options1" is-search>
  <template v-slot:options="{ options, selected, onSelectedItem }">
    <li
      v-for="(option, index) in options"
      :key="'selected-' + index"
      class="menu-item"
      :class="[{ 'menu-item--is-checked': selected === option }]"
      @click="onSelectedItem(option, index)"
    >
      <span>{{ option }}</span>
    </li>
  </template>
</vs-select>
```

<br />

### ⚙ Props

| Name        | Type    | Default  | Description                                                                            |
| ----------- | ------- | -------- | -------------------------------------------------------------------------------------- |
| options     | Array   | -        | This can be array or array of objects                                                  |
| isSearch    | Boolean | false    | Searchable select                                                                      |
| label       | String  | 'Select' | Placeholder text                                                                       |
| preselected | Array   | -        | Preselected items. For array of objects, pass `value` as array items ex: `['D', 'BB']` |
| isError     | Boolean | false    | To show error in select box                                                            |
| disabled    | Boolean | false    | To disable select box                                                                  |

<br />

### 🔥 Events

| Name     | Description                        |
| -------- | ---------------------------------- |
| v-model  | Emitted when the item is selected. |
| onSelect | Emitted when the item is selected. |

<br />

### 📎 Slots

You can define own item markup via slots:

| Name    | Description                                                                                                                                   |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| options | Holds the select option content and can contain HTML. Slot data `options, selected (Array), selectedObject(Array of Objects), onSelectedItem` |
