<template>
  <span
    ref="anchor"
    class="vs-tooltip"
    :class="{ 'is-open': visible }"
    :data-tooltip-placement="effectivePlacement"
    v-bind="anchorTabindex"
    @pointerenter="onPointerEnter"
    @pointerleave="onPointerLeave"
    @focusin="onFocusIn"
    @focusout="onFocusOut"
  >
    <slot />
  </span>
  <teleport to="body" :disabled="!isClient">
    <transition v-if="isClient" :css="!reducedMotion" name="vs-tooltip-fade" @after-enter="onAfterEnter">
      <div
        v-show="visible"
        :id="tooltipId"
        ref="panel"
        class="vs-tooltip__panel"
        :class="[`vs-tooltip__panel--${effectivePlacement}`, { 'vs-tooltip__panel--no-arrow': !hasArrow }]"
        :style="panelStyle"
        role="tooltip"
        :aria-hidden="visible ? undefined : 'true'"
      >
        <div class="vs-tooltip__inner">
          <slot name="content">
            <span class="vs-tooltip__text">{{ displayTitle }}</span>
          </slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
  /** Monotonic id segment so each instance gets a unique `id` for `aria-describedby` / `role="tooltip"`. */
  let _idSeq = 0;

  /** `querySelector` string used to find the first focusable node inside the anchor for ARIA. */
  const FOCUSABLE_SELECTOR =
    'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  /**
   * Merges `id` into or out of `element`’s `aria-describedby` list without removing other ids.
   * @param {Element | null} element
   * @param {string} id
   * @param {boolean} add
   */
  function mergeDescribedBy(element, id, add) {
    if (!element || !id) {
      return;
    }
    const current = (element.getAttribute('aria-describedby') || '')
      .split(/\s+/)
      .map(s => s.trim())
      .filter(Boolean);
    const idx = current.indexOf(id);
    if (add) {
      if (idx < 0) {
        current.push(id);
        element.setAttribute('aria-describedby', current.join(' '));
      }
    } else if (idx >= 0) {
      current.splice(idx, 1);
      if (current.length) {
        element.setAttribute('aria-describedby', current.join(' '));
      } else {
        element.removeAttribute('aria-describedby');
      }
    }
  }

  export default {
    name: 'VsTooltip',

    props: {
      /** Text shown in the default tooltip body when the `content` slot is not used. */
      title: {
        type: String,
        default: '',
      },
      /** Initial preferred side relative to the trigger; may flip when near the viewport edge. Values: top | bottom | left | right. */
      placement: {
        type: String,
        default: 'top',
        /** @param {string} v */
        validator: v => ['top', 'bottom', 'left', 'right'].indexOf(v) !== -1,
      },
      /** Pixel gap between the anchor bounding box and the panel. */
      offset: {
        type: Number,
        default: 8,
      },
      /** Milliseconds to wait after pointerenter before opening. */
      openDelay: {
        type: Number,
        default: 0,
      },
      /** Milliseconds to wait after pointerleave / focusout before closing. */
      closeDelay: {
        type: Number,
        default: 100,
      },
      /** When true, the Escape key calls `closeImmediate` while the tooltip is open. */
      dismissible: {
        type: Boolean,
        default: true,
      },
      /** Stacking `z-index` for the fixed, teleported panel. */
      zIndex: {
        type: Number,
        default: 1080,
      },
      /** When true, pointer and focus open logic is disabled. */
      disabled: {
        type: Boolean,
        default: false,
      },
      /**
       * Set on the anchor when the default slot has no focusable child (e.g. image wrapper).
       */
      tabindex: {
        type: [String, Number],
        default: null,
      },
      /** When false, the CSS pointer triangle (`::after` / `::before`) is not rendered. */
      hasArrow: {
        type: Boolean,
        default: true,
      },
    },

    data() {
      return {
        isClient: false,
        visible: false,
        openTimer: null,
        closeTimer: null,
        effectivePlacement: this.placement,
        panelStyle: { top: '0', left: '0', zIndex: 1080 },
        focusTarget: null,
        /** True if a focusable child was found (tabindex on anchor not used). */
        focusOnInner: false,
        reducedMotion: false,
        tooltipId: `vs-tooltip-${++_idSeq}`,
        onDocKey: null,
        onScrollResize: null,
        scrollResizeBound: false,
      };
    },

    computed: {
      /**
       * Whether the tooltip can render copy (non-empty `title` or a `content` slot).
       * @returns {boolean}
       */
      hasContent() {
        if (this.$slots.content) {
          return true;
        }
        return !!(this.title && this.title.length);
      },

      /**
       * Label text passed through to the default `content` body.
       * @returns {string}
       */
      displayTitle() {
        return this.title;
      },

      /**
       * When there is no inner focusable child and `tabindex` is set, that value is bound to the anchor
       * (Wrapper around images, etc.); otherwise returns `{}` so the child keeps focus.
       * @returns {Record<string, string | number>}
       */
      anchorTabindex() {
        if (this.focusOnInner) {
          return {};
        }
        if (this.tabindex === null || this.tabindex === undefined) {
          return {};
        }
        return { tabindex: String(this.tabindex) };
      },
    },

    watch: {
      /**
       * Syncs the effective focusable node, `aria-describedby`, scroll/resize capture, and Escape listener
       * when the panel opens or closes.
       * @param {boolean} val
       */
      visible(val) {
        this.$nextTick(() => {
          this.resolveFocusTarget();
          this.$nextTick(() => {
            this.updateAriaDescribedBy(val);
          });
        });
        if (val) {
          this.bindScrollResize();
          this.onDocKey = e => this.onDocumentKey(e);
          if (this.dismissible) {
            document.addEventListener('keydown', this.onDocKey, true);
          }
        } else {
          this.unbindScrollResize();
          if (this.onDocKey) {
            document.removeEventListener('keydown', this.onDocKey, true);
            this.onDocKey = null;
          }
        }
      },

      zIndex: {
        /**
         * Re-fixes the panel if `zIndex` changes while the tooltip is visible.
         */
        handler() {
          if (this.visible) {
            this.updatePosition();
          }
        },
        immediate: false,
      },

      /**
       * Re-runs layout when the `title` string length changes the panel size.
       */
      title() {
        this.$nextTick(() => {
          this.updatePosition();
        });
      },

      /**
       * Re-runs layout when the preferred side changes with the panel open.
       */
      placement() {
        if (this.visible) {
          this.$nextTick(() => this.updatePosition());
        }
      },
    },

    /**
     * Enables the teleport target, motion preference, scroll/resize callback, and first focus pass.
     */
    mounted() {
      this.isClient = typeof document !== 'undefined';
      this.reducedMotion = this.getReducedMotion();
      /** Throttled to `updatePosition` when the tooltip is open. */
      this.onScrollResize = () => {
        if (this.visible) {
          this.updatePosition();
        }
      };
      this.resolveFocusTarget();
    },

    /**
     * Re-finds the focus target when the default slot (trigger) updates.
     */
    updated() {
      this.resolveFocusTarget();
    },

    /**
     * Tears down timers, scroll/resize listeners, Escape handler, and ARIA on destroy.
     */
    beforeUnmount() {
      this.clearTimers();
      this.unbindScrollResize();
      this.updateAriaDescribedBy(false);
      if (this.onDocKey) {
        document.removeEventListener('keydown', this.onDocKey, true);
        this.onDocKey = null;
      }
    },

    methods: {
      /**
       * Whether the user has requested reduced UI motion.
       * @returns {boolean}
       */
      getReducedMotion() {
        if (typeof window === 'undefined' || !window.matchMedia) {
          return false;
        }
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      },

      /**
       * Picks the element that should receive `aria-describedby`: first focusable under the anchor,
       * or the anchor when `tabindex` is set, else the first element child of the anchor.
       * @returns {void}
       */
      resolveFocusTarget() {
        const anchor = this.$refs.anchor;
        if (!anchor) {
          return;
        }
        const inner = anchor.querySelector(FOCUSABLE_SELECTOR);
        if (inner) {
          this.focusTarget = inner;
          this.focusOnInner = true;
          return;
        }
        if (this.tabindex !== null && this.tabindex !== undefined) {
          this.focusTarget = anchor;
          this.focusOnInner = false;
          return;
        }
        this.focusTarget = anchor.firstElementChild || anchor;
        this.focusOnInner = false;
      },

      /**
       * Schedules `open` after `openDelay` (hover / pointer).
       * @returns {void}
       */
      onPointerEnter() {
        if (this.disabled || !this.hasContent) {
          return;
        }
        this.clearCloseTimer();
        this.clearOpenTimer();
        this.openTimer = setTimeout(() => this.open(), this.openDelay);
      },

      /**
       * Schedules close after `closeDelay` when the pointer leaves the anchor.
       * @returns {void}
       */
      onPointerLeave() {
        this.clearOpenTimer();
        this.scheduleClose();
      },

      /**
       * Shows the tooltip immediately for keyboard and assistive-technology focus paths.
       * @returns {void}
       */
      onFocusIn() {
        if (this.disabled || !this.hasContent) {
          return;
        }
        this.clearCloseTimer();
        this.open();
      },

      /**
       * Closes on focus move unless the new focus is still within the anchor subtree.
       * @param {FocusEvent} e
       */
      onFocusOut(e) {
        const anchor = this.$refs.anchor;
        if (anchor && e.relatedTarget && anchor.contains(e.relatedTarget)) {
          return;
        }
        this.scheduleClose();
      },

      /**
       * Document capture listener: closes on Escape when `dismissible` is true.
       * @param {KeyboardEvent} e
       */
      onDocumentKey(e) {
        if (e.key === 'Escape' && this.visible && this.dismissible) {
          e.stopPropagation();
          e.preventDefault();
          this.closeImmediate();
        }
      },

      /**
       * Called after the enter transition: re-measures the panel in case layout/opacity was still settling.
       */
      onAfterEnter() {
        this.$nextTick(() => {
          this.updatePosition();
          requestAnimationFrame(() => {
            this.updatePosition();
          });
        });
      },

      /**
       * Clears the pending `open` timeout from `onPointerEnter`.
       */
      clearOpenTimer() {
        if (this.openTimer) {
          clearTimeout(this.openTimer);
          this.openTimer = null;
        }
      },

      /**
       * Clears the pending `close` timeout from `scheduleClose`.
       */
      clearCloseTimer() {
        if (this.closeTimer) {
          clearTimeout(this.closeTimer);
          this.closeTimer = null;
        }
      },

      /**
       * Clears both open and close timeouts (used on unmount and force-close).
       */
      clearTimers() {
        this.clearOpenTimer();
        this.clearCloseTimer();
      },

      /**
       * Shows the panel, resets placement from props, and runs an initial `updatePosition` pass.
       */
      open() {
        if (this.disabled || !this.hasContent) {
          return;
        }
        this.effectivePlacement = this.placement;
        this.panelStyle = {
          top: '0',
          left: '0',
          zIndex: this.zIndex,
        };
        this.visible = true;
        this.$nextTick(() => {
          this.updatePosition();
          requestAnimationFrame(() => {
            this.updatePosition();
          });
        });
      },

      /**
       * Queues `closeImmediate` after `closeDelay` ms.
       */
      scheduleClose() {
        this.clearOpenTimer();
        this.closeTimer = setTimeout(() => this.closeImmediate(), this.closeDelay);
      },

      /**
       * Synchronously hides the tooltip and clears both timers.
       */
      closeImmediate() {
        this.clearTimers();
        this.visible = false;
      },

      /**
       * Toggles the tooltip `id` on the resolved focus target’s `aria-describedby`.
       * @param {boolean} show
       */
      updateAriaDescribedBy(show) {
        const el = this.focusTarget;
        if (!el) {
          return;
        }
        mergeDescribedBy(el, this.tooltipId, show);
      },

      /**
       * Sets `panelStyle` `top` / `left` (fixed) and may flip `effectivePlacement` to stay in the viewport.
       */
      updatePosition() {
        if (typeof window === 'undefined' || !this.visible) {
          return;
        }
        const anchor = this.$refs.anchor;
        const panel = this.$refs.panel;
        if (!anchor || !panel) {
          return;
        }
        const ar = anchor.getBoundingClientRect();
        const pr = panel.getBoundingClientRect();
        const w = pr.width;
        const h = pr.height;
        const gap = this.offset;
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const padding = 8;

        /**
         * Anchor-relative coordinates for a given placement label, using current `ar` and measured panel size.
         * @param {string} p
         * @returns {{ x: number, y: number, p: string }}
         */
        const place = p => {
          let x;
          let y;
          if (p === 'top') {
            x = ar.left + ar.width / 2 - w / 2;
            y = ar.top - gap - h;
          } else if (p === 'bottom') {
            x = ar.left + ar.width / 2 - w / 2;
            y = ar.bottom + gap;
          } else if (p === 'left') {
            x = ar.left - gap - w;
            y = ar.top + ar.height / 2 - h / 2;
          } else {
            x = ar.right + gap;
            y = ar.top + ar.height / 2 - h / 2;
          }
          return { x, y, p };
        };

        let { x, y, p } = place(this.placement);
        this.effectivePlacement = p;

        if (p === 'top' && y < padding) {
          const b = place('bottom');
          x = b.x;
          y = b.y;
          this.effectivePlacement = 'bottom';
        } else if (p === 'bottom' && y + h > vh - padding) {
          const t = place('top');
          x = t.x;
          y = t.y;
          this.effectivePlacement = 'top';
        } else if (p === 'left' && x < padding) {
          const r = place('right');
          x = r.x;
          y = r.y;
          this.effectivePlacement = 'right';
        } else if (p === 'right' && x + w > vw - padding) {
          const l = place('left');
          x = l.x;
          y = l.y;
          this.effectivePlacement = 'left';
        }

        x = Math.max(padding, Math.min(x, vw - w - padding));
        y = Math.max(padding, Math.min(y, vh - h - padding));

        this.panelStyle = {
          top: `${y}px`,
          left: `${x}px`,
          zIndex: this.zIndex,
        };
      },

      /**
       * Subscribes to `scroll` and `resize` in capture mode while the tooltip is open (idempotent).
       */
      bindScrollResize() {
        if (this.scrollResizeBound) {
          return;
        }
        this.scrollResizeBound = true;
        window.addEventListener('scroll', this.onScrollResize, true);
        window.addEventListener('resize', this.onScrollResize, true);
      },

      /**
       * Removes the listeners installed by `bindScrollResize` (idempotent).
       */
      unbindScrollResize() {
        if (!this.scrollResizeBound) {
          return;
        }
        this.scrollResizeBound = false;
        window.removeEventListener('scroll', this.onScrollResize, true);
        window.removeEventListener('resize', this.onScrollResize, true);
      },
    },
  };
