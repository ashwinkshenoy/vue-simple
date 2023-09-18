<template>
  <div class="component-masthead" :id="title.toLowerCase()">
    <div class="component-masthead__title">
      <h1>
        {{ title }}
      </h1>
      <p v-html="description"></p>
    </div>
    <div class="component-masthead__info">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Masthead',
    props: {
      title: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  };
</script>

<style lang="scss">
  $mobile: 720px;
  $tablet: 960px;

  .component-masthead {
    position: relative;
    padding: 20px 0 0;
    margin-top: 0 !important;

    @media (min-width: $tablet) {
      margin-top: 0 !important;
    }

    &__title {
      position: relative;

      h1 {
        margin-bottom: 5px;
      }

      p {
        font-size: 20px;
        color: var(--color-pepper-grey);
        margin-top: 0;
        line-height: 1.5;
        font-weight: 300;
      }
    }
  }
</style>
