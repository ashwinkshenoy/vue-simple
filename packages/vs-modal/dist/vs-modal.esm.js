//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  name: 'VsFocusContainer',

  props: {
    containFocus: {
      type: Boolean,
      default: true,
    },
    focusRedirector: Function,
    disabled: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: 'div',
    },
    lazy: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    renderRedirector: function renderRedirector() {
      if (this.disabled) {
        return false;
      }
      return this.lazy ? this.containFocus : true;
    },
  },

  methods: {
    focus: function focus() {
      this.$refs.content.focus();
    },
    redirectFocus: function redirectFocus(e, options) {
      if (!this.containFocus) {
        this.$emit('focus-overflow', e, options);
        return;
      }
      e.stopPropagation();
      if (this.focusRedirector) {
        this.focusRedirector(e, options);
        return;
      }
      if (options.isTabbingForward) {
        this.$refs.content.focus();
      } else {
        this.$refs.lastFocusable.focus();
      }
    },
  },
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return function (id, style) { return addStyle(id, style); };
}
var HEAD;
var styles = {};
function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        var code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                { style.element.setAttribute('media', css.media); }
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            var index = style.ids.size - 1;
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index])
                { style.element.removeChild(nodes[index]); }
            if (nodes.length)
                { style.element.insertBefore(textNode, nodes[index]); }
            else
                { style.element.appendChild(textNode); }
        }
    }
}

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.tag, { tag: "component", staticClass: "vs-focus-container" }, [
    _vm.renderRedirector
      ? _c("span", {
          staticClass: "vs-focus-container__focus-redirector",
          attrs: { tabindex: "0" },
          on: {
            focus: function($event) {
              return _vm.redirectFocus($event, { isTabbingForward: false })
            }
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        ref: "content",
        staticClass: "vs-focus-container__content",
        attrs: { tabindex: "-1" }
      },
      [_vm._t("default")],
      2
    ),
    _vm._v(" "),
    !_vm.disabled && _vm.containFocus
      ? _c("span", {
          ref: "lastFocusable",
          staticClass: "vs-focus-container__last-focusable",
          attrs: { tabindex: "-1" }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.renderRedirector
      ? _c("span", {
          staticClass: "vs-focus-container__focus-redirector",
          attrs: { tabindex: "0" },
          on: {
            focus: function($event) {
              return _vm.redirectFocus($event, { isTabbingForward: true })
            }
          }
        })
      : _vm._e()
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-66187f5c_0", { source: ".vs-focus-container__focus-redirector, .vs-focus-container__last-focusable {\n  opacity: 0;\n  position: absolute;\n}\n.vs-focus-container__content {\n  outline: none;\n}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

/**
 * Shamlessly adapted from dominus v6.0.1 :)
 * https://github.com/bevacqua/dominus/blob/master/src/classes.js
 */

var trim = /^\s+|\s+$/g;
var whitespace = /\s+/g;

function isElementObject(o) {
  return o && typeof o === 'object' && typeof o.nodeName === 'string' && o.nodeType === 1;
}

function isElement(o) {
  var elementObjects = typeof HTMLElement === 'object';
  return elementObjects ? o instanceof HTMLElement : isElementObject(o);
}

function classes(el) {
  if (isElement(el)) {
    return (el.getAttribute('class') || '').replace(trim, '').split(whitespace);
  }
  return [];
}

function interpret(input) {
  return typeof input === 'string' ? input.replace(trim, '').split(whitespace) : input;
}

function set(el, input) {
  if (isElement(el)) {
    el.setAttribute('class', interpret(input).join(' '));
  }
}

function remove(el, input) {
  var current = classes(el);
  var values = interpret(input);
  values.forEach(function (value) {
    var i = current.indexOf(value);
    if (i !== -1) {
      current.splice(i, 1);
    }
  });
  set(el, current);
  return current;
}

function add(el, input) {
  var current = remove(el, input);
  var values = interpret(input);
  current.push.apply(current, values);
  set(el, current);
  return current;
}

function contains(el, input) {
  var current = classes(el);
  var values = interpret(input);
  return values.every(function (value) {
    return current.indexOf(value) !== -1;
  });
}

var classlist = {
  add: add,
  remove: remove,
  contains: contains,
  has: contains,
  set: set,
  get: classes,
};

//

var script$1 = {
  name: "VsModal",

  components: {
    VsFocusContainer: __vue_component__
  },

  props: {
    title: {
      type: String,
      default: "Modal title"
    },
    alignTop: {
      type: Boolean,
      default: false
    },
    alignTopMargin: {
      type: Number,
      default: 60
    },
    size: {
      type: String,
      default: "m"
    },
    role: {
      type: String,
      default: "dialog"
    },
    transition: {
      type: String,
      default: "slide-up"
    },
    removeHeader: {
      type: Boolean,
      default: false
    },
    removeCloseButton: {
      type: Boolean,
      default: false
    },
    preventShift: {
      type: Boolean,
      default: false
    },
    dismissible: {
      type: Boolean,
      default: true
    },
    dismissOn: {
      type: String,
      default: "backdrop esc close-button"
    },
    backdropBlur: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      isOpen: false,
      lastFocusedElement: null
    };
  },

  computed: {
    classes: function classes() {
      return [
        ("vs-modal--size-" + (this.size)),
        { "has-footer": this.hasFooter },
        { "is-open": this.isOpen },
        { "is-aligned-top": this.alignTop },
        { "is-backdrop-blur": this.backdropBlur }
      ];
    },

    alignTopStyle: function alignTopStyle() {
      if (this.alignTop) {
        return { "padding-top": ((this.alignTopMargin) + "px") };
      }
      return null;
    },

    toggleTransition: function toggleTransition() {
      return ("vs-modal--transition-" + (this.transition));
    },

    hasFooter: function hasFooter() {
      return Boolean(this.$slots.footer);
    },

    dismissOnBackdrop: function dismissOnBackdrop() {
      return this.dismissOn.indexOf("backdrop") > -1;
    },

    dismissOnCloseButton: function dismissOnCloseButton() {
      return this.dismissOn.indexOf("close-button") > -1;
    },

    dismissOnEsc: function dismissOnEsc() {
      return this.dismissOn.indexOf("esc") > -1;
    }
  },

  watch: {
    isOpen: function isOpen() {
      var this$1 = this;

      this.$nextTick(function () {
        this$1[this$1.isOpen ? "onOpen" : "onClose"]();
      });
    }
  },

  beforeDestroy: function beforeDestroy() {
    if (this.isOpen) {
      this.returnFocus();
    }
  },

  methods: {
    open: function open() {
      this.isOpen = true;
    },

    close: function close() {
      if (!this.dismissible) {
        return;
      }
      this.isOpen = false;
    },

    /**
     * ccessabiliy fix
     */
    redirectFocus: function redirectFocus() {
      this.$refs.focusContainer.focus();
    },

    returnFocus: function returnFocus() {
      if (this.lastFocusedElement) {
        this.lastFocusedElement.focus();
      }
    },

    /**
     * Dismiss modal on backdrop click
     */
    onBackdropClick: function onBackdropClick() {
      if (this.dismissOnBackdrop) {
        this.close();
      } else {
        this.redirectFocus();
      }
    },

    /**
     * Dismiss modal on esc key
     */
    onEsc: function onEsc() {
      if (this.dismissOnEsc) {
        this.close();
      }
    },

    /*
     * Add modal open class on body tag (good for future cases if modications are required)
     */
    onOpen: function onOpen() {
      this.lastFocusedElement = document.activeElement;
      this.$refs.focusContainer.focus();

      classlist.add(document.body, "vs-modal--is-open");
      this.incrementOpenModalCount();

      this.$emit("open");
    },

    /**
     * Emitted when modal starts to close
     */
    onClose: function onClose() {
      this.$emit("close");
      this.returnFocus();
    },

    /**
     * Emitted after transition is done and opened
     */
    onEnter: function onEnter() {
      this.$emit("reveal");
    },

    /**
     * Emitted after transition is done and closes
     */
    onLeave: function onLeave() {
      this.$emit("hide");
      var newCount = this.decrementOpenModalCount();

      // Remove modal open class on body tag
      if (newCount === 0) {
        classlist.remove(document.body, "vs-modal--is-open");
      }
    },

    getOpenModalCount: function getOpenModalCount() {
      var count = document.body.getAttribute("data-open-modals");
      return count === undefined ? 0 : Number(count);
    },

    /**
     * Set no. of modals open data attribute
     */
    setOpenModalCount: function setOpenModalCount(count) {
      var normalizedCount = Math.max(0, count);
      if (normalizedCount === 0) {
        document.body.removeAttribute("data-open-modals");
      } else {
        document.body.setAttribute("data-open-modals", normalizedCount);
      }
      return normalizedCount;
    },

    /**
     * Used if nested modals get activated
     */
    incrementOpenModalCount: function incrementOpenModalCount() {
      return this.setOpenModalCount(this.getOpenModalCount() + 1);
    },

    decrementOpenModalCount: function decrementOpenModalCount() {
      return this.setOpenModalCount(this.getOpenModalCount() - 1);
    }
  }
};

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWNxwqAAAAB3RSTlMAJeTmmCIcbPbyAQAAAOtJREFUSMeF1ksKwjAURuE6cF50BY4cC4oLEHQquAVXYIVs3wiFn3C4nA76SG+/PpLc2+l9fk7lsr3dp0c71QH79p2ubZmr85t+sgshCHTh1UIQaJe+DkFgmddNBZyyLYGRIAACAAgA2SeAAwI5OowBu/WaEJ95AI4BQBD4N6xEgFyQFsSTYDgJAmgkkFYCIACAAABiAEgAABGgIAIURICCCFAQAEAQYIDewh9SX9M/lH5q7yztbh8wOuR80Oqw94mjU88nr05/TyCagjyJaRr0RKqp2JO5lgMvKFqStKhpWbTC6qVZi7v+HvwAcK2oz9BduqwAAAAASUVORK5CYII=";

/* script */
var __vue_script__$1 = script$1;
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "transition",
    {
      attrs: { name: _vm.toggleTransition },
      on: { "after-enter": _vm.onEnter, "after-leave": _vm.onLeave }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isOpen,
              expression: "isOpen"
            }
          ],
          staticClass: "vs-modal vs-modal__mask",
          class: _vm.classes,
          attrs: { role: _vm.role },
          on: {
            click: function($event) {
              if ($event.target !== $event.currentTarget) {
                return null
              }
              return _vm.onBackdropClick($event)
            }
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "vs-modal__wrapper",
              class: { "has-dummy-scrollbar": _vm.preventShift },
              style: _vm.alignTopStyle,
              on: {
                click: function($event) {
                  if ($event.target !== $event.currentTarget) {
                    return null
                  }
                  return _vm.onBackdropClick($event)
                }
              }
            },
            [
              _c(
                "vs-focus-container",
                {
                  ref: "focusContainer",
                  staticClass: "vs-modal__container",
                  attrs: { tabindex: "-1" },
                  nativeOn: {
                    keydown: function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "esc", 27, $event.key, [
                          "Esc",
                          "Escape"
                        ])
                      ) {
                        return null
                      }
                      $event.stopPropagation();
                      return _vm.onEsc($event)
                    }
                  }
                },
                [
                  _vm._t("header", [
                    !_vm.removeHeader
                      ? _c("div", { staticClass: "vs-modal__header" }, [
                          _c("h2", { staticClass: "vs-modal__header-text" }, [
                            _vm._v(_vm._s(_vm.title))
                          ])
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vs-modal__close-button" },
                    [
                      _vm._t("close", [
                        _vm.dismissOnCloseButton &&
                        !_vm.removeCloseButton &&
                        _vm.dismissible
                          ? _c("button", { on: { click: _vm.close } }, [
                              _c("img", {
                                attrs: {
                                  src: img,
                                  alt: "close"
                                }
                              })
                            ])
                          : _vm._e()
                      ])
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vs-modal__body" },
                    [_vm._t("default")],
                    2
                  ),
                  _vm._v(" "),
                  _vm.hasFooter
                    ? _c(
                        "div",
                        { staticClass: "vs-modal__footer" },
                        [_vm._t("footer")],
                        2
                      )
                    : _vm._e()
                ],
                2
              )
            ],
            1
          )
        ]
      )
    ]
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  var __vue_inject_styles__$1 = function (inject) {
    if (!inject) { return }
    inject("data-v-71319304_0", { source: ".vs-modal {\n  font-size: 0.875em;\n}\n.vs-modal.is-aligned-top .vs-modal__wrapper {\n  vertical-align: initial;\n}\n.vs-modal.is-aligned-top.has-footer .vs-modal__body {\n  max-height: calc(100vh - 125px);\n}\n.vs-modal.has-footer .vs-modal__body {\n  max-height: calc(100vh - 125px);\n}\n.vs-modal:not(.has-footer) .vs-modal__body {\n  padding: 21px 24px;\n}\n.vs-modal--is-open {\n  overflow: hidden;\n}\n.vs-modal.is-backdrop-blur {\n  backdrop-filter: blur(3px);\n}\n.vs-modal__mask {\n  display: table;\n  position: fixed;\n  z-index: 800;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  transition: opacity 0.3s ease;\n  background-color: rgba(51, 51, 51, 0.5);\n}\n.vs-modal__wrapper {\n  display: table-cell;\n  overflow-x: hidden;\n  text-align: center;\n  vertical-align: middle;\n}\n.vs-modal__wrapper.has-dummy-scrollbar {\n  overflow-y: scroll;\n}\n.vs-modal__container {\n  display: inline-block;\n  position: relative;\n  width: 530px;\n  max-width: 100vw;\n  max-height: 100vh;\n  margin: 0 auto;\n  padding: 0;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  border-radius: 3px;\n  outline: none;\n  background-color: #ffffff;\n  box-shadow: 0 2px 8px rgba(51, 51, 51, 0.33);\n  text-align: initial;\n}\n.vs-modal__header {\n  display: flex;\n  position: relative;\n  z-index: 1;\n  align-items: center;\n  height: 55px;\n  padding: 0 24px;\n}\n.vs-modal__header-text {\n  display: flex;\n  flex-grow: 1;\n  align-items: center;\n  margin: 0;\n  font-size: 1.125em;\n  font-weight: normal;\n}\n.vs-modal__close-button button {\n  position: absolute;\n  z-index: 100;\n  top: 15px;\n  right: 20px;\n  background: none;\n  border: none;\n  text-align: right;\n  margin: 0;\n}\n.vs-modal__close-button button img {\n  width: 12px;\n  height: 12px;\n}\n.vs-modal__body {\n  max-height: calc(100vh - 55px);\n  padding: 16px 24px;\n  overflow-y: auto;\n}\n.vs-modal__footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: 70px;\n  padding: 0 24px;\n}\n.vs-modal--size-s > .vs-modal__wrapper > .vs-modal__container {\n  width: 320px;\n}\n.vs-modal--size-l > .vs-modal__wrapper > .vs-modal__container {\n  width: 850px;\n}\n.vs-modal--size-fullscreen > .vs-modal__wrapper > .vs-modal__container {\n  width: 100vw;\n  border-radius: 0;\n}\n.vs-modal--size-fullscreen > .vs-modal__wrapper > .vs-modal__container .vs-modal__body {\n  height: 100vh;\n  max-height: 100vh;\n}\n.vs-modal--size-auto > .vs-modal__wrapper > .vs-modal__container {\n  width: initial;\n}\n.vs-modal--transition-fade-enter, .vs-modal--transition-fade-leave-active {\n  opacity: 0;\n}\n.vs-modal--transition-slide-up-enter, .vs-modal--transition-slide-up-leave-active {\n  opacity: 0;\n}\n.vs-modal--transition-slide-up-enter .vs-modal__container, .vs-modal--transition-slide-up-leave-active .vs-modal__container {\n  transform: translateY(20px);\n}\n.vs-modal--transition-slide-down-enter, .vs-modal--transition-slide-down-leave-active {\n  opacity: 0;\n}\n.vs-modal--transition-slide-down-enter .vs-modal__container, .vs-modal--transition-slide-down-leave-active .vs-modal__container {\n  transform: translateY(-20px);\n}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    createInjector,
    undefined,
    undefined
  );

// Import vue component

// Declare install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Vue.component('VsModal', __vue_component__$1);
}

// Create module definition for Vue.use()
var plugin = {
  install: install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default __vue_component__$1;
export { install };
