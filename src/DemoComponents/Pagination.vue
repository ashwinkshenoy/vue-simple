<template>
  <div>
    <!--Pagination-->
    <vs-pagination :page-count="5" @change="changePage"></vs-pagination>
    <!--Pagination-->
    <vs-pagination :page-count="20" v-model="currentPage" @change="changePage"> </vs-pagination>
  </div>
</template>

<script>
  import VsPagination from '../../packages/vs-pagination/src/vs-pagination';

  export default {
    name: 'DemoPagination',

    data() {
      return {
        currentPage: 1,
      };
    },

    components: {
      VsPagination,
    },

    methods: {
      changePage(page) {
        console.log(page);
      },
    },
  };
</script>
