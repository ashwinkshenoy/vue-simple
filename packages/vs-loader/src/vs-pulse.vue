<template>
  <div>
    <div class="vs-pulse">
      <div :style="[spinnerStyle, spinnerDelay1]"></div>
      <div :style="[spinnerStyle, spinnerDelay2]"></div>
      <div :style="[spinnerStyle, spinnerDelay3]"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VsLoader',

    props: {
      color: {
        type: String,
        default: '#1f73b7',
      },
      size: {
        type: String,
        default: '10px',
      },
      margin: {
        type: String,
        default: '3px',
      },
      radius: {
        type: String,
        default: '100%',
      },
    },

    data() {
      return {
        spinnerStyle: {
          backgroundColor: this.color,
          width: this.size,
          height: this.size,
          margin: this.margin,
          borderRadius: this.radius,
          display: 'inline-block',
          animationName: 'v-pulseStretchDelay',
          animationDuration: '0.75s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'cubic-bezier(.2,.68,.18,1.08)',
          animationFillMode: 'both',
          float: 'left',
        },
        spinnerDelay1: {
          animationDelay: '0.12s',
        },
        spinnerDelay2: {
          animationDelay: '0.24s',
        },
        spinnerDelay3: {
          animationDelay: '0.36s',
        },
      };
    },
  };
</script>

<style lang="scss">
  .vs-pulse {
    clear: both;
    @-webkit-keyframes v-pulseStretchDelay {
      0%,
      80% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-opacity: 1;
        opacity: 1;
      }
      45% {
        -webkit-transform: scale(0.1);
        transform: scale(0.1);
        -webkit-opacity: 0.7;
        opacity: 0.7;
      }
    }

    @keyframes v-pulseStretchDelay {
      0%,
      80% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-opacity: 1;
        opacity: 1;
      }
      45% {
        -webkit-transform: scale(0.1);
        transform: scale(0.1);
        -webkit-opacity: 0.7;
        opacity: 0.7;
      }
    }
  }
</style>
