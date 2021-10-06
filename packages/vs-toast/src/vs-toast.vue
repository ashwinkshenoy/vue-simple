<template>
  <transition :name="toggleTransition" @after-enter="onEnter" @after-leave="onLeave">
    <div
      :class="['vs-toast', classList]"
      role="status"
      v-if="isOpen"
      @mouseover="mouseHover(true)"
      @mouseleave="mouseHover(false)"
    >
      <slot name="custom" :close="close">
        <vs-alert :title="title" :variant="variant" :show-close="showClose" @close="close" :toast="type === 'toast'">
          <slot>{{ message }}</slot>
        </vs-alert>
      </slot>
    </div>
  </transition>
</template>

<script>
  import VsAlert from '../../vs-alert/src/vs-alert.vue';

  export default {
    name: 'VsToast',

    props: {
      type: {
        type: String,
        default: 'toast',
      },
      /**
       * Toast title
       */
      title: {
        type: String,
      },
      /**
       * Toast message
       */
      message: {
        type: String,
      },
      /**
       * Toast Variants (same as vs-alert)
       * Variants: success, warning, error, info, secondary
       */
      variant: {
        type: String,
      },
      /**
       * Show Toast Close Icon
       */
      showClose: {
        type: Boolean,
        default: true,
      },
      /**
       * Position of toast:
       * top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
       */
      position: {
        type: String,
        default: 'top-center',
        validator: value =>
          ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'].includes(
            value.toLowerCase(),
          ),
      },
      /**
       * Animation name:
       * vs-toast--transition-{animation}
       */
      animation: {
        type: String,
      },
      /**
       * Toast Timeout
       */
      timeout: {
        type: Number,
        default: 5000,
      },
      /**
       * Whether toast should close automatically or not
       */
      isSticky: {
        type: Boolean,
        default: false,
      },
    },

    components: {
      VsAlert,
    },

    data() {
      return {
        isOpen: false,
        timerId: null,
        isMouseHovered: false,
        isTimedOut: false,
      };
    },

    computed: {
      /**
       * Main Class List
       * @returns {String} class
       */
      classList() {
        return [`vs-toast--${this.position}`];
      },

      /**
       * Toggle Transition Class
       * @returns {String} class
       */
      toggleTransition() {
        const position = this.position.split('-')[0];
        // If custom animation
        if (this.animation) {
          return `vs-toast--transition-${this.animation}`;
        }
        if (position === 'top') {
          return 'vs-toast--transition-slide-down';
        }
        return 'vs-toast--transition-slide-up';
      },
    },

    methods: {
      /**
       * Open Toast
       * If timer exists: reset and open
       */
      async open(options = {}) {
        if (Object.keys(options).length !== 0) {
          if (this.isOpen) {
            this.close();
            this.$nextTick(() => this.open(options));
            return;
          }
          options = { ...this.$props, ...options };
          Object.keys(options).forEach(field => (this[field] = options[field]));
        }

        if (this.timerId) {
          await this.close();
        }
        this.isOpen = true;
        this.isTimedOut = false;
        if (!this.isSticky) {
          this.timerId = setTimeout(async () => {
            if (!this.isMouseHovered) {
              await this.close();
            }
            this.isTimedOut = true;
          }, this.timeout);
        }
      },

      /**
       * Close Toast
       * Clear timerId and clearTimeout
       */
      close() {
        if (this.timerId) {
          clearTimeout(this.timerId);
          this.timerId = null;
        }
        this.isOpen = false;
        return new Promise(resolve =>
          setTimeout(() => {
            this.$emit('input', this.isOpen);
            resolve();
          }, 10),
        );
      },

      /**
       * On mouse hover on toast
       * Close only if timedOut and not hovered
       */
      mouseHover(value = false) {
        this.isMouseHovered = value;
        if (this.isTimedOut && !this.isMouseHovered) {
          this.close();
        }
      },

      /**
       * Emitted after transition is done and opened
       */
      onEnter() {
        this.$emit('reveal');
      },

      /**
       * Emitted after transition is done and closes
       */
      onLeave() {
        this.$emit('hide');
      },
    },
  };
</script>

<style lang="scss">
  $el: '.vs-toast';

  #{$el} {
    position: fixed;
    width: 350px;
    max-width: 350px;
    background-color: #ffffff;
    z-index: 9999;
    font-family: inherit;
    text-align: left;

    .vs-alert {
      padding: 15px 40px;

      .vs-alert-button {
        top: 10px;
      }
    }

    // Top alignemnts
    &--top-center {
      left: calc(50% - 175px);
      top: 5px;
    }

    &--top-left {
      left: 5px;
      top: 5px;
    }

    &--top-right {
      right: 5px;
      top: 5px;
    }

    // Bottom alignments
    &--bottom-center {
      left: calc(50% - 175px);
      bottom: 5px;
    }

    &--bottom-left {
      left: 5px;
      bottom: 5px;
    }

    &--bottom-right {
      right: 5px;
      bottom: 5px;
    }

    // Slide-down
    &--transition-slide-down-enter-active,
    &--transition-slide-down-leave-active {
      transition: 0.3s all ease-in-out;
    }

    &--transition-slide-down-enter-to,
    &--transition-slide-down-leave {
      opacity: 1;
      transform: translateY(0px);
    }

    &--transition-slide-down-enter,
    &--transition-slide-down-leave-to {
      opacity: 0;
      transform: translateY(-30px);
    }

    // Slide-up
    &--transition-slide-up-enter-active,
    &--transition-slide-up-leave-active {
      transition: 0.3s all ease-in-out;
    }

    &--transition-slide-up-enter-to,
    &--transition-slide-up-leave {
      opacity: 1;
      transform: translateY(0px);
    }

    &--transition-slide-up-enter,
    &--transition-slide-up-leave-to {
      opacity: 0;
      transform: translateY(30px);
    }
  }
</style>
