require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([13],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(161);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4300ede4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(164);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(162)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4300ede4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4300ede4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/myFamily/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4300ede4", Component.options)
  } else {
    hotAPI.reload("data-v-4300ede4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 162:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 163:
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


/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            type: 1,
            title: '我的家庭'
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

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "my_Family"
  }, [_c('navigation-bar', {
    attrs: {
      "showBack": "",
      "title": _vm.title,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "family_top"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "family_number"
  }, [(_vm.type == 1) ? _c('div', {
    staticClass: "main_mumber"
  }, [_c('img', {
    staticClass: "huangguan",
    attrs: {
      "src": "../../assets/images/family_huangguan.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "touxiang",
    attrs: {
      "src": "../../assets/images/girl.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "touxiang",
    attrs: {
      "src": "../../assets/images/girl.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "touxiang",
    attrs: {
      "src": "../../assets/images/girl.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "touxiang",
    attrs: {
      "src": "../../assets/images/girl.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "touxiang",
    attrs: {
      "src": "../../assets/images/girl.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "touxiang",
    attrs: {
      "src": "../../assets/images/girl.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "touxiang",
    attrs: {
      "src": "../../assets/images/girl.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "touxiang",
    attrs: {
      "src": "../../assets/images/girl.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "touxiang",
    attrs: {
      "src": "../../assets/images/girl.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "add_mun",
    attrs: {
      "src": "../../assets/images/family_add.svg",
      "alt": ""
    }
  })]) : _vm._e()]), _vm._v(" "), _vm._m(1)])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home_top"
  }, [_c('img', {
    staticClass: "bar_pic",
    attrs: {
      "src": "../../assets/images/family_bar_pic.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "bar_jia",
    attrs: {
      "src": "../../assets/images/family_jia.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "fa_name"
  }, [_c('span', {
    staticClass: "name"
  }, [_vm._v(" 某某的家庭")]), _vm._v(" "), _c('span', {
    staticClass: "change_fa"
  }, [_vm._v("切换\n                    "), _c('img', {
    attrs: {
      "src": "../../assets/images/family_xiala.svg",
      "alt": ""
    }
  })])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "family_Memories"
  }, [_c('div', {
    staticClass: "memories_Title"
  }, [_vm._v("\n                家庭回忆（22）\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "memories_Con"
  }, [_c('div', {
    staticClass: "memories_list"
  }, [_c('div', {
    staticClass: "list_Title"
  }, [_vm._v("\n                        俗语：“没钱不碰三生意，有钱不做三买 卖”，创业者值得一看！\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "list_Image"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/pic.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "caozuo"
  }, [_c('span', [_vm._v("公开")]), _vm._v(" "), _c('span', [_vm._v("共同编辑")])])]), _vm._v(" "), _c('div', {
    staticClass: "handler_line clearfix"
  }, [_c('div', {
    staticClass: "data_line fl clearfix"
  }, [_c('div', {
    staticClass: "data_item fl"
  }, [_c('span', {
    staticClass: "num"
  }, [_vm._v("250")]), _vm._v(" "), _c('span', [_vm._v("阅读")])]), _vm._v(" "), _c('div', {
    staticClass: "dot fl"
  }), _vm._v(" "), _c('div', {
    staticClass: "data_item fl"
  }, [_c('span', {
    staticClass: "num"
  }, [_vm._v("88")]), _vm._v(" "), _c('span', [_vm._v("评论")])]), _vm._v(" "), _c('div', {
    staticClass: "dot fl"
  }), _vm._v(" "), _c('div', {
    staticClass: "data_item fl"
  }, [_c('span', {
    staticClass: "num"
  }, [_vm._v("250")]), _vm._v(" "), _c('span', [_vm._v("点赞")])])]), _vm._v(" "), _c('div', {
    staticClass: "fr more_btn"
  })])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4300ede4", esExports)
  }
}

/***/ })

},[160]);