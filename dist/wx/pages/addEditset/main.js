require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([21],{

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(84);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1c74d4d6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(97);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(85)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1c74d4d6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1c74d4d6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/addEditset/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c74d4d6", Component.options)
  } else {
    hotAPI.reload("data-v-1c74d4d6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 85:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 86:
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


/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            source: 'one'
        };
    },

    computed: {},
    onLoad: function onLoad(options) {
        this.source = options.source;
        console.log(this.source);
    },
    components: {
        'navigation-bar': __WEBPACK_IMPORTED_MODULE_0__components_NavigationBar__["a" /* default */]
    },
    methods: {}
});

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "a_setting"
  }, [_c('navigation-bar', {
    attrs: {
      "showBack": "",
      "title": "设置",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [(_vm.source == 'one') ? _c('div', {
    staticClass: "category"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1)]) : _vm._e(), _vm._v(" "), (_vm.source == 'two') ? _c('div', {
    staticClass: "category"
  }, [_vm._m(2), _vm._v(" "), _vm._m(3)]) : _vm._e(), _vm._v(" "), (_vm.source == 'three') ? _c('div', {
    staticClass: "category"
  }, [_vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _vm._m(6)]) : _vm._e(), _vm._v(" "), (_vm.source == 'four') ? _c('div', {
    staticClass: "category"
  }, [_vm._m(7), _vm._v(" "), _vm._m(8), _vm._v(" "), _vm._m(9)]) : _vm._e(), _vm._v(" "), _c('navigator', {
    staticClass: "clearfix",
    attrs: {
      "hover-class": "none",
      "open-type": "navigate",
      "url": "/pages/addset/main"
    }
  }, [_c('button', {
    staticClass: "complain_com"
  }, [_vm._v("取消")])], 1)], 1)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "set_item"
  }, [_c('div', {
    staticClass: "front fl main_color"
  }, [_vm._v("生活")]), _vm._v(" "), _c('div', {
    staticClass: "behide fr"
  }, [_c('img', {
    attrs: {
      "src": "../../assets/images/set_xuanzhong.svg",
      "alt": ""
    }
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "set_item"
  }, [_c('div', {
    staticClass: "front fl"
  }, [_vm._v("旅行")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "set_item"
  }, [_c('div', {
    staticClass: "front fl main_color"
  }, [_vm._v("所有人可见")]), _vm._v(" "), _c('div', {
    staticClass: "behide fr"
  }, [_c('img', {
    attrs: {
      "src": "../../assets/images/set_xuanzhong.svg",
      "alt": ""
    }
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "set_item"
  }, [_c('div', {
    staticClass: "front fl"
  }, [_vm._v("仅自己可见")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "set_item"
  }, [_c('div', {
    staticClass: "front fl main_color"
  }, [_vm._v("所有人可评论")]), _vm._v(" "), _c('div', {
    staticClass: "behide fr"
  }, [_c('img', {
    attrs: {
      "src": "../../assets/images/set_xuanzhong.svg",
      "alt": ""
    }
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "set_item"
  }, [_c('div', {
    staticClass: "front fl "
  }, [_vm._v("我的粉丝可评论可评论")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "set_item"
  }, [_c('div', {
    staticClass: "front fl "
  }, [_vm._v("不可评论")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "set_item"
  }, [_c('div', {
    staticClass: "front fl main_color"
  }, [_vm._v("不使用")]), _vm._v(" "), _c('div', {
    staticClass: "behide fr"
  }, [_c('img', {
    attrs: {
      "src": "../../assets/images/set_xuanzhong.svg",
      "alt": ""
    }
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "set_item"
  }, [_c('div', {
    staticClass: "front fl "
  }, [_vm._v("家庭名称1")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "set_item"
  }, [_c('div', {
    staticClass: "front fl "
  }, [_vm._v("家庭名称2")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1c74d4d6", esExports)
  }
}

/***/ })

},[83]);