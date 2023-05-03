<template>
  <li
    class="vs-accordion__item"
    :class="[
      { 'vs-accordion--box': isBox },
      { 'vs-accordion--compact': isCompact },
      { 'vs-accordion__active': isExpandable ? isExpandableToggle : visible },
    ]"
  >
    <div class="vs-accordion__trigger" role="heading" :aria-level="level" @click="open">
      <!-- Slot for title/header of the accordion and is the part you click on -->
      <button
        class="vs-accordion__button"
        :id="`accordion-${index + 1}`"
        tabindex="0"
        :aria-expanded="visible ? 'true' : 'false'"
      >
        <slot name="accordion-trigger"></slot>
      </button>

      <!-- Slot for icon -->
      <slot name="accordion-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          focusable="false"
          role="presentation"
          :class="['vs-accordion--icon', { 'vs-accordion--icon-active': isExpandable ? isExpandableToggle : visible }]"
        >
          <path
            fill="currentColor"
            d="M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"
          ></path>
        </svg>
      </slot>
    </div>

    <!-- Non-clickable area -->
    <div class="vs-accordion__non-clickable" v-if="hasNonClickableContent">
      <slot name="accordion-non-clickable"></slot>
    </div>

    <transition name="vs-accordion" @enter="start" @after-enter="onEnter" @before-leave="start" @after-leave="onLeave">
      <div
        class="vs-accordion__content"
        v-show="isExpandable ? isExpandableToggle : visible"
        :aria-labelledby="`accordion-${index + 1}`"
        :aria-hidden="visible ? 'false' : 'true'"
      >
        <div class="vs-accordion__content-wrapper">
          <!-- Slot for content that is passed to the accordion -->
          <slot></slot>
        </div>
      </div>
    </transition>
  </li>
</template>

<script>
  export default {
    name: 'VsAccordionItem',

    props: {},

    inject: ['Accordion'],

    data() {
      return {
        index: null,
        isBox: false,
        isExpandable: false,
        isExpandableToggle: false,
        level: null,
        hasNonClickableContent: this.$slots['accordion-non-clickable'],
      };
    },

    computed: {
      visible() {
        return this.index == this.Accordion.active;
      },
    },

    created() {
      this.index = this.Accordion.count++;
      this.isBox = this.Accordion.isBox;
      this.level = this.Accordion.level;
      this.isCompact = this.Accordion.isCompact;
      this.isExpandable = this.Accordion.isExpandable;
      if (this.isExpandable) {
        this.isExpandableToggle = this.index === this.Accordion.active;
      }
    },

    methods: {
      open() {
        if (this.isExpandable) {
          this.isExpandableToggle = !this.isExpandableToggle;
          this.$emit('change', { visible: this.isExpandableToggle, index: this.index });
          return;
        }
        if (this.visible) {
          this.Accordion.active = null;
        } else {
          this.Accordion.active = this.index;
        }
        this.$emit('change', { visible: this.visible, index: this.index });
      },

      start(el) {
        el.style.height = el.scrollHeight + 'px';
      },

      onEnter(el) {
        this.$emit('open');
        el.style.height = '';
      },

      onLeave(el) {
        this.$emit('hide');
        el.style.height = '';
      },
    },
  };
</script>

<style lang="scss">
  $el: '.vs-accordion';

  #{$el} {
    --vs-accordion-border-color: #d8dcde;
    --vs-accordion-border-radius: 4px;
    --vs-accordion-padding: 20px;
    --vs-accordion-compact-padding: 10px;

    &__item {
      border-bottom: 1px solid var(--vs-accordion-border-color);
      position: relative;

      &#{$el}--box {
        border: 1px solid var(--vs-accordion-border-color);
        border-radius: var(--vs-accordion-border-radius);
        margin-bottom: 10px;
      }
    }

    &__trigger {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--vs-accordion-padding);
      transition: all 0.25s ease-in-out 0s;
    }

    &__non-clickable {
      padding: 0 var(--vs-accordion-padding) var(--vs-accordion-padding) var(--vs-accordion-padding);
    }

    &--compact {
      #{$el}__trigger {
        padding: var(--vs-accordion-compact-padding);
      }

      #{$el}__non-clickable {
        padding: 0 var(--vs-accordion-compact-padding) var(--vs-accordion-compact-padding)
          var(--vs-accordion-compact-padding);
      }

      #{$el}__content-wrapper {
        padding: 0 var(--vs-accordion-compact-padding) var(--vs-accordion-compact-padding);
      }
    }

    &--icon-active {
      transform: rotate(180deg);
    }

    &__button {
      background: transparent;
      border: 0;
      outline: none;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: pointer;
      width: 100%;
      text-align: left;
    }

    &--icon {
      flex: 0 0 16px;
      width: 16px;
      height: 16px;
      vertical-align: middle;
      color: rgb(104, 115, 125);
      transition: all 0.25s ease-in-out 0s;
    }

    &#{$el}--disable-animate &--icon {
      transition: none;
    }

    &__content-wrapper {
      padding: 0 var(--vs-accordion-padding) var(--vs-accordion-padding);
    }

    &:not(#{$el}--disable-animate) &-enter-active,
    &:not(#{$el}--disable-animate) &-leave-active {
      will-change: height, opacity;
      transition: height 0.3s ease, opacity 0.3s ease;
      overflow: hidden;
    }

    &-enter-from,
    &-leave-to {
      height: 0 !important;
      opacity: 0;
    }
  }
</style>
