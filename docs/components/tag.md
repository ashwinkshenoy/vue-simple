---
title: Tag
---

<masthead title="Tag" description="A simple vue tag.">
  <component-links
    github="https://github.com/ashwinkshenoy/vue-simple/tree/master/packages/vs-tag"
    packageName="@vuesimple/vs-tag">
  </component-links>
</masthead>

## Demo

<script setup>
  import TagComponent from '../../src/DemoComponents/Tag.vue';
</script>

<tag-component class="demo"></tag-component>

<br />

## Install

```bash
npm i @vuesimple/vs-tag
```

<br />

## Usage

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

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@vuesimple/vs-tag@<version>/dist/index.min.js"></script>
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

## Props

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

## Events

| Name  | Description                                              |
| ----- | -------------------------------------------------------- |
| click | On close button click (only available if `is-close` set) |

<br />

## Slots

You can define own item markup via #slot-name:

| Name      | Description                                 |
| --------- | ------------------------------------------- |
| (default) | Holds the tag content and can contain HTML. |
