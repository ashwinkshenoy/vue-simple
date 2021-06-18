# Vue Simple Pagination

#### 🗃 A simple vue pagination.

A light weight vue plugin built with accessibility in mind.

[![npm](https://img.shields.io/npm/v/@vuesimple/vs-pagination.svg)](https://www.npmjs.com/package/@vuesimple/vs-pagination)
[![npm](https://img.shields.io/npm/dt/@vuesimple/vs-pagination.svg)](https://img.shields.io/npm/dt/@vuesimple/vs-pagination.svg)
<br />

![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)
![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)
![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)

<br />

### 📺 Live Demo

Code Sandbox: [Link](https://codesandbox.io/s/vs-tag-l7q3d)

<br />

### 🛠 Install

```bash
npm i @vuesimple/vs-pagination
```

```bash
yarn add @vuesimple/vs-pagination
```

<br />

### 🚀 Usage

```html
<template>
  <vs-pagination :page-count="20" v-model="currentPage" @change="changePage"></vs-pagination>
</template>

<script>
  import VsPagination from '@vuesimple/vs-pagination';

  export default {
    components: {
      VsPagination,
    },
  };
</script>
```

<br />

### 🌎 CDN

```javascript
<script src='https://unpkg.com/@vuesimple/vs-pagination@<version>/dist/vs-pagination.min.js'></script>
```

```html
<template>
  <vs-pagination :page-count="20" v-model="currentPage" @change="changePage"></vs-pagination>
</template>
```

<br />

<h3> 
  <img src="https://nuxtjs.org/favicon.ico" width="20px"> Nuxt.js
</h3>

Nuxt Code Snippet

After installation,

- Create a file `/plugins/vs-pagination.js`

  ```javascript
  import Vue from 'vue';
  import VsPagination from '@vuesimple/vs-pagination';

  Vue.component('vs-pagination', VsPagination);
  ```

- Update `nuxt.config.js`
  ```javascript
  module.exports = {
    ...
    plugins: [
      { src: '~plugins/vs-pagination', mode: 'client' }
      ...
    ]
  }
  ```
- In the page/ component

  ```html
  <template>
    <vs-pagination :page-count="20" v-model="currentPage" @change="changePage"></vs-pagination>
  </template>
  ```

**Note**

- For older Nuxt versions, use `<no-ssr>...</no-ssr>` tag if you are facing ssr issues.
- You can also do
  `import VsPagination from '@vuesimple/vs-pagination'`
  & add in `component:{VsPagination}` and use it within component, without globally installing in plugin folder.

<br />

### ⚙ Props

| Name                  | Type    | Default  | Description                                                   |
| --------------------- | ------- | -------- | ------------------------------------------------------------- |
| page-count            | Number  | -        | Total count of pages. **required**                            |
| page-range            | Number  | 5        | Range of pages which displayed.                               |
| break-view-text       | String  | `...`    | Text for the break view indicator.                            |
| container-class       | String  | -        | CSS class name for the layout.                                |
| break-view-link-class | String  | -        | CSS class name for tag `a` of `break view` element.           |
| active-class          | String  | active   | CSS class name for active page element.                       |
| disabled-class        | String  | disabled | CSS class name for disabled page element.                     |
| hide-prev-next        | Boolean | false    | Hide prev/next button when there is no previous or next page. |

<br />

### 🔥 Events

| Name            | Description      |
| --------------- | ---------------- |
| change          | On page change   |
| v-model (value) | get current page |

<br />

### 📎 Slots

You can define own item markup via slots:

| Name             | Description          |
| ---------------- | -------------------- |
| prevContent      | Previous button      |
| nextContent      | Next button          |
| breakViewContent | Break view indicator |
