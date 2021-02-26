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

  var script = {
    props: {
      label: {
        type: String,
        required: false,
        default: 'Select',
      },
      // For array of object - pass value
      preselected: {
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
      classList: {
        type: Array,
        required: false,
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
    },

    data: function data() {
      return {
        isMenuHidden: true,
        inputValue: this.label,
        selected: null,
        selectedObject: {},
        isObject: false,
        searchTerm: '',
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
        if (this.isSearch && !this.disabled) {
          return false;
        }
        return true;
      },
    },

    created: function created() {
      this.initOptions();
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
          this.selected = this.preselected ? this.options.filter(function (i) { return i.value === this$1.preselected; })[0].label : '';
        } else {
          this.isObject = false;
          this.selected = this.preselected;
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
          this.$emit('on-select', this.selectedObject);
        } else {
          this.selected = this.options.filter(function (i) { return i === option; })[0];
          this.$emit('input', this.selected);
          this.$emit('on-select', this.options.indexOf(this.selected));
        }
        this.searchTerm = '';
        this.inputValue = this.selected;
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

      setSelectEnv: function setSelectEnv() {
        if (!this.isMenuHidden && !this.searchTerm) {
          this.isMenuHidden = true;
          this.$refs['vs-select-box'].blur();
          return;
        }
        this.$refs['vs-select-box'].focus();
        this.isMenuHidden = false;
        if (!this.searchTerm & this.isSearch) {
          this.inputValue = '';
        }
      },

      setSelectClose: function setSelectClose() {
        this.isMenuHidden = true;
        this.$refs['vs-select-box'].blur();
        if (this.selected) {
          this.inputValue = this.selected;
        }
        if (!this.selected) {
          this.inputValue = this.label;
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
    return _c("div", { staticClass: "vs-select", class: _vm.classList }, [
      _c(
        "div",
        {
          staticClass: "vs-select__input-wrapper",
          class: [
            { "vs-select--error": _vm.isError },
            { "vs-select--cursor-pointer": !_vm.isSearch },
            { "vs-select--is-open": !_vm.isMenuHidden },
            { "vs-select--disabled": _vm.disabled }
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
            attrs: { disabled: _vm.disabled, readonly: _vm.isReadonly },
            domProps: { value: _vm.inputValue },
            on: {
              click: function($event) {
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
          })
        ]
      ),
      _vm._v(" "),
      !_vm.disabled
        ? _c("div", { staticClass: "vs-select__menu-wrapper" }, [
            _c(
              "ul",
              {
                staticClass: "vs-select__menu",
                attrs: { "aria-hidden": !_vm.disabled ? _vm.isMenuHidden : true }
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
                          staticClass: "vs-select__menu-item",
                          class: [
                            {
                              "vs-select__menu--is-checked":
                                _vm.selected === option
                            },
                            {
                              "vs-select__menu--is-checked":
                                _vm.isObject &&
                                _vm.selectedObject.value === option.value
                            }
                          ],
                          on: {
                            click: function($event) {
                              return _vm.onSelectedItem(option, index)
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
                              "vs-select__menu-item vs-select__menu--no-item"
                          },
                          [_vm._v("\n          No Data Available\n        ")]
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
    ])
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = function (inject) {
      if (!inject) { return }
      inject("data-v-0e70dffa_0", { source: ".vs-select {\n  width: 100%;\n  position: relative;\n}\n.vs-select--cursor-pointer {\n  cursor: pointer;\n}\n.vs-select--error .vs-select__input-wrapper {\n  border-color: #cc3340;\n}\n.vs-select__input-wrapper {\n  overflow: hidden;\n  position: relative;\n  text-align: left;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.25s ease-in-out, box-shadow 0.1s ease-in-out, background-color 0.25s ease-in-out, color 0.25s ease-in-out;\n  outline: 0;\n  border: 1px solid #d8dcde;\n  border-radius: 4px;\n  background-color: #fff;\n  width: 100%;\n  min-height: 40px;\n  box-sizing: border-box;\n  vertical-align: middle;\n  line-height: 1.28571;\n  color: #2f3941;\n  font-family: inherit;\n  font-size: 14px;\n}\n.vs-select__input-wrapper:hover {\n  border-color: #5293c7;\n}\n.vs-select__input-wrapper:not(select):before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  content: \"\";\n}\n.vs-select__input-wrapper:not(select):before {\n  transition: background-image 0.25s ease-in-out, transform 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.1s ease-in-out, background-color 0.25s ease-in-out, color 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' color='%2368737d'%3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' d='M4 6.5l3.6 3.6c.2.2.5.2.7 0L12 6.5'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 0.85714em center;\n}\n.vs-select__input-wrapper.vs-select--is-open:before {\n  transform: rotate(180deg) translateY(-1px);\n}\n.vs-select__input-wrapper.vs-select--disabled {\n  background: #f8f9f9;\n  cursor: no-drop;\n  border-color: #e9ebed;\n  user-select: none;\n}\n.vs-select__input-wrapper.vs-select--disabled:before {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' focusable='false' color='%23c2c8cc'%3E %3Cpath fill='none' stroke='currentColor' stroke-linecap='round' d='M4 6.5l3.6 3.6c.2.2.5.2.7 0L12 6.5'/%3E%3C/svg%3E\");\n}\n.vs-select__input-wrapper.vs-select--disabled .vs-select__input {\n  cursor: no-drop;\n  user-select: none;\n  color: #c2c8cc;\n}\n.vs-select__input {\n  color: #2f3941;\n  width: 100%;\n  border: none !important;\n  padding: 10px 0 10px 15px;\n  box-shadow: none !important;\n  outline: none !important;\n  font-family: inherit;\n  background: transparent;\n  position: relative;\n  z-index: 50;\n}\n.vs-select__input[readonly] {\n  cursor: pointer;\n}\n.vs-select__menu {\n  z-index: 150;\n  max-height: 250px;\n  overflow: auto;\n  display: inline-block;\n  position: absolute;\n  margin: 0;\n  box-sizing: border-box;\n  border: 1px solid #d8dcde;\n  border-radius: 4px;\n  box-shadow: 0 10px 20px 0 rgba(4, 68, 77, 0.15);\n  background-color: #fff;\n  cursor: default;\n  padding: 0;\n  min-width: 180px;\n  text-align: left;\n  white-space: normal;\n  font-size: 14px;\n  font-weight: 400;\n  width: 100%;\n  left: 0;\n}\n.vs-select__menu-item {\n  display: block;\n  position: relative;\n  z-index: 0;\n  cursor: pointer;\n  padding: 10px 32px;\n  text-decoration: none;\n  line-height: 20px;\n  word-wrap: break-word;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.vs-select__menu-item:hover {\n  background-color: #edf7ff;\n  text-decoration: none;\n}\n.vs-select__menu-item:first-child {\n  margin-top: 8px;\n}\n.vs-select__menu-item:last-child {\n  margin-bottom: 8px;\n}\n.vs-select__menu-item:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: opacity 0.1s ease-in-out;\n  transition: opacity 0.1s ease-in-out;\n  opacity: 0;\n  background: no-repeat 50%/16px url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' color='%231f73b7'%3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' d='M1 9l4 4L15 3'/%3E%3C/svg%3E\");\n  width: 32px;\n  height: 40px;\n  content: \"\";\n}\n.vs-select__menu--no-item {\n  text-align: center;\n}\n.vs-select .vs-select__menu--is-checked:before,\n.vs-select .vs-select__menu-item[aria-checked=true]:before {\n  opacity: 1;\n}\n.vs-select .vs-select__menu[aria-hidden=true] {\n  display: inline-block;\n  transition: opacity 0.2s ease-in-out, visibility 0.2s linear 0s;\n  visibility: hidden;\n  opacity: 0;\n}", map: undefined, media: undefined });

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

  var script$1 = {
    props: {
      label: {
        type: String,
        required: false,
        default: 'Select',
      },
      // For array of object - pass value
      preselected: {
        type: Array,
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
    },

    data: function data() {
      return {
        isMenuHidden: true,
        inputValue: this.label,
        selected: null,
        selectedObject: {},
        isObject: false,
        searchTerm: '',
        selectedArrayObject: [],
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

    created: function created() {
      var this$1 = this;

      this.initOptions();
      window.addEventListener('click', function (e) {
        if (!this$1.$el.contains(e.target)) {
          this$1.isMenuHidden = true;
        }
      });
    },

    watch: {
      inputValue: function inputValue(value) {
        if (!this.isMenuHidden) {
          this.searchTerm = value;
        }
      },
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

      setSelectEnv: function setSelectEnv() {
        if (!this.isMenuHidden) {
          this.isMenuHidden = true;
          this.$refs['vs-multiselect-box'].blur();
          return;
        }
        this.$refs['vs-multiselect-box'].focus();
        this.isMenuHidden = false;
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
    return _c("div", { staticClass: "vs-multiselect" }, [
      _c(
        "div",
        {
          staticClass: "vs-multiselect__select-wrapper",
          class: [
            { "vs-multiselect--error": _vm.isError },
            { "vs-multiselect--is-open": !_vm.isMenuHidden },
            { "vs-multiselect--disabled": _vm.disabled }
          ],
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
                _vm._s(_vm.selectedItems ? _vm.selectedItems : _vm.label) +
                "\n    "
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
                staticClass: "vs-multiselect__menu",
                class: [{ "vs-multiselect__no-search": !_vm.isSearch }],
                attrs: { "aria-hidden": !_vm.disabled ? _vm.isMenuHidden : true }
              },
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
                      [_vm._v("\n        -\n      ")]
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
                      "vs-multiselect__menu-item vs-multiselect__input-wrapper"
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
                      attrs: { disabled: _vm.disabled, placeholder: "Search..." },
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
                          "vs-multiselect__menu--is-checked":
                            _vm.selected === option
                        },
                        {
                          "vs-multiselect__menu--is-checked": _vm.setSelected(
                            option
                          )
                        }
                      ],
                      on: {
                        click: function($event) {
                          return _vm.onSelectedItem(option, index)
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
                          "vs-multiselect__menu-item vs-multiselect__menu--no-item"
                      },
                      [_vm._v("\n        No Data Available\n      ")]
                    )
                  : _vm._e()
              ],
              2
            )
          ])
        : _vm._e()
    ])
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    var __vue_inject_styles__$1 = function (inject) {
      if (!inject) { return }
      inject("data-v-547cd85e_0", { source: ".vs-multiselect {\n  width: 100%;\n  position: relative;\n}\n.vs-multiselect__input {\n  width: 100%;\n  border: none !important;\n  padding: 0.71429em 1.14286em;\n  box-shadow: none !important;\n  outline: none !important;\n  font-family: inherit;\n  background: transparent;\n}\n.vs-multiselect__select-wrapper {\n  display: grid;\n  align-items: center;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  position: relative;\n  text-align: left;\n  transition: border-color 0.25s ease-in-out, box-shadow 0.1s ease-in-out, background-color 0.25s ease-in-out, color 0.25s ease-in-out;\n  outline: 0;\n  border: 1px solid #d8dcde;\n  border-radius: 4px;\n  background-color: #fff;\n  width: 100%;\n  min-height: 40px;\n  box-sizing: border-box;\n  vertical-align: middle;\n  line-height: 1.28571;\n  color: #2f3941;\n  font-family: inherit;\n  font-size: 14px;\n}\n.vs-multiselect__select-wrapper:hover {\n  border-color: #5293c7;\n}\n.vs-multiselect__select-wrapper span {\n  padding: 10px 0 10px 15px;\n}\n.vs-multiselect__select-wrapper:not(select):before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  content: \"\";\n}\n.vs-multiselect__select-wrapper:not(select):before {\n  transition: background-image 0.25s ease-in-out, transform 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.1s ease-in-out, background-color 0.25s ease-in-out, color 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' color='%2368737d'%3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' d='M4 6.5l3.6 3.6c.2.2.5.2.7 0L12 6.5'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 0.85714em center;\n}\n.vs-multiselect__select-wrapper.vs-multiselect--is-open:before {\n  transform: rotate(180deg) translateY(-1px);\n}\n.vs-multiselect__select-wrapper.vs-multiselect--disabled {\n  background: #f8f9f9;\n  color: #c2c8cc;\n  cursor: no-drop;\n  border-color: #e9ebed;\n  user-select: none;\n}\n.vs-multiselect__select-wrapper.vs-multiselect--disabled:before {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' focusable='false' color='%23c2c8cc'%3E %3Cpath fill='none' stroke='currentColor' stroke-linecap='round' d='M4 6.5l3.6 3.6c.2.2.5.2.7 0L12 6.5'/%3E%3C/svg%3E\");\n}\n.vs-multiselect__no-search li:nth-child(2) {\n  margin-top: 10px;\n}\n.vs-multiselect__menu {\n  z-index: 150;\n  max-height: 250px;\n  overflow: auto;\n  display: inline-block;\n  position: absolute;\n  margin: 0;\n  box-sizing: border-box;\n  border: 1px solid #d8dcde;\n  border-radius: 4px;\n  box-shadow: 0 10px 20px 0 rgba(4, 68, 77, 0.15);\n  background-color: #fff;\n  cursor: default;\n  padding: 0;\n  min-width: 180px;\n  text-align: left;\n  white-space: normal;\n  font-size: 14px;\n  font-weight: 400;\n  width: 100%;\n  left: 0;\n}\n.vs-multiselect__menu-item {\n  display: block;\n  position: relative;\n  z-index: 0;\n  cursor: pointer;\n  padding: 10px 32px;\n  text-decoration: none;\n  line-height: 20px;\n  word-wrap: break-word;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.vs-multiselect__menu-item:hover {\n  background-color: #edf7ff;\n  text-decoration: none;\n}\n.vs-multiselect__menu-item:first-child {\n  margin-top: 8px;\n  padding: 0;\n}\n.vs-multiselect__menu-item:last-child {\n  margin-bottom: 8px;\n}\n.vs-multiselect__menu-item:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: opacity 0.1s ease-in-out;\n  transition: opacity 0.1s ease-in-out;\n  opacity: 0;\n  background: no-repeat 50%/16px url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' color='%231f73b7'%3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' d='M1 9l4 4L15 3'/%3E%3C/svg%3E\");\n  width: 32px;\n  height: 40px;\n  content: \"\";\n}\n.vs-multiselect__menu--no-item {\n  margin-bottom: 8px;\n  padding: 10px;\n  text-align: center;\n}\n.vs-multiselect .vs-multiselect__menu--is-checked:before,\n.vs-multiselect .vs-multiselect__menu-item[aria-checked=true]:before {\n  opacity: 1;\n}\n.vs-multiselect .vs-multiselect__menu[aria-hidden=true] {\n  display: inline-block;\n  transition: opacity 0.2s ease-in-out, visibility 0.2s linear 0s;\n  visibility: hidden;\n  opacity: 0;\n}", map: undefined, media: undefined });

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
