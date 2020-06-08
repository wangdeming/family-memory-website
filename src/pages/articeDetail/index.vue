<!--
* @des: 文章详情
* @date: 2020-03-03 09:25:10
* @version:  1.0
*
* Date                   Author               Description
* ------------------------------------------------------
* 2020-03-03             曹天笑               创建
* 2020-03-20             曹天笑               添加文件描述
* 2020-04-02             邓紅麗               展示模板及接口对接
* 2020-04-17             曹天笑               分享功能
* 2020-05-06             曹天笑               修改音乐播放逻辑
* 2020-05-18             曹天笑               修复苹果手机滚动的问题
-->
<template>
    <!-- 文章详情 @click="allPageClick" -->
    <div class="m_artice_detail">
        <navigation-bar showBack title="详情"></navigation-bar>
        <div
            class="content_box"
            :style="{backgroundColor: details.textbgcolor, color: details.articlefontcolor}"
        >
            <scroll-view
                class="scroll-view"
                @click.stop="closeAll"
                scroll-y
                :style="{height: padHeight + ';padding-top:' + navBarHeight + 'px;font-family: templateFont'}"
                lower-threshold="100rpx"
                scroll-with-animation
                :scroll-into-view="scrollIntoView"
                :scroll-anchoring="true"
                @scroll="scroll"
                @scrolltolower="_getcommentslist"
            >
                <div class="artice_detail">
                    <div class="container">
                        <div class="musicIcon" v-if="musicId">
                            <div class="player" @click="backmusic" v-if="musicState == 'play'"
                                ><img class="active" src="/static/images/musicplay.svg" alt=""
                            /></div>
                            <div class="player" @click="backmusic" v-if="musicState == 'pause'"
                                ><img src="/static/images/musicstop.svg" alt=""
                            /></div>
                        </div>

                        <div
                            class="defaulttitle p-30"
                            v-if="details.type == 1"
                            :style="{padding: 15 + 'px'}"
                        >
                            <div class="title">{{ title }}</div>
                            <div class="author_line clearfix">
                                <div class="avatar_box fl" @click="toCheckUser(authorDisplayId)">
                                    <image mode="aspectFill" :src="avatarUrl" />
                                </div>
                                <div class="author_detail fl" @click="toCheckUser(authorDisplayId)">
                                    <div class="author_name">{{ authorName }}</div>
                                    <div class="author_time">{{ currentdate }}</div>
                                </div>
                                <!-- 授权情况下可以点击关注 -->
                                <div>
                                    <div
                                        v-if="ISfollow"
                                        class="forkBtn active"
                                        @click="statusBtnClick()"
                                    >
                                        <div class="icon">
                                            <span class="icon iconfont f20">&#xe604;</span>
                                        </div>
                                        <div class="word">关注</div>
                                    </div>
                                    <div
                                        v-else-if="followButton != 4"
                                        class="forkBtn"
                                        @click="statusBtnClick()"
                                    >
                                        <div class="icon">
                                            <span class="icon iconfont f20">&#xe603;</span>
                                        </div>
                                        <div class="word">已关注</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="templatetitle" v-if="details.type == 2">
                            <div class="bgimg">
                                <img :src="bgimg" alt="" />
                            </div>
                            <div
                                class="author_line clearfix text-center"
                                :style="'color:' + details.articlefontcolor"
                            >
                                <div class="avatar_box" @click="toCheckUser(authorDisplayId)">
                                    <image mode="aspectFill" :src="avatarUrl" />
                                </div>
                                <div class="author_name" @click="toCheckUser(authorDisplayId)"
                                    >{{ authorName }}
                                </div>
                                <!-- 授权情况下可以点击关注 -->
                                <div>
                                    <div
                                        v-if="ISfollow"
                                        class="forkBtn active"
                                        @click="statusBtnClick(authorDisplayId)"
                                        :style="{
                                            backgroundColor: details.noFollowed.bgcolor,
                                            color: details.noFollowed.fontcolor,
                                            borderColor: details.noFollowed.fontcolor
                                        }"
                                    >
                                        <div class="icon">
                                            <span class=" iconfont f20">&#xe604;</span>
                                        </div>
                                        <div class="word">关注</div>
                                    </div>
                                    <div
                                        v-else-if="followButton != 4"
                                        class="forkBtn"
                                        @click="statusBtnClick(authorDisplayId)"
                                        :style="{
                                            backgroundColor: details.Followed.bgcolor,
                                            color: details.Followed.fontcolor,
                                            borderColor: details.Followed.bgcolor
                                        }"
                                    >
                                        <div>
                                            <span class="iconfont f20">&#xe603;</span>
                                        </div>
                                        <div class="word">已关注</div>
                                    </div>
                                </div>

                                <div class="title">{{ title }}</div>
                                <div class="author_time">{{ currentdate }}</div>
                            </div>
                        </div>
                        <!-- 文章详情页 段落类型 1 文本，2 图片，3 音频，4 视频 :style="{height: height}"
                    compositionType:1 //字上图下 2字下图上 -->
                        <div class="artice_main" :style="readAll ? 'height:1500px' : ''">
                            <div v-for="(item, index) in parts" :key="index">
                                <div v-if="item.sectionType == 1 || item.sectionType == 2">
                                    <div
                                        v-if="compositionType == 1"
                                        class="word"
                                        :style="'color:' + details.articlefontcolor"
                                    >
                                        <text>{{ item.text }}</text>
                                    </div>
                                    <div class="media img" v-if="item.resourceUrl != null">
                                        <image mode="widthFix" :src="item.resourceUrl" />
                                    </div>
                                    <div
                                        v-if="compositionType == 2"
                                        class="word"
                                        :style="'color:' + details.articlefontcolor"
                                    >
                                        <text>{{ item.text }}</text>
                                    </div>
                                </div>
                                <div v-if="item.sectionType == 4">
                                    <div
                                        v-if="compositionType == 1"
                                        class="word"
                                        :style="'color:' + details.articlefontcolor"
                                    >
                                        <text>{{ item.text }}</text>
                                        <!-- {{ item.text }} -->
                                    </div>
                                    <div class="media video">
                                        <video
                                            id="myVideo"
                                            :controls="videoSetting.controls"
                                            :show-fullscreen-btn="videoSetting.showFullscreenBtn"
                                            :show-center-play-btn="videoSetting.showCenterPlayBtn"
                                            :show-play-btn="videoSetting.showPlayBtn"
                                            :object-fit="videoSetting.objectFit"
                                            :show-progress="videoSetting.showProgress"
                                            :enable-play-gesture="videoSetting.enablePlayGesture"
                                            :src="item.resourceUrl"
                                        ></video>
                                    </div>

                                    <div
                                        v-if="compositionType == 2"
                                        class="word"
                                        :style="'color:' + details.articlefontcolor"
                                    >
                                        <text>{{ item.text }}</text>
                                    </div>
                                </div>
                            </div>
                            <!-- 展开阅读全文 -->
                            <div
                                v-if="readAll"
                                class="read_all"
                                @click="readAllClick()"
                                :style="'background-image: linear-gradient(' + linearGradient + ')'"
                            >
                                <div class="handler_block">
                                    <p class="tip">展开阅读全文</p>
                                    <span
                                        class="icon iconfont icon_down"
                                        :style="'color:' + details.articlefontcolor"
                                        >&#xe607;</span
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="artice_data clearfix">
                            <div class="data fl clearfix">
                                <div class="read_num fl"
                                    >阅读<text class="num">{{ readCount }}</text></div
                                >
                                <div class="dz_num fl">
                                    <span
                                        class="icon iconfont f36"
                                        :style="'color:' + details.articlefontcolor"
                                        >&#xe608;</span
                                    >
                                    <text class="num">{{ likeCount }}</text>
                                </div>
                            </div>
                            <div v-if="!ISReport">
                                <div>
                                    <div class="artice_complain fr" @click="toComplain">举报</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="comment_detail"
                    id="commentContent"
                    :style="'border-top:1px solid ' + details.linecolor"
                >
                    <div class="container" style="padding:0">
                        <div class="comment_top clearfix px-30">
                            <div class="word fl">全部评论({{ commentCount }})</div>
                            <div
                                v-if="commentablityType != 3"
                                @click.stop="commentArticle()"
                                class="icon fr"
                                :style="'color:' + details.themecolor"
                                ><span class="icon iconfont iconcomnent mr-10">&#xe609;</span
                                >评论</div
                            >
                        </div>
                        <div class="comment_list">
                            <div
                                class="comment_item"
                                v-for="(item, index) in commentsList"
                                :style="'border-color:' + details.linecolor"
                                :key="index"
                            >
                                <div class="avatar">
                                    <image mode="aspectFill" :src="item.userAvatarUrl" />
                                </div>
                                <div class="comment">
                                    <p class="user_name">{{ item.userName }}</p>
                                    <div
                                        @click.stop="commentClick(item.isSelfData, item.id)"
                                        class="comment_word"
                                    >
                                        <p>{{ item.commentContent }}</p>
                                    </div>
                                    <div
                                        class="comment_reply clearfix"
                                        :style="'color:' + details.articlefontcolor"
                                    >
                                        <div class="time fl">{{ item.createTime }}</div>
                                        <span
                                            v-if="commentablityType != 3"
                                            class="icon iconfont iconreply fr"
                                            @click.stop="replyArticle(item.id)"
                                            >&#xe60a;</span
                                        >
                                    </div>
                                </div>
                                <!-- 回复 -->
                                <div
                                    v-if="item.commentReplyPageModel.data.length > 0"
                                    :style="'border-top: 1px solid ' + details.linecolor"
                                >
                                    <div
                                        class="reply_list"
                                        v-for="(item1, index1) in item.commentReplyPageModel.data"
                                        :key="index1"
                                    >
                                        <div class="reply_item">
                                            <span class="name">{{ item1.userName }}:</span>
                                            <span
                                                class="reply_content"
                                                @click.stop="replyClick(item1.isSelfData, item1.id)"
                                                >{{ item1.replyContent }}</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="no-more py-30" style="padding-bottom: 40px;" v-if="noMore"
                        >没有更多了</p
                    >
                </div>
            </scroll-view>
            <!-- 底部操作栏 -->
            <div
                v-if="!selfArticle"
                class="artice_handler clearfix"
                :class="isNewModel ? 'newModel' : ''"
            >
                <!-- 授权情况 -->
                <div>
                    <div
                        v-if="!ISReport"
                        @click="collectionBtnClick()"
                        class="store_up handler_item bg-fff fl"
                    >
                        <div
                            class="icon icon_store"
                            :class="collectionActive ? 'active' : ''"
                        ></div>
                        <p class="word">收藏</p>
                    </div>
                    <div @click="likeBtnClick()" class="dianzan handler_item bg-fff fl">
                        <div class="icon icon_dz" :class="likeActive ? 'active' : ''"></div>
                        <p class="word"
                            >赞<text class="num">{{ likeCount }}</text></p
                        >
                    </div>
                    <div @click="commentBtnClick()" class="comment handler_item bg-fff fl">
                        <div class="icon icon_comment"></div>
                        <p class="word"
                            >评论<text class="num">{{ commentCount }}</text></p
                        >
                    </div>
                    <div class="handler_right fr clearfix">
                        <!-- 查看直接的文章 -->
                        <div class="share fl btn" @click.stop="showShare = !showShare">
                            <p class="icon_share">分享</p>
                        </div>
                        <!-- 查看别人的文章 -->
                        <div class="toWrite active fr btn" @click="Writememories">写回忆</div>
                    </div>
                </div>
            </div>
            <div v-else class="artice_handler clearfix" :class="isNewModel ? 'newModel' : ''">
                <div class="dianzan handler_item bg-fff fl" @click="likeBtnClick()">
                    <div class="icon icon_dz" :class="likeActive ? 'active' : ''"></div>
                    <p class="word"
                        >赞<text class="num">{{ likeCount }}</text></p
                    >
                </div>
                <div class="comment handler_item bg-fff fl" @click="commentBtnClick()">
                    <div class="icon icon_comment"></div>
                    <p class="word"
                        >评论<text class="num">{{ commentCount }}</text></p
                    >
                </div>
                <div class="handler_right fr clearfix">
                    <!-- 查看直接的文章 -->
                    <div @click.stop="moreBtnClick" class="icon btn fl icon_more"></div>
                    <div class="share fl btn" @click.stop="showShare = !showShare">
                        <p class="icon_share">分享</p>
                    </div>
                </div>
            </div>
            <div
                class="t_comment"
                v-if="showTextarea"
                style="position: fixed;left: 0;right: 0;"
                :style="{bottom: t_comment_bottom + 'px'}"
            >
                <div class="t_comment_div">
                    <button @click.stop="cancelBtnClick" class="t_button_cancel">取消</button>
                    <button @click.stop="publishBtnClick" class="t_button_publish">发布</button>
                </div>
                <textarea
                    v-model="textareaValue"
                    class="t_textarea"
                    :placeholder="placeholder"
                    maxlength="140"
                    auto-focus
                    :focus="focus"
                    :show-confirm-bar="showConfirmBar"
                    :adjust-position="adjustPosition"
                    :hold-keyboard="holdKeyboard"
                    @focus="focusTextarea"
                    @keyboardheightchange="keyboardheightchange"
                ></textarea>
            </div>
        </div>
        <v-share
            :showShare="showShare"
            :articeTitle="title"
            :avatarUrl="avatarUrl"
            :nickName="authorName"
            :articePicUrl="articeSharePicUrl"
            :scene="articleId"
            @closeShare="closeShare"
        ></v-share>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import Share from '@/components/Share'
