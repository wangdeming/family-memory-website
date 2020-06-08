require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([22],{

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(166);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7ab3c36c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(169);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(167)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7ab3c36c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7ab3c36c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/MyFans/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ab3c36c", Component.options)
  } else {
    hotAPI.reload("data-v-7ab3c36c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 167:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 168:
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
            source: '',
            followList: [{ username: '暖男先生', status: 1, id: 1, itemStatus: true }, { username: '野球帝x王师傅', status: 2, id: 2, itemStatus: true }, { username: '你的小E', status: 1, id: 3, itemStatus: true }, { username: '篮球Fans', status: 2, id: 4, itemStatus: true }, { username: '环海航行', status: 1, id: 5, itemStatus: true }, { username: '汪子喵没有猫', status: 2, id: 6, itemStatus: true }, { username: '你的兔妹妹', status: 1, id: 7, itemStatus: true }, { username: '十里夫人', status: 2, id: 8, itemStatus: true }, { username: '超模中国CZ', status: 1, id: 9, itemStatus: true }, { username: '悄悄战士', status: 2, id: 10, itemStatus: true }],
            fansList: [{ username: '暖男先生', status: 1, id: 11, silder: 0 }, { username: '野球帝x王师傅', status: 1, id: 12, silder: 0 }, { username: '你的小E', status: 1, id: 13, silder: 0 }, { username: '你的兔妹妹', status: 1, id: 14, silder: 0 }, { username: '十里夫人', status: 1, id: 15, silder: 0 }, { username: '土家食记', status: 2, id: 16, silder: 0 }, { username: '胡成功导演', status: 2, id: 17, silder: 0 }, { username: '雪茸堂', status: 2, id: 18, silder: 0 }, { username: '有颜动漫', status: 2, id: 19, silder: 0 }, { username: '街球阿凯', status: 2, id: 20, silder: 0 }],
            startX: 0,
            endX: 0
        };
    },

    onLoad: function onLoad(options) {
        this.source = options.source;
    },
    computed: {},
    components: {
        'navigation-bar': __WEBPACK_IMPORTED_MODULE_0__components_NavigationBar__["a" /* default */]
    },

    methods: {
        changeTab: function changeTab(index) {
            this.source = index;
        },
        followItemClick: function followItemClick(followId, index, itemStatus) {
            var temp = this.followList[index];
            temp.itemStatus = !itemStatus;
            this.$set(this.followList, index, temp);
        },
        fansItemClick: function fansItemClick(followId, index, status) {
            if (status === 1) {
                var temp = this.fansList[index];
                temp.status = 2;
                this.$set(this.fansList, index, temp);
            } else {
                var _temp = this.fansList[index];
                _temp.status = 1;
                this.$set(this.fansList, index, _temp);
            }
        },

        // 滑动开始
        touchStart: function touchStart(e, status) {
            if (status === 2) {
                return false;
            } else {
                // 获取移动距离，可以通过打印出e，然后分析e的值得出
                this.startX = e.mp.changedTouches[0].clientX;
            }
        },

        //滑动结束
        touchEnd: function touchEnd(e, index, status) {
            if (status === 2) {
                return false;
            } else {
                // 获取移动距离
                this.endX = e.mp.changedTouches[0].clientX;
                if (this.startX - this.endX > 10) {
                    var temp = this.fansList[index];
                    temp.silder = 1;
                    this.$set(this.fansList, index, temp);
                } else if (this.startX - this.endX < -10) {
                    var _temp2 = this.fansList[index];
                    _temp2.silder = 0;
                    this.$set(this.fansList, index, _temp2);
                }
            }
        },

        // 点击回复原状
        recover: function recover(index) {
            var temp = this.fansList[index];
            temp.silder = 0;
            this.$set(this.fansList, index, temp);
        },

        // 点击移除粉丝按钮
        removeFans: function removeFans(fansId, index) {
            console.log(fansId);
            wx.showModal({
                title: '',
                content: '确定要移除粉丝？',
                success: function success(res) {
                    if (res.confirm) {
                        console.log('用户点击确定');
                    } else if (res.cancel) {
                        console.log('用户点击取消');
                    }
                }
            });
        }
    },
    created: function created() {}
});

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "my_fans"
  }, [_c('navigation-bar', {
    attrs: {
      "showBack": "",
      "title": _vm.source === '1' ? '我的关注' : '我的粉丝',
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "m_fans_tab clearfix"
  }, [_c('div', {
    staticClass: "u_tab_item f32 fl",
    class: _vm.source === '1' ? 'active' : '',
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.changeTab('1')
      }
    }
  }, [_vm._v("关注")]), _vm._v(" "), _c('div', {
    staticClass: "u_tab_item f32 fl",
    class: _vm.source === '2' ? 'active' : '',
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.changeTab('2')
      }
    }
  }, [_vm._v("粉丝")])]), _vm._v(" "), (_vm.source === '1') ? _c('div', {
    staticClass: "m_fans_list"
  }, _vm._l((_vm.followList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "m_fans_item clearfix"
    }, [_c('div', {
      staticClass: "avatar_box fl clearfix"
    }, [_c('image', {
      staticClass: "fl",
      attrs: {
        "src": "/static/images/user.png",
        "mode": "aspectFit",
        "alt": "avatar"
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "name fl f36 color-333"
    }, [_vm._v(_vm._s(item.username))])]), _vm._v(" "), (item.itemStatus) ? _c('div', {
      staticClass: "forkBtn",
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.followItemClick(item.id, index, item.itemStatus)
        }
      }
    }, [_c('div', {
      staticClass: "icon"
    }, [_c('image', {
      staticStyle: {
        "width": "12px",
        "height": "12px"
      },
      attrs: {
        "src": item.status === 1 ? '/static/images/fensi_gou.svg' : '/static/images/fensi_xianghu.svg',
        "mode": "aspectFit"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "word"
    }, [_vm._v(_vm._s(item.status === 1 ? '已关注' : '相互关注'))])]) : _vm._e(), _vm._v(" "), (!item.itemStatus) ? _c('div', {
      staticClass: "forkBtn active",
      attrs: {
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          _vm.followItemClick(item.id, index, item.itemStatus)
        }
      }
    }, [_vm._m(0, true), _vm._v(" "), _c('div', {
      staticClass: "word"
    }, [_vm._v("关注")])]) : _vm._e()])
  })) : _vm._e(), _vm._v(" "), (_vm.source === '2') ? _c('div', {
    staticClass: "m_fans_list"
  }, _vm._l((_vm.fansList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "m_fans_item clearfix",
      attrs: {
        "data-type": item.silder,
        "eventid": '6_' + index
      },
      on: {
        "touchstart": function($event) {
          _vm.touchStart($event, item.status)
        },
        "touchend": function($event) {
          _vm.touchEnd($event, index, item.status)
        },
        "click": function($event) {
          _vm.recover(index)
        }
      }
    }, [_c('div', {
      staticClass: "avatar_box fl clearfix"
    }, [_c('image', {
      staticClass: "fl",
      attrs: {
        "src": "/static/images/user.png",
        "mode": "aspectFit",
        "alt": "avatar"
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "name fl f36 color-333"
    }, [_vm._v(_vm._s(item.username))])]), _vm._v(" "), _c('div', {
      staticClass: "forkBtn",
      class: item.status === 1 ? 'active' : '',
      attrs: {
        "eventid": '4_' + index
      },
      on: {
        "click": function($event) {
          _vm.fansItemClick(item.id, index, item.status)
        }
      }
    }, [_c('div', {
      staticClass: "icon"
    }, [_c('image', {
      staticStyle: {
        "width": "12px",
        "height": "12px"
      },
      attrs: {
        "src": item.status === 1 ? '/static/images/fensi_guanzhu.svg' : '/static/images/fensi_xianghu.svg',
        "mode": "aspectFit"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "word"
    }, [_vm._v(_vm._s(item.status === 1 ? '关注' : '相互关注'))])]), _vm._v(" "), (item.status === 1) ? _c('div', {
      staticClass: "removeFans",
      attrs: {
        "eventid": '5_' + index
      },
      on: {
        "click": function($event) {
          _vm.removeFans(item.id, index)
        }
      }
    }, [_c('span', {
      staticClass: "line"
    }), _vm._v(" 移除粉丝")]) : _vm._e()])
  })) : _vm._e()], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "icon"
  }, [_c('image', {
    staticStyle: {
      "width": "12px",
      "height": "12px"
    },
    attrs: {
      "src": "/static/images/fensi_guanzhu.svg",
      "mode": "aspectFit"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7ab3c36c", esExports)
  }
}

/***/ })

},[165]);