<template>
  <teleport :to="teleportTo" :disabled="!teleport">
    <transition :css="animate" name="vs-spotlight-fade">
      <div v-if="open" class="vs-spotlight__overlay" @click.self="close">
        <div
          class="vs-spotlight"
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
          @keydown="onDialogKeydown"
        >
          <div class="vs-spotlight__header">
            <div v-if="title || badge" class="vs-spotlight__title">
              <span v-if="title">{{ title }}</span>
              <span v-if="badge" class="vs-spotlight__badge">{{ badge }}</span>
            </div>
            <div v-if="path.length" class="vs-spotlight__breadcrumb">
              <button ref="backButton" type="button" class="vs-spotlight__back" @click="goBack">Back</button>
              <span class="vs-spotlight__crumbs">{{ breadcrumb }}</span>
            </div>
            <div class="vs-spotlight__search">
              <svg
                class="vs-spotlight__search-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                ref="input"
                v-model="query"
                type="text"
                class="vs-spotlight__input"
                role="combobox"
                aria-autocomplete="list"
                aria-haspopup="listbox"
                :aria-expanded="flatItems.length ? 'true' : 'false'"
                :aria-controls="listboxId"
                :aria-activedescendant="activeItem ? optionId(activeIndex) : null"
                :placeholder="placeholder"
                autocomplete="off"
                spellcheck="false"
              />
            </div>
          </div>

          <div :id="listboxId" class="vs-spotlight__list" role="listbox" aria-label="Commands">
            <div
              v-for="section in sections"
              :key="section.group"
              class="vs-spotlight__group"
              role="group"
              :aria-label="section.group || null"
            >
              <div
                v-if="section.group"
                :class="[
                  'vs-spotlight__group-label',
                  { 'vs-spotlight__group-label--uppercase': uppercaseGroups },
                ]"
                aria-hidden="true"
              >
                {{ section.group }}
              </div>
              <div
                v-for="item in section.items"
                :id="optionId(item.index)"
                :key="item.command.id"
                role="option"
                :class="[
                  'vs-spotlight__option',
                  {
                    'vs-spotlight__option--active': item.index === activeIndex,
                    'vs-spotlight__option--disabled': item.command.disabled,
                  },
                ]"
                :aria-selected="item.index === activeIndex ? 'true' : 'false'"
                :aria-disabled="item.command.disabled ? 'true' : null"
                @mousemove="activeIndex = item.index"
                @click="selectItem(item.command)"
              >
                <slot name="item" :command="item.command" :active="item.index === activeIndex">
                  <span class="vs-spotlight__label">
                    <img
                      v-if="typeof item.command.icon === 'string'"
                      :src="item.command.icon"
                      class="vs-spotlight__icon"
                      alt=""
                    />
                    <component
                      :is="item.command.icon"
                      v-else-if="item.command.icon"
                      class="vs-spotlight__icon"
                      aria-hidden="true"
                    />
                    <span class="vs-spotlight__text">
                      <span>{{ item.command.label }}</span>
                      <span v-if="item.command.description" class="vs-spotlight__description">
                        {{ item.command.description }}
                      </span>
                    </span>
                  </span>
                  <span class="vs-spotlight__meta">
                    <kbd v-if="item.command.shortcut" class="vs-spotlight__shortcut">{{
                      item.command.shortcut
                    }}</kbd>
                    <span v-if="hasChildren(item.command)" class="vs-spotlight__chevron" aria-hidden="true"
                      >›</span
                    >
                  </span>
                </slot>
              </div>
            </div>
          </div>

          <div v-if="!flatItems.length" class="vs-spotlight__empty">
            <slot name="empty">{{ emptyText }}</slot>
          </div>

          <div v-if="showFooter" class="vs-spotlight__footer">
            <slot name="footer" :statusText="statusText" :activeCommand="activeItem ? activeItem.command : null">
              <span>{{ statusText }}</span>
              <span class="vs-spotlight__hints">
                <kbd>↑↓</kbd> navigate <kbd>↵</kbd> select <kbd>esc</kbd> close
              </span>
            </slot>
          </div>

          <div class="vs-spotlight__sr-only" aria-live="polite">{{ statusText }}</div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { scoreCommand } from './utils/fuzzy.js';

let instanceCount = 0;

