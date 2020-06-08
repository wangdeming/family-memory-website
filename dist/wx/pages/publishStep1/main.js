require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(186);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_520bbaf4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(193);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(187)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-520bbaf4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_520bbaf4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/publishStep1/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-520bbaf4", Component.options)
  } else {
    hotAPI.reload("data-v-520bbaf4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 187:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_NavigationBar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AddPart_vue__ = __webpack_require__(189);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            title: '图文',
            inputTitle: '' //输入的标题文字
        };
    },

    computed: {
        //文章标题，用户没有输入标题，默认为 用户名 + 的 + 记忆
        articeTitle: function articeTitle() {
            return this.inputTitle ? this.inputTitle : '的记忆';
        }
    },
    components: {
        'navigation-bar': __WEBPACK_IMPORTED_MODULE_0__components_NavigationBar__["a" /* default */],
        'add-part': __WEBPACK_IMPORTED_MODULE_1__components_AddPart_vue__["a" /* default */]
    },
    onLoad: function onLoad(options) {
        // console.log(decodeURI(options.content))
    },

    methods: {},
    onShow: function onShow() {},
    onHide: function onHide() {}
});

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_AddPart_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4d88a2cb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_AddPart_vue__ = __webpack_require__(192);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(190)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4d88a2cb"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_AddPart_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4d88a2cb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_AddPart_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/AddPart.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AddPart.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d88a2cb", Component.options)
  } else {
    hotAPI.reload("data-v-4d88a2cb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 190:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            showTopAddBtn: true, //初次进入页面展开
            //对应的段落类型
            PART_TYPE: {
                IMAGE: 1, //图片
                WORD: 2, //文字
                VIDEO: 3, //视频
                AUDIO: 4 //音频
            },
            openType: false, //默认收起
            parts: [], //文章段落
            currentClickIndex: -1, //当前点击的展开按钮
            count: 9, //最多可以选择的图片张数，默认9
            textCount: 1, //文字上传图片，默认1
            source: '', //判断添加文字的来源
            plus_img: '', //预览图片
            show: false, //默认展示预览图片
            // kelong: {
            //     top: 0,
            //     src: '',
            //     wordDes: ''
            // },
            replace: {
                src: '',
                wordDes: ''
            },
            listnum: '',
            newkelong: {
                top: 0,
                src: '',
                wordDes: ''
            },
            storagedata: {}
        };
    },

    components: {},
    computed: {},
    props: {},
    watch: {
        currentClickIndex: function currentClickIndex(newIndex, oldIndex) {
            this.parts.forEach(function (part, index) {
                part.showShareBtn = newIndex === index;
            });
            this.openType = newIndex !== -1;
        }
    },
    onLoad: function onLoad(options) {
        if (options.from) {
            this.parts = getApp().articeParts;
            console.log(111);
        }
        if (options.from === 'input') {
            this.currentClickIndex = '';
            console.log(222);
        }
        console.log(this.parts);
    },

    methods: {
        // 开始拖拽
        dragStart: function dragStart(e, index) {
            var self = this;
            // this.newkelong = this.kelong
            self.newkelong.src = self.parts[index].src;
            self.newkelong.wordDes = self.parts[index].wordDes;
            var query = wx.createSelectorQuery();
            //选择id
            query.select('.listbox').boundingClientRect(function (rect) {
                self.newkelong.top = e.touches[0].clientY - rect.top - 74;
                // console.log(self.newkelong)
                self.storagedata = {
                    newkelong: self.newkelong,
                    showkelong: true
                };
                console.log(self.storagedata);
            }).exec();
        },
        dragMove: function dragMove(e, index) {
            // console.log('dragMove:' + e)
            // console.log('dragMove:' + index)
            var self = this;
            // var i = e.currentTarget.dataset.index
            var query = wx.createSelectorQuery();
            self.listnum = self.parts.length;
            query.select('.listbox').boundingClientRect(function (rect) {
                self.newkelong.top = e.touches[0].clientY - rect.top - 74;
                if (self.newkelong.top < -148) {
                    self.newkelong.top = -148;
                } else if (self.newkelong.top > rect.height) {
                    self.newkelong.top = rect.height - 148;
                }
                self.storagedata = {
                    newkelong: self.newkelong
                };
            }).exec();
            console.log(self.storagedata);
        },
        dragEnd: function dragEnd(e, index) {
            // // console.log('dragEnd:' + e)
            // // console.log('dragEnd:' + index)
            // var self = this
            // // var i = e.currentTarget.dataset.index
            // var query = wx.createSelectorQuery()
            // // var kelong = that.data.kelong
            // // var listnum = that.data.optionList.length
            // self.listnum = self.parts.length
            // // var optionList = that.data.optionList
            // query
            //     .select('.listbox')
            //     .boundingClientRect(function(rect) {
            //         self.newkelong.top = e.touches[0].clientY - rect.top - 74
            //         const target = parseInt(self.kelong.top / 148)
            //         console.log(target)
            //         // var replace = self.replace
            //         if (target >= 0) {
            //             // replace.xt = optionList[target].xt
            //             // replace.name = optionList[target].name
            //             // replace.subname = optionList[target].subname
            //             // optionList[target].xt = optionList[i].xt
            //             // optionList[target].name = optionList[i].name
            //             // optionList[target].subname = optionList[i].subname
            //             // optionList[i].xt = replace.xt
            //             // optionList[i].name = replace.name
            //             // optionList[i].subname = replace.subname
            //         }
            //         self.storagedata = {
            //             newkelong: self.newkelong,
            //             showkelong: false
            //         }
            //         console.log(self.storagedata)
            //     })
            //     .exec()
        },

        // 展开收起切换
        openClose: function openClose(item, newIndex) {
            console.log(this.currentClickIndex);
            if (newIndex === this.currentClickIndex) {
                console.log(111);
                this.currentClickIndex = '';
            } else {
                this.currentClickIndex = newIndex;
            }
            console.log(newIndex);
        },

        // 删除段落
        deletePart: function deletePart(index) {
            var _this = this;

            wx.showModal({
                title: '',
                content: '确定要删除这部分内容？',
                success: function success(res) {
                    if (res.confirm) {
                        _this.parts.splice(index, 1);
                        getApp().articeParts = _this.parts;
                        // 删除段落为0展示选择
                        if (_this.parts.length === 0) {
                            _this.currentClickIndex = -1;
                        }
                    } else if (res.cancel) {
                        console.log('用户点击取消');
                    }
                }
            });
        },

        // 选择图片
        chooseImage: function chooseImage() {
            var self = this;
            var result = [];
            wx.chooseImage({
                count: self.count, // 最多可以选择的图片张数，默认9
                sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有(ios才会返回压缩图，安卓需要手动压缩)
                success: function success(res) {
                    var imgObj = res.tempFiles;
                    imgObj.forEach(function (item, index) {
                        var elem = {};
                        if (item.size > 10 * 1024 * 1024) {
                            wx.showToast({
                                title: '单张图片不能超过10M',
                                icon: 'none'
                            });
                            imgObj.splice(index, 1);
                            index--;
                        } else {
                            elem.src = item.path;
                            elem.size = item.size;
                            // 添加段落类型
                            elem.type = self.PART_TYPE.IMAGE;
                            elem.showShareBtn = false;
                            elem.wordDes = '';
                            result.push(elem);
                        }
                    });
                    if (self.currentClickIndex === -1) {
                        var _getApp$articeParts;

                        (_getApp$articeParts = getApp().articeParts).splice.apply(_getApp$articeParts, [0, 0].concat(result));
                    } else {
                        var _getApp$articeParts2;

                        (_getApp$articeParts2 = getApp().articeParts).splice.apply(_getApp$articeParts2, [self.currentClickIndex + 1, 0].concat(result));
                    }
                    self.parts = getApp().articeParts;
                    self.currentClickIndex = '';
                },

                fail: function fail() {},
                complete: function complete() {}
            });
        },

        // 选择文字
        toInputPage: function toInputPage(index) {
            console.log(index);
            //跳转到输入文字页面
            wx.navigateTo({
                url: '/pages/writeArtice/main?from=button&index=' + this.currentClickIndex + '&wordDes=' + ''
            });
        },

        // 添加描述
        toAddInputPage: function toAddInputPage(index) {
            var currentWordDes = this.parts[index].wordDes;
            console.log(currentWordDes);
            //跳转到输入文字页面
            wx.navigateTo({
                url: '/pages/writeArtice/main?from=input&index=' + index + '&wordDes=' + currentWordDes
            });
        },

        // 预览图片
        previewImage: function previewImage(index) {
            this.plus_img = this.parts[index].src;
            this.show = true;
        },

        // 关闭预览图片
        hideimgage: function hideimgage() {
            this.show = false;
        },

        // 文字上传图片
        textUploadImage: function textUploadImage(index) {
            var _this2 = this;

            wx.chooseImage({
                count: this.textCount, // 文字上传选择的图片张，默认1
                sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有(ios才会返回压缩图，安卓需要手动压缩)
                success: function success(res) {
                    var imgsrc = res.tempFilePaths;
                    _this2.$set(_this2.parts[index], 'src', imgsrc[0]); //更换文章数组中某个图片
                    getApp().articeParts = _this2.parts;
                },
                fail: function fail() {},
                complete: function complete() {}
            });
        },

        // 选择视频
        choosevideo: function choosevideo() {
            var _this3 = this;

            var result = [];
            wx.chooseVideo({
                sourceType: ['album', 'camera'],
                maxDuration: 60,
                camera: 'back',
                success: function success(res) {
                    var elem = {};
                    elem.src = res.tempFilePath;
                    // 判断显示视频字段
                    elem.showVideo = true;
                    // 添加段落类型
                    elem.type = _this3.PART_TYPE.VIDEO;
                    elem.showShareBtn = false;
                    elem.wordDes = '';
                    result.push(elem);
                    if (_this3.currentClickIndex === -1) {
                        var _getApp$articeParts3;

                        (_getApp$articeParts3 = getApp().articeParts).splice.apply(_getApp$articeParts3, [0, 0].concat(result));
                    } else {
                        var _getApp$articeParts4;

                        (_getApp$articeParts4 = getApp().articeParts).splice.apply(_getApp$articeParts4, [_this3.currentClickIndex + 1, 0].concat(result));
                    }
                    _this3.parts = getApp().articeParts;
                    _this3.currentClickIndex = '';
                }
            });
        },

        //选择音频
        chooseAudio: function chooseAudio() {
            var _this4 = this;

            var result = [];
            wx.chooseMessageFile({
                count: 10,
                type: 'mp3',
                success: function success(res) {
                    var elem = {};
                    elem.src = res.tempFiles[0].path;
                    // 判断显示音频字段
                    elem.showAudio = true;
                    // 添加段落类型
                    elem.type = _this4.PART_TYPE.AUDIO;
                    elem.showShareBtn = false;
                    elem.wordDes = '';
                    result.push(elem);
                    if (_this4.currentClickIndex === -1) {
                        var _getApp$articeParts5;

                        (_getApp$articeParts5 = getApp().articeParts).splice.apply(_getApp$articeParts5, [0, 0].concat(result));
                    } else {
                        var _getApp$articeParts6;

                        (_getApp$articeParts6 = getApp().articeParts).splice.apply(_getApp$articeParts6, [_this4.currentClickIndex + 1, 0].concat(result));
                    }
                    _this4.parts = getApp().articeParts;
                    _this4.currentClickIndex = '';
                }
            });
        }
    }
});

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.show) ? _c('div', {
    staticClass: "amplification",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.hideimgage()
      }
    }
  }, [_c('img', {
    staticClass: "plus_img",
    attrs: {
      "src": _vm.plus_img,
      "alt": ""
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "add-part"
  }, [_c('div', {
    staticClass: "btn_box"
  }, [_c('div', {
    staticClass: "add_btn",
    class: _vm.openType ? 'close' : '',
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.openClose(null, -1)
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "add_type",
    class: _vm.openType ? 'close' : ''
  }, [_c('div', {
    staticClass: "type_item",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.chooseImage
    }
  }, [_c('image', {
    staticStyle: {
      "width": "24px",
      "height": "23px"
    },
    attrs: {
      "mode": "aspectFill",
      "src": "/static/images/tuwen_tupian.svg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "word"
  }, [_vm._v("图片")])], 1), _vm._v(" "), _c('div', {
    staticClass: "type_item",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.toInputPage(-1)
      }
    }
  }, [_c('image', {
    staticStyle: {
      "width": "24px",
      "height": "22px"
    },
    attrs: {
      "mode": "aspectFill",
      "src": "/static/images/tuwen_wenzi.svg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "word"
  }, [_vm._v("文字")])], 1), _vm._v(" "), _c('div', {
    staticClass: "type_item",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.choosevideo
    }
  }, [_c('image', {
    staticStyle: {
      "width": "26px",
      "height": "26px"
    },
    attrs: {
      "mode": "aspectFill",
      "src": "/static/images/tuwen_shipin.svg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "word"
  }, [_vm._v("视频")])], 1), _vm._v(" "), _c('div', {
    staticClass: "type_item",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.chooseAudio
    }
  }, [_c('image', {
    staticStyle: {
      "width": "24px",
      "height": "24px"
    },
    attrs: {
      "mode": "aspectFill",
      "src": "/static/images/tuwen_yinpin.svg"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "word"
  }, [_vm._v("音频")])], 1)])]), _vm._v(" "), (_vm.parts && _vm.parts.length > 0) ? _c('div', {
    staticClass: "listbox"
  }, _vm._l((_vm.parts), function(item, index) {
    return _c('div', {
      key: item
    }, [_c('div', {
      staticClass: "inputValue"
    }, [_c('div', {
      staticClass: "box clearfix"
    }, [_c('div', {
      staticClass: "left fl"
    }, [(item.src == '') ? _c('image', {
      staticStyle: {
        "width": "100%",
        "height": "100%"
      },
      attrs: {
        "mode": "aspectFill",
        "src": "/static/images/tuwen_list_pic1.svg",
        "eventid": '7_' + index
      },
      on: {
        "click": function($event) {
          _vm.textUploadImage(index)
        }
      }
    }) : (item.showVideo == true) ? _c('video', {
      staticStyle: {
        "width": "100%",
        "height": "100%"
      },
      attrs: {
        "id": "myVideo",
        "src": item.src,
        "controls": false,
        "show-fullscreen-btn": false,
        "show-center-play-btn": false
      }
    }) : (item.showAudio == true) ? _c('image', {
      staticStyle: {
        "width": "100%",
        "height": "100%"
      },
      attrs: {
        "mode": "aspectFill",
        "src": "/static/images/tuwen_list_music1.svg"
      }
    }) : _c('image', {
      ref: "previewimg",
      refInFor: true,
      attrs: {
        "mode": "aspectFill",
        "src": item.src,
        "eventid": '6_' + index
      },
      on: {
        "click": function($event) {
          _vm.previewImage(index)
        }
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "right fl"
    }, [(item.wordDes) ? _c('div', {
      staticClass: "value",
      attrs: {
        "eventid": '9_' + index
      },
      on: {
        "click": function($event) {
          _vm.toAddInputPage(index)
        }
      }
    }, [_vm._v(_vm._s(item.wordDes))]) : _c('div', {
      staticClass: "value",
      attrs: {
        "eventid": '8_' + index
      },
      on: {
        "click": function($event) {
          _vm.toAddInputPage(index)
        }
      }
    }, [_vm._v("点击添加描述")])]), _vm._v(" "), _c('div', {
      staticClass: "icon icon_del",
      attrs: {
        "eventid": '10_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.deletePart(index)
        }
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "icon icon_drag",
      attrs: {
        "eventid": '11_' + index
      },
      on: {
        "touchstart": function($event) {
          _vm.dragStart($event, index)
        },
        "touchmove": function($event) {
          _vm.dragMove($event, index)
        },
        "touchend": function($event) {
          _vm.dragEnd($event, index)
        }
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "btn_box"
    }, [_c('div', {
      staticClass: "add_btn",
      class: !item.showShareBtn ? 'close' : '',
      attrs: {
        "eventid": '12_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.openClose(item, index)
        }
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "add_type ",
      class: !item.showShareBtn ? 'close' : ''
    }, [_c('div', {
      staticClass: "type_item",
      attrs: {
        "eventid": '13_' + index
      },
      on: {
        "click": _vm.chooseImage
      }
    }, [_c('image', {
      staticStyle: {
        "width": "24px",
        "height": "23px"
      },
      attrs: {
        "mode": "aspectFill",
        "src": "/static/images/tuwen_tupian.svg"
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "word"
    }, [_vm._v("图片")])], 1), _vm._v(" "), _c('div', {
      staticClass: "type_item",
      attrs: {
        "eventid": '14_' + index
      },
      on: {
        "click": function($event) {
          _vm.toInputPage(index)
        }
      }
    }, [_c('image', {
      staticStyle: {
        "width": "24px",
        "height": "22px"
      },
      attrs: {
        "mode": "aspectFill",
        "src": "/static/images/tuwen_wenzi.svg"
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "word"
    }, [_vm._v("文字")])], 1), _vm._v(" "), _c('div', {
      staticClass: "type_item",
      attrs: {
        "eventid": '15_' + index
      },
      on: {
        "click": _vm.choosevideo
      }
    }, [_c('image', {
      staticStyle: {
        "width": "26px",
        "height": "26px"
      },
      attrs: {
        "mode": "aspectFill",
        "src": "/static/images/tuwen_shipin.svg"
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "word"
    }, [_vm._v("视频")])], 1), _vm._v(" "), _c('div', {
      staticClass: "type_item",
      attrs: {
        "eventid": '16_' + index
      },
      on: {
        "click": _vm.chooseAudio
      }
    }, [_c('image', {
      staticStyle: {
        "width": "24px",
        "height": "24px"
      },
      attrs: {
        "mode": "aspectFill",
        "src": "/static/images/tuwen_yinpin.svg"
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "word"
    }, [_vm._v("音频")])], 1)])])])
  })) : _vm._e()])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4d88a2cb", esExports)
  }
}

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m_publish"
  }, [_c('navigation-bar', {
    attrs: {
      "showBack": "",
      "title": _vm.title,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "input_blcok"
  }, [_c('div', {
    staticClass: "input_article_title clearfix"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputTitle),
      expression: "inputTitle"
    }],
    staticClass: "input color-333 f36 fl",
    attrs: {
      "type": "text",
      "placeholder": "点击输入标题",
      "placeholder-style": "color: #999",
      "maxlength": "50",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.inputTitle)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.inputTitle = $event.target.value
      }
    }
  }), _vm._v(" "), _c('navigator', {
    staticClass: "btn active fr",
    attrs: {
      "url": "/pages/preview/main",
      "hover-class": "none"
    }
  }, [_vm._v("预览")])], 1)]), _vm._v(" "), _c('add-part', {
    attrs: {
      "mpcomid": '1'
    }
  })], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-520bbaf4", esExports)
  }
}

/***/ })

},[185]);