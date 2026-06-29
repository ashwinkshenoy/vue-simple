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
  $color-primary: #1f73b7;
  $color-secondary: #6c757d;
  $color-light: #f8f9fa;
  $color-success: #28a745;
  $color-danger: #cc3340;
  $color-warning: #ffb057;
  $color-disabled-bg: #e9ebed;
  $color-disabled-text: #c2c8cc;

  $theme:
    (primary $color-primary #ffffff), (success $color-success #ffffff), (danger $color-danger #ffffff),
    (warning $color-warning #703815), (secondary $color-secondary #ffffff), (light $color-light #212529);

  #{$el} {
    --vs-button-disabled-bg: #{$color-disabled-bg};
    --vs-button-disabled-border: transparent;
    --vs-button-disabled-color: #{$color-disabled-text};

    @each $button in $theme {
      --vs-button-#{nth($button, 1)}-color: #{nth($button, 2)};
      --vs-button-#{nth($button, 1)}-bg: transparent;
      --vs-button-#{nth($button, 1)}-border: #{nth($button, 2)};

      --vs-button-#{nth($button, 1)}-hover-color: #{darken(nth($button, 2), 10%)};
      --vs-button-#{nth($button, 1)}-hover-border: #{darken(nth($button, 2), 10%)};

      @if nth($button, 1) == warning {
        --vs-button-#{nth($button, 1)}-hover-bg: #{lighten(nth($button, 2), 30%)};
      } @else if nth($button, 1) == danger {
        --vs-button-#{nth($button, 1)}-hover-bg: #{lighten(nth($button, 2), 45%)};
      } @else if nth($button, 1) == secondary {
        --vs-button-#{nth($button, 1)}-hover-bg: #{lighten(nth($button, 2), 50%)};
      } @else {
        --vs-button-#{nth($button, 1)}-hover-bg: #{lighten(nth($button, 2), 55%)};
      }

      --vs-button-#{nth($button, 1)}-active-color: #{darken(nth($button, 2), 20%)};
      --vs-button-#{nth($button, 1)}-active-border: #{darken(nth($button, 2), 20%)};
      --vs-button-#{nth($button, 1)}-active-bg: #{lighten(nth($button, 2), 50%)};

      --vs-button-#{nth($button, 1)}-focus-border: #{darken(nth($button, 2), 10%)};
      --vs-button-#{nth($button, 1)}-focus-shadow: 0 0 0 0.2rem #{lighten(nth($button, 2), 30%)};

      --vs-button-#{nth($button, 1)}-fill-bg: #{nth($button, 2)};
      --vs-button-#{nth($button, 1)}-fill-border: #{nth($button, 2)};
      --vs-button-#{nth($button, 1)}-fill-color: #{nth($button, 3)};

      --vs-button-#{nth($button, 1)}-fill-hover-bg: #{darken(nth($button, 2), 10%)};
      --vs-button-#{nth($button, 1)}-fill-hover-border: #{darken(nth($button, 2), 10%)};
      --vs-button-#{nth($button, 1)}-fill-active-bg: #{darken(nth($button, 2), 15%)};
      --vs-button-#{nth($button, 1)}-fill-active-border: #{darken(nth($button, 2), 20%)};
      --vs-button-#{nth($button, 1)}-fill-focus-border: #{darken(nth($button, 2), 10%)};
      --vs-button-#{nth($button, 1)}-fill-focus-shadow: 0 0 0 0.2rem #{lighten(nth($button, 2), 30%)};
    }

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
    transition:
      border-color 0.25s ease-in-out 0s,
      box-shadow 0.1s ease-in-out 0s,
      background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
    margin: 0px;
    cursor: pointer;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;

    .vs-loader {
      display: flex;
      align-items: center;
      justify-content: center;
    }

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

    @each $button in $theme {
      &#{$el}__#{nth($button, 1)},
      &#{$el}__#{nth($button, 1)}:hover,
      &#{$el}__#{nth($button, 1)}:focus {
        background: var(--vs-button-#{nth($button, 1)}-bg);
        color: var(--vs-button-#{nth($button, 1)}-color);
        border: solid 1px var(--vs-button-#{nth($button, 1)}-border);

        &:hover {
          border-color: var(--vs-button-#{nth($button, 1)}-hover-border);
          background: var(--vs-button-#{nth($button, 1)}-hover-bg);
          color: var(--vs-button-#{nth($button, 1)}-hover-color);
        }

        &:active {
          border-color: var(--vs-button-#{nth($button, 1)}-active-border);
          background: var(--vs-button-#{nth($button, 1)}-active-bg);
          color: var(--vs-button-#{nth($button, 1)}-active-color);
        }

        &:focus-visible {
          border-color: var(--vs-button-#{nth($button, 1)}-focus-border);
          box-shadow: var(--vs-button-#{nth($button, 1)}-focus-shadow);
          outline: 0;
        }

        &:disabled,
        &#{$el}--loading {
          background: var(--vs-button-disabled-bg);
          border-color: var(--vs-button-disabled-border);
          color: var(--vs-button-disabled-color);
          cursor: no-drop;
        }
      }

      &#{$el}__#{nth($button, 1)}-fill,
      &#{$el}__#{nth($button, 1)}-fill:focus {
        background: var(--vs-button-#{nth($button, 1)}-fill-bg);
        color: var(--vs-button-#{nth($button, 1)}-fill-color);
        border: solid 1px var(--vs-button-#{nth($button, 1)}-fill-border);

        &:hover {
          border-color: var(--vs-button-#{nth($button, 1)}-fill-hover-border);
          background: var(--vs-button-#{nth($button, 1)}-fill-hover-bg);
        }

        &:active {
          border-color: var(--vs-button-#{nth($button, 1)}-fill-active-border);
          background: var(--vs-button-#{nth($button, 1)}-fill-active-bg);
        }

        &:focus-visible {
          border-color: var(--vs-button-#{nth($button, 1)}-fill-focus-border);
          box-shadow: var(--vs-button-#{nth($button, 1)}-fill-focus-shadow);
          outline: 0;
        }

        &:disabled,
        &#{$el}--loading {
          background: var(--vs-button-disabled-bg);
          border-color: var(--vs-button-disabled-border);
          color: var(--vs-button-disabled-color);
          cursor: no-drop;
        }
      }
    }

    &#{$el}__link {
      background: transparent;
      color: var(--vs-button-primary-color);
      border: none;
      padding: 0;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  /* 🌙 Dark mode support */
  html[data-theme='dark'],
  html.dark {
    #{$el} {
      --vs-button-disabled-bg: #ffffff14;
      --vs-button-disabled-border: transparent;
      --vs-button-disabled-color: #5c6970;

      @each $button in $theme {
        @if nth($button, 1) == warning {
          --vs-button-#{nth($button, 1)}-hover-bg: #{darken(nth($button, 2), 55%)};
        } @else if nth($button, 1) == danger {
          --vs-button-#{nth($button, 1)}-hover-bg: #{darken(nth($button, 2), 45%)};
        } @else if nth($button, 1) == secondary {
          --vs-button-#{nth($button, 1)}-hover-bg: #{darken(nth($button, 2), 50%)};
        } @else {
          --vs-button-#{nth($button, 1)}-hover-bg: #{darken(nth($button, 2), 30%)};
        }
        --vs-button-#{nth($button, 1)}-hover-border: #{lighten(nth($button, 2), 10%)};
        --vs-button-#{nth($button, 1)}-hover-color: #{lighten(nth($button, 2), 10%)};
      }
    }
  }
</style>
