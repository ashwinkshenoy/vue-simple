<template>
  <div :class="['vs-input', containerClass]">
    <!-- Label -->
    <label v-if="label" :for="inputId" class="vs-input__label" :class="{ 'vs-input__label--hidden': hideLabel }">
      {{ label }}
      <span v-if="required" class="vs-input__required" aria-hidden="true">*</span>
    </label>

    <!-- Hint -->
    <span v-if="hint" class="vs-input__hint" :id="`${inputId}-hint`">{{ hint }}</span>

    <!-- Input wrapper (for prefix/suffix slots) -->
    <div class="vs-input__wrapper" :class="wrapperClass">
      <!-- Prefix slot -->
      <span v-if="$slots.start" class="vs-input__start">
        <slot name="start" />
      </span>

      <input
        :id="inputId"
        class="vs-input__field"
        v-bind="$attrs"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readOnly"
        :required="required"
        :maxlength="maxlength"
        :aria-describedby="ariaDescribedBy"
        :aria-invalid="validation === 'error' || undefined"
        @input="onInput"
        @change="onChange"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      />

      <!-- Suffix slot -->
      <span v-if="$slots.end" class="vs-input__end">
        <slot name="end" />
      </span>
    </div>

    <!-- Validation / message -->
    <span
      v-if="message"
      class="vs-input__message"
      :class="`vs-input__message--${validation}`"
      :id="`${inputId}-message`"
    >
      <span class="vs-input__message-icon" aria-hidden="true">
        <svg
          v-if="validation === 'error'"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path
            d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm-.75 3.75a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0v-4zm.75 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
          />
        </svg>
        <svg
          v-else-if="validation === 'warning'"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path
            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
          />
        </svg>
        <svg
          v-else-if="validation === 'success'"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path
            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </span>
      {{ message }}
    </span>
  </div>
</template>

<script>
  let idCounter = 0;

  export default {
    name: 'VsInput',

    inheritAttrs: false,

    props: {
      // v-model
      modelValue: {
        default: '',
      },
      // Input type: `text`, `email`, `password`, `number`, `search`, `url`, `tel`
      type: {
        type: String,
        default: 'text',
      },
      // Label above the input
      label: {
        type: String,
      },
      // Visually hides the label (still accessible)
      hideLabel: {
        type: Boolean,
        default: false,
      },
      // Hint text below label
      hint: {
        type: String,
      },
      // Placeholder text
      placeholder: {
        type: String,
        default: '',
      },
      // Disabled state
      disabled: {
        type: Boolean,
        default: false,
      },
      // Read-only state
      readOnly: {
        type: Boolean,
        default: false,
      },
      // Required field
      required: {
        type: Boolean,
        default: false,
      },
      // Compact reduced-height styling
      isCompact: {
        type: Boolean,
        default: false,
      },
      // Bare — removes border and background
      isBare: {
        type: Boolean,
        default: false,
      },
      // Max character length
      maxlength: {
        type: Number,
      },
      // Validation state: `success`, `warning`, `error`
      validation: {
        type: String,
        validator: val => ['success', 'warning', 'error'].includes(val),
      },
      // Message text shown below input (paired with validation)
      message: {
        type: String,
      },
    },

    emits: ['update:modelValue', 'change', 'focus', 'blur'],

    data() {
      return {
        inputId: `vs-input-${++idCounter}`,
      };
    },

    computed: {
      containerClass() {
        return {
          'vs-input--disabled': this.disabled,
          'vs-input--readonly': this.readOnly,
          'vs-input--compact': this.isCompact,
          'vs-input--bare': this.isBare,
          [`vs-input--${this.validation}`]: !!this.validation,
          'vs-input--has-start': !!this.$slots.start,
          'vs-input--has-end': !!this.$slots.end,
        };
      },

      wrapperClass() {
        return {
          'vs-input__wrapper--start': !!this.$slots.start,
          'vs-input__wrapper--end': !!this.$slots.end,
        };
      },

      ariaDescribedBy() {
        const ids = [];
        if (this.hint) ids.push(`${this.inputId}-hint`);
        if (this.message) ids.push(`${this.inputId}-message`);
        return ids.length ? ids.join(' ') : undefined;
      },
    },

    methods: {
      onInput(event) {
        this.$emit('update:modelValue', event.target.value);
      },

      onChange(event) {
        this.$emit('change', event.target.value);
      },
    },
  };
</script>

