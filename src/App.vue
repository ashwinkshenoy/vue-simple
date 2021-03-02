<template>
  <div class="app">
    <strong>Select</strong>
    <br /><br />
    <div class="grid">
      <div>
        <span>No Search</span>
        <vs-select :options="options1" v-model="form.select1"></vs-select>
        <small>{{ form.select1 }}</small>
      </div>
      <div>
        <span>Search</span>
        <vs-select :options="options1" is-search v-model="form.select2"></vs-select>
        <small>{{ form.select2 }}</small>
      </div>
      <div>
        <span>No Search (Object)</span>
        <vs-select :options="options2" v-model="form.select3"></vs-select>
        <small>{{ form.select3 }}</small>
      </div>
      <div>
        <span>Search (Object)</span>
        <vs-select :options="options2" is-search v-model="form.select4"></vs-select>
        <small>{{ form.select4 }}</small>
      </div>
      <div>
        <span>Disabled</span>
        <vs-select :options="options2" is-search disabled v-model="form.select5"></vs-select>
        <small>{{ form.select5 }}</small>
      </div>
      <div>
        <span>Search (Customizable)</span>
        <vs-select :options="options1" is-search v-model="form.select6">
          <template v-slot:options="{ options, selected, onSelectedItem }">
            <li
              v-for="(option, index) in options"
              :key="'selected-' + index"
              class="menu-item"
              :class="[{ 'menu-item--is-checked': selected === option }]"
              @click="onSelectedItem(option, index)"
            >
              <span>{{ option }}</span>
            </li>
          </template>
        </vs-select>
        <small>{{ form.select6 }}</small>
      </div>
      <div>
        <span>Preselected & v-model</span>
        <vs-select :options="options2" is-search :preselected="preselected" v-model="form.select7"></vs-select>
        {{ form.select5 }}
        <small>Preselected given priority</small>
      </div>
      <div></div>
      <div>
        <span>Menu (Object)</span>
        <vs-select :options="menu" @on-select="log" is-menu></vs-select>
      </div>
    </div>

    <br /><br />
    <hr />
    <br /><br />
    <strong>Multi-Select</strong>
    <br /><br />

    <div class="grid">
      <div>
        <span>No Search (Array)</span>
        <vs-multiselect :options="options1"></vs-multiselect>
      </div>
      <div>
        <span>Search (Array)</span>
        <vs-multiselect :options="options1" is-search></vs-multiselect>
      </div>
      <div>
        <span>No Search (Object)</span>
        <vs-multiselect :options="options2"></vs-multiselect>
      </div>
      <div>
        <span>Search (Object)</span>
        <vs-multiselect :options="options2" is-search :preselected="preselected2"></vs-multiselect>
      </div>
      <div>
        <span>Disabled</span>
        <vs-multiselect :options="options2" is-search disabled></vs-multiselect>
      </div>
      <div>
        <span>Error</span>
        <vs-multiselect :options="options2" is-search isError></vs-multiselect>
      </div>
    </div>

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

    <br /><br />
    <hr />
    <br /><br />
    <strong>Modals</strong>
    <br /><br />
    <modal></modal>
  </div>
</template>

<script>
  import VsSelect from '../packages/vs-select/src/vs-select';
  import VsMultiselect from '../packages/vs-select/src/vs-multiselect';
  import VsAlert from '../packages/vs-alert/src/vs-alert';
  import Modal from './modal';

  export default {
    name: 'App',
    components: {
      VsSelect,
      VsMultiselect,
      VsAlert,
      Modal,
    },

    data() {
      return {
        options1: ['Derek', 'Ryan', 'BB', 'Chris'],
        options2: [
          { label: 'ashwin', value: 'ash' },
          { label: 'shenoy', value: 'she' },
          { label: 'Chris', value: 'chris' },
          { label: 'Chris', value: 'captain A' },
          { label: 'Thor', value: 'thor', disabled: true },
        ],
        preselected2: ['ash', 'captain A'],
        preselected: 'captain A',
        menu: [
          { label: 'Google', value: 'https://google.com' },
          { label: 'Twitter', value: 'https://twitter.com' },
          { label: 'Facebook', value: 'https://youtube.com', disabled: true },
          { label: 'Youtube', value: 'https://youtube.com' },
        ],
        form: {
          select1: '',
          select2: '',
          select3: '',
          select4: '',
          select5: '',
          select6: '',
          select7: 'ash',
        },
      };
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
</style>
