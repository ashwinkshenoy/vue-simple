<template>
  <div class="vs-datepicker">
    <label class="vs-datepicker__label">
      <span>{{ label }}</span>
      <span class="vs-datepicker--required" v-if="required"> *</span>
    </label>
    <date-picker
      v-model="selectedDate"
      :type="type"
      :input-class="classes"
      :value-type="valueType"
      :format="format"
      :id="id"
      :disabled="disabled"
      :disabled-date="disabledDates"
      :editable="false"
      :clearable="false"
      prefix-class="vs"
      :range="range"
      :placeholder="placeholder"
      :lang="lang"
      @change="emitChange"
    >
    </date-picker>
  </div>
</template>

<script>
  import DatePicker from 'vue2-datepicker';

  export default {
    name: 'VsDatepicker',

    components: {
      DatePicker,
    },

    props: {
      isError: {
        type: Boolean,
      },
      required: {
        type: Boolean,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        default: 'Date',
      },
      value: {},
      max: {
        type: String,
        default: '',
      },
      min: {
        type: String,
        default: '',
      },
      id: {
        type: String,
        default: '',
      },
      format: {
        type: String,
        default: 'MM-DD-YYYY',
      },
      range: {
        type: Boolean,
        default: false,
      },
      type: {
        type: String,
        default: 'date',
      },
      placeholder: {
        type: String,
      },
      lang: {
        type: Object,
      },
      valueType: {
        type: String,
        default: 'date', // date, format, timestamp, or token like 'YYYY-MM-DD'
      },
    },

    computed: {
      /**
       * Classes added to datpicker
       * @returns {String}
       */
      classes() {
        return `vs-datepicker__input vs-datepicker__date ${this.isError ? 'vs-datepicker__input--error' : ''}`;
      },

      /**
       * set selected date based on v-model/props
       */
      selectedDate: {
        get() {
          return this.value;
        },
        set(value) {
          this.$emit('input', value);
        },
      },
    },

    methods: {
      disabledDates(date) {
        return date < new Date(this.min) || date > new Date(this.max);
      },

      emitChange(value) {
        this.$emit('change', value);
      },

      emitOpen(value) {
        this.$emit('open', value);
      },

      emitClose(value) {
        this.$emit('close', value);
      },
    },
  };
</script>

<style lang="scss">
  $el: '.vs-datepicker';

  $namespace: 'vs';
  $default-color: #555;
  $primary-color: #1f73b7;

  @import 'vue2-datepicker/scss/index.scss';

  #{$el} {
    --primary-color: #1f73b7;
    position: relative;
    width: 100%;

    &__label {
      line-height: 1.42857;
      color: #2f3941;
      font-size: 14px;
      font-weight: 600;
      display: inline-block;
      margin-bottom: 8px;
    }

    &__input {
      border: 1px solid #d8dcde;
      border-radius: 4px;
      width: 100%;
      box-sizing: border-box;
      vertical-align: middle;
      font-family: inherit;
      padding: 0.714286em 0.857143em;
      min-height: 40px;
      line-height: 1.28571;
      font-size: 14px;
      background-color: #ffffff;
      color: rgb(47, 57, 65);
      transition: border-color 0.25s ease-in-out 0s, box-shadow 0.1s ease-in-out 0s,
        background-color 0.25s ease-in-out 0s, color 0.25s ease-in-out 0s;
      outline: none;
      display: flex;
      align-items: center;

      &:hover {
        border-color: var(--primary-color);
      }

      &:focus {
        border-color: var(--primary-color);
        box-shadow: rgb(31 115 183 / 35%) 0px 0px 0px 3px;
      }

      &--error {
        border-color: #cc3340;

        &:hover {
          border-color: #cc3340;
        }

        &:focus {
          border-color: #cc3340;
          box-shadow: rgb(31 115 183 / 35%) 0px 0px 0px 3px;
        }
      }
    }

    &--required {
      color: #cc3340;
    }

    .disabled {
      .vs-datepicker__input {
        background: #f8f9f9;
        color: #c2c8cc;
        cursor: no-drop;
        border-color: #e9ebed;
        user-select: none;
        &:hover {
          border-color: #e9ebed;
        }
      }
    }
  }

  .vs-datepicker-main {
    --vs-datepicker-primary-color: #1f73b7;
    --vs-datepicker-grey: #c2c8cc;
    --vs-datepicker-white: #ffffff;
    --vs-datepicker-black: #333333;
    --vs-datepicker-range-color: rgba(31, 115, 183, 0.08);
    --vs-datepicker-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu,
      Cantarell, Helvetica Neue, Arial, sans-serif;

    color: var(--vs-datepicker-black);
    font-feature-settings: 'kern', 'kern';
    -webkit-font-kerning: normal;
    font-kerning: normal;
    font-family: var(--vs-datepicker-font-family);

    .vs-calendar {
      width: 275px;
      padding: 15px 15px;
    }

    .vs-calendar-header {
      height: 40px;
      line-height: 30px;
    }

    .vs-calendar-header-label {
      line-height: 10px;
    }

    .vs-calendar-content {
      .cell {
        color: var(--vs-datepicker-primary-color);
        &.active {
          color: var(--vs-datepicker-white);
        }
        &.disabled,
        &.not-current-month {
          color: var(--vs-datepicker-grey);
          background-color: transparent;
        }
        &.in-range {
          background-color: var(--vs-datepicker-range-color);
          background-color: rgba(31, 115, 183, 0.08);
        }
      }
      .vs-table {
        th {
          font-size: 14px;
          font-weight: 600;
        }
        &.vs-table-date td,
        &.vs-table-date th {
          font-size: 13px;
        }
      }
    }
    .vs-btn {
      font-feature-settings: 'kern', 'kern';
      -webkit-font-kerning: normal;
      font-kerning: normal;
      font-family: var(--vs-datepicker-font-family);
      color: var(--vs-datepicker-black);
      font-size: 14px;
      font-weight: 600;
    }
  }
</style>
