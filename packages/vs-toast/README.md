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

Demo: [Link](https://vuesimple.netlify.app)

<br />

### 🛠 Install

```bash
npm i @vuesimple/vs-toast
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

### ⚙ Props

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
