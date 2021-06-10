# Vue Simple Modal

#### 🗃 A simple vue modal. Perfect for all your modal/ dialogs scenarios.

A light weight vue plugin built groundup, with importance to accessibility.

[![npm](https://img.shields.io/npm/v/vs-modal.svg)](https://www.npmjs.com/package/vs-modal)
[![npm](https://img.shields.io/npm/dt/vs-modal.svg)](https://img.shields.io/npm/dt/vs-modal.svg)
<br />

![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)
![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)
![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)

<br />

### 📺 Live Demo

Code Sandbox Demo: [Link](https://n2wwm.csb.app/)
<br />
Code Sandbox: [Link](https://codesandbox.io/s/vs-modal-n2wwm)

<br />

### 🛠 Install

```bash
npm i vs-modal
```

```bash
yarn add vs-modal
```

<br />

### 🚀 Usage

```html
<template>
  <button size="sm" @click="openModal('modal1')">Basic Modal</button>
  <vs-modal ref="modal1" title="Funny, Modal Works 🥳">
    Hello Peeps from vs-modal!!
  </vs-modal>

  <button size="sm" @click="openModal('backdrop-modal')">Basic Modal (with blur backdrop)</button>
  <vs-modal ref="backdrop-modal" backdropBlur title="Funny, Modal Works 🥳">
    Wow!! Backdrop is blurred out 🔥
  </vs-modal>
</template>

<script>
  import VsModal from 'vs-modal';

  export default {
    components: {
      VsModal,
    },

    methods: {
      openModal(ref) {
        this.$refs[ref].open();
      },

      closeModal(ref) {
        this.$refs[ref].close();
      },
    },
  };
</script>
```

<br />

### 🌎 CDN

```javascript
<script src='https://unpkg.com/vs-modal@<version>/dist/vs-modal.min.js'></script>
```

```html
<template>
  <button size="sm" @click="openModal('modal1')">Basic Modal</button>
  <vs-modal ref="modal1" title="Funny, Modal Works 🥳">
    Hello Peeps from vs-modal!!
  </vs-modal>
</template>

<script>
  export default {
    methods: {
      openModal(ref) {
        this.$refs[ref].open();
      },

      closeModal(ref) {
        this.$refs[ref].close();
      },
    },
  };
</script>
```

<br />

<h3> 
  <img src="https://nuxtjs.org/favicon.ico" width="20px"> Nuxt.js
</h3>

Nuxt Demo - Code Sandbox: [Link](https://codesandbox.io/s/vs-modal-nuxt-w35gj)

After installation,

- Create a file `/plugins/vs-modal.js`

  ```javascript
  import Vue from 'vue';
  import VsModal from 'vs-modal';

  Vue.component('vs-modal', VsModal);
  ```

- Update `nuxt.config.js`
  ```javascript
  module.exports = {
    ...
    plugins: [
      { src: '~plugins/vs-modal', mode: 'client' }
      ...
    ]
  }
  ```
- In the page/ component

  ```html
  <template>
    <button size="sm" @click="openModal('modal1')">Basic Modal</button>

    <client-only>
      <vs-modal ref="modal1" title="Funny, Modal Works 🥳">
        Hello Peeps from V-Simple-Modal!!
      </vs-modal>
    </client-only>
  </template>

  <script>
    export default {
      methods: {
        openModal(ref) {
          this.$refs[ref].open();
        },

        closeModal(ref) {
          this.$refs[ref].close();
        },
      },
    };
  </script>
  ```

**Note**

- For older Nuxt versions, use `<no-ssr>...</no-ssr>` tag.
- You can also do
  `import VsModal from 'vs-modal'`
  & add in `component:{VsModal}` and use it within component, without globally installing in plugin folder.

<br />

### ⚙ Props

| Name              | Type    | Default                     | Description                                                                                                                                                                               |
| ----------------- | ------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title             | String  | Modal title                 | The modal title (text only). For HTML, use the header slot.                                                                                                                               |
| size              | String  | `m`                         | The size of the modal. One of `s`, `m`, `l`, `fullscreen`, or `auto`. <br />Setting the size to auto will make the modal's width grow to fit its content.                                 |
| alignTop          | Boolean | false                       | Whether or not the modal should be vertically aligned to the top of the viewport. When `true`, the modal will be top aligned, instead of vertically centered.                             |
| alignTopMargin    | Number  | 60                          | The modal's distance from the top of the viewport, in pixels. <br/>Applies only when the `alignTop` prop is `true`.                                                                       |
| role              | String  | dialog                      | The ARIA role for the modal (important for accessibility). One of `dialog` or `alertdialog`.                                                                                              |
| removeHeader      | Boolean | false                       | Whether or not the modal header is removed.                                                                                                                                               |
| removeCloseButton | Boolean | false                       | Whether or not the header close button is removed.                                                                                                                                        |
| preventShift      | Boolean | false                       | Whether or not to add a dummy scrollbar to the modal backdrop to prevent the modal shifting horizontally when the `<body>` scrollbar is hidden. Set to `true` to prevent the modal shift. |
| dismissible       | Boolean | true                        | Whether or not the modal can be dismissed. Set to false to prevent the user from dismissing the modal. This will also hide the header close button.                                       |
| dismissOn         | String  | `backdrop close-button esc` | The type of event or events that will cause the modal to be dismissed. One or more of `backdrop`, `close-button`, or `esc`. Separate multiple events with a space.                        |

<br />

### 🔥 Events

| Name   | Description                                                                                             |
| ------ | ------------------------------------------------------------------------------------------------------- |
| open   | Emitted when the modal starts to open. Listen for it using `@open`.                                     |
| reveal | Emitted when the modal is revealed (i.e. when the transition completes). Listen for it using `@reveal`. |
| close  | Emitted when the modal starts to close. Listen for it using `@close`.                                   |
| hide   | Emitted when the modal close transition completes. Listen for it using `@hide`.                         |

<br />

### 📎 Slots

You can define own item markup via slots:

| Name      | Description                                      |
| --------- | ------------------------------------------------ |
| (default) | Holds the modal body and can contain HTML.       |
| header    | Holds the the modal header and can contain HTML. |
| footer    | Holds the the modal footer and can contain HTML. |
