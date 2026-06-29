---
title: Autocomplete
actionLink: /components/autocomplete/
---

<masthead title="Autocomplete" description="A simple, customizable autocomplete dropdown with nested levels and multi-select support.">
  <component-links
      github="https://github.com/sureshungarala/vue-components/tree/main/vs-autocomplete"
      packageName="vs-autocomplete">
  </component-links>
</masthead>

## Install

```bash
npm i vs-autocomplete
```

## Usage

```html
<template>
  <vs-autocomplete
    label="Select option(s)"
    :options="options"
    :multiple="true"
    placeholder="Search options"
    :maxSelectableCount="4"
    :searchInputText="searchInputText"
    :searchOptionMatcher="optionMatcher"
    :keepMenuOpenOnRender="false"
    :compact="false"
    noSearchResultsText="No results found"
    labelHint="Select up to 4 options"
    v-model="selectedOptions"
    @open="onOpen"
    @close="onClose"
    :searchOnInput="searchOnInput"
    :renderOption="renderOption"
  />
</template>

<script>
  import VsAutocomplete from 'vs-autocomplete';

  export default {
    components: {
      VsAutocomplete,
    },
  };
</script>
```

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/vs-autocomplete@<version>/dist/vs-autocomplete.umd.min.js"></script>
```

```javascript
// Main/Entry file
app.component('vs-autocomplete', VsAutocomplete);
```

```html
<template>
  <vs-autocomplete
    label="Select option(s)"
    :options="options"
    :multiple="true"
    placeholder="Search options"
    :maxSelectableCount="4"
    :searchInputText="searchInputText"
    :searchOptionMatcher="optionMatcher"
    :keepMenuOpenOnRender="false"
    :compact="false"
    noSearchResultsText="No results found"
    labelHint="Select up to 4 options"
    v-model="selectedOptions"
    @open="onOpen"
    @close="onClose"
    :searchOnInput="searchOnInput"
    :renderOption="renderOption"
  />
