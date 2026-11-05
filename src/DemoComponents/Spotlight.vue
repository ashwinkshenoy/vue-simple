<template>
  <div>
    <h3 class="mb-1">Basic</h3>
    <div class="box">
      <vs-button type="button" class="mr-10" @click="open = true">Open command palette</vs-button>
      <span>or press <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>K</kbd></span>
    </div>

    <h3 class="mb-1">Last command</h3>
    <div class="box">
      <p>{{ lastCommand ? `Selected: ${lastCommand}` : 'Nothing run yet.' }}</p>
    </div>

    <vs-spotlight v-model:open="open" :commands="commands" placeholder="Search commands...">
      <!-- <template #footer="{ statusText }">
        <span>{{ statusText }}</span>
        <span>{{ lastCommand ? `Selected: ${lastCommand}` : '' }}</span>
      </template> -->
    </vs-spotlight>
  </div>
</template>

<script>
  import VsSpotlight from '../../packages/vs-spotlight/src/vs-spotlight.vue';
  import vsButton from '../../packages/vs-button/src/vs-button.vue';
  import { DocumentPlusIcon, FolderOpenIcon, SwatchIcon, ArrowUpTrayIcon, TrashIcon } from '@heroicons/vue/24/outline';

  export default {
    name: 'spotlightDemo',

    components: {
      VsSpotlight,
      vsButton,
    },

    data() {
      return {
        open: false,
        lastCommand: '',
        commands: [
          {
            id: 'new-file',
            label: 'New file',
            group: 'File',
            icon: DocumentPlusIcon,
            description: 'Create an empty document',
            shortcut: 'N',
            run: () => this.record('New file'),
          },
          {
            id: 'open-file',
            label: 'Open file',
            group: 'File',
            icon: FolderOpenIcon,
            keywords: ['load'],
            run: () => this.record('Open file'),
          },
          {
            id: 'toggle-theme',
            label: 'Toggle theme',
            group: 'View',
            icon: SwatchIcon,
            run: () => this.record('Toggle theme'),
          },
          {
            id: 'export',
            label: 'Export as',
            group: 'File',
            icon: ArrowUpTrayIcon,
            children: [
              { id: 'export-pdf', label: 'PDF', run: () => this.record('Export as PDF') },
              { id: 'export-csv', label: 'CSV', run: () => this.record('Export as CSV') },
            ],
          },
          {
            id: 'delete-all',
            label: 'Delete all items',
            group: 'Danger',
            icon: TrashIcon,
            disabled: true,
            run: () => this.record('Delete all items'),
          },
        ],
      };
    },

    methods: {
      record(label) {
        this.lastCommand = label;
      },
    },
  };
</script>
