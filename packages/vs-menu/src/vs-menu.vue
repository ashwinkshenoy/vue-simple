<template>
  <div class="vs-menu" ref="vs-menu">
    <vs-button
      @click="toggleMenu"
      :class="['vs-menu-button', { active: isOpen }]"
      :size="size"
      :fill="fill"
      :is-round="isRound"
      :disabled="disabled"
      :variant="variant"
    >
      <span><slot>Menu</slot></span>
      <svg
        class="vs-menu-chevron"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        focusable="false"
        viewBox="0 0 16 16"
        aria-hidden="true"
        v-if="!hideArrow"
      >
        <path
          fill="currentColor"
          d="M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"
        ></path>
      </svg>
    </vs-button>

    <transition name="vs-menu">
      <div v-if="isOpen" :class="['vs-menu-dropdown', menuPosition, menuAlignment, classList]" ref="vs-menu-dropdown">
        <slot name="menu">
          <ul>
            <li
              v-for="(item, index) in items"
              :key="'vs-menu_' + index"
              @click="selectItem(item)"
              :class="{ 'vs-menu-option--disabled': item.disabled }"
            >
              <slot name="item" :item="item">{{ item.label }}</slot>
            </li>
          </ul>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
  import VsButton from '../../vs-button/src/vs-button.vue';

  export default {
    name: 'VsMenu',

    components: {
      VsButton,
    },

    props: {
      items: {
        type: Array,
        default: () => [],
      },
      modelValue: {
        type: [String, Number, Object, null],
        default: null,
      },
      alignment: {
        type: String,
        default: 'left', // Options: 'left', 'right'
        validator: value => ['left', 'right'].includes(value),
      },
      size: {
        type: String,
        default: 'medium',
      },
      fill: {
        type: Boolean,
        default: false,
      },
      isRound: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      hideArrow: {
        type: Boolean,
        default: false,
      },
      variant: {
        type: String,
        default: 'primary',
      },
    },

    computed: {
      classList() {
        return [`vs-menu--${this.size}`];
      },
    },

    data() {
      return {
        isOpen: false,
        menuPosition: 'vs-menu-bottom',
        menuAlignment: 'vs-menu-left',
      };
    },

    emits: ['update:modelValue', 'item-selected'],

    methods: {
      /**
       * Toggle Menu visibility
       */
      toggleMenu() {
        if (this.disabled) return;
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
          this.adjustMenuPosition();
          this.adjustMenuAlignment();
        }
      },

      /**
       * Close menu
       */
      closeMenu() {
        this.isOpen = false;
      },

      /**
       * Select item
       * @param {Object} item
       */
      selectItem(item) {
        if (item.disabled) return;
        this.$emit('update:modelValue', item);
        this.$emit('item-selected', item);
        this.closeMenu();
      },

      /**
       * Handle outside click
       * @param {Event} event
       */
      handleOutsideClick(event) {
        const menu = this.$refs['vs-menu'];
        if (menu && !menu.contains(event.target)) {
          this.closeMenu();
        }
      },

      /**
       * Adjust menu position
       */
      adjustMenuPosition() {
        this.$nextTick(() => {
          const menu = this.$refs['vs-menu'];
          const menuDropdown = this.$refs['vs-menu-dropdown'];
          if (!menu || !menuDropdown) return;

          const rect = menu.getBoundingClientRect();
          const menuHeight = menuDropdown.offsetHeight;
          const viewportHeight = window.innerHeight;

          if (viewportHeight - rect.bottom < menuHeight) {
            this.menuPosition = 'vs-menu-top';
          } else {
            this.menuPosition = 'vs-menu-bottom';
          }
        });
      },

      /**
       * Adjust dropdown alignment
       */
      adjustMenuAlignment() {
        this.$nextTick(() => {
          const menu = this.$refs['vs-menu'];
          const menuDropdown = this.$refs['vs-menu-dropdown'];
          if (!menu || !menuDropdown) return;

          const rect = menu.getBoundingClientRect();
          const menuWidth = menuDropdown.offsetWidth;
          const viewportWidth = window.innerWidth;

          if (this.alignment === 'right' && viewportWidth - rect.right >= menuWidth) {
            this.menuAlignment = 'vs-menu-right';
          } else {
            this.menuAlignment = 'vs-menu-left';
          }
        });
      },

      /**
       * Handle scroll event
       */
      handleScroll() {
        if (this.isOpen) {
          this.adjustMenuPosition();
        }
      },
    },

    mounted() {
      document.addEventListener('click', this.handleOutsideClick, true); // Capture phase
      window.addEventListener('scroll', this.handleScroll, true);
      this.adjustMenuAlignment();
      this.adjustMenuPosition();
    },

    beforeUnmount() {
      document.removeEventListener('click', this.handleOutsideClick, true);
      window.removeEventListener('scroll', this.handleScroll, true);
    },
  };
</script>

<style lang="scss">
  $el: '.vs-menu';

  [data-theme='dark'] #{$el},
  .dark #{$el} {
    --vs-menu-bg-color: #1e1e1e;
    --vs-menu-color: #ffffff;
    --vs-menu-border-color: #3a3a3a;
    --vs-menu-hover-bg-color: rgba(38, 148, 214, 0.08);
    --vs-menu-disabled-color: #555555;
  }

  #{$el} {
    --vs-menu-bg-color: #ffffff;
    --vs-menu-color: #000000;
    --vs-menu-border-color: #d8dcdc;
    --vs-menu-hover-bg-color: rgba(31, 115, 183, 0.08);
    --vs-menu-disabled-color: #cccccc;

    position: relative;
    display: inline-block;

    .vs-menu-button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &.active .vs-menu-chevron {
        transform: rotate(180deg);
      }
    }

    .vs-menu-chevron {
      width: 16px;
      height: 16px;
      margin-left: 5px;
      transition: 0.18s all linear;
    }

    .vs-menu-dropdown {
      position: absolute;
      min-width: 150px;
      background-color: var(--vs-menu-bg-color);
      box-shadow: rgba(10, 13, 14, 0.16) 0px 20px 24px 0px;
      border: 1px solid var(--vs-menu-border-color);
      border-radius: 4px;
      z-index: 1000;
      overflow: hidden;
      font-size: 14px;

      &.vs-menu--small li {
        padding: 5px 30px;
      }

      .vs-menu-option--disabled {
        cursor: not-allowed;
        color: var(--vs-menu-disabled-color);
        user-select: none;
      }
    }

    .vs-menu-bottom {
      top: calc(100% + 5px);
    }

    .vs-menu-top {
      bottom: calc(100% + 5px);
    }

    .vs-menu-left {
      left: 0;
    }

    .vs-menu-right {
      right: 0;
    }

    .vs-menu-dropdown ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .vs-menu-dropdown li {
      padding: 8px 30px;
      cursor: pointer;
      transition: background-color 0.2s;
      margin-top: 0;
    }

    .vs-menu-dropdown li:hover:not(.vs-menu-option--disabled) {
      background-color: var(--vs-menu-hover-bg-color);
      box-shadow: rgb(31, 115, 183) 3px 0px inset;
    }

    .vs-menu-enter-active,
    .vs-menu-leave-active {
      transition: opacity 0.2s;
    }

    .vs-menu-enter-from,
    .vs-menu-leave-to {
      opacity: 0;
    }
  }
</style>
