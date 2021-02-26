<template>
  <div :class="['vs-alert', classList]">
    <!-- Alert icon -->
    <span class="vs-alert-icon__wrapper">
      <slot name="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" v-if="type === 'success'">
          <g fill="none" stroke="#038153">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 9l2.5 2.5 5-5" />
            <circle cx="7.5" cy="8.5" r="7" />
          </g>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" v-if="type === 'warning'">
          <path
            fill="none"
            stroke="#ad5918"
            stroke-linecap="round"
            d="M.88 13.77L7.06 1.86c.19-.36.7-.36.89 0l6.18 11.91c.17.33-.07.73-.44.73H1.32c-.37 0-.61-.4-.44-.73zM7.5 6v3.5"
          />
          <circle cx="7.5" cy="12" r="1" fill="#ad5918" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" v-if="type === 'error'">
          <g fill="none" stroke="#cc3340">
            <circle cx="7.5" cy="8.5" r="7" />
            <path stroke-linecap="round" d="M7.5 4.5V9" />
          </g>
          <circle cx="7.5" cy="12" r="1" fill="#cc3340" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" v-if="type === 'info'">
          <g stroke="#337fbd">
            <circle cx="7.5" cy="8.5" r="7" fill="none" />
            <path stroke-linecap="round" d="M7.5 12.5V8" />
          </g>
          <circle cx="7.5" cy="5" r="1" fill="#337fbd" />
        </svg>
      </slot>
    </span>

    <!-- Heading -->
    <div v-if="title" class="vs-alert__heading">{{ title }}</div>

    <!-- Default Slot -->
    <slot></slot>

    <!-- Right close icon/button -->
    <button v-if="showClose" :class="['vs-alert-button', type]" @click="$emit('close', true)">
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
  </div>
</template>

<script>
  export default {
    name: 'VsAlert',

    props: {
      type: {
        type: String,
        required: true,
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
    },

    computed: {
      classList() {
        return [`vs-alert-${this.type}`, { 'vs-alert--no-bg': this.noBg }];
      },
    },
  };
</script>

<style lang="scss">
  $el: '.vs-alert';

  #{$el} {
    position: relative;
    border-radius: 4px;
    padding: 12px 30px;
    line-height: 1.42857;
    font-size: 14px;

    &-icon__wrapper svg {
      position: absolute;
      left: 8px;
      margin-top: 1px;
    }

    &__heading {
      font-weight: 600;
    }

    &-button {
      display: block;
      position: absolute;
      top: 8px;
      right: 4px;
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
        color: #186146;
      }
      &.warning {
        color: #ad5918;
      }
      &.error {
        color: #8c232c;
      }
      &.info {
        color: #1f73b7;
      }
    }

    &-success {
      border: 1px solid #aecfc2;
      background-color: #edf8f4;
      color: #186146;
    }
    &-warning {
      border: 1px solid #fed6a8;
      background-color: #fff7ed;
      color: #ad5918;
    }
    &-error {
      border: 1px solid #f5b5ba;
      background-color: #fff0f1;
      color: #8c232c;
    }
    &-info {
      border: 1px solid #adcce4;
      background-color: #edf7ff;
      color: #1f73b7;
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

      &#{$el}-success {
        color: #038153;
      }
      &#{$el}-warning {
        color: #ad5918;
      }
      &#{$el}-error {
        color: #cc3340;
      }
      &#{$el}-info {
        color: #337fbd;
      }
    }
  }
</style>
