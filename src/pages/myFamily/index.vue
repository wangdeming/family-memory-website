<!--
* @des:  文件说明
* @date: 2020-03-02 15:22:00
* @version:  1.0
* 
* Date                   Author               Description
* ------------------------------------------------------
* 2020-02-28             邓紅麗               创建
* 2020-03-02             邓紅麗               優化
* 2020-04-07             曹磊                 交互
-->
<template>
    <div class="my_Family">
        <navigation-bar showBack :title="title"></navigation-bar>
        <scroll-view scroll-y @scrolltolower="getMore" class="family_top">
            <div class="home_top bg-fff">
                <img class="bar_pic" src="../../assets/images/family_bar_pic.svg" alt="" />
                <img class="bar_jia"  @click="toSetFamilyInfo(familyInfo.id)" src="../../assets/images/family_jia.svg" alt="" />
                <div class="fa_name bg-fff">
                    <div class="name">
                        <text @click="toSetFamilyInfo(familyInfo.id)">{{ familyInfo.name }}</text>
                    </div>
                    <span
                        :class="'change_fa ' + (showFamilyList ? 'active' : '')"
                        @click="showFamilyList = !showFamilyList"
                        >切换
                        <img src="../../assets/images/family_xiala.svg" alt="" />
                        <div class="model-list" v-show="showFamilyList">
                            <div
                                class="family-item"
                                v-for="item in familyList"
                                :key="item"
                                @click="GetFamilyInfo(item.id)"
                            >
                                <div class="word">{{ item.name }}</div>
                            </div>
                            <div class="family-item" v-if="CreateFamilyAble" @click="toCreateFamily">
                                <div class="icon-add"
                                    ><text style="font-size: 18px;">+</text>创建家庭</div
                                >
                            </div>
                        </div>
                    </span>
                </div>
            </div>
            <div class="family_number bg-fff">
                <div class="main_mumber" v-if="type == 1">
                    <img class="huangguan" src="../../assets/images/family_huangguan.svg" alt="" />
                    <img
                        class="touxiang"
                        v-for="item in familyInfo.memberList"
                        :key="item"
                        :data-id="item.displayId"
                        :src="item.avatarUrl"
                        alt=""
                    />
                    <navigator
                        hover-class="none"
                        style="display: inline-block"
                        :url="'/pages/familyIndexBar/main?from=addBtn&familyId=' + familyInfo.id + '&familyName=' + familyInfo.name">
                        <img
                            class="add_mun"
                            v-if="familyInfo.visitorIsAdmin"
                            src="../../assets/images/family_add.svg"
                            alt=""
                        />
                    </navigator>
                </div>
            </div>
            <div class="family_Memories">
                <div class="memories_Title bg-fff"> 家庭回忆（{{ totalCount }}） </div>
                <div class="memories_Con" v-if="familyArticleList.length > 0">
                    <div  v-for="(item, index) in familyArticleList" :key="index">
                        <div class="memories_list mb-30" 
                            v-if="item.visibilityType == 1" 
                            @click="toArticleDetail(item)"
                        >
                            <div class="list_Title">
                                {{ item.title }}
                            </div>
                            <div class="list_Image">
                                <img mode="aspectFill" :src="item.coverPictureUrl" alt="" />
                                <!-- <div class="caozuo">
                                    <span>公开</span>
                                    <span>共同编辑</span>
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
                                <div class="fr more_btn" v-if="item.visitorIsAuthor || item.visitorEditAllowed" @click.stop="handler(item, index)"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="no-more py-30" v-if="noMore">没有更多了</p>
            </div>
        </scroll-view>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import {FamilyApi} from '@/api/Family.js'
