<!--
* @des: 首页
* @date: 2020-03-01 09:26:10
* @version:  1.0
*
* Date                   Author               Description
* ------------------------------------------------------
* 2020-03-01             曹天笑               创建
* 2020-03-31             邓红丽               对接数据
* 2020-04-14             曹天笑               绑定手机号功能
-->
<template>
    <!-- 首页 -->
    <div class="" @click="active = false">
        <navigation-bar
            isIndex
            @activeTitleClick="activeTitleClick"
            @activeBtnClick="activeBtnClick"
            :active="active"
        ></navigation-bar>
        <div class="hot_sort">
            <swiper class="tap_swiper" :display-multiple-items="tabDatalength">
                <swiper-item class="tap_item" v-for="(item, index) in tabData" :key="index">
                    <span
                        @click="itemClick(index, item.id)"
                        class="f32 word"
                        :class="activeIndex === index ? 'active' : ''"
                        >{{ item.categoryName }}</span
                    >
                </swiper-item>
            </swiper>
        </div>
        <div class="index_main">
            <scroll-view
                scroll-y
                scroll-anchoring
                refresher-enabled
                refresher-threshold="40px"
                :refresher-triggered="refresherTriggered"
                @refresherrefresh="onRefresh"
                class="scroll_view"
                lower-threshold="150px"
                @scrolltolower="_getArticleslist"
                :style="{
                    top: navBarHeight + 'px',
                    height: padHeight
                }"
            >
                <div style="scroll-view-box">
                    <div
                        class="item bg-fff"
                        v-for="item in articleList"
                        :key="item.id"
                        @click="goArtice(item.id)"
                    >
                        <div class="container">
                            <div class="title f36 color-333">{{ item.title }}</div>
                            <div class="detail">
                                <image :src="item.coverPictureUrl" mode="aspectFill" alt="" />
                                <!-- <image src="/static/images/pic.png" mode="widthFix" alt="" /> 
                                    src="/static/images/user.png" -->
                            </div>
                            <div class="author_info f28 color-999 clearfix">
                                <div
                                    class="author_avatar fl clearfix"
                                    @click.stop="toCheckUser(item.authorDisplayId)"
                                >
                                    <image
                                        class="fl"
                                        :src="item.avatarUrl"
                                        mode="aspectFit"
                                        alt="avatar"
                                    />
                                    <div class="name fl">{{ item.authorName }}</div>
                                </div>
                                <div class="handler_line fr clearfix">
                                    <div class="handle_item fl">
                                        <span class="num">{{ item.readCount }}</span>
                                        <span>阅读</span>
                                    </div>
                                    <div class="dot fl"></div>
                                    <div class="handle_item fl">
                                        <span class="num">{{ item.commentCount }}</span>
                                        <span>评论</span>
                                    </div>
                                    <div class="dot fl"></div>
                                    <div class="handle_item fl">
                                        <span class="num">{{ item.likeCount }}</span>
                                        <span>点赞</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="no-more py-30" v-if="noMore">没有更多了</p>
            </scroll-view>
        </div>
        <v-tabBar :currentNavIndex="footerNavIndex"></v-tabBar>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import tabBar from '@/components/tabBar'
import {Article} from '@/api/Article.js'
import {escapeThousands} from '@/utils/index'
export default {
    data() {
        return {
            footerNavIndex: 0,
            activeIndex: 0,
            pageNo: 1,
            pageSize: 10,
            category: '', //默认状态
            sourceType: 1, //默认状态 广场
            tabDatalength: 0,
            tabData: [],
            articleList: [],
            noMore: false, //没有更多
            showModal: false, //用户未绑定手机号提示绑定
            refresherTriggered: false, //下拉刷新状态值
            navBarHeight: this.$NavBarHeight + 44,
            activeTitle: '广场',
            active: false
        }
    },
    components: {
        'navigation-bar': NavigationBar,
        'v-tabBar': tabBar
    },
    onLoad() {
        this.pageNo = 1
        this.articleList = []
        this.noMore = false
        this.activeIndex = 0
        this._getCategories()
    },
    onShow() {
        wx.hideTabBar()
    },
    computed: {
        params() {
            return {
                pageNo: this.pageNo,
                pageSize: this.pageSize,
                sourceType: this.sourceType, //文章来源类型 1:广场；2：关注
                category: this.category //文章分类id
            }
        },
        padHeight() {
            return `calc(100vh - ${this.navBarHeight}px)`
        }
    },
    onShareAppMessage: function(res) {
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log('来自页面内转发按钮')
        } else {
            console.log('来自右上角转发菜单')
        }
        return {
            title: '和我一起来这里记录美好生活吧~',
            path: '/pages/index/main?isFromShare=isFromShare'
        }
    },
    methods: {
        itemClick(index, id) {
            this.activeIndex = index
            this.category = id
            this.pageNo = 1
            this.articleList = []
            this.noMore = false
            this._getArticleslist()
        },
        // 选择生活圈
        activeTitleClick(item) {
            this.noMore = false
            this.pageNo = 1
            this.articleList = []
            this.sourceType = item.type
            this._getArticleslist()
        },
        activeBtnClick() {
            this.active = !this.active
        },
        // 首页查询文章类别列表
        _getCategories() {
            Article.Categories().then((res) => {
                if (res.statusCode === 200) {
                    this.tabDatalength = res.data.length
                    this.category = res.data[0].id
                    this.tabData = res.data
                    this._getArticleslist()
                }
            })
        },
        // 首页查询文章列表
        _getArticleslist() {
            if (!this.noMore) {
                Article.Articleslist(this.params).then((res) => {
                    if (res.statusCode === 200) {
                        if (res.data.data) {
                            let result = res.data.data
                            result = result.map((item) => {
                                item.readCount = escapeThousands(item.readCount)
                                item.commentCount = escapeThousands(item.commentCount)
                                item.likeCount = escapeThousands(item.likeCount)
                                return item
                            })
                            this.noMore = res.data.totalPage <= this.pageNo
                            this.pageNo += 1
                            this.articleList = this.articleList.concat(result)
                        }
                    }
                })
            }
        },
        // 下拉刷新
        onRefresh(e) {
            if (this.refresherTriggered) return
            this.refresherTriggered = true
            this.pageNo = 1
            Article.Articleslist(this.params).then((resq) => {
                if (resq.statusCode === 200) {
                    if (resq.data.data && resq.data.data.length > 0) {
                        this.refresherTriggered = false
                        this.noMore = resq.data.totalPage <= this.pageNo
                        this.pageNo++
                        let resultDate = resq.data.data
                        resultDate = resultDate.map((item) => {
                            item.readCount = this.escapeThousands(item.readCount)
                            item.commentCount = this.escapeThousands(item.commentCount)
                            item.likeCount = this.escapeThousands(item.likeCount)
                            return item
                        })
                        this.articleList = resultDate
                    } else {
                        this.refresherTriggered = false
                    }
                }
            })
        },
        // 跳转到个人资料页
        toCheckUser(id) {
            wx.navigateTo({
                url: '/pages/checkUser/main?displayId=' + id
            })
        },
        goArtice(id) {
            wx.navigateTo({
                url: '/pages/articeDetail/main?id=' + id
            })
        }
    }
}
</script>

<style scoped lang="less"></style>
