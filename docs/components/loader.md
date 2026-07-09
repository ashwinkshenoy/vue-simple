---
title: Loader
---

<masthead title="Loader" description="A simple vue loader. Perfect for all your loader scenarios.">
  <component-links
    github="https://github.com/ashwinkshenoy/vue-simple/tree/master/packages/vs-loader"
    packageName="@vuesimple/vs-loader">
  </component-links>
</masthead>

## Demo

<script setup>
  import Loader from '../../src/DemoComponents/Loader.vue';
</script>

<loader class="demo"></loader>

<br />

## Install

```bash
npm i @vuesimple/vs-loader
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
<script src="https://cdn.jsdelivr.net/npm/@vuesimple/vs-loader@<version>/dist/index.min.js"></script>
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

## Props

| Name    | Type    | Default   | Description                                  |
| ------- | ------- | --------- | -------------------------------------------- |
| variant | String  | `pulse`   | Variants: `pulse`, `dots`, `inline`.         |
| color   | String  | `#1f73b7` | Loader color.                                |
| size    | Number  | `10`      | Loader size.                                 |
| center  | Boolean | -         | Center aligns the loader wrt the parent div. |

<!-- ## Skeleton props (`variant="skeleton"`)

| Name   | Type           | Default | Description                                                                                       |
| ------ | -------------- | ------- | ------------------------------------------------------------------------------------------------- |
| type   | String         | `line`  | Shape of the skeleton item. Options: `line`, `square`, `circle`.                                  |
| count  | Number\|String | `1`     | Number of skeleton items to render.                                                               |
| size   | Number\|String | -       | Override size in px or any CSS value. Sets height for `line`, width+height for `square`/`circle`. |
| width  | String         | -       | Override width for `line` type (e.g. `60%`, `200px`).                                             |
| color  | String         | -       | Base skeleton color. Defaults to `#e9e9e9`. Also accepts CSS variable.                            |
| center | Boolean        | -       | Center aligns the skeleton items.                                                                 |

## Skeleton CSS variables

| Variable                | Default                    | Description              |
| ----------------------- | -------------------------- | ------------------------ |
| `--vs-skeleton-color`   | `#e9e9e9`                  | Base background color.   |
| `--vs-skeleton-shimmer` | `rgba(255, 255, 255, 0.6)` | Shimmer highlight color. |

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
``` -->
