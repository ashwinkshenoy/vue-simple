<template>
  <div>
    <!-- Triggers -->
    <vs-button variant="success" size="small" fill @click="toastSuccess">Success</vs-button>
    <vs-button variant="danger" size="small" fill @click="toastError">Error</vs-button>
    <vs-button variant="warning" size="small" fill @click="toastWarning">Warning</vs-button>
    <br /><br />
    <vs-button variant="secondary" size="small" @click="hide">Hide</vs-button>
  </div>
</template>

<script>
  import VsToast from '../../packages/vs-toast/src/index.js';
  import VsButton from '../../packages/vs-button/src/vs-button.vue';

  export default {
    name: 'DemoToast',

    components: {
      VsButton,
    },

    methods: {
      openToast(ref) {
        this.$refs[ref].open();
      },

      closeToast(ref) {
        this.$refs[ref].close();
      },

      // Default Toasts
      toastSuccess() {
        VsToast.show({
          title: 'Success Title',
          message: 'Toast message',
          variant: 'success',
          isSticky: true,
          position: 'top-left',
        });
      },

      toastError() {
        VsToast.show({
          title: 'Error Title',
          message: 'Toast message',
          variant: 'error',
        });
      },

      toastWarning() {
        VsToast.show({
          title: 'Warning Title',
          message: 'Toast message',
          variant: 'warning',
          type: 'alert',
          position: 'top-right',
        });
      },

      hide() {
        VsToast.close();
      },
    },
  };
</script>
