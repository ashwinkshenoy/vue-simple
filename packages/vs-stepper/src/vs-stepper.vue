<template>
  <ol :class="['vs-stepper', `vs-stepper--${orientation}`]" :aria-label="ariaLabel">
    <li
      v-for="(step, index) in normalizedSteps"
      :key="index"
      :class="['vs-stepper__step', `vs-stepper__step--${step.state}`]"
      :aria-current="step.state === 'current' ? 'step' : null"
    >
      <span class="vs-stepper__indicator" aria-hidden="true">
        <slot name="indicator" :step="step" :index="index" :state="step.state">
          <svg v-if="step.state === 'complete'" class="vs-stepper__check" viewBox="0 0 16 16" focusable="false">
            <path
              d="M3 8.5l3 3 7-7"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <template v-else>{{ index + 1 }}</template>
        </slot>
      </span>
      <span class="vs-stepper__label">{{ step.label }}</span>
      <transition name="vs-stepper-expand">
        <div v-if="$slots.content && step.state === 'current'" class="vs-stepper__content">
          <div class="vs-stepper__content-inner">
            <slot name="content" :step="step" :index="index" :state="step.state" />
          </div>
        </div>
      </transition>
      <span class="vs-stepper__sr-only">
        Step {{ index + 1 }} of {{ normalizedSteps.length
        }}<template v-if="step.state === 'complete'">, completed</template>
      </span>
    </li>
  </ol>
</template>

<script>
  export default {
    name: 'VsStepper',

    props: {
      steps: {
        type: Array,
        required: true,
      },
      activeIndex: {
        type: Number,
        default: 0,
      },
      orientation: {
        type: String,
        default: 'vertical',
        validator: value => ['horizontal', 'vertical'].includes(value),
      },
      ariaLabel: {
        type: String,
        default: 'Progress',
      },
    },

    computed: {
      normalizedSteps() {
        return this.steps.map((step, index) => ({
          ...step,
          state: this.getStepState(index),
        }));
      },
    },

    methods: {
      getStepState(index) {
        if (index < this.activeIndex) {
          return 'complete';
        }
        return index === this.activeIndex ? 'current' : 'upcoming';
      },
    },
  };
</script>

<style lang="scss">
  $el: '.vs-stepper';

  #{$el} {
    --vs-stepper-primary: #1f73b7;
    --vs-stepper-text: #49545c;
    --vs-stepper-text-active: #0d2538;
    --vs-stepper-border: #8fa0b0;
    --vs-stepper-connector: #d8e1e8;
    --vs-stepper-check: #ffffff;
  }

  [data-theme='dark'] #{$el} {
    --vs-stepper-primary: #2694d6;
    --vs-stepper-text: #b8c2cc;
    --vs-stepper-text-active: #ffffff;
    --vs-stepper-border: #5c6d7b;
    --vs-stepper-connector: #31404d;
    --vs-stepper-check: #ffffff;
  }

  // Doubled class so the reset beats the docs site's `.vp-doc ol` margin and padding.
  #{$el}#{$el} {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #{$el} {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 14px;

    &--vertical {
      flex-direction: column;
    }

    &--horizontal {
      flex-direction: row;
      align-items: flex-start;
    }

    &__step {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 0;
      color: var(--vs-stepper-text);
      line-height: 24px;

      &--current {
        color: var(--vs-stepper-text-active);
        font-weight: 600;
      }
    }

    &--vertical &__step {
      position: relative;
      flex-wrap: wrap;
      align-items: flex-start;
      margin: 0;
      padding-bottom: 24px;

      &:last-child {
        padding-bottom: 0;
      }

      &:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 26px;
        bottom: 2px;
        left: 11.5px;
        width: 1px;
        background: var(--vs-stepper-connector);
      }

      .vs-stepper__content {
        flex: 0 0 100%;
        display: grid;
        grid-template-rows: 1fr;
        font-weight: normal;
      }

      .vs-stepper__content-inner {
        min-height: 0;
        overflow: hidden;
        padding: 0 0 0 36px;
      }

      .vs-stepper-expand-enter-active,
      .vs-stepper-expand-leave-active {
        transition:
          grid-template-rows 0.15s ease,
          opacity 0.15s ease;
      }

      .vs-stepper-expand-enter-from,
      .vs-stepper-expand-leave-to {
        grid-template-rows: 0fr;
        opacity: 0;
      }

      @media (prefers-reduced-motion: reduce) {
        .vs-stepper-expand-enter-active,
        .vs-stepper-expand-leave-active {
          transition: none;
        }
      }
    }

    &--horizontal &__step {
      position: relative;
      flex: 1 1 0;
      min-width: 0;
      margin: 0;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      text-align: center;

      &:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 11px;
        left: calc(50% + 20px);
        right: calc(-50% + 20px);
        height: 2px;
        background: var(--vs-stepper-connector);
      }

      &--complete:not(:last-child)::after {
        background: var(--vs-stepper-primary);
      }
    }

    &__indicator {
      display: inline-flex;
      flex: 0 0 24px;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      border: 2px solid var(--vs-stepper-border);
      border-radius: 50%;
      color: var(--vs-stepper-text);
      font-size: 12px;
      font-weight: 600;
      line-height: 1;
    }

    &__step--current &__indicator {
      border-color: var(--vs-stepper-primary);
      color: var(--vs-stepper-primary);
    }

    &__step--complete &__indicator {
      border-color: var(--vs-stepper-primary);
      background: var(--vs-stepper-primary);
      color: var(--vs-stepper-check);
    }

    &__check {
      width: 14px;
      height: 14px;
    }

    &__sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
      white-space: nowrap;
    }
  }
</style>
