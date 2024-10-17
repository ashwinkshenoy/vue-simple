<template>
  <div class="box">
    <!-- Triggers -->
    <vs-button variant="success" size="small" fill @click="toastSuccess" class="mr-10">Success</vs-button>
    <vs-button variant="danger" size="small" fill @click="toastError" class="mr-10">Error</vs-button>
    <vs-button variant="warning" size="small" fill @click="toastWarning" class="mr-10">Warning</vs-button>
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
          position: 'top-left',
          showClose: false,
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
          message: 'Toast message. Sticky Toast',
          variant: 'warning',
          type: 'alert',
          position: 'top-right',
          isSticky: true,
          showClose: false,
        });
      },

      hide() {
        VsToast.close();
      },
    },
  };
</script>
