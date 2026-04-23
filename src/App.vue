<template>
  <div class="app-container">
    <!-- Sidebar -->
    <aside class="sidebar">
      <!-- Logo -->
      <div class="sidebar-logo">
        <img src="/vue-simple.svg" alt="vue-simple" class="logo-img" />
      </div>

      <!-- Dark Mode Toggle -->
      <div class="sidebar-theme-toggle">
        <label class="vs-switch vs-switch--primary">
          <input type="checkbox" v-model="darkMode" @change="changeTheme" />
          <span class="theme-label">{{ darkMode ? '🌙 Dark' : '☀️ Light' }}</span>
        </label>
      </div>

      <!-- Navigation -->
      <nav class="sidebar-nav">
        <h2 class="nav-title">Components</h2>
        <ul class="nav-list">
          <li v-for="component in components" :key="component.id">
            <a
              :href="`#${component.id}`"
              class="nav-link"
              :class="{ active: activeComponent === component.id }"
              @click="scrollToComponent(component.id)"
            >
              {{ component.name }}
            </a>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Datepicker Section -->
      <section :id="components[0].id" class="component-section">
        <h2>Datepicker</h2>
        <demo-datepicker></demo-datepicker>
      </section>

      <!-- Select Section -->
      <section :id="components[1].id" class="component-section">
        <demo-select></demo-select>
      </section>

      <!-- Alert Section -->
      <section :id="components[2].id" class="component-section">
        <h2>Alert</h2>
        <div class="demo-group">
          <h3 class="demo-subheading">Alert Variants</h3>
          <vs-alert variant="success" show-close @close="log">
            <template v-slot:title>Success Heading</template>
            Success Message
          </vs-alert>
          <vs-alert variant="warning" title="Warning Heading" show-close> Warning Message </vs-alert>
          <vs-alert variant="error" title="Error Heading" show-close> Error Message </vs-alert>
          <vs-alert variant="info" title="Information Heading" show-close>
            Information Message
            <template slot="close">close</template>
          </vs-alert>
          <vs-alert variant="secondary" title="Secondary Heading">
            Secondary Message
            <template slot="close">close</template>
          </vs-alert>
        </div>

        <div class="demo-group">
          <h3 class="demo-subheading">Toast Style</h3>
          <vs-alert variant="success" show-close toast>
            <template v-slot:title>Success Heading</template>
            Success Message
          </vs-alert>
          <vs-alert variant="warning" title="Warning Heading" show-close toast> Warning Message </vs-alert>
          <vs-alert variant="error" title="Error Heading" show-close toast> Error Message </vs-alert>
          <vs-alert variant="info" title="Information Heading" show-close toast>
            Information Message
            <template slot="close">close</template>
          </vs-alert>
          <vs-alert variant="secondary" title="Secondary Heading" show-close toast>
            Secondary Message
            <template slot="close">close</template>
          </vs-alert>
        </div>

        <div class="demo-group">
          <h3 class="demo-subheading">Small Alerts</h3>
          <vs-alert variant="success" small> Success Message </vs-alert>
          <vs-alert variant="warning" small show-close> Warning Message </vs-alert>
        </div>

        <div class="demo-group">
          <h3 class="demo-subheading">No Background</h3>
          <vs-alert variant="success" no-bg> Success Message </vs-alert>
          <vs-alert variant="warning" no-bg> Warning Message </vs-alert>
          <vs-alert variant="error" no-bg> Danger Message </vs-alert>
          <vs-alert variant="info" no-bg> Information Message </vs-alert>
          <vs-alert variant="secondary" no-bg> Secondary Message </vs-alert>
        </div>
      </section>

      <!-- Modal Section -->
      <section :id="components[3].id" class="component-section">
        <h2>Modals</h2>
        <demo-modal></demo-modal>
      </section>

      <!-- Tags Section -->
      <section :id="components[4].id" class="component-section">
        <h2>Tags</h2>
        <demo-tag></demo-tag>
      </section>

      <!-- Switch Section -->
      <section :id="components[5].id" class="component-section">
        <h2>Switch</h2>
        <demo-switch></demo-switch>
      </section>

      <!-- Buttons Section -->
      <section :id="components[6].id" class="component-section">
        <h2>Buttons</h2>
        <demo-button></demo-button>
      </section>

      <!-- Pagination Section -->
      <section :id="components[7].id" class="component-section">
        <h2>Pagination</h2>
        <demo-pagination></demo-pagination>
      </section>

      <!-- Loader Section -->
      <section :id="components[8].id" class="component-section">
        <h2>Loaders</h2>
        <demo-loader></demo-loader>
      </section>

      <!-- Toast Section -->
      <section :id="components[9].id" class="component-section">
        <h2>Toasts</h2>
        <demo-toast></demo-toast>
      </section>

      <!-- Accordion Section -->
      <section :id="components[10].id" class="component-section">
        <h2>Accordions</h2>
        <demo-accordion></demo-accordion>
      </section>

      <!-- Menu Section -->
      <section :id="components[11].id" class="component-section">
        <h2>Menu</h2>
        <demo-menu></demo-menu>
      </section>

      <!-- Tabs Section -->
      <section :id="components[12].id" class="component-section">
        <h2>Tabs</h2>
        <demo-tab></demo-tab>
      </section>

      <!-- Tooltip Section -->
      <section :id="components[13].id" class="component-section">
        <h2>Tooltips</h2>
        <demo-tooltip></demo-tooltip>
      </section>
    </main>
  </div>
