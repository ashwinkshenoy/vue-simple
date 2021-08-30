<template>
  <component :is="variant" :color="color" :size="size" :margin="margin" :center="center"></component>
</template>

<script>
  import Pulse from './vs-pulse.vue';
  import Dots from './vs-dots.vue';

  export default {
    name: 'VsLoader',

    components: {
      Pulse,
      Dots,
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
        type: String,
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
