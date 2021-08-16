# Vue Simple Loader

#### 🗃 A simple vue loader. Perfect for all your loader scenarios.

A light weight vue plugin built groundup.

[![npm](https://img.shields.io/npm/v/@vuesimple/vs-loader.svg)](https://www.npmjs.com/package/@vuesimple/vs-loader)
[![npm](https://img.shields.io/npm/dt/@vuesimple/vs-loader.svg)](https://img.shields.io/npm/dt/@vuesimple/vs-loader.svg)
<br />

![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)
![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)
![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)

<br />

### 📺 Live Demo

Code Sandbox: [Link](https://codesandbox.io/s/vs-loader-1ue35)

<br />

### 🛠 Install

```bash
npm i @vuesimple/vs-loader
```

```bash
yarn add @vuesimple/vs-loader
```

<br />

### 🚀 Usage

```html
<template>
  <vs-loader variant="pulse"></vs-loader>
</template>

<script>
  import VsLoader from '@vuesimple/vs-loader';

  export default {
    components: {
      VsLoader,
    },
  };
</script>
```

<br />

### 🌎 CDN

```html
<script src="https://unpkg.com/@vuesimple/vs-loader/dist/vs-loader.min.js"></script>
```

```html
<template>
  <vs-loader variant="pulse"></vs-loader>
</template>
```

<br />

<h3> 
  <img src="https://nuxtjs.org/favicon.ico" width="20px"> Nuxt.js
</h3>

Nuxt Code Snippet

After installation,

- Create a file `/plugins/vs-loader.js`

  ```javascript
  import Vue from 'vue';
  import VsLoader from '@vuesimple/vs-loader';

  Vue.component('vs-loader', VsLoader);
  ```

- Update `nuxt.config.js`
  ```javascript
  module.exports = {
    ...
    plugins: [
      { src: '~plugins/vs-loader', mode: 'client' }
      ...
    ]
  }
  ```
- In the page/ component

  ```html
  <template>
    <vs-loader variant="pulse"></vs-loader>
  </template>
  ```

**Note**

- For older Nuxt versions, use `<no-ssr>...</no-ssr>` tag.
- You can also do
  `import VsAlert from '@vuesimple/vs-alert'`
  & add in `component:{VsAlert}` and use it within component, without globally installing in plugin folder.

<br />

### ⚙ Props

| Name  | Type   | Default   | Description  |
| ----- | ------ | --------- | ------------ |
| color | String | `#1f73b7` | Loader color |
| size  | String | `10px`    | Loader size  |
