# Vue Simple Switch

#### 🎚 A simple vue switch component. Toggle switch alternative to the checkbox.

A light weight vue plugin built from the ground up

[![npm](https://img.shields.io/npm/v/@vuesimple/vs-switch.svg)](https://www.npmjs.com/package/@vuesimple/vs-switch)
[![npm](https://img.shields.io/npm/dt/@vuesimple/vs-switch.svg)](https://img.shields.io/npm/dt/@vuesimple/vs-switch.svg)
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
npm i @vuesimple/vs-switch
```

<br />

### 🚀 Usage

```html
<template>
  <vs-switch v-model="isEnabled" />
</template>

<script>
  import VsSwitch from '@vuesimple/vs-switch';

  export default {
    components: {
      VsSwitch,
    },
    data() {
      return {
        isEnabled: false,
      };
    },
  };
</script>
```

<br />

### 🌎 CDN

```html
<script src="https://unpkg.com/@vuesimple/vs-switch@<version>/dist/index.min.js"></script>
```

```javascript
// Main/Entry file
app.use(VsSwitch.plugin);
```

```html
<template>
  <vs-switch v-model="isEnabled" />
</template>
```

<br />

<h3> 
  <img src="https://i.imgur.com/MWynQNa.png" width="20px"> Nuxt.js
</h3>

Nuxt Code Snippet

After installation,

- Create a file `/plugins/vs-switch.js`

  ```javascript
  import Vue from 'vue';
  import VsSwitch from '@vuesimple/vs-switch';

  Vue.component('vs-switch', VsSwitch);
  ```

- Update `nuxt.config.js`
  ```javascript
  module.exports = {
    ...
    plugins: [
      { src: '~plugins/vs-switch', mode: 'client' }
      ...
    ]
  }
  ```
- In the page/ component

  ```html
  <template>
    <vs-switch v-model="isEnabled" />
  </template>
  ```

**Note**

- For older Nuxt versions, use `<no-ssr>...</no-ssr>` tag.
- You can also do
  `import VsSwitch from '@vuesimple/vs-switch'`
  & add in `component:{VsSwitch}` and use it within component, without globally installing in plugin folder.

<br />

### ⚙ Props

| Name           | Type    | Default   | Description                                                 |
| -------------- | ------- | --------- | ----------------------------------------------------------- |
| modelValue     | Boolean | `false`   | The checked state (supports v-model)                        |
| size           | String  | `medium`  | Size of switch. (`small`, `medium`, `large`)                |
| variant        | String  | `classic` | Visual variant. (`classic`, `surface`, `soft`)              |
| color          | String  | `primary` | Color theme of the switch when checked                      |
| highContrast   | Boolean | `false`   | High contrast mode for better visibility                    |
| radius         | String  | `full`    | Border radius. (`none`, `small`, `medium`, `large`, `full`) |
| disabled       | Boolean | `false`   | Disable the switch                                          |
| ariaLabel      | String  | -         | Aria label for accessibility                                |
| checkedBgColor | String  | -         | Custom background color when checked (hex/rgb/text color)   |

<br />

### 🔥 Events

| Name    | Description                                    |
| ------- | ---------------------------------------------- |
| v-model | Emitted when the switch state changes          |
| change  | Emitted when the switch state changes (detail) |

<br />

### 📎 Slots

Currently, the switch component does not have slots. It renders as a simple toggle button.

<br />

### 🎨 Color Options

The switch supports various color themes when checked:

- `primary` (default blue)
- `success` (green)
- `danger` (red)
- `warning` (orange)
- `secondary` (dark gray)
- `indigo`
- `cyan`
- `orange`
- `crimson`
- `gray`

<br />

### 📝 Examples

#### Basic Switch

```html
<vs-switch v-model="isEnabled" />
```

#### Switch with Label

```html
<label>
  <vs-switch v-model="isEnabled" />
  Enable notifications
</label>
```

#### Different Sizes

```html
<vs-switch v-model="isEnabled" size="small" />
<vs-switch v-model="isEnabled" size="medium" />
<vs-switch v-model="isEnabled" size="large" />
```

#### Different Variants

```html
<vs-switch v-model="isEnabled" variant="classic" />
<vs-switch v-model="isEnabled" variant="surface" />
<vs-switch v-model="isEnabled" variant="soft" />
```

#### Different Colors

```html
<vs-switch v-model="isEnabled" color="primary" />
<vs-switch v-model="isEnabled" color="success" />
<vs-switch v-model="isEnabled" color="danger" />
<vs-switch v-model="isEnabled" color="indigo" />
```

#### Disabled State

```html
<vs-switch v-model="isEnabled" disabled />
```

#### High Contrast

```html
<vs-switch v-model="isEnabled" highContrast color="indigo" />
```

#### Custom Color for Checked State

```html
<vs-switch v-model="isEnabled" checkedBgColor="#ff6b6b" />
```

<br />

### 🔔 Events Handling

```html
<template>
  <vs-switch v-model="isEnabled" @change="handleChange" />
</template>

<script>
  export default {
    data() {
      return {
        isEnabled: false,
      };
    },
    methods: {
      handleChange(newValue) {
        console.log('Switch is now:', newValue);
      },
    },
  };
</script>
```

<br />

---

### License

MIT
