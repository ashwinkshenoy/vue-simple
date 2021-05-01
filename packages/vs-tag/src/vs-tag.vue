<template>
  <span :class="['vs-tag', classList]">
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
    },
  };
</script>

<style lang="scss">
  $el: '.vs-tag';

  #{$el} {
    --vs-tag-primary: #1f73b7;
    --vs-tag-danger: #cc3340;
    --vs-tag-warning: #ffb057;
    --vs-tag-secondary: #3a3a3a;
    --vs-tag-font-bold: 600;

    background-color: #e9ebed;
    color: #49545c;
    max-width: 100%;

    &__primary {
      background: var(--vs-tag-primary);
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
      min-width: 30px;
    }

    &--round {
      border-radius: 50%;
      min-width: 20px;
    }
  }
</style>
