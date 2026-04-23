<template>
  <div>
    <h3 class="demo-subheading">Basic</h3>
    <div class="box">
      <vs-tooltip title="Save your changes" class="mr-10">
        <vs-button variant="primary" fill>Save</vs-button>
      </vs-tooltip>
      <vs-tooltip title="Delete this item" class="mr-10">
        <vs-button variant="danger" fill>Delete</vs-button>
      </vs-tooltip>
      <vs-tooltip title="View your profile">
        <a href="#tooltip" class="profile-link">Profile</a>
      </vs-tooltip>
    </div>

    <br />

    <h3 class="demo-subheading">Replaced content (image / wrap)</h3>
    <p class="demo-hint">Tooltip is on the parent span; <code>tabindex="0"</code> enables keyboard focus.</p>
    <div class="box">
      <vs-tooltip :tabindex="0" title="Images need a parent with the tooltip" placement="top">
        <img src="/logos/vue-simple.svg" height="100" width="100" alt="" />
      </vs-tooltip>
    </div>

    <br />

    <h3 class="demo-subheading">Placement</h3>
    <div class="box placement-box">
      <vs-tooltip title="On top" placement="top">
        <vs-button>Top</vs-button>
      </vs-tooltip>
      <vs-tooltip title="Below" placement="bottom">
        <vs-button>Bottom</vs-button>
      </vs-tooltip>
      <vs-tooltip title="On the left" placement="left">
        <vs-button>Left</vs-button>
      </vs-tooltip>
      <vs-tooltip title="On the right" placement="right">
        <vs-button>Right</vs-button>
      </vs-tooltip>
    </div>

    <br />

    <h3 class="demo-subheading">Custom content slot</h3>
    <div class="box">
      <vs-tooltip>
        <vs-button>Rich tooltip</vs-button>
        <template #content>
          <span><strong>Tip:</strong> Use the <code>#content</code> slot for HTML.</span>
        </template>
      </vs-tooltip>
    </div>

    <br />

    <h3 class="demo-subheading">No arrow</h3>
    <p class="demo-hint">Set <code>:has-arrow="false"</code> to use a box-only tooltip without a caret.</p>
    <div class="box">
      <vs-tooltip :has-arrow="false" title="No pointer triangle" placement="top">
        <vs-button>Box only</vs-button>
      </vs-tooltip>
    </div>
  </div>
</template>

<script>
  import VsTooltip from '../../packages/vs-tooltip/src/vs-tooltip.vue';
  import VsButton from '../../packages/vs-button/src/vs-button.vue';

  export default {
    name: 'DemoTooltip',
    components: {
      VsTooltip,
      VsButton,
    },
  };
</script>

<style scoped>
  .mr-10 {
    margin-right: 10px;
  }

  .box {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem 1rem;
  }

  .placement-box {
    min-height: 5rem;
  }

  .img-wrap {
    display: inline-flex;
  }

  .profile-link {
    color: #1f73b7;
  }

  [data-theme='dark'] .profile-link {
    color: #4da3ff;
  }

  .demo-hint {
    font-size: 0.875rem;
    opacity: 0.85;
    margin: 0 0 0.5rem 0;
  }
</style>
