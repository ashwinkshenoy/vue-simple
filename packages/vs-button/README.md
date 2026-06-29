# Vue Simple Button

#### 🗃 A simple vue button.

A light weight vue plugin built groundup.

[![npm](https://img.shields.io/npm/v/@vuesimple/vs-button.svg)](https://www.npmjs.com/package/@vuesimple/vs-button)
[![npm](https://img.shields.io/npm/dt/@vuesimple/vs-button.svg)](https://img.shields.io/npm/dt/@vuesimple/vs-button.svg)
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
npm i @vuesimple/vs-button
```

<br />

### 🚀 Usage

```html
<template>
  <vs-button>Default</vs-button>
  <vs-button variant="primary" fill>Primary</vs-button>
</template>

<script>
  import VsButton from '@vuesimple/vs-button';

  export default {
    components: {
      VsButton,
    },
  };
</script>
```

<br />

### 🌎 CDN

```html
<script src="https://unpkg.com/@vuesimple/vs-button@<version>/dist/vs-button.min.js"></script>
```

```javascript
// Main/Entry file
app.use(VsButton.plugin);
```

```html
<template>
  <vs-button>Default</vs-button>
  <vs-button variant="primary" fill>Primary</vs-button>
</template>
```

<br />

<h3> 
  <img src="https://i.imgur.com/MWynQNa.png" width="20px"> Nuxt.js
</h3>

Nuxt Code Snippet

After installation,

- Create a file `/plugins/vs-button.js`

  ```javascript
  import Vue from 'vue';
  import VsButton from '@vuesimple/vs-button';

  Vue.component('vs-button', VsButton);
  ```

- Update `nuxt.config.js`
  ```javascript
  module.exports = {
    ...
    plugins: [
      { src: '~plugins/vs-button', mode: 'client' }
      ...
    ]
  }
  ```
- In the page/ component

  ```html
  <template>
    <vs-button>Default</vs-button>
    <vs-button variant="primary" fill>Primary</vs-button>
  </template>
  ```

**Note**

- For older Nuxt versions, use `<no-ssr>...</no-ssr>` tag.
- You can also do
  `import VsButton from '@vuesimple/vs-button'`
  & add in `component:{VsButton}` and use it within component, without globally installing in plugin folder.

<br />

### ⚙ Props

| Name      | Type    | Default   | Description                                                                                              |
| --------- | ------- | --------- | -------------------------------------------------------------------------------------------------------- |
| variant   | String  | `default` | Type of button to be shown. (`default`, `primary`, `secondary`, `warning`, `danger`, `success`, `light`) |
| size      | String  | `medium`  | Size of button. (`small`, `medium`, `large`)                                                             |
| fill      | Boolean | -         | Applies background color to button                                                                       |
| isRound   | Boolean | -         | Applies round/pill styling                                                                               |
| isLoading | Boolean | -         | Will show loader and button will be disabled                                                             |
| disabled  | Boolean | -         | Disable button                                                                                           |
| href      | String  | -         | Link/URL string                                                                                          |
| target    | String  | -         | Can add `_blank`, `_self`                                                                                |
| rel       | String  | -         | Rel strings can be added like `noreferrer`, `noopener`                                                   |

<br />

### 🎨 CSS Variables

Button variants can now be themed with CSS custom properties.

Example:

```css
.my-brand-theme .vs-button {
  --vs-button-primary-color: #0b5ed7;
  --vs-button-primary-border: #0b5ed7;
  --vs-button-primary-hover-bg: #dbeafe;
  --vs-button-primary-fill-bg: #0b5ed7;
  --vs-button-primary-fill-hover-bg: #084298;

  --vs-button-secondary-color: #495057;
  --vs-button-secondary-border: #495057;
  --vs-button-secondary-fill-bg: #495057;

  --vs-button-disabled-bg: #eceff3;
  --vs-button-disabled-color: #9aa4ad;
}
```

Available variants: `primary`, `secondary`, `success`, `warning`, `danger`, `light`.

Each variant supports these tokens:

- `--vs-button-<variant>-color`
- `--vs-button-<variant>-bg`
- `--vs-button-<variant>-border`
- `--vs-button-<variant>-hover-color`
- `--vs-button-<variant>-hover-bg`
- `--vs-button-<variant>-hover-border`
- `--vs-button-<variant>-active-color`
- `--vs-button-<variant>-active-bg`
- `--vs-button-<variant>-active-border`
- `--vs-button-<variant>-focus-border`
- `--vs-button-<variant>-focus-shadow`
- `--vs-button-<variant>-fill-color`
- `--vs-button-<variant>-fill-bg`
- `--vs-button-<variant>-fill-border`
- `--vs-button-<variant>-fill-hover-bg`
- `--vs-button-<variant>-fill-hover-border`
- `--vs-button-<variant>-fill-active-bg`
- `--vs-button-<variant>-fill-active-border`
- `--vs-button-<variant>-fill-focus-border`
- `--vs-button-<variant>-fill-focus-shadow`

Global disabled state tokens:

- `--vs-button-disabled-bg`
- `--vs-button-disabled-border`
- `--vs-button-disabled-color`

<br />

### 🔥 Events

| Name  | Description                      |
| ----- | -------------------------------- |
| click | Emitted when the button clicked. |

<br />

### 📎 Slots

You can define own item markup via slots:

| Name      | Description                                                    |
| --------- | -------------------------------------------------------------- |
| (default) | Holds the button content and can contain HTML.                 |
| loader    | Holds the loader component and can contain HTML/vue-component. |
