---
title: Toast
---

<masthead title="Toast" description="A simple set of toast notifications">
  <component-links
    github="https://github.com/ashwinkshenoy/vue-simple/tree/master/packages/vs-toast"
    packageName="@vuesimple/vs-toast">
  </component-links>
</masthead>

## Demo

<script setup>
  import ToastComponent from '../../src/DemoComponents/Toast.vue';
</script>

<toast-component class="demo"></toast-component>

<br />

## Install

```bash
npm i @vuesimple/vs-toast
```

<br />

## Usage

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

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@vuesimple/vs-toast@<version>/dist/index.min.js"></script>
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

## Props

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

## Tips

You can also directly call success, warning & error functions as below:

```javascript
VsToast.success('Success Message');

// Or

VsToast.error('Error Message');

// Or

VsToast.warning('Warning Message');
```
