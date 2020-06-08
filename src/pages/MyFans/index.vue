<!--
* @des: 我的粉丝页
* @date: 2020-03-01 09:27:14
* @version:  1.0
*
* Date                   Author               Description
* ------------------------------------------------------
* 2020-03-01             曹天笑               创建(静态)
-->
<template>
    <!-- 我的粉丝，关注 -->
    <div class="my_fans">
        <navigation-bar showBack :title="type === 2 ? '我的关注' : '我的粉丝'"></navigation-bar>
        <div class="m_fans_tab clearfix" :style="{top: navBarHeight + 'px'}">
            <div @click="changeTab(2)" class="u_tab_item f32 fl" :class="type === 2 ? 'active' : ''"
                >关注</div
            >
            <div @click="changeTab(1)" class="u_tab_item f32 fl" :class="type === 1 ? 'active' : ''"
                >粉丝</div
            >
        </div>
        <scroll-view scroll-y class="scroll_view" @scrolltolower="getFollowsFansList(type)" :scroll-top="scrollTop" @scroll="scroll"
            :style="{
                height: padHeight
            }">
            <div class="m_fans_list" v-if="type === 2">
                <div v-for="(item, index) in followList" :key="index" class="m_fans_item clearfix">
                    <div class="avatar_box fl clearfix" @click.stop="toCheckUser(item.displayId)">
                        <image class="fl" :src="item.avatarUrl" mode="aspectFit" alt="avatar" />
                        <span class="name fl f36 color-333">{{ item.name }}</span>
                    </div>
                    <div
                        @click="followItemClick(item)"
                        :class="'forkBtn ' + (item.relation == 1 ? 'active' : '')"
                    >
                        <div class="icon">
                            <image
                                style="width: 12px;height: 12px"
                                v-if="item.relation === 1"
                                src="/static/images/fensi_guanzhu.svg"
                                mode="aspectFit"
                            />
                            <image
                                style="width: 12px;height: 12px"
                                v-if="item.relation === 2"
                                src="/static/images/fensi_gou.svg"
                                mode="aspectFit"
                            />
                            <image
                                style="width: 12px;height: 12px"
                                v-if="item.relation === 3"
                                src="/static/images/fensi_xianghu.svg"
                                mode="aspectFit"
                            />
                        </div>
                        <div class="word" v-if="item.relation === 1">关注</div>
                        <div class="word" v-if="item.relation === 2">已关注</div>
                        <div class="word" v-if="item.relation === 3">相互关注</div>
                    </div>
                </div>
                <div class="empty" v-if="followList && followList.length == 0">暂无关注的人</div>
                <p class="no-more" style="margin-top: 30px;" v-if="followList.length > 0 && noMoreFollows">没有更多</p>
            </div>
            <div class="m_fans_list" v-if="type === 1">
                <div
                    v-for="(item, index) in fansList"
                    :key="index"
                    :data-type="item.silder"
                    class="m_fans_item clearfix"
                    @touchstart="touchStart($event, item.relation)"
                    @touchend="touchEnd($event, index, item.relation)"
                    @click="recover(index)"
                >
                    <div class="avatar_box fl clearfix" @click.stop="toCheckUser(item.displayId)">
                        <image class="fl" :src="item.avatarUrl" mode="aspectFit" alt="avatar" />
                        <span class="name fl f36 color-333">{{ item.name }}</span>
                    </div>
                    <div
                        @click="fansItemClick(item, item.relation)"
                        :class="'forkBtn ' + (item.relation == 1 ? 'active' : '')"
                    >
                        <div class="icon">
                            <image
                                style="width: 12px;height: 12px"
                                v-if="item.relation === 1"
                                src="/static/images/fensi_guanzhu.svg"
                                mode="aspectFit"
                            />
                            <image
                                style="width: 12px;height: 12px"
                                v-if="item.relation === 2"
                                src="/static/images/fensi_gou.svg"
                                mode="aspectFit"
                            />
                            <image
                                style="width: 12px;height: 12px"
                                v-if="item.relation === 3"
                                src="/static/images/fensi_xianghu.svg"
                                mode="aspectFit"
                            />
                        </div>
                        <div class="word" v-if="item.relation === 1">关注</div>
                        <div class="word" v-if="item.relation === 2">已关注</div>
                        <div class="word" v-if="item.relation === 3">相互关注</div>
                    </div>
                    <div class="removeFans" @click="removeFans(item)">
                        <span class="line"></span>移除粉丝
                    </div>
                </div>
                <div class="empty" v-if="fansList && fansList.length == 0">暂无粉丝</div>
                <p class="no-more" style="margin-top: 30px;" v-if="fansList.length > 0 && noMoreFans">没有更多</p>
            </div>
        </scroll-view>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import {UserApi} from '@/api/User.js'
