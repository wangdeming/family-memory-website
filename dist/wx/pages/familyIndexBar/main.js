require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(132);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6c79b5c3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(136);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(133)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6c79b5c3"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6c79b5c3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/familyIndexBar/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6c79b5c3", Component.options)
  } else {
    hotAPI.reload("data-v-6c79b5c3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 133:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_NavigationBar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_testData_json__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_testData_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_testData_json__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            data: __WEBPACK_IMPORTED_MODULE_1__static_testData_json___default.a,
            currentIndex: 0,
            moving: true,
            currentIndicator: 'A',
            listHeight: [],
            firstHeight: [],
            scrollId: ''
        };
    },

    watch: {
        currentIndex: function currentIndex(newVal) {
            var _this = this;

            this.currentIndicator = this.data[newVal].title;
            this.moving = true;
            setTimeout(function () {
                _this.moving = false;
            }, 2000);
        }
    },
    components: {
        'navigation-bar': __WEBPACK_IMPORTED_MODULE_0__components_NavigationBar__["a" /* default */]
    },
    computed: {
        indexList: function indexList() {
            return this.data.map(function (group) {
                return group.title.substring(0, 1);
            });
        }
    },
    created: function created() {
        var _this2 = this;

        setTimeout(function () {
            _this2.moving = false;
        }, 2000);
    },
    mounted: function mounted() {
        var _this3 = this;

        setTimeout(function () {
            _this3._calculateHeight();
        }, 20);
    },

    methods: {
        scroll: function scroll(e) {
            var _this4 = this;

            var tempFirstHeight = this.firstHeight[0];
            var tempListHeight = this.listHeight;
            var tempIndex = [0];
            var query = wx.createSelectorQuery();
            query.select('#A').boundingClientRect(function (rect) {
                var tempHeight = tempFirstHeight - rect.top;
                for (var i = 0; i < tempListHeight.length; i++) {
                    if (tempHeight < tempListHeight[0]) {
                        tempIndex[0] = 0;
                        setTimeout(function () {
                            _this4.currentIndex = tempIndex[0];
                        }, 20);
                    }
                    if (tempHeight >= tempListHeight[i] && tempHeight < tempListHeight[i + 1]) {
                        tempIndex[0] = i + 1;
                        setTimeout(function () {
                            _this4.currentIndex = tempIndex[0];
                        }, 20);
                    }
                }
            }).exec();
        },
        _calculateHeight: function _calculateHeight() {
            var tempList = [];
            var query1 = wx.createSelectorQuery();
            query1.select('#A').boundingClientRect(function (rect) {
                tempList.push(rect.top);
            }).exec();
            this.firstHeight = tempList;
            var lHeight = [];
            var height = 0;
            var query2 = wx.createSelectorQuery();
            query2.selectAll('.index-group').boundingClientRect(function (rects) {
                var rect = rects,
                    len = rect.length;
                for (var i = 0; i < len; i++) {
                    height += rect[i].height;
                    lHeight.push(height);
                }
            }).exec();
            this.listHeight = lHeight;
        },
        clickItem: function clickItem(item) {
            this.$emit('choose', item);
        }
    },
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

