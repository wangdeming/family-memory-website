require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([11],{

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(176);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_229b32c0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(179);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(177)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-229b32c0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_229b32c0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/preview/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-229b32c0", Component.options)
  } else {
    hotAPI.reload("data-v-229b32c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 177:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 178:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            // 进度条配置
            sliderSetting: {
                backgroundColor: '#D8D8D8', //背景条的颜色
                activeColor: '#FD6258', //已选择的颜色
                blockColor: '#FD6258', //滑块的颜色
                blockSize: 10 //滑块的大小
            },
            // 视频播放器配置
            videoSetting: {
                controls: true,
                showFullscreenBtn: false,
                showCenterPlayBtn: false,
                showProgress: true,
                src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
                objectFit: 'fill'
            },
            // 音频播放器设置
            audioSetting: {
                controls: true
            },
            // 先模拟只有一个音频的状态
            audioInfo: {
                src: 'http://m701.music.126.net/20200304140815/c98aa6557bc09cd1a4a73c75e76ed1af/jdyyaac/0253/5652/515f/59311ba68ca827923eb5f5a2290f5a7a.m4a'
            },
            showTime1: '00:00',
            showTime2: '',
            duration: 0, //音乐时长
            currentTime: 0, //音乐当前播放时长
            propress: 0, //音乐进度
            audioSeek: '',
            innerAudioContext: '', //音乐实例
            videoState: 'pause', //默认暂停状态 play为播放状态
            audioState: false, //默认暂停状态
            durationIntval: null,
            current: 'template', //默认选择模板格式
            msgShow: true
        };
    },

    components: {
        'navigation-bar': __WEBPACK_IMPORTED_MODULE_0__components_NavigationBar__["a" /* default */]
    },

    onLoad: function onLoad() {
        // 这是一个坑，createInnerAudioContext得定义在onLoad里，不然pause，stop方法失效
        this.InitAudio();
    },
    onHide: function onHide() {
        clearInterval(this.durationIntval);
        this.innerAudioContext.stop();
    },

    methods: {
        videoplay: function videoplay(id) {
            var videoplay = wx.createVideoContext(id);
            if (this.videoState === 'pause') {
                videoplay.play();
                this.videoState = 'play';
            } else if (this.videoState === 'play') {
                videoplay.pause();
                this.videoState = 'pause';
            }
        },
        InitAudio: function InitAudio() {
            var self = this;
            self.innerAudioContext = wx.createInnerAudioContext();
            self.propress = 0;
            if (self.audioInfo.src) {
                // 设置src
                self.innerAudioContext.src = self.audioInfo.src;
                // 运行一次
                self.innerAudioContext.play();
                self.innerAudioContext.pause();
                self.innerAudioContext.onCanplay(function () {
                    // 初始化duration
                    var duration = self.innerAudioContext.duration;
                    setTimeout(function () {
                        //延时获取音频真正的duration
                        duration = self.innerAudioContext.duration;
                        var min = parseInt(duration / 60);
                        var sec = parseInt(duration % 60);
                        if (min.toString().length === 1) {
                            min = '0' + min;
                        }
                        if (sec.toString().length === 1) {
                            sec = '0' + sec;
                        }
                        self.duration = self.innerAudioContext.duration;
                        self.showTime2 = min + ':' + sec;
                    }, 1000);
                });
            }
        },

        // 拖动进度条事件
        sliderChange: function sliderChange(e) {
            var self = this;
            self.innerAudioContext.src = self.audioInfo.src;
            //获取进度条百分比
            var value = e.mp.detail.value;
            self.propress = value;
            //根据进度条百分比及歌曲总时间，计算拖动位置的时间
            value = parseInt(value * self.duration / 100);
            self.audioSeek = value;
            self.audioState = true;
            self.innerAudioContext.seek(value);
            self.innerAudioContext.play();
        },
        audioPlay: function audioPlay() {
            var self = this;

            self.innerAudioContext.pause();

            if (self.audioState) {
                self.audioSeek = self.innerAudioContext.currentTime;
            } else {
                self.innerAudioContext.src = self.audioSetting.src;
                if (self.innerAudioContext.duration !== 0) {
                    self.duration = this.innerAudioContext.duration;
                }
                self.innerAudioContext.seek(self.audioSeek);
                self.innerAudioContext.play();
            }
            self.innerAudioContext.onPlay(function () {
                self.durationIntval = setInterval(function () {
                    if (self.audioState) {
                        var duration = self.innerAudioContext.duration;
                        var time = parseInt(100 * self.innerAudioContext.currentTime / duration);
                        self.audioSeek = self.innerAudioContext.currentTime;
                        var min = parseInt((self.audioSeek + 1) / 60);
                        var sec = parseInt((self.audioSeek + 1) % 60);
                        if (min.toString().length === 1) {
                            min = '0' + min;
                        }
                        if (sec.toString().length === 1) {
                            sec = '0' + sec;
                        }
                        if (time >= 100) {
                            self.innerAudioContext.stop();
                            self.audioSeek = 0;
                            self.propress = 0;
                            self.duration = duration;
                            self.audioState = false;
                            self.showTime1 = '00:00';
                        }
                        self.propress = time;
                        self.duration = duration;
                        self.showTime1 = min + ':' + sec;
                    }
                }, 100);
            });
            this.audioState = !this.audioState;
        },

        // 跳转模板样式
        toGoal: function toGoal(name) {
            this.msgShow = true;
            this.current = name;
        },

        // 关闭模板样式
        closeMsg: function closeMsg() {
            this.msgShow = false;
        }
    },
    onUnload: function onUnload() {
        clearInterval(this.durationIntval);
    },
    created: function created() {}
});

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m_preview"
  }, [_c('navigation-bar', {
    attrs: {
      "showBack": "",
      "title": "预览",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "done_line",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.closeMsg()
      }
    }
  }, [_c('div', {
    staticClass: "btn btn_done"
  }, [_vm._v("完成")])]), _vm._v(" "), _c('div', {
    staticClass: " m_artice_detail",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.closeMsg()
      }
    }
  }, [_c('div', {
    staticClass: "content_box"
  }, [_c('div', {
    staticClass: "artice_detail"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("俗语：“没钱不碰三生意，有钱不做三买卖”，创业者值得一看！")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "artice_main"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "word"
  }, [_vm._v("\n                            从表的一端开始，顺序扫描表，依次将扫描到的结点关键字和给定值（假定为a）相比较，若当前结点关键字与a相等，则查找成功；从表的一端开始，顺序扫描表，依次将扫描到的结点关键字和给定值（假定为a）相比较，若当前结点关键字与a相等，则查找成功；\n                        ")]), _vm._v(" "), _c('div', {
    staticClass: "word"
  }, [_vm._v("\n                            从表的一端开始，顺序扫描表，依次将扫描到的结点关键字和给定值（假定为a）相比较，若当前结点关键字与a相等，则查找成功；从表的一端开始，顺序扫描表，依次将扫描到的结点关键字和给定值（假定为a）相比较，若当前结点关键字与a相等，则查找成功；\n                        ")]), _vm._v(" "), _c('div', {
    staticClass: "media video"
  }, [_c('video', {
    attrs: {
      "id": "myVideo",
      "controls": _vm.videoSetting.controls,
      "show-fullscreen-btn": _vm.videoSetting.showFullscreenBtn,
      "show-center-play-btn": _vm.videoSetting.showCenterPlayBtn,
      "object-fit": _vm.videoSetting.objectFit,
      "show-progress": _vm.videoSetting.showProgress,
      "src": _vm.videoSetting.src
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "word"
  }, [_vm._v("\n                            从表的一端开始，顺序扫描表，依次将扫描到的结点关键字和给定值（假定为a）相比较，若当前结点关键字与a相等，则查找成功；从表的一端开始，顺序扫描表，依次将扫描到的结点关键字和给定值（假定为a）相比较，若当前结点关键字与a相等，则查找成功；\n                        ")]), _vm._v(" "), _c('div', {
    staticClass: "media audio"
  }, [_c('div', {
    staticClass: "view clearfix"
  }, [_c('div', {
    staticClass: "play_btn fl",
    class: {
      active: _vm.audioState
    },
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.audioPlay()
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "progress_bar fl"
  }, [_c('p', {
    staticClass: "bar_time"
  }, [_c('text', {
    staticClass: "current_propress"
  }, [_vm._v(_vm._s(_vm.showTime1))]), _vm._v(" "), _c('text', {
    staticClass: "margin"
  }, [_vm._v("/")]), _vm._v(" "), _c('text', {
    staticClass: "all_propress"
  }, [_vm._v(_vm._s(_vm.showTime2))])]), _vm._v(" "), _c('slider', {
    attrs: {
      "backgroundColor": _vm.sliderSetting.backgroundColor,
      "activeColor": _vm.sliderSetting.activeColor,
      "block-color": _vm.sliderSetting.blockColor,
      "block-size": _vm.sliderSetting.blockSize,
      "value": _vm.propress,
      "eventid": '2'
    },
    on: {
      "change": _vm.sliderChange
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "word"
  }, [_vm._v("\n                            从表的一端开始，顺序扫描表，依次将扫描到的结点关键字和给定值（假定为a）相比较，若当前结点关键字与a相等，则查找成功；从表的一端开始，顺序扫描表，依次将扫描到的结点关键字和给定值（假定为a）相比较，若当前结点关键字与a相等，则查找成功；\n                        ")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "set_style clearfix"
  }, [_c('div', {
    staticClass: "style_item  fl",
    class: _vm.current === 'template' && _vm.msgShow === true ? 'active' : '',
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.toGoal('template')
      }
    }
  }, [_c('div', {
    staticClass: "icon icon_mb "
  }), _vm._v(" "), _c('p', {
    staticClass: "word"
  }, [_vm._v("模板")])], 1), _vm._v(" "), _c('div', {
    staticClass: "style_item fl",
    class: _vm.current === 'music' && _vm.msgShow === true ? 'active' : '',
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.toGoal('music')
      }
    }
  }, [_c('div', {
    staticClass: "icon icon_yy"
  }), _vm._v(" "), _c('p', {
    staticClass: "word"
  }, [_vm._v("音乐")])], 1), _vm._v(" "), _c('div', {
    staticClass: "style_item fl",
    class: _vm.current === 'Font' && _vm.msgShow === true ? 'active' : '',
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": function($event) {
        _vm.toGoal('Font')
      }
    }
  }, [_c('div', {
    staticClass: "icon icon_zt"
  }), _vm._v(" "), _c('p', {
    staticClass: "word"
  }, [_vm._v("字体")])], 1), _vm._v(" "), _c('div', {
    staticClass: "style_item fl",
    class: _vm.current === 'style' && _vm.msgShow === true ? 'active' : '',
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.toGoal('style')
      }
    }
  }, [_c('div', {
    staticClass: "icon icon_ys"
  }), _vm._v(" "), _c('p', {
    staticClass: "word"
  }, [_vm._v("样式")])], 1)]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.msgShow),
      expression: "msgShow"
    }],
    staticClass: "template_style"
  }, [(_vm.current === 'template') ? _c('div', {
    staticClass: "template"
  }, [_c('van-tabs', {
    attrs: {
      "animated": "",
      "mpcomid": '14'
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "无模板",
      "mpcomid": '8'
    }
  }, [_c('swiper', {
    staticClass: "tap_swiper",
    attrs: {
      "display-multiple-items": "4"
    }
  }, [_c('swiper-item', {
    staticClass: "tap_item",
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('div', [_c('img', {
    staticClass: "huangguan",
    attrs: {
      "src": "../../assets/images/yulan_mobanku.svg",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "moban"
  }, [_vm._v("模板库")])], 1)]), _vm._v(" "), _c('swiper-item', {
    staticClass: "tap_item",
    attrs: {
      "mpcomid": '2'
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "/static/images/tree_pic.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "name"
  }, [_vm._v("名称")])], 1)]), _vm._v(" "), _c('swiper-item', {
    staticClass: "tap_item",
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "/static/images/tree_pic.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "name"
  }, [_vm._v("名称")])], 1)]), _vm._v(" "), _c('swiper-item', {
    staticClass: "tap_item",
    attrs: {
      "mpcomid": '4'
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "/static/images/tree_pic.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "name"
  }, [_vm._v("名称")])], 1)]), _vm._v(" "), _c('swiper-item', {
    staticClass: "tap_item",
    attrs: {
      "mpcomid": '5'
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "/static/images/tree_pic.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "name"
  }, [_vm._v("名称")])], 1)]), _vm._v(" "), _c('swiper-item', {
    staticClass: "tap_item",
    attrs: {
      "mpcomid": '6'
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "/static/images/tree_pic.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "name"
  }, [_vm._v("名称")])], 1)]), _vm._v(" "), _c('swiper-item', {
    staticClass: "tap_item",
    attrs: {
      "mpcomid": '7'
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "/static/images/tree_pic.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "name"
  }, [_vm._v("名称")])], 1)])], 1)], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "模板一",
      "mpcomid": '9'
    }
  }, [_vm._v("\n                    内容 2\n                ")]), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "模板二",
      "mpcomid": '10'
    }
  }, [_vm._v("\n                    内容 3\n                ")]), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "模板三",
      "mpcomid": '11'
    }
  }, [_vm._v("\n                    内容 4\n                ")]), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "模板四",
      "mpcomid": '12'
    }
  }, [_vm._v("\n                    内容 5\n                ")]), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "模板四",
      "mpcomid": '13'
    }
  }, [_vm._v("\n                    内容 5\n                ")])], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.current === 'music') ? _c('div', {
    staticClass: "music"
  }, [_c('van-tabs', {
    attrs: {
      "animated": "",
      "mpcomid": '23'
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "无音乐",
      "mpcomid": '19'
    }
  }, [_c('swiper', {
    staticClass: "tap_swiper",
    attrs: {
      "display-multiple-items": "4"
    }
  }, [_c('swiper-item', {
    staticClass: "tap_item",
    attrs: {
      "mpcomid": '15'
    }
  }, [_c('div', {
    staticClass: "item"
  }, [_c('img', {
    staticClass: "huangguan",
    attrs: {
      "src": "../../assets/images/yulan_yinyueku.svg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "name"
  }, [_vm._v("音乐库")])], 1), _vm._v(" "), _c('swiper-item', {
    staticClass: "tap_item",
    attrs: {
      "mpcomid": '16'
    }
  }, [_c('div', {
    staticClass: "item"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/tree_pic.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "name"
  }, [_vm._v("名称")])], 1), _vm._v(" "), _c('swiper-item', {
    staticClass: "tap_item",
    attrs: {
      "mpcomid": '17'
    }
  }, [_c('div', {
    staticClass: "item"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/tree_pic.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "name"
  }, [_vm._v("名称")])], 1), _vm._v(" "), _c('swiper-item', {
    staticClass: "tap_item",
    attrs: {
      "mpcomid": '18'
    }
  }, [_c('div', {
    staticClass: "item"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/tree_pic.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "name"
  }, [_vm._v("名称")])], 1)], 1)], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "模板一",
      "mpcomid": '20'
    }
  }, [_vm._v("\n                    内容 2\n                ")]), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "模板二",
      "mpcomid": '21'
    }
  }, [_vm._v("\n                    内容 3\n                ")]), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "模板三",
      "mpcomid": '22'
    }
  }, [_vm._v("\n                    内容 4\n                ")])], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.current === 'Font') ? _c('div', {
    staticClass: "Font"
  }, [_c('swiper', {
    staticClass: "tap_swiper",
    attrs: {
      "display-multiple-items": "3"
    }
  }, [_c('swiper-item', {
    staticClass: "tap_item active",
    attrs: {
      "mpcomid": '24'
    }
  }, [_c('div', {
    staticClass: "item"
  }, [_c('p', {
    staticClass: "name"
  }, [_vm._v("默认字体")])], 1)]), _vm._v(" "), _c('swiper-item', {
    staticClass: "tap_item",
    attrs: {
      "mpcomid": '25'
    }
  }, [_c('div', {
    staticClass: "item"
  }, [_c('p', {
    staticClass: "name"
  }, [_vm._v("楷体")])], 1)]), _vm._v(" "), _c('swiper-item', {
    staticClass: "tap_item",
    attrs: {
      "mpcomid": '26'
    }
  }, [_c('div', {
    staticClass: "item"
  }, [_c('p', {
    staticClass: "name"
  }, [_vm._v("行书")])], 1)])], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.current === 'style') ? _c('div', {
    staticClass: "style"
  }, [_vm._m(2)]) : _vm._e()])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "author_line clearfix"
  }, [_c('div', {
    staticClass: "avatar_box fl"
  }, [_c('image', {
    attrs: {
      "mode": "aspectFill",
      "src": "/static/images/user.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "author_detail fl"
  }, [_c('div', {
    staticClass: "author_name"
  }, [_vm._v("用户名称")]), _vm._v(" "), _c('div', {
    staticClass: "author_time"
  }, [_vm._v("2019-12-12")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "media img"
  }, [_c('image', {
    attrs: {
      "mode": "widthFix",
      "src": "/static/images/pic.png"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "style_lists"
  }, [_c('div', {
    staticClass: "list active"
  }, [_c('span', {
    staticClass: "wenzi"
  }, [_vm._v("字上图下")])]), _vm._v(" "), _c('div', {
    staticClass: "list "
  }, [_c('span', {
    staticClass: "wenzi"
  }, [_vm._v("字下图上")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-229b32c0", esExports)
  }
}

/***/ })

},[175]);