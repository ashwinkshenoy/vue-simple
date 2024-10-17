<template>
  <div>
    <h3>Different Sizes</h3>

    <div class="box">
      <vs-button size="small" class="mr-10">Small</vs-button>
      <vs-button class="mr-10">Medium</vs-button>
      <vs-button size="large">Large</vs-button>
    </div>

    <h3>Different Types</h3>

    <div class="box">
      <vs-button variant="primary" fill class="mr-10">Primary</vs-button>
      <vs-button variant="secondary" fill class="mr-10">Secondary</vs-button>
      <vs-button variant="light" fill class="mr-10">Light</vs-button>
      <vs-button variant="success" fill class="mr-10">Success</vs-button>
      <vs-button variant="warning" fill class="mr-10">Warning</vs-button>
      <vs-button variant="danger" fill class="mr-10">Danger</vs-button>
      <vs-button variant="success" fill is-round>Round</vs-button>
    </div>

    <br />

    <div class="box">
      <vs-button class="mr-10">Default</vs-button>
      <vs-button variant="primary" class="mr-10">Primary</vs-button>
      <vs-button variant="secondary" class="mr-10">Secondary</vs-button>
      <vs-button variant="success" class="mr-10">Success</vs-button>
      <vs-button variant="warning" class="mr-10">Warning</vs-button>
      <vs-button variant="danger" class="mr-10">Danger</vs-button>
      <vs-button variant="success" is-round>Round</vs-button>
    </div>

    <h3>Types of Links</h3>

    <div class="box">
      <vs-button variant="link" href="https://google.com">Link</vs-button>
      <br />
      <vs-button href="https://google.com" target="_blank" rel="noreferrer noopener">Google.com</vs-button>
    </div>

    <h3>Disabled</h3>
    <div class="box">
      <vs-button variant="primary" fill disabled>Disabled</vs-button>
    </div>

    <h3>Loading state button</h3>
    <div class="box">
      <vs-button variant="primary" fill :is-loading="isLoading" @click="toggleLoading">Click</vs-button>
    </div>
  </div>
</template>

<script>
  import VsButton from '../../packages/vs-button/src/vs-button.vue';

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
        }, 2500);
      },
    },
  };
</script>
