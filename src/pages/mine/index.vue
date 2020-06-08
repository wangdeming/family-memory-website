<style scoped></style>
<!--
* @des: 我的页面
* @date: 2020-03-01 09:26:37
* @version:  1.0
*
* Date                   Author               Description
* ------------------------------------------------------
* 2020-03-01             曹天笑               创建
* 2020-05-13             邓紅麗               新增物理返回键的逻辑
-->
<template>
    <!-- 我的，个人中心 -->
    <div class="mine" @click="closeShareModel">
        <navigation-bar isMine :status="appUserInfo.status" title="我的"></navigation-bar>
        <scroll-view
            class="m_mine"
            scroll-y
            @scrolltolower="getMore"
            @scroll="scroll"
            :style="{
                paddingTop: navBarHeight + 'px',
                height: padHeight
            }"
        >
            <div class="user_info" id="userInfo">
                <div class="info_detail">
                    <div class="user_main">
                        <div class="avatar">
                            <image :src="appUserInfo.avatarUrl" />
                        </div>
                        <div class="user_name color-333 f36 fontbold">{{ appUserInfo.name }}</div>
                        <div class="user_id color-999 f28">ID:{{ appUserInfo.displayId }}</div>
                    </div>
                    <div class="user_data user_gz" @click="toFansOrgz(2)">
                        <p class="num f32 color-333">{{ appUserInfo.followCount }}</p>
                        <p class="word f32 color-999">关注</p>
                    </div>
                    <div class="user_data user_fans" @click="toFansOrgz(1)">
                        <p class="num f32 color-333">{{ appUserInfo.fanCount }}</p>
                        <p class="word f32 color-999">粉丝</p>
                    </div>

                    <div class="family_btn" @click="toFamily()">
                        <span class="num color-fff f28"
                            >家庭<text>{{ appUserInfo.familyCount }}</text></span
                        >
                    </div>
                </div>
                <div class="user_des f28 color-666">
                    {{ appUserInfo.signature ? appUserInfo.signature : '你还没有设置个性签名，用一句话简单介绍下自己吧。' }}
                </div>
            </div>
            <div class="user_article clearfix" :style="scrollStyle">
                <div
                    :class="'tab_bar_item fl ' + (tabState == 1 ? 'active' : '')"
                    @click="tabSwitch(1)"
                    >文章<text class="num">{{ articleCount }}</text></div
                >
                <div
                    :class="'tab_bar_item fl ' + (tabState == 2 ? 'active' : '')"
                    @click="tabSwitch(2)"
                    >收藏<text class="num">{{ favoriteCount }}</text></div
                >
            </div>
            <div class="container" :style="'transform: translateY(' + translateY + 'px)'">
                <div v-show="tabState == 1">
                    <div class="copy_btn" v-if="appUserInfo.draftCount > 0" @click="godraftBox()">
                        <span class="icon icon_copy color-333 f28"
                            >您有<text class="num">{{ appUserInfo.draftCount }}</text
                            >份草稿待完成</span
                        >
                    </div>
                    <div class="article_list mt-30">
                        <div
                            class="article_item"
                            v-for="(item, index) in articlesList"
                            :key="index"
                            @click.stop="goArtice(item.id)"
                        >
                            <div class="title">
                                {{ item.title }}
                            </div>
                            <div class="pic_box">
                                <image mode="aspectFill" :src="item.coverPictureUrl" />
                                <div class="tip_line">
                                    <span class="tip_btn" v-if="item.visibilityType == 1"
                                        >公开</span
                                    >
                                    <span class="tip_btn" v-if="item.visibilityType == 2"
                                        >私密</span
                                    >
                                    <span class="tip_btn" v-if="item.isCoEditable">共同编辑</span>
                                </div>
                            </div>
                            <div class="handler_line clearfix">
                                <div class="data_line fl clearfix">
                                    <div class="data_item fl">
                                        <span class="num">{{ item.readCount }}</span>
                                        <span>阅读</span>
                                    </div>
                                    <div class="dot fl"></div>
                                    <div class="data_item fl">
                                        <span class="num">{{ item.commentCount }}</span>
                                        <span>评论</span>
                                    </div>
                                    <div class="dot fl"></div>
                                    <div class="data_item fl">
                                        <span class="num">{{ item.likeCount }}</span>
                                        <span>点赞</span>
                                    </div>
                                </div>
                                <div
                                    class="fr more_btn"
                                    @click.stop="handler(item.id, item.title, index)"
                                    v-if="tabState == 1"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <p class="no-more py-30" v-if="noMoreArticele">没有更多了</p>
                </div>
                <div v-show="tabState == 2">
                    <div class="article_list mt-30">
                        <div
                            class="article_item"
                            v-for="item in followList"
                            :key="item"
                            @click.stop="goCZArtice(item)"
                        >
                            <div class="title">
                                {{ item.title }}
                            </div>
                            <div class="pic_box">
                                <image mode="aspectFill" :src="item.coverPictureUrl" />
                                <!-- <div class="tip_line">
                                    <span class="tip_btn" v-if="item.visibilityType == 1"
                                        >公开</span
                                    >
                                    <span class="tip_btn" v-if="item.visibilityType == 2"
                                        >私密</span
                                    >
                                    <span class="tip_btn" v-if="item.isCoEditable">共同编辑</span>
                                </div> -->
                            </div>
                            <div class="handler_line clearfix">
                                <div class="data_line fl clearfix">
                                    <div class="data_item fl">
                                        <span class="num">{{ item.readCount }}</span>
                                        <span>阅读</span>
                                    </div>
                                    <div class="dot fl"></div>
                                    <div class="data_item fl">
                                        <span class="num">{{ item.commentCount }}</span>
                                        <span>评论</span>
                                    </div>
                                    <div class="dot fl"></div>
                                    <div class="data_item fl">
                                        <span class="num">{{ item.likeCount }}</span>
                                        <span>点赞</span>
                                    </div>
                                </div>
                                <div
                                    class="fr more_btn"
                                    @click.stop="handler(item.id, item.title)"
                                    v-if="tabState == 1"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <p class="no-more py-30" v-if="noMoreFollow">没有更多了</p>
                </div>
            </div>
        </scroll-view>
        <v-tabBar :currentNavIndex="footerNavIndex"></v-tabBar>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import tabBar from '@/components/tabBar'
