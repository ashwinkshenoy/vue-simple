<template>
  <div class="demo">
    <h3>Slot Based</h3>
    <div class="box">
      <vs-tab v-model="slotOnlySelected">
        <template #tab-overview>Overview</template>
        <template #tab-usage>Usage</template>
        <template #tab-activity>Activity</template>

        <template #panel-overview>
          <p>Overview panel content.</p>
        </template>
        <template #panel-usage>
          <p>Define content per tab with <code>#panel-*</code> slots.</p>
        </template>
        <template #panel-activity>
          <p>Great DX when panel content is mostly custom markup.</p>
        </template>
      </vs-tab>
    </div>

    <br />

    <h3>Disabled Tabs</h3>
    <div class="box">
      <vs-tab v-model="disabledSelected" :disabled-items="['usage']">
        <template #tab-overview>Overview</template>
        <template #tab-usage>Usage</template>
        <template #tab-activity>Activity</template>

        <template #panel-overview>
          <p>Overview panel content.</p>
        </template>
        <template #panel-usage>
          <p>Define content per tab with <code>#panel-*</code> slots.</p>
        </template>
        <template #panel-activity>
          <p>Great DX when panel content is mostly custom markup.</p>
        </template>
      </vs-tab>
    </div>

    <br />

    <h3>Vertical Slot Based</h3>
    <div class="box">
      <vs-tab v-model="verticalSelected" orientation="vertical">
        <template #tab-basics>Basics</template>
        <template #tab-api>API</template>
        <template #tab-examples>Examples</template>

        <template #panel-basics>
          <p>Start with basics to understand the slot contract.</p>
        </template>
        <template #panel-api>
          <p>Use <code>#tab-*</code> and <code>#panel-*</code> named slots.</p>
        </template>
        <template #panel-examples>
          <p>Vertical tabs are useful for dense content layouts.</p>
        </template>
      </vs-tab>
    </div>

    <br />

    <h3>With Custom Tab Markup</h3>
    <div class="box">
      <vs-tab v-model="slotSelected">
        <template #tab-messages="{ isSelected }">
          <span class="slot-tab" :class="{ 'slot-tab--active': isSelected }">
            <span>Messages</span>
            <span class="slot-tab__badge">12</span>
          </span>
        </template>
        <template #tab-mentions>Mentions</template>
        <template #tab-archived>Archived</template>

        <template #panel-messages="{ selectedItem }">
          <div class="slot-panel">
            <strong>Messages</strong>
            <p>Unread and recent conversations are shown in this panel.</p>
            <small>Active tab id: {{ selectedItem }}</small>
          </div>
        </template>
        <template #panel-mentions>
          <p>Mentions panel highlights updates that need your attention.</p>
        </template>
        <template #panel-archived>
          <p>Archive keeps historical activity and closed threads.</p>
        </template>
      </vs-tab>
    </div>
  </div>
</template>

<script>
  import VsTab from '../../packages/vs-tab/src/vs-tab.vue';

  export default {
    name: 'TabsDemo',

    components: {
      VsTab,
    },

    data() {
      return {
        slotOnlySelected: 'overview',
        disabledSelected: 'overview',
        verticalSelected: 'basics',
        slotSelected: 'messages',
      };
    },
  };
</script>

<style>
  .slot-tab {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .slot-tab__badge {
    background: #e2ecf5;
    color: #365168;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    padding: 2px 7px;
  }

  .slot-tab--active .slot-tab__badge {
    background: #1f73b7;
    color: #ffffff;
  }

  .slot-panel p {
    margin: 8px 0 6px;
  }
</style>
