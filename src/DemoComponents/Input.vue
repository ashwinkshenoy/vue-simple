<template>
  <div>
    <h3 class="demo-subheading">Default</h3>
    <div class="box">
      <div class="input-demo">
        <vs-input v-model="defaultVal" label="Label" placeholder="Placeholder" />
      </div>
    </div>

    <h3 class="demo-subheading">Disabled</h3>
    <div class="box">
      <div class="input-demo">
        <vs-input v-model="disabledVal" label="Label" placeholder="Disabled input" disabled />
      </div>
    </div>

    <h3 class="demo-subheading">Read-only</h3>
    <div class="box">
      <div class="input-demo">
        <vs-input v-model="readonlyVal" label="Label" read-only />
      </div>
    </div>

    <h3 class="demo-subheading">With Help Text</h3>
    <div class="box">
      <div class="input-demo">
        <vs-input v-model="hiddenLabelVal" label="Label" hint="Help Text" placeholder="Search…" />
      </div>
    </div>

    <h3 class="demo-subheading">Label Hidden</h3>
    <div class="box">
      <div class="input-demo">
        <vs-input
          v-model="hiddenLabelVal"
          label="Accessible label (visually hidden)"
          hide-label
          placeholder="Search…"
        />
      </div>
    </div>

    <h3 class="demo-subheading">Compact</h3>
    <div class="box">
      <div class="input-demo">
        <vs-input v-model="compactVal" label="Label" placeholder="Compact input" is-compact />
      </div>
    </div>

    <h3 class="demo-subheading">Validation States</h3>
    <div class="box">
      <div class="input-grid">
        <vs-input
          v-model="successVal"
          label="Success"
          validation="success"
          message="Looks good!"
          placeholder="Enter value"
        />
        <vs-input
          v-model="warningVal"
          label="Warning"
          validation="warning"
          message="Are you sure about this?"
          placeholder="Enter value"
        />
        <vs-input
          v-model="errorVal"
          label="Error"
          validation="error"
          message="This field is required."
          placeholder="Enter value"
        />
      </div>
    </div>

    <h3 class="demo-subheading">Required</h3>
    <div class="box">
      <div class="input-grid">
        <vs-input v-model="requiredVal" label="Email address" type="email" placeholder="you@example.com" required />
      </div>
    </div>

    <h3 class="demo-subheading">Media Input — Start &amp; End</h3>
    <div class="box">
      <div class="input-grid">
        <vs-input v-model="searchVal" label="Search" placeholder="Search…" type="search">
          <template #end>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.099zm-5.242 1.656a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"
              />
            </svg>
          </template>
        </vs-input>

        <vs-input v-model="urlVal" label="Website" placeholder="example.com" type="url">
          <template #start>
            <span style="font-size: 13px; white-space: nowrap">https://</span>
          </template>
        </vs-input>

        <vs-input v-model="priceVal" label="Price" placeholder="0.00" type="number">
          <template #start>$</template>
          <template #end>USD</template>
        </vs-input>
      </div>
    </div>

    <h3 class="demo-subheading">Input Types</h3>
    <div class="box">
      <div class="input-grid">
        <vs-input v-model="textVal" label="Text" type="text" placeholder="Plain text" />
        <vs-input v-model="emailVal" label="Email" type="email" placeholder="you@example.com" />
        <vs-input v-model="passwordVal" label="Password" type="password" placeholder="••••••••" />
        <vs-input v-model="numberVal" label="Number" type="number" placeholder="42" />
        <vs-input v-model="telVal" label="Phone" type="tel" placeholder="+1 (555) 000-0000" />
      </div>
    </div>
  </div>
</template>

<script>
  import VsInput from '../../packages/vs-input/src/vs-input.vue';

  export default {
    name: 'InputDemo',

    components: {
      VsInput,
    },

    data() {
      return {
        defaultVal: '',
        disabledVal: 'Cannot edit this',
        readonlyVal: 'Read only value',
        hiddenLabelVal: '',
        compactVal: '',
        successVal: 'valid@example.com',
        warningVal: 'maybe',
        errorVal: '',
        requiredVal: '',
        searchVal: '',
        urlVal: '',
        priceVal: '',
        textVal: '',
        emailVal: '',
        passwordVal: '',
        numberVal: '',
        telVal: '',
      };
    },
  };
</script>

<style>
  .input-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 20px;
    margin-bottom: 10px;
  }
  .input-demo {
    max-width: 300px;
  }
</style>
