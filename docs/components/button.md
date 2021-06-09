---
title: Button
---

<masthead title="Button" description="A simple set of buttons">
  <component-links
    codesandbox="https://codesandbox.io/s/vs-button-w8x1m"
    github="https://github.com/ashwinkshenoy/vue-simple/tree/master/packages/vs-button"
    packageName="vs-button">
  </component-links>
</masthead>

## Install

```bash
npm i vs-button
```

```bash
yarn add vs-button
```

<br />

## Usage

```html
<template>
  <vs-button>Default</vs-button>
  <vs-button variant="primary" fill>Primary</vs-button>
</template>

<script>
  import VsButton from 'vs-button';

  export default {
    components: {
      VsButton,
    },
  };
</script>
```

<br />

## CDN

```html
<script src="https://unpkg.com/vs-button@1.0.1/dist/vs-button.min.js"></script>
```

```html
<template>
  <vs-button>Default</vs-button>
  <vs-button variant="primary" fill>Primary</vs-button>
</template>
```

<br />

<h3> 
  <img src="https://nuxtjs.org/favicon.ico" width="20px"> Nuxt.js
</h3>

Nuxt Code Snippet

After installation,

- Create a file `/plugins/vs-button.js`

  ```javascript
  import Vue from 'vue';
  import VsButton from 'vs-button';

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
  `import VsButton from 'vs-button'`
  & add in `component:{VsButton}` and use it within component, without globally installing in plugin folder.

<br />

## Props

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

## Events

| Name  | Description                      |
| ----- | -------------------------------- |
| click | Emitted when the button clicked. |

<br />

## Slots

You can define own item markup via slots:

| Name      | Description                                                    |
| --------- | -------------------------------------------------------------- |
| (default) | Holds the button content and can contain HTML.                 |
| loader    | Holds the loader component and can contain HTML/vue-component. |
