<template>
  <div>
    <small>Pulse</small>
    <vs-loader variant="pulse" size="10px"></vs-loader>
    <br />
    <small>Dots</small>
    <vs-loader variant="dots" size="10px" color="brown"></vs-loader>
  </div>
</template>

<script>
  import VsLoader from '../../packages/vs-loader/src/vs-loader';
  export default {
    name: 'DemoLoader',

    components: {
      VsLoader,
    },
  };
</script>