import {Article} from '@/api/Article.js'
export default {
    data() {
        return {
            type: 1,
            title: '我的家庭',
            optionsFamilyId: '',
            showFamilyList: false, //展示家庭列表
            familyList: [], //家庭列表
            familyInfo: '', //家庭信息
            getArticleListParams: {
                pageNo: 1,
                pageSize: 10,
                familyId: ''
            }, //获取家庭文章列表参数
            CreateFamilyAble: true, //用户是否可以继续创建家庭
            totalCount: 0, //文章数量
            familyArticleList: [], // 家庭文章列表
            noMore: false,
            isToCreate: ''
        }
    },
    computed: {},
    components: {
        'navigation-bar': NavigationBar
    },
    onLoad(options) {
        this.optionsFamilyId = options.familyId
        this.isToCreate = options.isToCreate ? options.isToCreate : ''
    },
    onShow() {
        this.init()
        console.log(getApp().articeTitle)
        if (getApp().articeTitle) {
            this.familyArticleList = getApp().articeData
        }
    },
    methods: {
        init() {
            //页面初始化
            this.showFamilyList = false
            this.getFamilyList()
            this.getUserCreateAble()
        },
        // 用户是否可以继续创建家庭
        getUserCreateAble() {
            FamilyApi.CreateFamilyAble().then((res) => {
                if (res.statusCode === 200) {
                    this.CreateFamilyAble = res.data
                }
            })
        },
        // 获取家庭列表（简单的家庭列表）
        getFamilyList() {
            FamilyApi.GetUserFamilyList({
                simpleData: true
            }).then((res) => {
                if (res.statusCode === 200) {
                    this.familyList = res.data
                    
                    let familyId = this.optionsFamilyId || getApp().currentFamily || this.familyList[0].id

                    if (this.isToCreate) {
                        familyId = this.familyList[0].id
                    }

                    this.GetFamilyInfo(familyId)
                }
            })
        },
        // 获取单个家庭信息
        GetFamilyInfo(id) {
            getApp().currentFamily = id
            this.noMore = false
            this.familyArticleList = []
            FamilyApi.GetFamilyInfo(id).then((res) => {
                if (res.statusCode === 200) {
                    this.familyInfo = res.data
                    this.getFamilyArticle(res.data.id)
                }
            })
        },

        // 获取家庭文章列表
        getFamilyArticle(familyId) {
            let that = this
            that.getArticleListParams.familyId = familyId
            if (!that.noMore) {
                Article.Articleslist(that.getArticleListParams).then((res) => {
                    if (res.statusCode === 200) {
                        that.noMore = res.data.totalPage <= that.getArticleListParams.pageNo
                        that.totalCount = res.data.totalCount
                        that.familyArticleList = that.familyArticleList.concat(res.data.data)
                        getApp().articeData = that.familyArticleList
                    } else {
                        wx.showToast({
                            title: '查询家庭文章失败',
                            icon: 'none'
                        })
                    }
                })
            }
        },
        handler(item, Editindex) {
            let self = this
            let itemList = []
            if (item.visitorIsAuthor) { //为第一作者
                itemList = ['编辑', '设置', '删除']
            } else { //是否可以编辑
                if (item.visitorEditAllowed) {
                    itemList = ['编辑']
                }
            }
            wx.showActionSheet({
                itemList: itemList,
                success(res) {
                    switch (
                        res.tapIndex //编辑
                    ) {
                        case 0:
                            getApp().articeParts = []
                            getApp().articeData = []
                            getApp().articedraftData = []
                            getApp().editArticleId = ''
                            getApp().articeTitle = ''
                            getApp().from = ''
                            getApp().Editindex = Editindex
                            // 这里写编辑代码
                            var params = {
                                guId: getApp().guid,
                                isEdit: true
                            }
                            Article.ArticlesDetails(params, item.id).then((res) => {
                                if (res.statusCode === 200) {
                                    getApp().articeParts = res.data.sectionList //段落列表
                                    getApp().deleteData = [] //删除的段落id数组
                                    wx.navigateTo({
                                            url:
                                                '/pages/publishStep1/main?from=Editarticle&id=' +
                                                item.id +
                                                '&title=' +
                                                encodeURIComponent(item.title)
                                        })
                                }
                            })
                            break
                        case 1:
                            // 这里写设置代码
                            wx.navigateTo({
                                url: '/pages/addset/main?from=mine&id=' + item.id
                            })
                            break
                        case 2:
                            // 这里写删除代码
                            wx.showModal({
                                content: '是否确认删除',
                                success: (res) => {
                                    if (res.confirm) {
                                        //确认删除逻辑
                                        Article.Deletearticle('', item.id).then((res) => {
                                            if (res.statusCode === 200) {
                                                self.articlesList = []
                                                self.init()
                                                if (self.tabState === 1) {
                                                    self.getUserArticles()
                                                }
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
        toArticleDetail(item) {
            let visitorIsAuthor = item.visitorIsAuthor ? 'visitorIsAuthor' : ''
            let visitorEditAllowed = item.visitorEditAllowed ? 'visitorEditAllowed' : ''
            wx.navigateTo({
                url: '/pages/articeDetail/main?from=mine&id=' +
                    item.id +
                    '&type=' +
                    'minefamily' +
                    '&visitorIsAuthor=' +
                    visitorIsAuthor +
                    '&visitorEditAllowed=' +
                    visitorEditAllowed
            })
        },
        toCreateFamily() {
            wx.navigateTo({
                url: '/pages/familyIndexBar/main?isToCreate=isToCreate'
            })
        },
        // 获取更多
        getMore() {
            if (!this.noMore) {
                this.getArticleListParams.pageNo++
                this.getFamilyArticle()
            }
        },
        // 跳转到家庭设置页面
        toSetFamilyInfo(familyId) {
            wx.navigateTo({
                url: '/pages/familySet/main?familyId=' + familyId
            })
        }
    }
}
</script>

<style scoped lang="less">
</style>
