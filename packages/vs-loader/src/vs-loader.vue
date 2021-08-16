<template>
  <component :is="variant" :size="size" :margin="margin"></component>
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
      size: {
        type: String,
      },
      margin: {
        type: String,
      },
    },
  };
</script>