export default {
    data() {
        return {
            type: 1, //1 粉丝，2 关注
            followList: [],
            fansList: [],
            startX: 0,
            endX: 0,
            navBarHeight: this.$NavBarHeight,
            fansPageNo: 1,
            followsPageNo: 1,
            pageSize: 10,
            noMoreFans: false,
            noMoreFollows: false,
            scrollTop: 0,
            fansScrollTop: 0,
            followScrollTop: 0
        }
    },
    onShow() {
        if (this.fansList && this.fansList.length > 0) {
            this.fansList = this.fansList.map(item => {
                item.silder = 0
                return item
            })
        }
    },
    onLoad: function(options) {
        this.init()
        this.type = Number(options.source)
        this.displayId = options.id
        this.getFollowsFansList(1)
        this.getFollowsFansList(2)
    },
    computed: {
        padHeight() {
            return `calc(100vh - ${this.navBarHeight + 44}px)`
        }
    },
    components: {
        'navigation-bar': NavigationBar
    },

    methods: {
        // 初始化
        init() {
            this.fansList = []
            this.followList = []
            this.scrollTop = 0
            this.fansScrollTop = 0
            this.followScrollTop = 0
            this.fansPageNo = 1
            this.followsPageNo = 1
            this.noMoreFans = false
            this.noMoreFollows = false
        },
        // 跳转到个人资料页
        toCheckUser(id) {
            wx.navigateTo({
                url: '/pages/checkUser/main?displayId=' + id
            })
        },

        getFollowsFansList(type) {
            let self = this
            let pageNo = type === 1 ? self.fansPageNo : self.followsPageNo
            UserApi.getFollowsFans(
                {
                    relationType: type,
                    pageNo: pageNo,
                    pageSize: self.pageSize
                },
                self.displayId
            ).then((res) => {
                let data = res.data.data
                if (type === 1 && !self.noMoreFans) {
                    // 粉丝
                    let result = data.map((item) => {
                        item.slider = 0
                        return item
                    })
                    self.noMoreFans = res.data.totalPage <= self.fansPageNo
                    self.fansPageNo += 1
                    self.fansList = self.fansList.concat(result)
                } else if (type === 2 && !self.noMoreFollows) {
                    self.noMoreFollows = res.data.totalPage <= self.followsPageNo
                    self.followsPageNo += 1
                    self.followList = self.followList.concat(data)
                }
            })
        },

        scroll(e) {
            // this.scrollTop = e.mp.detail.scrollTop
        },

        changeTab(index) {
            let self = this
            self.scrollTop = 0
            self.type = index
            self.fansPageNo = 1
            self.followsPageNo = 1
            self.noMoreFans = false
            self.noMoreFollows = false
            let pageNo = index === 1 ? self.fansPageNo : self.followsPageNo
            UserApi.getFollowsFans(
                {
                    relationType: index,
                    pageNo: pageNo,
                    pageSize: self.pageSize
                },
                self.displayId
            ).then((res) => {
                let data = res.data.data
                if (index === 1 && !self.noMoreFans) {
                    // 粉丝
                    let result = data.map((item) => {
                        item.slider = 0
                        return item
                    })
                    self.noMoreFans = res.data.totalPage <= self.fansPageNo
                    self.fansPageNo += 1
                    self.fansList = result
                } else if (index === 2 && !self.noMoreFollows) {
                    self.noMoreFollows = res.data.totalPage <= self.followsPageNo
                    self.followsPageNo += 1
                    self.followList = data
                }
            })

            // if (index === 1) {
            //     this.scrollTop = this.fansScrollTop + 'px'
            // } else {
            //     this.scrollTop = this.followScrollTop + 'px'
            // }
            // this.getFollowsFansList(index)
        },

        // 关注
        follow(item) {
            UserApi.followUser({
                targetUserDisplayId: item.displayId
            }).then((res) => {
                if (res.statusCode === 200) {
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
            UserApi.cancelFollowUser({
                targetUserDisplayId: item.displayId
            }).then((res) => {
                if (res.statusCode === 200) {
                    item.relation = 1
                } else {
                    wx.showToast({
                        title: '取消关注失败',
                        icon: 'none'
                    })
                }
            })
        },

        // 移除粉丝
        cancelFans(item) {
            UserApi.cancelFollowUser({
                followerDisplayId: item.displayId
            }).then((res) => {
                if (res.statusCode === 200) {
                    this.fansList = this.fansList.filter((elem) => {
                        return elem.displayId !== item.displayId
                    })
                } else {
                    wx.showToast({
                        title: '移除粉丝失败',
                        icon: 'none'
                    })
                }
            })
        },

        followItemClick(item) {
            let self = this
            if (item.relation !== 1) {
                wx.showModal({
                    content: '是否取消关注',
                    success(res) {
                        if (res.confirm) {
                            self.cancelFollow(item)
                        }
                    }
                })
            } else {
                // 关注
                let isFans = self.fansList.filter(e => {
                    return e.displayId === item.displayId
                })
                isFans.length > 0 ? item.relation = 3 : item.relation = 2
                self.follow(item)
            }
        },

        fansItemClick(item, status) {
            let self = this
            if (status === 1) {
                // 关注
                item.relation = 3
                self.follow(item)
            } else {
                wx.showModal({
                    content: '是否取消关注',
                    success(res) {
                        if (res.confirm) {
                            self.cancelFollow(item)
                        }
                    }
                })
            }
        },
        // 滑动开始
        touchStart(e, status) {
            // 获取移动距离，可以通过打印出e，然后分析e的值得出
            this.startX = e.mp.changedTouches[0].clientX
        },
        //滑动结束
        touchEnd(e, index, status) {
            // 获取移动距离
            this.endX = e.mp.changedTouches[0].clientX
            if (this.startX - this.endX > 20) {
                this.fansList = this.fansList.map(item => {
                    item.silder = 0
                    return item
                })
                let temp = this.fansList[index]
                temp.silder = 1
                this.$set(this.fansList, index, temp)
            } else if (this.startX - this.endX < -10) {
                let temp = this.fansList[index]
                temp.silder = 0
                this.$set(this.fansList, index, temp)
            }
        },
        // 点击回复原状
        recover(index) {
            let temp = this.fansList[index]
            temp.silder = 0
            this.$set(this.fansList, index, temp)
        },
        // 点击移除粉丝按钮
        removeFans(fansId) {
            let self = this
            wx.showModal({
                title: '',
                content: '确定要移除粉丝？',
                success(res) {
                    if (res.confirm) {
                        self.cancelFans(fansId)
                    } else if (res.cancel) {
                        console.log('用户点击取消')
                    }
                }
            })
        }
    },
    created() {}
}
</script>

<style scoped></style>