</template>

<script>
  import VsAlert from '../packages/vs-alert/src/vs-alert.vue';
  import DemoModal from './DemoComponents/Modal.vue';
  import DemoDatepicker from './DemoComponents/Datepicker.vue';
  import DemoSelect from './DemoComponents/Select.vue';
  import DemoTag from './DemoComponents/Tag.vue';
  import DemoButton from './DemoComponents/Button.vue';
  import DemoPagination from './DemoComponents/Pagination.vue';
  import DemoLoader from './DemoComponents/Loader.vue';
  import DemoToast from './DemoComponents/Toast.vue';
  import DemoAccordion from './DemoComponents/Accordion.vue';
  import DemoMenu from './DemoComponents/Menu.vue';
  import DemoSwitch from './DemoComponents/Switch.vue';
  import DemoTab from './DemoComponents/Tab.vue';
  import DemoTooltip from './DemoComponents/Tooltip.vue';

  export default {
    name: 'App',
    components: {
      VsAlert,
      DemoModal,
      DemoDatepicker,
      DemoSelect,
      DemoTag,
      DemoButton,
      DemoPagination,
      DemoLoader,
      DemoToast,
      DemoAccordion,
      DemoMenu,
      DemoSwitch,
      DemoTab,
      DemoTooltip,
    },

    data() {
      return {
        darkMode: false,
        activeComponent: 'datepicker',
        components: [
          { id: 'datepicker', name: 'Datepicker' },
          { id: 'select', name: 'Select' },
          { id: 'alert', name: 'Alert' },
          { id: 'modal', name: 'Modal' },
          { id: 'tag', name: 'Tag' },
          { id: 'switch', name: 'Switch' },
          { id: 'button', name: 'Button' },
          { id: 'pagination', name: 'Pagination' },
          { id: 'loader', name: 'Loader' },
          { id: 'toast', name: 'Toast' },
          { id: 'accordion', name: 'Accordion' },
          { id: 'menu', name: 'Menu' },
          { id: 'tab', name: 'Tab' },
          { id: 'tooltip', name: 'Tooltip' },
        ],
      };
    },

    methods: {
      log(a) {
        console.log(a);
      },

      /**
       * Toggle light/dark mode
       */
      changeTheme() {
        if (this.darkMode) {
          document.documentElement.setAttribute('data-theme', 'dark');
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
        }
      },

      /**
       * Scroll to component and update active state
       */
      scrollToComponent(componentId) {
        this.activeComponent = componentId;
        const element = document.getElementById(componentId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      },

      /**
       * Update active component on scroll
       */
      handleScroll() {
        const sections = this.components.map(c => ({
          id: c.id,
          element: document.getElementById(c.id),
        }));

        for (let section of sections) {
          if (section.element) {
            const rect = section.element.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
              this.activeComponent = section.id;
              break;
            }
          }
        }
      },
    },

    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },

    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
  };
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html[data-theme='dark'] {
    background: #0f1419;
    color: #e0e0e0;

    body {
      color: #e0e0e0;
    }

    .app-container {
      background: #0f1419;
    }

    .sidebar {
      background: #1a1f26;
      border-right: 1px solid #2a3038;
    }

    .main-header {
      background: #1a1f26;
      border-bottom: 1px solid #2a3038;
    }

    .main-content {
      background: #0f1419;
    }

    .component-section {
      background: #0f1419;
      border-bottom: 1px solid #2a3038;
    }

    .nav-link {
      color: #b0b8c1;

      &:hover {
        background: rgba(255, 255, 255, 0.08);
        color: #e0e0e0;
      }

      &.active {
        background: rgba(66, 165, 245, 0.15);
        color: #42a5f5;
        border-left-color: #42a5f5;
      }
    }

    .section-title,
    h2 {
      color: #e0e0e0;
    }

    .demo-subheading {
      color: #b0b8c1;
    }
  }

  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    overflow-x: hidden;
  }

  .app-container {
    display: flex;
    min-height: 100vh;
    background: #f6f9ff;
  }

  /* Sidebar Styles */
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 280px;
    height: 100vh;
    background: #ffffff;
    border-right: 1px solid #e2e8f0;
    overflow-y: auto;
    overflow-x: hidden;
    padding-top: 0;
    transition: all 0.3s ease;
    z-index: 100;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 3px;

      &:hover {
        background: #94a3b8;
      }
    }
  }

  .sidebar-logo {
    padding: 10px 10px 10px;

    .logo-img {
      height: 48px;
      width: auto;
      object-fit: contain;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    }
  }

  .sidebar-theme-toggle {
    padding: 16px 16px 0;

    .theme-label {
      font-size: 16px;
      margin-left: 8px;
    }

    .vs-switch {
      margin: 0;
    }
  }

  .sidebar-nav {
    padding: 16px 0;
  }

  .nav-title {
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #64748b;
    padding: 12px 16px;
    margin: 0;
    &::before {
      content: none !important;
    }
  }

  .nav-list {
    list-style: none;
    margin: 0;

    li {
      margin: 0;
    }
  }

  .nav-link {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    color: #475569;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s ease;
    border-left: 3px solid transparent;
    cursor: pointer;

    &:hover {
      background: #f1f5f9;
      color: #1e293b;
    }

    &.active {
      background: #eff6ff;
      color: #0284c7;
      border-left-color: #0284c7;
      font-weight: 600;
    }
  }

  /* Main Content Styles */
  .main-content {
    margin-left: 280px;
    flex: 1;
    width: calc(100% - 280px);
    overflow-y: auto;
  }

  .box {
    margin-bottom: 10px;
  }

  .main-header {
    background: #ffffff;
    border-bottom: 1px solid #e2e8f0;
    padding: 48px 40px;
    position: sticky;
    top: 0;
    z-index: 50;
    transition: all 0.3s ease;

    .header-title {
      font-size: 28px;
      font-weight: 700;
      color: #1e293b;
      margin: 0;
      letter-spacing: -0.5px;
    }

    .header-subtitle {
      font-size: 14px;
      color: #64748b;
      margin: 8px 0 0 0;
      font-weight: 400;
    }
  }

  .component-section {
    margin: 48px 40px;
    border-bottom: 1px solid #e2e8f0;
    scroll-margin-top: 80px;
    background: white;
    padding: 12px 30px;
    border-radius: 10px;
  }

  .section-title,
  h2:not(.vs-modal__header-text, .nav-title),
  #select h3 {
    font-size: 16px;
    font-weight: 700;
    color: #1e293b;
    margin: 15px 0 20px 0;
    letter-spacing: -0.3px;
    display: flex;
    align-items: center;
    gap: 12px;
    text-transform: uppercase;

    &::before {
      content: '';
      width: 4px;
      height: 24px;
      background: #0284c7;
      border-radius: 2px;
    }
  }

  h3 {
    font-size: 14px;
    margin-block: 10px;
  }

  .demo-group {
    margin-bottom: 32px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .demo-subheading {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #64748b;
    margin: 0 0 12px 0;
    display: block;
  }

  /* Utility Styles */
  .select-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  strong {
    font-size: 20px;
  }

  small {
    margin-bottom: 5px;
    display: inline-block;
  }

  .mr-10 {
    margin-right: 10px;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text-center {
    text-align: center;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .sidebar {
      width: 250px;
    }

    .main-content {
      margin-left: 250px;
      width: calc(100% - 250px);
    }

    .component-section {
      padding: 32px 24px;
    }

    .main-header {
      padding: 32px 24px;
    }
  }

  @media (max-width: 768px) {
    .app-container {
      flex-direction: column;
    }

    .sidebar {
      position: fixed;
      width: 100%;
      height: auto;
      border-right: none;
      border-bottom: 1px solid #e2e8f0;
      max-height: 100vh;
      z-index: 1000;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .main-content {
      margin-left: 0;
      margin-top: 0;
      width: 100%;
      scroll-margin-top: 100px;
    }

    .sidebar-logo {
      min-height: auto;
      padding: 16px;
    }

    .nav-title {
      padding: 12px 16px;
    }

    .nav-link {
      padding: 10px 12px;
    }

    .component-section {
      padding: 24px 16px;
    }

    .main-header {
      padding: 24px 16px;
      position: sticky;
      top: 0;
    }

    .header-title {
      font-size: 20px;
    }
  }

  .vs-alert {
    margin-bottom: 16px;
  }
</style>
