# Vue Simple Tabs

#### 📑 A simple vue tabs component for organizing related content.

A light weight vue plugin built from the ground up.

[![npm](https://img.shields.io/npm/v/@vuesimple/vs-tabs.svg)](https://www.npmjs.com/package/@vuesimple/vs-tabs)
[![npm](https://img.shields.io/npm/dt/@vuesimple/vs-tabs.svg)](https://img.shields.io/npm/dt/@vuesimple/vs-tabs.svg)
<br />

![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)
![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)

<br />

### 📺 Live Demo

Demo: [Link](https://vuesimple.netlify.app)

<br />

### 🛠 Install

```bash
npm i @vuesimple/vs-tabs
```

<br />

### 🚀 Usage

```html
<template>
  <vs-tabs v-model="selected" :disabled-items="['usage']">
    <template #tab-overview>Overview</template>
    <template #tab-usage>Usage</template>

    <template #panel-overview>
      <p><strong>Overview panel</strong> with custom markup.</p>
    </template>
    <template #panel-usage>
      <p>Usage panel content rendered from slots.</p>
    </template>
  </vs-tabs>
</template>

<script>
  import VsTabs from '@vuesimple/vs-tabs';

  export default {
    components: {
      VsTabs,
    },
    data() {
      return {
        selected: 'overview',
      };
    },
  };
</script>
```

<br />

### 🌎 CDN

```html
<script src="https://unpkg.com/@vuesimple/vs-tabs@<version>/dist/index.min.js"></script>
```

```javascript
// Main/Entry file
app.use(VsTabs.plugin);
```

```html
<template>
  <vs-tabs v-model="selected">
    <template #tab-overview>Overview</template>
    <template #panel-overview>
      <p>Overview panel</p>
    </template>
  </vs-tabs>
</template>
```

<br />

### ⚙ Props

| Name        | Type                 | Default      | Description                                                  |
| ----------- | -------------------- | ------------ | ------------------------------------------------------------ |
| model-value | String/Number/Object | -            | Active tab id (supports `v-model`)                           |
| is-vertical | Boolean              | `false`      | Stacks tabs vertically                                       |
| orientation | String               | `horizontal` | Orientation mode (`horizontal`, `vertical`)                  |
| activation  | String               | `auto`       | Keyboard behavior (`auto` selects on arrow, `manual` uses Enter/Space) |
| aria-label  | String               | `Tabs`       | Accessible label for tablist                                 |
| disabled-items | Array             | `[]`         | Tab ids that should be disabled (`['usage']`)                |

<br />

### 🔥 Events

| Name              | Description                          |
| ----------------- | ------------------------------------ |
| update:modelValue | Emitted when selected tab changes    |
| change            | Emitted as `(selectedItem, selectedTab)` |

<br />

### 📎 Slots

You can define custom markup with slots:

| Name         | Description                                               |
| ------------ | --------------------------------------------------------- |
| tab-<item>   | Named tab slot for a specific tab (`tab-overview`)        |
| panel-<item> | Named panel slot for a specific panel (`panel-overview`)  |

`VsTabs` is slot-based only and derives tab ids from `tab-*` / `panel-*` slot names.

