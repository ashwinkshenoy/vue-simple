<template>
  <div :class="['vs-select', { 'vs-select--compact': isCompact }]">
    <slot>
      <label class="vs-select__label">
        <span>{{ label }}</span>
        <span class="vs-select--required" v-if="required"> *</span>
      </label>
    </slot>
    <div
      class="vs-select__input-wrapper"
      :class="[
        { 'vs-select--error': isError },
        { 'vs-select--cursor-pointer': !isSearch },
        { 'vs-select--is-open': !isMenuHidden },
        { 'vs-select--disabled': disabled },
        { 'vs-select--menu': isMenu },
      ]"
    >
      <input
        ref="vs-select-box"
        :class="['vs-select__input', { 'vs-select--cursor-pointer': isMenuHidden }]"
        :disabled="disabled"
        @click="!disabled ? setSelectEnv() : null"
        @keyup.enter="!disabled ? setSelectEnv() : null"
        @keyup.esc="!disabled ? (isMenuHidden = true) : null"
        v-model="inputValue"
        :readonly="isReadonly"
        role="menu"
        aria-haspopup="true"
        :aria-expanded="!isMenuHidden"
      />
      <div class="vs-select__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
          <path
            fill="currentColor"
            d="M1.646 3.646a.5.5 0 01.638-.057l.07.057L6 7.293l3.646-3.647a.5.5 0 01.638-.057l.07.057a.5.5 0 01.057.638l-.057.07-4 4a.5.5 0 01-.638.057l-.07-.057-4-4a.5.5 0 010-.708z"
          />
        </svg>
      </div>
    </div>

    <div class="vs-select__menu-wrapper" v-if="!disabled">
      <ul
        :class="['vs-select__menu', { 'vs-select__menu--top': isMenuTop }]"
        :aria-hidden="!disabled ? isMenuHidden : true"
      >
        <slot
          name="options"
          :options="selectOptions"
          :selected="selected"
          :selectedObject="selectedObject"
          :onSelectedItem="onSelectedItem"
        >
          <li class="vs-select__menu-item" @click="onSelectedItem(-1)" v-if="hasEmptyOption" role="menuitem">
            -
          </li>
          <li
            v-for="(option, index) in selectOptions"
            :key="'vs-selected-' + index"
            :class="[
              'vs-select__menu-item',
              { 'vs-select__menu--is-checked': !isMenu && selected === option },
              {
                'vs-select__menu--is-checked': !isMenu && isObject && selectedObject.value === option.value,
              },
              { 'vs-select__menu-item--is-disabled': option.disabled },
            ]"
            :aria-selected="(isObject && selectedObject.value === option.value) || selected === option"
            @click="!option.disabled ? onSelectedItem(option, index) : null"
            @keyup.enter="!option.disabled ? onSelectedItem(option, index) : null"
            role="menuitem"
            tabIndex="0"
          >
            <span v-if="isObject">{{ option.label }}</span>
            <span v-else>{{ option }}</span>
          </li>
          <li v-if="!selectOptions.length" class="vs-select__menu-item vs-select__menu--no-item" role="menuitem">
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
        type: String,
        required: false,
      },
      value: {
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
      isMenu: {
        type: Boolean,
        default: false,
      },
      isCompact: {
        type: Boolean,
        default: false,
      },
      emptyItemsText: {
        type: String,
        default: 'No Data Available',
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

      isReadonly() {
        if (this.isSearch && !this.disabled && !this.isMenu) {
          return false;
        }
        return true;
      },
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

      value() {
        this.selected = this.value;
        this.inputValue = this.value;
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
          if (this.preselected) {
            const selectedFilter = this.options.filter(item => item.value === this.preselected);
            if (selectedFilter.length > 0) {
              this.selectedObject = selectedFilter[0];
              this.selected = this.selectedObject.value;
              this.inputValue = this.selectedObject.label;
              return;
            }
          }
          if (this.value) {
            // const valueObj = this.options.filter((i) => this.value.find((item) => i.value === item))[0];
            const selectedFilter = this.options.filter(item => item.value === this.value);
            if (selectedFilter.length > 0) {
              this.selectedObject = selectedFilter[0];
              this.selected = this.selectedObject.value;
              this.inputValue = this.selectedObject.label;
            }
          }
        } else {
          this.isObject = false;
          this.selected = '';
          if (this.preselected) {
            this.selected = this.inputValue = this.preselected;
            return;
          }
          if (this.value) {
            this.selected = this.inputValue = this.value;
          }
        }
      },

      onSelectedItem(option) {
        this.searchTerm = '';
        this.inputValue = '';
        this.isMenuHidden = true;
        // If Array of Object
        // 2 diff emits of input/on-select are required
        if (this.isObject) {
          this.selectedObject = this.options.filter(i => i.value === option.value)[0];
          this.selected = this.selectedObject.label;
          this.$emit('input', this.selectedObject.value);
          this.$emit('on-select', this.selectedObject.value);
        } else {
          this.selected = this.options.filter(i => i === option)[0];
          this.$emit('input', this.selected);
          this.$emit('on-select', this.options.indexOf(this.selected), this.selected);
        }
        this.searchTerm = '';
        this.inputValue = this.selected;
      },

      searchSelectList() {
        this.searchTerm = this.selected;
      },

      setInnerText(value) {
        this.inputValue = value;
      },

      handleScroll() {
        if (window.innerHeight - this.$refs['vs-select-box'].getBoundingClientRect().bottom < 250) {
          this.isMenuTop = true;
        } else {
          this.isMenuTop = false;
        }
      },

      setSelectEnv() {
        if (!this.isMenuHidden && !this.searchTerm) {
          this.isMenuHidden = true;
          this.$refs['vs-select-box'].blur();
          return;
        }
        this.$refs['vs-select-box'].focus();
        this.isMenuHidden = false;
        if (!this.searchTerm && this.isSearch && !this.isMenu) {
          this.inputValue = '';
        }
      },

      setSelectClose() {
        this.isMenuHidden = true;
        this.$refs['vs-select-box'].blur();
        if (this.selected && !this.isObject) {
          this.inputValue = this.selected;
        }
        if (this.selected && this.isObject) {
          this.inputValue = this.selectedObject.label;
        }
        if (!this.selected) {
          this.inputValue = this.placeholder;
        }
      },
    },
  };
