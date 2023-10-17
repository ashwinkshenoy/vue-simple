---
title: Pagination
---

<masthead title="Pagination" description="A simple pagination component">
  <component-links
    codesandbox="https://codesandbox.io/s/vs-pagination-vlsrl"
    github="https://github.com/ashwinkshenoy/vue-simple/tree/master/packages/vs-pagination"
    packageName="@vuesimple/vs-pagination">
  </component-links>
</masthead>

## Install

```bash
npm i @vuesimple/vs-pagination
```

<br />

## Usage

```html
<template>
  <vs-pagination :total-pages="20" @change="changePage"></vs-pagination>
</template>

<script>
  import VsPagination from '@vuesimple/vs-pagination';

  export default {
    components: {
      VsPagination,
    },
  };
</script>
```

<br />

## CDN

```html
<script src="https://unpkg.com/@vuesimple/vs-pagination@<version>/dist/vs-pagination.min.js"></script>
```

::: tip

Replace `<version>` with a version number in the above url.

:::

```javascript
// Main/Entry file
app.use(VsPagination);
```

```html
<template>
  <vs-pagination :total-pages="20" @change="changePage"></vs-pagination>
</template>
```

<br />

## Nuxt.js

Nuxt Code Snippet

After installation,

- Create a file `/plugins/vs-pagination.js`

  ```javascript
  import Vue from 'vue';
  import VsPagination from '@vuesimple/vs-pagination';

  Vue.component('vs-pagination', VsPagination);
  ```

- Update `nuxt.config.js`
  ```javascript
  module.exports = {
    ...
    plugins: [
      { src: '~plugins/vs-pagination', mode: 'client' }
      ...
    ]
  }
  ```
- In the page/ component

  ```html
  <template>
    <vs-pagination :total-pages="20" @change="changePage"></vs-pagination>
  </template>
  ```

**Note**

- For older Nuxt versions, use `<no-ssr>...</no-ssr>` tag if you are facing ssr issues.
- You can also do
  `import VsPagination from '@vuesimple/vs-pagination'`
  & add in `component:{VsPagination}` and use it within component, without globally installing in plugin folder.

<br />

## Props

| Name           | Type    | Default | Description                                                                              |
| -------------- | ------- | ------- | ---------------------------------------------------------------------------------------- |
| total-pages    | Number  | -       | Total count of pages. **required**                                                       |
| current-page   | Number  | 1       | Sets the current page.                                                                   |
| page-padding   | Number  | 1       | Sets the number of pages that appear before and after active page between gap indicator. |
| page-gap       | Number  | 2       | Positions the leading and trailing gap indicator, based on the current and total pages.  |
| hide-prev-next | Boolean | `false` | Hide prev and next button on reaching first or last page.                                |

<br />

## Events

| Name   | Description                        |
| ------ | ---------------------------------- |
| change | On page change (return page value) |

<br />

## Slots

You can define own arrow icon markup via slots:

| Name      | Description     |
| --------- | --------------- |
| leftIcon  | Left Icon slot  |
| rightIcon | Right Icon slot |
