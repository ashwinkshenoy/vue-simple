# Vue Simple Input

#### 📝 A simple vue input component.

A light weight vue plugin built from the ground up

[![npm](https://img.shields.io/npm/v/@vuesimple/vs-input.svg)](https://www.npmjs.com/package/@vuesimple/vs-input)
[![npm](https://img.shields.io/npm/dt/@vuesimple/vs-input.svg)](https://img.shields.io/npm/dt/@vuesimple/vs-input.svg)
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
npm i @vuesimple/vs-input
```

<br />

### 🚀 Usage

```html
<template>
  <vs-input v-model="name" label="Name" placeholder="Enter your name" />
</template>

<script>
  import VsInput from '@vuesimple/vs-input';

  export default {
    components: {
      VsInput,
    },
    data() {
      return {
        name: '',
      };
    },
  };
</script>
```

<br />

### 🌎 CDN

```html
<script src="https://unpkg.com/@vuesimple/vs-input@<version>/dist/index.min.js"></script>
```

```javascript
// Main/Entry file
app.use(VsInput.plugin);
```

```html
<template>
  <vs-input v-model="name" label="Name" placeholder="Enter your name" />
</template>
```

<br />

### ⚙ Props

| Name        | Type    | Default | Description                                                                      |
| ----------- | ------- | ------- | -------------------------------------------------------------------------------- |
| modelValue  | Any     | `''`    | The input value (supports v-model)                                               |
| type        | String  | `text`  | HTML input type. (`text`, `email`, `password`, `number`, `search`, `url`, `tel`) |
| label       | String  | -       | Label displayed above the input                                                  |
| hideLabel   | Boolean | `false` | Visually hides the label while keeping it accessible to screen readers           |
| hint        | String  | -       | Helper text shown below the label                                                |
| placeholder | String  | `''`    | Placeholder text inside the input                                                |
| disabled    | Boolean | `false` | Disables the input                                                               |
| readOnly    | Boolean | `false` | Makes the input read-only                                                        |
| required    | Boolean | `false` | Marks the field as required (shows `*` next to label)                            |
| isCompact   | Boolean | `false` | Compact styling with reduced padding                                             |
| isBare      | Boolean | `false` | Removes border and background                                                    |
| maxlength   | Number  | -       | Maximum number of characters allowed                                             |
| validation  | String  | -       | Validation state. (`success`, `warning`, `error`)                                |
| message     | String  | -       | Message text shown below the input (paired with `validation`)                    |

<br />

### 🔥 Events

| Name              | Description                               |
| ----------------- | ----------------------------------------- |
| update:modelValue | Emitted on every keystroke (v-model)      |
| change            | Emitted when the input value is committed |
| focus             | Emitted when the input gains focus        |
| blur              | Emitted when the input loses focus        |

<br />

### 📎 Slots

| Name  | Description                                              |
| ----- | -------------------------------------------------------- |
| start | Content placed before the input (e.g. icon, prefix text) |
| end   | Content placed after the input (e.g. icon, suffix text)  |

<br />

### 📝 Examples

#### Basic Input

```html
<vs-input v-model="name" label="Name" placeholder="Enter your name" />
```

#### With Hint Text

```html
<vs-input v-model="email" label="Email" hint="We'll never share your email." placeholder="you@example.com" />
```

#### Required Field

```html
<vs-input v-model="email" label="Email address" type="email" placeholder="you@example.com" required />
```

#### Disabled

```html
<vs-input v-model="name" label="Name" disabled />
```

#### Read-only

```html
<vs-input v-model="name" label="Name" read-only />
```

#### Compact

```html
<vs-input v-model="name" label="Name" is-compact />
```

#### Bare (no border)

```html
<vs-input v-model="name" label="Name" is-bare />
```

#### Hidden Label

```html
<vs-input v-model="query" label="Search" hide-label placeholder="Search…" />
```

#### Validation States

```html
<vs-input v-model="email" label="Email" validation="success" message="Looks good!" />
<vs-input v-model="email" label="Email" validation="warning" message="Are you sure about this?" />
<vs-input v-model="email" label="Email" validation="error" message="This field is required." />
```

#### Media Input — Start Icon

```html
<vs-input v-model="query" label="Search" placeholder="Search…">
  <template #start>
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
      <path
        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.099zm-5.242 1.656a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"
      />
    </svg>
  </template>
</vs-input>
```

#### Media Input — Start & End Addons

```html
<vs-input v-model="price" label="Price" placeholder="0.00" type="number">
  <template #start>$</template>
  <template #end>USD</template>
</vs-input>
```

#### URL Prefix

```html
<vs-input v-model="url" label="Website" placeholder="example.com" type="url">
  <template #start>
    <span>https://</span>
  </template>
</vs-input>
```

<br />

### 🔔 Events Handling

```html
<template>
  <vs-input v-model="email" label="Email" type="email" @change="handleChange" @focus="handleFocus" @blur="handleBlur" />
</template>

<script>
  export default {
    data() {
      return {
        email: '',
      };
    },
    methods: {
      handleChange(value) {
        console.log('Value committed:', value);
      },
      handleFocus(event) {
        console.log('Input focused');
      },
      handleBlur(event) {
        console.log('Input blurred');
      },
    },
  };
</script>
```

<br />

---

### License

MIT
