<template>
  <div :class="['vs-alert', classList]">
    <!-- Alert icon -->
    <span class="vs-alert-icon__wrapper">
      <slot name="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          role="presentation"
          focussable="false"
          v-if="variant === 'success'"
        >
          <g fill="none" stroke="var(--vs-alert-success-icon)">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 9l2.5 2.5 5-5" />
            <circle cx="7.5" cy="8.5" r="7" />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          role="presentation"
          focussable="false"
          v-if="variant === 'warning'"
        >
          <path
            fill="none"
            stroke="var(--vs-alert-warning-icon)"
            stroke-linecap="round"
            d="M.88 13.77L7.06 1.86c.19-.36.7-.36.89 0l6.18 11.91c.17.33-.07.73-.44.73H1.32c-.37 0-.61-.4-.44-.73zM7.5 6v3.5"
          />
          <circle cx="7.5" cy="12" r="1" fill="#ad5918" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          role="presentation"
          focussable="false"
          v-if="variant === 'error'"
        >
          <g fill="none" stroke="var(--vs-alert-error-icon)">
            <circle cx="7.5" cy="8.5" r="7" />
            <path stroke-linecap="round" d="M7.5 4.5V9" />
          </g>
          <circle cx="7.5" cy="12" r="1" fill="var(--vs-alert-error-icon)" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          role="presentation"
          focussable="false"
          v-if="variant === 'info'"
        >
          <g stroke="var(--vs-alert-info-icon)">
            <circle cx="7.5" cy="8.5" r="7" fill="none" />
            <path stroke-linecap="round" d="M7.5 12.5V8" />
          </g>
          <circle cx="7.5" cy="5" r="1" fill="var(--vs-alert-info-icon)" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          role="presentation"
          focussable="false"
          v-if="variant === 'secondary'"
        >
          <g stroke="var(--vs-alert-secondary-icon)">
            <circle cx="7.5" cy="8.5" r="7" fill="none" />
            <path stroke-linecap="round" d="M7.5 12.5V8" />
          </g>
          <circle cx="7.5" cy="5" r="1" fill="var(--vs-alert-secondary-icon)" />
        </svg>
      </slot>
    </span>

    <!-- Alert Heading -->
    <div class="vs-alert__heading">
      <slot name="title">
        <template v-if="title">{{ title }}</template>
      </slot>
    </div>

    <!-- Default Slot -->
    <slot></slot>

    <!-- Right close icon/button -->
    <button v-if="showClose" :class="['vs-alert-button', variant]" @click="$emit('close', true)" aria-label="Close">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        role="presentation"
        focusable="false"
      >
        <path stroke="currentColor" stroke-linecap="round" d="M3 9l6-6m0 6L3 3"></path>
      </svg>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'VsAlert',

    props: {
      // Variants: success, warning, error, info, secondary
      variant: {
        type: String,
        required: true,
        validator: value => ['success', 'error', 'info', 'warning', 'secondary'].includes(value.toLowerCase()),
      },
      showClose: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
      },
      noBg: {
        type: Boolean,
        default: false,
      },
      small: {
        type: Boolean,
        default: false,
      },
      toast: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      classList() {
        return [
          `vs-alert-${this.variant}`,
          { 'vs-alert--no-bg': this.noBg },
          { 'vs-alert--small': this.small },
          { 'vs-alert--toast': this.toast },
        ];
      },
    },
  };
</script>

