<template>
  <button :class="['vs-button', classList]">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'VsButton',

    props: {
      type: {
        type: String,
      },
      // small. medium, large
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
    },
  };
</script>

<style lang="scss">
  $el: '.vs-button';

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
  }
</style>
