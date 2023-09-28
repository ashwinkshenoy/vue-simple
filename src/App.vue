<template>
  <div class="app">
    <div class="text-center">
      <img src="/vue-simple.svg" alt="vue-simple" />
    </div>
    <br /><br />

    <demo-datepicker></demo-datepicker>

    <br /><br />
    <hr />

    <demo-select></demo-select>

    <br /><br />
    <hr />
    <br /><br />
    <strong>Alerts</strong>
    <br /><br />

    <vs-alert variant="success" show-close @close="log">
      <template v-slot:title>Success Heading</template>
      Success Message
    </vs-alert>

    <br />

    <vs-alert variant="warning" title="Warning Heading" show-close> Warning Message </vs-alert>

    <br />

    <vs-alert variant="error" title="Error Heading" show-close> Error Message </vs-alert>

    <br />

    <vs-alert variant="info" title="Information Heading" show-close>
      Information Message
      <template slot="close">close</template>
    </vs-alert>

    <br />

    <vs-alert variant="secondary" title="Secondary Heading">
      Secondary Message
      <template slot="close">close</template>
    </vs-alert>

    <br /><br />

    <small>Toast Style</small> <br /><br />

    <vs-alert variant="success" show-close toast>
      <template v-slot:title>Success Heading</template>
      Success Message
    </vs-alert>

    <br />

    <vs-alert variant="warning" title="Warning Heading" show-close toast> Warning Message </vs-alert>

    <br />

    <vs-alert variant="error" title="Error Heading" show-close toast> Error Message </vs-alert>

    <br />

    <vs-alert variant="info" title="Information Heading" show-close toast>
      Information Message
      <template slot="close">close</template>
    </vs-alert>

    <br />

    <vs-alert variant="secondary" title="Secondary Heading" show-close toast>
      Secondary Message
      <template slot="close">close</template>
    </vs-alert>

    <br /><br />

    <small>Small</small><br /><br />
    <vs-alert variant="success" small> Success Message </vs-alert>

    <br />

    <vs-alert variant="warning" small show-close> Warning Message </vs-alert>

    <br /><br />

    <vs-alert variant="success" no-bg> Success Message </vs-alert>

    <br />

    <vs-alert variant="warning" no-bg> Warning Message </vs-alert>

    <br />

    <vs-alert variant="error" no-bg> Danger Message </vs-alert>

    <br />

    <vs-alert variant="info" no-bg> Information Message </vs-alert>

    <br />

    <vs-alert variant="secondary" no-bg> Secondary Message </vs-alert>

    <br /><br />
    <hr />
    <br /><br />
    <strong>Modals</strong>
    <br /><br />
    <demo-modal></demo-modal>

    <br /><br />
    <hr />
    <br /><br />
    <strong>Tags</strong>
    <br /><br />
    <demo-tag></demo-tag>

    <br /><br />
    <hr />
    <br /><br />
    <strong>Buttons</strong>
    <br /><br />
    <demo-button></demo-button>

    <br /><br />
    <hr />
    <br /><br />
    <strong>Pagination</strong>
    <br /><br />
    <demo-pagination></demo-pagination>

    <br /><br />
    <hr />
    <br /><br />
    <strong>Loader</strong>
    <br /><br />
    <demo-loader></demo-loader>

    <br /><br />
    <hr />
    <br /><br />
    <strong>Toast</strong>
    <br /><br />
    <demo-toast></demo-toast>

    <br /><br />
    <hr />
    <br /><br />
    <strong>Accordion</strong>
    <br /><br />
    <demo-accordion></demo-accordion>
  </div>
</template>

<script>
  import VsAlert from '../packages/vs-alert/src/vs-alert.vue';
  import DemoModal from './DemoComponents/Modal.vue';
  import DemoDatepicker from './DemoComponents/Datepicker.vue';
  import DemoSelect from './DemoComponents/Select.vue';
  import DemoTag from './DemoComponents/Tag.vue';
  import DemoButton from './DemoComponents/Button.vue';
  import DemoPagination from './DemoComponents/Pagination.vue';
  import DemoLoader from './DemoComponents/Loader.vue';
  import DemoToast from './DemoComponents/Toast.vue';
  import DemoAccordion from './DemoComponents/Accordion.vue';

  export default {
    name: 'App',
    components: {
      VsAlert,
      DemoModal,
      DemoDatepicker,
      DemoSelect,
      DemoTag,
      DemoButton,
      DemoPagination,
      DemoLoader,
      DemoToast,
      DemoAccordion,
    },

    data() {
      return {};
    },

    methods: {
      log(a) {
        console.log(a);
      },
    },
  };
</script>

<style lang="scss">
  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    max-width: 1190px;
    margin: 40px auto 100px auto;

    .text-center {
      text-align: center;
    }
  }

  .app {
    padding: 0 20px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  strong {
    font-size: 20px;
  }

  small {
    margin-bottom: 5px;
    display: inline-block;
  }

  .mr-10 {
    margin-right: 10px;
  }
</style>
