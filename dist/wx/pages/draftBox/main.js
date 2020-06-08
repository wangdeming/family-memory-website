require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([18],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(127);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b4a07e70_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(130);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(128)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b4a07e70"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b4a07e70_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/draftBox/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b4a07e70", Component.options)
  } else {
    hotAPI.reload("data-v-b4a07e70", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 128:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 129:
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
            type: 1,
            title: '草稿箱'
        };
    },

    computed: {},
    components: {
        'navigation-bar': __WEBPACK_IMPORTED_MODULE_0__components_NavigationBar__["a" /* default */]
    },

    methods: {},
    created: function created() {}
});

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "draft"
  }, [_c('navigation-bar', {
    attrs: {
      "showBack": "",
      "title": _vm.title,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _vm._m(0)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "draft_Con"
  }, [_c('div', {
    staticClass: "draft_list"
  }, [_c('div', {
    staticClass: "list_Title"
  }, [_vm._v("\n                俗语：“没钱不碰三生意，有钱不做三买 卖”，创业者值得一看！\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "list_Image"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/pic.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "list_data"
  }, [_c('span', {
    staticClass: "operating"
  }, [_vm._v("编辑")]), _vm._v(" "), _c('span', {
    staticClass: "operating"
  }, [_vm._v("设置")]), _vm._v(" "), _c('span', {
    staticClass: "operating"
  }, [_vm._v("删除")]), _vm._v(" "), _c('span', {
    staticClass: "Publish"
  }, [_vm._v("发布")])])]), _vm._v(" "), _c('div', {
    staticClass: "draft_list"
  }, [_c('div', {
    staticClass: "list_Title"
  }, [_vm._v("\n                俗语：“没钱不碰三生意，有钱不做三买 卖”，创业者值得一看！\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "list_Image"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/pic.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "list_data"
  }, [_c('span', {
    staticClass: "operating"
  }, [_vm._v("编辑")]), _vm._v(" "), _c('span', {
    staticClass: "operating"
  }, [_vm._v("设置")]), _vm._v(" "), _c('span', {
    staticClass: "operating"
  }, [_vm._v("删除")]), _vm._v(" "), _c('span', {
    staticClass: "Publish"
  }, [_vm._v("发布")])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b4a07e70", esExports)
  }
}

/***/ })

},[126]);