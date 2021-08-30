---
title: Alert
actionLink: /alert/
---

<masthead title="Alert" description="Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.">
  <component-links
    codesandbox="https://codesandbox.io/s/vs-alert-yhjce"
    github="https://github.com/ashwinkshenoy/vue-simple/tree/master/packages/vs-alert"
    packageName="@vuesimple/vs-alert">
  </component-links>
</masthead>

## Install

```bash
npm i @vuesimple/vs-alert
```

```bash
yarn add @vuesimple/vs-alert
```

## Usage

```html
<template>
  <vs-alert variant="success">
    Success
  </vs-alert>
</template>

<script>
  import VsAlert from '@vuesimple/vs-alert';

  export default {
    components: {
      VsAlert,
    },
  };
</script>
```

## CDN

```html
<script src="https://unpkg.com/@vuesimple/vs-alert/dist@<version>/vs-alert.min.js"></script>
```

::: tip

Replace `<version>` with a version number in the above url.

:::

```html
<template>
  <vs-alert variant="success">
    Success
  </vs-alert>
</template>
```

## Nuxt.js

Nuxt Code Snippet

After installation,

- Create a file `/plugins/vs-alert.js`

  ```javascript
  import Vue from 'vue';
  import VsAlert from '@vuesimple/vs-alert';

  Vue.component('vs-alert', VsAlert);
  ```

- Update `nuxt.config.js`
  ```javascript
  module.exports = {
    ...
    plugins: [
      { src: '~plugins/vs-alert', mode: 'client' }
      ...
    ]
  }
  ```
- In the page/ component

  ```html
  <template>
    <vs-alert variant="success">
      Success
    </vs-alert>
  </template>
  ```

::: tip

- For older Nuxt versions, use `<no-ssr>...</no-ssr>` tag.
- You can also do
  `import VsAlert from '@vuesimple/vs-alert'`
  & add in `components:{VsAlert}` and use it within component, without globally installing in plugin folder.

:::

## Props

| Name      | Type    | Default | Description                                                 |
| --------- | ------- | ------- | ----------------------------------------------------------- |
| variant   | String  | -       | Type of alert to be shown. (success, warning, error, info)  |
| title     | String  | -       | The alert title (text only). For HTML, use the header slot. |
| showClose | Boolean | false   | Show alert close icon                                       |
| small     | Boolean | false   | Applies reduced padding                                     |
| noBg      | Boolean | false   | Remove background color                                     |

## Events

| Name  | Description                                                                  |
| ----- | ---------------------------------------------------------------------------- |
| close | Emitted when the alert close icons is clicked. Listen for it using `@close`. |

## Slots

You can define own item markup via slots:

| Name      | Description                                   |
| --------- | --------------------------------------------- |
| (default) | Holds the alert content and can contain HTML. |
| icon      | Slot to add custom icon for type              |
| title     | Slot to add custom title                      |
