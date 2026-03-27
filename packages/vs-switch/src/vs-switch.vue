<template>
  <button
    :class="['vs-switch', classList]"
    :style="isCssVars"
    :aria-checked="isChecked"
    :aria-label="ariaLabel"
    role="switch"
    type="button"
    :disabled="disabled"
    @click="toggle"
  >
    <span class="vs-switch__thumb"></span>
  </button>
</template>

<script>
  export default {
    name: 'VsSwitch',

    props: {
      // v-model support
      modelValue: {
        type: Boolean,
        default: false,
      },
      // `small`, `medium`, `large`
      size: {
        type: String,
        default: 'medium',
        validator: val => ['small', 'medium', 'large'].includes(val),
      },
      // `classic`, `surface`, `soft`
      variant: {
        type: String,
        default: 'classic',
        validator: val => ['classic', 'surface', 'soft'].includes(val),
      },
      // Color theme
      color: {
        type: String,
        default: 'primary',
      },
      // High contrast mode
      highContrast: {
        type: Boolean,
        default: false,
      },
      // // Border radius: `none`, `small`, `medium`, `large`, `full`
      // radius: {
      //   type: String,
      //   default: 'full',
      //   validator: val => ['none', 'small', 'medium', 'large', 'full'].includes(val),
      // },
      // Disabled state
      disabled: {
        type: Boolean,
        default: false,
      },
      // Aria label for accessibility
      ariaLabel: {
        type: String,
      },
      // Custom background color for checked state
      checkedBgColor: {
        type: String,
      },
    },

    emits: ['update:modelValue', 'change'],

    computed: {
      isChecked() {
        return this.modelValue;
      },

      classList() {
        return [
          `vs-switch__size-${this.size}`,
          `vs-switch__variant-${this.variant}`,
          `vs-switch__color-${this.color}`,
          {
            'vs-switch--checked': this.isChecked,
            'vs-switch--disabled': this.disabled,
            'vs-switch--high-contrast': this.highContrast,
          },
        ];
      },

      cssVars() {
        return {
          '--vs-switch-checked-bg-color': this.checkedBgColor,
        };
      },

      isCssVars() {
        return this.checkedBgColor ? this.cssVars : '';
      },
    },

    methods: {
      toggle() {
        if (!this.disabled) {
          const newValue = !this.isChecked;
          this.$emit('update:modelValue', newValue);
          this.$emit('change', newValue);
        }
      },
    },
  };
</script>

