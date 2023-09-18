<template>
  <div class="cargo-color-box">
    <div class="color-block" :style="style"></div>
    <div class="color-text">
      <span class="color-name">{{ name }}</span>
      <span>{{ color }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ColorBox',

    props: {
      color: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },

    computed: {
      style() {
        return {
          '--color-box-bg': `${this.color}`,
        };
      },
    },
  };
</script>

<style lang="scss">
  .cargo-color-box {
    border-radius: 6px;
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
    transition: 0.2s all linear;
    overflow: hidden;
    &:hover {
      box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1), 0 5px 20px rgba(0, 0, 0, 0.15);
    }

    .color-block {
      background: var(--color-box-bg);
      min-height: 80px;
    }

    .color-text {
      display: grid;
      font-weight: 300;
      grid-template-columns: auto auto;
      justify-content: space-between;
      padding: 20px;
    }

    .color-name {
      font-weight: 500;
    }
  }
</style>
