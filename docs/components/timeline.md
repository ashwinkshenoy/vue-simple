---
title: Timeline
---

<masthead title="Timeline" description="A simple vue timeline. Perfect for displaying a sequence of events in chronological order.">
  <component-links
    github="https://github.com/ashwinkshenoy/vue-simple/tree/master/packages/vs-timeline"
    packageName="@vuesimple/vs-timeline">
  </component-links>
</masthead>

## Demo

<script setup>
  import Timeline from '../../src/DemoComponents/Timeline.vue';
</script>

<timeline class="demo"></timeline>

<br />

## Install

```bash
npm i @vuesimple/vs-timeline
```

<br />

## Usage

```html
<template>
  <vs-timeline>
    <vs-timeline-item>
      <strong>Planted seed</strong>
      <div>Today 9:00 AM</div>
    </vs-timeline-item>
    <vs-timeline-item>
      <strong>Purchased seed</strong>
      <div>Feb 08, 9:05 AM</div>
    </vs-timeline-item>
  </vs-timeline>
</template>

<script>
  import { VsTimeline, VsTimelineItem } from '@vuesimple/vs-timeline';

  export default {
    components: {
      VsTimeline,
      VsTimelineItem,
    },
  };
</script>
```

<br />

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@vuesimple/vs-timeline@<version>/dist/index.min.js"></script>
```

```javascript
// Main/Entry file
app.use(VsTimeline.plugin);
```

```html
<template>
  <vs-timeline>
    <vs-timeline-item>
      <strong>Event title</strong>
    </vs-timeline-item>
  </vs-timeline>
</template>
```

<br />

## Props

### VsTimeline

| Name   | Type   | Default | Options                           | Description                           |
| ------ | ------ | ------- | --------------------------------- | ------------------------------------- |
| layout | String | `left`  | `left`, `alternating`, `opposite` | Controls the layout of timeline items |

<br />

### VsTimelineItem

`VsTimelineItem` has no props. All content is provided via slots.

<br />

## Slots

### VsTimelineItem

| Name       | Description                                                                                   |
| ---------- | --------------------------------------------------------------------------------------------- |
| `default`  | Primary content for the item (title, description, etc.)                                       |
| `opposite` | Secondary content shown on the opposite side (used with `alternating` and `opposite` layouts) |
| `media`    | Replaces the default dot marker — use an icon, image, or avatar                               |

<br />

## Theming (CSS variables)

| Variable                    | Default   | Description                         |
| --------------------------- | --------- | ----------------------------------- |
| `--vs-timeline-dot-size`    | `10px`    | Diameter of the dot marker          |
| `--vs-timeline-dot-bg`      | `#ffffff` | Background color of the dot         |
| `--vs-timeline-dot-border`  | `#87929d` | Border color of the dot             |
| `--vs-timeline-line-color`  | `#d8dcde` | Color of the connecting line        |
| `--vs-timeline-content-gap` | `16px`    | Gap between separator and content   |
| `--vs-timeline-media-size`  | `20px`    | Width/height of the media slot area |

<br />

## Examples

**Default (left-aligned)**

```html
<vs-timeline>
  <vs-timeline-item>
    <strong>Planted seed</strong>
    <div>Today 9:00 AM</div>
  </vs-timeline-item>
  <vs-timeline-item>
    <strong>Purchased seed</strong>
    <div>Feb 08, 9:05 AM</div>
  </vs-timeline-item>
</vs-timeline>
```

**Alternating**

```html
<vs-timeline layout="alternating">
  <vs-timeline-item>
    <strong>Planted seed</strong>
    <template #opposite>Today 9:00 AM</template>
  </vs-timeline-item>
  <vs-timeline-item>
    <strong>Purchased seed</strong>
    <template #opposite>Feb 08, 9:05 AM</template>
  </vs-timeline-item>
</vs-timeline>
```

**Opposite content**

```html
<vs-timeline layout="opposite">
  <vs-timeline-item>
    <strong>Planted seed</strong>
    <template #opposite>Today 9:00 AM</template>
  </vs-timeline-item>
</vs-timeline>
```

**Custom media (icon)**

```html
<vs-timeline>
  <vs-timeline-item>
    <strong>Planted seed</strong>
    <template #media>
      <svg ...>...</svg>
    </template>
  </vs-timeline-item>
</vs-timeline>
```
