<!--
* @des: 查看其它用户资料
* @date: 2020-04-16 11:22:26
* @version:  1.0
*
* Date                   Author               Description
* ------------------------------------------------------
* 2020-04-16             曹天笑               创建
-->
<template>
    <div class="mine">
        <navigation-bar showBack showShare :title="appUserInfo.name"></navigation-bar>
        <scroll-view class="m_mine" scroll-y @scrolltolower="getMore" @scroll="scroll"
            :style="{
                paddingTop: navBarHeight + 'px',
                height: padHeight
            }">
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

                    <div
                        class="follow_btn active"
                        v-if="(appUserInfo.relation == 4 || appUserInfo.relation == 2) && !appUserInfo.visitorData"
                        @click="follow(appUserInfo)"
                        >
                        <image src="/static/images/fensi_guanzhu.svg" />
                        <span>关注</span>
                    </div>
                    <div
                        class="follow_btn "
                        v-if="appUserInfo.relation == 1 && !appUserInfo.visitorData"
                        @click="cancelFollow(appUserInfo)"
                        >
                        <image src="/static/images/fensi_gou.svg" />
                        <span>已关注</span>
                    </div>
                    <div
                        class="follow_btn "
                        v-if="appUserInfo.relation == 3 && !appUserInfo.visitorData"
                        @click="cancelFollow(appUserInfo)"
                        >
                        <image src="/static/images/fensi_gou.svg" />
                        <span>相互关注</span>
                    </div>
                </div>
                <div class="user_des f28 color-666">
                    {{ appUserInfo.signature }}
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
                    >收藏<text class="num">{{ followCount }}</text></div
                >
            </div>
            <div class="container" style="margin-top: 15px">
                <div v-show="tabState == 1">
                    <div class="article_list">
                        <div v-for="item in articlesList" :key="item">
                            <div class="article_item" @click.stop="goArtice(item.id)">
                                <div class="title">
                                    {{ item.title }}
                                </div>
                                <div class="pic_box">
                                    <image mode="aspectFill" :src="item.coverPictureUrl" />
                                    <!-- <div class="tip_line">
                                        <span class="tip_btn" v-if="item.visibilityType == 1">公开</span>
                                        <span class="tip_btn" v-if="item.visibilityType == 2">私密</span>
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
                                </div>
                            </div>
                            </div>
                    </div>
                    <p class="no-more py-30" v-if="noMoreArticele">没有更多了</p>
                </div>
                <div v-show="tabState == 2">
                    <div class="article_list">
                        <div v-for="item in followList" :key="item">
                            <div class="article_item" @click.stop="goSCArtice(item)">
                                <div class="title">
                                    {{ item.title }}
                                </div>
                                <div class="pic_box">
                                    <image mode="aspectFill" :src="item.coverPictureUrl" />
                                    <!-- <div class="tip_line">
                                        <span class="tip_btn" v-if="item.visibilityType == 1">公开</span>
                                        <span class="tip_btn" v-if="item.visibilityType == 2">私密</span>
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
                                    <!-- <div
                                        class="fr more_btn"
                                        @click.stop="handler(item.id, item.title)"
                                        v-if="tabState == 1"
                                    ></div> -->
                                </div>
                            </div>
                            </div>
                    </div>
                    <p class="no-more py-30" v-if="noMoreFollow">没有更多了</p>
                </div>
            </div>
        </scroll-view>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import {AppLoginApi} from '@/api/AppLogin'
