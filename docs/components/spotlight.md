---
title: Spotlight
---

<masthead title="Spotlight" description="A keyboard-first palette for searching and running commands, with nested commands and accessible combobox markup.">
  <component-links
    github="https://github.com/ashwinkshenoy/vue-simple/tree/master/packages/vs-spotlight"
    packageName="@vuesimple/vs-spotlight">
  </component-links>
</masthead>

## Demo

<script setup>
  import SpotlightComponent from '../../src/DemoComponents/Spotlight.vue';
</script>

<spotlight-component class="demo"></spotlight-component>

<br />

## Install

```bash
npm i @vuesimple/vs-spotlight
```

## Usage

```html
<template>
  <button @click="open = true">Commands</button>
  <vs-spotlight v-model:open="open" :commands="commands" />
</template>

<script>
  import VsSpotlight from '@vuesimple/vs-spotlight';

  export default {
    components: {
      VsSpotlight,
    },

    data() {
      return {
        open: false,
        commands: [
          { id: 'new-file', label: 'New file', group: 'File', shortcut: '⌘N', run: () => this.newFile() },
          { id: 'open-file', label: 'Open file', group: 'File', keywords: ['load'], run: () => this.openFile() },
          {
            id: 'export',
            label: 'Export as',
            group: 'File',
            children: [
              { id: 'export-pdf', label: 'PDF', run: () => this.exportPdf() },
              { id: 'export-csv', label: 'CSV', run: () => this.exportCsv() },
            ],
          },
          { id: 'delete-all', label: 'Delete all items', group: 'Danger', disabled: true, run: () => {} },
        ],
      };
    },

    methods: {
      newFile() {},
      openFile() {},
      exportPdf() {},
      exportCsv() {},
    },
  };
</script>
```

Press <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>K</kbd> anywhere on the page to toggle the palette. Pass `shortcut=""` to turn this off.

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@vuesimple/vs-spotlight@<version>/dist/index.min.js"></script>
```

```javascript
// Main/Entry file
app.use(VsSpotlight.plugin);
```

## Keyboard

| Key                     | Action                                                             |
| ----------------------- | ------------------------------------------------------------------ |
| ↑ / ↓                   | Move through commands (wraps around).                              |
| Enter                   | Run the highlighted command, or open its children.                 |
| Backspace (empty query) | Go back one level in a nested command.                             |
| Escape                  | Close the palette.                                                 |
| Tab                     | Move focus between the search input and the Back button (trapped). |
| Home / End (empty query) | Jump to the first or last command.                                |
| Ctrl / ⌘ + K            | Toggle the palette (set `shortcut` to change the letter or `""`).  |

## Props

| Name          | Type    | Default                       | Description                                                                    |
| ------------- | ------- | ----------------------------- | ------------------------------------------------------------------------------ |
| open          | Boolean | `false`                       | Shows the palette. Use with `v-model:open`.                                    |
| commands      | Array   | `[]`                          | Commands to show. See [Command shape](#command-shape).                         |
| placeholder   | String  | `Type a command or search...` | Placeholder text for the search input.                                         |
| emptyText     | String  | `No matching commands`        | Text shown when nothing matches.                                               |
| maxResults    | Number  | `50`                          | Maximum number of commands shown at once.                                      |
| shortcut      | String  | `k`                           | Letter used with Ctrl/⌘ to toggle the palette. Pass `""` to disable.           |
| closeOnSelect | Boolean | `true`                        | Close the palette after a command runs. Commands with children never close it. |
| title         | String  | `''`                          | Heading shown above the search input. Hidden when empty.                       |
| badge         | String  | `''`                          | Small label shown next to the title (for example `Beta`).                      |
| showFooter    | Boolean | `true`                        | Shows the footer with the result count and key hints.                          |
| uppercaseGroups | Boolean | `true`                      | Renders group headings in uppercase.                                           |
| animate       | Boolean | `true`                        | Fades and scales the palette in and out.                                       |
| teleport      | Boolean | `true`                        | Moves the palette to `teleportTo` so it is not clipped by parent containers.   |
| teleportTo    | String \| Object | `body`                  | Target for the teleport, passed to Vue's `<teleport to>`.                      |

### Command shape

| Field    | Type                | Required | Description                                                                                                                   |
| -------- | ------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------- |
| id       | String              | Yes      | Unique key for the command.                                                                                                   |
| label    | String              | Yes      | Text shown and matched when searching.                                                                                        |
| group    | String              | No       | Section heading. Commands with the same group are shown together.                                                             |
| icon     | Component \| String | No       | Rendered before the label. Pass a Vue component (for example a heroicon) or an image URL string, which renders as an `<img>`. |
| description | String           | No       | Muted second line shown under the label.                                                                                      |
| keywords | Array               | No       | Extra search terms. Matches count for less than label matches.                                                                |
| shortcut | String              | No       | Display hint only (for example `⌘N`). The palette does not bind this key.                                                     |
| disabled | Boolean             | No       | Shows the command but does not run it.                                                                                        |
| children | Array               | No       | Nested commands. Selecting this command opens them instead of running it.                                                     |
| run      | Function            | No       | Called with the command when it is selected.                                                                                  |

## Events

| Name        | Payload   | Description                                            |
| ----------- | --------- | ------------------------------------------------------ |
| update:open | `boolean` | Emitted when the palette wants to open or close.       |
| select      | `command` | Emitted when a command (without children) is selected. |
| search      | `string`  | Emitted when the search text changes.                  |

## Slots

| Name  | Scope                 | Description                              |
| ----- | --------------------- | ---------------------------------------- |
| item  | `{ command, active }` | Replaces the markup of each command row. |
| empty | -                     | Replaces the empty-state message.        |
| footer | `{ statusText, activeCommand }` | Replaces the footer content.    |
