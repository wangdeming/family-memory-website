require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(219);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fe03d882_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(222);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(220)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fe03d882"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fe03d882_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/writeArtice/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fe03d882", Component.options)
  } else {
    hotAPI.reload("data-v-fe03d882", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 220:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_NavigationBar__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            inputStr: '',
            // fromButton: false,
            index: 0 //段落插入的位置
        };
    },

    components: {
        'navigation-bar': __WEBPACK_IMPORTED_MODULE_0__components_NavigationBar__["a" /* default */]
    },
    onLoad: function onLoad(options) {
        console.log('获取当前' + options.index);
        this.from = options.from;
        this.index = Number(options.index);
        this.inputStr = options.wordDes;
    },

    methods: {
        done: function done() {
            // let inputStr = this.inputStr.trim() //trim移除字符串的头尾空格---产品不需要去除空格
            var inputStr = this.inputStr;
            var item = {};
            if (this.from === 'button') {
                item.src = '';
                item.wordDes = inputStr;
                item.showShareBtn = false;
                // 添加段落类型
                item.type = 2;
                if (this.index === -1) {
                    getApp().articeParts.splice(0, 0, item);
                } else {
                    getApp().articeParts.splice(this.index + 1, 0, item); //新增
                }
            } else if (this.from === 'input') {
                var type = getApp().articeParts[this.index].type;
                if (inputStr === '' && type === 2) {
                    //描述为空且类型为文字，便删除数组
                    getApp().articeParts.splice(this.index, 1);
                } else {
                    this.$set(getApp().articeParts[this.index], 'wordDes', this.inputStr); //更换文章数组中某个图片
                }
            }
            wx.redirectTo({
                url: '/pages/publishStep1/main?from=input'
            });
        }
    },
    created: function created() {}
});

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m_write_artice"
  }, [_c('navigation-bar', {
    attrs: {
      "showBack": "",
      "title": "添加文字",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "textarea"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputStr),
      expression: "inputStr"
    }],
    attrs: {
      "name": "",
      "maxlength": "5000",
      "focus": "",
      "placeholder": "输入内容",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.inputStr)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.inputStr = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "handler clearfix"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "btn active fr",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.done()
      }
    }
  }, [_vm._v("完成")])])])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "count fl"
  }, [_c('text', {
    staticClass: "num"
  }, [_vm._v("0")]), _vm._v(" "), _c('text', {
    staticClass: "num"
  }, [_vm._v("/")]), _vm._v(" "), _c('text', {
    staticClass: "num"
  }, [_vm._v("5000")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fe03d882", esExports)
  }
}

/***/ })

},[218]);