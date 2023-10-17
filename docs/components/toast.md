---
title: Toast
---

<masthead title="Toast" description="A simple set of toast">
  <component-links
    codesandbox="https://codesandbox.io/s/vs-toast-hti14"
    github="https://github.com/ashwinkshenoy/vue-simple/tree/master/packages/vs-toast"
    packageName="@vuesimple/vs-toast">
  </component-links>
</masthead>

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
<script src="https://unpkg.com/@vuesimple/vs-toast@<version>/dist/vs-toast.min.js"></script>
```

::: tip

Replace `<version>` with a version number in the above url.

:::

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

## Nuxt.js

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

## Options

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
