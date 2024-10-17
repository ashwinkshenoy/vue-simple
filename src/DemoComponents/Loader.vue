<template>
  <div>
    <h3>Pulse</h3>
    <div class="box">
      <vs-loader :size="10"></vs-loader>
    </div>

    <h3>Dots</h3>
    <div class="box">
      <vs-loader variant="dots" :size="10" color="brown"></vs-loader>
    </div>

    <h3>Inline</h3>
    <div class="box">
      <vs-loader variant="inline" :size="10" color="green"></vs-loader>
    </div>
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
