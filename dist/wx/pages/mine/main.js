require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([14],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(156);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3badda1e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(159);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(157)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3badda1e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3badda1e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/mine/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3badda1e", Component.options)
  } else {
    hotAPI.reload("data-v-3badda1e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 157:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 158:
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
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            footerNavIndex: 2,
            isLogin: false,
            myFamilyNum: 3
        };
    },

    components: {
        'navigation-bar': __WEBPACK_IMPORTED_MODULE_0__components_NavigationBar__["a" /* default */],
        'v-tabBar': __WEBPACK_IMPORTED_MODULE_1__components_tabBar__["a" /* default */]
    },
    created: function created() {
        var _this = this;

        wx.getUserInfo({
            success: function success(res) {
                // 用户已授权
                getApp().authorizeState = true;
                _this.isLogin = true;
            },
            fail: function fail(err) {
                // 用户未授权
                getApp().authorizeState = false;
                _this.isLogin = false;
            }
        });
    },

    methods: {
        getuserinfo: function getuserinfo(res) {
            var self = this;
            if (res.mp.detail.userInfo) {
                //允许授权
                getApp().authorizeState = true;
                self.isLogin = true;
            } else {
                //拒绝授权
                getApp().authorizeState = false;
                self.isLogin = false;
                wx.showToast({
                    title: '授权失败',
                    icon: 'none',
                    duration: 3000
                });
            }
        },
        toFamily: function toFamily() {
            if (this.myFamilyNum !== 0) {
                wx.navigateTo({
                    url: '/pages/myFamily/main'
                });
            } else {
                wx.navigateTo({
                    url: '/pages/CreatFamily/main'
                });
            }
        },
        toFansOrgz: function toFansOrgz(source) {
            console.log(source);
            wx.navigateTo({
                url: '/pages/MyFans/main?source=' + source
            });
        }
    },
    onShow: function onShow() {
        wx.hideTabBar();
    }
});

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('navigation-bar', {
    attrs: {
      "isMine": "",
      "isLogin": _vm.isLogin,
      "title": "我的",
      "mpcomid": '0'
    }
  }), _vm._v(" "), (!_vm.isLogin) ? _c('div', {
    staticClass: "m_login"
  }, [_c('image', {
    staticClass: "login_bg",
    attrs: {
      "mode": "aspectFill",
      "src": "/static/images/login_pic.svg"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "logo"
  }, [_c('image', {
    attrs: {
      "mode": "aspectFill",
      "src": "/static/images/login_logo.svg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "logo_word"
  }, [_vm._v("家庭美好随时记")])], 1), _vm._v(" "), _c('div', {
    staticClass: "login_btn_box"
  }, [_c('button', {
    staticClass: "btn",
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.getuserinfo
    }
  }, [_c('span', {
    staticClass: "icon icon_wx"
  }, [_vm._v("微信登陆")])])], 1)])]) : _vm._e(), _vm._v(" "), (_vm.isLogin) ? _c('scroll-view', {
    staticClass: "m_mine",
    attrs: {
      "scroll-y": ""
    }
  }, [_c('div', {
    staticClass: "user_info"
  }, [_c('div', {
    staticClass: "info_detail"
  }, [_c('div', {
    staticClass: "user_main"
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('image', {
    attrs: {
      "src": "/static/images/user.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "user_name color-333 f36 fontbold"
  }, [_vm._v("用户名称")]), _vm._v(" "), _c('div', {
    staticClass: "user_id color-999 f28"
  }, [_vm._v("ID:123456789")])]), _vm._v(" "), _c('div', {
    staticClass: "user_data user_gz",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.toFansOrgz(1)
      }
    }
  }, [_c('p', {
    staticClass: "num f32 color-333"
  }, [_vm._v("54")]), _vm._v(" "), _c('p', {
    staticClass: "word f32 color-999"
  }, [_vm._v("关注")])], 1), _vm._v(" "), _c('div', {
    staticClass: "user_data user_fans",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.toFansOrgz(2)
      }
    }
  }, [_c('p', {
    staticClass: "num f32 color-333"
  }, [_vm._v("87")]), _vm._v(" "), _c('p', {
    staticClass: "word f32 color-999"
  }, [_vm._v("粉丝")])], 1), _vm._v(" "), _c('div', {
    staticClass: "family_btn",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.toFamily()
      }
    }
  }, [_c('span', {
    staticClass: "num color-fff f28"
  }, [_vm._v("家庭"), _c('text', [_vm._v(_vm._s(_vm.myFamilyNum))])])])]), _vm._v(" "), _c('div', {
    staticClass: "user_des f28 color-666"
  }, [_vm._v("\n                你还没有设置个性签名，用一句话简单介绍下自己吧。\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "user_article clearfix"
  }, [_c('div', {
    staticClass: "tab_bar_item active fl"
  }, [_vm._v("文章"), _c('text', {
    staticClass: "num"
  }, [_vm._v("999")])]), _vm._v(" "), _c('div', {
    staticClass: "tab_bar_item fl"
  }, [_vm._v("收藏"), _c('text', {
    staticClass: "num"
  }, [_vm._v("999")])])]), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "copy_btn"
  }, [_c('span', {
    staticClass: "icon icon_copy color-333 f28"
  }, [_vm._v("您有"), _c('text', {
    staticClass: "num"
  }, [_vm._v("2")]), _vm._v("份草稿待完成")])])]), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "article_list"
  }, [_c('div', {
    staticClass: "article_item"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n                        俗语：“没钱不碰三生意，有钱不做三买卖”，创业者值得一看！\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "pic_box"
  }, [_c('image', {
    attrs: {
      "mode": "aspectFill",
      "src": "/static/images/pic.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "tip_line"
  }, [_c('span', {
    staticClass: "tip_btn"
  }, [_vm._v("公开")]), _vm._v(" "), _c('span', {
    staticClass: "tip_btn"
  }, [_vm._v("共同编辑")])])]), _vm._v(" "), _c('div', {
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
  })])])])])]) : _vm._e(), _vm._v(" "), _c('v-tabBar', {
    attrs: {
      "currentNavIndex": _vm.footerNavIndex,
      "mpcomid": '1'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3badda1e", esExports)
  }
}

/***/ })

},[155]);