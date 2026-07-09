---
title: Accordion
actionLink: /components/accordion/
---

<masthead title="Accordion" description="A simple vue accordion. Perfect for all your accordion, faq's scenarios.">
  <component-links
    github="https://github.com/ashwinkshenoy/vue-simple/tree/master/packages/vs-accordion"
    packageName="@vuesimple/vs-accordion">
  </component-links>
</masthead>

## Demo

<script setup>
  import Accordion from '../../src/DemoComponents/Accordion.vue';
  import Button from '../../src/DemoComponents/Button.vue';
</script>

<accordion class="demo"></accordion>

<br />

## Install

```bash
npm i @vuesimple/vs-accordion
```

<br />

## Usage

```html
<template>
  <vs-accordion :is-box="true" is-compact>
    <vs-accordion-item v-for="(n, index) in [1, 2, 3]" :key="index">
      <!-- This slot will handle the title of the accordion and is the part you click on -->
      <template #accordion-trigger>
        <h4>Item {{ n }}</h4>
      </template>

      <!-- Default content -->
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </div>
    </vs-accordion-item>
  </vs-accordion>
</template>

<script>
  import { VsAccordion, VsAccordionItem } from '@vuesimple/vs-accordion';

  export default {
    components: {
      VsAccordion,
      VsAccordionItem,
    },
  };
</script>
```

<br />

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@vuesimple/vs-accordion@<version>/dist/index.min.js"></script>
```

```javascript
// Main/Entry file
app.use(VsAccordion.plugin);
```

```html
<template>
  <vs-accordion :is-box="true" is-compact>
    <vs-accordion-item v-for="(n, index) in [1, 2, 3]" :key="index">
      <!-- This slot will handle the title of the accordion and is the part you click on -->
      <template #accordion-trigger>
        <h4>Item {{ n }}</h4>
      </template>

      <!-- Default content -->
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </div>
    </vs-accordion-item>
  </vs-accordion>
</template>
```

<br />

## Props

### VsAccordion

| Name            | Type    | Default | Description                                                        |
| --------------- | ------- | ------- | ------------------------------------------------------------------ |
| active          | Number  | -       | Index of the accordion to be made active/visible. Starts from `0`. |
| is-box          | String  | -       | Box syle applied.                                                  |
| is-expandable   | Boolean | -       | Enables simultaneous expansion of accordion sections.              |
| level           | Boolean | -       | Sets aria-level heading rank in the document structure.            |
| is-compact      | Boolean | -       | Applies compact styling.                                           |
| disable-animate | Boolean | -       | Disable toggle animation.                                          |

<br />

## Events

### VsAccordionItem

| Name   | Description                                                                         |
| ------ | ----------------------------------------------------------------------------------- |
| change | Triggered accordion open/close click `{ index: 0, visible: true }`                  |
| open   | Emitted when the accordion starts to open. Listen for it using `@open`.             |
| hide   | Emitted when the accordion close transition completes. Listen for it using `@hide`. |

<br />

## Slots

### VsAccordion

You can define own item markup via slots:

| Name                    | Description                               |
| ----------------------- | ----------------------------------------- |
| (default)               | Default wrapper content for vs-accordion. |
| accordion-non-clickable | Non-Clickable content inside header       |

### VsAccordionItem

You can define own item markup via #slot-name:

| Name              | Description                                              |
| ----------------- | -------------------------------------------------------- |
| accordion-trigger | Heading content.                                         |
| accordion-icon    | Icon content. If not present, default icon will be shown |
| (default)         | Default accordion content section for vs-accordion-item. |
