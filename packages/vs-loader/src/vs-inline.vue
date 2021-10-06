<template>
  <div :class="['vs-inline', { 'vs-loader--center': center }]">
    <svg :color="color" viewBox="0 0 16 4" :width="size * 4">
      <circle cx="14" fill="currentColor" cy="2" r="2" class="vs-inline--circle"></circle>
      <circle cx="8" fill="currentColor" cy="2" r="2" class="vs-inline--circle"></circle>
      <circle cx="2" fill="currentColor" cy="2" r="2" class="vs-inline--circle"></circle>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'VsInlineLoader',

    props: {
      color: {
        type: String,
        default: '#1f73b7',
      },
      size: {
        type: [Number, String],
        default: 10,
      },
      center: {
        type: Boolean,
      },
    },
  };
</script>

<style lang="scss">
  .vs-inline {
    &.vs-loader--center {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .vs-inline--circle {
      opacity: 0.2;
      &:nth-child(1) {
        animation: pulseAnimation 1s infinite;
        animation-delay: 0.4s;
      }
      &:nth-child(2) {
        animation: pulseAnimation 1s infinite;
        animation-delay: 0.2s;
      }
      &:nth-child(3) {
        animation: pulseAnimation 1s infinite;
      }
    }

    @keyframes pulseAnimation {
      0%,
      100% {
        opacity: 0.2;
      }
      50% {
        opacity: 0.8;
      }
    }
  }
</style>
