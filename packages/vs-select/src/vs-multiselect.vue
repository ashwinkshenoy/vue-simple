<template>
  <div :class="['vs-multiselect', { 'vs-multiselect--compact': isCompact }]">
    <slot>
      <label class="vs-multiselect__label">
        <span>{{ label }}</span>
        <span class="vs-multiselect--required" v-if="required"> *</span>
      </label>
    </slot>

    <div
      class="vs-multiselect__select-wrapper"
      :class="[
        { 'vs-multiselect--error': isError },
        { 'vs-multiselect--is-open': !isMenuHidden },
        { 'vs-multiselect--disabled': disabled },
      ]"
      @click="!disabled ? setSelectEnv() : null"
      @keydown.space.prevent="!disabled ? setSelectEnv() : null"
      @keyup.esc="!disabled ? (isMenuHidden = true) : null"
      role="menu"
      ref="vs-multiselect"
      aria-haspopup="true"
      tabindex="0"
      autofocus="true"
      :aria-expanded="!isMenuHidden"
    >
      <span>
        {{ selectedItems ? selectedItems : placeholder }}
      </span>
      <div class="vs-multiselect__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
          <path
            fill="currentColor"
            d="M1.646 3.646a.5.5 0 01.638-.057l.07.057L6 7.293l3.646-3.647a.5.5 0 01.638-.057l.07.057a.5.5 0 01.057.638l-.057.07-4 4a.5.5 0 01-.638.057l-.07-.057-4-4a.5.5 0 010-.708z"
          />
        </svg>
      </div>
    </div>

    <div class="vs-multiselect__menu-wrapper" v-if="!disabled">
      <ul
        :aria-hidden="!disabled ? isMenuHidden : true"
        :class="[
          'vs-multiselect__menu',
          { 'vs-multiselect__menu--top': isMenuTop },
          { 'vs-multiselect__no-search': !isSearch },
        ]"
      >
        <slot
          name="options"
          :options="selectOptions"
          :selected="selected"
          :selectedObject="selectedArrayObject"
          :onSelectedItem="onSelectedItem"
        >
          <li class="vs-multiselect__menu-item" @click="onSelectedItem(-1)" v-if="hasEmptyOption">
            -
          </li>
          <li class="vs-multiselect__menu-item vs-multiselect__input-wrapper" v-show="isSearch" role="menuitem">
            <input
              ref="vs-multiselect-box"
              class="vs-multiselect__input"
              :disabled="disabled"
              v-model="inputValue"
              placeholder="Search..."
            />
          </li>
          <li
            v-for="(option, index) in selectOptions"
            :key="'vs-selected-' + index"
            class="vs-multiselect__menu-item"
            :class="[
              { 'vs-multiselect__menu--is-checked': setSelected(option) },
              { 'vs-multiselect__menu-item--is-disabled': option.disabled },
            ]"
            @click="!option.disabled ? onSelectedItem(option, index) : null"
            @keydown.space.prevent="!option.disabled ? onSelectedItem(option, index) : null"
            @keyup.enter="!option.disabled ? onSelectedItem(option, index) : null"
            @keyup.esc="!disabled ? (isMenuHidden = true) : null"
            @blur="index === selectOptions.length - 1 ? (isMenuHidden = true) : null"
            :aria-selected="setSelected(option)"
            role="menuitem"
            tabIndex="0"
          >
            <span v-if="isObject">{{ option.label }}</span>
            <span v-else>{{ option }}</span>
          </li>
          <li
            v-if="!selectOptions.length"
            class="vs-multiselect__menu-item vs-multiselect__menu--no-item"
            role="menuitem"
          >
            {{ emptyItemsText }}
          </li>
        </slot>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        required: false,
      },
      required: {
        type: Boolean,
      },
      placeholder: {
        type: String,
        required: false,
        default: 'Select',
      },
      // For array of object - pass value
      preselected: {
        type: Array,
        required: false,
      },
      value: {},
      // Array or array of object
      // 1) [1,2,3]
      // 2) [{label: 'Jack', value: '1'}, {label: 'Bill', value: '2'}]
      options: {
        type: Array,
        required: true,
      },
      hasEmptyOption: {
        type: Boolean,
        required: false,
      },
      isError: {
        type: Boolean,
        requied: false,
      },
      isSearch: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      emptyItemsText: {
        type: String,
        default: 'No Data Available',
      },
      isCompact: {
        type: Boolean,
        default: false,
      },
    },

    data() {
      return {
        isMenuHidden: true,
        inputValue: this.placeholder,
        selected: null,
        selectedObject: {},
        isObject: false,
        searchTerm: '',
        selectedArrayObject: [],
        isMenuTop: false,
      };
    },

    computed: {
      selectOptions() {
        return (
          this.options.filter(
            list => !this.searchTerm || new RegExp(this.searchTerm, 'i').test(this.isObject ? list.label : list),
          ) || ''
        );
      },

      selectedItems() {
        const items = this.selectedArrayObject;
        if (!this.isObject) {
          if (items.length > 2) {
            return `${items[0]}, ${items[1]}, and ${items.length - 2} more`;
          }
          return this.selectedArrayObject.map(list => list).join(', ');
        }
        if (items.length > 2) {
          return `${items[0].label}, ${items[1].label}, and ${items.length - 2} more`;
        }
        return this.selectedArrayObject.map(list => list.label).join(', ');
      },
    },

    watch: {
      inputValue(value) {
        if (!this.isMenuHidden) {
          this.searchTerm = value;
        }
      },

      value(value) {
        this.selectedArrayObject = value;
      },

      options: {
        handler: 'initOptions',
        immediate: false,
      },
    },

    created() {
      this.initOptions();
    },

    mounted() {
      if (window) {
        window.addEventListener('click', e => {
          if (!this.$el.contains(e.target)) {
            this.isMenuHidden = true;
          }
        });
        this.handleScroll();
        window.addEventListener('scroll', this.handleScroll);
      }
    },

    destroyed() {
      if (window) {
        window.removeEventListener('scroll', this.handleScroll);
      }
    },

    methods: {
      initOptions() {
        // If Array of Object
        if (
          this.options.some(value => {
            return typeof value == 'object';
          })
        ) {
          this.isObject = true;
          // Set preselected
          this.selectedArrayObject = this.options.filter(
            ({ value: id1 }) => this.preselected && this.preselected.some(id2 => id2 === id1),
          );
        } else {
          this.isObject = false;
          this.selected = this.preselected;
        }
      },

      setSelected(option) {
        if (this.isObject) {
          return this.selectedArrayObject.filter(list => list.value === option.value).length > 0;
        }
        return this.selectedArrayObject.filter(list => list === option).length > 0;
      },

      onSelectedItem(option) {
        this.searchTerm = '';
        this.inputValue = '';
        this.isMenuHidden = false;
        // If Array of Object
        // 2 diff emits of input/on-select are required
        if (this.isObject) {
          const isContains = this.containsObject(this.selectedArrayObject, option);
          if (!isContains) {
            this.selectedArrayObject.push(option);
          } else {
            this.selectedArrayObject = this.selectedArrayObject.filter(i => i.value !== option.value);
          }
        } else {
          const isContains = this.selectedArrayObject.filter(i => option.includes(i)).length > 0;
          if (!isContains) {
            this.selectedArrayObject.push(option);
          } else {
            this.selectedArrayObject = this.selectedArrayObject.filter(i => i !== option);
          }
        }
        this.$emit('input', this.selectedArrayObject);
        this.$emit('on-select', this.selectedArrayObject);
        this.searchTerm = '';
        this.inputValue = this.selected;
      },

      containsObject(mainObject, selectedOption) {
        return mainObject.some(list => list.value === selectedOption.value);
      },

      searchSelectList() {
        this.searchTerm = this.selected;
      },

      isMenu() {
        this.isMenuHidden = !this.isMenuHidden;
      },

      setInnerText(value) {
        this.inputValue = value;
      },

      handleScroll() {
        if (window.innerHeight - this.$refs['vs-multiselect'].getBoundingClientRect().bottom < 250) {
          this.isMenuTop = true;
        } else {
          this.isMenuTop = false;
        }
      },

      setSelectEnv() {
        if (!this.isMenuHidden) {
          this.isMenuHidden = true;
          this.$refs['vs-multiselect-box'].blur();
          return;
        }
        this.isMenuHidden = false;
        this.$nextTick(() => this.$refs['vs-multiselect-box'].focus());
        if (!this.selected) {
          this.inputValue = '';
        }
      },

      setSelectClose() {
        this.isMenuHidden = true;
        this.$refs['vs-multiselect-box'].blur();
        if (this.selectedArrayObject.length > 0) {
          this.inputValue = this.selectedArrayObject;
        }
        if (!this.selectedArrayObject <= 0) {
          this.inputValue = this.label;
        }
      },
    },
  };
