# Vue Simple Tag

#### 🗃 A simple vue tag. Perfect for all your tag scenarios.

A light weight vue plugin built groundup.

[![npm](https://img.shields.io/npm/v/vs-tag.svg)](https://www.npmjs.com/package/vs-tag)
[![npm](https://img.shields.io/npm/dt/vs-tag.svg)](https://img.shields.io/npm/dt/vs-tag.svg)
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
npm i vs-tag
```

```bash
yarn add vs-tag
```

<br />

### 🚀 Usage

```html
<template>
  <vs-tag type="primary">
    Primary
  </vs-tag>
</template>

<script>
  import VsTag from 'vs-tag';

  export default {
    components: {
      VsTag,
    },
  };
</script>
```

<br />

### 🌎 CDN

```javascript
<script src="https://unpkg.com/vs-tag@1/dist/vs-tag.min.js"></script>
```

```html
<template>
  <vs-tag type="primary">
    Primary
  </vs-tag>
</template>
```

<br />

<h3> 
  <img src="https://nuxtjs.org/favicon.ico" width="20px"> Nuxt.js
</h3>

Nuxt Code Snippet

After installation,

- Create a file `/plugins/vs-tag.js`

  ```javascript
  import Vue from 'vue';
  import VsTag from 'vs-tag';

  Vue.component('vs-tag', VsTag);
  ```

- Update `nuxt.config.js`
  ```javascript
  module.exports = {
    ...
    plugins: [
      { src: '~plugins/vs-tag', mode: 'client' }
      ...
    ]
  }
  ```
- In the page/ component

  ```html
  <template>
    <vs-tag type="primary">
      Primary
    </vs-tag>
  </template>
  ```

**Note**

- For older Nuxt versions, use `<no-ssr>...</no-ssr>` tag.
- You can also do
  `import VsTag from 'vs-tag'`
  & add in `component:{VsTag}` and use it within component, without globally installing in plugin folder.

<br />

### ⚙ Props

| Name       | Type    | Default  | Description                                                            |
| ---------- | ------- | -------- | ---------------------------------------------------------------------- |
| type       | String  | -        | Type of tag to be shown. (`primary`, `secondary`, `warning`, `danger`) |
| size       | String  | `medium` | Size of tag. (`small`, `medium`, `large`)                              |
| is-bold    | Boolean | `true`   | Bold text for tag.                                                     |
| is-pill    | Boolean | `medium` | Applies pill styling                                                   |
| is-round   | Boolean | `medium` | Applies styles to round the tag                                        |
| bg-color   | String  | -        | Applies hex/rgb/text color to tags background color                    |
| text-color | String  | -        | Applies hex/rgb/text color to tags text color                          |

<br />

### 📎 Slots

You can define own item markup via slots:

| Name      | Description                                 |
| --------- | ------------------------------------------- |
| (default) | Holds the tag content and can contain HTML. |
