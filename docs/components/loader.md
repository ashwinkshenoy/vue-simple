---
title: Loader
---

<masthead title="Loader" description="A simple vue loader. Perfect for all your loader scenarios.">
  <component-links
    codesandbox="https://codesandbox.io/s/vs-loader-1ue35"
    github="https://github.com/ashwinkshenoy/vue-simple/tree/master/packages/vs-loader"
    packageName="@vuesimple/vs-loader">
  </component-links>
</masthead>

## Install

```bash
npm i @vuesimple/vs-loader
```

```bash
yarn add @vuesimple/vs-loader
```

<br />

## Usage

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

## CDN

```html
<script src="https://unpkg.com/@vuesimple/vs-loader@<version>/dist/vs-loader.min.js"></script>
```

::: tip

Replace `<version>` with a version number in the above url.

:::

```html
<template>
  <vs-loader variant="pulse"></vs-loader>
</template>
```

<br />

## Nuxt.js

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

## Props

| Name    | Type   | Default   | Description               |
| ------- | ------ | --------- | ------------------------- |
| variant | String | `pulse`   | Variants: `pulse`, `dots` |
| color   | String | `#1f73b7` | Loader color              |
| size    | String | `10px`    | Loader size               |
