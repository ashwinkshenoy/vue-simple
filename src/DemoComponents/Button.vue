<template>
  <div>
    <br /><br />
    <small>Different Sizes</small>
    <br />
    <vs-button size="small">Small</vs-button>
    <vs-button>Medium</vs-button>
    <vs-button size="large">Large</vs-button>

    <br /><br />
    <small>Different Types</small>
    <br />
    <vs-button>Default</vs-button>
    <vs-button variant="primary" fill>Primary</vs-button>
    <vs-button variant="secondary" fill>Secondary</vs-button>
    <vs-button variant="light" fill>Light</vs-button>
    <vs-button variant="success" fill>Success</vs-button>
    <vs-button variant="warning" fill>Warning</vs-button>
    <vs-button variant="danger" fill>Danger</vs-button>
    <vs-button variant="success" fill is-round>Round</vs-button>
    <br /><br />
    <br />
    <vs-button>Default</vs-button>
    <vs-button variant="primary">Primary</vs-button>
    <vs-button variant="secondary">Secondary</vs-button>
    <vs-button variant="success">Success</vs-button>
    <vs-button variant="warning">Warning</vs-button>
    <vs-button variant="danger">Danger</vs-button>
    <vs-button variant="success" is-round>Round</vs-button>

    <br /><br />
    <small>Types of Links</small>
    <br />
    <vs-button variant="link" href="https://google.com">Link</vs-button>
    <br />
    <vs-button href="https://google.com" target="_blank" rel="noreferrer noopener">Google.com</vs-button>

    <br /><br />
    <small>Disabled</small>
    <br />
    <vs-button variant="primary" fill disabled>Disabled</vs-button>

    <br /><br />
    <small>Loading state button</small>
    <br />
    <vs-button variant="primary" fill :is-loading="isLoading" @click="toggleLoading">Click</vs-button>
  </div>
</template>

<script>
  import VsButton from '../../packages/vs-button/src/vs-button';

  export default {
    components: {
      VsButton,
    },

    data() {
      return {
        isLoading: false,
      };
    },

    methods: {
      toggleLoading() {
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
        }, 3000);
      },
    },
  };
</script>

<style lang="scss">
  .vs-button {
    margin: 0 10px 0 0;
  }
</style>