export default {
  name: 'VsSpotlight',

  props: {
    /** Controls visibility. Use with `v-model:open`. */
    open: {
      type: Boolean,
      default: false,
    },
    /**
     * Commands to show. Each needs a unique `id` and a `label`.
     * Optional: `group`, `icon` (Vue component or image URL), `description` (muted second line), `keywords`,
     * `shortcut` (display hint), `disabled`, `children` (nested commands), `run`.
     */ commands: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: 'Type a command or search...',
    },
    emptyText: {
      type: String,
      default: 'No matching commands',
    },
    maxResults: {
      type: Number,
      default: 50,
    },
    /** Letter used with Ctrl/Cmd to toggle the palette. Pass an empty string to disable it. */
    shortcut: {
      type: String,
      default: 'k',
    },
    closeOnSelect: {
      type: Boolean,
      default: true,
    },
    /** Heading shown above the search box. Hidden when empty. */
    title: {
      type: String,
      default: '',
    },
    /** Small tag shown next to the title, for example "DEMO". */
    badge: {
      type: String,
      default: '',
    },
    /** Show the footer with the result count and keyboard hints. Use the `footer` slot to replace it. */
    showFooter: {
      type: Boolean,
      default: true,
    },
    /** Render group headings in uppercase. */
    uppercaseGroups: {
      type: Boolean,
      default: true,
    },
    /** Animate opening and closing. */
    animate: {
      type: Boolean,
      default: true,
    },
    /** Render the palette into `teleportTo`, so a parent's `overflow` or `z-index` cannot clip it. */
    teleport: {
      type: Boolean,
      default: true,
    },
    /** Target for the teleport when `teleport` is on. */
    teleportTo: {
      type: [String, Object],
      default: 'body',
    },
  },

  emits: ['update:open', 'select', 'search'],

  data() {
    instanceCount += 1;
    return {
      baseId: `vs-spotlight-${instanceCount}`,
      query: '',
      activeIndex: 0,
      path: [],
    };
  },

  computed: {
    /** Id prefix shared by the listbox and its options, unique per instance. */
    listboxId() {
      return `${this.baseId}-listbox`;
    },

    /**
     * Commands at the current drill-in level: the root list, or the children of the last breadcrumb entry.
     * @returns {Array}
     */
    currentLevel() {
      return this.path.length ? this.path[this.path.length - 1].children : this.commands;
    },

    /**
     * Filtered and grouped commands for the current level. Groups keep first-appearance order, or best-match order when searching.
     * @returns {Array} Sections shaped as `{ group, items }`, where each item is `{ command, index }`.
     */
    sections() {
      const trimmed = this.query.trim();
      let matches = this.currentLevel
        .map((command, order) => ({ command, order, score: trimmed ? scoreCommand(command, trimmed) : 0 }))
        .filter(entry => entry.score !== null);

      if (trimmed) {
        matches = matches.sort((a, b) => b.score - a.score || a.order - b.order);
      }

      const groups = new Map();
      for (const entry of matches) {
        const key = entry.command.group || '';
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(entry.command);
      }

      const sections = [];
      let index = 0;
      for (const [group, commands] of groups) {
        if (index >= this.maxResults) break;
        const items = commands.slice(0, this.maxResults - index).map(command => ({ command, index: index++ }));
        sections.push({ group, items });
      }
      return sections;
    },

    /**
     * Every visible item across all sections, in display order. Its index is the keyboard position.
     * @returns {Array}
     */
    flatItems() {
      return this.sections.flatMap(section => section.items);
    },

    /**
     * The item at the keyboard position, or `null` when nothing is shown.
     * @returns {Object|null}
     */
    activeItem() {
      return this.flatItems[this.activeIndex] || null;
    },

    /**
     * Drill-in path as a readable string, for example `Export as / PDF`.
     * @returns {String}
     */
    breadcrumb() {
      return this.path.map(command => command.label).join(' / ');
    },

    /**
     * Result count for the footer, or the empty-state text when nothing matches.
     * @returns {String}
     */
    statusText() {
      const count = this.flatItems.length;
      if (!count) return this.emptyText;
      return `${count} ${count === 1 ? 'result' : 'results'}`;
    },
  },

  watch: {
    open(isOpen) {
      if (isOpen) {
        this.handleOpen();
      } else {
        this.restoreFocus();
      }
    },

    query(value) {
      this.activeIndex = 0;
      this.$emit('search', value);
    },

    activeIndex() {
      this.$nextTick(this.scrollActiveIntoView);
    },
  },

  mounted() {
    // Capture phase so the shortcut runs before bubble-phase listeners that may stop propagation.
    window.addEventListener('keydown', this.onGlobalKeydown, true);
    if (this.open) {
      this.handleOpen();
    }
  },

  beforeUnmount() {
    window.removeEventListener('keydown', this.onGlobalKeydown, true);
  },

  methods: {
    /**
     * DOM id of the option at the given index, used for `aria-activedescendant`.
     * @param {Number} index
     * @returns {String}
     */
    optionId(index) {
      return `${this.baseId}-option-${index}`;
    },

    /**
     * Whether a command opens a nested level instead of running.
     * @param {Object} command
     * @returns {Boolean}
     */
    hasChildren(command) {
      return Array.isArray(command.children) && command.children.length > 0;
    },

    /** Ask the parent to close the palette by emitting `update:open`. */
    close() {
      this.$emit('update:open', false);
    },

    /**
     * Reset the query, drill-in path, and selection, then focus the input.
     * Remembers the element that had focus so it can be restored on close.
     */
    handleOpen() {
      this.previouslyFocused = document.activeElement;
      this.query = '';
      this.path = [];
      this.activeIndex = 0;
      this.focusInput();
    },

    /** Return focus to the element that was focused before the palette opened. */
    restoreFocus() {
      const element = this.previouslyFocused;
      this.previouslyFocused = null;
      if (element && typeof element.focus === 'function' && document.contains(element)) {
        element.focus();
      }
    },

    /** Focus the search input after the next DOM update. */
    focusInput() {
      this.$nextTick(() => {
        if (this.$refs.input) this.$refs.input.focus();
      });
    },

    /**
     * Move the keyboard selection by one step, wrapping at both ends.
     * @param {Number} step `1` for down, `-1` for up.
     */
    move(step) {
      const count = this.flatItems.length;
      if (!count) return;
      this.activeIndex = (((this.activeIndex + step) % count) + count) % count;
    },

    /**
     * Run a command, or drill into its children. Disabled commands are ignored.
     * Emits `select` before running `run`, then closes unless `closeOnSelect` is false.
     * @param {Object} command
     */
    selectItem(command) {
      if (command.disabled) return;

      if (this.hasChildren(command)) {
        this.path = [...this.path, command];
        this.query = '';
        this.activeIndex = 0;
        this.focusInput();
        return;
      }

      this.$emit('select', command);
      if (typeof command.run === 'function') {
        command.run(command);
      }
      if (this.closeOnSelect) {
        this.close();
      }
    },

    /** Go up one drill-in level and clear the query. Does nothing at the root. */
    goBack() {
      if (!this.path.length) return;
      this.path = this.path.slice(0, -1);
      this.query = '';
      this.activeIndex = 0;
      this.focusInput();
    },

    /**
     * Keeps Tab focus inside the palette by cycling between the search input and the Back button.
     * @param {HTMLElement} target The element that currently has focus.
     */
    cycleFocus(target) {
      const back = this.$refs.backButton;
      if (back && target === this.$refs.input) {
        back.focus();
      } else {
        this.focusInput();
      }
    },

    /**
     * Keyboard handling inside the dialog: arrows, Enter, Escape, Backspace (go back), and Tab.
     * @param {KeyboardEvent} event
     */
    onDialogKeydown(event) {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          this.move(1);
          break;
        case 'ArrowUp':
          event.preventDefault();
          this.move(-1);
          break;
        case 'Enter':
          if (event.isComposing || event.target !== this.$refs.input) return;
          event.preventDefault();
          if (this.activeItem) this.selectItem(this.activeItem.command);
          break;
        case 'Escape':
          event.preventDefault();
          this.close();
          break;
        case 'Backspace':
          if (this.query === '' && this.path.length && event.target === this.$refs.input) {
            event.preventDefault();
            this.goBack();
          }
          break;
        case 'Home':
          if (this.query === '' && event.target === this.$refs.input) {
            event.preventDefault();
            this.activeIndex = 0;
          }
          break;
        case 'End':
          if (this.query === '' && event.target === this.$refs.input) {
            event.preventDefault();
            this.activeIndex = Math.max(0, this.flatItems.length - 1);
          }
          break;
        case 'Tab':
          event.preventDefault();
          this.cycleFocus(event.target);
          break;
      }
    },

    /**
     * Toggle the palette on Ctrl/Cmd + the `shortcut` key. Attached to `window` while mounted.
     * @param {KeyboardEvent} event
     */
    onGlobalKeydown(event) {
      if (!this.shortcut || !(event.metaKey || event.ctrlKey) || event.altKey) return;
      if (String(event.key || '').toLowerCase() !== this.shortcut.toLowerCase()) return;
      event.preventDefault();
      this.$emit('update:open', !this.open);
    },

    /** Scroll the keyboard-selected option into view within the list. */
    scrollActiveIntoView() {
      const element = document.getElementById(this.optionId(this.activeIndex));
      if (element && typeof element.scrollIntoView === 'function') {
        element.scrollIntoView({ block: 'nearest' });
      }
    },
  },
};
</script>

