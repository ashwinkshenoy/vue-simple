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

Demo: [Link](https://vuesimple.netlify.app)

<br />

### 🛠 Install

```bash
npm i @vuesimple/vs-loader
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

```javascript
// Main/Entry file
app.use(VsLoader.plugin);
```

```html
<template>
  <vs-loader variant="pulse"></vs-loader>
</template>
```

<br />

<h3> 
  <img src="https://i.imgur.com/MWynQNa.png" width="20px"> Nuxt.js
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
  `import VsLoader from '@vuesimple/vs-loader'`
  & add in `component:{VsLoader}` and use it within component, without globally installing in plugin folder.

<br />

### ⚙ Props

#### Common props

| Name    | Type           | Default | Description                                             |
| ------- | -------------- | ------- | ------------------------------------------------------- |
| variant | String         | `pulse` | Variants: `pulse`, `dots`, `inline`, `skeleton`.        |
| color   | String         | -       | Loader color.                                           |
| size    | Number\|String | -       | Loader size.                                            |
| center  | Boolean        | -       | Center aligns the loader wrt the parent div.            |

#### Skeleton props (`variant="skeleton"`)

| Name   | Type           | Default | Description                                                                 |
| ------ | -------------- | ------- | --------------------------------------------------------------------------- |
| type   | String         | `line`  | Shape of the skeleton item. Options: `line`, `square`, `circle`.            |
| count  | Number\|String | `1`     | Number of skeleton items to render.                                         |
| size   | Number\|String | -       | Override size in px or any CSS value. Sets height for `line`, width+height for `square`/`circle`. |
| width  | String         | -       | Override width for `line` type (e.g. `60%`, `200px`).                      |
| color  | String         | -       | Base skeleton color. Defaults to `#e9e9e9`. Also accepts CSS variable.      |
| center | Boolean        | -       | Center aligns the skeleton items.                                           |

#### Skeleton CSS variables

| Variable                | Default                      | Description                    |
| ----------------------- | ---------------------------- | ------------------------------ |
| `--vs-skeleton-color`   | `#e9e9e9`                    | Base background color.         |
| `--vs-skeleton-shimmer` | `rgba(255, 255, 255, 0.6)`   | Shimmer highlight color.       |

<br />

### 🦴 Skeleton Examples

**Line (default)**
```html
<vs-loader variant="skeleton" type="line" :count="3" />
```

**Circle**
```html
<vs-loader variant="skeleton" type="circle" :count="3" size="48" />
```

**Square**
```html
<vs-loader variant="skeleton" type="square" size="100" />
```

**Card preview layout**
```html
<div style="display: flex; gap: 16px; align-items: flex-start">
  <vs-loader variant="skeleton" type="circle" size="48" />
  <div style="flex: 1; display: flex; flex-direction: column; gap: 8px">
    <vs-loader variant="skeleton" type="line" width="50%" size="14" />
    <vs-loader variant="skeleton" type="line" width="80%" size="14" />
    <vs-loader variant="skeleton" type="line" width="65%" size="14" />
  </div>
</div>
```

**Custom color via CSS variable**
```html
<vs-loader variant="skeleton" type="line" :count="3" style="--vs-skeleton-shimmer: rgba(255,255,255,0.9)" />
```
