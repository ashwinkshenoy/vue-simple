---
title: Button
---

<masthead title="Button" description="A simple set of buttons">
  <component-links
    github="https://github.com/ashwinkshenoy/vue-simple/tree/master/packages/vs-button"
    packageName="@vuesimple/vs-button">
  </component-links>
</masthead>

## Demo

<script setup>
  import VsButton from '../../src/DemoComponents/Button.vue';
</script>

<vs-button class="demo"></vs-button>

<br />

## Install

```bash
npm i @vuesimple/vs-button
```

<br />

## Usage

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

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@vuesimple/vs-button@<version>/dist/index.min.js"></script>
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

You can define own item markup via #slot-name:

| Name      | Description                                                    |
| --------- | -------------------------------------------------------------- |
| (default) | Holds the button content and can contain HTML.                 |
| loader    | Holds the loader component and can contain HTML/vue-component. |
