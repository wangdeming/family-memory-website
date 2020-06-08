import Vue from 'vue'
import App from './App'
import {CONFIG} from './config'
import wxRequest from './utils/wxRequest.js'
import {GUID} from '@/assets/js/guid.js'
import {CONSTANTS} from '@/assets/js/constants.js'

Vue.use(CONFIG)
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$http = wxRequest
Vue.prototype.$CONSTANTS = CONSTANTS

const app = new Vue(App)
app.$mount()

// 设置常量
getApp().Editindex = 0 //编辑草稿、我的文章索引值
getApp().articeData = [] //我的文章
getApp().articedraftData = [] //草稿
getApp().from = '' //来源
getApp().articeTitle = '' //标题
getApp().articeParts = [] //文章段落
getApp().deleteData = [] //删除的段落id数组
getApp().editArticleId = '' //编辑文章id
getApp().prevPageRoute = '' //路径
getApp().tabBarAnimate = false
getApp().authorizeState = false //用户授权状态
getApp().userInfo = {} //微信用户信息（授权后）
getApp().guid = '' //该客户端的guid
getApp().phoneBound = false //该用户是否绑定手机号
getApp().currentFamily = '' //当前查看的家庭
getApp().systemInfo = {} //手机系统信息
getApp().selectedMemberIdList = [] // 创建家庭时选择的家庭人员ID列表
getApp().loginState = {
    //登录状态
    casToken: '',
    cookie: {
        cas_sid: '',
        fm_sid: ''
    }
}

getApp().SetState = {
    //文章设置
    category: '',
    Whosee: '',
    Whocomment: '',
    family: ''
}

wx.getSystemInfo({
    success: function(res) {
        getApp().systemInfo.brand = res.brand //手机品牌
        getApp().systemInfo.model = res.model //手机型号
        getApp().systemInfo.pixelRatio = res.pixelRatio //手机型号
        getApp().systemInfo.system = res.system //手机系统版本
        getApp().systemInfo.version = res.version //手机微信版本
        getApp().systemInfo.platform = res.platform //手机客户端平台
        getApp().systemInfo.benchmarkLevel = res.benchmarkLevel //手机客户端平台
        getApp().systemInfo.screenWidth = res.screenWidth //手机屏幕宽度
        getApp().systemInfo.screenHeight = res.screenHeight //手机屏幕高度
    },
    fail: function(res) {
        console.log(res)
    }
})

// 获取客户端guid
wx.getStorage({
    key: 'guid',
    // 已经有guid
    success: (res) => {
        getApp().guid = res.data
    },
    fail: (res) => {
        // 没有guid时生成一个guid并保持在storage
        let guid = new GUID()
        getApp().guid = guid.newGUID()
        wx.setStorage({
            key: 'guid',
            data: getApp().guid
        })
    }
})

wx.getStorage({
    key: 'fm_sid',
    success: (res) => {
        getApp().loginState.cookie.fm_sid = res.data
    }
})
wx.getStorage({
    key: 'cas_sid',
    success: (res) => {
        getApp().loginState.cookie.cas_sid = res.data
    }
})

wx.getUserInfo({
    //通过授权获取encryptedData，iv等信息
    withCredentials: true,
    success: (res) => {
        let userInfo = res.userInfo
        getApp().userInfo.name = userInfo.nickName
        getApp().userInfo.avatarUrl = userInfo.avatarUrl
        getApp().userInfo.gender = userInfo.gender //性别 0：未知、1：男、2：女
        getApp().userInfo.province = userInfo.province
        getApp().userInfo.city = userInfo.city
        getApp().userInfo.country = userInfo.country
        getApp().userInfo.encryptedData = res.encryptedData
        getApp().userInfo.wxInitialVector = res.iv
        getApp().authorizeState = true
    },
    fail: (err) => {
        getApp().authorizeState = false
        console.log(err, '用户未授权')
    }
})
