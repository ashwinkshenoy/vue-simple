import { createApp, ref, h } from 'vue';
import VsToast from './vs-toast.vue';

const variant = ['success', 'warning', 'error', 'info', 'secondary'];

const defaultOptions = {
  title: '',
  message: '',
  variant: 'success',
  position: 'top-center',
  type: 'toast',
  timeout: 5000,
  showClose: true,
  isSticky: false,
};

let toastCmp = null;

function createToastCmp() {
  const app = createApp({
    render() {
      return h(VsToast, { ref: 'toast' });
    },
  });
  const toastElement = document.createElement('div');
  document.body.appendChild(toastElement);
  const vm = app.mount(toastElement);

  return vm;
}

function getToastCmp() {
  if (!toastCmp) {
    toastCmp = createToastCmp();
  }
  return toastCmp;
}

function show(options = {}) {
  getToastCmp().$refs.toast.open({ ...defaultOptions, ...options });
}

function close() {
  getToastCmp().$refs.toast.close();
}

function createShorthands() {
  const shorthands = {};
  variant.forEach(variant => (shorthands[variant] = (message, options = {}) => show({ variant, message, ...options })));
  return shorthands;
}

export default {
  show,
  close,
  getToastCmp,
  defaultOptions,
  ...createShorthands(),
};