module.exports = [{"title":"A","items":[{"id":"0020PeOh4ZaCw1","name":"Alan Walker (艾伦·沃克)","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M0000020PeOh4ZaCw1.jpg?max_age=2592000"},{"id":"003ArN8Z0WpjTz","name":"A-Lin","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000003ArN8Z0WpjTz.jpg?max_age=2592000"},{"id":"003CoxJh1zFPpx","name":"Adele (阿黛尔)","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000003CoxJh1zFPpx.jpg?max_age=2592000"}]},{"title":"B","items":[{"id":"004AlfUb0cVkN1","name":"BIGBANG (빅뱅)","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000004AlfUb0cVkN1.jpg?max_age=2592000"},{"id":"002pUZT93gF4Cu","name":"BEYOND","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000002pUZT93gF4Cu.jpg?max_age=2592000"},{"id":"003LaMHm42u7qS","name":"本兮","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000003LaMHm42u7qS.jpg?max_age=2592000"},{"id":"003DBAjk2MMfhR","name":"BLACKPINK","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000003DBAjk2MMfhR.jpg?max_age=2592000"}]},{"title":"C","items":[{"id":"003Nz2So3XXYek","name":"陈奕迅","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000003Nz2So3XXYek.jpg?max_age=2592000"},{"id":"004DFS271osAwp","name":"陈小春","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000004DFS271osAwp.jpg?max_age=2592000"},{"id":"000jnR7q3pCzYG","name":"Charlie Puth (查理·普斯)","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000jnR7q3pCzYG.jpg?max_age=2592000"},{"id":"004EyqQS2hMS6V","name":"陈翔","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000004EyqQS2hMS6V.jpg?max_age=2592000"},{"id":"000hNnWC3kko2c","name":"蔡健雅","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000hNnWC3kko2c.jpg?max_age=2592000"}]},{"title":"E","items":[{"id":"000yDAjj2TE9j8","name":"Eminem (艾米纳姆)","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000yDAjj2TE9j8.jpg?max_age=2592000"}]},{"title":"F","items":[{"id":"003CKb192ggBqi","name":"Fall Out Boy (打倒男孩)","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000003CKb192ggBqi.jpg?max_age=2592000"},{"id":"003vyG9q2klWs4","name":"范玮琪","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000003vyG9q2klWs4.jpg?max_age=2592000"}]},{"title":"G","items":[{"id":"001fNHEf1SFEFN","name":"G.E.M. 邓紫棋","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000001fNHEf1SFEFN.jpg?max_age=2592000"},{"id":"000t2qd13dLpae","name":"G-DRAGON (权志龙)","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000t2qd13dLpae.jpg?max_age=2592000"},{"id":"002OfR3n1vx75j","name":"葛林","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000002OfR3n1vx75j.jpg?max_age=2592000"},{"id":"0043Zxw10txf5O","name":"郭静","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M0000043Zxw10txf5O.jpg?max_age=2592000"}]},{"title":"H","items":[{"id":"002Vcz8F2hpBQj","name":"华晨宇","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000002Vcz8F2hpBQj.jpg?max_age=2592000"},{"id":"002mze3U0NYXOM","name":"胡夏","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000002mze3U0NYXOM.jpg?max_age=2592000"},{"id":"004QoDUs3jfOC6","name":"韩安旭","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000004QoDUs3jfOC6.jpg?max_age=2592000"}]},{"title":"J","items":[{"id":"002DYpxl3hW3EP","name":"Justin Bieber (贾斯汀·比伯)","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000002DYpxl3hW3EP.jpg?max_age=2592000"},{"id":"004YXxql1sSr2o","name":"金志文","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000004YXxql1sSr2o.jpg?max_age=2592000"},{"id":"0023ni2j3F9CpN","name":"Jam","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M0000023ni2j3F9CpN.jpg?max_age=2592000"},{"id":"001m7JoC1IVL44","name":"金南玲","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000001m7JoC1IVL44.jpg?max_age=2592000"}]},{"title":"K","items":[{"id":"002Sm9iK4RIsCr","name":"筷子兄弟","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000002Sm9iK4RIsCr.jpg?max_age=2592000"}]},{"title":"L","items":[{"id":"001BLpXF2DyJe2","name":"林俊杰","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000001BLpXF2DyJe2.jpg?max_age=2592000"},{"id":"000aHmbL2aPXWH","name":"李荣浩","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000aHmbL2aPXWH.jpg?max_age=2592000"},{"id":"001SqkF53OEhdO","name":"鹿晗","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000001SqkF53OEhdO.jpg?max_age=2592000"},{"id":"001f0VyZ1hmWZ1","name":"林宥嘉","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000001f0VyZ1hmWZ1.jpg?max_age=2592000"},{"id":"002xpOdd4Dh6pu","name":"李易峰","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000002xpOdd4Dh6pu.jpg?max_age=2592000"},{"id":"002ZOuVm3Qn20Y","name":"李宇春","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000002ZOuVm3Qn20Y.jpg?max_age=2592000"},{"id":"002seUhN1Akj7J","name":"李圣杰","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000002seUhN1Akj7J.jpg?max_age=2592000"},{"id":"003bQEFA3KrvLI","name":"刘瑞琦","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000003bQEFA3KrvLI.jpg?max_age=2592000"},{"id":"003aQYLo2x8izP","name":"刘德华","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000003aQYLo2x8izP.jpg?max_age=2592000"},{"id":"003nS2v740Lxcw","name":"李克勤","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000003nS2v740Lxcw.jpg?max_age=2592000"}]},{"title":"M","items":[{"id":"001JuGrt372YIQ","name":"Maroon 5 (魔力红乐团)","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000001JuGrt372YIQ.jpg?max_age=2592000"},{"id":"0035kILA0ydw3j","name":"MC天佑","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M0000035kILA0ydw3j.jpg?max_age=2592000"},{"id":"000WbpKa3WokLD","name":"MC魏小然","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000WbpKa3WokLD.jpg?max_age=2592000"},{"id":"000cISVf2QqLc6","name":"莫文蔚","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000cISVf2QqLc6.jpg?max_age=2592000"},{"id":"003wWQBU0fHBcj","name":"马旭东","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000003wWQBU0fHBcj.jpg?max_age=2592000"},{"id":"003rJfMG3PPqWd","name":"萌萌哒天团","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000003rJfMG3PPqWd.jpg?max_age=2592000"}]},{"title":"N","items":[{"id":"003LCFXH0eodXv","name":"那英","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000003LCFXH0eodXv.jpg?max_age=2592000"},{"id":"003ZQQb64D5317","name":"南征北战","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000003ZQQb64D5317.jpg?max_age=2592000"},{"id":"0012bj8d36Xkw1","name":"牛奶咖啡","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M0000012bj8d36Xkw1.jpg?max_age=2592000"}]},{"title":"O","items":[{"id":"002a1DuK4evNsR","name":"Owl City (猫头鹰之城)","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000002a1DuK4evNsR.jpg?max_age=2592000"},{"id":"001FXn5P0kkWfV","name":"One Direction (单向组合)","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000001FXn5P0kkWfV.jpg?max_age=2592000"}]},{"title":"P","items":[{"id":"000mLAT42CFWNa","name":"朴树","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000mLAT42CFWNa.jpg?max_age=2592000"},{"id":"003vSrlp0ujV6o","name":"鹏泊","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000003vSrlp0ujV6o.jpg?max_age=2592000"}]},{"title":"Q","items":[{"id":"0030RkE50nmpWC","name":"曲婉婷","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M0000030RkE50nmpWC.jpg?max_age=2592000"},{"id":"0020IaUo4Vgsjk","name":"齐一","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M0000020IaUo4Vgsjk.jpg?max_age=2592000"},{"id":"000H4xDG3heHtr","name":"齐晨","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000H4xDG3heHtr.jpg?max_age=2592000"}]},{"title":"R","items":[{"id":"000f1b6W1wzyRN","name":"RADWIMPS (ラッドウィンプス)","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000f1b6W1wzyRN.jpg?max_age=2592000"},{"id":"002MiBdR19HQWx","name":"Rihanna (蕾哈娜)","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000002MiBdR19HQWx.jpg?max_age=2592000"}]},{"title":"S","items":[{"id":"000Q4W691sMvLG","name":"苏打绿","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000Q4W691sMvLG.jpg?max_age=2592000"},{"id":"001oXbjs29oPul","name":"孙子涵","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000001oXbjs29oPul.jpg?max_age=2592000"},{"id":"004KKLWZ4320g1","name":"宋冬野","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000004KKLWZ4320g1.jpg?max_age=2592000"},{"id":"001pWERg3vFgg8","name":"孙燕姿","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000001pWERg3vFgg8.jpg?max_age=2592000"},{"id":"001t94rh4OpQn0","name":"双笙","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000001t94rh4OpQn0.jpg?max_age=2592000"}]},{"title":"T","items":[{"id":"000zmpju02bEBm","name":"TFBOYS","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000zmpju02bEBm.jpg?max_age=2592000"},{"id":"001ByAsv3XCdgm","name":"田馥甄","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000001ByAsv3XCdgm.jpg?max_age=2592000"},{"id":"004ABIFV1EZUAj","name":"The Chainsmokers (烟民二人组)","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000004ABIFV1EZUAj.jpg?max_age=2592000"},{"id":"000ndQx82fsq8Z","name":"Tez Cadey","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000ndQx82fsq8Z.jpg?max_age=2592000"},{"id":"001Yxpxc0OaUUX","name":"逃跑计划","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000001Yxpxc0OaUUX.jpg?max_age=2592000"},{"id":"000QG95i2rHlOf","name":"谭晶","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000QG95i2rHlOf.jpg?max_age=2592000"}]},{"title":"W","items":[{"id":"001JDzPT3JdvqK","name":"王力宏","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000001JDzPT3JdvqK.jpg?max_age=2592000"},{"id":"002yeznU3VAVEV","name":"吴亦凡","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000002yeznU3VAVEV.jpg?max_age=2592000"},{"id":"001z2JmX09LLgL","name":"汪苏泷","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000001z2JmX09LLgL.jpg?max_age=2592000"},{"id":"000GDDuQ3sGQiT","name":"王菲","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000GDDuQ3sGQiT.jpg?max_age=2592000"},{"id":"000CQ06r24Naco","name":"Wiz Khalifa (维兹·卡利法)","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000CQ06r24Naco.jpg?max_age=2592000"},{"id":"001adLDR1SS40P","name":"汪峰","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000001adLDR1SS40P.jpg?max_age=2592000"},{"id":"001WcO2V0TLCv3","name":"威仔","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000001WcO2V0TLCv3.jpg?max_age=2592000"}]},{"title":"X","items":[{"id":"002J4UUk29y8BY","name":"薛之谦","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000"},{"id":"000CK5xN3yZDJt","name":"许嵩","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000CK5xN3yZDJt.jpg?max_age=2592000"},{"id":"004bsIDK0awMOv","name":"萧敬腾","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000004bsIDK0awMOv.jpg?max_age=2592000"},{"id":"00235pCx2tYjlq","name":"许巍","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M00000235pCx2tYjlq.jpg?max_age=2592000"},{"id":"004aRKga0CXIPm","name":"徐良","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000004aRKga0CXIPm.jpg?max_age=2592000"},{"id":"001oNMzI3WznzG","name":"夏婉安","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000001oNMzI3WznzG.jpg?max_age=2592000"},{"id":"002LZVMH0zc8F4","name":"徐佳莹","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000002LZVMH0zc8F4.jpg?max_age=2592000"}]},{"title":"Y","items":[{"id":"003tMm0y0TuewY","name":"杨宗纬","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000003tMm0y0TuewY.jpg?max_age=2592000"},{"id":"004coWV04C5FCV","name":"杨洋","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000004coWV04C5FCV.jpg?max_age=2592000"},{"id":"004FtTNW2b0tJi","name":"雨宗林","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000004FtTNW2b0tJi.jpg?max_age=2592000"},{"id":"001IoTZp19YMDG","name":"易烊千玺","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000001IoTZp19YMDG.jpg?max_age=2592000"}]},{"title":"Z","items":[{"id":"0025NhlN2yWrP4","name":"周杰伦","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M0000025NhlN2yWrP4.jpg?max_age=2592000"},{"id":"002azErJ0UcDN6","name":"张杰","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000002azErJ0UcDN6.jpg?max_age=2592000"},{"id":"003Cn3Yh16q1MO","name":"庄心妍","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000003Cn3Yh16q1MO.jpg?max_age=2592000"},{"id":"0003ZpE43ypssl","name":"张碧晨","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M0000003ZpE43ypssl.jpg?max_age=2592000"},{"id":"004Be55m1SJaLk","name":"张学友","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000004Be55m1SJaLk.jpg?max_age=2592000"},{"id":"000aw4WC2EQYTv","name":"张靓颖","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000aw4WC2EQYTv.jpg?max_age=2592000"},{"id":"003JGrNQ3RjelA","name":"张惠妹","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000003JGrNQ3RjelA.jpg?max_age=2592000"},{"id":"004NMZuf2BLjg8","name":"周传雄","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000004NMZuf2BLjg8.jpg?max_age=2592000"},{"id":"0000mFvh1jtLcz","name":"张信哲","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M0000000mFvh1jtLcz.jpg?max_age=2592000"},{"id":"0044wQXL0ElWF1","name":"张宇","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M0000044wQXL0ElWF1.jpg?max_age=2592000"},{"id":"004eaDNU1nfRO0","name":"张磊","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000004eaDNU1nfRO0.jpg?max_age=2592000"},{"id":"002raUWw3PXdkT","name":"张韶涵","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000002raUWw3PXdkT.jpg?max_age=2592000"},{"id":"0042kZuh1dgLre","name":"周二珂","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M0000042kZuh1dgLre.jpg?max_age=2592000"},{"id":"003AfDK34H82GU","name":"张敬轩","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000003AfDK34H82GU.jpg?max_age=2592000"},{"id":"000SJp6n49rDgl","name":"张赫宣","avatar":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000SJp6n49rDgl.jpg?max_age=2592000"}]}]

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Create_family"
  }, [_c('navigation-bar', {
    attrs: {
      "showBack": "",
      "title": "创建家庭",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "Addressbook"
  }, [_c('div', {
    staticClass: "index-list"
  }, [_c('scroll-view', {
    staticClass: "scroll_list",
    attrs: {
      "scroll-y": "true",
      "eventid": '1'
    },
    on: {
      "scroll": _vm.scroll
    }
  }, [_c('ul', {
    ref: "indexWrap",
    staticClass: "index-list-wrap"
  }, _vm._l((_vm.data), function(group, index) {
    return _c('li', {
      key: index,
      ref: "indexGroup",
      refInFor: true,
      staticClass: "index-group",
      attrs: {
        "id": group.title
      }
    }, [_c('h3', {
      staticClass: "index-group-title"
    }, [_vm._v(_vm._s(group.title))]), _vm._v(" "), _c('ul', {
      staticClass: "bg-fff"
    }, _vm._l((group.items), function(item, index1) {
      return _c('li', {
        key: index1,
        staticClass: "index-group-item",
        attrs: {
          "eventid": '0_' + index + '-' + index1
        },
        on: {
          "click": function($event) {
            _vm.clickItem(item, index1)
          }
        }
      }, [_c('img', {
        staticClass: "avatar",
        attrs: {
          "src": item.avatar,
          "alt": ""
        }
      }), _vm._v(" "), _c('span', {
        staticClass: "name"
      }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('label', {
        staticClass: "checkbox item_sel"
      }, [_c('checkbox', {
        attrs: {
          "color": "#FD6258"
        }
      })], 1)], 1)
    }))], 1)
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "index-nav"
  }, [_c('ul', [_vm._l((_vm.indexList), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "nav-item",
      class: {
        active: _vm.currentIndex === index
      },
      attrs: {
        "data-index": index
      }
    }, [_vm._v(_vm._s(item))])
  }), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_vm._v("#")])], 2)], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade",
      "mpcomid": '1'
    }
  }, [(_vm.moving) ? _c('div', {
    staticClass: "index-indicator"
  }, [_vm._v(_vm._s(_vm.currentIndicator))]) : _vm._e()])], 1)]), _vm._v(" "), _c('button', {
    staticClass: "complain_com"
  }, [_vm._v("确定")])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "numbers"
  }, [_c('div', {
    staticClass: "m_search_line mb-20 clearfix"
  }, [_c('div', {
    staticClass: "m_search_box fl"
  }, [_c('div', {
    staticClass: "m_box"
  }, [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "输入关键词搜索",
      "placeholder-style": "color: #999999"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "m_search_btn fl f32 color-333"
  }, [_vm._v("取消")])]), _vm._v(" "), _c('div', {
    staticClass: "serch-info"
  }, [_vm._v("可邀请相互关注的好友创建家庭，共同记录家庭专属回忆")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6c79b5c3", esExports)
  }
}

/***/ })

},[131]);