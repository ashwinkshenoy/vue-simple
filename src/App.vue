<template>
  <div class="app">
    <demo-datepicker />

    <br /><br />
    <hr />

    <demo-select></demo-select>

    <br /><br />
    <hr />
    <br /><br />
    <strong>Alerts</strong>
    <br /><br />

    <vs-alert type="success" title="Success Heading" show-close>
      Success Message
    </vs-alert>

    <br />

    <vs-alert type="warning" title="Warning Heading" show-close>
      Warning Message
    </vs-alert>

    <br />

    <vs-alert type="error" title="Error Heading" show-close>
      Error Message
    </vs-alert>

    <br />

    <vs-alert type="info" title="Information Heading" show-close>
      Information Message
      <template slot="close">close</template>
    </vs-alert>

    <br />

    <vs-alert type="secondary" title="Secondary Heading" show-close>
      Secondary Message
      <template slot="close">close</template>
    </vs-alert>

    <br /><br />

    <small>Small</small><br /><br />
    <vs-alert type="success" small show-close>
      Success Message
    </vs-alert>

    <br />

    <vs-alert type="warning" small show-close>
      Warning Message
    </vs-alert>

    <br /><br />

    <vs-alert type="success" no-bg>
      Success Message
    </vs-alert>

    <br />

    <vs-alert type="warning" no-bg>
      Warning Message
    </vs-alert>

    <br />

    <vs-alert type="error" no-bg>
      Error Message
    </vs-alert>

    <br />

    <vs-alert type="info" no-bg>
      Information Message
    </vs-alert>

    <br />

    <vs-alert type="secondary" no-bg>
      Secondary Message
    </vs-alert>

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
  </div>
</template>

<script>
  import VsAlert from '../packages/vs-alert/src/vs-alert';
  import DemoModal from './DemoComponents/Modal';
  import DemoDatepicker from './DemoComponents/Datepicker';
  import DemoSelect from './DemoComponents/Select';
  import DemoTag from './DemoComponents/Tag';
  import DemoButton from './DemoComponents/Button';
  import DemoPagination from './DemoComponents/Pagination';

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
  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    margin-top: 60px;
    max-width: 1170px;
    margin: 100px auto;
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

  .menu-item {
    padding: 10px 15px;
    position: relative;
    cursor: pointer;
    &:first-child {
      margin-top: 8px;
    }
    &:last-child {
      margin-bottom: 8px;
    }
    &:after {
      position: absolute;
      top: -2px;
      right: 2px;
      -webkit-transition: opacity 0.1s ease-in-out;
      transition: opacity 0.1s ease-in-out;
      opacity: 0;
      background: no-repeat 50%/16px
        url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' color='%231f73b7'%3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' d='M1 9l4 4L15 3'/%3E%3C/svg%3E");
      width: 32px;
      height: 40px;
      content: '';
    }
    &--is-checked:after {
      opacity: 1;
    }
  }

  .mr-10 {
    margin-right: 10px;
  }
</style>
