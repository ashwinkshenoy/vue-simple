# @vuesimple/vs-spotlight

A keyboard-first command palette for Vue 3. Search and run commands with the keyboard, group them, and nest them.

- Toggle with <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>K</kbd> (configurable or disabled).
- Fuzzy search over labels and keywords, with results ranked by match quality.
- Grouped commands and nested sub-commands with breadcrumb and Back navigation.
- ARIA combobox and listbox markup, focus trapping, and focus restore on close.
- Styled with CSS variables, with dark theme support.

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
    components: { VsSpotlight },

    data() {
      return {
        open: false,
        commands: [
          { id: 'new-file', label: 'New file', group: 'File', run: () => {} },
          {
            id: 'export',
            label: 'Export as',
            group: 'File',
            children: [
              { id: 'export-pdf', label: 'PDF', run: () => {} },
              { id: 'export-csv', label: 'CSV', run: () => {} },
            ],
          },
        ],
      };
    },
  };
</script>
```

## Documentation

Props, events, slots, keyboard behavior, and the command shape are documented at the [Spotlight docs](https://vuesimple.netlify.app/components/spotlight).

## Development

```bash
npm test        # run unit tests (vitest + jsdom)
npm run build   # build dist/
```

## License

MIT
