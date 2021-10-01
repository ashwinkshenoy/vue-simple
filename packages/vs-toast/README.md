# Vue Simple Toast

#### 🗃 A simple vue toast. Perfect for all your toast/notification scenarios.

A light weight vue plugin built groundup.

[![npm](https://img.shields.io/npm/v/@vuesimple/vs-toast.svg)](https://www.npmjs.com/package/@vuesimple/vs-toast)
[![npm](https://img.shields.io/npm/dt/@vuesimple/vs-toast.svg)](https://img.shields.io/npm/dt/@vuesimple/vs-toast.svg)
<br />

![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)
![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)
![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)

<br />

### 📺 Live Demo

Code Sandbox: [Link](https://codesandbox.io/s/vs-toast-hti14)

<br />

### 🛠 Install

```bash
npm i @vuesimple/vs-toast
```

```bash
yarn add @vuesimple/vs-toast
```

<br />

### 🚀 Usage

```html
<script>
  import VsToast from '@vuesimple/vs-toast';

  export default {
    methods: {
      showToast() {
        VsToast.show({
          title: 'Success Title',
          message: 'Success message',
          variant: 'success',
        });
      },
    },
  };
</script>
```

<br />

### 🌎 CDN

```html
<script src="https://unpkg.com/@vuesimple/vs-toast@<version>/dist/vs-toast.min.js"></script>
```

```html
<script>
  export default {
    methods: {
      showToast() {
        VsToast.show({
          title: 'Success Title',
          message: 'Success message',
          variant: 'success',
        });
      },
    },
  };
</script>
```

<br />

### Nuxt.js

Nuxt Code Snippet

After installation,

- Create a file `/plugins/vs-toast.js`

  ```javascript
  import Vue from 'vue';
  import VsToast from '@vuesimple/vs-toast';

  Vue.component('vs-toast', VsToast);
  ```

- Update `nuxt.config.js`
  ```javascript
  module.exports = {
    ...
    plugins: [
      { src: '~plugins/vs-toast', mode: 'client' }
      ...
    ]
  }
  ```
- In the page/ component

```html
<script>
  export default {
    methods: {
      showToast() {
        VsToast.show({
          title: 'Success Title',
          message: 'Success message',
          variant: 'success',
        });
      },
    },
  };
</script>
```

**Note**

- For older Nuxt versions, use `<no-ssr>...</no-ssr>` tag.
- You can also do
  `import VsToast from '@vuesimple/vs-toast'`
  & add in `component:{VsToast}` and use it within component, without globally installing in plugin folder.

<br />

### ⚙ Options

| Name      | Type    | Default      | Description                                                                                                |
| --------- | ------- | ------------ | ---------------------------------------------------------------------------------------------------------- |
| variant   | String  | -            | Available variants; `success`, `warning`, `error`, `info`, `secondary`                                     |
| title     | String  | -            | Toast title                                                                                                |
| message   | String  | -            | Toast body/content/description                                                                             |
| position  | String  | `top-center` | Available positions: `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right` |
| timeout   | Number  | 5000         | Hide timeout                                                                                               |
| showClose | Boolean | false        | Show/Hide close button                                                                                     |
| type      | String  | `toast`      | Available types: `toast`, `alert`                                                                          |
| animation | String  | `slide`      | Default class applied for animation: `vs-toast--transition-{animation-name}`                               |
| isSticky  | Boolean | false        | Whether toast should close automatically or not                                                            |

### 🌟 Tips

You can also directly call success, warning & error functions as below:

```javascript
VsToast.success('Success Message');

// Or

VsToast.error('Error Message');

// Or

VsToast.warning('Warning Message');
```
