<template>
  <div :class="['vs-upload', containerClass]">
    <!-- Label -->
    <label v-if="label" :for="inputId" class="vs-upload__label">
      {{ label }}
    </label>

    <!-- Hint -->
    <span v-if="hint" class="vs-upload__hint" :id="`${inputId}-hint`">{{ hint }}</span>

    <!-- Dropzone -->
    <div
      class="vs-upload__dropzone"
      :class="{ 'vs-upload__dropzone--dragging': isDragging }"
      @dragover.prevent="onDragOver"
      @dragleave.prevent="onDragLeave"
      @drop.prevent="onDrop"
      @click="openFilePicker"
    >
      <input
        :id="inputId"
        ref="fileInput"
        type="file"
        class="vs-upload__input"
        :accept="accept"
        :multiple="multiple"
        :disabled="disabled"
        :aria-describedby="ariaDescribedBy"
        @change="onFileInput"
      />

      <!-- Upload icon -->
      <svg
        class="vs-upload__dropzone-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>

      <span class="vs-upload__dropzone-text">Choose a file or drag and drop here</span>
    </div>

    <!-- File list -->
    <ul v-if="modelValue && modelValue.length" class="vs-upload__file-list" role="list">
      <li v-for="(file, index) in modelValue" :key="`${file.name}-${index}`" class="vs-upload__file-item">
        <!-- File icon (type-aware) -->
        <span class="vs-upload__file-icon" aria-hidden="true" v-html="getFileIconSvg(file.name)"></span>

        <span class="vs-upload__file-name" :title="file.name">{{ file.name }}</span>
        <span class="vs-upload__file-size">{{ formatSize(file.size) }}</span>

        <button
          type="button"
          class="vs-upload__remove"
          :aria-label="`Remove ${file.name}`"
          :disabled="disabled"
          @click.stop="removeFile(index)"
        >
          <span class="vs-upload__remove-icon" aria-hidden="true" v-html="getRemoveIconSvg()"></span>
        </button>
      </li>
    </ul>

    <!-- Validation message -->
    <span
      v-if="message"
      class="vs-upload__message"
      :class="`vs-upload__message--${validation}`"
      :id="`${inputId}-message`"
    >
      {{ message }}
    </span>
  </div>
</template>