<style lang="scss">
  $el: '.vs-switch';

  // Dark mode styles are handled globally
  [data-theme='dark'],
  .dark {
    #{$el} {
      --vs-switch-bg-unchecked: #3a3a3a;
      --vs-switch-bg-checked: #1f73b7;
      --vs-switch-thumb: #ffffff;
      --vs-switch-border: #555555;
    }
  }

  #{$el} {
    --vs-switch-bg-unchecked: #e9ebed;
    --vs-switch-bg-checked: #1f73b7;
    --vs-switch-thumb: #ffffff;
    --vs-switch-border: #d1d5db;
    --vs-switch-primary: #1f73b7;
    --vs-switch-success: #186146;
    --vs-switch-danger: #cc3340;
    --vs-switch-warning: #ffb057;
    --vs-switch-secondary: #3a3a3a;
    --vs-switch-indigo: #4f46e5;
    --vs-switch-cyan: #06b6d4;
    --vs-switch-orange: #f97316;
    --vs-switch-crimson: #dc2626;
    --vs-switch-gray: #6b7280;

    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    border: none;
    padding: 0;
    background: none;
    transition: all 0.2s ease;
    border-radius: var(--vs-switch-border-radius);

    &:focus-visible {
      outline: none;
      box-shadow:
        0 0 0 2px #ffffff,
        0 0 0 4px var(--vs-switch-bg-checked);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    // Sizes
    &__size-small {
      width: 36px;
      height: 20px;
      --vs-switch-border-radius: 10px;

      .vs-switch__thumb {
        width: 16px;
        height: 16px;
      }

      &.vs-switch--checked .vs-switch__thumb {
        transform: translateX(16px);
      }
    }

    &__size-medium {
      width: 44px;
      height: 24px;
      --vs-switch-border-radius: 12px;

      .vs-switch__thumb {
        width: 20px;
        height: 20px;
      }

      &.vs-switch--checked .vs-switch__thumb {
        transform: translateX(20px);
      }
    }

    &__size-large {
      width: 52px;
      height: 28px;
      --vs-switch-border-radius: 14px;

      .vs-switch__thumb {
        width: 24px;
        height: 24px;
      }

      &.vs-switch--checked .vs-switch__thumb {
        transform: translateX(24px);
      }
    }

    // Radius
    &__radius-none {
      --vs-switch-border-radius: 0;
    }

    &__radius-small {
      --vs-switch-border-radius: 4px;
    }

    &__radius-medium {
      --vs-switch-border-radius: 6px;
    }

    &__radius-large {
      --vs-switch-border-radius: 8px;
    }

    &__radius-full {
      --vs-switch-border-radius: 100px;
    }

    // Variants - classic (default, outlined)
    &__variant-classic {
      background: var(--vs-switch-bg-unchecked);
      border: 1px solid var(--vs-switch-border);

      &.vs-switch--checked {
        background: var(--vs-switch-checked-bg-color, var(--vs-switch-bg-checked));
        border-color: var(--vs-switch-checked-bg-color, var(--vs-switch-bg-checked));
      }
    }

    // Variant - surface (filled background)
    &__variant-surface {
      background: #f0f1f3;
      border: 1px solid transparent;

      &.vs-switch--checked {
        background: var(--vs-switch-checked-bg-color, var(--vs-switch-bg-checked));
      }

      [data-theme='dark'] &,
      .dark & {
        background: #4a5568;

        &.vs-switch--checked {
          background: var(--vs-switch-checked-bg-color, var(--vs-switch-bg-checked));
        }
      }
    }

    // Variant - soft (subtle background)
    &__variant-soft {
      background: rgba(31, 115, 183, 0.1);
      border: 1px solid transparent;

      &.vs-switch--checked {
        background: var(--vs-switch-checked-bg-color, var(--vs-switch-bg-checked));
      }

      [data-theme='dark'] &,
      .dark & {
        background: rgba(31, 115, 183, 0.2);

        &.vs-switch--checked {
          background: var(--vs-switch-checked-bg-color, var(--vs-switch-bg-checked));
        }
      }
    }

    // Colors
    &__color-primary.vs-switch--checked {
      background: var(--vs-switch-checked-bg-color, #1f73b7);
    }

    &__color-success.vs-switch--checked {
      background: var(--vs-switch-checked-bg-color, #186146);
    }

    &__color-danger.vs-switch--checked {
      background: var(--vs-switch-checked-bg-color, #cc3340);
    }

    &__color-warning.vs-switch--checked {
      background: var(--vs-switch-checked-bg-color, #ffb057);

      .vs-switch__thumb {
        background: #703815;
      }
    }

    &__color-secondary.vs-switch--checked {
      background: var(--vs-switch-checked-bg-color, #3a3a3a);
    }

    &__color-indigo.vs-switch--checked {
      background: var(--vs-switch-checked-bg-color, #4f46e5);
    }

    &__color-cyan.vs-switch--checked {
      background: var(--vs-switch-checked-bg-color, #06b6d4);
    }

    &__color-orange.vs-switch--checked {
      background: var(--vs-switch-checked-bg-color, #f97316);
    }

    &__color-crimson.vs-switch--checked {
      background: var(--vs-switch-checked-bg-color, #dc2626);
    }

    &__color-gray.vs-switch--checked {
      background: var(--vs-switch-checked-bg-color, #6b7280);
    }

    // High contrast mode
    &--high-contrast {
      &.vs-switch__color-primary.vs-switch--checked {
        background: var(--vs-switch-checked-bg-color, #0d47a1);
      }

      &.vs-switch__color-indigo.vs-switch--checked {
        background: var(--vs-switch-checked-bg-color, #3730a3);
      }

      &.vs-switch__color-cyan.vs-switch--checked {
        background: var(--vs-switch-checked-bg-color, #0369a1);
      }

      &.vs-switch__color-orange.vs-switch--checked {
        background: var(--vs-switch-checked-bg-color, #c2410c);
      }

      &.vs-switch__color-crimson.vs-switch--checked {
        background: var(--vs-switch-checked-bg-color, #7f1d1d);
      }

      &.vs-switch__color-gray.vs-switch--checked {
        background: var(--vs-switch-checked-bg-color, #374151);
      }
    }

    // Thumb styling
    &__thumb {
      position: absolute;
      left: 2px;
      width: 20px;
      height: 20px;
      background: var(--vs-switch-thumb);
      border-radius: 50%;
      transition: transform 0.2s ease;
      pointer-events: none;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    // Checked state
    &--checked {
      background: var(--vs-switch-checked-bg-color, var(--vs-switch-bg-checked));
    }

    // Disabled state
    &--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
</style>
