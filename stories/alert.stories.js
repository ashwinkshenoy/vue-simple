import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import VsAlert from '../packages/vs-alert/src/vs-alert.vue';

export default {
  title: 'Alert',
  decorators: [withKnobs],
};

export const Alert = () => ({
  props: {
    type: {
      type: String,
      default: text('Type', 'success'),
      required: true,
    },
    showClose: {
      type: Boolean,
      default: boolean('Show Close', true),
    },
    title: {
      type: String,
      default: text('Title', ''),
    },
    noBg: {
      type: Boolean,
      default: boolean('No Bg', false),
    },
  },

  components: { VsAlert },

  template: `
    <vs-alert
      :type="type"
      :no-bg="noBg"
      :title="title"
      :show-close="showClose"
      @close="action">
      Alert Message
    </vs-alert>
  `,

  methods: {
    action: action('alert-close-clicked'),
  },
});

Alert.story = {
  name: 'Alert',
};
