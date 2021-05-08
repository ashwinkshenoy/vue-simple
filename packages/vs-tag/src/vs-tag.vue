<template>
  <span :class="['vs-tag', classList]" :style="isCssVars">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'VsTag',

    props: {
      type: {
        type: String,
      },
      // small. medium, large
      size: {
        type: String,
        default: 'medium',
      },
      isBold: {
        type: Boolean,
        default: true,
      },
      isPill: {
        type: Boolean,
        default: false,
      },
      isRound: {
        type: Boolean,
        default: false,
      },
      bgColor: {
        type: String,
      },
      textColor: {
        type: String,
      },
    },

    computed: {
      classList() {
        return [
          this.type ? `vs-tag__${this.type}` : '',
          `vs-tag__size-${this.size}`,
          { 'vs-tag--bold': this.isBold },
          { 'vs-tag--pill': this.isPill },
          { 'vs-tag--round': this.isRound },
        ];
      },

      cssVars() {
        return {
          '--vs-tag-bg-color': this.bgColor,
          '--vs-tag-text-color': this.textColor,
        };
      },

      isCssVars() {
        return this.bgColor || this.textColor ? this.cssVars : '';
      },
    },
  };
</script>

<style lang="scss">
  $el: '.vs-tag';

  #{$el} {
    --vs-tag-bg-color: #e9ebed;
    --vs-tag-text-color: #49545c;
    --vs-tag-primary: #1f73b7;
    --vs-tag-success: #186146;
    --vs-tag-danger: #cc3340;
    --vs-tag-warning: #ffb057;
    --vs-tag-secondary: #3a3a3a;
    --vs-tag-font-bold: 600;

    background-color: var(--vs-tag-bg-color);
    color: var(--vs-tag-text-color);
    max-width: 100%;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &__primary {
      background: var(--vs-tag-primary);
      color: #ffffff;
    }

    &__success {
      background: var(--vs-tag-success);
      color: #ffffff;
    }

    &__danger {
      background: var(--vs-tag-danger);
      color: #ffffff;
    }

    &__warning {
      background: var(--vs-tag-warning);
      color: #703815;
    }

    &__secondary {
      background: var(--vs-tag-secondary);
      color: #ffffff;
    }

    &__size-small {
      padding: 2px 5px;
      font-size: 10px;
      border-radius: 2px;
    }

    &__size-medium {
      font-size: 12px;
      min-width: calc(16px + 1ch);
      padding: 4px 8px;
      border-radius: 2px;
    }

    &__size-large {
      font-size: 12px;
      min-width: calc(24px + 1ch);
      padding: 8px 13px;
      border-radius: 4px;
    }

    &--bold {
      font-weight: var(--vs-tag-font-bold);
    }

    &--pill {
      border-radius: 100px;
      min-width: 20px;
      text-align: center;
    }

    &--round {
      border-radius: 50%;
      min-width: 9px;
      text-align: center;
    }
  }
</style>
