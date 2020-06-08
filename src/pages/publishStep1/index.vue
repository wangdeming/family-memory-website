<!--
* @des:  文件说明
* @date: 2020-04-02 09:54:01
* @version:  1.0
* 
* Date                   Author               Description
* ------------------------------------------------------
* 2020-04-02             邓紅麗               接口对接
* 2020-05-13             邓紅麗               修改安卓物理返回键的逻辑
-->
<template>
    <!-- 新增第一步 -->
    <div class="m_publish">
        <div class="inputTitle_mask" v-show="showmask">
            <div
                class="title_box"
                :style="{
                    paddingTop: paddingTop + 'px',
                    height: height + 'px',
                    backgroundColor: background || barStyle.background
                }"
            >
                <div
                    class="goback"
                    @click="goBack()"
                    :style="{
                        height: barStyle.height + 'px',
                        lineHeight: barStyle.height + 'px'
                    }"
                >
                    <image src="/static/tabs/back.svg" style="width: 19px;height: 18px" alt="" />
                </div>
                <div
                    class="name"
                    :style="{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: color || barStyle.color,
                        fontSize: barStyle.fontSize + 'px',
                        lineHeight: barStyle.height + 'px'
                    }"
                    >添加文字</div
                >
            </div>
            <div class="m_write_artice">
                <div class="box">
                    <div class="textarea">
                        <textarea
                            name=""
                            maxlength="5000"
                            :auto-focus="showmask"
                            :show-confirm-bar="false"
                            placeholder="输入内容"
                            v-model="inputStr"
                            @input="bindButtonTap"
                        ></textarea>
                    </div>
                    <div class="handler clearfix">
                        <div class="count fl">
                            <text class="num">{{ inputStrlength }}</text>
                            <text class="num">/</text>
                            <text class="num">5000</text>
                        </div>
                        <div class="btn active fr" @click="done()">完成</div>
                    </div>
                </div>
            </div>
        </div>

        <navigation-bar showBack :title="title" @ISsavedraft="ISsavedraft"></navigation-bar>
        <div class="input_blcok">
            <div class="input_article_title clearfix">
                <div class="container">
                    <input
                        class="input color-333 f36 fl"
                        type="text"
                        placeholder="点击输入标题"
                        placeholder-style="color: #999"
                        maxlength="50"
                        v-model="inputTitle"
                    />
                    <div class="btn active fr" @click="toPreview()">预览</div>
                </div>
            </div>
            <add-part :articeTitle="inputTitle" @showMask="showMask"></add-part>
        </div>
        <bind-phoneNum-tip
            :showModal="showModal"
            @cancelTip="cancelTip"
            @getphonenumber="getphonenumber"
        ></bind-phoneNum-tip>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import AddPart from '@/components/AddPart.vue'
