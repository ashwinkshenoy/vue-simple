<template>
  <div class="vs-select" :class="classList">
    <div
      class="vs-select__input-wrapper"
      :class="[
        { 'vs-select--error': isError },
        { 'vs-select--cursor-pointer': !isSearch },
        { 'vs-select--is-open': !isMenuHidden },
        { 'vs-select--disabled': disabled },
      ]"
    >
      <input
        ref="vs-select-box"
        :class="['vs-select__input', { 'vs-select--cursor-pointer': isMenuHidden }]"
        :disabled="disabled"
        @click="!disabled ? setSelectEnv() : null"
        @blur="setSelectClose"
        v-model="inputValue"
        :readonly="isReadonly"
      />
    </div>

    <div class="vs-select__menu-wrapper" v-if="!disabled">
      <ul :aria-hidden="!disabled ? isMenuHidden : true" class="vs-select__menu">
        <slot
          name="options"
          :options="selectOptions"
          :selected="selected"
          :selectedObject="selectedObject"
          :onSelectedItem="onSelectedItem"
        >
          <li class="vs-select__menu-item" @click="onSelectedItem(-1)" v-if="hasEmptyOption">
            -
          </li>
          <li
            v-for="(option, index) in selectOptions"
            :key="'vs-selected-' + index"
            class="vs-select__menu-item"
            :class="[
              { 'vs-select__menu--is-checked': selected === option },
              { 'vs-select__menu--is-checked': isObject && selectedObject.value === option.value },
            ]"
            @click="onSelectedItem(option, index)"
          >
            <span v-if="isObject">{{ option.label }}</span>
            <span v-else>{{ option }}</span>
          </li>
          <li v-if="!selectOptions.length" class="vs-select__menu-item vs-select__menu--no-item">
            No Data Available
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
        default: 'Select',
      },
      // For array of object - pass value
      preselected: {
        type: String,
        required: false,
      },
      // Array or array of object
      // 1) [1,2,3]
      // 2) [{label: 'Jack', value: '1'}, {label: 'Bill', value: '2'}]
      options: {
        type: Array,
        required: true,
      },
      classList: {
        type: Array,
        required: false,
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
    },

    data() {
      return {
        isMenuHidden: true,
        inputValue: this.label,
        selected: null,
        selectedObject: {},
        isObject: false,
        searchTerm: '',
      };
    },

    computed: {
      selectOptions() {
        return (
          this.options.filter(
            (list) => !this.searchTerm || new RegExp(this.searchTerm, 'i').test(this.isObject ? list.label : list),
          ) || ''
        );
      },
      isReadonly() {
        if (this.isSearch && !this.disabled) {
          return false;
        }
        return true;
      },
    },

    created() {
      this.initOptions();
    },

    watch: {
      inputValue(value) {
        if (!this.isMenuHidden) {
          this.searchTerm = value;
        }
      },

      preselected() {
        this.selected = this.preselected;
      },
    },

    methods: {
      initOptions() {
        // If Array of Object
        if (
          this.options.some((value) => {
            return typeof value == 'object';
          })
        ) {
          this.isObject = true;
          this.selected = this.preselected ? this.options.filter((i) => i.value === this.preselected)[0].label : '';
        } else {
          this.isObject = false;
          this.selected = this.preselected;
        }
      },

      onSelectedItem(option) {
        this.searchTerm = '';
        this.inputValue = '';
        this.isMenuHidden = true;
        // If Array of Object
        // 2 diff emits of input/on-select are required
        if (this.isObject) {
          this.selectedObject = this.options.filter((i) => i.value === option.value)[0];
          this.selected = this.selectedObject.label;
          this.$emit('input', this.selectedObject.value);
          this.$emit('on-select', this.selectedObject);
        } else {
          this.selected = this.options.filter((i) => i === option)[0];
          this.$emit('input', this.selected);
          this.$emit('on-select', this.options.indexOf(this.selected));
        }
        this.searchTerm = '';
        this.inputValue = this.selected;
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

      setSelectEnv() {
        if (!this.isMenuHidden && !this.searchTerm) {
          this.isMenuHidden = true;
          this.$refs['vs-select-box'].blur();
          return;
        }
        this.$refs['vs-select-box'].focus();
        this.isMenuHidden = false;
        if (!this.searchTerm & this.isSearch) {
          this.inputValue = '';
        }
      },

      setSelectClose() {
        this.isMenuHidden = true;
        this.$refs['vs-select-box'].blur();
        if (this.selected) {
          this.inputValue = this.selected;
        }
        if (!this.selected) {
          this.inputValue = this.label;
        }
      },
    },
  };
