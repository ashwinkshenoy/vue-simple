<template>
  <div>
    <!--Pagination-->
    <vs-pagination :total-pages="5"></vs-pagination>
    <vs-pagination :total-pages="20" :page-padding="1" :current-page="currentPage" @change="changePage"></vs-pagination>
    <vs-pagination :total-pages="20" :current-page="currentPage" @change="changePage"></vs-pagination>
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
        this.currentPage = page;
      },
    },
  };
</script>
