<template>
  <div class="vs-timeline-item" :class="classList">
    <div v-if="isOppositeVisible" class="vs-timeline-item__opposite">
      <slot name="opposite"></slot>
    </div>

    <div class="vs-timeline-item__separator">
      <div class="vs-timeline-item__line vs-timeline-item__line--top"></div>
      <div class="vs-timeline-item__media">
        <slot name="media">
          <span class="vs-timeline-item__dot"></span>
        </slot>
      </div>
      <div class="vs-timeline-item__line vs-timeline-item__line--bottom"></div>
    </div>

    <div class="vs-timeline-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VsTimelineItem',

    inject: {
      Timeline: {
        default: () => ({ layout: 'left' }),
      },
    },

    computed: {
      layout() {
        return this.Timeline.layout;
      },

      isOppositeVisible() {
        return this.layout === 'opposite' || this.layout === 'alternating';
      },

      classList() {
        return {
          'vs-timeline-item--opposite': this.layout === 'opposite',
          'vs-timeline-item--alternating': this.layout === 'alternating',
        };
      },
    },
  };
</script>

<style lang="scss">
  $el: '.vs-timeline-item';

  #{$el} {
    --vs-timeline-dot-size: 10px;
    --vs-timeline-dot-bg: #ffffff;
    --vs-timeline-dot-border: #87929d;
    --vs-timeline-line-color: #d8dcde;
    --vs-timeline-content-gap: 16px;
    --vs-timeline-media-size: 20px;

    display: flex;
    gap: var(--vs-timeline-content-gap);

    &__separator {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;
      width: var(--vs-timeline-media-size);
      position: relative;
      top: 2px;
    }

    &__line {
      width: 1px;
      background: var(--vs-timeline-line-color);

      &--top {
        flex: 0;
        height: 0;
      }

      &--bottom {
        flex: 1;
        min-height: 10px;
      }
    }

    &:last-child {
      #{$el}__line--bottom {
        display: none;
      }

      #{$el}__content {
        padding-bottom: 0;
      }
    }

    &__dot {
      width: var(--vs-timeline-dot-size);
      height: var(--vs-timeline-dot-size);
      border-radius: 50%;
      border: 2px solid var(--vs-timeline-dot-border);
      background: var(--vs-timeline-dot-bg);
      display: block;
      flex-shrink: 0;
    }

    &__media {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--vs-timeline-media-size);
      height: var(--vs-timeline-media-size);
      flex-shrink: 0;
    }

    &__opposite {
      flex: 1;
      min-width: 0;
      text-align: right;
      padding-bottom: 20px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding-top: 0;
    }

    &__content {
      flex: 1;
      min-width: 0;
      padding-bottom: 20px;
      padding-top: 0;
    }

    // Opposite layout: opposite column is visible and right-aligned
    &--opposite {
      #{$el}__opposite {
        text-align: right;
      }
    }
  }

  [data-theme='dark'],
  .dark {
    #{$el} {
      --vs-timeline-dot-bg: #1f2d3d;
      --vs-timeline-dot-border: #68737d;
      --vs-timeline-line-color: #535d66;
    }
  }
</style>
