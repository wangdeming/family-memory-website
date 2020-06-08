<!--
* @des:  登录页
* @date: 2020-04-17 13:29:49
* @version:  1.0
*
* Date                   Author               Description
* ------------------------------------------------------
* 2020-04-17             曹天笑               创建
-->
<template>
    <!-- 登录页 -->
    <div class="mine">
        <div class="login_back" @click="back()">
            <image src="/static/tabs/back.svg" />
        </div>
        <div class="m_login">
            <image class="login_bg" mode="aspectFill" src="/static/images/login_pic.svg" />
            <div class="box">
                <div class="logo">
                    <image mode="aspectFill" src="/static/images/login_logo.svg" />
                    <p class="logo_word">家庭美好随时记</p>
                </div>
                <div class="login_btn_box">
                    <button
                        v-if="!authorizeState"
                        open-type="getUserInfo"
                        @getuserinfo="getuserinfo"
                        class="btn"
                    >
                        <span class="icon icon_wx">微信登录</span>
                    </button>
                    <div class="btn" @click="login" v-else>
                        <span class="icon icon_wx">微信登录</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {CasLoginApi} from '@/api/CasLogin.js'
import {AppLoginApi} from '@/api/AppLogin.js'
// import {UserApi} from '@/api/User.js'
export default {
    data() {
        return {
            authorizeState: false, //用户是否授权
            route: '',
            prePage: '' //上一个页面
        }
    },
    components: {},

    onShow() {
        /* eslint-disable */
        let pages = getCurrentPages()
        this.prePage = pages[pages.length - 1].__displayReporter.showReferpagepath
        let query = ''
        for (let key in pages[pages.length - 2].options) {
            query = key + '=' + pages[pages.length - 2].options[key] + '&'
        }
        this.route = query
            ? pages[pages.length - 2].route + '?' + query
            : pages[pages.length - 2].route
    },
    onLoad() {
        this.authorizeState = getApp().authorizeState
    },

    methods: {
        getuserinfo(res) {
            if (res.mp.detail.userInfo) {
                //允许授权
                getApp().authorizeState = true
                getApp().userInfo.name = res.mp.detail.userInfo.nickName
                getApp().userInfo.avatarUrl = res.mp.detail.userInfo.avatarUrl
                this.login()
            } else {
                //拒绝授权
                getApp().authorizeState = false
                wx.showToast({
                    title: '授权失败',
                    icon: 'none'
                })
            }
        },
        back() {
            if (
                this.prePage === 'pages/index/main.html' ||
                this.prePage === 'pages/mine/main.html' ||
                this.prePage === 'pages/publish/main.html'
            ) {
                wx.switchTab({
                    url: '/pages/index/main'
                })
            } else {
                wx.redirectTo({
                    url: '/' + this.route
                })
            }
        },
        login() {
            let self = this
            wx.login({
                success(q) {
                    console.log(q)
                    CasLoginApi.LoginCasWithCode({
                        //通过code在认证中心登录，获取casToken和cas_sid
                        authMethod: 2, //认证方式：1（用户名+密码认证）, 2（微信小程序code认证）
                        wechatCode: q.code
                    }).then((k) => {
                        if (k.statusCode === 200 && k.data) {
                            getApp().loginState.casToken = k.data.casToken
                            getApp().loginState.fresh = k.data.fresh
                            let casSid = self.getCookie('cas_sid', k.cookies[0])
                            wx.setStorage({
                                key: 'cas_sid',
                                data: casSid
                            })
                            getApp().loginState.cookie.cas_sid = casSid
                            AppLoginApi.addAppCookie({
                                //使用casToken在小程序端登录，设置小程序端cookie
                                casToken: k.data.casToken
                            }).then((t) => {
                                if (t.statusCode === 200 && t.cookies.length > 0) {
                                    let fmSid = self.getCookie('fm_sid', t.cookies[0])
                                    wx.setStorage({
                                        key: 'fm_sid',
                                        data: fmSid
                                    })
                                    getApp().phoneBound = t.data.phoneBound
                                    getApp().userInfo.displayId = t.data.displayId
                                    getApp().loginState.cookie.fm_sid = fmSid
                                    if (k.data.fresh) {
                                        //新人的话，更新用户认证中心信息
                                        AppLoginApi.upDatedAppUserInfo(
                                            {
                                                name: getApp().userInfo.name,
                                                avatarUrl: getApp().userInfo.avatarUrl,
                                                signature: ''
                                            },
                                            getApp().userInfo.displayId
                                        ).then((v) => {
                                            if (v.statusCode === 200) {
                                                console.log('更新小程序用户信息成功')
                                            } else {
                                                console.log('更新小程序用户信息失败')
                                            }
                                        })
                                    }

                                    // 获取小程序用户的信息（昵称，签名等）
                                    AppLoginApi.getAppUserInfo().then((r) => {
                                        if (r.statusCode === 200 && r.data) {
                                            getApp().phoneBound = r.data.phoneBound
                                            getApp().userInfo.displayId = r.data.displayId
                                            getApp().userInfo.name = r.data.name
                                            getApp().userInfo.avatarUrl = r.data.avatarUrl
                                            getApp().userInfo.signature = r.data.signature
                                        } else {
                                            //用户信息获取失败
                                        }
                                    })
                                    console.log('小程序登录成功')

                                    if (
                                        self.route === 'pages/index/main' ||
                                        self.route === 'pages/mine/main' ||
                                        self.route === 'pages/publish/main'
                                    ) {
                                        wx.switchTab({
                                            url: '/' + self.route
                                        })
                                    } else {
                                        wx.redirectTo({
                                            url: '/' + self.route
                                        })
                                    }
                                } else {
                                    console.log('小程序登录失败')
                                }
                            })
                        }
                    })
                }
            })
        },
        getCookie(cname, str) {
            let name = cname + '='
            let ca = str.split(';')
            return ca[0].substring(name.length, ca[0].length)
        }
    }
}
</script>

<style lang="less">
.login_back {
    width: 40px;
    height: 40px;
    position: fixed;
    left: 15px;
    top: 22px;
    z-index: 10;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    image {
        width: 18px;
        height: 17px;
    }
}
</style>
