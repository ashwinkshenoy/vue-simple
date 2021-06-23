<template>
  <span :class="['vs-tag', classList]" :style="isCssVars">
    <span><slot></slot></span>
    <slot name="close" v-if="isClose">
      <button class="vs-tag__button" @click="$emit('close', true)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          focusable="false"
          role="presentation"
        >
          <path stroke="currentColor" stroke-linecap="round" d="M3 9l6-6m0 6L3 3"></path>
        </svg>
      </button>
    </slot>
  </span>
</template>

<script>
  export default {
    name: 'VsTag',

    props: {
      // `primary`, `secondary`, `warning`, `danger`
      type: {
        type: String,
      },
      // `small`. `medium`, `large`
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
      isClose: {
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
    display: inline-flex;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    align-items: center;
    justify-content: center;

    &__button {
      display: inline-flex;
      margin-left: 5px;
      border: none;
      padding: 0;
      cursor: pointer;
      color: inherit;
      background: transparent;
      opacity: 0.85;
      margin-right: -3px;
      &:focus-visible {
        box-shadow: 0 0 0 2px rgb(31 115 183 / 35%);
        outline: none;
      }
    }

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
