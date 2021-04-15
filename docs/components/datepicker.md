---
title: Datepicker
---

<masthead title="Datepicker" description="A light weight vue datepicker. Perfect for all your datepicker scenarios.">
  <component-links
    codesandbox="https://codesandbox.io/s/vs-datepicker-4vcnu"
    github="https://github.com/ashwinkshenoy/vue-simple/tree/master/packages/vs-datepicker"
    packageName="vs-datepicker">
  </component-links>
</masthead>

## Install

```bash
npm i vs-datepicker
```

```bash
yarn add vs-datepicker
```

## Usage

```html
<template>
  <vs-datepicker
    label="Date"
    id="deliveryDate"
    v-model="form.date"
    placeholder="DD-MM-YYYY"
    format="DD-MM-YYYY"
  ></vs-datepicker>
</template>

<script>
  import VsDatepicker from 'vs-datepicker';

  export default {
    components: {
      VsDatepicker,
    },
  };
</script>
```

## CDN

```html
<script src="https://unpkg.com/vs-datepicker@0.4.0/dist/vs-datepicker.min.js"></script>
```

```html
<template>
  <vs-datepicker
    label="Date"
    id="deliveryDate"
    v-model="form.date"
    placeholder="DD-MM-YYYY"
    format="DD-MM-YYYY"
  ></vs-datepicker>
</template>
```

## Nuxt.js

Nuxt Code Snippet

After installation,

- Create a file `/plugins/vs-datepicker.js`

  ```javascript
  import Vue from 'vue';
  import VsDatepicker from 'vs-datepicker';

  Vue.component('vs-datepicker', VsDatepicker);
  ```

- Update `nuxt.config.js`
  ```javascript
  module.exports = {
    ...
    plugins: [
      { src: '~plugins/vs-datepicker', mode: 'client' }
      ...
    ]
  }
  ```
- In the page/ component

  ```html
  <template>
    <vs-datepicker
      label="Date"
      id="deliveryDate"
      v-model="form.date"
      placeholder="DD-MM-YYYY"
      format="DD-MM-YYYY"
    ></vs-datepicker>
  </template>
  ```

  <br />

::: tip

- For older Nuxt versions, use `<no-ssr>...</no-ssr>` tag.
- You can also do
  `import VsDatepicker from 'vs-datepicker'`
  & add in `component:{VsDatepicker}` and use it within component, without globally installing in plugin folder.
  :::

## Props

| Name        | Type                                 | Default      | Description                                  |
| ----------- | ------------------------------------ | ------------ | -------------------------------------------- |
| type        | `date|datetime|year|month|time|week` | `date`       | Select the type of picker                    |
| format      | [Token](#token)                      | `MM-DD-YYYY` | To set the date format. similar to moment.js |
| range       | Boolean                              | false        | If true, pick the range date                 |
| label       | String                               | Date         | Label to datepicker                          |
| isError     | Boolean                              | -            | Highlight input box with red if error        |
| required    | Boolean                              | -            | show `*` with label                          |
| disabled    | Boolean                              | -            | Disable datepicker                           |
| max         | String                               | -            | Max date allowed.                            |
| min         | String                               | -            | Min date allowed                             |
| id          | String                               | -            | Id added to datepicker component             |
| placeholder | String                               | -            | Placeholder to datepicker input box          |

<br />

::: tip

Example for `maxdate`

```html
<vs-datepicker
  label="Date"
  id="deliveryDate"
  v-model="form.date"
  placeholder="DD-MM-YYYY"
  format="DD-MM-YYYY"
  :max="maxDate"
></vs-datepicker>

<script>
  export default {
    date() {
      return {
        maxDate: new Date().toISOString().substring(0, 10), // Max date -> Today
      };
    },
  };
</script>
```

:::

## Token

| Unit                       | Token | Output                                 |
| -------------------------- | ----- | -------------------------------------- |
| Year                       | YY    | 70 71 ... 10 11                        |
|                            | YYYY  | 1970 1971 ... 2010 2011                |
|                            | Y     | -1000 ...20 ... 1970 ... 9999 +10000   |
| Month                      | M     | 1 2 ... 11 12                          |
|                            | MM    | 01 02 ... 11 12                        |
|                            | MMM   | Jan Feb ... Nov Dec                    |
|                            | MMMM  | January February ... November December |
| Day of Month               | D     | 1 2 ... 30 31                          |
|                            | DD    | 01 02 ... 30 31                        |
| Day of Week                | d     | 0 1 ... 5 6                            |
|                            | dd    | Su Mo ... Fr Sa                        |
|                            | ddd   | Sun Mon ... Fri Sat                    |
|                            | dddd  | Sunday Monday ... Friday Saturday      |
| AM/PM                      | A     | AM PM                                  |
|                            | a     | am pm                                  |
| Hour                       | H     | 0 1 ... 22 23                          |
|                            | HH    | 00 01 ... 22 23                        |
|                            | h     | 1 2 ... 12                             |
|                            | hh    | 01 02 ... 12                           |
| Minute                     | m     | 0 1 ... 58 59                          |
|                            | mm    | 00 01 ... 58 59                        |
| Second                     | s     | 0 1 ... 58 59                          |
|                            | ss    | 00 01 ... 58 59                        |
| Fractional Second          | S     | 0 1 ... 8 9                            |
|                            | SS    | 00 01 ... 98 99                        |
|                            | SSS   | 000 001 ... 998 999                    |
| Time Zone                  | Z     | -07:00 -06:00 ... +06:00 +07:00        |
|                            | ZZ    | -0700 -0600 ... +0600 +0700            |
| Week of Year               | w     | 1 2 ... 52 53                          |
|                            | ww    | 01 02 ... 52 53                        |
| Unix Timestamp             | X     | 1360013296                             |
| Unix Millisecond Timestamp | x     | 1360013296123                          |

## Events

| Name    | Description                            |
| ------- | -------------------------------------- |
| v-model | When the value changes                 |
| change  | When the value change(same as v-model) |
| open    | When panel opening                     |
| close   | When panel closing                     |

<br />

Original credits to [Vue2 Datepicker](https://github.com/mengxiong10/vue2-datepicker)