</script>

<style lang="scss">
  $el: '.vs-select';

  #{$el} {
    width: 100%;
    position: relative;

    &--cursor-pointer {
      cursor: pointer;
    }

    &--error #{$el}__input-wrapper {
      border-color: #cc3340;
    }

    &__input-wrapper {
      overflow: hidden;
      position: relative;
      text-align: left;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      transition: border-color 0.25s ease-in-out, box-shadow 0.1s ease-in-out, background-color 0.25s ease-in-out,
        color 0.25s ease-in-out;
      outline: 0;
      border: 1px solid #d8dcde;
      border-radius: 4px;
      background-color: #fff;
      width: 100%;
      min-height: 40px;
      box-sizing: border-box;
      vertical-align: middle;
      line-height: 1.28571;
      color: #2f3941;
      font-family: inherit;
      font-size: 14px;

      &:hover {
        border-color: #5293c7;
      }

      &:not(select):before {
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        width: 40px;
        height: 40px;
        content: '';
      }

      &:not(select):before {
        transition: background-image 0.25s ease-in-out, transform 0.25s ease-in-out, border-color 0.25s ease-in-out,
          box-shadow 0.1s ease-in-out, background-color 0.25s ease-in-out, color 0.25s ease-in-out,
          -webkit-transform 0.25s ease-in-out;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' color='%2368737d'%3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' d='M4 6.5l3.6 3.6c.2.2.5.2.7 0L12 6.5'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 0.85714em center;
      }

      &#{$el}--is-open:before {
        transform: rotate(180deg) translateY(-1px);
      }

      &#{$el}--disabled {
        background: #f8f9f9;
        cursor: no-drop;
        border-color: #e9ebed;
        user-select: none;
        &:before {
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' focusable='false' color='%23c2c8cc'%3E %3Cpath fill='none' stroke='currentColor' stroke-linecap='round' d='M4 6.5l3.6 3.6c.2.2.5.2.7 0L12 6.5'/%3E%3C/svg%3E");
        }
        #{$el}__input {
          cursor: no-drop;
          user-select: none;
          color: #c2c8cc;
        }
      }
    }

    &__input {
      color: #2f3941;
      width: 100%;
      border: none !important;
      padding: 10px 0 10px 15px;
      box-shadow: none !important;
      outline: none !important;
      font-family: inherit;
      background: transparent;
      position: relative;
      z-index: 50;
      &[readonly] {
        cursor: pointer;
      }
    }

    &__menu {
      z-index: 150;
      max-height: 250px;
      overflow: auto;
      display: inline-block;
      position: absolute;
      margin: 0;
      box-sizing: border-box;
      border: 1px solid #d8dcde;
      border-radius: 4px;
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

      &-item {
        display: block;
        position: relative;
        z-index: 0;
        cursor: pointer;
        padding: 10px 32px;
        text-decoration: none;
        line-height: 20px;
        word-wrap: break-word;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        &:hover {
          background-color: #edf7ff;
          text-decoration: none;
        }

        &:first-child {
          margin-top: 8px;
        }

        &:last-child {
          margin-bottom: 8px;
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
      }

      &--no-item {
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
