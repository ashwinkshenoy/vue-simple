<template>
  <div>
    <br /><br />
    <strong>Select</strong>
    <br /><br />
    <div class="grid">
      <div>
        <vs-select label="No Search" :options="options1" v-model="form.select1" @change="log"></vs-select>
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
        <vs-select label="Menu (Object)" :options="menu" @change="log" is-menu is-search></vs-select>
      </div>
      <div>
        <vs-select
          label="Boolean (Object)"
          :options="booleanOptions"
          v-model="form.boolSelect"
          @change="log"
        ></vs-select>
        <small>v-model: {{ form.boolSelect }}</small>
      </div>
      <div>
        <vs-select label="Error" :options="options1" v-model="form.select1" required is-error></vs-select>
        <small>v-model: {{ form.select1 }}</small>
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
        <vs-multiselect label="Search (Array)" :options="options3" is-search v-model="form.select9"></vs-multiselect>
        <small>v-model: {{ form.select9 }}</small>
      </div>
      <div>
        <vs-multiselect label="No Search (Object)" :options="options2" v-model="form.select10"></vs-multiselect>
        <small>v-model: {{ form.select10 }}</small>
      </div>
      <div>
        <vs-multiselect label="Search (Object)" :options="options2" is-search v-model="form.select11"></vs-multiselect>
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
  </div>
</template>

<script>
  import VsSelect from '../../packages/vs-select/src/vs-select';
  import VsMultiselect from '../../packages/vs-select/src/vs-multiselect';

  export default {
    name: 'SelectDemo',

    components: {
      VsSelect,
      VsMultiselect,
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
        options3: ['group', 'sub_group', 'subject'],

        preselected2: ['Wanda', 'Bruce Banner'],
        preselected: 'Wanda',
        menu: [
          { label: 'Google', value: 'https://google.com' },
          { label: 'Twitter', value: 'https://twitter.com' },
          { label: 'Facebook', value: 'https://facebook.com', disabled: true },
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
          select8: ['Derek', 'Ryan'],
          select9: '',
          select10: '',
          select11: [
            { label: 'Iron Man', value: 'Tony' },
            { label: 'Hulk', value: 'Bruce Banner' },
          ],
          select12: '',
          boolSelect: false,
        },
        booleanOptions: [
          {
            label: 'True',
            value: true,
          },
          {
            label: 'False',
            value: false,
          },
        ],
      };
    },

    methods: {
      log(a, b) {
        console.log('DemoLog: ', a, b);
      },
    },
  };
</script>

<style lang="scss">
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
