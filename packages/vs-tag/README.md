# Vue Simple Tag

#### 🗃 A simple vue tag. Perfect for all your tag scenarios.

A light weight vue plugin built groundup.

[![npm](https://img.shields.io/npm/v/@vuesimple/vs-tag.svg)](https://www.npmjs.com/package/@vuesimple/vs-tag)
[![npm](https://img.shields.io/npm/dt/@vuesimple/vs-tag.svg)](https://img.shields.io/npm/dt/@vuesimple/vs-tag.svg)
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
npm i @vuesimple/vs-tag
```

<br />

### 🚀 Usage

```html
<template>
  <vs-tag variant="primary"> Primary </vs-tag>
</template>

<script>
  import VsTag from '@vuesimple/vs-tag';

  export default {
    components: {
      VsTag,
    },
  };
</script>
```

<br />

### 🌎 CDN

```html
<script src="https://unpkg.com/@vuesimple/vs-tag@<version>/dist/vs-tag.min.js"></script>
```

```javascript
// Main/Entry file
app.use(VsTag.plugin);
```

```html
<template>
  <vs-tag variant="primary"> Primary </vs-tag>
</template>
```

<br />

### ⚙ Props

| Name       | Type    | Default  | Description                                                            |
| ---------- | ------- | -------- | ---------------------------------------------------------------------- |
| variant    | String  | -        | Type of tag to be shown. (`primary`, `secondary`, `warning`, `danger`) |
| size       | String  | `medium` | Size of tag. (`small`, `medium`, `large`)                              |
| is-bold    | Boolean | `true`   | Bold text for tag.                                                     |
| is-pill    | Boolean | `medium` | Applies pill styling                                                   |
| is-round   | Boolean | `medium` | Applies styles to round the tag                                        |
| bg-color   | String  | -        | Applies hex/rgb/text color to tags background color                    |
| text-color | String  | -        | Applies hex/rgb/text color to tags text color                          |
| is-close   | Boolean | `false`  | Show close button                                                      |

<br />

### 🔥 Events

| Name  | Description                                              |
| ----- | -------------------------------------------------------- |
| click | On close button click (only available if `is-close` set) |

<br />

### 📎 Slots

You can define own item markup via slots:

| Name      | Description                                 |
| --------- | ------------------------------------------- |
| (default) | Holds the tag content and can contain HTML. |
