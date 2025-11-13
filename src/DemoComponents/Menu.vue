<template>
  <div>
    <h3 class="mb-1">Basic</h3>
    <div class="box">
      <vs-menu :items="items" v-model="selectedItem" @item-selected="onItemSelected" class="mr-10"> Menu </vs-menu>
      <vs-menu fill :items="items" v-model="selectedItem" @item-selected="onItemSelected" class="mr-10">
        Fill Menu
      </vs-menu>
      <vs-menu is-round :items="items" v-model="selectedItem" @item-selected="onItemSelected" class="mr-10">
        Round Menu
      </vs-menu>
      <vs-menu
        is-round
        :items="items"
        v-model="selectedItem"
        @item-selected="onItemSelected"
        class="mr-10"
        size="small"
      >
        Small Menu
      </vs-menu>
    </div>

    <h3 class="mb-1">Alignment</h3>
    <div class="box">
      <vs-menu
        :items="items"
        v-model="selectedItem"
        @item-selected="onItemSelected"
        class="mr-10"
        alignment="left"
        position="top"
      >
        Left
      </vs-menu>

      <vs-menu :items="items" v-model="selectedItem" @item-selected="onItemSelected" class="mr-10" alignment="right">
        Right
      </vs-menu>
    </div>

    <h3 class="mb-1">Variants</h3>
    <div class="box">
      <vs-menu
        :items="items"
        v-model="selectedItem"
        variant="primary"
        fill
        @item-selected="onItemSelected"
        class="mr-10"
      >
        Primary
      </vs-menu>
      <vs-menu
        :items="items"
        v-model="selectedItem"
        variant="success"
        fill
        @item-selected="onItemSelected"
        class="mr-10"
      >
        Success
      </vs-menu>
      <!-- <vs-menu :items="items" v-model="selectedItem" variant="light" fill @item-selected="onItemSelected" class="mr-10">
        Light
      </vs-menu> -->
      <vs-menu
        :items="items"
        v-model="selectedItem"
        variant="secondary"
        fill
        @item-selected="onItemSelected"
        class="mr-10"
      >
        Secondary
      </vs-menu>
      <vs-menu
        :items="items"
        v-model="selectedItem"
        variant="danger"
        fill
        @item-selected="onItemSelected"
        class="mr-10"
      >
        Danger
      </vs-menu>
      <vs-menu
        :items="items"
        v-model="selectedItem"
        variant="warning"
        fill
        @item-selected="onItemSelected"
        class="mr-10"
      >
        Warning
      </vs-menu>
    </div>

    <h3 class="mb-1">Menu (without arrow)</h3>
    <div class="box">
      <vs-menu
        :items="items"
        v-model="selectedItem"
        variant="primary"
        fill
        hide-arrow
        @item-selected="onItemSelected"
        class="mr-10"
      >
        Menu
      </vs-menu>
    </div>
  </div>
</template>

<script>
  import VsMenu from '../../packages/vs-menu/src/vs-menu.vue';

  export default {
    name: 'menuDemo',

    components: {
      VsMenu,
    },

    data() {
      return {
        items: [
          { label: 'Item 1', key: 'item_1' },
          { label: 'Item 2', key: 'item_2' },
          { label: 'Item 3', key: 'item_3' },
          { label: 'Item 4', key: 'item_4', disabled: true },
          { label: 'Item 5', key: 'item_5' },
        ],
        selectedItem: '',
      };
    },

    methods: {
      onItemSelected(item) {
        console.info('Selected Item:', item);
      },
    },
  };
</script>
