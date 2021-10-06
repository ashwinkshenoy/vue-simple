import Vue from 'vue';
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
  const cmp = new Vue(VsToast);
  document.body.appendChild(cmp.$mount().$el);
  return cmp;
}

function getToastCmp() {
  if (!toastCmp) {
    toastCmp = createToastCmp();
  }
  return toastCmp;
}

function show(options = {}) {
  getToastCmp().open({ ...defaultOptions, ...options });
}

function close() {
  getToastCmp().close();
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
