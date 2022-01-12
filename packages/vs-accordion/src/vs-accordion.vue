<template>
  <ul class="vs-accordion">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    props: {
      active: {
        type: Number,
      },

      isBox: {
        type: Boolean,
      },

      isExpandable: {
        type: Boolean,
      },

      level: {
        type: Number,
      },

      isCompact: {
        type: Boolean,
        default: false,
      },
    },

    data() {
      return {
        Accordion: {
          count: 0,
          active: this.active,
          isBox: this.isBox,
          isExpandable: this.isExpandable,
          level: this.level,
          isCompact: this.isCompact,
        },
      };
    },

    provide() {
      return {
        Accordion: this.Accordion,
      };
    },

    watch: {
      active(value) {
        this.Accordion.active = value;
      },
    },
  };
</script>

<style lang="scss">
  .vs-accordion {
    list-style: none;
    margin: 0;
    padding: 0;

    &__item:last-child {
      border-bottom: none;
    }
  }
</style>
