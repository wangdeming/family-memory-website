require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_wxRequest_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_guid_js__ = __webpack_require__(82);






__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* CONFIG */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$http = __WEBPACK_IMPORTED_MODULE_3__utils_wxRequest_js__["a" /* default */];

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

// 设置常量
getApp().articeParts = []; //文章段落
getApp().tabBarAnimate = false;
getApp().authorizeState = false; //用户授权状态
getApp().userInfo = {}; //微信用户信息（授权后）
getApp().guid = ''; //该客户端的guid

// 获取客户端guid
wx.getStorage({
    key: 'guid',
    // 已经有guid
    success: function success(res) {
        getApp().guid = res.data;
    },
    fail: function fail(res) {
        // 没有guid时生成一个guid并保持在storage
        var guid = new __WEBPACK_IMPORTED_MODULE_4__assets_js_guid_js__["a" /* GUID */]();
        getApp().guid = guid.newGUID();
        wx.setStorage({
            key: 'guid',
            data: getApp().guid
        });
    }
});

// 进入小程序先检查用户的授权情况
wx.getUserInfo({
    //通过授权获取encryptedData，iv等信息
    success: function success(res) {
        getApp().authorizeState = true;
        console.log(res, '用户已授权');
    },
    fail: function fail(err) {
        getApp().authorizeState = false;
        console.log(err, '用户未授权');
    }
});

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(46);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(45)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65489381", Component.options)
  } else {
    hotAPI.reload("data-v-65489381", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 46:
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

/* eslint-disable */
/* harmony default export */ __webpack_exports__["a"] = ({
    created: function created() {
        // 关闭微信自带的tabBar，使用自定义的tabBar
        wx.hideTabBar();

        // 微信授权

        // 调用API从本地缓存中获取数据
        /*
         * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
         * 微信：mpvue === wx, mpvuePlatform === 'wx'
         * 头条：mpvue === tt, mpvuePlatform === 'tt'
         * 百度：mpvue === swan, mpvuePlatform === 'swan'
         * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
         */
        var logs = void 0;
        if (global.mpvuePlatform === 'my') {
            logs = global.mpvue.getStorageSync({ key: 'logs' }).data || [];
            logs.unshift(Date.now());
            global.mpvue.setStorageSync({
                key: 'logs',
                data: logs
            });
        } else {
            logs = global.mpvue.getStorageSync('logs') || [];
            logs.unshift(Date.now());
            global.mpvue.setStorageSync('logs', logs);
        }
    },
    log: function log() {
        console.log('log at:' + Date.now());
    }
});

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG; });
// 不同系统手机最顶部statusBar高度
var statusBar = {
    android: 24,
    iPhone: 20,
    newModel: 44 //长屏下默认高度

    // 小程序默认导航栏高度
};var navigationBar = {
    default: 44
    // 小程序导航栏配置
};var navBarStyle = {
    appName: '独家记忆',
    background: 'rgba(255,255,255,1)',
    color: '#000',
    textAlign: 'center',
    fontSize: 16
};

var CONFIG = {};

CONFIG.install = function (Vue, options) {
    Vue.prototype.$StatusBar = statusBar;
    Vue.prototype.$NavigationBar = navigationBar;
    Vue.prototype.$NavBarStyle = navBarStyle;
};



/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);

var host = 'localhost';

function request(url, method, data, header) {
    wx.showLoading({
        title: '加载中'
    });
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        wx.request({
            url: host + url,
            method: method,
            data: data,
            header: header || {
                'content-type': 'application/json'
            },
            success: function success(res) {
                wx.hideLoading();
                resolve(res.data);
            },
            fail: function fail(res) {
                wx.hideLoading();
                reject(res);
            },
            complete: function complete() {
                wx.hideLoading();
            }
        });
    });
}

function get(obj) {
    return request(obj.url, 'GET', obj.data, obj.header);
}

function post(obj) {
    return request(obj.url, 'POST', obj.data, obj.header);
}

/* harmony default export */ __webpack_exports__["a"] = ({
    request: request,
    get: get,
    post: post
});

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GUID; });
function GUID() {
    this.date = new Date(); /* 判断是否初始化过，如果初始化过以下代码，则以下代码将不再执行，实际中只执行一次 */
    if (typeof this.newGUID !== 'function') {
        /* 生成GUID码 */
        GUID.prototype.newGUID = function () {
            this.date = new Date();
            var guidStr = '';
            var sexadecimalDate = this.hexadecimal(this.getGUIDDate(), 16);
            var sexadecimalTime = this.hexadecimal(this.getGUIDTime(), 16);
            for (var i = 0; i < 9; i++) {
                guidStr += Math.floor(Math.random() * 16).toString(16);
            }
            guidStr += sexadecimalDate;
            guidStr += sexadecimalTime;
            while (guidStr.length < 32) {
                guidStr += Math.floor(Math.random() * 16).toString(16);
            }
            return this.formatGUID(guidStr);
        };
        /* * 功能：获取当前日期的GUID格式，即8位数的日期：19700101 * 返回值：返回GUID日期格式的字条串 */
        GUID.prototype.getGUIDDate = function () {
            return this.date.getFullYear() + this.addZero(this.date.getMonth() + 1) + this.addZero(this.date.getDay());
        };
        /* * 功能：获取当前时间的GUID格式，即8位数的时间，包括毫秒，毫秒为2位数：12300933 * 返回值：返回GUID日期格式的字条串 */
        GUID.prototype.getGUIDTime = function () {
            return this.addZero(this.date.getHours()) + this.addZero(this.date.getMinutes()) + this.addZero(this.date.getSeconds()) + this.addZero(parseInt(this.date.getMilliseconds() / 10));
        };
        /* * 功能: 为一位数的正整数前面添加0，如果是可以转成非NaN数字的字符串也可以实现 * 参数: 参数表示准备再前面添加0的数字或可以转换成数字的字符串 * 返回值: 如果符合条件，返回添加0后的字条串类型，否则返回自身的字符串 */
        GUID.prototype.addZero = function (num) {
            if (Number(num).toString() !== 'NaN' && num >= 0 && num < 10) {
                return '0' + Math.floor(num);
            } else {
                return num.toString();
            }
        };
        /*  * 功能：将y进制的数值，转换为x进制的数值 * 参数：第1个参数表示欲转换的数值；第2个参数表示欲转换的进制；第3个参数可选，表示当前的进制数，如不写则为10 * 返回值：返回转换后的字符串 */GUID.prototype.hexadecimal = function (num, x, y) {
            if (y !== undefined) {
                return parseInt(num.toString(), y).toString(x);
            } else {
                return parseInt(num.toString()).toString(x);
            }
        };
        /* * 功能：格式化32位的字符串为GUID模式的字符串 * 参数：第1个参数表示32位的字符串 * 返回值：标准GUID格式的字符串 */
        GUID.prototype.formatGUID = function (guidStr) {
            var str1 = guidStr.slice(0, 8) + '-',
                str2 = guidStr.slice(8, 12) + '-',
                str3 = guidStr.slice(12, 16) + '-',
                str4 = guidStr.slice(16, 20) + '-',
                str5 = guidStr.slice(20);
            return str1 + str2 + str3 + str4 + str5;
        };
    }
}



/***/ })

},[42]);