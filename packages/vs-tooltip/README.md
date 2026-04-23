# Vue Simple Tooltip

#### 🗃 A simple and accessible tooltip. Hover, focus, and keyboard friendly.

A simple vue tooltip. Perfect for all your tooltip scenarios.

[![npm](https://img.shields.io/npm/v/@vuesimple/vs-tooltip.svg)](https://www.npmjs.com/package/@vuesimple/vs-tooltip)
[![npm](https://img.shields.io/npm/dt/@vuesimple/vs-tooltip.svg)](https://img.shields.io/npm/dt/@vuesimple/vs-tooltip.svg)
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
npm i @vuesimple/vs-tooltip
```

<br />

### 🚀 Usage

```html
<template>
  <vs-tooltip title="Save your changes">
    <button type="button">Save</button>
  </vs-tooltip>
</template>

<script>
  import VsTooltip from '@vuesimple/vs-tooltip';

  export default {
    components: {
      VsTooltip,
    },
  };
</script>
```

<br />

### 🌎 CDN

```html
<script src="https://unpkg.com/@vuesimple/vs-tooltip@<version>/dist/index.min.js"></script>
```

```javascript
// Main/Entry file (Vue 3)
app.use(VsTooltipPlugin);
```

```html
<template>
  <vs-tooltip title="Save your changes">
    <button type="button">Save</button>
  </vs-tooltip>
</template>
```

<br />

**Note**

- The floating panel is **teleported** to `body`. Theme tokens set only on a parent of the **trigger** will not apply—use **`:root` / `html`**, a global style sheet, or per-instance `:style` on the component if you need to forward variables.
- You can also do `import VsTooltip from '@vuesimple/vs-tooltip'` and register it in `components: { VsTooltip }` without a global plugin.

<br />

### ⚙ Props

| Name        | Type            | Default | Description                                                                                              |
| ----------- | --------------- | ------- | -------------------------------------------------------------------------------------------------------- |
| title       | String          | `''`    | Text when the `content` slot is not used.                                                                |
| placement   | String          | `top`   | Preferred side: `top`, `bottom`, `left`, `right` (flips to stay in viewport)                             |
| offset      | Number          | `8`     | Gap in px between anchor and panel.                                                                      |
| openDelay   | Number          | `0`     | ms after `pointerenter` before open.                                                                     |
| closeDelay  | Number          | `100`   | ms after leave/blur before close.                                                                        |
| dismissible | Boolean         | `true`  | Escape closes the tooltip.                                                                               |
| zIndex      | Number          | `1080`  | Stacking for the fixed teleported panel.                                                                 |
| disabled    | Boolean         | `false` | Disables all show/hide behavior.                                                                         |
| hasArrow    | Boolean         | `true`  | Set to `false` to hide the pointer triangle (`::after`) on the panel.                                    |
| tabindex    | String / Number | `null`  | Placed on the anchor when there is no focusable child (e.g. image wrapper) with `0` for keyboard access. |

<br />

### 📎 Slots

| Name      | Description                                                                           |
| --------- | ------------------------------------------------------------------------------------- |
| (default) | The trigger; should usually contain a single focusable control (`button`, `a`, etc.). |
| content   | Rich HTML for the tooltip body; if provided, the `title` string is not used.          |

<br />

### 🎨 CSS custom properties

Defined on `.vs-tooltip` and `.vs-tooltip__panel` (see package styles). Common overrides, typically on **`:root`** or **`html`**, e.g.:

- `--vs-tooltip-bg-light` / `--vs-tooltip-bg-dark`
- `--vs-tooltip-padding-light` / `--vs-tooltip-padding-dark`
- `--vs-tooltip-arrow`, `--vs-tooltip-radius`, `--vs-tooltip-shadow`, etc.

<br />

### ♿ Accessibility

- `role="tooltip"` and stable `id` on the teleported surface.
- `aria-describedby` is merged onto the **focusable** child of the default slot (or the anchor when `tabindex` is set).
- Pointer, focus, and Escape handling follow the WAI-ARIA tooltip pattern; non-interactive panel uses `pointer-events: none`.
