require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([15],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(148);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
    if (console && console.error) {
        console.error(err);
    }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_086b068a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(154);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(149)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-086b068a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_086b068a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-086b068a", Component.options)
  } else {
    hotAPI.reload("data-v-086b068a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 149:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_NavigationBar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_tabBar__ = __webpack_require__(26);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            footerNavIndex: 0,
            activeIndex: 0,
            tabData: ['热门', '生活', '旅行', '美食', '家庭'],
            noMore: false, //没有更多
            offset: 0,
            limit: 5,
            articleStatus: 0,
            articleList: []
        };
    },

    components: {
        'navigation-bar': __WEBPACK_IMPORTED_MODULE_0__components_NavigationBar__["a" /* default */],
        'v-tabBar': __WEBPACK_IMPORTED_MODULE_1__components_tabBar__["a" /* default */]
    },
    create: function create() {},

    computed: {
        reqParam: function reqParam() {
            return {
                offset: this.offset,
                limit: this.limit,
                articleStatus: this.articleStatus
            };
        }
    },
    methods: {
        itemClick: function itemClick(index) {
            this.activeIndex = index;
            this.articleStatus = index;
            this.getArticleList();
        },
        getArticleList: function getArticleList() {}
    },
    onShow: function onShow() {
        wx.hideTabBar();
    }
});

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('navigation-bar', {
    attrs: {
      "isIndex": "",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "hot_sort"
  }, [_c('swiper', {
    staticClass: "tap_swiper",
    attrs: {
      "display-multiple-items": "5"
    }
  }, _vm._l((_vm.tabData), function(item, index) {
    return _c('swiper-item', {
      key: index,
      staticClass: "tap_item",
      attrs: {
        "mpcomid": '1_' + index
      }
    }, [_c('span', {
      staticClass: "f32 word",
      class: _vm.activeIndex === index ? 'active' : '',
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.itemClick(index)
        }
      }
    }, [_vm._v(_vm._s(item))])])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "index_main"
  }, [_c('navigator', {
    staticClass: "item",
    attrs: {
      "hover-class": "none",
      "url": "/pages/articeDetail/main"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "title f36 color-333"
  }, [_vm._v("俗语：“没钱不碰三生意，有钱不做三买卖”，创业者值得一看！")]), _vm._v(" "), _c('div', {
    staticClass: "detail"
  }, [_c('image', {
    attrs: {
      "src": "/static/images/pic.png",
      "mode": "widthFix",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "author_info f28 color-999 clearfix"
  }, [_c('div', {
    staticClass: "author_avatar fl clearfix"
  }, [_c('image', {
    staticClass: "fl",
    attrs: {
      "src": "/static/images/user.png",
      "mode": "aspectFit",
      "alt": "avatar"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "name fl"
  }, [_vm._v("用户名称")])]), _vm._v(" "), _c('div', {
    staticClass: "handler_line fr clearfix"
  }, [_c('div', {
    staticClass: "handle_item fl"
  }, [_c('span', {
    staticClass: "num"
  }, [_vm._v("250")]), _vm._v(" "), _c('span', [_vm._v("阅读")])]), _vm._v(" "), _c('div', {
    staticClass: "dot fl"
  }), _vm._v(" "), _c('div', {
    staticClass: "handle_item fl"
  }, [_c('span', {
    staticClass: "num"
  }, [_vm._v("88")]), _vm._v(" "), _c('span', [_vm._v("评论")])]), _vm._v(" "), _c('div', {
    staticClass: "dot fl"
  }), _vm._v(" "), _c('div', {
    staticClass: "handle_item fl"
  }, [_c('span', {
    staticClass: "num"
  }, [_vm._v("250")]), _vm._v(" "), _c('span', [_vm._v("点赞")])])])])])]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('v-tabBar', {
    attrs: {
      "currentNavIndex": _vm.footerNavIndex,
      "mpcomid": '2'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "title f36 color-333"
  }, [_vm._v("俗语：“没钱不碰三生意，有钱不做三买卖”，创业者值得一看！")]), _vm._v(" "), _c('div', {
    staticClass: "detail"
  }, [_c('image', {
    attrs: {
      "src": "/static/images/pic.png",
      "mode": "widthFix",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "author_info f28 color-999 clearfix"
  }, [_c('div', {
    staticClass: "author_avatar fl clearfix"
  }, [_c('image', {
    staticClass: "fl",
    attrs: {
      "src": "/static/images/user.png",
      "mode": "aspectFit",
      "alt": "avatar"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "name fl"
  }, [_vm._v("用户名称")])]), _vm._v(" "), _c('div', {
    staticClass: "handler_line fr clearfix"
  }, [_c('div', {
    staticClass: "handle_item fl"
  }, [_c('span', {
    staticClass: "num"
  }, [_vm._v("250")]), _vm._v(" "), _c('span', [_vm._v("阅读")])]), _vm._v(" "), _c('div', {
    staticClass: "dot fl"
  }), _vm._v(" "), _c('div', {
    staticClass: "handle_item fl"
  }, [_c('span', {
    staticClass: "num"
  }, [_vm._v("88")]), _vm._v(" "), _c('span', [_vm._v("评论")])]), _vm._v(" "), _c('div', {
    staticClass: "dot fl"
  }), _vm._v(" "), _c('div', {
    staticClass: "handle_item fl"
  }, [_c('span', {
    staticClass: "num"
  }, [_vm._v("250")]), _vm._v(" "), _c('span', [_vm._v("点赞")])])])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-086b068a", esExports)
  }
}

/***/ })

},[147]);