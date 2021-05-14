<template>
  <div class="component-masthead" :id="title.toLowerCase()">
    <div class="component-masthead__title">
      <h1>
        <a :href="`#${title.toLowerCase()}`" class="header-anchor">#</a>
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
    padding: 20px 0;
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

    &:before {
      content: '';
      position: absolute;
      border-bottom: 1px solid var(--color-line-grey);
      background: #f5f8fc;
      height: 100%;
      width: calc(100vw - 17rem); // sidebar width
      top: 0;
      left: 50%;
      right: 50%;
      margin-left: calc(-50vw + 8.5rem);
      margin-right: -50vw;
      pointer-events: none;

      @media (max-width: $mobile - 1) {
        width: calc(100vw);
        margin-left: calc(-50vw);
      }

      @media (min-width: $mobile) and (max-width: $tablet) {
        width: calc(100vw - 13.5rem);
        margin-left: calc(-50vw + 6.5rem);
      }
    }
  }
</style>
