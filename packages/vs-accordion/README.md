# Vue Simple Tag

#### 🗃 A simple vue accordion. Perfect for all your accordion, faq's scenarios.

A light weight vue plugin built groundup.

[![npm](https://img.shields.io/npm/v/@vuesimple/vs-accordion.svg)](https://www.npmjs.com/package/@vuesimple/vs-accordion)
[![npm](https://img.shields.io/npm/dt/@vuesimple/vs-accordion.svg)](https://img.shields.io/npm/dt/@vuesimple/vs-accordion.svg)
<br />

![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)
![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)
![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)

<br />

### 📺 Live Demo

Code Sandbox: [Link](https://codesandbox.io/s/vs-accordion-9shik?file=/src/App.vue)

<br />

### 🛠 Install

```bash
npm i @vuesimple/vs-accordion
```

<br />

### 🚀 Usage

```html
<template>
  <vs-accordion :is-box="true" is-compact>
    <vs-accordion-item v-for="(n, index) in [1, 2, 3]" :key="index">
      <!-- This slot will handle the title of the accordion and is the part you click on -->
      <template slot="accordion-trigger">
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

### 🌎 CDN

```html
<script src="https://unpkg.com/@vuesimple/vs-accordion@<version>/dist/vs-accordion.min.js"></script>
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
      <template slot="accordion-trigger">
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

<h3> 
  <img src="https://i.imgur.com/MWynQNa.png" width="20px"> Nuxt.js
</h3>

Nuxt Code Snippet

After installation,

- Create a file `/plugins/vs-accordion.js`

  ```javascript
  import Vue from 'vue';
  import { VsAccordion, VsAccordionItem } from '@vuesimple/vs-accordion';

  Vue.component('vs-accordion', VsTag);
  ```

- Update `nuxt.config.js`
  ```javascript
  module.exports = {
    ...
    plugins: [
      { src: '~plugins/vs-accordion', mode: 'client' }
      ...
    ]
  }
  ```
- In the page/ component

  ```html
  <template>
    <vs-accordion :is-box="true" is-compact>
      <vs-accordion-item v-for="(n, index) in [1, 2, 3]" :key="index">
        <!-- This slot will handle the title of the accordion and is the part you click on -->
        <template slot="accordion-trigger">
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

**Note**

- For older Nuxt versions, use `<no-ssr>...</no-ssr>` tag.
- You can also do
  `import { VsAccordion, VsAccordionItem } from '@vuesimple/vs-accordion'`
  & add in `component:{ VsAccordion, VsAccordionItem }` and use it within component, without globally installing in plugin folder.

<br />

### ⚙ Props

#### VsAccordion

| Name            | Type    | Default | Description                                                        |
| --------------- | ------- | ------- | ------------------------------------------------------------------ |
| active          | Number  | -       | Index of the accordion to be made active/visible. Starts from `0`. |
| is-box          | String  | -       | Box syle applied.                                                  |
| is-expandable   | Boolean | -       | Enables simultaneous expansion of accordion sections.              |
| level           | Boolean | -       | Sets aria-level heading rank in the document structure.            |
| is-compact      | Boolean | -       | Applies compact styling.                                           |
| disable-animate | Boolean | -       | Disable toggle animation.                                          |

<br />

### 🔥 Events

#### VsAccordionItem

| Name   | Description                                                                         |
| ------ | ----------------------------------------------------------------------------------- |
| change | Triggered accordion open/close click `{ index: 0, visible: true }`                  |
| open   | Emitted when the accordion starts to open. Listen for it using `@open`.             |
| hide   | Emitted when the accordion close transition completes. Listen for it using `@hide`. |

<br />

### 📎 Slots

#### VsAccordion

You can define own item markup via slots:

| Name                    | Description                               |
| ----------------------- | ----------------------------------------- |
| (default)               | Default wrapper content for vs-accordion. |
| accordion-non-clickable | Non-Clickable content inside header       |

#### VsAccordionItem

You can define own item markup via slots:

| Name              | Description                                              |
| ----------------- | -------------------------------------------------------- |
| accordion-trigger | Heading content.                                         |
| accordion-icon    | Icon content. If not present, default icon will be shown |
| (default)         | Default accordion content section for vs-accordion-item. |
