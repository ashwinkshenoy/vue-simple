<template>
  <div :class="['vs-tab', classList]">
    <div
      class="vs-tab__list"
      role="tablist"
      :aria-label="ariaLabel"
      :aria-orientation="isVerticalLayout ? 'vertical' : 'horizontal'"
    >
      <button
        v-for="(tab, index) in normalizedTab"
        :key="tab.item"
        :id="`${uid}-tab-${index}`"
        :ref="el => setTabRef(el, index)"
        class="vs-tab__tab"
        :class="{
          'vs-tab__tab--active': isSelected(tab),
          'vs-tab__tab--disabled': isDisabled(tab),
        }"
        role="tab"
        type="button"
        :aria-selected="isSelected(tab)"
        :aria-disabled="isDisabled(tab) ? 'true' : null"
        :aria-controls="`${uid}-panel-${index}`"
        :tabindex="isSelected(tab) ? 0 : -1"
        :disabled="isDisabled(tab)"
        @click="selectTab(tab)"
        @keydown="onTabKeydown($event, index)"
      >
        <slot :name="`tab-${tab.item}`" :tab="tab" :is-selected="isSelected(tab)">
          {{ tab.label }}
        </slot>
      </button>
    </div>

    <div class="vs-tab__panels">
      <div
        v-for="(tab, index) in normalizedTab"
        v-show="isSelected(tab)"
        :id="`${uid}-panel-${index}`"
        :key="`panel-${tab.item}`"
        class="vs-tab__panel"
        role="tabpanel"
        :aria-labelledby="`${uid}-tab-${index}`"
      >
        <slot :name="`panel-${tab.item}`" :tab="tab" :selected-item="currentSelected"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VsTab',

    props: {
      modelValue: {
        type: [String, Number, Boolean, Object],
      },
      orientation: {
        type: String,
        default: 'horizontal',
        validator: value => ['horizontal', 'vertical'].includes(value),
      },
      isVertical: {
        type: Boolean,
        default: false,
      },
      activation: {
        type: String,
        default: 'auto',
        validator: value => ['auto', 'manual'].includes(value),
      },
      ariaLabel: {
        type: String,
        default: 'Tab',
      },
      disabledItems: {
        type: Array,
        default: () => [],
      },
    },

    emits: ['update:modelValue', 'change'],

    data() {
      return {
        tabRefs: [],
        uid: `vs-tab-${Math.random().toString(36).slice(2, 10)}`,
      };
    },

    computed: {
      /**
       * Checks if the tab are in a vertical layout.
       */
      isVerticalLayout() {
        return this.isVertical || this.orientation === 'vertical';
      },

      /**
       * Builds the class list for the tab.
       */
      classList() {
        return {
          'vs-tab--vertical': this.isVerticalLayout,
        };
      },

      /**
       * Normalizes the tab by building a list of unique keys from the slots.
       */
      normalizedTab() {
        const slots = this.$slots || {};
        const slotNames = Object.keys(slots);
        const panelKeys = slotNames.filter(name => name.startsWith('panel-')).map(name => name.slice(6));
        const tabKeys = slotNames.filter(name => name.startsWith('tab-')).map(name => name.slice(4));
        const uniqueKeys = [...new Set([...panelKeys, ...tabKeys])];
        const disabledLookup = this.getDisabledLookup();

        return uniqueKeys.map(key => ({
          label: this.formatLabelFromKey(key),
          item: key,
          disabled: disabledLookup.has(String(key)),
        }));
      },

      /**
       * Finds the first enabled tab.
       */
      firstEnabledTab() {
        return this.normalizedTab.find(tab => !tab.disabled) || null;
      },

      /**
       * Returns the current selected tab.
       */
      currentSelected() {
        const matchedTab = this.normalizedTab.find(tab => tab.item === this.modelValue);
        return matchedTab ? matchedTab.item : this.firstEnabledTab?.item;
      },
    },

    methods: {
      /**
       * Caches the tab button references so arrow-key navigation can move focus.
       * @param {HTMLElement} el - The element to set the reference to.
       * @param {Number} index - The index of the tab.
       */
      setTabRef(el, index) {
        if (el) {
          this.tabRefs[index] = el;
        }
      },

      /**
       * Builds a normalized set of disabled tab ids from props and slot markup.
       */
      getDisabledLookup() {
        const lookup = new Set();
        const disabledSources = [...(this.disabledItems || [])];

        disabledSources.forEach(item => {
          if (item !== undefined && item !== null && item !== '') {
            lookup.add(String(item.toLowerCase()));
          }
        });

        const slots = this.$slots || {};
        Object.keys(slots)
          .filter(name => name.startsWith('tab-'))
          .forEach(name => {
            const key = name.slice(4);
            const slotNodes = this.getSlotNodes(slots[name]);
            if (slotNodes.some(node => this.isVNodeDisabled(node))) {
              lookup.add(String(key));
            }
          });

        return lookup;
      },

      /**
       * Resolves slot function output into a flat array of VNodes.
       * @param {Function} slotFn - The slot function to resolve.
       * @returns {Array} An array of VNodes.
       */
      getSlotNodes(slotFn) {
        if (typeof slotFn !== 'function') {
          return [];
        }
        const content = slotFn({});
        return Array.isArray(content) ? content : [content];
      },

      /**
       * Recursively inspects slot VNodes for disabled/diabled attributes.
       * @param {Object} node - The node to inspect.
       * @returns {Boolean} True if the node is disabled, false otherwise.
       */
      isVNodeDisabled(node) {
        if (!node || typeof node !== 'object') {
          return false;
        }

        const props = node.props || {};
        const disabledValue = props.disabled ?? props.diabled;

        if (this.isTruthyAttr(disabledValue)) {
          return true;
        }

        const children = Array.isArray(node.children) ? node.children : [];
        return children.some(child => this.isVNodeDisabled(child));
      },

      /**
       * Treats common truthy attribute forms as enabled flags.
       * @param {any} value - The value to check.
       * @returns {Boolean} True if the value is truthy, false otherwise.
       */
      isTruthyAttr(value) {
        return value === '' || value === true || value === 'true' || value === 'disabled' || value === 'diabled';
      },

      /**
       * Checks if the tab is disabled.
       * @param {Object} tab - The tab to check.
       * @returns {Boolean} True if the tab is disabled, false otherwise.
       */
      isDisabled(tab) {
        return Boolean(tab?.disabled);
      },

      /**
       * Checks if the tab is selected.
       * @param {Object} tab - The tab to check.
       * @returns {Boolean} True if the tab is selected, false otherwise.
       */
      isSelected(tab) {
        return tab.item === this.currentSelected;
      },

      /**
       * Formats the label from the key.
       * @param {String} key - The key to format.
       * @returns {String} The formatted label.
       */
      formatLabelFromKey(key) {
        return String(key)
          .replace(/[-_]+/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
          .replace(/\b\w/g, char => char.toUpperCase());
      },

      /**
       * Selects the tab.
       * @param {Object} tab - The tab to select.
       */
      selectTab(tab) {
        if (!tab || this.isDisabled(tab)) {
          return;
        }
        if (tab.item === this.currentSelected) {
          return;
        }
        this.$emit('update:modelValue', tab.item);
        this.$emit('change', tab.item, tab);
      },

      /**
       * Focuses the tab.
       * @param {Number} index - The index of the tab.
       */
      focusTab(index) {
        this.$nextTick(() => {
          const button = this.tabRefs[index];
          if (button) {
            button.focus();
          }
        });
      },

      /**
       * Implements WAI-ARIA tablist keyboard behavior and skips disabled tab.
       * @param {KeyboardEvent} event - The keyboard event.
       * @param {Number} currentIndex - The current index of the tab.
       */
      onTabKeydown(event, currentIndex) {
        const enabledTabIndexes = this.normalizedTab
          .map((tab, index) => (this.isDisabled(tab) ? null : index))
          .filter(index => index !== null);

        if (!enabledTabIndexes.length) {
          return;
        }

        const currentTabPosition = Math.max(enabledTabIndexes.indexOf(currentIndex), 0);
        const isNextKey = event.key === 'ArrowRight' || (this.isVerticalLayout && event.key === 'ArrowDown');
        const isPrevKey = event.key === 'ArrowLeft' || (this.isVerticalLayout && event.key === 'ArrowUp');

        let nextIndex = null;

        if (isNextKey) {
          const nextPosition = (currentTabPosition + 1) % enabledTabIndexes.length;
          nextIndex = enabledTabIndexes[nextPosition];
        } else if (isPrevKey) {
          const prevPosition = (currentTabPosition - 1 + enabledTabIndexes.length) % enabledTabIndexes.length;
          nextIndex = enabledTabIndexes[prevPosition];
        } else if (event.key === 'Home') {
          nextIndex = enabledTabIndexes[0];
        } else if (event.key === 'End') {
          nextIndex = enabledTabIndexes[enabledTabIndexes.length - 1];
        }

        if (nextIndex === null) {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.selectTab(this.normalizedTab[currentIndex]);
          }
          return;
        }

        event.preventDefault();
        const tab = this.normalizedTab[nextIndex];
        this.focusTab(nextIndex);
        if (this.activation === 'auto') {
          this.selectTab(tab);
        }
      },
    },
  };
