<template>
  <component :is="variant" v-bind="$props"></component>
</template>

<script>
  import Pulse from './vs-pulse.vue';
  import Dots from './vs-dots.vue';
  import Inline from './vs-inline.vue';

  export default {
    name: 'VsLoader',

    components: {
      Pulse,
      Dots,
      Inline,
    },

    props: {
      variant: {
        type: String,
        default: 'Pulse',
      },
      color: {
        type: String,
      },
      size: {
        type: [Number, String],
      },
      margin: {
        type: String,
      },
      center: {
        type: Boolean,
      },
    },
  };
</script>