<style lang="scss">
  $el: '.vs-input';

  [data-theme='dark'],
  .dark {
    #{$el} {
      --vs-input-label-color: #b0b8c1;
      --vs-input-hint-color: #8090a2;
      --vs-input-border: #3a4553;
      --vs-input-border-focus: #42a5f5;
      --vs-input-bg: #1a1f26;
      --vs-input-color: #e0e0e0;
      --vs-input-placeholder: #5a6472;
      --vs-input-addon-bg: #252b35;
      --vs-input-addon-color: #8090a2;
      --vs-input-disabled-bg: #141920;
      --vs-input-disabled-color: #5a6472;
      --vs-input-disabled-border: #2a3038;
    }
  }

  #{$el} {
    --vs-input-label-color: #2f3941;
    --vs-input-hint-color: #68737d;
    --vs-input-border: #d8dcde;
    --vs-input-border-focus: #1f73b7;
    --vs-input-bg: #ffffff;
    --vs-input-color: #2f3941;
    --vs-input-placeholder: #c2c8cc;
    --vs-input-addon-bg: transparent;
    --vs-input-addon-color: #68737d;
    --vs-input-disabled-bg: #f8f9f9;
    --vs-input-disabled-color: #c2c8cc;
    --vs-input-disabled-border: #e9ebed;
    --vs-input-success-border: #186146;
    --vs-input-success-color: #186146;
    --vs-input-warning-border: #ad5918;
    --vs-input-warning-color: #ad5918;
    --vs-input-error-border: #cc3340;
    --vs-input-error-color: #cc3340;
    --vs-input-border-radius: 4px;

    display: flex;
    flex-direction: column;
    font-family: inherit;

    &__label {
      display: inline-block;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 600;
      color: var(--vs-input-label-color);
      line-height: 1.4;

      &--mb-0 {
        margin-bottom: 0;
      }

      &--hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    }

    &__required {
      color: var(--vs-input-error-color);
      margin-left: 2px;
    }

    &__hint {
      margin: -8px 0 8px;
      font-size: 13px;
      color: var(--vs-input-hint-color);
      line-height: 1.4;
    }

    &__wrapper {
      position: relative;
      max-height: 40px;
      display: flex;
      align-items: center;
      border: 1px solid var(--vs-input-border);
      border-radius: var(--vs-input-border-radius);
      background: var(--vs-input-bg);
      transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;

      &:focus-within {
        border-color: var(--vs-input-border-focus);
        box-shadow: 0 0 0 3px rgba(31, 115, 183, 0.15);
      }
    }

    &__field {
      flex: 1;
      min-width: 0;
      padding: 10px 12px;
      font-size: 14px;
      font-family: inherit;
      color: var(--vs-input-color);
      background: transparent;
      border: none;
      outline: none;
      line-height: 1.4;

      &::placeholder {
        color: var(--vs-input-placeholder);
      }

      &[type='number'] {
        -moz-appearance: textfield;
        appearance: textfield;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }

    &__start,
    &__end {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 9px;
      height: 100%;
      color: var(--vs-input-addon-color);
      background: var(--vs-input-addon-bg);
      flex-shrink: 0;
    }

    &__start {
      border-right: 1px solid var(--vs-input-border);
      border-radius: var(--vs-input-border-radius) 0 0 var(--vs-input-border-radius);
    }

    &__end {
      border-left: 1px solid var(--vs-input-border);
      border-radius: 0 var(--vs-input-border-radius) var(--vs-input-border-radius) 0;
    }

    &__message {
      display: flex;
      align-items: center;
      gap: 5px;
      margin: 5px 0 0;
      font-size: 12px;
      line-height: 1.4;
      color: var(--vs-input-hint-color);

      &--error {
        color: var(--vs-input-error-color);
      }

      &--warning {
        color: var(--vs-input-warning-color);
      }

      &--success {
        color: var(--vs-input-success-color);
      }
    }

    &__message-icon {
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }

    // Compact mode
    &--compact {
      #{$el}__field {
        padding: 6px 10px;
        font-size: 13px;
        max-height: 30px;
      }

      #{$el}__start,
      #{$el}__end {
        padding: 0 8px;
      }
    }

    // Bare mode — no border or background
    &--bare {
      #{$el}__wrapper {
        border-color: transparent;
        background: transparent;
        box-shadow: none;

        &:focus-within {
          border-color: transparent;
          box-shadow: none;
        }
      }
    }

    // Validation states
    &--error #{$el}__wrapper {
      border-color: var(--vs-input-error-border);

      &:focus-within {
        border-color: var(--vs-input-error-border);
        box-shadow: 0 0 0 3px rgba(204, 51, 64, 0.15);
      }
    }

    &--warning #{$el}__wrapper {
      border-color: var(--vs-input-warning-border);

      &:focus-within {
        border-color: var(--vs-input-warning-border);
        box-shadow: 0 0 0 3px rgba(173, 89, 24, 0.15);
      }
    }

    &--success #{$el}__wrapper {
      border-color: var(--vs-input-success-border);

      &:focus-within {
        border-color: var(--vs-input-success-border);
        box-shadow: 0 0 0 3px rgba(24, 97, 70, 0.15);
      }
    }

    // Disabled state
    &--disabled {
      #{$el}__wrapper {
        background: var(--vs-input-disabled-bg);
        border-color: var(--vs-input-disabled-border);
        cursor: not-allowed;

        &:focus-within {
          border-color: var(--vs-input-disabled-border);
          box-shadow: none;
        }
      }

      #{$el}__field {
        color: var(--vs-input-disabled-color);
        cursor: not-allowed;
      }
    }

    // Read-only state
    &--readonly {
      #{$el}__wrapper {
        background: var(--vs-input-disabled-bg);

        &:focus-within {
          border-color: var(--vs-input-border-focus);
        }
      }
    }
  }
</style>
