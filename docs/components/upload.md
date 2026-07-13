---
title: Upload
---

<masthead title="Upload" description="A simple file upload component with drag-and-drop support and a file list.">
  <component-links
    github="https://github.com/ashwinkshenoy/vue-simple/tree/master/packages/vs-upload"
    packageName="@vuesimple/vs-upload">
  </component-links>
</masthead>

## Demo

<script setup>
  import Upload from '../../src/DemoComponents/Upload.vue';
</script>

<upload class="demo"></upload>

<br />

## Install

```bash
npm i @vuesimple/vs-upload
```

<br />

## Usage

```html
<template>
  <vs-upload v-model="files" label="Upload a file" multiple />
</template>

<script>
  import VsUpload from '@vuesimple/vs-upload';
  validation;
  export default {
    components: { VsUpload },
    data() {
      return { files: [] };
    },
  };
</script>
```

<br />

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@vuesimple/vs-upload@<version>/dist/index.min.js"></script>
```

```javascript
// Main/Entry file
app.use(VsUpload.plugin);
```

```html
<template>
  <vs-upload v-model="files" />
</template>
```

<br />

## Props

| Name       | Type    | Default | Options                       | Description                                 |
| ---------- | ------- | ------- | ----------------------------- | ------------------------------------------- |
| modelValue | Array   | `[]`    | —                             | v-model binding; array of `File` objects    |
| label      | String  | —       | —                             | Label displayed above the dropzone          |
| hint       | String  | —       | —                             | Hint text displayed below the label         |
| accept     | String  | —       | Any valid MIME type or ext    | Restricts the accepted file types           |
| multiple   | Boolean | `false` | —                             | Allows selecting multiple files             |
| disabled   | Boolean | `false` | —                             | Disables the component                      |
| isCompact  | Boolean | `false` | —                             | Renders a smaller inline dropzone           |
| validation | String  | —       | `success`, `warning`, `error` | Applies a validation state to the dropzone  |
| message    | String  | —       | —                             | Validation message shown below the dropzone |

<br />

## Emits

| Event               | Payload  | Description                                       |
| ------------------- | -------- | ------------------------------------------------- |
| `update:modelValue` | `File[]` | Emitted when files are added or removed (v-model) |
| `change`            | `File[]` | Emitted when the file list changes                |
| `reject`            | —        | Reserved for future file-rejection callbacks      |

<br />

## Theming (CSS variables)

| Variable                               | Default   | Description                              |
| -------------------------------------- | --------- | ---------------------------------------- |
| `--vs-upload-label-color`              | `#2f3941` | Label text color                         |
| `--vs-upload-hint-color`               | `#68737d` | Hint text color                          |
| `--vs-upload-dropzone-border`          | `#d8dcde` | Dropzone border color                    |
| `--vs-upload-dropzone-bg`              | `#ffffff` | Dropzone background                      |
| `--vs-upload-dropzone-color`           | `#1f73b7` | Dropzone icon and text color             |
| `--vs-upload-dropzone-border-dragging` | `#1f73b7` | Border color when a file is dragged over |
| `--vs-upload-dropzone-bg-dragging`     | `#eaf4ff` | Background when a file is dragged over   |
| `--vs-upload-file-border`              | `#e9ebed` | File item border color                   |
| `--vs-upload-file-bg`                  | `#ffffff` | File item background                     |
| `--vs-upload-file-color`               | `#2f3941` | File item text color                     |
| `--vs-upload-file-size-color`          | `#87929d` | File size text color                     |
| `--vs-upload-remove-color`             | `#cc3340` | Remove button color                      |
| `--vs-upload-remove-hover-color`       | `#8c232c` | Remove button hover color                |