<style lang="scss">
$el: '.vs-spotlight';

[data-theme='dark'] #{$el},
.dark #{$el} {
  --vs-spotlight-bg-color: #1e1e1e;
  --vs-spotlight-color: #ffffff;
  --vs-spotlight-muted-color: #9a9a9a;
  --vs-spotlight-border-color: #3a3a3a;
  --vs-spotlight-active-bg-color: rgba(38, 148, 214, 0.2);
  --vs-spotlight-disabled-color: #555555;
  --vs-spotlight-input-bg-color: #2a2a2a;
}

#{$el} {
  --vs-spotlight-bg-color: #ffffff;
  --vs-spotlight-color: #000000;
  --vs-spotlight-muted-color: #6b7280;
  --vs-spotlight-border-color: #d8dcdc;
  --vs-spotlight-active-bg-color: rgba(31, 115, 183, 0.1);
  --vs-spotlight-disabled-color: #9ca3af;
  --vs-spotlight-input-bg-color: #f3f4f6;
  --vs-spotlight-border-radius: 8px;

  display: flex;
  flex-direction: column;
  width: min(640px, calc(100vw - 32px));
  max-height: 60vh;
  overflow: hidden;
  background: var(--vs-spotlight-bg-color);
  color: var(--vs-spotlight-color);
  border: 1px solid var(--vs-spotlight-border-color);
  border-radius: var(--vs-spotlight-border-radius);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.25);
  font-size: 14px;

  &__header {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--vs-spotlight-border-color);
  }

  &__breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px 0;
    color: var(--vs-spotlight-muted-color);
    font-size: 12px;
  }

  &__back {
    padding: 2px 8px;
    border: 1px solid var(--vs-spotlight-border-color);
    border-radius: 4px;
    background: transparent;
    color: inherit;
    font: inherit;
    cursor: pointer;
  }

  &__search {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 8px;
    padding: 0 14px;
    border-radius: 6px;
    background: var(--vs-spotlight-input-bg-color);
  }

  &__search-icon {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    color: var(--vs-spotlight-muted-color);
  }

  &__input {
    flex: 1;
    min-width: 0;
    padding: 12px 0;
    border: none;
    outline: none;
    background: transparent;
    color: inherit;
    font: inherit;
    font-size: 15px;
  }

  &__label {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
  }

  &__icon {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    color: var(--vs-spotlight-muted-color);
  }

  &__list {
    flex: 1;
    overflow-y: auto;
    padding: 6px 0;
  }

  &__group-label {
    padding: 8px 16px 4px;
    color: var(--vs-spotlight-muted-color);
    font-size: 12px;

    &--uppercase {
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
  }

  &__title {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px 0;
    font-size: 13px;
    font-weight: 600;
  }

  &__badge {
    padding: 1px 6px;
    border: 1px solid var(--vs-spotlight-border-color);
    border-radius: 4px;
    color: var(--vs-spotlight-muted-color);
    font-size: 11px;
    font-weight: 500;
  }

  &__text {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  &__description {
    color: var(--vs-spotlight-muted-color);
    font-size: 12px;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 12px;
    border-top: 1px solid var(--vs-spotlight-border-color);
    color: var(--vs-spotlight-muted-color);
    font-size: 12px;
  }

  &__hints {
    display: flex;
    align-items: center;
    gap: 6px;

    kbd {
      padding: 0 4px;
      border: 1px solid var(--vs-spotlight-border-color);
      border-radius: 3px;
      font-family: inherit;
      font-size: 11px;
    }
  }

  &__option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 16px;
    cursor: pointer;

    &--active {
      background: var(--vs-spotlight-active-bg-color);
    }

    &--disabled {
      color: var(--vs-spotlight-disabled-color);
      cursor: not-allowed;
    }
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--vs-spotlight-muted-color);
  }

  &__shortcut {
    padding: 1px 6px;
    border: 1px solid var(--vs-spotlight-border-color);
    border-radius: 4px;
    font-family: inherit;
    font-size: 12px;
  }

  &__empty {
    padding: 16px;
    color: var(--vs-spotlight-muted-color);
    text-align: center;
  }

  &__sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }
}

.vs-spotlight__overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 12vh;
  background: rgba(0, 0, 0, 0.45);
}

.vs-spotlight-fade-enter-active,
.vs-spotlight-fade-leave-active {
  transition: opacity 0.15s ease;
}

.vs-spotlight-fade-enter-active .vs-spotlight,
.vs-spotlight-fade-leave-active .vs-spotlight {
  transition: transform 0.15s ease;
}

.vs-spotlight-fade-enter-from,
.vs-spotlight-fade-leave-to {
  opacity: 0;
}

.vs-spotlight-fade-enter-from .vs-spotlight,
.vs-spotlight-fade-leave-to .vs-spotlight {
  transform: scale(0.96);
}

@media (prefers-reduced-motion: reduce) {
  .vs-spotlight-fade-enter-active,
  .vs-spotlight-fade-leave-active,
  .vs-spotlight-fade-enter-active .vs-spotlight,
  .vs-spotlight-fade-leave-active .vs-spotlight {
    transition: none;
  }
}
</style>
