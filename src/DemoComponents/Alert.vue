<template>
  <div>
    <h3>Alert style</h3>
    <div class="box">
      <vs-alert variant="success" title="Success Heading" show-close> Success Message </vs-alert>
      <vs-alert variant="warning" show-close>
        <template v-slot:title>Warning Heading</template>
        Warning Message
      </vs-alert>
      <vs-alert variant="error" title="Error Heading" show-close> Error Message </vs-alert>
      <vs-alert variant="info" title="Information Heading" show-close> Information Message </vs-alert>
      <vs-alert variant="secondary" title="Secondary Heading" show-close> Secondary Message </vs-alert>
    </div>

    <h3>Toast style</h3>
    <div class="box">
      <vs-alert variant="success" title="Success Heading" toast show-close> Success Message </vs-alert>
      <br />

      <vs-alert variant="warning" title="Warning Heading" toast show-close> Warning Message </vs-alert>
      <br />

      <vs-alert variant="error" title="Error Heading" toast show-close> Error Message </vs-alert>
      <br />

      <vs-alert variant="info" title="Information Heading" toast show-close> Information Message </vs-alert>
      <br />

      <vs-alert variant="secondary" title="Secondary Heading" toast show-close> Secondary Message </vs-alert>
    </div>

    <h3>Small style</h3>
    <div class="box">
      <vs-alert variant="success" no-bg> Success Message </vs-alert>
      <vs-alert variant="warning" no-bg> Warning Message </vs-alert>
      <vs-alert variant="error" no-bg> Error Message </vs-alert>
      <vs-alert variant="info" no-bg> Information Message </vs-alert>
      <vs-alert variant="secondary" no-bg>Secondary Message </vs-alert>
    </div>
  </div>
</template>

<script>
  import VsAlert from '../../packages/vs-alert/src/vs-alert.vue';

  export default {
    name: 'Alert',

    components: {
      VsAlert,
    },
  };
</script>

<style>
  .vs-alert {
    margin-bottom: 10px;
  }
</style>
