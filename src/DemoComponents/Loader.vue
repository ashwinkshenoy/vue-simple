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

    <h3>Skeleton - Line</h3>
    <div class="box">
      <vs-loader variant="skeleton" type="line" :count="3"></vs-loader>
    </div>

    <h3>Skeleton - Line (custom width + color)</h3>
    <div class="box">
      <vs-loader variant="skeleton" type="line" width="60%" color="#c7d7f0"></vs-loader>
    </div>

    <h3>Skeleton - Circle</h3>
    <div class="box" style="flex-direction: row; display: flex; gap: 12px">
      <vs-loader variant="skeleton" type="circle" :count="4" size="48"></vs-loader>
    </div>

    <h3>Skeleton - Square</h3>
    <div class="box" style="flex-direction: row; display: flex; gap: 12px">
      <vs-loader variant="skeleton" type="square" :count="3" size="100"></vs-loader>
    </div>

    <h3>Skeleton - Card preview</h3>
    <div class="box" style="display: flex; gap: 16px; align-items: flex-start">
      <vs-loader variant="skeleton" type="circle" size="48"></vs-loader>
      <div style="flex: 1; display: flex; flex-direction: column; gap: 8px">
        <vs-loader variant="skeleton" type="line" width="50%" size="14"></vs-loader>
        <vs-loader variant="skeleton" type="line" width="80%" size="14"></vs-loader>
        <vs-loader variant="skeleton" type="line" width="65%" size="14"></vs-loader>
      </div>
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
