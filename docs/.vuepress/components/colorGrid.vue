<template functional>
  <div class="color-grid">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ColorGrid',
  };
</script>

<style lang="scss">
  .color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(17%, 1fr));
    grid-gap: 20px;
    margin-bottom: 50px;
  }
</style>