import BindPhoneNumTip from '@/components/BindPhoneNumTip'
import {Article} from '@/api/Article.js'
import {CasLoginApi} from '@/api/CasLogin.js'
import {AppLoginApi} from '@/api/AppLogin.js'
export default {
    data() {
        return {
            title: '图文',
            inputTitle: '', //输入的标题文字
            articleId: '',
            from: '',
            modify: '',
            deleteData: [],
            showmask: false, //文字添加
            showModal: false, // 绑定手机号提示
            time: null,
            paddingTop: this.$StatusBar.android, // 默认为android大部分普通机型高度
            height: this.$NavigationBar.default + this.$StatusBar.android,
            barStyle: {},
            menuSettings: {
                height: 0
            },
            inputStrlength: 0,
            inputStr: '',
            selname: '',
            type: '',
            index: 0, //段落插入的位置
            nickName: ''
        }
    },
    created() {
        const systemInfo = wx.getSystemInfoSync()
        if (this.menuSettings.height === 0) {
            this.getMenuSettings(1, 3)
        }
        const ratio = systemInfo.screenHeight / systemInfo.screenWidth // 高宽比例
        const isNewModel = ratio >= 2
        const isIPhone = systemInfo.model.indexOf('iPhone') >= 0
        const barHeight =
            systemInfo.statusBarHeight ||
            (isNewModel
                ? this.$StatusBar.newModel
                : isIPhone
                ? this.$StatusBar.iPhone
                : this.$StatusBar.android)
        this.paddingTop = barHeight
        this.height = barHeight + this.$NavigationBar.default
        let barStyle = {...this.$NavBarStyle}
        barStyle.height = this.$NavigationBar.default
        this.barStyle = barStyle
    },
    computed: {
        //文章标题，用户没有输入标题，默认为 用户名 + 的 + 记忆
        articeTitle() {
            return this.inputTitle ? this.inputTitle : this.nickName + '的记忆'
        }
    },
    components: {
        'navigation-bar': NavigationBar,
        'bind-phoneNum-tip': BindPhoneNumTip,
        'add-part': AddPart
    },
    onLoad(options) {
        // 获取小程序用户的信息（昵称，签名等）
        AppLoginApi.getAppUserInfo().then((r) => {
            getApp().phoneBound = r.data.phoneBound
            getApp().userInfo.displayId = r.data.displayId
            getApp().userInfo.name = r.data.name
            getApp().userInfo.avatarUrl = r.data.avatarUrl
            getApp().userInfo.signature = r.data.signature
            this.nickName = r.data.name
        })
        console.log(options)
        if (JSON.stringify(options) !== '{}') {
            this.from = options.from
            this.articleId = options.id
            this.modify = options.modify
            this.type = options.type
            if (this.from === 'Editarticle' || 'Editdetails') {
                this.inputTitle = decodeURIComponent(options.title)
                getApp().editArticleId = options.id
                this.Refreshlock()
                this.time = setInterval(() => {
                    this.Refreshlock()
                }, 120000)
            } else if (this.from === 'draftBox') {
                this.inputTitle = decodeURIComponent(options.title)
                getApp().editArticleId = options.id
            }
            getApp().from = options.from
        } else {
            this.inputTitle = getApp().articeTitle
            this.from = ''
            this.articleId = ''
        }
    },
    onShow() {
        /* eslint-disable */
        let pages = getCurrentPages()
        getApp().prevPageRoute = pages[pages.length - 1].__displayReporter.showReferpagepath
    },
    methods: {
        goBack() {
            this.showmask = false
            this.inputStr = ''
            this.inputStrlength = 0
        },
        showMask(name, index) {
            this.selname = name
            this.index = Number(index)
            this.showmask = true
            if (getApp().articeParts.length !== 0) {
                if (this.selname === 'input') {
                    var currentWordDes = getApp().articeParts[index].text
                    this.inputStr = currentWordDes
                    this.inputStrlength = currentWordDes.length
                } else {
                    this.inputStr = ''
                    this.inputStrlength = 0
                }
            }
        },
        bindButtonTap() {
            this.inputStrlength = this.inputStr.length
        },
        done() {
            this.showmask = false
            let item = {}
            if (this.selname === 'button') {
                item.resourceUrl = null
                item.text = this.inputStr
                item.showShareBtn = false
                // 添加段落类型 段落类型1文本2图片3音频4视频
                item.sectionType = 1
                if (this.index === -1) {
                    getApp().articeParts.splice(0, 0, item)
                } else {
                    getApp().articeParts.splice(this.index + 1, 0, item) //新增
                }
            } else if (this.selname === 'input') {
                let sectionType = getApp().articeParts[this.index].sectionType
                if (this.inputStr === '' && sectionType === 1) {
                    //描述为空且类型为文字，便删除数组
                    getApp().articeParts.splice(this.index, 1)
                } else {
                    this.$set(getApp().articeParts[this.index], 'text', this.inputStr) //更换文章数组中某个图片
                }
            }
        },
        ISsavedraft(name) {
            if (name === '图文' && getApp().articeParts.length === 0) {
                console.log(this.from)
                if (this.from === 'Editarticle' || this.from === 'draftBox') {
                    wx.showToast({
                        title: '至少添加一个段落内容',
                        icon: 'none',
                        duration: 3000
                    })
                } else {
                    wx.navigateBack({
                        delta: 1
                    })
                }
            } else {
                if (!this.checkContent(getApp().articeParts)) {
                    wx.showToast({
                        title: '段落内容不能为空',
                        icon: 'none',
                        duration: 3000
                    })
                    return
                }
                wx.navigateBack({
                    delta: 1
                })
            }
        },
        getMenuSettings(current, count) {
            // let menuSettings = wx.getMenuButtonBoundingClientRect()
            let menuSettings
            try {
                menuSettings = wx.getMenuButtonBoundingClientRect
                    ? wx.getMenuButtonBoundingClientRect()
                    : null
                if (!menuSettings) {
                    throw new Error('getMenuButtonBoundingClientRect error')
                }
            } catch (err) {
                // 赋默认数值
            }
            if (menuSettings.height === 0) {
                if (current > 3) {
                    return
                }
                setTimeout(() => {
                    this.getMenuSettings(current + 1, count)
                }, 200)
            } else {
                this.menuSettings = menuSettings
            }
        },
        // 取消绑定手机号
        cancelTip() {
            this.showModal = !this.showModal
        },
        // 确定绑定手机号
        getphonenumber(e) {
            this.showModal = !this.showModal
            if (e.mp.detail.encryptedData) {
                CasLoginApi.UpdateCasUserInfo(
                    {
                        wxInitialVector: e.mp.detail.iv,
                        wxEncryptedData: e.mp.detail.encryptedData
                    },
                    {
                        'Content-Type': 'application/json',
                        Cookie: 'cas_sid=' + getApp().loginState.cookie.cas_sid
                    }
                ).then((res) => {
                    if (res.statusCode === 200) {
                        getApp().phoneBound = true
                        wx.showToast({
                            title: '绑定手机号成功！',
                            icon: 'none'
                        })
                    } else if (res.statusCode === 500) {
                        //绑定手机号失败可能是 session_key 过期要重新获取登录态
                        let self = this
                        wx.login({
                            success(q) {
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
                                                console.log('小程序登录成功')
                                            } else {
                                                console.log('小程序登录失败')
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    } else {
                        wx.showToast({
                            title: '绑定手机号失败',
                            icon: 'none'
                        })
                    }
                })
            } else {
                wx.showToast({
                    title: '取消授权绑定手机号' + e.mp.detail.errMsg,
                    icon: 'none'
                })
            }
        },
        // 判断内容为空
        checkContent(arr) {
            let length = arr.length
            if (length > 0) {
                let filterArr = arr.filter((e) => {
                    return e.sectionType === 1 && e.text === ''
                })
                return filterArr.length !== length
            } else {
                return false
            }
        },
        toPreview() {
            var length = getApp().articeParts.length
            if (!getApp().phoneBound) {
                this.showModal = true
            } else {
                if (!this.checkContent(getApp().articeParts)) {
                    wx.showToast({
                        title: '至少添加一个段落内容才能预览',
                        icon: 'none',
                        duration: 3000
                    })
                } else {
                    this.inputStr = ''
                    this.inputStrlength = 0
                    clearInterval(this.time)
                    //跳转到预览页面
                    if (this.from === 'Editarticle') {
                        wx.navigateTo({
                            url:
                                '/pages/preview/main?from=Editarticle&id=' +
                                this.articleId +
                                '&title=' +
                                encodeURIComponent(this.articeTitle)
                        })
                    } else if (this.from === 'draftBox') {
                        wx.navigateTo({
                            url:
                                '/pages/preview/main?from=draftBox&id=' +
                                this.articleId +
                                '&title=' +
                                encodeURIComponent(this.articeTitle)
                        })
                    } else {
                        wx.navigateTo({
                            url: '/pages/preview/main?title=' + encodeURIComponent(this.articeTitle)
                        })
                    }
                }
            }
        },
        // 编辑时候，刷新文章同步锁
        Refreshlock() {
            Article.Refreshlock('', this.articleId).then((res) => {})
        }
    },
    onHide() {},
    onUnload: function() {
        //清除计时器  即清除setInter
        clearInterval(this.time)
        if (getApp().editArticleId) {
            Article.Removelock('', getApp().editArticleId).then((res) => {})
            getApp().editArticleId = ''
        }
        if (this.modify === 'detailedit') {
            wx.switchTab({
                url: '/pages/mine/main'
            })
        }
        // console.log(this.articleId)
        // console.log(getApp().from)
        // console.log(this.type)
        // console.log(this.articeTitle)
        // console.log(getApp().articeParts)
        // console.log(getApp().deleteData)
        getApp().articeTitle = this.inputTitle
        if (getApp().articeParts.length !== 0) {
            if (this.articleId) {
                wx.showModal({
                    title: '',
                    content: '是否保存当前修改？',
                    confirmText: '是',
                    cancelText: '否',
                    success: (res) => {
                        if (res.confirm) {
                            var editparams = {
                                title: this.articeTitle, //文章标题
                                id: this.articleId,
                                sectionList: getApp().articeParts, //段落列表
                                deleteSectionIdList: getApp().deleteData
                            }
                            Article.Editarticles(editparams).then((res) => {
                                if (res.statusCode === 200) {
                                    if (getApp().articeTitle) {
                                        if (getApp().from === 'Editarticle') {
                                            if (this.type === 'minefamily') {
                                            } else {
                                                this.$set(
                                                    getApp().articeData[getApp().Editindex],
                                                    'title',
                                                    getApp().articeTitle
                                                ) //更换文章数组中title
                                            }
                                        } else if (getApp().from === 'draftBox') {
                                            this.$set(
                                                getApp().articedraftData[getApp().Editindex],
                                                'title',
                                                getApp().articeTitle
                                            ) //更换文章数组中title
                                        }
                                    }
                                    getApp().articeParts = []
                                    getApp().articeData = []
                                    getApp().articedraftData = []
                                    getApp().editArticleId = ''
                                    getApp().articeTitle = ''
                                    getApp().from = ''
                                    getApp().editArticleId = ''
                                }
                            })
                        } else if (res.cancel) {
                            getApp().articeParts = []
                            getApp().articeData = []
                            getApp().articedraftData = []
                            getApp().editArticleId = ''
                            getApp().articeTitle = ''
                            getApp().from = ''
                            getApp().editArticleId = ''
                        }
                        this.inputStr = ''
                        this.inputStrlength = 0
                        this.showmask = false
                        getApp().deleteData.splice(0, getApp().deleteData.length)
                    }
                })
            } else {
                wx.showModal({
                    title: '',
                    content: '直接返回，当前编辑的内容将不会被保存。',
                    confirmText: '暂存草稿',
                    cancelText: '直接返回',
                    success: (res) => {
                        if (res.confirm) {
                            var params = {
                                status: 1, //第一次存草稿状态值
                                title: this.articeTitle, //文章标题
                                sectionList: getApp().articeParts //段落列表
                            }
                            Article.Addarticles(params).then((res) => {
                                if (res.statusCode === 200) {
                                    wx.redirectTo({
                                        url: '/pages/draftBox/main'
                                    })
                                    getApp().articeParts.splice(0, getApp().articeParts.length)
                                    getApp().articeTitle = ''
                                    getApp().from = ''
                                    this.inputStr = ''
                                    this.showmask = false
                                    this.inputStrlength = 0
                                }
                            })
                        } else if (res.cancel) {
                            getApp().articeParts.splice(0, getApp().articeParts.length)
                            getApp().articeTitle = ''
                            getApp().from = ''
                            this.showmask = false
                            this.inputStr = ''
                            this.inputStrlength = 0
                        }
                    }
                })
            }
        } else {
            this.showmask = false
            this.inputStr = ''
            this.inputStrlength = 0
        }
    }
}
</script>
