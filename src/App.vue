<template>
  <div class="app">
    <datepicker-demo />

    <br /><br />
    <hr />

    <br /><br />
    <strong>Select</strong>
    <br /><br />
    <div class="grid">
      <div>
        <vs-select label="No Search" :options="options1" v-model="form.select1" required></vs-select>
        <small>v-model: {{ form.select1 }}</small>
      </div>
      <div>
        <vs-select label="Search" :options="options1" is-search v-model="form.select2"></vs-select>
        <small>v-model: {{ form.select2 }}</small>
      </div>
      <div>
        <vs-select label="No Search (Object)" :options="options2" v-model="form.select3"></vs-select>
        <small>v-model: {{ form.select3 }}</small>
      </div>
      <div>
        <vs-select
          label="Search (Object)"
          :options="options2"
          is-search
          v-model="form.select4"
          emptyItemsText="Not Found"
        ></vs-select>
        <small>v-model: {{ form.select4 }}</small>
      </div>
      <div>
        <vs-select label="Disabled" :options="options2" is-search disabled v-model="form.select5"></vs-select>
        <small>v-model: {{ form.select5 }}</small>
      </div>
      <div>
        <vs-select label="Search (Customizable)" :options="options1" is-search v-model="form.select6">
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
        <small>v-model: {{ form.select6 }}</small>
      </div>
      <div>
        <vs-select
          label="Preselected & v-model"
          :options="options2"
          is-search
          :preselected="preselected"
          v-model="form.select7"
        ></vs-select>
        <small>v-model: {{ form.select7 }}</small>
        <br />
        <small>Preselected given priority</small>
      </div>
      <div>
        <vs-select label="Compact" :options="options1" v-model="form.select1" is-compact></vs-select>
        <small>v-model: {{ form.select1 }}</small>
      </div>
      <div>
        <vs-select label="Menu (Object)" :options="menu" @on-select="log" is-menu is-search></vs-select>
      </div>
    </div>

    <br /><br />
    <hr />
    <br /><br />
    <strong>Multi-Select</strong>
    <br /><br />

    <div class="grid">
      <div>
        <vs-multiselect label="No Search (Array)" :options="options1" v-model="form.select8" required></vs-multiselect>
        <small>v-model: {{ form.select8 }}</small>
      </div>
      <div>
        <vs-multiselect label="Search (Array)" :options="options1" is-search v-model="form.select9"></vs-multiselect>
        <small>v-model: {{ form.select9 }}</small>
      </div>
      <div>
        <vs-multiselect label="No Search (Object)" :options="options2" v-model="form.select10"></vs-multiselect>
        <small>v-model: {{ form.select10 }}</small>
      </div>
      <div>
        <vs-multiselect
          label="Search (Object)"
          :options="options2"
          is-search
          :preselected="preselected2"
          v-model="form.select11"
        ></vs-multiselect>
        <small>v-model: {{ form.select11 }}</small>
      </div>
      <div>
        <vs-multiselect label="Disabled" :options="options2" is-search disabled></vs-multiselect>
      </div>
      <div>
        <vs-multiselect label="Error" :options="options2" is-search isError v-model="form.select12"></vs-multiselect>
        <small>v-model: {{ form.select12 }}</small>
      </div>
      <div>
        <vs-multiselect label="Compact" :options="options1" v-model="form.select8" is-compact></vs-multiselect>
        <small>v-model: {{ form.select8 }}</small>
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
  </div>
</template>

<script>
  import VsSelect from '../packages/vs-select/src/vs-select';
  import VsMultiselect from '../packages/vs-select/src/vs-multiselect';
  import VsAlert from '../packages/vs-alert/src/vs-alert';
  import VsTag from '../packages/vs-tag/src/vs-tag';
  import Modal from './Modal';
  import DatepickerDemo from './DatepickerDemo';

  export default {
    name: 'App',
    components: {
      VsSelect,
      VsMultiselect,
      VsAlert,
      Modal,
      DatepickerDemo,
      VsTag,
    },

    data() {
      return {
        options1: ['Derek', 'Ryan', 'BB', 'Chris'],
        options2: [
          { label: 'Iron Man', value: 'Tony' },
          { label: 'Hulk', value: 'Bruce Banner' },
          { label: 'Capt. America', value: 'Steve Rogers' },
          { label: 'Scarlet Witch', value: 'Wanda' },
          { label: 'Star Lord', value: 'Peter Quill' },
          { label: 'Thor', value: 'thor', disabled: true },
        ],
        preselected2: ['Wanda', 'Bruce Banner'],
        preselected: 'Wanda',
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
          select7: 'Tony',
          select8: '',
          select9: '',
          select10: '',
          select11: '',
          select12: '',
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

  .mr-10 {
    margin-right: 10px;
  }
</style>
