<template>
  <div>
    <h3>Default</h3>
    <p class="upload-description">Click the dropzone or drag a file onto it.</p>
    <div class="box">
      <vs-upload v-model="files1" />
    </div>

    <br />
    <br />

    <h4>With Label &amp; Hint</h4>
    <p class="upload-description">
      Use <code>label</code> and <code>hint</code> to give users context about what to upload.
    </p>
    <div class="box">
      <vs-upload v-model="files2" label="Upload a photo" hint="PNG, JPG, SVG up to 5 MB" multiple accept="image/*" />
    </div>

    <br />
    <br />

    <h4>Multiple Files</h4>
    <p class="upload-description">Set <code>multiple</code> to allow selecting more than one file at a time.</p>
    <div class="box">
      <vs-upload v-model="files3" multiple @change="fileLog" />
    </div>

    <br />
    <br />

    <h4>Validation States</h4>
    <p class="upload-description">
      Use <code>validation</code> and <code>message</code> to communicate errors, warnings, or success.
    </p>
    <div class="box">
      <vs-upload
        v-model="files4a"
        validation="error"
        message="File size exceeds the 5 MB limit."
        style="margin-bottom: 16px"
      />
      <vs-upload
        v-model="files4b"
        validation="warning"
        message="This file type may not be supported."
        style="margin-bottom: 16px"
      />
      <vs-upload v-model="files4c" validation="success" message="File uploaded successfully." />
    </div>

    <br />
    <br />

    <h4>Compact</h4>
    <p class="upload-description">Use <code>is-compact</code> for a reduced-height inline dropzone.</p>
    <div class="box">
      <vs-upload v-model="files5" is-compact label="Attach files" multiple />
    </div>

    <br />
    <br />

    <h4>Disabled</h4>
    <p class="upload-description">The <code>disabled</code> prop prevents interaction.</p>
    <div class="box">
      <vs-upload v-model="files6" disabled label="Upload (disabled)" />
    </div>
  </div>
</template>

<script>
  import VsUpload from '../../packages/vs-upload/src/vs-upload.vue';

  export default {
    name: 'DemoUpload',

    components: { VsUpload },

    data() {
      return {
        files1: [],
        files2: [],
        files3: [],
        files4a: [],
        files4b: [],
        files4c: [],
        files5: [],
        files6: [],
      };
    },

    methods: {
      fileLog(files) {
        console.log('Files changed:', files);
      },
    },
  };
</script>

<style scoped>
  .upload-description {
    font-size: 13px;
    color: rgb(92, 105, 112);
    margin-bottom: 8px;
  }

  code {
    font-family: monospace;
    font-size: 12px;
    background: #f3f4f5;
    padding: 1px 4px;
    border-radius: 3px;
  }

  .box {
    display: block !important;
  }
</style>
