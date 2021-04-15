<template>
  <div class="component-grid">
    <div class="component-badge">
      <a :href="`https://www.npmjs.com/package/${packageName}`">
        <img :src="`https://img.shields.io/npm/v/${packageName}.svg`" />
      </a>
      <a :href="`https://www.npmjs.com/package/${packageName}`">
        <img :src="`https://img.shields.io/npm/dt/${packageName}.svg`" />
      </a>
    </div>
    <div class="component-links">
      <a :href="codesandbox" target="_blank" rel="noreferrer noopener" v-if="codesandbox">
        <img src="/logos/codesandbox.png" alt="codesandbox" />
        <span>Code Sandbox</span>
        <img src="/logos/link.png" alt="link" />
      </a>
      <a :href="github" target="_blank" rel="noreferrer noopener" v-if="github">
        <img src="/logos/github.png" alt="github" />
        <span>GitHub</span>
        <img src="/logos/link.png" alt="link" />
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ComponentLinks',

    props: {
      codesandbox: {
        type: String,
      },
      github: {
        type: String,
      },
      packageName: {
        type: String,
      },
    },
  };
</script>

<style lang="scss">
  .component-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: baseline;
  }

  .component-badge {
    position: relative;
    z-index: 1;

    a {
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .component-links {
    justify-self: flex-end;
    display: flex;
    z-index: 1;
    position: relative;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--pepper-gray);
      background: var(--white);
      border: 1px solid var(--color-dark-line-grey);
      border-radius: 3px;
      font-size: 14px;
      padding: 6px 10px;
      text-decoration: none !important;
      margin: 0 10px;
      cursor: pointer;
      user-select: none;
      font-weight: 400;

      &:first-child {
        margin-left: 0;
      }

      img {
        width: 23px;
      }

      span {
        margin: 0 3px;
      }
    }
  }
</style>