</script>

<style lang="scss">
  $el: '.vs-select';

  #{$el} {
    --vs-select-color: #1f73b7;
    --vs-select-bg: #ffffff;
    --vs-select-border: #d8dcde;
    --vs-select-border-hover: #5293c7;
    --vs-select-hover: #edf7ff;
    --vs-select-error: #cc3340;
    --vs-select-icon: #68737d;
    --vs-select-border-radius: 4px;
    width: 100%;
    position: relative;

    #{$el}__input-wrapper:hover {
      border-color: var(--vs-select-border-hover);
    }

    #{$el}__input-wrapper:focus,
    #{$el}__input-wrapper:focus-within {
      border-color: var(--vs-select-color);
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

    &--cursor-pointer {
      cursor: pointer;
    }

    &--error #{$el}__input-wrapper {
      border-color: var(--vs-select-error);
    }

    &--compact {
      #{$el}__input-wrapper {
        min-height: 32px;
        max-height: 32px;
      }
      #{$el}__input {
        padding: 7px 37px 7px 11px;
      }
      #{$el}__menu--top {
        bottom: 32px;
      }
    }

    &--required {
      color: #cc3340;
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

      &#{$el}--is-open #{$el}__icon svg {
        transform: rotate(180deg);
      }

      &#{$el}--menu {
        border-color: var(--vs-select-color);
        #{$el}__input,
        #{$el}__icon {
          color: var(--vs-select-color);
        }
      }

      &#{$el}--disabled {
        background: #f8f9f9;
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

    &__input {
      color: #2f3941;
      width: 77%;
      border: none !important;
      padding: 10px 37px 10px 15px;
      box-shadow: none !important;
      outline: none !important;
      font-family: inherit;
      background: transparent;
      position: relative;
      z-index: 50;
      &:read-only {
        cursor: pointer;
        user-select: none;
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
