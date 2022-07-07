<template>
  <div>
    <small>Pulse</small>
    <vs-loader :size="10"></vs-loader>
    <br />

    <small>Dots</small>
    <vs-loader variant="dots" :size="10" color="brown"></vs-loader>

    <small>Inline</small>
    <vs-loader variant="inline" :size="10" color="green"></vs-loader>
  </div>
</template>

<script>
  import VsLoader from '../../packages/vs-loader/src/vs-loader.vue';
  export default {
    name: 'DemoLoader',

    components: {
      VsLoader,
    },
  };
</script>
