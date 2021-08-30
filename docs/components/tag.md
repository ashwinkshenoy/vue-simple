---
title: Tag
---

<masthead title="Tag" description="A simple vue tag.">
  <component-links
    codesandbox="https://codesandbox.io/s/vs-tag-l7q3d"
    github="https://github.com/ashwinkshenoy/vue-simple/tree/master/packages/vs-tag"
    packageName="@vuesimple/vs-tag">
  </component-links>
</masthead>

## Install

```bash
npm i @vuesimple/vs-tag
```

```bash
yarn add @vuesimple/vs-tag
```

<br />

## Usage

```html
<template>
  <vs-tag variant="primary">
    Primary
  </vs-tag>
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

## CDN

```html
<script src="https://unpkg.com/@vuesimple/vs-tag@<version>/dist/vs-tag.min.js"></script>
```

::: tip

Replace `<version>` with a version number in the above url.

:::

```html
<template>
  <vs-tag variant="primary">
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
  import VsTag from '@vuesimple/vs-tag';

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
    <vs-tag variant="primary">
      Primary
    </vs-tag>
  </template>
  ```

::: tip

- For older Nuxt versions, use `<no-ssr>...</no-ssr>` tag.
- You can also do
  `import VsTag from '@vuesimple/vs-tag'`
  & add in `components:{VsTag}` and use it within component, without globally installing in plugin folder.

:::

<br />

## Props

| Name     | Type    | Default  | Description                                                            |
| -------- | ------- | -------- | ---------------------------------------------------------------------- |
| variant  | String  | -        | Type of tag to be shown. (`primary`, `secondary`, `warning`, `danger`) |
| size     | String  | `medium` | Size of tag. (`small`, `medium`, `large`)                              |
| is-bold  | Boolean | `true`   | Bold text for tag.                                                     |
| is-pill  | Boolean | `medium` | Applies pill styling                                                   |
| is-round | Boolean | `medium` | Applies styles to round the tag                                        |
| bg-color | String  | -        | Applies hex/rgb/text color to tags background color                    |
| is-close | Boolean | `false`  | Show close button                                                      |

<br />

## Events

| Name  | Description                                              |
| ----- | -------------------------------------------------------- |
| click | On close button click (only available if `is-close` set) |

<br />

## Slots

You can define own item markup via slots:

| Name      | Description                                 |
| --------- | ------------------------------------------- |
| (default) | Holds the tag content and can contain HTML. |
