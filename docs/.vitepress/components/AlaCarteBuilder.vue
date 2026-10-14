<script setup>
  import { CheckCircleIcon } from '@heroicons/vue/20/solid';
  import { computed, ref } from 'vue';

  const components = [
    { name: 'Accordion', package: 'vs-accordion', version: '3.1.8' },
    { name: 'Alert', package: 'vs-alert', version: '3.1.8' },
    { name: 'Button', package: 'vs-button', version: '3.1.8' },
    { name: 'Datepicker', package: 'vs-datepicker', version: '3.1.8' },
    { name: 'Input', package: 'vs-input', version: '3.1.8' },
    { name: 'Loader', package: 'vs-loader', version: '3.1.8' },
    { name: 'Menu', package: 'vs-menu', version: '3.1.8' },
    { name: 'Modal', package: 'vs-modal', version: '3.1.8' },
    { name: 'Pagination', package: 'vs-pagination', version: '3.1.8' },
    { name: 'Select', package: 'vs-select, vs-multiselect', version: '3.1.8' },
    { name: 'Switch', package: 'vs-switch', version: '3.1.8' },
    { name: 'Tab', package: 'vs-tab', version: '3.1.8' },
    { name: 'Tag', package: 'vs-tag', version: '3.1.8' },
    { name: 'Timeline', package: 'vs-timeline', version: '3.1.8' },
    { name: 'Toast', package: 'vs-toast', version: '3.1.8' },
    { name: 'Tooltip', package: 'vs-tooltip', version: '3.1.8' },
    { name: 'Upload', package: 'vs-upload', version: '3.1.8' },
  ];

  const selectedPackages = ref(['vs-button', 'vs-loader']);
  const searchTerm = ref('');
  const copied = ref(false);
  const copiedInstallCommand = ref(false);

  const filteredComponents = computed(() => {
    const term = searchTerm.value.trim().toLowerCase();
    return components.filter(component => component.name.toLowerCase().includes(term));
  });

  const scriptTag = computed(() => {
    if (!selectedPackages.value.length) return '';

    const packages = components
      .filter(component => selectedPackages.value.includes(component.package))
      .map(component => `npm/@vuesimple/${component.package}@${component.version}`);
    const tagName = 'script';

    return `<${tagName} src="https://cdn.jsdelivr.net/combine/${packages.join(',')}"></${tagName}>`;
  });

  const installCommand = computed(() => {
    const packages = components
      .filter(component => selectedPackages.value.includes(component.package))
      .map(component => `@vuesimple/${component.package}@${component.version}`);

    return packages.length ? `npm install ${packages.join(' ')}` : '';
  });

  /**
   * Selects every available component.
   * @returns {void}
   **/
  function selectAll() {
    selectedPackages.value = components.map(component => component.package);
  }

  /**
   * Clears the component selection and copy feedback.
   * @returns {void}
   **/
  function clearSelection() {
    selectedPackages.value = [];
    copied.value = false;
    copiedInstallCommand.value = false;
  }

  /**
   * Copies the generated CDN script tag.
   * @returns {Promise<void>}
   **/
  async function copyScript() {
    if (!scriptTag.value || !navigator.clipboard) return;

    await navigator.clipboard.writeText(scriptTag.value);
    copied.value = true;
    window.setTimeout(() => {
      copied.value = false;
    }, 1800);
  }

  /**
   * Copies the generated npm install command.
   * @returns {Promise<void>}
   **/
  async function copyInstallCommand() {
    if (!installCommand.value || !navigator.clipboard) return;

    await navigator.clipboard.writeText(installCommand.value);
    copiedInstallCommand.value = true;
    window.setTimeout(() => {
      copiedInstallCommand.value = false;
    }, 1800);
  }
</script>

