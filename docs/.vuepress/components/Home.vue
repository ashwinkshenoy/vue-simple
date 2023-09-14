<template>
  <div class="home-page">
    <div class="home-page__description">
      <h1>
        <img src="/logos/vue-simple.svg" alt="Vue Simple Logo" />
      </h1>
      <p>
        🌈 A Simple collection of Tiny Vue Packages.<br />
        ⚡️ Perfect for all your daily coding scenarios.
      </p>
      <p class="small">
        Vue Simple ensures that your coding and prototyping experiences are consistent in both style and functionality. We manage Vue components using a multi-package approach, where each component is packaged and released separately, but they all come together in a single repository for easy use.
      </p>
    </div>

    <br />
    <h2>Support 🐣</h2>
    <div class="home-page__description">
      <p class="small">
        The development of high-quality code packages and guidelines is a time-intensive endeavor. Therefore, I strongly encourage everyone to participate and contribute to this effort. Cheers to collaboration and progress! 🍻
      </p>
    </div>

    <br />
    <h2>Licence 📜</h2>
    <div class="home-page__description">
      <p class="small">
        &copy; Copyright 2018 -
        <a
          href="https://github.com/ashwinkshenoy/vue-simple/blob/master/LICENSE"
          target="_blank"
          rel="noreferrer noopener"
          >MIT License.</a
        >
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {},
    data() {
      return {};
    },
  };
</script>

<style lang="scss">
  $tabletHDBreakpoint: 1024px;

  .home-page {
    margin-top: 0 !important;

    &__description {
      h1 {
        font-size: 36px;
        margin-bottom: 10px;
      }

      p {
        font-size: 26px;
        font-weight: 500;
        line-height: 36px;
        margin-top: 0;
        &.small {
          font-size: 20px;
          font-weight: 300;
        }
      }
    }
  }
</style>