<style lang="scss">
  $el: '.vs-alert';

  #{$el} {
    --vs-alert-success-bc: #aecfc2;
    --vs-alert-success-bg: #edf8f4;
    --vs-alert-success-color: #186146;
    --vs-alert-success-icon: #038153;

    --vs-alert-warning-bc: #fed6a8;
    --vs-alert-warning-bg: #fff7ed;
    --vs-alert-warning-color: #ad5918;
    --vs-alert-warning-icon: #ad5918;

    --vs-alert-error-bc: #f5b5ba;
    --vs-alert-error-bg: #fff0f1;
    --vs-alert-error-color: #8c232c;
    --vs-alert-error-icon: #cc3340;

    --vs-alert-info-bc: #adcce4;
    --vs-alert-info-bg: #edf7ff;
    --vs-alert-info-color: #1f73b7;
    --vs-alert-info-icon: #337fbd;

    --vs-alert-secondary-bc: #d8dcde;
    --vs-alert-secondary-bg: #f8f9f9;
    --vs-alert-secondary-color: #68737d;
    --vs-alert-secondary-icon: #68737d;

    position: relative;
    border-radius: 4px;
    padding: 20px 40px;
    line-height: 1.42857;
    font-size: 14px;

    &-icon__wrapper svg {
      position: absolute;
      left: 15px;
      margin-top: 1px;
    }

    &__heading {
      font-weight: 600;
      filter: brightness(85%);
    }

    &-button {
      display: block;
      position: absolute;
      top: 15px;
      right: 10px;
      transition: background-color 0.1s ease-in-out 0s, color 0.25s ease-in-out 0s;
      border: none;
      background-color: transparent;
      cursor: pointer;
      padding: 0px;
      width: 28px;
      height: 28px;
      overflow: hidden;
      color: #333333;
      font-size: 0px;
      user-select: none;
      &.success {
        color: var(--vs-alert-success-color);
      }
      &.warning {
        color: var(--vs-alert-warning-color);
      }
      &.error {
        color: var(--vs-alert-error-color);
      }
      &.info {
        color: var(--vs-alert-info-color);
      }
      &.secondary {
        color: var(--vs-alert-secondary-color);
      }
    }

    &-success {
      border: 1px solid var(--vs-alert-success-bc);
      background-color: var(--vs-alert-success-bg);
      color: var(--vs-alert-success-color);
    }
    &-warning {
      border: 1px solid var(--vs-alert-warning-bc);
      background-color: var(--vs-alert-warning-bg);
      color: var(--vs-alert-warning-color);
    }
    &-error {
      border: 1px solid var(--vs-alert-error-bc);
      background-color: var(--vs-alert-error-bg);
      color: var(--vs-alert-error-color);
    }
    &-info {
      border: 1px solid var(--vs-alert-info-bc);
      background-color: var(--vs-alert-info-bg);
      color: var(--vs-alert-info-color);
    }
    &-secondary {
      border: 1px solid var(--vs-alert-secondary-bc);
      background-color: var(--vs-alert-secondary-bg);
      color: var(--vs-alert-secondary-color);
    }

    &--small {
      padding: 12px 40px;

      #{$el}-button {
        top: 8px;
      }
    }

    &--no-bg {
      background-color: transparent;
      border-color: transparent;
      padding: 0 22px;
      font-size: 13px;

      #{$el}-icon__wrapper svg {
        left: 0;
        margin-top: 0;
      }

      &#{$el}-warning {
        color: var(--vs-alert-warning-icon);
      }
      &#{$el}-error {
        color: var(--vs-alert-error-icon);
      }
    }

    &--toast {
      background-color: transparent;
      border: solid 1px #d8dcde;
      color: #2f3941;
      box-shadow: rgb(23 73 77 / 15%) 0px 20px 28px 0px;
      padding: 15px 40px;
      #{$el}__heading {
        filter: brightness(100%);
      }
      &#{$el}-success #{$el}__heading {
        color: var(--vs-alert-success-icon);
      }
      &#{$el}-warning #{$el}__heading {
        color: var(--vs-alert-warning-icon);
      }
      &#{$el}-error #{$el}__heading {
        color: var(--vs-alert-error-icon);
      }
      &#{$el}-info #{$el}__heading {
        color: var(--vs-alert-info-icon);
      }
      &#{$el}-secondary #{$el}__heading {
        color: var(--vs-alert-secondary-icon);
      }
      #{$el}-button {
        color: #68737d;
        top: 10px;
      }
    }
  }
</style>
