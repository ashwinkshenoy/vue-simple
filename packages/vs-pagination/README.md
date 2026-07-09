# Vue Simple Pagination

#### 🗃 A simple vue pagination.

A light weight vue plugin built with accessibility in mind.

[![npm](https://img.shields.io/npm/v/@vuesimple/vs-pagination.svg)](https://www.npmjs.com/package/@vuesimple/vs-pagination)
[![npm](https://img.shields.io/npm/dt/@vuesimple/vs-pagination.svg)](https://img.shields.io/npm/dt/@vuesimple/vs-pagination.svg)
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
npm i @vuesimple/vs-pagination
```

<br />

### 🚀 Usage

```html
<template>
  <vs-pagination :total-pages="20" @change="changePage"></vs-pagination>
</template>

<script>
  import VsPagination from '@vuesimple/vs-pagination';

  export default {
    components: {
      VsPagination,
    },
  };
</script>
```

<br />

### 🌎 CDN

```html
<script src="https://unpkg.com/@vuesimple/vs-pagination@<version>/dist/vs-pagination.min.js"></script>
```

```javascript
// Main/Entry file
app.use(VsPagination.plugin);
```

```html
<template>
  <vs-pagination :total-pages="20" @change="changePage"></vs-pagination>
</template>
```

<br />

### ⚙ Props

| Name           | Type    | Default | Description                                                                              |
| -------------- | ------- | ------- | ---------------------------------------------------------------------------------------- |
| total-pages    | Number  | -       | Total count of pages. **required**                                                       |
| current-page   | Number  | 1       | Sets the current page.                                                                   |
| page-padding   | Number  | 1       | Sets the number of pages that appear before and after active page between gap indicator. |
| page-gap       | Number  | 2       | Positions the leading and trailing gap indicator, based on the current and total pages.  |
| hide-prev-next | Boolean | `false` | Hide prev and next button on reaching first or last page.                                |

<br />

### 🔥 Events

| Name   | Description                        |
| ------ | ---------------------------------- |
| change | On page change (return page value) |

<br />

### 📎 Slots

You can define own arrow icon markup via slots:

| Name      | Description     |
| --------- | --------------- |
| leftIcon  | Left Icon slot  |
| rightIcon | Right Icon slot |
