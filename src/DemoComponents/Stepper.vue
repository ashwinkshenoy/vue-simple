<template>
  <div class="demo">
    <h3>Vertical</h3>
    <div class="box">
      <vs-stepper :steps="steps" :active-index="verticalIndex">
        <template #content>
          <div>
            <div>Describe what happens in this step. Content appears under the current step.</div>
            <div class="stepper-controls">
              <vs-button size="small" :disabled="verticalIndex === 0" @click="verticalIndex--">Back</vs-button>
              <vs-button size="small" :disabled="verticalIndex === steps.length" @click="verticalIndex++"
                >Next</vs-button
              >
            </div>
          </div>
        </template>
      </vs-stepper>
    </div>

    <br />

    <h3>Horizontal</h3>
    <div class="box">
      <vs-stepper orientation="horizontal" :steps="steps" :active-index="horizontalIndex" />
      <div class="stepper-controls">
        <vs-button size="small" :disabled="horizontalIndex === 0" @click="horizontalIndex--">Back</vs-button>
        <vs-button size="small" :disabled="horizontalIndex === steps.length" @click="horizontalIndex++">Next</vs-button>
      </div>
    </div>

    <br />

    <h3>Custom Indicator</h3>
    <div class="box">
      <vs-stepper orientation="horizontal" :steps="steps" :active-index="iconIndex">
        <template #indicator="{ state, index }">
          <span v-if="state === 'complete'">✔</span>
          <span v-else>{{ index + 1 }}</span>
        </template>
      </vs-stepper>
      <div class="stepper-controls">
        <vs-button size="small" :disabled="iconIndex === 0" @click="iconIndex--">Back</vs-button>
        <vs-button size="small" :disabled="iconIndex === steps.length" @click="iconIndex++">Next</vs-button>
      </div>
    </div>
  </div>
</template>

<script>
  import VsStepper from '../../packages/vs-stepper/src/vs-stepper.vue';
  import vsButton from '../../packages/vs-button/src/vs-button.vue';

  export default {
    components: {
      VsStepper,
      vsButton,
    },

    data() {
      return {
        verticalIndex: 1,
        horizontalIndex: 1,
        iconIndex: 2,
        steps: [{ label: 'Account' }, { label: 'Billing' }, { label: 'Review' }, { label: 'Done' }],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .box {
    display: block;
  }

  .stepper-controls {
    display: flex;
    gap: 8px;
    margin-top: 16px;
  }
</style>
