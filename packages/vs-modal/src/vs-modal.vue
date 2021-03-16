<template>
  <transition :name="toggleTransition" @after-enter="onEnter" @after-leave="onLeave">
    <div v-show="isOpen" class="vs-modal vs-modal__mask" :class="classes" :role="role" @click.self="onBackdropClick">
      <div
        class="vs-modal__wrapper"
        :class="{ 'has-dummy-scrollbar': preventShift }"
        :style="alignTopStyle"
        @click.self="onBackdropClick"
      >
        <vs-focus-container
          ref="focusContainer"
          class="vs-modal__container"
          tabindex="-1"
          @keydown.native.stop.esc="onEsc"
        >
          <slot name="header">
            <div v-if="!removeHeader" class="vs-modal__header">
              <h2 class="vs-modal__header-text">{{ title }}</h2>
            </div>
          </slot>

          <div class="vs-modal__close-button">
            <slot name="close">
              <button v-if="dismissOnCloseButton && !removeCloseButton && dismissible" @click="close">
                <img src="./images/close.png" alt="close" />
              </button>
            </slot>
          </div>

          <div class="vs-modal__body">
            <slot></slot>
          </div>

          <div v-if="hasFooter" class="vs-modal__footer">
            <slot name="footer"></slot>
          </div>
        </vs-focus-container>
      </div>
    </div>
  </transition>
</template>

<script>
  import VsFocusContainer from './vs-focus-container.vue';
  import classlist from './utils/classlist';

  export default {
    name: 'VsModal',

    components: {
      VsFocusContainer,
    },

    props: {
      title: {
        type: String,
        default: 'Modal title',
      },
      alignTop: {
        type: Boolean,
        default: false,
      },
      alignTopMargin: {
        type: Number,
        default: 60,
      },
      size: {
        type: String,
        default: 'm',
      },
      role: {
        type: String,
        default: 'dialog',
      },
      transition: {
        type: String,
        default: 'slide-up',
      },
      removeHeader: {
        type: Boolean,
        default: false,
      },
      removeCloseButton: {
        type: Boolean,
        default: false,
      },
      preventShift: {
        type: Boolean,
        default: false,
      },
      dismissible: {
        type: Boolean,
        default: true,
      },
      dismissOn: {
        type: String,
        default: 'backdrop esc close-button',
      },
      backdropBlur: {
        type: Boolean,
        default: false,
      },
    },

    data() {
      return {
        isOpen: false,
        lastFocusedElement: null,
      };
    },

    computed: {
      classes() {
        return [
          `vs-modal--size-${this.size}`,
          { 'has-footer': this.hasFooter },
          { 'is-open': this.isOpen },
          { 'is-aligned-top': this.alignTop },
          { 'is-backdrop-blur': this.backdropBlur },
        ];
      },

      alignTopStyle() {
        if (this.alignTop) {
          return { 'padding-top': `${this.alignTopMargin}px` };
        }
        return null;
      },

      toggleTransition() {
        return `vs-modal--transition-${this.transition}`;
      },

      hasFooter() {
        return Boolean(this.$slots.footer);
      },

      dismissOnBackdrop() {
        return this.dismissOn.indexOf('backdrop') > -1;
      },

      dismissOnCloseButton() {
        return this.dismissOn.indexOf('close-button') > -1;
      },

      dismissOnEsc() {
        return this.dismissOn.indexOf('esc') > -1;
      },
    },

    watch: {
      isOpen() {
        this.$nextTick(() => {
          this[this.isOpen ? 'onOpen' : 'onClose']();
        });
      },
    },

    beforeDestroy() {
      if (this.isOpen) {
        this.returnFocus();
      }
    },

    methods: {
      open() {
        this.isOpen = true;
      },

      close() {
        if (!this.dismissible) {
          return;
        }
        this.isOpen = false;
      },

      /**
       * ccessabiliy fix
       */
      redirectFocus() {
        this.$refs.focusContainer.focus();
      },

      returnFocus() {
        if (this.lastFocusedElement) {
          this.lastFocusedElement.focus();
        }
      },

      /**
       * Dismiss modal on backdrop click
       */
      onBackdropClick() {
        if (this.dismissOnBackdrop) {
          this.close();
        } else {
          this.redirectFocus();
        }
      },

      /**
       * Dismiss modal on esc key
       */
      onEsc() {
        if (this.dismissOnEsc) {
          this.close();
        }
      },

      /*
       * Add modal open class on body tag (good for future cases if modications are required)
       */
      onOpen() {
        this.lastFocusedElement = document.activeElement;
        this.$refs.focusContainer.focus();

        classlist.add(document.body, 'vs-modal--is-open');
        this.incrementOpenModalCount();

        this.$emit('open');
      },

      /**
       * Emitted when modal starts to close
       */
      onClose() {
        this.$emit('close');
        this.returnFocus();
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
        const newCount = this.decrementOpenModalCount();

        // Remove modal open class on body tag
        if (newCount === 0) {
          classlist.remove(document.body, 'vs-modal--is-open');
        }
      },

      getOpenModalCount() {
        const count = document.body.getAttribute('data-open-modals');
        return count === undefined ? 0 : Number(count);
      },

      /**
       * Set no. of modals open data attribute
       */
      setOpenModalCount(count) {
        const normalizedCount = Math.max(0, count);
        if (normalizedCount === 0) {
          document.body.removeAttribute('data-open-modals');
        } else {
          document.body.setAttribute('data-open-modals', normalizedCount);
        }
        return normalizedCount;
      },

      /**
       * Used if nested modals get activated
       */
      incrementOpenModalCount() {
        return this.setOpenModalCount(this.getOpenModalCount() + 1);
      },

      decrementOpenModalCount() {
        return this.setOpenModalCount(this.getOpenModalCount() - 1);
      },
    },
  };
