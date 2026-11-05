---
title: Stepper
---

<masthead title="Stepper" description="A progress stepper that shows completed, current, and upcoming steps in vertical or horizontal layouts.">
  <component-links
    github="https://github.com/ashwinkshenoy/vue-simple/tree/master/packages/vs-stepper"
    packageName="@vuesimple/vs-stepper">
  </component-links>
</masthead>

## Demo

<script setup>
  import StepperComponent from '../../src/DemoComponents/Stepper.vue';
</script>

<stepper-component class="demo"></stepper-component>

<br />

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

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@vuesimple/vs-stepper@<version>/dist/index.umd.js"></script>
```

## Props

| Name          | Type                         | Default      | Description                                            |
| ------------- | ---------------------------- | ------------ | ------------------------------------------------------ |
| `steps`       | `Array`                      | **required** | Steps to render, each an object with a `label` string  |
| `activeIndex` | `Number`                     | `0`          | Index of the current step. Earlier steps are complete  |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Layout direction of the steps                          |
| `ariaLabel`   | `String`                     | `'Progress'` | Accessible label for the list of steps                 |

## Slots

| Name        | Description                                                                                                                  |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `indicator` | Replaces the default indicator. Receives `step`, `index`, and `state` (`'complete'`, `'current'`, or `'upcoming'`). |
| `content`   | Renders under the current step's label, with a short expand/collapse animation in vertical orientation. Receives `step`, `index`, and `state`. |

## Accessibility

- The steps are rendered as an ordered list labelled by `ariaLabel`.
- The current step has `aria-current="step"`.
- Each step has screen reader text such as "Step 2 of 4, completed", and the indicator is hidden from assistive technology.
