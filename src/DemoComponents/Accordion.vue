<template>
  <div>
    <h3>Box style & Compact</h3>
    <div class="box">
      <button class="btn" @click="setIndex">Toggle Accordion</button>
      <button class="btn" @click="closeAll">Close All</button>
      <br />
      <br />

      <vs-accordion :active="currentIndex" :is-box="true" :level="4" is-compact>
        <vs-accordion-item @change="change" v-for="(n, index) in [1, 2, 3]" :key="index">
          <!-- This slot will handle the title of the accordion and is the part you click on -->
          <template #accordion-trigger>
            <h4>Item {{ n }}</h4>
          </template>

          <!-- Default content -->
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </div>
        </vs-accordion-item>
      </vs-accordion>
    </div>

    <h3>Single bordered style & Individual Expandable</h3>

    <div class="box">
      <vs-accordion is-expandable>
        <vs-accordion-item v-for="(n, index) in [1, 2, 3]" :key="index">
          <!-- This slot will handle the title of the accordion and is the part you click on -->
          <template #accordion-trigger>
            <h4>Item {{ n }}</h4>
          </template>

          <!-- Default content -->
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </div>
        </vs-accordion-item>
      </vs-accordion>
    </div>

    <h3>Custom Non-clickable header</h3>

    <div class="box">
      <vs-accordion :active="currentIndex" :is-box="true" :level="4" is-compact>
        <vs-accordion-item
          @change="change"
          v-for="(n, index) in [1, 2, 3]"
          :key="index"
          @open="log('open')"
          @hide="log('hide')"
        >
          <!-- This slot will handle the title of the accordion and is the part you click on -->
          <template #accordion-trigger>
            <h4>Item {{ n }}</h4>
          </template>

          <template #accordion-non-clickable>
            <button>Non-clickable line</button>
          </template>

          <!-- Default content -->
          <template #default>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </template>
        </vs-accordion-item>
      </vs-accordion>
    </div>
  </div>
</template>

<script>
  import VsAccordion from '../../packages/vs-accordion/src/vs-accordion.vue';
  import VsAccordionItem from '../../packages/vs-accordion/src/vs-accordion-item.vue';

  export default {
    name: 'Accordion',

    components: {
      VsAccordion,
      VsAccordionItem,
    },

    data() {
      return {
        currentIndex: 0,
        currentSingleIndex: -1,
      };
    },

    methods: {
      setIndex() {
        this.currentIndex = this.currentIndex === 1 ? 0 : 1;
      },

      closeAll() {
        this.currentIndex = -1;
      },

      change(e) {
        this.currentIndex = e.index;
      },

      log(e) {
        console.log(e);
      },
    },
  };
</script>