</script>

<style lang="scss">
  $el: '.vs-tooltip';

  // DRY: same tokens on .vs-tooltip and .vs-tooltip__panel (panel is teleported; both need definitions)
  @mixin vs-tooltip-design-tokens {
    --vs-tooltip-arrow: 6px;
    --vs-tooltip-radius: 4px;
    --vs-tooltip-caret-seam: 2px;
    --vs-tooltip-bg-light: #1d2328;
    --vs-tooltip-bg-dark: #1d2328;
    --vs-tooltip-padding-light: 0.5rem 0.75rem;
    --vs-tooltip-padding-dark: 0.5rem 0.75rem;
    --vs-tooltip-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    --vs-tooltip-fg: #fff;
    --vs-tooltip-font-size: 13px;
    --vs-tooltip-line-height: 1.3;
    --vs-tooltip-max-w: 20rem;
    --vs-tooltip-content-max: calc(100vw - 1rem);
  }

  #{$el} {
    position: relative;
    display: inline-flex;
    align-items: center;
    max-width: 100%;
    box-sizing: border-box;

    &__panel {
      @include vs-tooltip-design-tokens;

      // Resolved for this surface (arrows use --vs-tooltip-bg)
      --vs-tooltip-bg: var(--vs-tooltip-bg-light, #1d2328);
      --vs-tooltip-padding: var(--vs-tooltip-padding-light, 0.5rem 0.75rem);

      position: fixed;
      box-sizing: border-box;
      max-width: min(var(--vs-tooltip-max-w, 20rem), var(--vs-tooltip-content-max, calc(100vw - 1rem)));
      padding: var(--vs-tooltip-padding);
      font-size: var(--vs-tooltip-font-size);
      line-height: var(--vs-tooltip-line-height, 1.3);
      text-align: left;
      color: var(--vs-tooltip-fg, #fff);
      background: var(--vs-tooltip-bg);
      border-radius: var(--vs-tooltip-radius, 4px);
      box-shadow: var(--vs-tooltip-shadow, 0 2px 8px rgba(0, 0, 0, 0.2));
      pointer-events: none;
      z-index: 1080;
      overflow: visible;

      &::after {
        content: '';
        position: absolute;
        z-index: 0;
        width: 0;
        height: 0;
        background: transparent;
      }

      // Tooltip above the anchor: arrow on bottom edge, points down
      &--top::after {
        left: 50%;
        top: 100%;
        margin-top: -1px; // connect to rounded body
        transform: translateX(-50%);
        border-left: var(--vs-tooltip-arrow) solid transparent;
        border-right: var(--vs-tooltip-arrow) solid transparent;
        border-top: var(--vs-tooltip-arrow) solid var(--vs-tooltip-bg);
        border-bottom: 0;
      }

      // Tooltip below the anchor: arrow on top, points up
      &--bottom::after {
        left: 50%;
        bottom: 100%;
        margin-bottom: -1px;
        transform: translateX(-50%);
        border-left: var(--vs-tooltip-arrow) solid transparent;
        border-right: var(--vs-tooltip-arrow) solid transparent;
        border-bottom: var(--vs-tooltip-arrow) solid var(--vs-tooltip-bg);
        border-top: 0;
      }

      // Tooltip to the left of the anchor: arrow on the right, points right
      &--left::after {
        right: 0;
        top: 50%;
        transform: translate(calc(100% - var(--vs-tooltip-caret-seam, 2px)), -50%);
        border-top: var(--vs-tooltip-arrow) solid transparent;
        border-bottom: var(--vs-tooltip-arrow) solid transparent;
        border-left: var(--vs-tooltip-arrow) solid var(--vs-tooltip-bg);
        border-right: none;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }

      // Tooltip to the right of the anchor: arrow on the left, points left
      &--right::after {
        left: 0;
        top: 50%;
        transform: translate(calc(-100% + var(--vs-tooltip-caret-seam, 2px)), -50%);
        border-top: var(--vs-tooltip-arrow) solid transparent;
        border-bottom: var(--vs-tooltip-arrow) solid transparent;
        border-right: var(--vs-tooltip-arrow) solid var(--vs-tooltip-bg);
        border-left: none;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }

      // `hasArrow` false: hide carets (including any future ::before, e.g. dark theme border ring)
      &--no-arrow {
        &::after,
        &::before {
          display: none;
          content: none;
        }
      }
    }

    &__inner {
      word-wrap: break-word;
    }

    &__text {
      display: block;
    }
  }

  // Dark app theme: switch resolved bg + padding
  html[data-theme='dark'] #{$el}__panel,
  html.dark #{$el}__panel,
  [data-theme='dark'] #{$el}__panel {
    --vs-tooltip-bg: var(--vs-tooltip-bg-dark, var(--vs-tooltip-bg-light, #1d2328));
    --vs-tooltip-padding: var(--vs-tooltip-padding-dark, var(--vs-tooltip-padding-light, 0.5rem 0.75rem));
  }

  .vs-tooltip-fade-enter-active,
  .vs-tooltip-fade-leave-active {
    transition: opacity 0.15s ease;
  }
  @media (prefers-reduced-motion: reduce) {
    .vs-tooltip-fade-enter-active,
    .vs-tooltip-fade-leave-active {
      transition: none;
    }
  }
  .vs-tooltip-fade-enter-from,
  .vs-tooltip-fade-leave-to {
    opacity: 0;
  }
  .vs-tooltip-fade-enter-to,
  .vs-tooltip-fade-leave-from {
    opacity: 1;
  }
</style>