<template>
  <main class="ala-carte-builder">
    <header class="builder-heading">
      <h1>A la carte</h1>
      <p class="builder-description">Choose the packages your project needs and generate one combined script.</p>
    </header>

    <section class="package-section" aria-labelledby="package-heading">
      <div class="section-heading">
        <div>
          <h2 id="package-heading">Components</h2>
          <p>
            {{ selectedPackages.length }} selected <span aria-hidden="true">/</span> {{ components.length }} available
          </p>
        </div>
        <div class="selection-actions">
          <button type="button" @click="selectAll">Select all</button>
          <button type="button" @click="clearSelection">Clear</button>
        </div>
      </div>

      <label class="search-field">
        <span class="search-icon" aria-hidden="true"></span>
        <input v-model="searchTerm" type="search" placeholder="Find a component" aria-label="Find a component" />
      </label>

      <div class="component-list">
        <label
          v-for="component in filteredComponents"
          :key="component.package"
          class="component-option"
          :class="{ 'is-selected': selectedPackages.includes(component.package) }"
        >
          <input v-model="selectedPackages" type="checkbox" :value="component.package" />
          <span v-if="selectedPackages.includes(component.package)" class="option-corner" aria-hidden="true">
            <CheckCircleIcon class="corner-check" />
          </span>
          <span class="option-copy">
            <span class="option-name">{{ component.name }}</span>
            <span class="option-package">{{ component.package }}</span>
          </span>
          <span class="option-version">v{{ component.version }}</span>
        </label>
        <p v-if="!filteredComponents.length" class="empty-state">No components match “{{ searchTerm }}”.</p>
      </div>
    </section>

    <section class="output-section" aria-labelledby="output-heading">
      <div class="section-heading output-heading">
        <div>
          <h2 id="output-heading">Generated script</h2>
          <p>Paste this tag before the closing <code>&lt;/body&gt;</code> tag.</p>
        </div>
        <button class="copy-button" type="button" :disabled="!scriptTag" @click="copyScript">
          {{ copied ? 'Copied' : 'Copy script' }}
        </button>
      </div>

      <pre v-if="scriptTag" class="script-output"><code>{{ scriptTag }}</code></pre>
      <div v-else class="script-empty">Select one or more components to generate your CDN script.</div>
    </section>

    <section class="output-section install-section" aria-labelledby="install-heading">
      <div class="section-heading output-heading">
        <div>
          <h2 id="install-heading">Install with npm</h2>
          <p>Install all selected packages with one command.</p>
        </div>
        <button class="copy-button" type="button" :disabled="!installCommand" @click="copyInstallCommand">
          {{ copiedInstallCommand ? 'Copied' : 'Copy command' }}
        </button>
      </div>

      <pre v-if="installCommand" class="script-output"><code>{{ installCommand }}</code></pre>
      <div v-else class="script-empty">Select one or more components to generate an install command.</div>
    </section>
  </main>
</template>

