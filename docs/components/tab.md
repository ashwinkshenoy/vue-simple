---
title: Tab
---

<masthead title="Tab" description="A simple vue tab component.">
  <component-links
    github="https://github.com/ashwinkshenoy/vue-simple/tree/master/packages/vs-tab"
    packageName="@vuesimple/vs-tab">
  </component-links>
</masthead>

## Demo

<script setup>
  import TabComponent from '../../src/DemoComponents/Tab.vue';
</script>

<tab-component class="demo"></tab-component>

<br />

## Install

```bash
npm i @vuesimple/vs-tab
```

<br />

## Usage

```html
<template>
  <vs-tab v-model="selectedTab" :disabled-items="['usage']">
    <template #tab-overview>Overview</template>
    <template #tab-usage>Usage</template>
    <template #tab-activity>Activity</template>

    <template #panel-overview>
      <p>Overview panel content.</p>
    </template>
    <template #panel-usage>
      <p>Define content per tab with <code>#panel-*</code> slots.</p>
    </template>
    <template #panel-activity>
      <p>Great DX when panel content is mostly custom markup.</p>
    </template>
  </vs-tab>
</template>

<script>
  import VsTab from '@vuesimple/vs-tab';

  export default {
    components: {
      VsTab,
    },
    data() {
      return {
        selectedTab: 'overview',
      };
    },
  };
</script>
```

<br />

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@vuesimple/vs-tab@<version>/dist/index.min.js"></script>
```

::: tip

Replace `<version>` with a version number in the above url.

:::

```javascript
// Main/Entry file
app.use(VsTab.plugin);
```

<br />

## Props

| Name           | Type                 | Default      | Description                                   |
| -------------- | -------------------- | ------------ | --------------------------------------------- |
| model-value    | String/Number/Object | -            | Active tab id (supports `v-model`)            |
| is-vertical    | Boolean              | `false`      | Stacks tabs vertically                        |
| orientation    | String               | `horizontal` | Orientation mode (`horizontal`, `vertical`)   |
| activation     | String               | `auto`       | Keyboard behavior (`auto` or `manual`)        |
| aria-label     | String               | `Tab`        | Accessible label for tablist                  |
| disabled-items | Array                | `[]`         | Tab ids that should be disabled (`['usage']`) |

<br />

## Events

| Name              | Description                              |
| ----------------- | ---------------------------------------- |
| update:modelValue | Emitted when selected tab changes        |
| change            | Emitted as `(selectedItem, selectedTab)` |

<br />

## Slots

| Name           | Description                                              |
| -------------- | -------------------------------------------------------- |
| `tab-<item>`   | Named tab slot for a specific tab (`tab-overview`)       |
| `panel-<item>` | Named panel slot for a specific panel (`panel-overview`) |

`VsTab` is slot-based only and derives tab ids from `tab-*` / `panel-*` slot names.