</script>

<style lang="scss">
  // Colors
  $color-white: #ffffff;
  $color-black: #333333;
  // Fonts
  $text-body-p1: 1.125em;
  $text-body-m1: 0.875em;
  // Modal
  $modal-transition-duration: 0.3s !default;
  $modal-mask-background: rgba($color-black, 0.5) !default;
  $modal-header-height: 55px;
  $modal-footer-height: 70px;
  // Modal Widths
  $modal-small-width: 320px;
  $modal-medium-width: 530px;
  $modal-large-width: 850px;
  // Spacings
  $c-space-inset-l: 16px;
  $c-space-inset-xl: 24px;
  $z-index-modal-overlay: 800;
  $el: '.vs-modal';

  #{$el} {
    font-size: $text-body-m1;

    &.is-aligned-top {
      #{$el}__wrapper {
        vertical-align: initial;
      }

      &.has-footer #{$el}__body {
        max-height: calc(100vh - #{$modal-header-height + $modal-footer-height});
      }
    }

    &.has-footer {
      #{$el}__body {
        max-height: calc(100vh - #{$modal-header-height + $modal-footer-height});
      }
    }

    &:not(.has-footer) {
      #{$el}__body {
        padding: $c-space-inset-l + 5 $c-space-inset-xl;
      }
    }

    &--is-open {
      overflow: hidden;
    }

    &.is-backdrop-blur {
      backdrop-filter: blur(3px);
    }

    &__mask {
      display: table;
      position: fixed;
      z-index: $z-index-modal-overlay;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      transition: opacity $modal-transition-duration ease;
      background-color: $modal-mask-background;
    }

    &__wrapper {
      display: table-cell;
      overflow-x: hidden;
      text-align: center;
      vertical-align: middle;

      &.has-dummy-scrollbar {
        overflow-y: scroll;
      }
    }

    &__container {
      display: inline-block;
      position: relative;
      width: $modal-medium-width;
      max-width: 100vw;
      max-height: 100vh;
      margin: 0 auto;
      padding: 0;
      overflow: hidden;
      transition: all $modal-transition-duration ease;
      border-radius: 3px;
      outline: none;
      background-color: $color-white;
      box-shadow: 0 2px 8px rgba($color-black, 0.33);
      text-align: initial;
    }

    &__header {
      display: flex;
      position: relative;
      z-index: 1;
      align-items: center;
      height: $modal-header-height;
      padding: 0 $c-space-inset-xl;
    }

    &__header-text {
      display: flex;
      flex-grow: 1;
      align-items: center;
      margin: 0;
      font-size: $text-body-p1;
      font-weight: normal;
    }

    &__close-button button {
      position: absolute;
      z-index: 100;
      top: 20px;
      right: 20px;
      background: none;
      border: none;
      text-align: right;
      margin: 0;
      padding: 0;

      img {
        width: 12px;
        height: 12px;
      }
    }

    &__body {
      max-height: calc(100vh - #{$modal-header-height});
      padding: $c-space-inset-l $c-space-inset-xl;
      overflow-y: auto;
    }

    &__footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: $modal-footer-height;
      padding: 0 $c-space-inset-xl;
    }

    // Sizes
    &--size-s {
      & > #{$el}__wrapper > #{$el}__container {
        width: $modal-small-width;
      }
    }

    &--size-l {
      & > #{$el}__wrapper > #{$el}__container {
        width: $modal-large-width;
      }
    }

    &--size-fullscreen {
      & > #{$el}__wrapper > #{$el}__container {
        width: 100vw;
        border-radius: 0;

        #{$el}__body {
          height: 100vh;
          max-height: 100vh;
        }
      }
    }

    &--size-auto {
      & > #{$el}__wrapper > #{$el}__container {
        width: initial;
      }
    }

    // Transitions
    &--transition-fade-enter,
    &--transition-fade-leave-active {
      opacity: 0;
    }

    &--transition-slide-up-enter,
    &--transition-slide-up-leave-active {
      opacity: 0;

      #{$el}__container {
        transform: translateY(20px);
      }
    }

    &--transition-slide-down-enter,
    &--transition-slide-down-leave-active {
      opacity: 0;

      #{$el}__container {
        transform: translateY(-20px);
      }
    }
  }
</style>
