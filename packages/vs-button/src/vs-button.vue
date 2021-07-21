<template>
  <component
    :is="isLink"
    :role="href ? 'button' : false"
    :href="href"
    :target="target"
    :rel="rel"
    :type="isLink ? 'button' : false"
    :disabled="disabled || isLoading"
    :class="['vs-button', classList]"
    @click="emitClick"
  >
    <vs-loader :size="loaderSize" :color="loaderColor" v-if="isLoading"></vs-loader>
    <slot v-else></slot>
  </component>
</template>

<script>
  import VsLoader from './vs-loader.vue';

  export default {
    name: 'VsButton',

    components: {
      VsLoader,
    },

    props: {
      variant: {
        type: String,
        default: 'primary',
      },
      // small. medium, large
      size: {
        type: String,
        default: 'medium',
      },
      fill: {
        type: Boolean,
        default: false,
      },
      isRound: {
        type: Boolean,
        default: false,
      },
      isLoading: {
        type: Boolean,
        default: false,
      },
      loaderSize: {
        type: String,
        default: '8px',
      },
      loaderColor: {
        type: String,
        default: '#1f73b7',
      },
      disabled: {
        type: [Boolean, String],
        default: false,
      },
      href: {
        type: String,
      },
      target: {
        type: String,
      },
      rel: {
        type: String,
      },
    },

    computed: {
      classList() {
        return [
          [this.variant === 'link' ? 'vs-button__link' : `vs-button__${this.variant}${this.fill ? '-fill' : ''}`],
          `vs-button--${this.size}`,
          { 'vs-button--loading': this.isLoading },
          { 'vs-button--round': this.isRound },
        ];
      },

      isLink() {
        return this.variant === 'link' || !!this.href ? 'a' : 'button';
      },
    },

    methods: {
      emitClick() {
        if (!this.isLoading || !this.disabled) {
          this.$emit('click');
        }
      },
    },
  };
</script>

<style lang="scss">
  $el: '.vs-button';

  #{$el} {
    $color-primary: #1f73b7;
    $color-secondary: #6c757d;
    $color-light: #f8f9fa;
    $color-success: #28a745;
    $color-danger: #cc3340;
    $color-warning: #ffb057;
    $color-disabled-bg: #e9ebed;
    $color-disabled-text: #c2c8cc;

    border-radius: 4px;
    font-weight: 400;
    box-sizing: border-box;
    user-select: none;
    padding: 0 1.07143em;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    transition: border-color 0.25s ease-in-out 0s, box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
    margin: 0px;
    cursor: pointer;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;

    &#{$el}--small {
      height: 32px;
      line-height: 30px;
      font-size: 12px;
    }

    &#{$el}--medium {
      height: 40px;
      line-height: 38px;
      font-size: 14px;
    }

    &#{$el}--large {
      height: 48px;
      line-height: 46px;
      font-size: 14px;
    }

    &#{$el}--round {
      border-radius: 50px;
    }

    $theme: (primary $color-primary #ffffff), (success $color-success #ffffff), (danger $color-danger #ffffff),
      (warning $color-warning #703815), (secondary $color-secondary #ffffff), (light $color-light #212529);

    @each $button in $theme {
      &#{$el}__#{nth($button, 1)},
      &#{$el}__#{nth($button, 1)}:hover,
      &#{$el}__#{nth($button, 1)}:focus {
        background: transparent;
        color: #{nth($button, 2)};
        border: solid 1px #{nth($button, 2)};

        &:hover {
          border-color: darken(nth($button, 2), 10%);
          @if nth($button, 1) == warning {
            background: lighten(nth($button, 2), 30%);
          } @else if nth($button, 1) == danger {
            background: lighten(nth($button, 2), 45%);
          } @else if nth($button, 1) == secondary {
            background: lighten(nth($button, 2), 50%);
          } @else {
            background: lighten(nth($button, 2), 55%);
          }
          color: darken(nth($button, 2), 10%);
        }

        &:active {
          border-color: darken(nth($button, 2), 20%);
          background: lighten(nth($button, 2), 50%);
          color: darken(nth($button, 2), 20%);
        }

        &:focus-visible {
          border-color: darken(nth($button, 2), 10%);
          box-shadow: 0 0 0 0.2rem lighten(nth($button, 2), 30%);
          outline: 0;
        }

        &:disabled,
        &#{$el}--loading {
          background: $color-disabled-bg;
          border-color: transparent;
          color: $color-disabled-text;
          cursor: no-drop;
        }
      }

      &#{$el}__#{nth($button, 1)}-fill,
      &#{$el}__#{nth($button, 1)}-fill:focus {
        background: #{nth($button, 2)};
        color: #{nth($button, 3)};
        border: solid 1px #{nth($button, 2)};

        &:hover {
          border-color: darken(nth($button, 2), 10%);
          background: darken(nth($button, 2), 10%);
        }

        &:active {
          border-color: darken(nth($button, 2), 20%);
          background: darken(nth($button, 2), 15%);
        }

        &:focus-visible {
          border-color: darken(nth($button, 2), 10%);
          box-shadow: 0 0 0 0.2rem lighten(nth($button, 2), 30%);
          outline: 0;
        }

        &:disabled,
        &#{$el}--loading {
          background: $color-disabled-bg;
          border-color: transparent;
          color: $color-disabled-text;
          cursor: no-drop;
        }
      }
    }

    &#{$el}__link {
      background: transparent;
      color: $color-primary;
      border: none;
      padding: 0;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