import {AppLoginApi} from '@/api/AppLogin'
import {UserApi} from '@/api/User.js'
import {Article} from '@/api/Article.js'
export default {
    data() {
        return {
            footerNavIndex: 2,
            fresh: getApp().loginState.fresh, //是否为新用户
            showShare: false,
            shareArticeTitle: '',
            appUserInfo: {
                displayId: '', //数字ID
                name: '', //昵称
                avatarUrl: '', //头像
                signature: '你还没有设置个性签名，用一句话简单介绍下自己吧。', //个性签名
                articleCount: 0, //文章数
                followCount: 0, //关注数
                fanCount: 0, //粉丝数
                favoriteCount: 0, //收藏数
                familyCount: 0, //家庭数
                draftCount: 0, //草稿数
                status: 1, //用户状态： 1 正常  2 已冻结
                visitorData: true, //访问者是否为当前数据的主人：true是，false否
                visitorFollowed: false //访问者是否已关注当前数据的主人：true已关注，false未关注
            }, //用户信息
            showPopover: true,
            articlesList: [], //文章列表
            followList: [], //收藏列表
            getArticlesListParams: {
                pageNo: 1,
                pageSize: 10,
                displayId: ''
            },
            getFollowListParams: {
                pageNo: 1,
                pageSize: 10,
                displayId: ''
            },
            tabState: 1, //1为文章2为收藏
            noMoreArticele: false, //没有更多.
            noMoreFollow: false, //没有更多.
            navBarHeight: this.$NavBarHeight,
            userInfoHeight: 0, //上面个人信息Dom的高度，（滚动时需要）
            scrollTop: 0, //滚动的高度
            scrollStyle: '', //滚动时候固定tab需要的样式
            translateY: 0, //滚动时候固定tab需要的样式
            articleCount: 0, //用户文章总数
            favoriteCount: 0 //用户收藏文章数
        }
    },
    components: {
        'navigation-bar': NavigationBar,
        'v-tabBar': tabBar
    },
    onShow() {
        wx.hideTabBar()
        this.init()
        this.getAppUserInfo()
        getApp().articeData = []
        if (getApp().articeTitle) {
            this.articlesList = getApp().articeData
        }
    },
    onLoad() {
        // 由于信息是动态加载的，昵称的高度不一定，故加setTimeOut
        setTimeout(() => {
            let query = wx.createSelectorQuery()
            query.select('#userInfo').boundingClientRect()
            query.exec((rect) => {
                this.userInfoHeight = rect[0].height
            }, 500)
        })
    },
    computed: {
        padHeight() {
            return `calc(100vh - ${this.navBarHeight}px)`
        }
    },
    // 分享
    onShareAppMessage(res) {
        let self = this
        return {
            title: '我在这里记录美好生活，快来关注我。',
            path:
                '/pages/checkUser/main?displayId=' +
                self.appUserInfo.displayId +
                '&isFromShare=isFromShare'
        }
    },

    methods: {
        init() {
            this.scrollTop = 0
            this.translateY = 0
            this.scrollStyle = ''
            this.noMoreArticele = false
            this.noMoreFollow = false
            this.tabState = getApp().tabState || 1
            this.articlesList = []
            this.getArticlesListParams.pageNo = 1
            this.getArticlesListParams.pageSize = 10
            this.followList = []
            this.getFollowListParams.pageNo = 1
            this.getFollowListParams.pageSize = 10
        },
        getuserinfo(res) {
            let self = this
            if (res.mp.detail.userInfo) {
                //允许授权
                getApp().authorizeState = true
                self.isLogin = true
            } else {
                //拒绝授权
                getApp().authorizeState = false
                self.isLogin = false
                wx.showToast({
                    title: '授权失败',
                    icon: 'none',
                    duration: 3000
                })
            }
        },
        // 获取小程序用户的信息（昵称，签名等）
        getAppUserInfo() {
            AppLoginApi.getAppUserInfo().then((res) => {
                if (res.statusCode === 200 && res.data) {
                    this.appUserInfo = res.data
                    getApp().userInfo.displayId = res.data.displayId
                    getApp().phoneBound = res.data.phoneBound
                    this.appUserInfo.name = res.data.name
                        ? res.data.name
                        : getApp().userInfo.nickName
                    getApp().userInfo.name = this.appUserInfo.name
                    this.appUserInfo.avatarUrl = res.data.avatarUrl
                        ? res.data.avatarUrl
                        : getApp().userInfo.avatarUrl
                    getApp().userInfo.avatarUrl = this.appUserInfo.avatarUrl
                    if (res.data.signature) {
                        getApp().userInfo.signature = this.appUserInfo.signature
                    }
                    // 新人的话要先更新再加载
                    if (getApp().loginState.fresh) {
                        AppLoginApi.upDatedAppUserInfo(
                            {
                                name: this.appUserInfo.name,
                                avatarUrl: this.appUserInfo.avatarUrl,
                                signature: this.appUserInfo.signature
                            },
                            res.data.displayId
                        ).then((res) => {
                            console.log(res)
                        })
                    }
                    this.getUserArticles()
                    this.getUserFavoritesArticles()
                } else {
                    //用户信息获取失败
                }
            })
        },
        //获取用户文章列表
        getUserArticles() {
            this.getArticlesListParams.displayId = this.appUserInfo.displayId
            if (!this.noMoreArticele) {
                Article.Articleslist(this.getArticlesListParams).then((res) => {
                    if (res.statusCode === 200) {
                        this.noMoreArticele =
                            res.data.totalPage <= this.getArticlesListParams.pageNo
                        this.articleCount = res.data.totalCount
                        this.articlesList = this.articlesList.concat(res.data.data)
                        getApp().articeData = this.articlesList
                    } else {
                        console.log('获取文章失败')
                    }
                })
            }
        },
        //获取用户收藏文章列表
        getUserFavoritesArticles() {
            this.getFollowListParams.displayId = this.appUserInfo.displayId
            if (!this.noMoreFollow) {
                UserApi.userFavoritesArticles(this.getFollowListParams).then((res) => {
                    if (res.statusCode === 200) {
                        this.noMoreFollow = res.data.totalPage <= this.getFollowListParams.pageNo
                        this.favoriteCount = res.data.totalCount
                        this.followList = this.followList.concat(res.data.data)
                    } else {
                        console.log('获取收藏文章失败')
                    }
                })
            }
        },
        tabSwitch(tabState) {
            this.tabState = tabState
            getApp().tabState = tabState
            // this.getArticlesListParams.pageNo = 1
            // this.noMore = false
            // if (tabState === 1) {
            //     this.getUserArticles()
            // } else {
            //     this.getUserFavoritesArticles()
            // }
        },
        scroll(event) {
            let self = this
            self.scrollTop = event.mp.detail.scrollTop
            if (self.scrollTop >= self.userInfoHeight) {
                self.scrollStyle = 'position:fixed; top:' + self.navBarHeight + 'px'
                self.translateY = 50
            } else {
                self.scrollStyle = ''
                self.translateY = 0
            }
        },
        // 加载更多
        getMore() {
            if (this.tabState === 1) {
                this.getArticlesListParams.pageNo++
                this.getUserArticles()
            }
            if (this.tabState === 2) {
                this.getFollowListParams.pageNo++
                this.getUserFavoritesArticles()
            }
        },
        toFamily() {
            if (this.appUserInfo.familyCount !== 0) {
                wx.navigateTo({
                    url: '/pages/myFamily/main?from=mine'
                })
            } else {
                wx.navigateTo({
                    url: '/pages/CreatFamily/main'
                })
            }
        },
        toFansOrgz(source) {
            console.log(source)
            wx.navigateTo({
                url: '/pages/MyFans/main?source=' + source + '&id=' + this.appUserInfo.displayId
            })
        },
        godraftBox() {
            wx.navigateTo({
                url: '/pages/draftBox/main?from=' + 'mine'
            })
        },
        goArtice(id) {
            wx.navigateTo({
                url: '/pages/articeDetail/main?from=mine&id=' + id + '&type=' + 'mine'
            })
        },
        goCZArtice(item) {
            //收藏文章的状态1：文章为私密；2: 文章发布；3：已下架文章；4：已删除文章；
            let self = this
            if (item.favoriteArticleStatus !== 2) {
                let content = ''
                if (item.favoriteArticleStatus === 1) {
                    content = '文章不可读'
                } else if (item.favoriteArticleStatus === 3 || item.favoriteArticleStatus === 4) {
                    content = '文章已失效'
                }
                wx.showModal({
                    content: content,
                    confirmText: '取消收藏',
                    cancelText: '返回',
                    success: (res) => {
                        if (res.confirm) {
                            Article.cancelfavorite(item.id).then((res) => {
                                if (res.statusCode === 200) {
                                    self.followList = self.followList.filter((elem) => {
                                        return elem.id !== item.id
                                    })
                                    self.favoriteCount--
                                    wx.showToast({
                                        title: '取消收藏成功',
                                        icon: 'success',
                                        duration: 1000
                                    })
                                } else {
                                    wx.showToast({
                                        title: '取消收藏失败'
                                    })
                                }
                            })
                        } else {
                            // 取消
                        }
                    },
                    fail: () => {}
                })
            } else {
                wx.navigateTo({
                    url: '/pages/articeDetail/main?id=' + item.id
                })
            }
        },
        handler(id, title, Editindex) {
            let self = this
            wx.showActionSheet({
                itemList: ['编辑', '设置', '删除'],
                success: (res) => {
                    switch (
                        res.tapIndex //编辑
                    ) {
                        case 0:
                            // 这里写编辑代码
                            getApp().articeParts = []
                            getApp().articeData = []
                            getApp().articedraftData = []
                            getApp().editArticleId = ''
                            getApp().articeTitle = ''
                            getApp().from = ''
                            getApp().Editindex = Editindex
                            var params = {
                                guId: getApp().guid,
                                isEdit: true
                            }
                            Article.ArticlesDetails(params, id).then((res) => {
                                if (res.statusCode === 200) {
                                    getApp().articeParts = res.data.sectionList //段落列表
                                    getApp().deleteData = [] //删除的段落id数组
                                    wx.navigateTo({
                                        url:
                                            '/pages/publishStep1/main?from=Editarticle&id=' +
                                            id +
                                            '&title=' +
                                            encodeURIComponent(title)
                                    })
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
                                                self.articlesList = self.articlesList.filter(
                                                    (item) => {
                                                        return item.id !== id
                                                    }
                                                )
                                                self.articleCount = self.articleCount - 1
                                                wx.showToast({
                                                    title: '删除成功',
                                                    icon: 'none'
                                                })
                                            }
                                        })
                                    } else {
                                        // 取消
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
        closeShareModel() {
            this.showShare = false
        }
    }
}
</script>

<style lang="less">
.mine .share_block {
    bottom: 0;
}
</style>