<style scoped>
  .ala-carte-builder {
    --builder-ink: #202923;
    --builder-muted: #68736d;
    --builder-line: #dce4de;
    --builder-green: #087f5b;
    --builder-wash: #f3f7f4;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 48px 32px 72px;
    color: var(--builder-ink);
  }

  .builder-heading {
    padding-bottom: 20px;
    border-bottom: 1px solid var(--builder-line);
  }

  .eyebrow {
    margin: 0 0 10px;
    color: var(--builder-green);
    font:
      700 11px/1.4 'Google Sans Flex',
      sans-serif;
    letter-spacing: 0.08em;
  }

  .builder-heading h1 {
    margin: 0;
    font-size: 34px;
    line-height: 1.15;
    font-weight: 650;
  }

  .builder-description {
    margin: 9px 0 0;
    color: var(--builder-muted);
    font-size: 15px;
    line-height: 1.6;
  }

  .package-section,
  .output-section {
    padding: 18px 0;
  }

  .package-section {
    border-bottom: 1px solid var(--builder-line);
  }

  .section-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .section-heading h2 {
    margin: 0;
    font-size: 18px;
    line-height: 1.3;
    font-weight: 650;
  }

  .section-heading p {
    margin: 5px 0 0;
    color: var(--builder-muted);
    font-size: 13px;
    line-height: 1.5;
  }

  .section-heading code {
    font-size: 12px;
  }

  .selection-actions {
    display: flex;
    gap: 16px;
  }

  .selection-actions button {
    padding: 5px 0;
    border: 0;
    color: var(--builder-green);
    background: transparent;
    font: inherit;
    font-size: 13px;
    cursor: pointer;
  }

  .selection-actions button:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .search-field {
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 360px;
    margin: 14px 0 10px;
    padding: 0 12px;
    border: 1px solid var(--builder-line);
    border-radius: 4px;
    background: #fff;
  }

  .search-field:focus-within {
    border-color: var(--builder-green);
    box-shadow: 0 0 0 2px rgb(8 127 91 / 12%);
  }

  .search-field input {
    width: 100%;
    min-width: 0;
    height: 40px;
    border: 0;
    outline: 0;
    color: var(--builder-ink);
    background: transparent;
    font: inherit;
    font-size: 14px;
  }

  .search-icon {
    position: relative;
    width: 14px;
    height: 14px;
    flex: 0 0 14px;
    border: 1.5px solid var(--builder-muted);
    border-radius: 50%;
  }

  .search-icon::after {
    position: absolute;
    right: -5px;
    bottom: -3px;
    width: 6px;
    height: 1.5px;
    content: '';
    background: var(--builder-muted);
    transform: rotate(45deg);
  }

  .component-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }

  .component-option {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    grid-template-areas:
      'name version'
      'package package';
    column-gap: 10px;
    row-gap: 7px;
    min-width: 0;
    min-height: 84px;
    box-sizing: border-box;
    padding: 15px 13px 13px 40px;
    border: 1px solid var(--builder-line);
    border-radius: 5px;
    background: #fff;
    cursor: pointer;
    transition:
      border-color 140ms ease,
      background-color 140ms ease,
      box-shadow 140ms ease,
      transform 140ms ease;
  }

  .component-option:hover {
    border-color: #9ebcae;
    box-shadow: 0 3px 10px rgb(32 41 35 / 7%);
    transform: translateY(-1px);
  }

  .component-option.is-selected {
    border-color: var(--builder-green);
    background: #f1f8f4;
  }

  .component-option.is-selected:hover {
    box-shadow: 0 3px 10px rgb(8 127 91 / 12%);
  }

  .component-option:focus-within {
    outline: 2px solid rgb(8 127 91 / 35%);
    outline-offset: 2px;
  }

  .component-option input {
    position: absolute;
    z-index: 1;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
  }

  .option-corner {
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    background: var(--builder-green);
    border-top-left-radius: 2px;
    clip-path: polygon(0 0, 100% 0, 0 100%);
    pointer-events: none;
  }

  .corner-check {
    position: absolute;
    top: 2.5px;
    left: 1.5px;
    width: 13px;
    height: 13px;
    color: #fff;
  }

  .option-copy,
  .option-name,
  .option-package {
    display: block;
    min-width: 0;
  }

  .option-copy {
    display: contents;
  }

  .option-name {
    grid-area: name;
    align-self: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
  }

  .option-package {
    grid-area: package;
    overflow-wrap: anywhere;
    color: var(--builder-muted);
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 11px;
    line-height: 1.4;
  }

  .option-version {
    grid-area: version;
    align-self: center;
    padding: 3px 6px;
    border-radius: 3px;
    color: #52625a;
    background: #edf2ee;
    font-size: 10px;
    font-weight: 600;
    line-height: 1.2;
    white-space: nowrap;
  }

  .component-option.is-selected .option-version {
    color: #086749;
    background: #dcefe4;
  }

  .empty-state {
    grid-column: 1 / -1;
    margin: 0;
    padding: 22px 0;
    color: var(--builder-muted);
    font-size: 14px;
  }

  .output-section {
    padding-top: 20px;
  }

  .copy-button {
    flex: 0 0 auto;
    min-height: 36px;
    padding: 0 13px;
    border: 1px solid var(--builder-green);
    border-radius: 4px;
    color: #fff;
    background: var(--builder-green);
    font: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
  }

  .copy-button:hover:not(:disabled) {
    background: #06694c;
  }

  .copy-button:disabled {
    border-color: var(--builder-line);
    color: #8b9690;
    background: var(--builder-wash);
    cursor: not-allowed;
  }

  .script-output,
  .script-empty {
    box-sizing: border-box;
    width: 100%;
    margin: 16px 0 0;
    padding: 16px;
    border: 1px solid var(--builder-line);
    border-radius: 4px;
    background: var(--builder-wash);
  }

  .script-output {
    overflow-x: auto;
    color: #293a31;
    font-size: 12px;
    line-height: 1.7;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }

  .script-empty {
    color: var(--builder-muted);
    font-size: 13px;
    line-height: 1.5;
  }

  @media (max-width: 800px) {
    .component-list {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 560px) {
    .ala-carte-builder {
      padding: 32px 20px 48px;
    }

    .builder-heading h1 {
      font-size: 29px;
    }

    .section-heading {
      align-items: flex-start;
    }

    .component-list {
      grid-template-columns: 1fr;
    }

    .output-heading {
      align-items: center;
    }
  }
</style>
