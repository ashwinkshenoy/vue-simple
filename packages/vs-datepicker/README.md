# Vue Simple Datepicker

#### 🗃 A simple vue detepicker. Perfect for all your datepicker scenarios.

A light weight vue datepicker plugin.

[![npm](https://img.shields.io/npm/v/@vuesimple/vs-datepicker.svg)](https://www.npmjs.com/package/@vuesimple/vs-datepicker)
[![npm](https://img.shields.io/npm/dt/@vuesimple/vs-datepicker.svg)](https://img.shields.io/npm/dt/@vuesimple/vs-datepicker.svg)
<br />

![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)
![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)
![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)

<br />

### 📺 Live Demo

Code Sandbox Demo: [Link](https://4vcnu.csb.app/)
Code Sandbox: [Link](https://codesandbox.io/s/vs-datepicker-4vcnu)

<br />

### 🛠 Install

```bash
npm i @vuesimple/vs-datepicker
```

<br />

### 🚀 Usage

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
  import VsDatepicker from '@vuesimple/vs-datepicker';

  export default {
    components: {
      VsDatepicker,
    },
  };
</script>
```

<br />

### 🌎 CDN

```html
<script src="https://unpkg.com/@vuesimple/vs-datepicker@<version>/dist/vs-datepicker.min.js"></script>
```

```javascript
// Main/Entry file
app.use(VsDatepicker);
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

<br />

<h3> 
  <img src="https://i.imgur.com/MWynQNa.png" width="20px"> Nuxt.js
</h3>

Nuxt Code Snippet

After installation,

- Create a file `/plugins/vs-datepicker.js`

  ```javascript
  import Vue from 'vue';
  import VsDatepicker from '@vuesimple/vs-datepicker';

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

**Note**

- For older Nuxt versions, use `<no-ssr>...</no-ssr>` tag.
- You can also do
  `import VsDatepicker from '@vuesimple/vs-datepicker'`
  & add in `component:{VsDatepicker}` and use it within component, without globally installing in plugin folder.

<br />

### ⚙ Props

| Name          | Type                      | Default      | Description                                  |
| ------------- | ------------------------- | ------------ | -------------------------------------------- | ----- | ---- | ----- | ------ | ------------------------- |
| type          | `date                     | datetime     | year                                         | month | time | week` | `date` | Select the type of picker |
| format        | [Token](#token)           | `MM-DD-YYYY` | To set the date format. similar to moment.js |
| value-type    | [Value-Type](#value-type) | 'date'       | Data type of the binding value/v-model.      |
| range         | Boolean                   | false        | If true, pick the range date                 |
| label         | String                    | Date         | Label to datepicker                          |
| isError       | Boolean                   | -            | Highlight input box with red if error        |
| required      | Boolean                   | -            | show `*` with label                          |
| disabled      | Boolean                   | -            | Disable datepicker                           |
| disabled-date | Function                  | -            | Disable dates in datepicker                  |
| id            | String                    | -            | Id added to datepicker component             |
| placeholder   | String                    | -            | Placeholder to datepicker input box          |
| lang          | Object                    | -            | Override the default locale                  |
| editable      | Boolean                   | false        | Whether the input is editable                |
| clearable     | Boolean                   | false        | If false, don't show the clear icon          |
| is-compact    | Boolean                   | false        | Applies compact style to datepicker          |

<br />

**NOTE**
Example for `maxdate`

```html
<vs-datepicker
  label="Date"
  id="deliveryDate"
  v-model="form.date"
  placeholder="DD-MM-YYYY"
  format="DD-MM-YYYY"
  :disabled-date="disabledDate"
></vs-datepicker>

<script>
  export default {
    methods: {
      disabledDates(date) {
        return date < new Date('Your Min Date') || date > new Date('Your Max Date');
      },
    },
  };
</script>
```

<br />

### 🔥 Events

| Name    | Description                            |
| ------- | -------------------------------------- |
| v-model | When the value changes                 |
| change  | When the value change(same as v-model) |
| open    | When panel opening                     |
| close   | When panel closing                     |

<br />

### Token

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

<br />

### Value Type

| Value             | Description                                        |
| ----------------- | -------------------------------------------------- |
| 'date'            | Returns a Date object                              |
| 'timestamp'       | Returns a timestamp number                         |
| 'format'          | Returns a string formatted using pattern of format |
| token(MM/DD/YYYY) | Returns a string formatted using this pattern      |

<br />

### Full lang config

```javascript
{
  // the locale of formatting and parsing function
  formatLocale: {
    // MMMM
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    // MMM
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    // dddd
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    // ddd
    weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    // dd
    weekdaysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    // first day of week
    firstDayOfWeek: 0,
    // first week contains January 1st.
    firstWeekContainsDate: 1,
  },
}
```

<br />

Original credits to [Vue2 Datepicker](https://github.com/mengxiong10/vue2-datepicker)
