<template>
  <div :class="['vs-skeleton', { 'vs-loader--center': center }]" :style="containerStyle">
    <div
      v-for="i in count"
      :key="i"
      class="vs-skeleton__item"
      :class="`vs-skeleton__item--${type}`"
      :style="itemStyle"
    ></div>
  </div>
</template>

<script>
  export default {
    name: 'VsSkeleton',

    props: {
      type: {
        type: String,
        default: 'line',
        validator: val => ['square', 'line', 'circle'].includes(val),
      },
      count: {
        type: [Number, String],
        default: 1,
      },
      size: {
        type: [Number, String],
        default: null,
      },
      width: {
        type: String,
        default: null,
      },
      color: {
        type: String,
        default: null,
      },
      center: {
        type: Boolean,
      },
    },

    computed: {
      containerStyle() {
        return this.color ? { '--vs-skeleton-color': this.color } : {};
      },

      itemStyle() {
        const style = {};
        const sz = this.size != null ? (typeof this.size === 'number' ? `${this.size}px` : this.size) : null;

        if (this.type === 'line') {
          if (sz) style.height = sz;
          if (this.width) style.width = this.width;
        } else {
          if (sz) {
            style.width = sz;
            style.height = sz;
          }
        }

        return style;
      },
    },
  };
</script>

<style lang="scss">
  $el: '.vs-skeleton';

  #{$el} {
    display: flex;
    flex-direction: column;
    gap: 8px;

    &.vs-loader--center {
      align-items: center;
      justify-content: center;
    }

    &__item {
      position: relative;
      overflow: hidden;
      background-color: var(--vs-skeleton-color, #e9e9e9);

      &--line {
        height: 16px;
        width: 100%;
        border-radius: 4px;
      }

      &--square {
        width: 80px;
        height: 80px;
        border-radius: 4px;
      }

      &--circle {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        transform: translateX(-100%);
        background: linear-gradient(
          90deg,
          transparent 0%,
          var(--vs-skeleton-shimmer, rgba(255, 255, 255, 0.6)) 50%,
          transparent 100%
        );
        animation: vs-shimmer 1s infinite;
      }
    }

    @keyframes vs-shimmer {
      100% {
        transform: translateX(100%);
      }
    }
  }
</style>
