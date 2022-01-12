<template>
  <nav role="navigation" aria-label="Pagination Navigation">
    <ul class="vs-pagination">
      <li
        :class="[
          { 'vs-pagination--disabled': firstPageSelected() },
          ,
          { 'vs-pagination--no-cursor': !hidePrevNext && firstPageSelected() },
        ]"
      >
        <a
          @click="moveToPage(false)"
          @keyup.enter="moveToPage(false)"
          :tabindex="!hidePrevNext && firstPageSelected() ? -1 : 0"
          aria-label="Previous Page"
        >
          <slot name="leftIcon" v-if="!(hidePrevNext && firstPageSelected())">
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
          </slot>
        </a>
      </li>

      <template v-for="page in renderPages">
        <template v-if="page.isGap">
          <li class="vs-pagination--gap" :key="page.key"><a>...</a></li>
        </template>
        <template v-else>
          <li :key="page.key" :class="{ 'vs-pagination--active': page.current }">
            <a
              @click="setPage(page.value)"
              @keyup.enter="setPage(page.value)"
              tabindex="0"
              :aria-current="page.current ? 'true' : 'false'"
              :aria-label="page.current ? `Current page, Page ${page.value}` : `Goto Page ${page.value}`"
              >{{ page.value }}</a
            >
          </li>
        </template>
      </template>

      <li
        :class="[
          { 'vs-pagination--disabled': lastPageSelected() },
          { 'vs-pagination--no-cursor': !hidePrevNext && lastPageSelected() },
        ]"
      >
        <a
          @click="moveToPage(true)"
          @keyup.enter="moveToPage(true)"
          :tabindex="!hidePrevNext && lastPageSelected() ? -1 : 0"
          aria-label="Next Page"
        >
          <slot name="rightIcon" v-if="!(hidePrevNext && lastPageSelected())">
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
          </slot>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: {
      /**
       * Total no. of pages
       */
      totalPages: {
        type: Number,
      },
      /**
       * Sets the current page. Pages start at 1.
       */
      currentPage: {
        type: Number,
        default: 1,
        validator: value => {
          return value > 0;
        },
      },
      /**
       * Sets the number of pages that appear before and after active page
       * between gap indicator
       */
      pagePadding: {
        type: Number,
        default: 1,
        validator: value => {
          return value > 0;
        },
      },
      /**
       * Positions the leading and trailing gap indicator, based on
       * the current and total pages
       */
      pageGap: {
        type: Number,
        default: 2,
        validator: value => {
          return value > 0;
        },
      },
      /**
       * Hide prev and next button on reaching first or last page
       */
      hidePrevNext: {
        type: Boolean,
        default: false,
      },
    },

    data() {
      return {
        internalPage: this.currentPage,
      };
    },

    computed: {
      renderPages() {
        const pages = [];
        const PADDING = this.pagePadding;
        const GAP = this.pageGap;

        for (let pageIndex = 1; pageIndex <= this.totalPages; pageIndex++) {
          // Always display current, first, and last pages
          if (pageIndex === this.internalPage || pageIndex < GAP || pageIndex > this.totalPages - GAP + 1) {
            pages.push(this.createPage(pageIndex));
            continue;
          }

          let minimum;
          let maximum;

          if (this.internalPage <= GAP + PADDING) {
            minimum = GAP + 1;
            maximum = minimum + PADDING * 2;
          } else if (this.internalPage >= this.totalPages - GAP - PADDING) {
            maximum = this.totalPages - GAP;
            minimum = maximum - PADDING * 2;
          } else {
            minimum = this.internalPage - PADDING;
            maximum = this.internalPage + PADDING;
          }

          // Display padded window of pages
          if (
            (pageIndex >= minimum && pageIndex <= this.internalPage) ||
            (pageIndex >= this.internalPage && pageIndex <= maximum)
          ) {
            pages.push(this.createPage(pageIndex));
            continue;
          }

          // Handle start gap
          if (pageIndex === GAP) {
            if (minimum > GAP + 1 && this.internalPage > GAP + PADDING + 1) {
              pages.push(this.createGap(pageIndex));
            } else {
              pages.push(this.createPage(pageIndex));
            }

            continue;
          }

          // Handle end gap
          if (pageIndex === this.totalPages - GAP + 1) {
            if (maximum < this.totalPages - GAP && this.internalPage < this.totalPages - GAP - PADDING) {
              pages.push(this.createGap(pageIndex));
            } else {
              pages.push(this.createPage(pageIndex));
            }

            continue;
          }
        }
        return pages;
      },
    },

    watch: {
      currentPage(value) {
        this.internalPage = value;
      },
    },

    methods: {
      /**
       * Create object for page and return
       * @param {Number} pageIndex
       * @returns {Object}
       */
      createPage(pageIndex) {
        return {
          key: pageIndex,
          current: this.internalPage === pageIndex,
          value: pageIndex,
        };
      },

      /**
       * Create object for gap in page and return
       * @param {Number} pageIndex
       * @returns {Object}
       */
      createGap(pageIndex) {
        return {
          key: pageIndex,
          isGap: true,
        };
      },

      /**
       * Returns boolean if first page
       * @returns {Boolean}
       */
      firstPageSelected() {
        return this.internalPage === 1;
      },

      /**
       * Returns boolean if last page
       * @returns {Boolean}
       */
      lastPageSelected() {
        return this.internalPage === this.totalPages || this.totalPages === 0;
      },

      /**
       * click handler for left and right arrows
       * @param {Boolean} isNext
       */
      moveToPage(isNext) {
        if (isNext && this.internalPage !== this.totalPages) {
          this.setPage(this.internalPage + 1);
        }
        if (!isNext && this.internalPage !== 1) {
          this.setPage(this.internalPage - 1);
        }
      },

      /**
       * Emit page on change
       * @params {Number}
       */
      setPage(page) {
        this.internalPage = page;
        this.$emit('change', page);
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
    --page-disabled-color: #d8d8d8;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;

    & > li {
      list-style: none;
      &:first-child a {
        margin-left: 0;
      }
      &:last-child a {
        margin-right: 0;
      }

      & > a {
        min-width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        text-decoration: none;
        border-radius: 4px;
        color: var(--page-color);
        font-size: 14px;
        margin-left: 2px;
        margin-right: 2px;
        user-select: none;
        &:hover {
          background-color: var(--page-bg-color);
          color: var(--page-active-color);
        }
        &:focus-visible {
          box-shadow: 0 0 0 2px rgb(31 115 183 / 35%);
          outline: none;
        }
      }

      &#{$el}--active a {
        color: var(--page-active-color);
        background-color: var(--page-bg-color);
        font-weight: 600;
        position: relative;
        z-index: 1;
      }

      &#{$el}--disabled > a {
        color: var(--page-disabled-color) !important;
        user-select: none;
        cursor: default;
        &:hover {
          background: transparent;
        }
      }

      &#{$el}--disabled#{$el}--no-cursor a {
        cursor: not-allowed;
      }

      &#{$el}--gap a {
        cursor: default;
        color: var(--page-color);
        &:hover {
          background: transparent;
        }
      }
    }
  }
</style>
