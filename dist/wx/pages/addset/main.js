require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([20],{

/***/ 100:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 101:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            isCover: true,
            title: '设置'
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

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "add_set"
  }, [_c('navigation-bar', {
    attrs: {
      "showBack": "",
      "title": _vm.title,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "my_set"
  }, [_c('div', {
    staticClass: "set_cover"
  }, [(_vm.isCover) ? _c('div', {
    staticClass: "cover_unplode"
  }, [_c('img', {
    staticClass: "marn_img",
    attrs: {
      "src": "../../assets/images/set_fengmian.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "add_cover"
  }, [_vm._v("添加封面")])], 1) : _c('div', {
    staticClass: "cover_unplode"
  }, [_c('img', {
    staticClass: "marn_img",
    attrs: {
      "src": "/static/images/pic.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "change_cover"
  }, [_vm._v("更换封面")])]), _vm._v(" "), _c('div', {
    staticClass: "cover_title"
  }, [_vm._v("\n                俗语：“没钱不碰三生意，有钱不做三买卖”\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "Dline"
  }), _vm._v(" "), _c('div', {
    staticClass: "set_list"
  }, [_c('ul', [_c('navigator', {
    staticClass: "set_item clearfix",
    attrs: {
      "hover-class": "none",
      "open-type": "navigate",
      "url": "/pages/addEditset/main?source=one"
    }
  }, [_c('li', [_c('span', [_vm._v("分类")]), _vm._v(" "), _c('span', {
    staticClass: "fa_info"
  }, [_vm._v("\n                            生活\n                            "), _c('img', {
    attrs: {
      "src": "../../assets/images/my_icon_more copy 7.svg",
      "alt": ""
    }
  })])])], 1), _vm._v(" "), _c('navigator', {
    staticClass: "set_item clearfix",
    attrs: {
      "hover-class": "none",
      "open-type": "navigate",
      "url": "/pages/addEditset/main?source=two"
    }
  }, [_c('li', [_c('span', [_vm._v("谁可以看")]), _vm._v(" "), _c('span', {
    staticClass: "fa_info"
  }, [_vm._v("\n                            所有人可见\n                            "), _c('img', {
    attrs: {
      "src": "../../assets/images/my_icon_more copy 7.svg",
      "alt": ""
    }
  })])])], 1), _vm._v(" "), _c('navigator', {
    staticClass: "set_item clearfix",
    attrs: {
      "hover-class": "none",
      "open-type": "navigate",
      "url": "/pages/addEditset/main?source=three"
    }
  }, [_c('li', [_c('span', [_vm._v("评论功能")]), _vm._v(" "), _c('span', {
    staticClass: "fa_info"
  }, [_vm._v("\n                            所有人可见\n                            "), _c('img', {
    attrs: {
      "src": "../../assets/images/my_icon_more copy 7.svg",
      "alt": ""
    }
  })])])], 1), _vm._v(" "), _c('navigator', {
    staticClass: "set_item clearfix",
    attrs: {
      "hover-class": "none",
      "open-type": "navigate",
      "url": "/pages/addEditset/main?source=four"
    }
  }, [_c('li', [_c('span', [_vm._v("共同编辑")]), _vm._v(" "), _c('span', {
    staticClass: "fa_info"
  }, [_vm._v("\n                            不使用\n                            "), _c('img', {
    attrs: {
      "src": "../../assets/images/my_icon_more copy 7.svg",
      "alt": ""
    }
  })])])], 1)], 1)], 1), _vm._v(" "), _c('button', {
    staticClass: "complain_com"
  }, [_vm._v("发布")]), _vm._v(" "), _c('div', {
    staticClass: "save_draft"
  }, [_vm._v("存草稿")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e0349702", esExports)
  }
}

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(99);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e0349702_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(102);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(100)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e0349702"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e0349702_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/addset/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e0349702", Component.options)
  } else {
    hotAPI.reload("data-v-e0349702", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[98]);