<script>
  let idCounter = 0;

  export default {
    name: 'VsUpload',

    inheritAttrs: false,

    props: {
      modelValue: {
        type: Array,
        default: () => [],
      },
      label: {
        type: String,
      },
      hint: {
        type: String,
      },
      accept: {
        type: String,
      },
      multiple: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      isCompact: {
        type: Boolean,
        default: false,
      },
      validation: {
        type: String,
        validator: val => ['success', 'warning', 'error'].includes(val),
      },
      message: {
        type: String,
      },
    },

    emits: ['update:modelValue', 'change', 'reject'],

    data() {
      return {
        inputId: `vs-upload-${++idCounter}`,
        isDragging: false,
      };
    },

    computed: {
      containerClass() {
        return {
          'vs-upload--disabled': this.disabled,
          'vs-upload--compact': this.isCompact,
          [`vs-upload--${this.validation}`]: !!this.validation,
        };
      },

      ariaDescribedBy() {
        const ids = [];
        if (this.hint) ids.push(`${this.inputId}-hint`);
        if (this.message) ids.push(`${this.inputId}-message`);
        return ids.length ? ids.join(' ') : undefined;
      },
    },

    methods: {
      openFilePicker() {
        if (!this.disabled) {
          this.$refs.fileInput.click();
        }
      },

      onDragOver() {
        if (!this.disabled) {
          this.isDragging = true;
        }
      },

      onDragLeave() {
        this.isDragging = false;
      },

      onDrop(event) {
        this.isDragging = false;
        if (this.disabled) return;
        this.addFiles(event.dataTransfer.files);
      },

      onFileInput(event) {
        this.addFiles(event.target.files);
        // Reset so the same file can be selected again
        event.target.value = '';
      },

      addFiles(fileList) {
        if (!fileList || !fileList.length) return;
        const incoming = Array.from(fileList);
        const updated = this.multiple ? [...(this.modelValue || []), ...incoming] : [incoming[0]];
        this.$emit('update:modelValue', updated);
        this.$emit('change', updated);
      },

      removeFile(index) {
        const updated = [...(this.modelValue || [])];
        updated.splice(index, 1);
        this.$emit('update:modelValue', updated);
        this.$emit('change', updated);
      },

      getRemoveIconSvg() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6" /><path d="M14 11v6" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" /></svg>`;
      },

      getFileIconSvg(filename) {
        const ext = (filename.split('.').pop() || '').toLowerCase();
        const base = `xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"`;

        // Image: jpg, jpeg, png, gif, webp, svg, bmp, ico
        if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp', 'ico'].includes(ext)) {
          return `<svg ${base}><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`;
        }
        // Video: mp4, mov, avi, mkv, webm
        if (['mp4', 'mov', 'avi', 'mkv', 'webm'].includes(ext)) {
          return `<svg ${base}><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`;
        }
        // Audio: mp3, wav, ogg, flac, aac
        if (['mp3', 'wav', 'ogg', 'flac', 'aac'].includes(ext)) {
          return `<svg ${base}><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`;
        }
        // PDF
        if (ext === 'pdf') {
          return `<svg ${base}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`;
        }
        // Archive: zip, rar, tar, gz, 7z
        if (['zip', 'rar', 'tar', 'gz', '7z'].includes(ext)) {
          return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable="false" viewBox="0 0 16 16" aria-hidden="true" data-garden-id="forms.file.icon" data-garden-version="9.12.6" class="StyledBaseIcon-sc-1moykgb-0 StyledFileIcon-sc-7b3q0c-0 eWlVPJ goYdHe"><path fill="none" stroke="currentColor" stroke-linecap="round" d="M6.5.5v11M5 2.5h1.5m0 1H8m-3 1h1.5m0 1H8m-3 1h1.5m0 1H8m-3 1h1.5m0 1H8m-3 1h1.5m8-6.3V15c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h8.85c.13 0 .26.05.36.15l3.15 3.2c.09.1.14.22.14.35zm-4-3.7V4c0 .28.22.5.5.5h3.5"></path></svg>`;
        }
        // Spreadsheet: xls, xlsx, csv
        if (['xls', 'xlsx', 'csv'].includes(ext)) {
          return `<svg ${base}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/><line x1="8" y1="9" x2="10" y2="9"/></svg>`;
        }
        // Presentation: ppt, pptx
        if (['ppt', 'pptx'].includes(ext)) {
          return `<svg ${base}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h5a2 2 0 0 0 0-4H8v8"/></svg>`;
        }
        // Code: js, ts, jsx, tsx, html, css, scss, json, xml, py, rb, go, java, php, etc.
        if (
          [
            'js',
            'ts',
            'jsx',
            'tsx',
            'html',
            'css',
            'scss',
            'json',
            'xml',
            'py',
            'rb',
            'go',
            'java',
            'php',
            'c',
            'cpp',
            'cs',
            'sh',
            'yml',
            'yaml',
            'md',
          ].includes(ext)
        ) {
          return `<svg ${base}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
        }
        // Text / doc: txt, doc, docx, rtf
        if (['txt', 'doc', 'docx', 'rtf'].includes(ext)) {
          return `<svg ${base}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`;
        }
        // Default: generic file with corner-fold
        return `<svg ${base}><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>`;
      },

      formatSize(bytes) {
        if (bytes === 0) return '0 B';
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
      },
    },
  };
</script>

<style lang="scss">
  $el: '.vs-upload';

  [data-theme='dark'],
  .dark {
    #{$el} {
      --vs-upload-label-color: #b0b8c1;
      --vs-upload-hint-color: #8090a2;
      --vs-upload-dropzone-border: #3a4553;
      --vs-upload-dropzone-bg: #1a1f26;
      --vs-upload-dropzone-color: #4b9fea;
      --vs-upload-dropzone-border-dragging: #42a5f5;
      --vs-upload-dropzone-bg-dragging: #1a2535;
      --vs-upload-file-border: #2a3038;
      --vs-upload-file-bg: #1a1f26;
      --vs-upload-file-color: #b0b8c1;
      --vs-upload-file-size-color: #5a6472;
      --vs-upload-remove-color: #e05252;
      --vs-upload-remove-hover-color: #cc3340;
    }
  }

  #{$el} {
    --vs-upload-label-color: #2f3941;
    --vs-upload-hint-color: #68737d;
    --vs-upload-dropzone-border: #d8dcde;
    --vs-upload-dropzone-bg: #ffffff;
    --vs-upload-dropzone-color: #1f73b7;
    --vs-upload-dropzone-border-dragging: #1f73b7;
    --vs-upload-dropzone-bg-dragging: #eaf4ff;
    --vs-upload-file-border: #e9ebed;
    --vs-upload-file-bg: #ffffff;
    --vs-upload-file-color: #2f3941;
    --vs-upload-file-size-color: #87929d;
    --vs-upload-remove-color: #cc3340;
    --vs-upload-remove-hover-color: #8c232c;
    --vs-upload-error-color: #cc3340;
    --vs-upload-warning-color: #ad5918;
    --vs-upload-success-color: #186146;
    --vs-upload-border-radius: 4px;

    display: flex;
    flex-direction: column;
    font-family: inherit;

    &__label {
      display: inline-block;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 600;
      color: var(--vs-upload-label-color);
      line-height: 1.4;
      cursor: default;
    }

    &__hint {
      margin: -8px 0 8px;
      font-size: 13px;
      color: var(--vs-upload-hint-color);
      line-height: 1.4;
    }

    &__dropzone {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 28px 20px;
      border: 2px dashed var(--vs-upload-dropzone-border);
      border-radius: var(--vs-upload-border-radius);
      background: var(--vs-upload-dropzone-bg);
      color: var(--vs-upload-dropzone-color);
      cursor: pointer;
      transition:
        border-color 0.2s ease,
        background 0.2s ease;

      &:hover {
        border-color: var(--vs-upload-dropzone-border-dragging);
        background: var(--vs-upload-dropzone-bg-dragging);
      }

      &--dragging {
        border-color: var(--vs-upload-dropzone-border-dragging);
        background: var(--vs-upload-dropzone-bg-dragging);
      }
    }

    &__input {
      position: absolute;
      width: 0;
      height: 0;
      opacity: 0;
      pointer-events: none;
    }

    &__dropzone-icon {
      flex-shrink: 0;
    }

    &__dropzone-text {
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      line-height: 1.4;
    }

    &__file-list {
      list-style: none;
      margin: 8px 0 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    &__file-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 12px;
      border: 1px solid var(--vs-upload-file-border);
      border-radius: var(--vs-upload-border-radius);
      background: var(--vs-upload-file-bg);
      color: var(--vs-upload-file-color);
    }

    &__file-icon {
      flex-shrink: 0;
      color: var(--vs-upload-hint-color);
    }

    &__file-name {
      flex: 1;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &__file-size {
      font-size: 12px;
      color: var(--vs-upload-file-size-color);
      flex-shrink: 0;
    }

    &__remove {
      display: flex;
      align-items: center;
      margin-left: 4px;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--vs-upload-remove-color);
      border-radius: 2px;
      transition: color 0.15s ease;

      &:hover:not(:disabled) {
        color: var(--vs-upload-remove-hover-color);
      }

      &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
    }

    &__remove-icon {
      display: flex;
      width: 15px;
      height: 15px;
    }

    &__message {
      margin: 6px 0 0;
      font-size: 12px;
      line-height: 1.4;
      color: var(--vs-upload-hint-color);

      &--error {
        color: var(--vs-upload-error-color);
      }

      &--warning {
        color: var(--vs-upload-warning-color);
      }

      &--success {
        color: var(--vs-upload-success-color);
      }
    }

    // Validation state borders on dropzone
    &--error #{$el}__dropzone {
      border-color: var(--vs-upload-error-color);
    }

    &--warning #{$el}__dropzone {
      border-color: var(--vs-upload-warning-color);
    }

    &--success #{$el}__dropzone {
      border-color: var(--vs-upload-success-color);
    }

    // Compact mode — smaller dropzone, tighter file items
    &--compact {
      #{$el}__dropzone {
        padding: 14px 16px;
        flex-direction: row;
        gap: 8px;

        #{$el}__dropzone-icon {
          width: 16px;
          height: 16px;
        }

        #{$el}__dropzone-text {
          font-size: 13px;
        }
      }

      #{$el}__file-item {
        padding: 6px 10px;
      }

      #{$el}__file-name {
        font-size: 13px;
      }
    }

    // Disabled state
    &--disabled {
      #{$el}__dropzone {
        opacity: 0.6;
        cursor: not-allowed;

        &:hover {
          border-color: var(--vs-upload-dropzone-border);
          background: var(--vs-upload-dropzone-bg);
        }
      }
    }
  }
</style>
