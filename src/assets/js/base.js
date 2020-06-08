// 正则验证类
const checkFormat = {
    /**
     * @des：android终端
     * @return {Boolean}
     */

    isAndroid: function() {
        return (
            navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1
        )
    },
    /**
     * @des：ios终端
     * @return {Boolean}
     */
    isIOS: function() {
        return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    },
    /**
     * @des：手机正则验证
     * @param {Number} phoneNum 手机号码
     * @return {Boolean}
     */
    isMobilePhone: function(phoneNum) {
        return /^1[3456789]\d{9}$/.test(phoneNum)
    },
    /**
     * @des：邮箱验证
     * @param {String} email 邮箱
     * @return {Boolean}
     */
    isEmail: function(email) {
        var emailRex = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/ //邮箱正则
        return emailRex.test(email)
    },
    /**
     * @des：5-12位QQ验证
     * @param {Number} qq qq号码
     * @return {Boolean}
     */
    isQQ: function(qq) {
        var qqRex = /^[1-9][0-9]{4,11}$/
        return qqRex.test(qq)
    },
    /**
     * @des：2-n位汉字名字验证
     * @param {String} name 汉字
     * @param {Number} n 名字的位数
     * @return {Boolean}
     */
    isCName: function(name, n) {
        n = n === undefined ? 4 : n
        var nameRex = new RegExp('^[\u4e00-\u9fa5]{2,' + n + '}$') //姓名验证
        return nameRex.test(name)
    },
    /**
     * @des：身份证号码验证
     * @param {String | Number} IdNumber 身份证号码
     * @return {Boolean}
     */
    isIdNum: function(IdNumber) {
        var idCardRegex = {
            //18位身份证简单校验
            IDCARD_18_SIMPLE_PATTERN: /^(?:1[1-5]|2[1-3]|3[1-7]|4[1-6]|5[0-4]|6[1-5])\d{4}(?:1[89]|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}(?:\d|[xX])$/,
            //15位身份证简单校验
            IDCARD_15_SIMPLE_PATTERN: /^(?:1[1-5]|2[1-3]|3[1-7]|4[1-6]|5[0-4]|6[1-5])\d{4}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}$/
        }
        return (
            idCardRegex.IDCARD_18_SIMPLE_PATTERN.test(IdNumber) ||
            idCardRegex.IDCARD_15_SIMPLE_PATTERN.test(IdNumber)
        )
    },
    /**
     * @des:  旅游项目后台管理系统 输入空格问题 统一修改
     * @des:  统一院内所有系统，校验字数时，有其他文字+空格的，空格算一个字数；仅空格的情况，就是输入为空，即必填项不能只输入空格。
     * @param {String | Number} str 输入的值
     * @return {String | Number}
     */
    isAllBlankSpace: function(str) {
        //将输入的内容去掉开头和结尾的空格，若长度大于0，则说明不全是空格，若长度为0则全是空格
        var valuestr = str.trim()
        if (valuestr.length <= 0) {
            //全是空格的话，重置成''空值
            return ''
        } else {
            return str
        }
    }
}
//URL,参数类
const urlFormat = {
    /**
     * @des：获取当前URL参数
     * @param {String} name 参数名
     */
    getUrlParam: function(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
        var r = window.location.search.substr(1).match(reg)
        if (r != null) return decodeURI(r[2])
        return null //返回参数值
    },
    /**
     * @des：拼接url
     * @param {Object} params 需拼接的参数对象
     * @param {String} url 需拼接的url
     */
    concatUrl: function(params, url) {
        var urlWith = url.includes('?') ? url : url + '?'
        for (let key of Object.keys(params)) {
            urlWith = urlWith + '&' + key + '=' + params[key]
        }
        return urlWith
    }
}

// 数组工具类
const arrayFormat = {
    /**
     * @des：将类数组转化为数组对象
     * @return {Array}
     */
    toArray: function() {
        return Array.prototype.slice.call(arguments)
    },
    /**
     * @des：判断是否为数组对象
     * @return {Boolean}
     */
    isArray: function(arr) {
        return arr !== undefined && arr.constructor === Array
    },
    /**
     * @des：数组求和
     * @param {array} arr 数组
     * @return
     */
    sum: function(arr) {
        if (!this.isArray(arr)) {
            // eslint-disable-next-line no-use-before-define
            return arr
        }
        if (arr.length === 0) {
            return 0
        }
        var result = arr[0]
        var length = arr.length
        for (var i = 1; i < length; i++) {
            result += arr[i]
        }
        return result
    },
    /**
     * @des：数组是否包含该元素
     * @param {array} arr 数组
     * @param {any} x 元素
     * @return {Boolean}
     */
    contains: function(arr, x) {
        var result = false
        if (!this.isArray(arr)) {
            return result
        }
        var length = arr.length
        if (length === 0) {
            return result
        }
        for (var i = 0; i < length; i++) {
            if (arr[i] === x) {
                return true
            }
        }
        return result
    },
    /**
     * @des：数组打乱
     * @param {array} arr 数组
     * @return {Array}
     */
    shuffle: function(arr) {
        if (!this.isArray(arr)) {
            return arr
        }
        var length = arr.length
        for (var i = 0; i < length; i++) {
            var pos = parseInt((Math.random() * (length - i)).toString())
            var save = arr[i]
            arr[i] = arr[pos]
            arr[pos] = save
        }
        return arr
    },
    /**
     * @des：数组去重
     * @param {array} arr 数组
     * @return {Array}
     */
    unique: function(arr) {
        if (!this.isArray(arr)) {
            return arr
        }
        var u = []
        var length = arr.length
        for (var i = 0; i < length; i++) {
            var o = arr[i]
            if (!this.contains(u, o)) {
                u.push(o)
            }
        }
        return u
    },
    /**
     * @des：数组最小值
     * @param {array} arr 数组
     * @return {Number}
     */
    min: function(arr) {
        var result = 0
        if (!this.isArray(arr)) {
            return result
        }
        var length = arr.length
        if (length === 0) {
            return result
        }
        result = arr[0]
        for (var i = 1; i < length; i++) {
            var o = arr[i]
            if (o < result) {
                result = o
            }
        }
        return result
    },
    /**
     * @des：数组最大值
     * @param {array} arr 数组
     * @return {Number}
     */
    max: function(arr) {
        var result = 0
        if (!this.isArray(arr)) {
            return result
        }
        var length = arr.length
        if (length === 0) {
            return result
        }
        result = arr[0]
        for (var i = 1; i < length; i++) {
            var o = arr[i]
            if (o > result) {
                result = o
            }
        }
        return result
    }
}