</template>
```

## Nuxt.js

Nuxt Code Snippet

After installation,

- Create a file `/plugins/vs-autocomplete.js`

  ```javascript
  import Vue from 'vue';
  import VsAutocomplete from 'vs-autocomplete';

  Vue.component('vs-autocomplete', VsAutocomplete);
  ```

- Update `nuxt.config.js`
  ```javascript
  module.exports = {
    ...
    plugins: [
      { src: '~plugins/vs-autocomplete', mode: 'client' }
      ...
    ]
  }
  ```
- In the page/ component

  ```html
  <template>
    <vs-autocomplete
      label="Select option(s)"
      :options="options"
      :multiple="true"
      placeholder="Search options"
      :maxSelectableCount="4"
      :searchInputText="searchInputText"
      :searchOptionMatcher="optionMatcher"
      :keepMenuOpenOnRender="false"
      :compact="false"
      noSearchResultsText="No results found"
      labelHint="Select up to 4 options"
      v-model="selectedOptions"
      @open="onOpen"
      @close="onClose"
      :searchOnInput="searchOnInput"
      :renderOption="renderOption"
    />
  </template>
  ```

::: tip

- For older Nuxt versions, use `<no-ssr>...</no-ssr>` tag.
- You can also do
  `import VsAutocomplete from 'vs-autocomplete'`
  & add in `components:{VsAutocomplete}` and use it within component, without globally installing in plugin folder.

:::

## Props

| Name      | Type    | Default | Description                                                        |
| --------- | ------- | ------- | ------------------------------------------------------------------ |
| variant   | String  | -       | Type of alert to be shown. (`success`, `warning`, `error`, `info`) |
| title     | String  | -       | The alert title (text only). For HTML, use the header slot.        |
| showClose | Boolean | false   | Show alert close icon                                              |
| small     | Boolean | false   | Applies reduced padding                                            |
| toast     | Boolean | false   | Applies toast design                                               |
| noBg      | Boolean | false   | Remove background color                                            |

| Name                 | Type                                                                                                                                                                                                       | Default                            | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| options              | Array<`option`>                                                                                                                                                                                            | `[]`                               | `true`   | Options to be displayed in the dropdown                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| label                | String                                                                                                                                                                                                     | -                                  | `false`  | Label of the option                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| multiple             | Boolean                                                                                                                                                                                                    | `false`                            | `false`  | Whether to allow multiple selection                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| placeholder          | String                                                                                                                                                                                                     | `''`                               | `false`  | Placeholder text to display when no option is selected                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| searchInputText      | String                                                                                                                                                                                                     | `''`                               | `false`  | Search input text to filter options                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| keepMenuOpenOnRender | Boolean                                                                                                                                                                                                    | `false`                            | `false`  | Whether to keep the menu open on render                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| compact              | Boolean                                                                                                                                                                                                    | `false`                            | `false`  | Whether to render the dropdown in compact mode                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| maxSelectableCount   | Number                                                                                                                                                                                                     | `0`                                | `false`  | Maximum number of options that can be selected                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| noSearchResultsText  | String                                                                                                                                                                                                     | `No results found`                 | `false`  | Text to display when no search results are found                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| labelHint            | String                                                                                                                                                                                                     | -                                  | `false`  | Hint text to display below the label                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| searchOptionMatcher  | (searchInputText, option) => boolean                                                                                                                                                                       | () => {}                           | `false`  | Custom search option matcher function compares `searchInputText` against each option. If defined, it must return a boolean indicating match; otherwise, defaults to matching option labels.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| searchOnInput        | () => Promise<Array<`option`>> \| { handler: (searchInputText) => Promise<Array<`option`>>, fireOnInitialMenuOpen: Boolean, loadingOptionLabel: 'Loading...', minSearchLength: 0 } \| () => {} \| () => {} | () => {}                           | `false`  | Custom search function to fetch options based on the input text. It can be a function or an object. If defined as function, it must return a promise resolving to an array of options. If defined as object, it must have `handler` key that is of type function, which must return a promise resolving to an array of options along with few other options(fireOnInitialMenuOpen, loadingOptionLabel, minSearchLength). Otherwise, defaults to filtering options based on the search input text. Default values for keys other `handler` when passed as object: `fireOnInitialMenuOpen: true, loadingOptionLabel: 'Loading...', minSearchLength: 0` |
| renderOption         | (option: `option`) => string                                                                                                                                                                               | (option: `option`) => option.label | `false`  | Custom render function to render HTML as label in dropdown option                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## Events

| Name    | Type                                                      | Description                         | Payload                         |
| ------- | --------------------------------------------------------- | ----------------------------------- | ------------------------------- |
| v-model | Array<`option`>                                           | Emits the selected option(s)        | Selected options                |
| open    | (HTMLDivElement, HTMLUListElement, searchInputText) => {} | Emits when the dropdown-menu opens  | Dropdown element & Menu element |
| close   | (HTMLDivElement, HTMLUListElement, searchInputText) => {} | Emits when the dropdown-menu closes | Dropdown element & Menu element |

## Type `option`

| Name     | Type            | Required | Description                                                                 |
| -------- | --------------- | -------- | --------------------------------------------------------------------------- |
| label    | String          | `true`   | Label of the option                                                         |
| id       | Any             | `false`  | Unique identifier for the option(In case, multiple options have same label) |
| value    | Any             | `false`  | Value of the option                                                         |
| disabled | Boolean         | `false`  | Whether the option is disabled                                              |
| selected | Boolean         | `false`  | Whether the option is selected initially                                    |
| children | Array<`option`> | `false`  | Nested options                                                              |

<br>

## CSS Variables for Styling

| Variable Name        | Description                                            |
| -------------------- | ------------------------------------------------------ |
| `--primary-color `   | Primary border color on the combobox                   |
| `--background-color` | Background color of the option when focused or hovered |
| `--hint-color`       | Hint text color                                        |
| `--v-dropdown-width` | Width of the combobox                                  |
| `--max-width`        | Max width of the combobox                              |
| `--box-shadow`       | Box shadow of the combobox                             |
| `--bezier-curve`     | Menu toggle transition                                 |
| `--animation-delay`  | Transition delay                                       |

<br>

## Prop example

##### Options

```js
[
  {
    id: 1,
    label: 'Option 1',
    value: 'option1',
    children: [
      {
        id: 1.1,
        label: 'Option 1.1',
        value: 'option1.1',
        selected: true,
      },
      {
        id: 1.2,
        label: 'Option 1.2',
        value: 'option1.2',
      },
      {
        id: 1.3,
        label: 'Option 1.3',
        value: 'option1.3',
        children: [
          {
            id: 1.31,
            label: 'Option 1.3.1',
            value: 'option1.3.1',
          },
          {
            id: 1.32,
            label: 'Option 1.3.2',
            value: 'option1.3.2',
          },
        ],
      },
      {
        id: 1234,
        label: 'Option 1.4',
        value: 'option1.4',
      },
    ],
  },
  {
    id: 2,
    label: 'A long label. Should be truncated. Check in demo.(Option 2)',
    value: 'option2',
    selected: true,
    disabled: true,
  },
  {
    id: 3,
    label: 'A long label. Should be truncated. Check in demo.(Option 3)',
    value: 'option3',
    disabled: true,
    children: [
      {
        id: 3.1,
        label: 'Option 3.1',
        value: 'option3.1',
      },
      {
        id: 3.2,
        label: 'Option 3.2',
        value: 'option3.2',
      },
      {
        id: 3.3,
        label: 'Option 3.3',
        value: 'option3.3',
        children: [
          {
            id: 3.31,
            label: 'Option 3.3.1',
            value: 'option3.3.1',
          },
          {
            id: 3.32,
            label: 'Option 3.3.2',
            value: 'option3.3.2',
          },
        ],
      },
      {
        id: 4,
        label: 'Option 4.1',
        value: 'option4.1',
      },
    ],
  },
];
```

<br />

Original credits to [Suresh Ungrala](https://github.com/sureshungarala/vue-components)
