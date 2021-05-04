(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.VsSelect = {}));
}(this, (function (exports) { 'use strict';

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
    props: {
      label: {
        type: String,
        required: false,
      },
      required: {
        type: Boolean,
      },
      placeholder: {
        type: String,
        required: false,
        default: 'Select',
      },
      // For array of object - pass value
      preselected: {
        type: String,
        required: false,
      },
      value: {
        type: String,
        required: false,
      },
      // Array or array of object
      // 1) [1,2,3]
      // 2) [{label: 'Jack', value: '1'}, {label: 'Bill', value: '2'}]
      options: {
        type: Array,
        required: true,
      },
      hasEmptyOption: {
        type: Boolean,
        required: false,
      },
      isError: {
        type: Boolean,
        requied: false,
      },
      isSearch: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      isMenu: {
        type: Boolean,
        default: false,
      },
      isCompact: {
        type: Boolean,
        default: false,
      },
      emptyItemsText: {
        type: String,
        default: 'No Data Available',
      },
    },

    data: function data() {
      return {
        isMenuHidden: true,
        inputValue: this.placeholder,
        selected: null,
        selectedObject: {},
        isObject: false,
        searchTerm: '',
        isMenuTop: false,
      };
    },

    computed: {
      selectOptions: function selectOptions() {
        var this$1 = this;

        return (
          this.options.filter(
            function (list) { return !this$1.searchTerm || new RegExp(this$1.searchTerm, 'i').test(this$1.isObject ? list.label : list); }
          ) || ''
        );
      },

      isReadonly: function isReadonly() {
        if (this.isSearch && !this.disabled && !this.isMenu) {
          return false;
        }
        return true;
      },
    },

    watch: {
      inputValue: function inputValue(value) {
        if (!this.isMenuHidden) {
          this.searchTerm = value;
        }
      },

      preselected: function preselected() {
        this.selected = this.preselected;
      },

      value: function value() {
        this.selected = this.value;
        this.inputValue = this.value;
      },

      options: {
        handler: 'initOptions',
        immediate: false,
      },
    },

    created: function created() {
      this.initOptions();
    },

    mounted: function mounted() {
      if (window) {
        this.handleScroll();
        window.addEventListener('scroll', this.handleScroll);
      }
    },

    destroyed: function destroyed() {
      if (window) {
        window.removeEventListener('scroll', this.handleScroll);
      }
    },

    methods: {
      initOptions: function initOptions() {
        var this$1 = this;

        // If Array of Object
        if (
          this.options.some(function (value) {
            return typeof value == 'object';
          })
        ) {
          this.isObject = true;
          if (this.preselected) {
            var selectedFilter = this.options.filter(function (item) { return item.value === this$1.preselected; });
            if (selectedFilter.length > 0) {
              this.selectedObject = selectedFilter[0];
              this.selected = this.selectedObject.value;
              this.inputValue = this.selectedObject.label;
              return;
            }
          }
          if (this.value) {
            // const valueObj = this.options.filter((i) => this.value.find((item) => i.value === item))[0];
            var selectedFilter$1 = this.options.filter(function (item) { return item.value === this$1.value; });
            if (selectedFilter$1.length > 0) {
              this.selectedObject = selectedFilter$1[0];
              this.selected = this.selectedObject.value;
              this.inputValue = this.selectedObject.label;
            }
          }
        } else {
          this.isObject = false;
          this.selected = '';
          if (this.preselected) {
            this.selected = this.inputValue = this.preselected;
            return;
          }
          if (this.value) {
            this.selected = this.inputValue = this.value;
          }
        }
      },

      onSelectedItem: function onSelectedItem(option) {
        this.searchTerm = '';
        this.inputValue = '';
        this.isMenuHidden = true;
        // If Array of Object
        // 2 diff emits of input/on-select are required
        if (this.isObject) {
          this.selectedObject = this.options.filter(function (i) { return i.value === option.value; })[0];
          this.selected = this.selectedObject.label;
          this.$emit('input', this.selectedObject.value);
          this.$emit('on-select', this.selectedObject.value);
        } else {
          this.selected = this.options.filter(function (i) { return i === option; })[0];
          this.$emit('input', this.selected);
          this.$emit('on-select', this.options.indexOf(this.selected), this.selected);
        }
        this.searchTerm = '';
        this.inputValue = this.selected;
      },

      searchSelectList: function searchSelectList() {
        this.searchTerm = this.selected;
      },

      setInnerText: function setInnerText(value) {
        this.inputValue = value;
      },

      handleScroll: function handleScroll() {
        if (window.innerHeight - this.$refs['vs-select-box'].getBoundingClientRect().bottom < 250) {
          this.isMenuTop = true;
        } else {
          this.isMenuTop = false;
        }
      },

      setSelectEnv: function setSelectEnv() {
        if (!this.isMenuHidden && !this.searchTerm) {
          this.isMenuHidden = true;
          this.$refs['vs-select-box'].blur();
          return;
        }
        this.$refs['vs-select-box'].focus();
        this.isMenuHidden = false;
        if (!this.searchTerm && this.isSearch && !this.isMenu) {
          this.inputValue = '';
        }
      },

      setSelectClose: function setSelectClose() {
        this.isMenuHidden = true;
        this.$refs['vs-select-box'].blur();
        if (this.selected && !this.isObject) {
          this.inputValue = this.selected;
        }
        if (this.selected && this.isObject) {
          this.inputValue = this.selectedObject.label;
        }
        if (!this.selected) {
          this.inputValue = this.placeholder;
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
    return _c(
      "div",
      { class: ["vs-select", { "vs-select--compact": _vm.isCompact }] },
      [
        _c("label", { staticClass: "vs-select__label" }, [
          _c("span", [_vm._v(_vm._s(_vm.label))]),
          _vm._v(" "),
          _vm.required
            ? _c("span", { staticClass: "vs-select--required" }, [_vm._v(" *")])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "vs-select__input-wrapper",
            class: [
              { "vs-select--error": _vm.isError },
              { "vs-select--cursor-pointer": !_vm.isSearch },
              { "vs-select--is-open": !_vm.isMenuHidden },
              { "vs-select--disabled": _vm.disabled },
              { "vs-select--menu": _vm.isMenu }
            ]
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.inputValue,
                  expression: "inputValue"
                }
              ],
              ref: "vs-select-box",
              class: [
                "vs-select__input",
                { "vs-select--cursor-pointer": _vm.isMenuHidden }
              ],
              attrs: {
                disabled: _vm.disabled,
                readonly: _vm.isReadonly,
                role: "menu",
                "aria-haspopup": "true",
                "aria-expanded": !_vm.isMenuHidden
              },
              domProps: { value: _vm.inputValue },
              on: {
                click: function($event) {
                  !_vm.disabled ? _vm.setSelectEnv() : null;
                },
                keyup: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  !_vm.disabled ? _vm.setSelectEnv() : null;
                },
                blur: _vm.setSelectClose,
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.inputValue = $event.target.value;
                }
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "vs-select__icon" }, [
              _c(
                "svg",
                {
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      fill: "currentColor",
                      d:
                        "M1.646 3.646a.5.5 0 01.638-.057l.07.057L6 7.293l3.646-3.647a.5.5 0 01.638-.057l.07.057a.5.5 0 01.057.638l-.057.07-4 4a.5.5 0 01-.638.057l-.07-.057-4-4a.5.5 0 010-.708z"
                    }
                  })
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        !_vm.disabled
          ? _c("div", { staticClass: "vs-select__menu-wrapper" }, [
              _c(
                "ul",
                {
                  class: [
                    "vs-select__menu",
                    { "vs-select__menu--top": _vm.isMenuTop }
                  ],
                  attrs: {
                    "aria-hidden": !_vm.disabled ? _vm.isMenuHidden : true
                  }
                },
                [
                  _vm._t(
                    "options",
                    [
                      _vm.hasEmptyOption
                        ? _c(
                            "li",
                            {
                              staticClass: "vs-select__menu-item",
                              attrs: { role: "menuitem" },
                              on: {
                                click: function($event) {
                                  return _vm.onSelectedItem(-1)
                                }
                              }
                            },
                            [_vm._v("\n          -\n        ")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._l(_vm.selectOptions, function(option, index) {
                        return _c(
                          "li",
                          {
                            key: "vs-selected-" + index,
                            class: [
                              "vs-select__menu-item",
                              {
                                "vs-select__menu--is-checked":
                                  !_vm.isMenu && _vm.selected === option
                              },
                              {
                                "vs-select__menu--is-checked":
                                  !_vm.isMenu &&
                                  _vm.isObject &&
                                  _vm.selectedObject.value === option.value
                              },
                              {
                                "vs-select__menu-item--is-disabled":
                                  option.disabled
                              }
                            ],
                            attrs: {
                              "aria-selected":
                                (_vm.isObject &&
                                  _vm.selectedObject.value === option.value) ||
                                _vm.selected === option,
                              role: "menuitem",
                              tabIndex: "0"
                            },
                            on: {
                              click: function($event) {
                                !option.disabled
                                  ? _vm.onSelectedItem(option, index)
                                  : null;
                              }
                            }
                          },
                          [
                            _vm.isObject
                              ? _c("span", [_vm._v(_vm._s(option.label))])
                              : _c("span", [_vm._v(_vm._s(option))])
                          ]
                        )
                      }),
                      _vm._v(" "),
                      !_vm.selectOptions.length
                        ? _c(
                            "li",
                            {
                              staticClass:
                                "vs-select__menu-item vs-select__menu--no-item",
                              attrs: { role: "menuitem" }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(_vm.emptyItemsText) +
                                  "\n        "
                              )
                            ]
                          )
                        : _vm._e()
                    ],
                    {
                      options: _vm.selectOptions,
                      selected: _vm.selected,
                      selectedObject: _vm.selectedObject,
                      onSelectedItem: _vm.onSelectedItem
                    }
                  )
                ],
                2
              )
            ])
          : _vm._e()
      ]
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = function (inject) {
      if (!inject) { return }
      inject("data-v-0f9888b0_0", { source: ".vs-select {\n  --vs-select-color: #1f73b7;\n  --vs-select-bg: #ffffff;\n  --vs-select-border: #d8dcde;\n  --vs-select-border-hover: #5293c7;\n  --vs-select-hover: #edf7ff;\n  --vs-select-error: #cc3340;\n  --vs-select-icon: #68737d;\n  --vs-select-border-radius: 4px;\n  width: 100%;\n  position: relative;\n}\n.vs-select:hover .vs-select__input-wrapper {\n  border-color: var(--vs-select-border-hover);\n}\n.vs-select__label {\n  line-height: 1.42857;\n  color: #2f3941;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 8px;\n  display: inline-block;\n}\n.vs-select--cursor-pointer {\n  cursor: pointer;\n}\n.vs-select--error .vs-select__input-wrapper {\n  border-color: var(--vs-select-error);\n}\n.vs-select--compact .vs-select__input-wrapper {\n  min-height: 32px;\n  max-height: 32px;\n}\n.vs-select--compact .vs-select__input {\n  padding: 7px 37px 7px 11px;\n}\n.vs-select--compact .vs-select__menu--top {\n  bottom: 32px;\n}\n.vs-select__input-wrapper {\n  overflow: hidden;\n  position: relative;\n  text-align: left;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.25s ease-in-out, box-shadow 0.1s ease-in-out, background-color 0.25s ease-in-out, color 0.25s ease-in-out;\n  outline: 0;\n  border: 1px solid var(--vs-select-border);\n  border-radius: var(--vs-select-border-radius);\n  background-color: var(--vs-select-bg);\n  width: 100%;\n  min-height: 40px;\n  box-sizing: border-box;\n  vertical-align: middle;\n  line-height: 1.28571;\n  color: #2f3941;\n  font-family: inherit;\n  font-size: 14px;\n}\n.vs-select__input-wrapper .vs-select__icon {\n  position: absolute;\n  top: 58%;\n  right: 14px;\n  cursor: pointer;\n  transform: translateY(-50%);\n  color: var(--vs-select-icon);\n}\n.vs-select__input-wrapper .vs-select__icon svg {\n  transition: 0.17s all linear;\n  width: 12px;\n  height: 12px;\n}\n.vs-select__input-wrapper.vs-select--is-open .vs-select__icon svg {\n  transform: rotate(180deg);\n}\n.vs-select__input-wrapper.vs-select--menu {\n  border-color: var(--vs-select-color);\n}\n.vs-select__input-wrapper.vs-select--menu .vs-select__input,\n.vs-select__input-wrapper.vs-select--menu .vs-select__icon {\n  color: var(--vs-select-color);\n}\n.vs-select__input-wrapper.vs-select--disabled {\n  background: #f8f9f9;\n  cursor: no-drop;\n  border-color: #e9ebed;\n  user-select: none;\n}\n.vs-select__input-wrapper.vs-select--disabled:hover {\n  border-color: #e9ebed;\n}\n.vs-select__input-wrapper.vs-select--disabled .vs-select__input,\n.vs-select__input-wrapper.vs-select--disabled .vs-select__icon {\n  cursor: no-drop;\n  user-select: none;\n  color: #c2c8cc;\n}\n.vs-select__input {\n  color: #2f3941;\n  width: 77%;\n  border: none !important;\n  padding: 10px 37px 10px 15px;\n  box-shadow: none !important;\n  outline: none !important;\n  font-family: inherit;\n  background: transparent;\n  position: relative;\n  z-index: 50;\n}\n.vs-select__input[readonly] {\n  cursor: pointer;\n}\n.vs-select__menu {\n  z-index: 150;\n  max-height: 250px;\n  overflow: auto;\n  display: inline-block;\n  position: absolute;\n  margin: 0;\n  box-sizing: border-box;\n  border: 1px solid #d8dcde;\n  border-radius: var(--vs-select-border-radius);\n  box-shadow: 0 10px 20px 0 rgba(4, 68, 77, 0.15);\n  background-color: #fff;\n  cursor: default;\n  padding: 0;\n  min-width: 180px;\n  text-align: left;\n  white-space: normal;\n  font-size: 14px;\n  font-weight: 400;\n  width: 100%;\n  left: 0;\n}\n.vs-select__menu--top {\n  bottom: 40px;\n  box-shadow: 0 -2px 20px 0 rgba(4, 68, 77, 0.15);\n}\n.vs-select__menu-item {\n  display: block;\n  position: relative;\n  z-index: 0;\n  cursor: pointer;\n  padding: 8px 36px;\n  text-decoration: none;\n  line-height: 20px;\n  word-wrap: break-word;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.vs-select__menu-item:hover {\n  background-color: var(--vs-select-hover);\n  text-decoration: none;\n}\n.vs-select__menu-item:focus {\n  outline: none;\n}\n.vs-select__menu-item:first-child {\n  margin-top: 4px;\n}\n.vs-select__menu-item:last-child {\n  margin-bottom: 4px;\n}\n.vs-select__menu-item:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: opacity 0.1s ease-in-out;\n  transition: opacity 0.1s ease-in-out;\n  opacity: 0;\n  background: no-repeat 50%/16px url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' color='%231f73b7'%3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' d='M1 9l4 4L15 3'/%3E%3C/svg%3E\");\n  width: 32px;\n  height: 40px;\n  content: \"\";\n}\n.vs-select__menu-item--is-disabled {\n  color: #c2c8cc;\n  cursor: no-drop;\n}\n.vs-select__menu-item--is-disabled:hover {\n  background-color: transparent;\n}\n.vs-select__menu--no-item {\n  text-align: center;\n}\n.vs-select .vs-select__menu--is-checked:before,\n.vs-select .vs-select__menu-item[aria-checked=true]:before {\n  opacity: 1;\n}\n.vs-select .vs-select__menu[aria-hidden=true] {\n  display: inline-block;\n  transition: opacity 0.2s ease-in-out, visibility 0.2s linear 0s;\n  visibility: hidden;\n  opacity: 0;\n}", map: undefined, media: undefined });

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

  var script$1 = {
    props: {
      label: {
        type: String,
        required: false,
      },
      required: {
        type: Boolean,
      },
      placeholder: {
        type: String,
        required: false,
        default: 'Select',
      },
      // For array of object - pass value
      preselected: {
        type: Array,
        required: false,
      },
      value: {},
      // Array or array of object
      // 1) [1,2,3]
      // 2) [{label: 'Jack', value: '1'}, {label: 'Bill', value: '2'}]
      options: {
        type: Array,
        required: true,
      },
      hasEmptyOption: {
        type: Boolean,
        required: false,
      },
      isError: {
        type: Boolean,
        requied: false,
      },
      isSearch: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      emptyItemsText: {
        type: String,
        default: 'No Data Available',
      },
      isCompact: {
        type: Boolean,
        default: false,
      },
    },

    data: function data() {
      return {
        isMenuHidden: true,
        inputValue: this.placeholder,
        selected: null,
        selectedObject: {},
        isObject: false,
        searchTerm: '',
        selectedArrayObject: [],
        isMenuTop: false,
      };
    },

    computed: {
      selectOptions: function selectOptions() {
        var this$1 = this;

        return (
          this.options.filter(
            function (list) { return !this$1.searchTerm || new RegExp(this$1.searchTerm, 'i').test(this$1.isObject ? list.label : list); }
          ) || ''
        );
      },

      selectedItems: function selectedItems() {
        var items = this.selectedArrayObject;
        if (!this.isObject) {
          if (items.length > 2) {
            return ((items[0]) + ", " + (items[1]) + ", and " + (items.length - 2) + " more");
          }
          return this.selectedArrayObject.map(function (list) { return list; }).join(', ');
        }
        if (items.length > 2) {
          return ((items[0].label) + ", " + (items[1].label) + ", and " + (items.length - 2) + " more");
        }
        return this.selectedArrayObject.map(function (list) { return list.label; }).join(', ');
      },
    },

    watch: {
      inputValue: function inputValue(value) {
        if (!this.isMenuHidden) {
          this.searchTerm = value;
        }
      },

      value: function value(value$1) {
        this.selectedArrayObject = value$1;
      },

      options: {
        handler: 'initOptions',
        immediate: false,
      },
    },

    created: function created() {
      this.initOptions();
    },

    mounted: function mounted() {
      var this$1 = this;

      if (window) {
        window.addEventListener('click', function (e) {
          if (!this$1.$el.contains(e.target)) {
            this$1.isMenuHidden = true;
          }
        });
        this.handleScroll();
        window.addEventListener('scroll', this.handleScroll);
      }
    },

    destroyed: function destroyed() {
      if (window) {
        window.removeEventListener('scroll', this.handleScroll);
      }
    },

    methods: {
      initOptions: function initOptions() {
        var this$1 = this;

        // If Array of Object
        if (
          this.options.some(function (value) {
            return typeof value == 'object';
          })
        ) {
          this.isObject = true;
          // Set preselected
          this.selectedArrayObject = this.options.filter(
            function (ref) {
              var id1 = ref.value;

              return this$1.preselected && this$1.preselected.some(function (id2) { return id2 === id1; });
          }
          );
        } else {
          this.isObject = false;
          this.selected = this.preselected;
        }
      },

      setSelected: function setSelected(option) {
        if (this.isObject) {
          return this.selectedArrayObject.filter(function (list) { return list.value === option.value; }).length > 0;
        }
        return this.selectedArrayObject.filter(function (list) { return list === option; }).length > 0;
      },

      onSelectedItem: function onSelectedItem(option) {
        this.searchTerm = '';
        this.inputValue = '';
        this.isMenuHidden = false;
        // If Array of Object
        // 2 diff emits of input/on-select are required
        if (this.isObject) {
          var isContains = this.containsObject(this.selectedArrayObject, option);
          if (!isContains) {
            this.selectedArrayObject.push(option);
          } else {
            this.selectedArrayObject = this.selectedArrayObject.filter(function (i) { return i.value !== option.value; });
          }
        } else {
          var isContains$1 = this.selectedArrayObject.filter(function (i) { return option.includes(i); }).length > 0;
          if (!isContains$1) {
            this.selectedArrayObject.push(option);
          } else {
            this.selectedArrayObject = this.selectedArrayObject.filter(function (i) { return i !== option; });
          }
        }
        this.$emit('input', this.selectedArrayObject);
        this.$emit('on-select', this.selectedArrayObject);
        this.searchTerm = '';
        this.inputValue = this.selected;
      },

      containsObject: function containsObject(mainObject, selectedOption) {
        return mainObject.some(function (list) { return list.value === selectedOption.value; });
      },

      searchSelectList: function searchSelectList() {
        this.searchTerm = this.selected;
      },

      isMenu: function isMenu() {
        this.isMenuHidden = !this.isMenuHidden;
      },

      setInnerText: function setInnerText(value) {
        this.inputValue = value;
      },

      handleScroll: function handleScroll() {
        if (window.innerHeight - this.$refs['vs-multiselect'].getBoundingClientRect().bottom < 250) {
          this.isMenuTop = true;
        } else {
          this.isMenuTop = false;
        }
      },

      setSelectEnv: function setSelectEnv() {
        var this$1 = this;

        if (!this.isMenuHidden) {
          this.isMenuHidden = true;
          this.$refs['vs-multiselect-box'].blur();
          return;
        }
        this.isMenuHidden = false;
        this.$nextTick(function () { return this$1.$refs['vs-multiselect-box'].focus(); });
        if (!this.selected) {
          this.inputValue = '';
        }
      },

      setSelectClose: function setSelectClose() {
        this.isMenuHidden = true;
        this.$refs['vs-multiselect-box'].blur();
        if (this.selectedArrayObject.length > 0) {
          this.inputValue = this.selectedArrayObject;
        }
        if (!this.selectedArrayObject <= 0) {
          this.inputValue = this.label;
        }
      },
    },
  };

  /* script */
  var __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { class: ["vs-multiselect", { "vs-multiselect--compact": _vm.isCompact }] },
      [
        _c("label", { staticClass: "vs-multiselect__label" }, [
          _c("span", [_vm._v(_vm._s(_vm.label))]),
          _vm._v(" "),
          _vm.required
            ? _c("span", { staticClass: "vs-multiselect--required" }, [
                _vm._v(" *")
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            ref: "vs-multiselect",
            staticClass: "vs-multiselect__select-wrapper",
            class: [
              { "vs-multiselect--error": _vm.isError },
              { "vs-multiselect--is-open": !_vm.isMenuHidden },
              { "vs-multiselect--disabled": _vm.disabled }
            ],
            attrs: {
              role: "menu",
              "aria-haspopup": "true",
              "aria-expanded": !_vm.isMenuHidden
            },
            on: {
              click: function($event) {
                !_vm.disabled ? _vm.setSelectEnv() : null;
              }
            }
          },
          [
            _c("span", [
              _vm._v(
                "\n      " +
                  _vm._s(
                    _vm.selectedItems ? _vm.selectedItems : _vm.placeholder
                  ) +
                  "\n    "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vs-multiselect__icon" }, [
              _c(
                "svg",
                {
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      fill: "currentColor",
                      d:
                        "M1.646 3.646a.5.5 0 01.638-.057l.07.057L6 7.293l3.646-3.647a.5.5 0 01.638-.057l.07.057a.5.5 0 01.057.638l-.057.07-4 4a.5.5 0 01-.638.057l-.07-.057-4-4a.5.5 0 010-.708z"
                    }
                  })
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        !_vm.disabled
          ? _c("div", { staticClass: "vs-multiselect__menu-wrapper" }, [
              _c(
                "ul",
                {
                  class: [
                    "vs-multiselect__menu",
                    { "vs-multiselect__menu--top": _vm.isMenuTop },
                    { "vs-multiselect__no-search": !_vm.isSearch }
                  ],
                  attrs: {
                    "aria-hidden": !_vm.disabled ? _vm.isMenuHidden : true
                  }
                },
                [
                  _vm._t(
                    "options",
                    [
                      _vm.hasEmptyOption
                        ? _c(
                            "li",
                            {
                              staticClass: "vs-multiselect__menu-item",
                              on: {
                                click: function($event) {
                                  return _vm.onSelectedItem(-1)
                                }
                              }
                            },
                            [_vm._v("\n          -\n        ")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.isSearch,
                              expression: "isSearch"
                            }
                          ],
                          staticClass:
                            "vs-multiselect__menu-item vs-multiselect__input-wrapper",
                          attrs: { role: "menuitem" }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.inputValue,
                                expression: "inputValue"
                              }
                            ],
                            ref: "vs-multiselect-box",
                            staticClass: "vs-multiselect__input",
                            attrs: {
                              disabled: _vm.disabled,
                              placeholder: "Search..."
                            },
                            domProps: { value: _vm.inputValue },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.inputValue = $event.target.value;
                              }
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.selectOptions, function(option, index) {
                        return _c(
                          "li",
                          {
                            key: "vs-selected-" + index,
                            staticClass: "vs-multiselect__menu-item",
                            class: [
                              {
                                "vs-multiselect__menu--is-checked": _vm.setSelected(
                                  option
                                )
                              },
                              {
                                "vs-multiselect__menu-item--is-disabled":
                                  option.disabled
                              }
                            ],
                            attrs: {
                              "aria-selected": _vm.setSelected(option),
                              role: "menuitem",
                              tabIndex: "0"
                            },
                            on: {
                              click: function($event) {
                                !option.disabled
                                  ? _vm.onSelectedItem(option, index)
                                  : null;
                              }
                            }
                          },
                          [
                            _vm.isObject
                              ? _c("span", [_vm._v(_vm._s(option.label))])
                              : _c("span", [_vm._v(_vm._s(option))])
                          ]
                        )
                      }),
                      _vm._v(" "),
                      !_vm.selectOptions.length
                        ? _c(
                            "li",
                            {
                              staticClass:
                                "vs-multiselect__menu-item vs-multiselect__menu--no-item",
                              attrs: { role: "menuitem" }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(_vm.emptyItemsText) +
                                  "\n        "
                              )
                            ]
                          )
                        : _vm._e()
                    ],
                    {
                      options: _vm.selectOptions,
                      selected: _vm.selected,
                      selectedObject: _vm.selectedArrayObject,
                      onSelectedItem: _vm.onSelectedItem
                    }
                  )
                ],
                2
              )
            ])
          : _vm._e()
      ]
    )
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    var __vue_inject_styles__$1 = function (inject) {
      if (!inject) { return }
      inject("data-v-db317588_0", { source: ".vs-multiselect {\n  --vs-select-bg: #ffffff;\n  --vs-select-border: #d8dcde;\n  --vs-select-border-hover: #5293c7;\n  --vs-select-hover: #edf7ff;\n  --vs-select-error: #cc3340;\n  --vs-select-icon: #68737d;\n  --vs-select-border-radius: 4px;\n  width: 100%;\n  position: relative;\n}\n.vs-multiselect:hover .vs-multiselect__select-wrapper {\n  border-color: var(--vs-select-border-hover);\n}\n.vs-multiselect__label {\n  line-height: 1.42857;\n  color: #2f3941;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 8px;\n  display: inline-block;\n}\n.vs-multiselect__input-wrapper:hover {\n  background-color: transparent !important;\n}\n.vs-multiselect--compact .vs-multiselect__select-wrapper {\n  min-height: 32px;\n  max-height: 32px;\n}\n.vs-multiselect--compact .vs-multiselect__select-wrapper span {\n  padding: 7px 37px 7px 11px;\n}\n.vs-multiselect--compact .vs-multiselect__menu--top {\n  bottom: 32px;\n}\n.vs-multiselect__input {\n  width: 85%;\n  border: none !important;\n  padding: 0.71429em 1.14286em;\n  box-shadow: none !important;\n  outline: none !important;\n  font-family: inherit;\n  background: transparent;\n}\n.vs-multiselect__select-wrapper {\n  display: grid;\n  align-items: center;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  position: relative;\n  text-align: left;\n  transition: border-color 0.25s ease-in-out, box-shadow 0.1s ease-in-out, background-color 0.25s ease-in-out, color 0.25s ease-in-out;\n  outline: 0;\n  border: 1px solid var(--vs-select-border);\n  border-radius: var(--vs-select-border-radius);\n  background-color: var(--vs-select-bg);\n  width: 100%;\n  min-height: 40px;\n  box-sizing: border-box;\n  vertical-align: middle;\n  line-height: 1.28571;\n  color: #2f3941;\n  font-family: inherit;\n  font-size: 14px;\n}\n.vs-multiselect__select-wrapper.vs-multiselect--error {\n  border-color: var(--vs-select-error) !important;\n}\n.vs-multiselect__select-wrapper .vs-multiselect__icon {\n  position: absolute;\n  top: 58%;\n  right: 14px;\n  cursor: pointer;\n  transform: translateY(-50%);\n  color: var(--vs-select-icon);\n}\n.vs-multiselect__select-wrapper .vs-multiselect__icon svg {\n  transition: 0.17s all linear;\n  width: 12px;\n  height: 12px;\n}\n.vs-multiselect__select-wrapper span {\n  padding: 10px 40px 10px 15px;\n}\n.vs-multiselect__select-wrapper.vs-multiselect--is-open:before {\n  transform: rotate(180deg) translateY(-1px);\n}\n.vs-multiselect__select-wrapper.vs-multiselect--disabled {\n  background: #f8f9f9;\n  color: #c2c8cc;\n  cursor: no-drop;\n  border-color: #e9ebed;\n  user-select: none;\n}\n.vs-multiselect__select-wrapper.vs-multiselect--disabled:hover {\n  border-color: #e9ebed;\n}\n.vs-multiselect__select-wrapper.vs-multiselect--disabled .vs-multiselect__input,\n.vs-multiselect__select-wrapper.vs-multiselect--disabled .vs-multiselect__icon {\n  cursor: no-drop;\n  user-select: none;\n  color: #c2c8cc;\n}\n.vs-multiselect__no-search li:nth-child(2) {\n  margin-top: 4px;\n}\n.vs-multiselect__menu {\n  z-index: 150;\n  max-height: 250px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: inline-block;\n  position: absolute;\n  margin: 0;\n  box-sizing: border-box;\n  border: 1px solid #d8dcde;\n  border-radius: var(--vs-select-border-radius);\n  box-shadow: 0 10px 20px 0 rgba(4, 68, 77, 0.15);\n  background-color: #fff;\n  cursor: default;\n  padding: 0;\n  min-width: 180px;\n  text-align: left;\n  white-space: normal;\n  font-size: 14px;\n  font-weight: 400;\n  width: 100%;\n  left: 0;\n}\n.vs-multiselect__menu--top {\n  bottom: 40px;\n  box-shadow: 0 -2px 20px 0 rgba(4, 68, 77, 0.15);\n}\n.vs-multiselect__menu-item {\n  display: block;\n  position: relative;\n  z-index: 0;\n  cursor: pointer;\n  padding: 8px 36px;\n  text-decoration: none;\n  line-height: 20px;\n  word-wrap: break-word;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.vs-multiselect__menu-item:hover {\n  background-color: var(--vs-select-hover);\n  text-decoration: none;\n}\n.vs-multiselect__menu-item:focus {\n  outline: none;\n}\n.vs-multiselect__menu-item:first-child {\n  margin-top: 4px;\n  padding: 0;\n}\n.vs-multiselect__menu-item:last-child {\n  margin-bottom: 4px;\n}\n.vs-multiselect__menu-item:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: opacity 0.1s ease-in-out;\n  transition: opacity 0.1s ease-in-out;\n  opacity: 0;\n  background: no-repeat 50%/16px url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' color='%231f73b7'%3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' d='M1 9l4 4L15 3'/%3E%3C/svg%3E\");\n  width: 32px;\n  height: 40px;\n  content: \"\";\n}\n.vs-multiselect__menu-item--is-disabled {\n  color: #c2c8cc;\n  cursor: no-drop;\n}\n.vs-multiselect__menu-item--is-disabled:hover {\n  background-color: transparent;\n}\n.vs-multiselect__menu--no-item {\n  margin-bottom: 8px;\n  padding: 10px;\n  text-align: center;\n}\n.vs-multiselect .vs-multiselect__menu--is-checked:before,\n.vs-multiselect .vs-multiselect__menu-item[aria-checked=true]:before {\n  opacity: 1;\n}\n.vs-multiselect .vs-multiselect__menu[aria-hidden=true] {\n  display: inline-block;\n  transition: opacity 0.2s ease-in-out, visibility 0.2s linear 0s;\n  visibility: hidden;\n  opacity: 0;\n}", map: undefined, media: undefined });

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
    Vue.component('VsSelect', __vue_component__);
    Vue.component('VsMultiselect', __vue_component__$1);
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

  exports.VsMultiselect = __vue_component__$1;
  exports.VsSelect = __vue_component__;
  exports.default = __vue_component__;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