</script>

<style lang="scss">
  $el: '.vs-tab';

  [data-theme='dark'],
  .dark {
    #{$el} {
      --vs-tab-tab-color: #b8c2cc;
      --vs-tab-tab-color-active: #ffffff;
      --vs-tab-tab-text-hover: #2694d6;
      --vs-tab-tab-text-active: #2694d6;
      --vs-tab-border-color: #31404d;
    }
  }

  #{$el} {
    --vs-tab-tab-color: #49545c;
    --vs-tab-tab-color-active: #0d2538;
    --vs-tab-tab-text-hover: #1f73b7;
    --vs-tab-tab-text-active: #1f73b7;
    --vs-tab-border-color: #d8e1e8;

    width: 100%;

    &__list {
      display: flex;
      border-bottom: 1px solid var(--vs-tab-border-color);
    }

    &__tab {
      border-bottom: 3px solid transparent;
      border-inline: none;
      border-top: none;
      background: transparent;
      color: var(--vs-tab-tab-color);
      padding: 10px 28px 6px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: 0.15s ease;

      &:hover {
        color: var(--vs-tab-tab-text-hover);
      }

      &:focus-visible {
        outline: none;
        box-shadow:
          0 0 0 2px #ffffff,
          0 0 0 4px #1f73b7;
      }

      &--active {
        color: var(--vs-tab-tab-text-active);
        border-bottom: 3px solid var(--vs-tab-tab-text-active);
      }

      &--disabled,
      &-disabled:hover {
        cursor: not-allowed;
        opacity: 0.6;
        color: inherit !important;
      }
    }

    &__panels {
      margin-top: 20px;
      width: 100%;
    }

    &__panel {
      font-size: 14px;
      line-height: 1.5;
    }

    &--vertical {
      display: grid;
      grid-template-columns: 200px 1fr;
      gap: 14px;

      .vs-tab__list {
        flex-direction: column;
        border-bottom: 0;
        padding-bottom: 0;
        padding-right: 10px;
      }

      .vs-tab__tab {
        border-left: 3px solid transparent;
        border-bottom: none;
        margin-bottom: 15px;
        text-align: left;
        padding: 4px 8px;

        &--active {
          border-left: 3px solid var(--vs-tab-tab-text-active);
        }
      }

      .vs-tab__panels {
        margin-top: 0;
      }
    }
  }
</style>