import Popover from '@/components/Popover'
import {Article} from '@/api/Article.js'
import {UserApi} from '@/api/User.js'
import {CasLoginApi} from '@/api/CasLogin.js'
import {AppLoginApi} from '@/api/AppLogin.js'
import {escapeThousands} from '@/utils/index'
export default {
    data() {
        return {
            from: '',
            type: '',
            height: '',
            showShare: false,
            readAll: false,
            focus: false,
            showTextarea: false,
            placeholder: '请留下你的感受...',
            showConfirmBar: false,
            adjustPosition: false,
            holdKeyboard: false,
            textareaValue: '',
            t_comment_bottom: 0,
            selfArticle: false,
            currentIndex: 0,
            status: 1,
            firstStatus: 1,
            isNewModel: false, //兼容iphonex
            // articeTitle: '俗语：“没钱不碰三生意，有钱不做三买卖”，创业者值得一看！', //文章标题
            // 视频播放器配置
            videoSetting: {
                controls: true,
                showFullscreenBtn: false,
                showCenterPlayBtn: true,
                showProgress: true,
                enablePlayGesture: true,
                showPlayBtn: true,
                objectFit: 'cover'
            },
            // 详情对接数据产生
            title: '', //标题
            parts: [], //段落列表
            articleId: '', //文章id
            authorName: '', //作者名称
            avatarUrl: '', //作者头像url
            compositionType: '', //图文样式:1 字上图下,2 字下图上
            templateId: '', //模板id
            contentFontId: '', //字体id
            musicId: '', //音乐id
            authorDisplayId: '', //关注用户的displayId
            commentCount: '', //评论数
            likeCount: '', //点赞数
            readCount: '', //阅读数
            followButton: '', //按钮类型1： 关注按钮；2：已关注；3：互相关注；4：无按钮
            commentablityType: '', //可评论类型 1: 所有人可评论，2 ：粉丝可评论，3：不可评论
            currentdate: '', // 获取当前时间
            authorizeState: false, //用户授权状态
            collectionActive: false, //收藏
            likeActive: false, //点赞
            ISReport: false, //举报
            Fontfile: '',
            Musicfiles: '',
            musicState: 'pause', //音乐状态
            //默认模板数据
            bgimg: '',
            details: {},
            ISfollow: true, // 未关注
            // 评论接口对接
            pageNo: 1,
            pageSize: 5,
            commentsList: [],
            noMore: false, //没有更多
            // 回复接口对接
            comOrreply: '',
            commentId: '',
            articeSharePicUrl: '', //分享时候使用的文章图片
            haveHandlerMusic: false, //是否操作过音乐
            scrollIntoView: '', //滚动到锚点
            visitorEditAllowed: false, //是否可以编辑 （家庭文章进入）
            visitorIsAuthor: false, //是否是作者(家庭文章进入)
            navBarHeight: this.$NavBarHeight
        }
    },
    components: {
        'navigation-bar': NavigationBar,
        'v-share': Share,
        'v-popover': Popover
    },
    onShareAppMessage: function(res) {
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log('来自页面内转发按钮')
        } else {
            console.log('来自右上角转发菜单')
        }
        return {
            title: this.title,
            imageUrl: this.articeSharePicUrl,
            path: '/pages/articeDetail/main?id=' + this.articleId + '&isFromShare=isFromShare',
            complete() {
                console.log('ssssssssss')
            }
        }
    },
    created() {
        const systemInfo = wx.getSystemInfoSync()
        const ratio = systemInfo.screenHeight / systemInfo.screenWidth // 高宽比例
        this.isNewModel = ratio >= 2 && systemInfo.model.indexOf('iPhone') >= 0
    },
    computed: {
        commentparams() {
            return {
                pageNo: this.pageNo,
                pageSize: this.pageSize,
                articleId: this.articleId //文章分类id
            }
        },
        linearGradient() {
            let color = this.details.textbgcolor ? this.details.textbgcolor.split(',') : ''
            let str = ''
            let result = ''
            if (color.length > 0) {
                color.pop()
                str = color.join(',') + ','
                result = str + '0) 0,' + str + '0.45) 39%,' + str + '1) 100%'
            }
            return result
        },
        padHeight() {
            return `calc(100vh - ${this.navBarHeight}px)`
        }
    },
    onLoad(options) {
        this.articleId = options.id || options.scene
        this.from = options.from
        this.type = options.type
        console.log(options.type)
        this.visitorIsAuthor = options.visitorIsAuthor ? options.visitorIsAuthor : ''
        this.visitorEditAllowed = options.visitorEditAllowed ? options.visitorEditAllowed : ''
        this.init()
        this._getArticlesDetails() //文章详情
        this._getcommentslist() //评论详情
    },
    onShow() {
        this.musicState = 'pause'
    },
    mounted() {
        // 模仿异步加载数据
    },
    methods: {
        init() {
            this.parts = []
            this.focus = false
            this.showTextarea = false
            this.showShare = false
            this.pageNo = 1
            this.commentsList = []
            this.noMore = false
            this.readAll = false
            this.musicId = ''
            this.musicState = 'pause'
            this.haveHandlerMusic = false
            this.selfArticle = this.from === 'mine'
            this.authorizeState = getApp().authorizeState
            var date = new Date()
            var year = date.getFullYear()
            var month = date.getMonth() + 1
            var strDate = date.getDate()
            this.currentdate = year + '-' + month + '-' + strDate //当前时间
        },
        closeShare() {
            this.showShare = false
        },
        getCookie(cname, str) {
            let name = cname + '='
            let ca = str.split(';')
            return ca[0].substring(name.length, ca[0].length)
        },
        login() {
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
                                    wx.showToast({
                                        title: '登录成功',
                                        icon: 'none'
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
                                } else {
                                    console.log('小程序登录失败')
                                }
                            })
                        }
                    })
                }
            })
        },
        getuserinfo(res) {
            if (res.mp.detail.userInfo) {
                //允许授权
                this.authorizeState = true
                getApp().authorizeState = true
                this.login()
                wx.showToast({
                    title: '授权成功',
                    icon: 'none',
                    duration: 3000
                })
            } else {
                //拒绝授权
                this.authorizeState = false
                getApp().authorizeState = false
                wx.showToast({
                    title: '授权失败',
                    icon: 'none',
                    duration: 3000
                })
            }
        },
        // 跳转到个人资料页
        toCheckUser(id) {
            wx.navigateTo({
                url: '/pages/checkUser/main?displayId=' + id
            })
        },
        // 查询文章详情
        _getArticlesDetails() {
            var params = {
                guId: getApp().guid
            }
            Article.ArticlesDetails(params, this.articleId).then((res) => {
                if (res.statusCode === 200) {
                    this.title = res.data.title //标题

                    let result = res.data.sectionList
                    result = result.map((item) => {
                        if (item.text) {
                            item.text = item.text.replace(/\\n/g, '\n')
                        }
                        return item
                    })

                    this.parts = result //段落列表
                    this.articeSharePicUrl = res.data.coverPictureUrl
                        ? res.data.coverPictureUrl
                        : ''
                    this.authorName = res.data.authorName //作者名称
                    this.avatarUrl = res.data.avatarUrl //作者头像url
                    this.compositionType = res.data.compositionType //图文样式:1 字上图下,2 字下图上
                    this.templateId = res.data.templateId //模板id
                    this._gettemplateDetails(res.data.templateId) //模板详情
                    if (res.data.musicId) {
                        this.musicId = res.data.musicId //音乐id
                        this._getmusicDetails(res.data.musicId) //音乐详情
                    } else {
                        this.musicId = ''
                    }
                    this.contentFontId = res.data.contentFontId //字体id
                    if (this.contentFontId) {
                        this._getfontsDetails(res.data.contentFontId) //字体详情
                    }
                    this.likeCount = escapeThousands(res.data.likeCount) //点赞数
                    this.readCount = escapeThousands(res.data.readCount) //阅读数
                    this.commentablityType = res.data.commentablityType //可评论类型 1: 所有人可评论，2 ：粉丝可评论，3：不可评论
                    this.followButton = res.data.followButton //按钮类型1： 关注按钮；2：已关注；3：互相关注；4：无按钮
                    this.ISReport = this.followButton === 4 //判断是否是自己写的文章，是否展示举报
                    this.ISfollow = this.followButton === 1 //ISfollow: true, // 未关注
                    this.authorDisplayId = res.data.authorDisplayId //被关注用户的displayId
                    this.likeActive = res.data.isThumbed //是否点赞
                    this.collectionActive = res.data.isCollected //是否收藏
                    setTimeout(() => {
                        //选择id
                        var query = wx.createSelectorQuery()
                        var _self = this
                        query
                            .select('.artice_main')
                            .boundingClientRect(function(rect) {
                                let h = rect ? rect.height : 0
                                _self.readAll = h >= 1500
                            })
                            .exec()
                    }, 1000)
                }
            })
        },
        _gettemplateDetails(id) {
            //模板详情
            Article.templateDetails('', id).then((res) => {
                if (res.statusCode === 200) {
                    this.details = res.data.jsonProperties
                    this.bgimg = res.data.bgimg
                }
            })
        },
        _getmusicDetails(id) {
            //音乐详情
            Article.musicDetails('', id).then((res) => {
                if (res.statusCode === 200) {
                    this.Musicfiles = res.data.fileUrl //音乐文件
                    this.myaudio = wx.createInnerAudioContext()
                    this.myaudio.src = this.Musicfiles
                    this.myaudio.play()
                    this.myaudio.stop()
                }
            })
        },
        backmusic() {
            this.haveHandlerMusic = true
            if (this.musicState === 'play') {
                this.myaudio.pause()
                this.musicState = 'pause'
            } else {
                this.myaudio.play()
                this.musicState = 'play'
            }
        },
        //滚动后背景音乐开始播放
        scroll() {
            this.showTextarea = false
            this.scrollIntoView = ''
            if (!this.haveHandlerMusic && this.musicId) {
                this.myaudio.play()
                this.musicState = 'play'
            }
        },
        //字体详情
        _getfontsDetails(id) {
            Article.fontsDetails('', id).then((res) => {
                if (res.statusCode === 200) {
                    this.Fontfile = res.data.fileUrl //字体文件
                    wx.loadFontFace({
                        family: 'templateFont',
                        source: 'url("' + this.Fontfile + '")',
                        success: () => {
                            console.log('success')
                        },
                        fail: () => {
                            console.log('fail')
                        },
                        complete: () => {
                            wx.hideToast()
                        }
                    })
                }
            })
        },
        // 查询文章评论列表
        _getcommentslist() {
            if (!this.noMore) {
                Article.commentslist(this.commentparams).then((res) => {
                    if (res.statusCode === 200) {
                        this.commentCount = res.data.totalCount //评论数
                        if (res.data.data && res.data.data.length > 0) {
                            this.pageNo += 1
                            this.commentsList = this.commentsList.concat(res.data.data)
                        } else {
                            this.noMore = !this.noMore
                        }
                    }
                })
            }
        },

        // 评论
        comment() {
            Article.createComments({
                articleId: this.articleId,
                commentContent: this.textareaValue
            }).then((res) => {
                if (res.statusCode === 200) {
                    wx.showToast({
                        title: '评论成功',
                        icon: 'success',
                        duration: 1000
                    })
                    this.showTextarea = false
                    this.focus = false

                    this.textareaValue = ''
                    this.pageNo = 1
                    this.commentsList = []
                    this.noMore = false
                    this._getcommentslist()
                }
            })
        },
        // 回复
        replys() {
            Article.createReplys({
                commentId: this.commentId,
                replyContent: this.textareaValue
            }).then((res) => {
                if (res.statusCode === 200) {
                    wx.showToast({
                        title: '回复成功',
                        icon: 'success',
                        duration: 1000
                    })
                    this.showTextarea = false
                    this.focus = false
                    this.textareaValue = ''
                    this.pageNo = 1
                    this.commentsList = []
                    this.noMore = false
                    this._getcommentslist()
                }
            })
        },
        //创建文章评论
        publishBtnClick() {
            this.textareaValue = this.textareaValue.trim()
            if (!this.textareaValue) {
                this.showTextarea = true
                this.focus = true
                wx.showToast({
                    title: '输入内容不能为空',
                    icon: 'none'
                })
            } else {
                if (this.commentablityType === 1) {
                    //所有人可以评论
                    if (this.comOrreply === 'comment') {
                        this.comment()
                    } else {
                        this.replys()
                    }
                } else if (this.commentablityType === 2) {
                    //粉丝可以评论
                    if (this.comOrreply === 'comment') {
                        this.comment()
                    } else {
                        this.replys()
                    }
                }
            }
        },
        toComplain() {
            //跳转去举报
            wx.navigateTo({
                url: '/pages/complain/main?articleId=' + this.articleId
            })
        },
        readAllClick() {
            this.readAll = false
            this.height = 'auto'
        },
        collectionBtnClick() {
            if (this.collectionActive) {
                Article.cancelfavorite(this.articleId).then((res) => {
                    if (res.statusCode === 200) {
                        wx.showToast({
                            title: '取消收藏成功',
                            icon: 'success',
                            duration: 1000
                        })
                        this.collectionActive = !this.collectionActive
                    }
                })
            } else {
                Article.gofavorite(this.articleId).then((res) => {
                    if (res.statusCode === 200) {
                        wx.showToast({
                            title: '收藏成功',
                            icon: 'success',
                            duration: 1000
                        })
                        this.collectionActive = !this.collectionActive
                    }
                })
            }
        },
        likeBtnClick() {
            if (this.likeActive) {
                Article.cancelthumbs(this.articleId).then((res) => {
                    if (res.statusCode === 200) {
                        wx.showToast({
                            title: '取消点赞成功',
                            icon: 'success',
                            duration: 1000
                        })
                        this.likeCount--
                        this.likeActive = !this.likeActive
                    }
                })
            } else {
                Article.gothumbs(this.articleId).then((res) => {
                    if (res.statusCode === 200) {
                        wx.showToast({
                            title: '点赞成功',
                            icon: 'success',
                            duration: 1000
                        })
                        this.likeCount++
                        this.likeActive = !this.likeActive
                    }
                })
            }
        },
        commentBtnClick() {
            this.scrollIntoView = 'commentContent'
        },
        // 创建文章
        commentArticle() {
            if (this.commentablityType === 2) {
                //粉丝可以评论
                if (this.followButton === 1) {
                    wx.showToast({
                        title: '需关注作者才能评论',
                        icon: 'none'
                    })
                    return false
                }
            }
            this.showTextarea = true
            this.focus = true
            this.comOrreply = 'comment'
            this.commentId = ''
        },
        // 添加回复
        replyArticle(id) {
            if (this.commentablityType === 2) {
                //粉丝可以评论
                if (this.followButton === 1) {
                    wx.showToast({
                        title: '需关注作者才能回复',
                        icon: 'none'
                    })
                    return false
                }
            }
            this.showTextarea = true
            this.focus = true
            this.comOrreply = 'reply'
            this.commentId = id
        },
        cancelBtnClick() {
            this.showTextarea = false
            // this.focus = false
        },
        textareaBlur() {
            // this.focus = false
        },
        focusTextarea(e) {
            // this.showTextarea = true
            // this.focus = true
            this.t_comment_bottom = e.target.height
        },
        keyboardheightchange(e) {
            if (e.mp.detail.height === 0 && this.focus) {
                this.showTextarea = true
                this.focus = true
                this.t_comment_bottom = 0
            }
        },
        closeAll() {
            this.showShare = false
            this.showTextarea = false
        },
        // 编辑、设置、删除
        moreBtnClick() {
            var id = this.articleId
            var title = this.title

            let itemList = []

            if (this.visitorIsAuthor || this.from === 'mine') {
                itemList = ['编辑', '设置', '删除']
            } else {
                if (this.visitorEditAllowed) {
                    itemList = ['编辑']
                }
            }

            // let self = this
            wx.showActionSheet({
                itemList: itemList,
                success: (res) => {
                    switch (
                        res.tapIndex //编辑
                    ) {
                        case 0:
                            // 这里写编辑代码
                            console.log(this.type)
                            var params = {
                                guId: getApp().guid,
                                isEdit: true
                            }
                            Article.ArticlesDetails(params, id).then((res) => {
                                if (res.statusCode === 200) {
                                    getApp().articeParts = res.data.sectionList //段落列表
                                    getApp().deleteData = [] //删除的段落id数组
                                    if (this.type === 'mine') {
                                        wx.navigateTo({
                                            url:
                                                '/pages/publishStep1/main?from=Editarticle&id=' +
                                                id +
                                                '&modify=' +
                                                'detailedit' +
                                                '&type=' +
                                                'mine' +
                                                '&title=' +
                                                encodeURIComponent(title)
                                        })
                                    } else if (this.type === 'minefamily') {
                                        wx.navigateTo({
                                            url:
                                                '/pages/publishStep1/main?from=Editarticle&id=' +
                                                id +
                                                '&modify=' +
                                                'detailedit' +
                                                '&type=' +
                                                'minefamily' +
                                                '&title=' +
                                                encodeURIComponent(title)
                                        })
                                    }
                                }
                            })
                            break
                        case 1:
                            // 这里写设置代码
                            wx.navigateTo({
                                url: '/pages/addset/main?from=mine&id=' + id
                            })
                            break
                        case 2:
                            // 这里写删除代码
                            wx.showModal({
                                content: '是否确认删除',
                                success: (res) => {
                                    if (res.confirm) {
                                        //确认删除逻辑
                                        Article.Deletearticle('', id).then((res) => {
                                            if (res.statusCode === 200) {
                                                wx.showToast({
                                                    title: '删除成功',
                                                    icon: 'none'
                                                })
                                                wx.switchTab({
                                                    url: '/pages/mine/main'
                                                })
                                            }
                                        })
                                    } else if (res.cancel) {
                                        console.log('用户点击取消')
                                    }
                                },
                                fail: () => {}
                            })
                    }
                },
                fail(res) {
                    console.log(res)
                }
            })
        },
        // 点击是否删除评论
        commentClick(isSelfData, id) {
            var self = this
            if (isSelfData) {
                wx.showActionSheet({
                    itemList: ['删除'],
                    success(res) {
                        switch (
                            res.tapIndex //编辑
                        ) {
                            case 0:
                                console.log(id)
                                Article.deleteComments('', id).then((res) => {
                                    if (res.statusCode === 200) {
                                        wx.showToast({
                                            title: '删除成功',
                                            icon: 'success'
                                        })
                                        self.textareaValue = ''
                                        self.pageNo = 1
                                        self.commentsList = []
                                        self.noMore = false
                                        self._getcommentslist()
                                    }
                                })
                                break
                        }
                    },
                    fail(res) {
                        console.log(res.errMsg)
                    }
                })
            }
        },
        // 点击是否删除回复评论
        replyClick(isSelfData, id) {
            var self = this
            if (isSelfData) {
                wx.showActionSheet({
                    itemList: ['删除'],
                    success(res) {
                        switch (
                            res.tapIndex //编辑
                        ) {
                            case 0:
                                Article.deleteReplys('', id).then((res) => {
                                    if (res.statusCode === 200) {
                                        wx.showToast({
                                            title: '删除成功',
                                            icon: 'success'
                                        })
                                        self.textareaValue = ''
                                        self.pageNo = 1
                                        self.commentsList = []
                                        self.noMore = false
                                        self._getcommentslist()
                                    }
                                })
                                break
                        }
                    },
                    fail(res) {
                        console.log(res.errMsg)
                    }
                })
            }
        },
        // 关注
        statusBtnClick() {
            if (this.ISfollow) {
                // 关注
                UserApi.followUser({
                    targetUserDisplayId: this.authorDisplayId
                }).then((res) => {
                    if (res.statusCode === 200) {
                        this.ISfollow = false
                        this.followButton = 2
                        wx.showToast({
                            title: '关注成功',
                            icon: 'none'
                        })
                    }
                })
            } else {
                UserApi.cancelFollowUser({
                    targetUserDisplayId: this.authorDisplayId
                }).then((res) => {
                    if (res.statusCode === 200) {
                        this.ISfollow = true
                        this.followButton = 1
                        wx.showToast({
                            title: '取消关注成功',
                            icon: 'none'
                        })
                    }
                })
            }
        },
        // 写回忆
        Writememories() {
            wx.navigateTo({
                url: '/pages/publishStep1/main'
            })
        }
    },
    onHide() {
        if (this.musicId) {
            this.myaudio.pause()
        }
    },
    onUnload() {
        if (this.musicId) {
            this.myaudio.destroy()
        }
    }
}
</script>

<style lang="less" scoped>
.handler_item {
    line-height: 1;
    padding: 0;
}
.forkBtn {
    box-sizing: content-box;
}
</style>