</script>

<style lang="scss">
  $el: '.vs-multiselect';

  #{$el} {
    --vs-select-bg: #ffffff;
    --vs-select-border: #d8dcde;
    --vs-select-border-hover: #5293c7;
    --vs-select-hover: #edf7ff;
    --vs-select-error: #cc3340;
    --vs-select-icon: #68737d;
    --vs-select-border-radius: 4px;
    width: 100%;
    position: relative;

    &__select-wrapper:hover {
      border-color: var(--vs-select-border-hover);
    }

    &__select-wrapper:focus,
    &__select-wrapper:focus-within {
      border-color: var(--vs-select-border-hover);
      box-shadow: rgb(31 115 183 / 35%) 0px 0px 0px 3px;
    }

    &__label {
      line-height: 1.42857;
      color: #2f3941;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 8px;
      display: inline-block;
    }

    &__input-wrapper:hover,
    &__input-wrapper:focus,
    &__input-wrapper:focus-within {
      background-color: transparent !important;
    }

    &--compact {
      #{$el}__select-wrapper {
        min-height: 32px;

        span {
          padding: 7px 37px 7px 11px;
        }
      }
      #{$el}__menu--top {
        bottom: 32px;
      }
    }

    &--required {
      color: #cc3340;
    }

    &__input {
      width: 85%;
      border: none !important;
      padding: 0.71429em 1.14286em;
      box-shadow: none !important;
      outline: none !important;
      font-family: inherit;
      background: transparent;
    }

    &__select-wrapper {
      display: grid;
      align-items: center;
      cursor: pointer;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      position: relative;
      text-align: left;
      transition: border-color 0.25s ease-in-out, box-shadow 0.1s ease-in-out, background-color 0.25s ease-in-out,
        color 0.25s ease-in-out;
      outline: 0;
      border: 1px solid var(--vs-select-border);
      border-radius: var(--vs-select-border-radius);
      background-color: var(--vs-select-bg);
      width: 100%;
      min-height: 40px;
      box-sizing: border-box;
      vertical-align: middle;
      line-height: 1.28571;
      color: #2f3941;
      font-family: inherit;
      font-size: 14px;

      &#{$el}--error {
        border-color: var(--vs-select-error) !important;
      }

      #{$el}__icon {
        position: absolute;
        top: 58%;
        right: 14px;
        cursor: pointer;
        transform: translateY(-50%);
        color: var(--vs-select-icon);
        svg {
          transition: 0.17s all linear;
          width: 12px;
          height: 12px;
        }
      }

      span {
        padding: 10px 40px 10px 15px;
      }

      &#{$el}--is-open {
        border-color: var(--vs-select-border-hover);
        box-shadow: rgb(31 115 183 / 35%) 0px 0px 0px 3px;
        &:before {
          transform: rotate(180deg) translateY(-1px);
        }
      }

      &#{$el}--disabled {
        background: #f8f9f9;
        color: #c2c8cc;
        cursor: no-drop;
        border-color: #e9ebed;
        user-select: none;
        &:hover {
          border-color: #e9ebed;
        }
        #{$el}__input,
        #{$el}__icon {
          cursor: no-drop;
          user-select: none;
          color: #c2c8cc;
        }
      }
    }

    &__no-search li:nth-child(2) {
      margin-top: 4px;
    }

    &__menu {
      z-index: 150;
      max-height: 250px;
      overflow-x: hidden;
      overflow-y: auto;
      display: inline-block;
      position: absolute;
      margin: 0;
      box-sizing: border-box;
      border: 1px solid #d8dcde;
      border-radius: var(--vs-select-border-radius);
      box-shadow: 0 10px 20px 0 rgb(4 68 77 / 15%);
      background-color: #fff;
      cursor: default;
      padding: 0;
      min-width: 180px;
      text-align: left;
      white-space: normal;
      font-size: 14px;
      font-weight: 400;
      width: 100%;
      left: 0;

      &--top {
        bottom: 40px;
        box-shadow: 0 -2px 20px 0 rgb(4 68 77 / 15%);
      }

      &-item {
        display: block;
        position: relative;
        z-index: 0;
        cursor: pointer;
        padding: 8px 36px;
        text-decoration: none;
        line-height: 20px;
        word-wrap: break-word;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        &:hover,
        &:focus-within {
          background-color: var(--vs-select-hover);
          text-decoration: none;
        }

        &:focus {
          outline: none;
        }

        &:first-child {
          margin-top: 4px;
          padding: 0;
        }

        &:last-child {
          margin-bottom: 4px;
        }

        &:before {
          position: absolute;
          top: 0;
          left: 0;
          -webkit-transition: opacity 0.1s ease-in-out;
          transition: opacity 0.1s ease-in-out;
          opacity: 0;
          background: no-repeat 50%/16px
            url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' color='%231f73b7'%3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' d='M1 9l4 4L15 3'/%3E%3C/svg%3E");
          width: 32px;
          height: 40px;
          content: '';
        }

        &--is-disabled {
          color: #c2c8cc;
          cursor: no-drop;
          &:hover {
            background-color: transparent;
          }
        }
      }

      &--no-item {
        margin-bottom: 8px;
        padding: 10px;
        text-align: center;
      }
    }

    #{$el}__menu--is-checked:before,
    #{$el}__menu-item[aria-checked='true']:before {
      opacity: 1;
    }

    #{$el}__menu[aria-hidden='true'] {
      display: inline-block;
      transition: opacity 0.2s ease-in-out, visibility 0.2s linear 0s;
      visibility: hidden;
      opacity: 0;
    }
  }
</style>
