<template>
  <component :is="tag" class="vs-focus-container">
    <span
      v-if="renderRedirector"
      class="vs-focus-container__focus-redirector"
      tabindex="0"
      @focus="redirectFocus($event, { isTabbingForward: false })"
    ></span>

    <div ref="content" class="vs-focus-container__content" tabindex="-1">
      <slot></slot>
    </div>

    <span
      v-if="!disabled && containFocus"
      ref="lastFocusable"
      class="vs-focus-container__last-focusable"
      tabindex="-1"
    ></span>

    <span
      v-if="renderRedirector"
      class="vs-focus-container__focus-redirector"
      tabindex="0"
      @focus="redirectFocus($event, { isTabbingForward: true })"
    ></span>
  </component>
</template>

<script>
  export default {
    name: 'VsFocusContainer',

    props: {
      containFocus: {
        type: Boolean,
        default: true,
      },
      focusRedirector: Function,
      disabled: {
        type: Boolean,
        default: false,
      },
      tag: {
        type: String,
        default: 'div',
      },
      lazy: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      renderRedirector() {
        if (this.disabled) {
          return false;
        }
        return this.lazy ? this.containFocus : true;
      },
    },

    methods: {
      focus() {
        this.$refs.content.focus();
      },
      redirectFocus(e, options) {
        if (!this.containFocus) {
          this.$emit('focus-overflow', e, options);
          return;
        }
        e.stopPropagation();
        if (this.focusRedirector) {
          this.focusRedirector(e, options);
          return;
        }
        if (options.isTabbingForward) {
          this.$refs.content.focus();
        } else {
          this.$refs.lastFocusable.focus();
        }
      },
    },
  };
</script>

<style lang="scss">
  $el: '.vs-focus-container';
  #{$el} {
    &__focus-redirector,
    &__last-focusable {
      opacity: 0;
      position: absolute;
    }
    &__content {
      outline: none;
    }
  }
</style>
