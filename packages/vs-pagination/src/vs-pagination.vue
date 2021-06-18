<template>
  <div v-if="pageCount > 1">
    <ul :class="containerClass">
      <li v-if="!(firstPageSelected() && hidePrevNext)" :class="[firstPageSelected() ? disabledClass : '']">
        <a
          @click="prevPage()"
          @keyup.enter="prevPage()"
          :tabindex="firstPageSelected() ? -1 : 0"
          aria-label="Previous Page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            focusable="false"
            role="presentation"
          >
            <path
              fill="currentColor"
              d="M10.39 12.688a.5.5 0 01-.718.69l-.062-.066-4-5a.5.5 0 01-.054-.542l.054-.082 4-5a.5.5 0 01.83.55l-.05.074L6.641 8l3.75 4.688z"
            ></path>
          </svg>
        </a>
      </li>

      <li
        v-for="(page, index) in pages"
        :key="'page-' + index"
        :class="[page.selected ? activeClass : '', page.disabled ? disabledClass : '']"
      >
        <a v-if="page.breakView" :class="[breakViewLinkClass]" tabindex="-1">
          <slot name="breakViewContent">{{ breakViewText }}</slot>
        </a>
        <a v-else-if="page.disabled" tabindex="0">
          {{ page.content }}
        </a>
        <a
          v-else
          @click="handlePageSelected(page.index + 1)"
          @keyup.enter="handlePageSelected(page.index + 1)"
          tabindex="0"
          :aria-current="page.selected ? 'true' : 'false'"
          :aria-label="page.selected ? 'Current page, Page ' + page.content : 'Page ' + page.content"
        >
          {{ page.content }}
        </a>
      </li>

      <li v-if="!(lastPageSelected() && hidePrevNext)" :class="[lastPageSelected() ? disabledClass : '']">
        <a @click="nextPage()" @keyup.enter="nextPage()" :tabindex="lastPageSelected() ? -1 : 0" aria-label="Next Page">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            focusable="false"
            role="presentation"
          >
            <path
              fill="currentColor"
              d="M5.61 3.312a.5.5 0 01.718-.69l.062.066 4 5a.5.5 0 01.054.542l-.054.082-4 5a.5.5 0 01-.83-.55l.05-.074L9.359 8l-3.75-4.688z"
            ></path>
          </svg>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Number,
      },
      pageCount: {
        type: Number,
        required: true,
      },
      forcePage: {
        type: Number,
      },
      pageRange: {
        type: Number,
        default: 5,
      },
      marginPages: {
        type: Number,
        default: 1,
      },
      breakViewText: {
        type: String,
        default: '…',
      },
      containerClass: {
        type: String,
        default: 'vs-pagination',
      },
      breakViewLinkClass: {
        type: String,
        default: 'break-view',
      },
      activeClass: {
        type: String,
        default: 'active',
      },
      disabledClass: {
        type: String,
        default: 'disabled',
      },
      hidePrevNext: {
        type: Boolean,
        default: false,
      },
    },

    beforeUpdate() {
      if (this.forcePage === undefined) return;
      if (this.forcePage !== this.selected) {
        this.selected = this.forcePage;
      }
    },

    computed: {
      selected: {
        get() {
          return this.value || this.innerValue;
        },
        set(newValue) {
          this.innerValue = newValue;
        },
      },

      /**
       * Set pages object
       * @returns {Object} items
       */
      pages() {
        let items = {};
        if (this.pageCount <= this.pageRange) {
          for (let index = 0; index < this.pageCount; index++) {
            let page = {
              index: index,
              content: index + 1,
              selected: index === this.selected - 1,
            };
            items[index] = page;
          }
        } else {
          const setPageItem = index => {
            const page = {
              index: index,
              content: index + 1,
              selected: index === this.selected - 1,
            };
            items[index] = page;
          };
          const setBreakView = index => {
            const breakView = {
              disabled: true,
              breakView: true,
            };
            items[index] = breakView;
          };
          // 1st - loop thru low end of margin pages
          for (let i = 0; i < this.marginPages; i++) {
            setPageItem(i);
          }
          // 2nd - loop thru selected range
          const halfPageRange = Math.floor(this.pageRange / 2);
          let selectedRangeLow = 0;
          if (this.selected - halfPageRange > 0) {
            selectedRangeLow = this.selected - 1 - halfPageRange;
          }
          let selectedRangeHigh = selectedRangeLow + this.pageRange - 1;
          if (selectedRangeHigh >= this.pageCount) {
            selectedRangeHigh = this.pageCount - 1;
            selectedRangeLow = selectedRangeHigh - this.pageRange + 1;
          }
          for (let i = selectedRangeLow; i <= selectedRangeHigh && i <= this.pageCount - 1; i++) {
            setPageItem(i);
          }
          // Check if there is breakView in the left of selected range
          if (selectedRangeLow > this.marginPages) {
            setBreakView(selectedRangeLow - 1);
          }
          // Check if there is breakView in the right of selected range
          if (selectedRangeHigh + 1 < this.pageCount - this.marginPages) {
            setBreakView(selectedRangeHigh + 1);
          }
          // 3rd - loop thru high end of margin pages
          for (let i = this.pageCount - 1; i >= this.pageCount - this.marginPages; i--) {
            setPageItem(i);
          }
        }
        return items;
      },
    },

    data() {
      return {
        innerValue: 1,
      };
    },

    methods: {
      /**
       * Set page selected
       * @param {Number} selected
       * @returns
       */
      handlePageSelected(selected) {
        if (this.selected === selected) return;
        this.innerValue = selected;
        this.$emit('input', selected);
        this.$emit('change', selected);
      },

      prevPage() {
        if (this.selected <= 1) return;
        this.handlePageSelected(this.selected - 1);
      },

      nextPage() {
        if (this.selected >= this.pageCount) return;
        this.handlePageSelected(this.selected + 1);
      },

      firstPageSelected() {
        return this.selected === 1;
      },

      lastPageSelected() {
        return this.selected === this.pageCount || this.pageCount === 0;
      },
    },
  };
</script>

<style lang="scss">
  $el: '.vs-pagination';

  #{$el} {
    --page-bg-color: #f0f5fb;
    --page-color: #68737d;
    --page-active-color: #2f3941;
    --page-disabled-color: #cacaca;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    & > li {
      list-style: none;
      &:first-child a {
        margin-left: 0;
      }

      & > a {
        min-width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        text-decoration: none;
        border-radius: 4px;
        color: var(--page-color);
        font-size: 14px;
        margin-left: 4px;
        user-select: none;
        &:hover {
          background-color: var(--page-bg-color);
          color: var(--page-active-color);
        }
        &:focus-visible {
          box-shadow: 0 0 0 2px rgb(31 115 183 / 35%);
        }
      }

      &.active a {
        color: var(--page-active-color);
        background-color: var(--page-bg-color);
        font-weight: 600;
        position: relative;
        z-index: 1;
      }

      &.disabled > a {
        color: var(--page-disabled-color);
        cursor: not-allowed;
        user-select: none;

        &:hover {
          background: transparent;
        }
      }

      &.disabled > a.break-view {
        cursor: default;
        color: var(--page-color);
      }
    }
  }
</style>
