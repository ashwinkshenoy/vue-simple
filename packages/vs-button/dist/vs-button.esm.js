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
  name: 'VsLoader',

  props: {
    color: {
      type: String,
      default: '#1f73b7',
    },

    size: {
      type: Number,
      default: 40,
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

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "svg",
    {
      attrs: {
        width: _vm.size,
        height: "30",
        viewBox: "0 0 120 30",
        xmlns: "http://www.w3.org/2000/svg",
        fill: _vm.color
      }
    },
    [
      _c("circle", { attrs: { cx: "15", cy: "15", r: "15" } }, [
        _c("animate", {
          attrs: {
            attributeName: "r",
            from: "15",
            to: "15",
            begin: "0s",
            dur: "0.8s",
            values: "15;9;15",
            calcMode: "linear",
            repeatCount: "indefinite"
          }
        }),
        _vm._v(" "),
        _c("animate", {
          attrs: {
            attributeName: "fill-opacity",
            from: "1",
            to: "1",
            begin: "0s",
            dur: "0.8s",
            values: "1;.5;1",
            calcMode: "linear",
            repeatCount: "indefinite"
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "circle",
        { attrs: { cx: "60", cy: "15", r: "9", "fill-opacity": "0.3" } },
        [
          _c("animate", {
            attrs: {
              attributeName: "r",
              from: "9",
              to: "9",
              begin: "0s",
              dur: "0.8s",
              values: "9;15;9",
              calcMode: "linear",
              repeatCount: "indefinite"
            }
          }),
          _vm._v(" "),
          _c("animate", {
            attrs: {
              attributeName: "fill-opacity",
              from: "0.5",
              to: "0.5",
              begin: "0s",
              dur: "0.8s",
              values: ".5;1;.5",
              calcMode: "linear",
              repeatCount: "indefinite"
            }
          })
        ]
      ),
      _vm._v(" "),
      _c("circle", { attrs: { cx: "105", cy: "15", r: "15" } }, [
        _c("animate", {
          attrs: {
            attributeName: "r",
            from: "15",
            to: "15",
            begin: "0s",
            dur: "0.8s",
            values: "15;9;15",
            calcMode: "linear",
            repeatCount: "indefinite"
          }
        }),
        _vm._v(" "),
        _c("animate", {
          attrs: {
            attributeName: "fill-opacity",
            from: "1",
            to: "1",
            begin: "0s",
            dur: "0.8s",
            values: "1;.5;1",
            calcMode: "linear",
            repeatCount: "indefinite"
          }
        })
      ])
    ]
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
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
    undefined,
    undefined,
    undefined
  );

//

var script$1 = {
  name: 'VsButton',

  components: {
    VsLoader: __vue_component__,
  },

  props: {
    variant: {
      type: String,
      default: 'primary',
    },
    // small. medium, large
    size: {
      type: String,
      default: 'medium',
    },
    fill: {
      type: Boolean,
      default: false,
    },
    isRound: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: [Boolean, String],
      default: false,
    },
    href: {
      type: String,
    },
    target: {
      type: String,
    },
    rel: {
      type: String,
    },
  },

  computed: {
    classList: function classList() {
      return [
        [this.variant === 'link' ? 'vs-button__link' : ("vs-button__" + (this.variant) + (this.fill ? '-fill' : ''))],
        ("vs-button--" + (this.size)),
        { 'vs-button--loading': this.isLoading },
        { 'vs-button--round': this.isRound } ];
    },

    isLink: function isLink() {
      return this.variant === 'link' || !!this.href ? 'a' : 'button';
    },
  },

  methods: {
    emitClick: function emitClick() {
      if (!this.isLoading || !this.disabled) {
        this.$emit('click');
      }
    },
  },
};

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
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    _vm.isLink,
    {
      tag: "component",
      class: ["vs-button", _vm.classList],
      attrs: {
        role: _vm.href ? "button" : false,
        href: _vm.href,
        target: _vm.target,
        rel: _vm.rel,
        type: _vm.isLink ? "button" : false,
        disabled: _vm.disabled || _vm.isLoading
      },
      on: { click: _vm.emitClick }
    },
    [
      _vm.isLoading
        ? _vm._t("loader", [_c("vs-loader", { attrs: { size: 35 } })])
        : _vm._t("default")
    ],
    2
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  var __vue_inject_styles__$1 = function (inject) {
    if (!inject) { return }
    inject("data-v-46c4d507_0", { source: ".vs-button {\n  border-radius: 4px;\n  font-weight: 400;\n  box-sizing: border-box;\n  user-select: none;\n  padding: 0 1.07143em;\n  display: inline-flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  transition: border-color 0.25s ease-in-out 0s, box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s, color 0.25s ease-in-out 0s;\n  margin: 0px;\n  cursor: pointer;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  position: relative;\n}\n.vs-button.vs-button--small {\n  height: 32px;\n  line-height: 30px;\n  font-size: 12px;\n}\n.vs-button.vs-button--medium {\n  height: 40px;\n  line-height: 38px;\n  font-size: 14px;\n}\n.vs-button.vs-button--large {\n  height: 48px;\n  line-height: 46px;\n  font-size: 14px;\n}\n.vs-button.vs-button--round {\n  border-radius: 50px;\n}\n.vs-button.vs-button__primary, .vs-button.vs-button__primary:hover, .vs-button.vs-button__primary:focus {\n  background: transparent;\n  color: #1f73b7;\n  border: solid 1px #1f73b7;\n}\n.vs-button.vs-button__primary:hover, .vs-button.vs-button__primary:hover:hover, .vs-button.vs-button__primary:focus:hover {\n  border-color: #18588b;\n  background: #f2f8fd;\n  color: #18588b;\n}\n.vs-button.vs-button__primary:active, .vs-button.vs-button__primary:hover:active, .vs-button.vs-button__primary:focus:active {\n  border-color: #103c60;\n  background: #dcecf9;\n  color: #103c60;\n}\n.vs-button.vs-button__primary:focus-visible, .vs-button.vs-button__primary:hover:focus-visible, .vs-button.vs-button__primary:focus:focus-visible {\n  border-color: #18588b;\n  box-shadow: 0 0 0 0.2rem #85bdea;\n  outline: 0;\n}\n.vs-button.vs-button__primary:disabled, .vs-button.vs-button__primary.vs-button--loading, .vs-button.vs-button__primary:hover:disabled, .vs-button.vs-button__primary:hover.vs-button--loading, .vs-button.vs-button__primary:focus:disabled, .vs-button.vs-button__primary:focus.vs-button--loading {\n  background: #e9ebed;\n  border-color: transparent;\n  color: #c2c8cc;\n  cursor: no-drop;\n}\n.vs-button.vs-button__primary-fill, .vs-button.vs-button__primary-fill:focus {\n  background: #1f73b7;\n  color: #ffffff;\n  border: solid 1px #1f73b7;\n}\n.vs-button.vs-button__primary-fill:hover, .vs-button.vs-button__primary-fill:focus:hover {\n  border-color: #18588b;\n  background: #18588b;\n}\n.vs-button.vs-button__primary-fill:active, .vs-button.vs-button__primary-fill:focus:active {\n  border-color: #103c60;\n  background: #144a76;\n}\n.vs-button.vs-button__primary-fill:focus-visible, .vs-button.vs-button__primary-fill:focus:focus-visible {\n  border-color: #18588b;\n  box-shadow: 0 0 0 0.2rem #85bdea;\n  outline: 0;\n}\n.vs-button.vs-button__primary-fill:disabled, .vs-button.vs-button__primary-fill.vs-button--loading, .vs-button.vs-button__primary-fill:focus:disabled, .vs-button.vs-button__primary-fill:focus.vs-button--loading {\n  background: #e9ebed;\n  border-color: transparent;\n  color: #c2c8cc;\n  cursor: no-drop;\n}\n.vs-button.vs-button__success, .vs-button.vs-button__success:hover, .vs-button.vs-button__success:focus {\n  background: transparent;\n  color: #28a745;\n  border: solid 1px #28a745;\n}\n.vs-button.vs-button__success:hover, .vs-button.vs-button__success:hover:hover, .vs-button.vs-button__success:focus:hover {\n  border-color: #1e7e34;\n  background: #edfbf0;\n  color: #1e7e34;\n}\n.vs-button.vs-button__success:active, .vs-button.vs-button__success:hover:active, .vs-button.vs-button__success:focus:active {\n  border-color: #145523;\n  background: #d8f6df;\n  color: #145523;\n}\n.vs-button.vs-button__success:focus-visible, .vs-button.vs-button__success:hover:focus-visible, .vs-button.vs-button__success:focus:focus-visible {\n  border-color: #1e7e34;\n  box-shadow: 0 0 0 0.2rem #86e29b;\n  outline: 0;\n}\n.vs-button.vs-button__success:disabled, .vs-button.vs-button__success.vs-button--loading, .vs-button.vs-button__success:hover:disabled, .vs-button.vs-button__success:hover.vs-button--loading, .vs-button.vs-button__success:focus:disabled, .vs-button.vs-button__success:focus.vs-button--loading {\n  background: #e9ebed;\n  border-color: transparent;\n  color: #c2c8cc;\n  cursor: no-drop;\n}\n.vs-button.vs-button__success-fill, .vs-button.vs-button__success-fill:focus {\n  background: #28a745;\n  color: #ffffff;\n  border: solid 1px #28a745;\n}\n.vs-button.vs-button__success-fill:hover, .vs-button.vs-button__success-fill:focus:hover {\n  border-color: #1e7e34;\n  background: #1e7e34;\n}\n.vs-button.vs-button__success-fill:active, .vs-button.vs-button__success-fill:focus:active {\n  border-color: #145523;\n  background: #19692c;\n}\n.vs-button.vs-button__success-fill:focus-visible, .vs-button.vs-button__success-fill:focus:focus-visible {\n  border-color: #1e7e34;\n  box-shadow: 0 0 0 0.2rem #86e29b;\n  outline: 0;\n}\n.vs-button.vs-button__success-fill:disabled, .vs-button.vs-button__success-fill.vs-button--loading, .vs-button.vs-button__success-fill:focus:disabled, .vs-button.vs-button__success-fill:focus.vs-button--loading {\n  background: #e9ebed;\n  border-color: transparent;\n  color: #c2c8cc;\n  cursor: no-drop;\n}\n.vs-button.vs-button__danger, .vs-button.vs-button__danger:hover, .vs-button.vs-button__danger:focus {\n  background: transparent;\n  color: #cc3340;\n  border: solid 1px #cc3340;\n}\n.vs-button.vs-button__danger:hover, .vs-button.vs-button__danger:hover:hover, .vs-button.vs-button__danger:focus:hover {\n  border-color: #a32933;\n  background: white;\n  color: #a32933;\n}\n.vs-button.vs-button__danger:active, .vs-button.vs-button__danger:hover:active, .vs-button.vs-button__danger:focus:active {\n  border-color: #7a1f26;\n  background: white;\n  color: #7a1f26;\n}\n.vs-button.vs-button__danger:focus-visible, .vs-button.vs-button__danger:hover:focus-visible, .vs-button.vs-button__danger:focus:focus-visible {\n  border-color: #a32933;\n  box-shadow: 0 0 0 0.2rem #ebadb3;\n  outline: 0;\n}\n.vs-button.vs-button__danger:disabled, .vs-button.vs-button__danger.vs-button--loading, .vs-button.vs-button__danger:hover:disabled, .vs-button.vs-button__danger:hover.vs-button--loading, .vs-button.vs-button__danger:focus:disabled, .vs-button.vs-button__danger:focus.vs-button--loading {\n  background: #e9ebed;\n  border-color: transparent;\n  color: #c2c8cc;\n  cursor: no-drop;\n}\n.vs-button.vs-button__danger-fill, .vs-button.vs-button__danger-fill:focus {\n  background: #cc3340;\n  color: #ffffff;\n  border: solid 1px #cc3340;\n}\n.vs-button.vs-button__danger-fill:hover, .vs-button.vs-button__danger-fill:focus:hover {\n  border-color: #a32933;\n  background: #a32933;\n}\n.vs-button.vs-button__danger-fill:active, .vs-button.vs-button__danger-fill:focus:active {\n  border-color: #7a1f26;\n  background: #8f242d;\n}\n.vs-button.vs-button__danger-fill:focus-visible, .vs-button.vs-button__danger-fill:focus:focus-visible {\n  border-color: #a32933;\n  box-shadow: 0 0 0 0.2rem #ebadb3;\n  outline: 0;\n}\n.vs-button.vs-button__danger-fill:disabled, .vs-button.vs-button__danger-fill.vs-button--loading, .vs-button.vs-button__danger-fill:focus:disabled, .vs-button.vs-button__danger-fill:focus.vs-button--loading {\n  background: #e9ebed;\n  border-color: transparent;\n  color: #c2c8cc;\n  cursor: no-drop;\n}\n.vs-button.vs-button__warning, .vs-button.vs-button__warning:hover, .vs-button.vs-button__warning:focus {\n  background: transparent;\n  color: #ffb057;\n  border: solid 1px #ffb057;\n}\n.vs-button.vs-button__warning:hover, .vs-button.vs-button__warning:hover:hover, .vs-button.vs-button__warning:focus:hover {\n  border-color: #ff9824;\n  background: white;\n  color: #ff9824;\n}\n.vs-button.vs-button__warning:active, .vs-button.vs-button__warning:hover:active, .vs-button.vs-button__warning:focus:active {\n  border-color: #f07f00;\n  background: white;\n  color: #f07f00;\n}\n.vs-button.vs-button__warning:focus-visible, .vs-button.vs-button__warning:hover:focus-visible, .vs-button.vs-button__warning:focus:focus-visible {\n  border-color: #ff9824;\n  box-shadow: 0 0 0 0.2rem #fff8f0;\n  outline: 0;\n}\n.vs-button.vs-button__warning:disabled, .vs-button.vs-button__warning.vs-button--loading, .vs-button.vs-button__warning:hover:disabled, .vs-button.vs-button__warning:hover.vs-button--loading, .vs-button.vs-button__warning:focus:disabled, .vs-button.vs-button__warning:focus.vs-button--loading {\n  background: #e9ebed;\n  border-color: transparent;\n  color: #c2c8cc;\n  cursor: no-drop;\n}\n.vs-button.vs-button__warning-fill, .vs-button.vs-button__warning-fill:focus {\n  background: #ffb057;\n  color: #703815;\n  border: solid 1px #ffb057;\n}\n.vs-button.vs-button__warning-fill:hover, .vs-button.vs-button__warning-fill:focus:hover {\n  border-color: #ff9824;\n  background: #ff9824;\n}\n.vs-button.vs-button__warning-fill:active, .vs-button.vs-button__warning-fill:focus:active {\n  border-color: #f07f00;\n  background: #ff8c0b;\n}\n.vs-button.vs-button__warning-fill:focus-visible, .vs-button.vs-button__warning-fill:focus:focus-visible {\n  border-color: #ff9824;\n  box-shadow: 0 0 0 0.2rem #fff8f0;\n  outline: 0;\n}\n.vs-button.vs-button__warning-fill:disabled, .vs-button.vs-button__warning-fill.vs-button--loading, .vs-button.vs-button__warning-fill:focus:disabled, .vs-button.vs-button__warning-fill:focus.vs-button--loading {\n  background: #e9ebed;\n  border-color: transparent;\n  color: #c2c8cc;\n  cursor: no-drop;\n}\n.vs-button.vs-button__secondary, .vs-button.vs-button__secondary:hover, .vs-button.vs-button__secondary:focus {\n  background: transparent;\n  color: #6c757d;\n  border: solid 1px #6c757d;\n}\n.vs-button.vs-button__secondary:hover, .vs-button.vs-button__secondary:hover:hover, .vs-button.vs-button__secondary:focus:hover {\n  border-color: #545b62;\n  background: white;\n  color: #545b62;\n}\n.vs-button.vs-button__secondary:active, .vs-button.vs-button__secondary:hover:active, .vs-button.vs-button__secondary:focus:active {\n  border-color: #3d4246;\n  background: #f3f4f5;\n  color: #3d4246;\n}\n.vs-button.vs-button__secondary:focus-visible, .vs-button.vs-button__secondary:hover:focus-visible, .vs-button.vs-button__secondary:focus:focus-visible {\n  border-color: #545b62;\n  box-shadow: 0 0 0 0.2rem #bcc1c6;\n  outline: 0;\n}\n.vs-button.vs-button__secondary:disabled, .vs-button.vs-button__secondary.vs-button--loading, .vs-button.vs-button__secondary:hover:disabled, .vs-button.vs-button__secondary:hover.vs-button--loading, .vs-button.vs-button__secondary:focus:disabled, .vs-button.vs-button__secondary:focus.vs-button--loading {\n  background: #e9ebed;\n  border-color: transparent;\n  color: #c2c8cc;\n  cursor: no-drop;\n}\n.vs-button.vs-button__secondary-fill, .vs-button.vs-button__secondary-fill:focus {\n  background: #6c757d;\n  color: #ffffff;\n  border: solid 1px #6c757d;\n}\n.vs-button.vs-button__secondary-fill:hover, .vs-button.vs-button__secondary-fill:focus:hover {\n  border-color: #545b62;\n  background: #545b62;\n}\n.vs-button.vs-button__secondary-fill:active, .vs-button.vs-button__secondary-fill:focus:active {\n  border-color: #3d4246;\n  background: #494f54;\n}\n.vs-button.vs-button__secondary-fill:focus-visible, .vs-button.vs-button__secondary-fill:focus:focus-visible {\n  border-color: #545b62;\n  box-shadow: 0 0 0 0.2rem #bcc1c6;\n  outline: 0;\n}\n.vs-button.vs-button__secondary-fill:disabled, .vs-button.vs-button__secondary-fill.vs-button--loading, .vs-button.vs-button__secondary-fill:focus:disabled, .vs-button.vs-button__secondary-fill:focus.vs-button--loading {\n  background: #e9ebed;\n  border-color: transparent;\n  color: #c2c8cc;\n  cursor: no-drop;\n}\n.vs-button.vs-button__light, .vs-button.vs-button__light:hover, .vs-button.vs-button__light:focus {\n  background: transparent;\n  color: #f8f9fa;\n  border: solid 1px #f8f9fa;\n}\n.vs-button.vs-button__light:hover, .vs-button.vs-button__light:hover:hover, .vs-button.vs-button__light:focus:hover {\n  border-color: #dae0e5;\n  background: white;\n  color: #dae0e5;\n}\n.vs-button.vs-button__light:active, .vs-button.vs-button__light:hover:active, .vs-button.vs-button__light:focus:active {\n  border-color: #bdc6d0;\n  background: white;\n  color: #bdc6d0;\n}\n.vs-button.vs-button__light:focus-visible, .vs-button.vs-button__light:hover:focus-visible, .vs-button.vs-button__light:focus:focus-visible {\n  border-color: #dae0e5;\n  box-shadow: 0 0 0 0.2rem white;\n  outline: 0;\n}\n.vs-button.vs-button__light:disabled, .vs-button.vs-button__light.vs-button--loading, .vs-button.vs-button__light:hover:disabled, .vs-button.vs-button__light:hover.vs-button--loading, .vs-button.vs-button__light:focus:disabled, .vs-button.vs-button__light:focus.vs-button--loading {\n  background: #e9ebed;\n  border-color: transparent;\n  color: #c2c8cc;\n  cursor: no-drop;\n}\n.vs-button.vs-button__light-fill, .vs-button.vs-button__light-fill:focus {\n  background: #f8f9fa;\n  color: #212529;\n  border: solid 1px #f8f9fa;\n}\n.vs-button.vs-button__light-fill:hover, .vs-button.vs-button__light-fill:focus:hover {\n  border-color: #dae0e5;\n  background: #dae0e5;\n}\n.vs-button.vs-button__light-fill:active, .vs-button.vs-button__light-fill:focus:active {\n  border-color: #bdc6d0;\n  background: #cbd3da;\n}\n.vs-button.vs-button__light-fill:focus-visible, .vs-button.vs-button__light-fill:focus:focus-visible {\n  border-color: #dae0e5;\n  box-shadow: 0 0 0 0.2rem white;\n  outline: 0;\n}\n.vs-button.vs-button__light-fill:disabled, .vs-button.vs-button__light-fill.vs-button--loading, .vs-button.vs-button__light-fill:focus:disabled, .vs-button.vs-button__light-fill:focus.vs-button--loading {\n  background: #e9ebed;\n  border-color: transparent;\n  color: #c2c8cc;\n  cursor: no-drop;\n}\n.vs-button.vs-button__link {\n  background: transparent;\n  color: #1f73b7;\n  border: none;\n  padding: 0;\n}\n.vs-button.vs-button__link:hover {\n  text-decoration: underline;\n}", map: undefined, media: undefined });

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
  Vue.component('VsButton', __vue_component__$1);
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