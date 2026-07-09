<template>
  <div class="demo">
    <h3>Sizes</h3>
    <div class="box-switch box">
      <label class="demo-label">
        <vs-switch v-model="sizeSmall" size="small" @change="logChange" />
        <span>Small</span>
      </label>
      <label class="demo-label">
        <vs-switch v-model="sizeMedium" size="medium" />
        <span>Medium</span>
      </label>
      <label class="demo-label">
        <vs-switch v-model="sizeLarge" size="large" />
        <span>Large</span>
      </label>
    </div>

    <h3>Variants</h3>
    <div class="box-switch box">
      <label class="demo-label">
        <vs-switch v-model="variantClassic" variant="classic" />
        <span>Classic</span>
      </label>
      <label class="demo-label">
        <vs-switch v-model="variantSurface" variant="surface" />
        <span>Surface</span>
      </label>
      <label class="demo-label">
        <vs-switch v-model="variantSoft" variant="soft" />
        <span>Soft</span>
      </label>
    </div>

    <h3>Colors</h3>
    <div class="box-switch box">
      <label class="demo-label">
        <vs-switch v-model="colorPrimary" color="primary" />
        <span>Primary</span>
      </label>
      <label class="demo-label">
        <vs-switch v-model="colorSuccess" color="success" />
        <span>Success</span>
      </label>
      <label class="demo-label">
        <vs-switch v-model="colorDanger" color="danger" />
        <span>Danger</span>
      </label>
      <label class="demo-label">
        <vs-switch v-model="colorWarning" color="warning" />
        <span>Warning</span>
      </label>
      <label class="demo-label">
        <vs-switch v-model="colorIndigo" color="indigo" />
        <span>Indigo</span>
      </label>
      <label class="demo-label">
        <vs-switch v-model="colorCyan" color="cyan" />
        <span>Cyan</span>
      </label>
    </div>

    <h3>High Contrast</h3>
    <div class="box-switch box">
      <label class="demo-label">
        <vs-switch v-model="highContrastIndigo" color="indigo" highContrast />
        <span>Indigo (High Contrast)</span>
      </label>
      <label class="demo-label">
        <vs-switch v-model="highContrastCyan" color="cyan" highContrast />
        <span>Cyan (High Contrast)</span>
      </label>
      <label class="demo-label">
        <vs-switch v-model="highContrastOrange" color="orange" highContrast />
        <span>Orange (High Contrast)</span>
      </label>
    </div>

    <h3>Disabled</h3>
    <div class="box-switch box">
      <label class="demo-label">
        <vs-switch disabled />
        <span>Disabled (Off)</span>
      </label>
      <label class="demo-label">
        <vs-switch v-model="disabledOn" disabled />
        <span>Disabled (On)</span>
      </label>
    </div>

    <h3>Custom Color</h3>
    <div class="box-switch box">
      <label class="demo-label">
        <vs-switch v-model="customColor1" checkedBgColor="#1dbdbc" />
        <span>Teal</span>
      </label>
      <label class="demo-label">
        <vs-switch v-model="customColor2" checkedBgColor="#00a656" />
        <span>Green</span>
      </label>
      <label class="demo-label">
        <vs-switch v-model="customColor3" checkedBgColor="#ff6224" />
        <span>Orange</span>
      </label>
      <label class="demo-label">
        <vs-switch v-model="customColor4" checkedBgColor="#ffd424" />
        <span>Lemon</span>
      </label>
    </div>
  </div>
</template>

<script>
  import VsSwitch from '../../packages/vs-switch/src/vs-switch.vue';

  export default {
    name: 'SwitchDemo',

    components: {
      VsSwitch,
    },

    data() {
      return {
        sizeSmall: false,
        sizeMedium: true,
        sizeLarge: false,
        variantClassic: true,
        variantSurface: true,
        variantSoft: true,
        colorPrimary: true,
        colorSuccess: true,
        colorDanger: true,
        colorWarning: true,
        colorIndigo: true,
        colorCyan: true,
        radiusNone: true,
        radiusSmall: true,
        radiusMedium: true,
        radiusLarge: true,
        radiusFull: true,
        highContrastIndigo: true,
        highContrastCyan: true,
        highContrastOrange: true,
        disabledOn: true,
        customColor1: true,
        customColor2: true,
        customColor3: true,
        customColor4: true,
      };
    },

    methods: {
      logChange(newValue) {
        console.log('Switch value changed to:', newValue);
      },
    },
  };
</script>

<style>
  .demo-label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-right: 20px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    margin-block: 10px;
  }

  .demo-label span {
    user-select: none;
  }

  .box-switch {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 14px;
    margin-block: 10px;
  }
</style>
