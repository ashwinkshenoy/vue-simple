# @vuesimple/vs-stepper

A progress stepper for Vue 3 that shows completed, current, and upcoming steps.

- Vertical (default) or horizontal orientation.
- Completed steps show a check icon, the current step is highlighted, and upcoming steps are muted.
- Replace the step number with any icon through the `indicator` slot.
- Screen reader text announces each step's position and completion state.
- Styled with CSS variables, with dark mode support.

## Install

```bash
npm i @vuesimple/vs-stepper
```

## Usage

```html
<template>
  <vs-stepper :steps="steps" :active-index="activeIndex" orientation="horizontal" />
</template>

<script>
  import VsStepper from '@vuesimple/vs-stepper';

  export default {
    components: { VsStepper },
    data() {
      return {
        activeIndex: 1,
        steps: [{ label: 'Account' }, { label: 'Billing' }, { label: 'Review' }],
      };
    },
  };
</script>
```

## Props

| Name         | Type             | Default      | Description                                           |
| ------------ | ---------------- | ------------ | ----------------------------------------------------- |
| `steps`      | `Array`          | **required** | Steps to render, each an object with a `label` string |
| `activeIndex` | `Number`        | `0`          | Index of the current step. Earlier steps are complete |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Layout direction of the steps             |
| `ariaLabel`  | `String`         | `'Progress'` | Accessible label for the list of steps                |

## Slots

| Name        | Description                                                                 |
| ----------- | --------------------------------------------------------------------------- |
| `indicator` | Replaces the default indicator. Receives `step`, `index`, and `state` (`'complete'`, `'current'`, or `'upcoming'`) |
| `content`   | Renders under the current step's label, with a short expand/collapse animation in vertical orientation. Receives `step`, `index`, and `state`. |

```html
<vs-stepper :steps="steps" :active-index="activeIndex">
  <template #indicator="{ state, index }">
    <span v-if="state === 'complete'">✔</span>
    <span v-else>{{ index + 1 }}</span>
  </template>
  <template #content="{ state }">
    <div v-if="state === 'current'">
      <p>Step details and actions go here.</p>
    </div>
  </template>
</vs-stepper>
```

## CSS Variables

| Name                         | Description                              |
| ---------------------------- | ---------------------------------------- |
| `--vs-stepper-primary`       | Color of the current and complete steps  |
| `--vs-stepper-text`          | Color of upcoming step labels            |
| `--vs-stepper-text-active`   | Color of the current step label          |
| `--vs-stepper-border`        | Border color of upcoming indicators      |
| `--vs-stepper-connector`     | Color of connectors between steps        |
| `--vs-stepper-check`         | Color of the check icon on complete steps |