import {UserApi} from '@/api/User.js'
import {Article} from '@/api/Article.js'
export default {
    data() {
        return {
            footerNavIndex: 2,
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
            displayId: '',
            tabState: 1, //1为文章2为收藏
            noMoreArticele: false, //没有更多.
            noMoreFollow: false, //没有更多.
            navBarHeight: this.$NavBarHeight,
            userInfoHeight: 0, //上面个人信息Dom的高度，（滚动时需要）
            scrollStyle: '', //滚动时候固定tab需要的样式
            translateY: 0, //滚动时候固定tab需要的样式
            shareTitle: '我发现了一个优秀的作者，推荐给你。', //分享的title
            articleCount: 0, //文章数量
            followCount: 0 //收藏文章数量
        }
    },
    components: {
        'navigation-bar': NavigationBar
    },
    computed: {
        padHeight() {
            return `calc(100vh - ${this.navBarHeight}px)`
        }
    },
    onShow() {
        this.init()
        this.getAppUserInfo()
    },
    onLoad(options) {
        this.displayId = options.displayId
        // 由于信息是动态加载的，昵称的高度不一定，故加setTimeOut
        setTimeout(() => {
            let query = wx.createSelectorQuery()
            query.select('#userInfo').boundingClientRect()
            query.exec((rect) => {
                this.userInfoHeight = rect[0].height
            }, 500)
        })
    },

    // 分享
    onShareAppMessage(res) {
        let self = this
        return {
            title: self.shareTitle,
            path: '/pages/checkUser/main?displayId=' + self.displayId + '&isFromShare=isFromShare'
        }
    },

    methods: {
        init() {
            this.scrollTop = 0
            this.translateY = 0
            this.scrollStyle = ''
            this.noMoreArticele = false
            this.noMoreFollow = false
            this.tabState = 1
            this.articlesList = []
            this.getArticlesListParams.pageNo = 1
            this.getArticlesListParams.pageSize = 10
            this.followList = []
            this.getFollowListParams.pageNo = 1
            this.getFollowListParams.pageSize = 10
        },
        // 获取小程序用户的信息（昵称，签名等）
        getAppUserInfo() {
            AppLoginApi.getAppUserInfo(this.displayId).then((res) => {
                if (res.statusCode === 200 && res.data) {
                    this.appUserInfo = res.data
                    if (res.data.signature) {
                        this.appUserInfo.signature = res.data.signature
                    }
                    this.getUserArticles()
                    this.getUserFavoritesArticles()
                } else {
                    //用户信息获取失败
                }
            })
        },
        // 关注
        follow(item) {
            let self = this
            UserApi.followUser({
                targetUserDisplayId: self.displayId
            }).then((res) => {
                if (res.statusCode === 200) {
                    if (item.relation === 4) {
                        item.relation = 1
                    } else if (item.relation === 2) {
                        item.relation = 3
                    }
                    wx.showToast({
                        title: '关注成功',
                        icon: 'none'
                    })
                } else {
                    wx.showToast({
                        title: '关注失败',
                        icon: 'none'
                    })
                }
            })
        },
        // 取消关注
        cancelFollow(item) {
            let self = this
            wx.showModal({
                content: '是否取消关注',
                success(res) {
                    if (res.confirm) {
                        UserApi.cancelFollowUser({
                            targetUserDisplayId: self.displayId
                        }).then((res) => {
                            if (res.statusCode === 200) {
                                if (item.relation === 1) {
                                    item.relation = 4
                                } else if (item.relation === 3) {
                                    item.relation = 2
                                }
                            } else {
                                wx.showToast({
                                    title: '取消关注失败',
                                    icon: 'none'
                                })
                            }
                        })
                    }
                }
            })
        },
        //获取用户文章列表
        getUserArticles() {
            this.getArticlesListParams.displayId = this.appUserInfo.displayId
            if (!this.noMoreArticele) {
                Article.Articleslist(this.getArticlesListParams).then((res) => {
                    if (res.statusCode === 200) {
                        this.articleCount = res.data.totalCount
                        this.noMoreArticele = res.data.totalPage <= this.getArticlesListParams.pageNo
                        this.articlesList = this.articlesList.concat(res.data.data)
                        //只显示公开文章
                        this.articlesList = this.articlesList.filter(item => {
                            return item.visibilityType === 1
                        })
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
                        this.followCount = res.data.totalCount
                        this.noMoreFollow = res.data.totalPage <= this.getFollowListParams.pageNo
                        this.followList = this.followList.concat(res.data.data)
                    } else {
                        console.log('获取收藏文章失败')
                    }
                })
            }
        },
        tabSwitch(tabState) {
            this.tabState = tabState
            // this.getArticlesListParams.pageNo = 1
            // this.articlesList = []
            // this.noMore = false
            // if (tabState === 1) {
            //     this.getUserArticles()
            // } else {
            //     this.getUserFavoritesArticles()
            // }
        },
        toFansOrgz(source) {
            wx.navigateTo({
                url: '/pages/otherUserFans/main?source=' + source + '&id=' + this.displayId
            })
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
        goArtice(id) {
            wx.navigateTo({
                url: '/pages/articeDetail/main?id=' + id
            })
        },
        goSCArtice(item) {
            if (item.favoriteArticleStatus !== 2) {
                let content = ''
                if (item.favoriteArticleStatus === 1) {
                    content = '文章不可读'
                } else if (item.favoriteArticleStatus === 3 || item.favoriteArticleStatus === 4) {
                    content = '文章已失效'
                }
                wx.showToast({
                    title: content,
                    icon: 'none'
                })
            } else {
                wx.navigateTo({
                    url: '/pages/articeDetail/main?id=' + item.id
                })
            }
        }
    }
}
</script>

<style lang="less">
@import '../../assets/css/var.less';
.mine .share_block {
    bottom: 0;
}
.mine .info_detail .follow_btn {
    padding: 0 15px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    border-radius: 30px;
    text-align: center;
    position: absolute;
    top: 20px;
    right: 0;
    color: #999;
    border: 1px solid #999;
    image {
        width: 12px;
        height: 12px;
        margin-right: 4px;
    }
}
.mine .info_detail .follow_btn.active {
    background: @theme_color;
    color: #fff;
    border: none;
}
</style>
