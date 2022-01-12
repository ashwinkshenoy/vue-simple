<template>
  <div>
    <u>Box style & Compact</u>
    <br />
    <button class="vs-button vs-button__primary-fill vs-button--small" @click="setIndex">
      Toggle Accordion
    </button>
    <br />
    <br />
    <br />

    <vs-accordion :active="currentIndex" :is-box="true" :level="4" is-compact>
      <vs-accordion-item @change="log" v-for="(n, index) in [1, 2, 3]" :key="index">
        <!-- This slot will handle the title of the accordion and is the part you click on -->
        <template slot="accordion-trigger">
          <h4>Item {{ n }}</h4>
        </template>

        <!-- Default content -->
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </div>
      </vs-accordion-item>
    </vs-accordion>

    <br />
    <br />
    <br />

    <u>Single bordered style & Individual Expandable</u>
    <br />
    <br />

    <vs-accordion is-expandable>
      <vs-accordion-item @change="log" v-for="(n, index) in [1, 2, 3]" :key="index">
        <!-- This slot will handle the title of the accordion and is the part you click on -->
        <template slot="accordion-trigger">
          <h4>Item {{ n }}</h4>
        </template>

        <!-- Default content -->
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </div>
      </vs-accordion-item>
    </vs-accordion>
  </div>
</template>

<script>
  import VsAccordion from '../../packages/vs-accordion/src/vs-accordion';
  import VsAccordionItem from '../../packages/vs-accordion/src/vs-accordion-item';

  export default {
    name: 'App',

    components: {
      VsAccordion,
      VsAccordionItem,
    },

    data() {
      return {
        currentIndex: 0,
      };
    },

    methods: {
      setIndex() {
        this.currentIndex = this.currentIndex === 1 ? 0 : 1;
      },

      log(e) {
        console.log(e);
      },
    },
  };
</script>

<style lang="scss">
  h4 {
    margin: 0;
  }
</style>
