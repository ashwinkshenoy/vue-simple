---
title: Tooltip
---

<masthead title="Tooltip" description="A simple and accessible tooltip. Hover, focus, and keyboard friendly.">
  <component-links
    github="https://github.com/ashwinkshenoy/vue-simple/tree/master/packages/vs-tooltip"
    packageName="@vuesimple/vs-tooltip">
  </component-links>
</masthead>

## Demo

<script setup>
  import TooltipDemo from '../../src/DemoComponents/Tooltip.vue';
</script>

<tooltip-demo class="demo"></tooltip-demo>

<br />

## Install

```bash
npm i @vuesimple/vs-tooltip
```

## Usage

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

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@vuesimple/vs-tooltip@<version>/dist/index.min.js"></script>
```

```javascript
// Main/Entry file
app.use(VsTooltipPlugin);
```

```html
<template>
  <vs-tooltip title="Save your changes">
    <button type="button">Save</button>
  </vs-tooltip>
</template>
```

::: tip

- The panel is **teleported** to `body`. Set theme CSS variables on `:root` or `html` (or use inline `style` on the component) if you need tokens to apply to the floating layer.

:::

## Props

| Name        | Type            | Default | Description                                                                 |
| ----------- | --------------- | ------- | --------------------------------------------------------------------------- |
| title       | String          | `''`    | Text when the `content` slot is not used.                                   |
| placement   | String          | `top`   | Preferred side: `top`, `bottom`, `left`, `right` (may flip in viewport)     |
| offset      | Number          | `8`     | Gap in px between anchor and panel.                                         |
| openDelay   | Number          | `0`     | ms after pointer enter before open.                                         |
| closeDelay  | Number          | `100`   | ms after leave/blur before close.                                           |
| dismissible | Boolean         | `true`  | Escape closes the tooltip.                                                  |
| zIndex      | Number          | `1080`  | Stacking for the fixed teleported panel.                                    |
| disabled    | Boolean         | `false` | Disables show/hide.                                                         |
| hasArrow    | Boolean         | `true`  | `false` hides the pointer triangle on the panel.                            |
| tabindex    | String / Number | `null`  | On the anchor when the slot has no focusable child; use `0` for e.g. images |

## Slots

| Name      | Description                                                                      |
| --------- | -------------------------------------------------------------------------------- |
| (default) | The trigger; prefer a single focusable element for keyboard/screen reader users. |
| content   | Custom tooltip body; overrides the `title` string.                               |

## Theming (CSS variables)

The component exposes design tokens (see the package SFC) such as:

| Variable                     | Role                               |
| ---------------------------- | ---------------------------------- |
| `--vs-tooltip-bg-light`      | Default surface in light app theme |
| `--vs-tooltip-bg-dark`       | Surface when `data-theme` is dark  |
| `--vs-tooltip-padding-light` | Default padding                    |
| `--vs-tooltip-padding-dark`  | Padding in dark app theme          |
| `--vs-tooltip-arrow`         | Caret / border size                |
| `--vs-tooltip-radius`        | Panel corner radius                |
| `--vs-tooltip-shadow`        | `box-shadow` for the panel         |

Set these on **`:root`** or **`.vs-tooltip__panel`** or another ancestor of the teleported `body` content so the floating panel can resolve them.

## Accessibility

- Uses `role="tooltip"` and links the trigger to the panel with `aria-describedby` on the actual focusable node.
- `pointer-events: none` on the floating label so the pattern stays non-interactive (supplementary text).
- Dismiss with Escape when `dismissible` is true; respects `prefers-reduced-motion` for transitions.
