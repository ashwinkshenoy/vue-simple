import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import VsModal from '../packages/vs-modal/src/vs-modal.vue';

export default {
  title: 'Modal',
  decorators: [withKnobs],
};

export const Modal = () => ({
  props: {
    title: {
      type: String,
      default: text('Title', 'Modal title'),
    },
    alignTop: {
      type: Boolean,
      default: boolean('Align Top', false),
    },
    alignTopMargin: {
      type: Number,
      default: number('Align Top Margin', 60),
    },
    size: {
      type: String,
      default: text('Size', 'm'),
    },
    role: {
      type: String,
      default: text('Role', 'dialog'),
    },
    transition: {
      type: String,
      default: text('Transition', 'slide-up'),
    },
    removeHeader: {
      type: Boolean,
      default: boolean('Remove Header', false),
    },
    removeCloseButton: {
      type: Boolean,
      default: boolean('Remove Close Button', false),
    },
    preventShift: {
      type: Boolean,
      default: boolean('Prevent Shift', false),
    },
    dismissible: {
      type: Boolean,
      default: boolean('Dismissible', true),
    },
    dismissOn: {
      type: String,
      default: text('Dismiss On', 'backdrop esc close-button'),
    },
    backdropBlur: {
      type: Boolean,
      default: boolean('Backdrop Blur', false),
    },
  },

  components: { VsModal },

  template: `
    <div>    
      <button @click="openModal('demoModal')" class="btn">Demo Modal</button>
      <vs-modal
        ref="demoModal"
        :title="title"
        :alignTop="alignTop"
        :alignTopMargin="alignTopMargin"
        :size="size"
        :role="role"
        :transition="transition"
        :removeHeader="removeHeader"
        :removeCloseButton="removeCloseButton"
        :preventShift="preventShift"
        :dismissible="dismissible"
        :dismissOn="dismissOn"
        :backdropBlur="backdropBlur">
        Hello, World. What's happening?
        <div slot="footer">
          <button class="btn secondary-btn">Say Hi</button>
          <button class="btn" @click="closeModal('demoModal')">Close</button>
        </div>
      </vs-modal>
    </div>
  `,

  methods: {
    action: action('alert-close-clicked'),

    openModal(ref) {
      this.$refs[ref].open();
    },

    closeModal(ref) {
      this.$refs[ref].close();
    },
  },
});

Modal.story = {
  name: 'Modal',
};
