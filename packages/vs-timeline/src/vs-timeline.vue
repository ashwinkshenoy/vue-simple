<template>
  <div :class="['vs-timeline', `vs-timeline--${layout}`]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'VsTimeline',

    props: {
      layout: {
        type: String,
        default: 'left',
        validator: val => ['left', 'alternating', 'opposite'].includes(val),
      },
    },

    provide() {
      return {
        Timeline: this.Timeline,
      };
    },

    data() {
      return {
        Timeline: {
          layout: this.layout,
        },
      };
    },

    watch: {
      layout(value) {
        this.Timeline.layout = value;
      },
    },
  };
</script>

<style lang="scss">
  .vs-timeline {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;

    &--alternating {
      .vs-timeline-item:nth-child(even) {
        flex-direction: row-reverse;

        .vs-timeline-item__content {
          text-align: right;
        }

        .vs-timeline-item__opposite {
          text-align: left;
        }
      }
    }
  }
</style>