var lastTop = 0
// 页面高度类
const scrollFormat = {
    /**
     * @des：设置 或 获取 scrolltop值
     * @param {Number} val (不传表示获取scrollTop值，传表示设置scrollTop值)
     */
    scrollTop: function(val) {
        // 有val 为赋值
        if (val !== null && val !== undefined) {
            setTimeout(function() {
                lastTop = val
                document.body.scrollTop = val
                if (document.documentElement) {
                    document.documentElement.scrollTop = val
                }
            }, 100)
        } else {
            var temp = lastTop
            if (lastTop !== document.body.scrollTop && document.body.scrollTop !== 0) {
                temp = document.body.scrollTop
            } else if (
                window.pageYOffset &&
                lastTop !== window.pageYOffset &&
                window.pageYOffset !== 0
            ) {
                temp = window.pageYOffset
            } else if (
                document.documentElement &&
                lastTop !== document.documentElement.scrollTop &&
                document.documentElement.scrollTop !== 0
            ) {
                temp = document.documentElement.scrollTop
            }
            return temp
        }
    },
    /**
     * @des：滚动条在Y轴上的滚动距离
     * @return {Number}
     */
    getScrollTop: function() {
        var scrollTop = 0,
            bodyScrollTop = 0,
            documentScrollTop = 0
        if (document.body) {
            bodyScrollTop = document.body.scrollTop
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop
        }
        scrollTop = bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop
        return scrollTop
    },
    /**
     * @des：文档的总高度
     * @return {Number}
     */
    getScrollHeight: function() {
        var scrollHeight = 0,
            bodyScrollHeight = 0,
            documentScrollHeight = 0
        if (document.body) {
            bodyScrollHeight = document.body.scrollHeight
        }
        if (document.documentElement) {
            documentScrollHeight = document.documentElement.scrollHeight
        }
        scrollHeight =
            bodyScrollHeight - documentScrollHeight > 0 ? bodyScrollHeight : documentScrollHeight
        return scrollHeight
    },
    /**
     * @des：浏览器视口的高度
     * @return {Number}
     */
    getWindowHeight: function() {
        var windowHeight = 0
        if (document.compatMode === 'CSS1Compat') {
            windowHeight = document.documentElement.clientHeight
        } else {
            windowHeight = document.body.clientHeight
        }
        return windowHeight
    },
    /**
     * @des：是否滚动到底部
     * @return {Boolean}
     */
    isBottom: function(distance) {
        var bottomDistance = distance || 0
        if (
            this.getScrollTop() + this.getWindowHeight() + bottomDistance >=
            this.getScrollHeight()
        ) {
            return true
        } else return false
    }
}

// 字符串处理类
const strFormat = {
    /**
     * 判断字符是否包含某值
     * @param {String} str 字符
     * @param {String} value 字符
     */
    strInclude: function(str, value) {
        return str.includes(value)
    },

    /**
     * 判断字符是否以某个字符开头
     * @param {String} str 字符
     * @param {String} value 字符
     */
    strBeginWith: function(str, value) {
        return str.indexOf(value) === 0
    },

    /**
     * 去掉字符左右空格
     * @param {String} str 字符
     */
    strTrimFormat: function(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '')
    },

    /**
     * 全局替换某个字符为另一个字符
     * @param {String} str 字符
     * @param {String} valueOne 包含的字符
     * @param {String} valueTwo 要替换的字符,选填
     */
    strReplace: function(str, valueOne, valueTwo) {
        return str.replace(new RegExp(valueOne, 'g'), valueTwo)
    },

    /**
     * 将字母全部转化成以大写开头
     * @param {String} str 字符
     */
    strStartToCapital: function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
}

export {checkFormat, urlFormat, arrayFormat, scrollFormat, strFormat}
