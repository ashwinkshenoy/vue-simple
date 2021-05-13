<template>
  <div class="app">
    <datepicker-demo />

    <br /><br />
    <hr />

    <select-demo></select-demo>

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
    <modal></modal>

    <br /><br />
    <hr />
    <br /><br />
    <strong>Tags</strong>
    <br /><br />

    <small>Sizes</small>
    <br />
    <vs-tag size="small" class="mr-10">Small</vs-tag>
    <vs-tag class="mr-10">Medium</vs-tag>
    <vs-tag size="large" class="mr-10">Large</vs-tag>
    <br /><br />

    <small>Types</small>
    <br />
    <vs-tag type="primary" class="mr-10">Primary</vs-tag>
    <vs-tag type="success" class="mr-10">Success</vs-tag>
    <vs-tag type="danger" class="mr-10">Danger</vs-tag>
    <vs-tag type="warning" class="mr-10">Warning</vs-tag>
    <vs-tag type="secondary" class="mr-10">Secondary</vs-tag>
    <br /><br />

    <small>Shapes</small>
    <br />
    <vs-tag class="mr-10">Completed</vs-tag>
    <vs-tag is-pill class="mr-10">Completed</vs-tag>
    <vs-tag is-round class="mr-10">8</vs-tag>
    <br /><br />

    <small>Custom Color</small>
    <br />
    <vs-tag bg-color="#1dbdbc" text-color="#083a39" class="mr-10">Teal</vs-tag>
    <vs-tag bg-color="#00a656" text-color="#fff" class="mr-10">Green</vs-tag>
    <vs-tag bg-color="#ff6224" text-color="#fff" class="mr-10">Orange</vs-tag>
    <vs-tag bg-color="#ffd424" text-color="#796510" class="mr-10">Lemon</vs-tag>

    <br /><br />
    <hr />
    <br /><br />
    <strong>Buttons</strong>
    <br /><br />
    <demo-button></demo-button>
  </div>
</template>

<script>
  import VsAlert from '../packages/vs-alert/src/vs-alert';
  import VsTag from '../packages/vs-tag/src/vs-tag';
  import Modal from './DemoComponents/Modal';
  import DatepickerDemo from './DemoComponents/Datepicker';
  import SelectDemo from './DemoComponents/Select';
  import DemoButton from './DemoComponents/Button';

  export default {
    name: 'App',
    components: {
      VsAlert,
      Modal,
      DatepickerDemo,
      SelectDemo,
      VsTag,
      DemoButton,
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
