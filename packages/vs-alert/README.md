# Vue Simple Alert

#### 🗃 A simple vue alert. Perfect for all your alert scenarios.

A light weight vue plugin built groundup.

[![npm](https://img.shields.io/npm/v/@vuesimple/vs-alert.svg)](https://www.npmjs.com/package/@vuesimple/vs-alert)
[![npm](https://img.shields.io/npm/dt/@vuesimple/vs-alert.svg)](https://img.shields.io/npm/dt/@vuesimple/vs-alert.svg)
<br />

![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)
![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)
![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)

<br />

### 📺 Live Demo

Code Sandbox: [Link](https://codesandbox.io/s/vs-alert-yhjce)

<img src="https://raw.githubusercontent.com/ashwinkshenoy/vue-simple/master/packages/vs-alert/demo_image/image.png" width="600">

<br />

### 🛠 Install

```bash
npm i @vuesimple/vs-alert
```

<br />

### 🚀 Usage

```html
<template>
  <vs-alert variant="success"> Success </vs-alert>
</template>

<script>
  import VsAlert from '@vuesimple/vs-alert';

  export default {
    components: {
      VsAlert,
    },
  };
</script>
```

<br />

### 🌎 CDN

```html
<script src="https://unpkg.com/@vuesimple/vs-alert@<version>/dist/vs-alert.min.js"></script>
```

```javascript
// Main/Entry file
app.use(VsAlert);
```

```html
<template>
  <vs-alert variant="success"> Success </vs-alert>
</template>
```

<br />

<h3> 
  <img src="https://i.imgur.com/MWynQNa.png" width="20px"> Nuxt.js
</h3>

Nuxt Code Snippet

After installation,

- Create a file `/plugins/vs-alert.js`

  ```javascript
  import Vue from 'vue';
  import VsAlert from '@vuesimple/vs-alert';

  Vue.component('vs-alert', VsAlert);
  ```

- Update `nuxt.config.js`
  ```javascript
  module.exports = {
    ...
    plugins: [
      { src: '~plugins/vs-alert', mode: 'client' }
      ...
    ]
  }
  ```
- In the page/ component

  ```html
  <template>
    <vs-alert variant="success"> Success </vs-alert>
  </template>
  ```

**Note**

- For older Nuxt versions, use `<no-ssr>...</no-ssr>` tag.
- You can also do
  `import VsAlert from '@vuesimple/vs-alert'`
  & add in `component:{VsAlert}` and use it within component, without globally installing in plugin folder.

<br />

### ⚙ Props

| Name      | Type    | Default | Description                                                           |
| --------- | ------- | ------- | --------------------------------------------------------------------- |
| variant   | String  | -       | Type of alert to be shown. (success, warning, error, info, secondary) |
| title     | String  | -       | The alert title (text only). For HTML, use the header slot.           |
| showClose | Boolean | false   | Show alert close icon                                                 |
| small     | Boolean | false   | Applies reduced padding                                               |
| toast     | Boolean | false   | Applies toast design                                                  |
| noBg      | Boolean | false   | Remove background color                                               |

<br />

### 🔥 Events

| Name  | Description                                                                  |
| ----- | ---------------------------------------------------------------------------- |
| close | Emitted when the alert close icons is clicked. Listen for it using `@close`. |

<br />

### 📎 Slots

You can define own item markup via slots:

| Name      | Description                                   |
| --------- | --------------------------------------------- |
| (default) | Holds the alert content and can contain HTML. |
| icon      | Slot to add custom icon for type              |
| title     | Slot to add custom title                      |
