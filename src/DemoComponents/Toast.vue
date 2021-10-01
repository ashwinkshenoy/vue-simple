<template>
  <div>
    <!-- Triggers -->
    <vs-button variant="success" size="small" fill @click="toastSuccess">Success</vs-button>
    <vs-button variant="danger" size="small" fill @click="toastError">Error</vs-button>
    <vs-button variant="warning" size="small" fill @click="toastWarning">Warning</vs-button>
  </div>
</template>

<script>
  import VsToastApi from '../../packages/vs-toast/src/index.js';
  import VsButton from '../../packages/vs-button/src/vs-button';

  export default {
    name: 'DemoToast',

    components: {
      VsButton,
    },

    data() {
      return {
        variant1: '',
        toastMessage1: '',
      };
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
        VsToastApi.show({
          title: 'Success Title',
          message: 'Toast message',
          variant: 'success',
          isSticky: true,
        });
      },
      toastError() {
        VsToastApi.show({
          title: 'Error Title',
          message: 'Toast message',
          variant: 'error',
          showClose: false,
        });
      },
      toastWarning() {
        VsToastApi.show({
          title: 'Warning Title',
          message: 'Toast message',
          variant: 'warning',
          type: 'alert',
        });
      },
    },
  };
</script>
