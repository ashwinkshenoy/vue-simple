---
title: Tag
---

<masthead title="Tag" description="A simple vue tag.">
  <component-links
    codesandbox="https://codesandbox.io/s/vs-tag-l7q3d"
    github="https://github.com/ashwinkshenoy/vue-simple/tree/master/packages/vs-tag"
    packageName="vs-tag">
  </component-links>
</masthead>

## Install

```bash
npm i vs-tag
```

```bash
yarn add vs-tag
```

<br />

## Usage

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

## CDN

```html
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

## Nuxt.js

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

::: tip

- For older Nuxt versions, use `<no-ssr>...</no-ssr>` tag.
- You can also do
  `import VsTag from 'vs-tag'`
  & add in `components:{VsTag}` and use it within component, without globally installing in plugin folder.

:::

<br />

## Props

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

## Slots

You can define own item markup via slots:

| Name      | Description                                 |
| --------- | ------------------------------------------- |
| (default) | Holds the tag content and can contain HTML. |
