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
      <p>
        <img src="https://forthebadge.com/images/badges/made-with-vue.svg" alt="made-with-vue" />
        <img src="https://forthebadge.com/images/badges/made-with-javascript.svg" alt="made-with-javascript" />
        <img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="built-with-love" />
        <img src="https://forthebadge.com/images/badges/built-with-swag.svg" alt="built-with-swag" />
        <img src="https://forthebadge.com/images/badges/check-it-out.svg" alt="check-it-out" />
        <img
          src="https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg"
          alt="60-percent-of-the-time-works-every-time"
        />
        <img src="https://forthebadge.com/images/badges/gluten-free.svg" alt="gluten-free" />
        <img src="https://forthebadge.com/images/badges/ctrl-c-ctrl-v.svg" alt="ctrl-c-ctrl-v" />
        <img src="https://forthebadge.com/images/badges/open-source.svg" alt="open-source" />
        <img src="https://forthebadge.com/images/badges/you-didnt-ask-for-this.svg" alt="you-didnt-ask-for-this" />
        <img src="https://forthebadge.com/images/badges/powered-by-coffee.svg" alt="powered-by-coffee" />
      </p>
      <p class="small">
        Vue Simple provides consistent styling and behavior for your daily coding/prototyping scenarios. Vue components
        are maintained following a multi-package approach where components are packaged and published individually, but
        combined under this single repository.
      </p>
    </div>

    <br />
    <h2>Support 🐣</h2>
    <div class="home-page__description">
      <p class="small">
        Creating quality code packages/ guidelines takes a lot of time. Hence would recommend everyone to help in
        contributing. Cheers!! 🍻
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
