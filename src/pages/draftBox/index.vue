<!--
* @des:  文件说明
* @date: 2020-03-02 15:18:25
* @version:  1.0
* 
* Date                   Author               Description
* ------------------------------------------------------
* 2020-03-02             邓紅麗               创建
-->
<template>
    <div class="draft">
        <navigation-bar showBack :title="title"></navigation-bar>
        <div class="draft_Con">
            <scroll-view
                scroll-y
                style="height: 100vh;"
                lower-threshold="100rpx"
                @scrolltolower="_getDraftlist"
            >
                <div
                    class="item"
                    v-for="(item, index) in draftData"
                    :key="index"
                    @click.stop="toPreview(item.title, item.id)"
                >
                    <div class="draft_list">
                        <div class="list_Title">
                            {{ item.title }}
                        </div>
                        <div class="list_Image">
                            <img
                                v-if="item.coverPictureUrl === ''"
                                src="/static/images/pic.png"
                                alt=""
                                mode="aspectFill"
                            />
                            <img v-else :src="item.coverPictureUrl" mode="aspectFill" alt="" />
                        </div>
                        <div class="list_data">
                            <span
                                class="operating"
                                @click.stop="Editarticle(item.id, item.title, index)"
                                >编辑</span
                            >
                            <span class="operating" @click.stop="Deletearticle(item.id)">删除</span>
                            <span class="Publish" @click.stop="complete(item.id)">完成</span>
                        </div>
                    </div>
                </div>
                <p class="no-more" v-if="noMore">没有更多了</p>
            </scroll-view>
        </div>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import {Article} from '@/api/Article.js'
export default {
    data() {
        return {
            type: 1,
            title: '草稿箱',
            from: '',
            pageNo: 1,
            pageSize: 10,
            draftData: [],
            noMore: false //没有更多
        }
    },
    components: {
        'navigation-bar': NavigationBar
    },
    onLoad(options) {
        this.from = options.from
        if (this.from === 'mine') {
            this.draftData = []
        } else {
            if (getApp().articeTitle) {
                this.draftData = getApp().articedraftData
            }
        }
    },
    onShow() {
        this.pageNo = 1
        this.draftData = []
        this.noMore = false
        this._getDraftlist()
    },
    methods: {
        _getDraftlist() {
            var params = {
                pageNo: this.pageNo,
                pageSize: this.pageSize
            }
            if (!this.noMore) {
                Article.Draftlist(params).then((res) => {
                    if (res.statusCode === 200) {
                        if (res.data.data && res.data.data.length > 0) {
                            this.pageNo += 1
                            this.draftData = this.draftData.concat(res.data.data)
                            getApp().articedraftData = this.draftData
                        } else {
                            this.noMore = !this.noMore
                        }
                    }
                })
            }
        },
        // 编辑文章
        Editarticle(id, title, Editindex) {
            getApp().articeParts = []
            getApp().articeData = []
            getApp().articedraftData = []
            getApp().editArticleId = ''
            getApp().articeTitle = ''
            getApp().from = ''
            getApp().Editindex = Editindex
            var params = {
                guId: getApp().guid
            }
            Article.ArticlesDetails(params, id).then((res) => {
                if (res.statusCode === 200) {
                    getApp().articeParts = res.data.sectionList //段落列表
                    getApp().deleteData = [] //删除的段落id数组
                    wx.navigateTo({
                        url:
                            '/pages/publishStep1/main?from=draftBox&id=' +
                            id +
                            '&title=' +
                            encodeURIComponent(title)
                    })
                }
            })
        },
        // 删除文章
        Deletearticle(id) {
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
                                this.pageNo = 1
                                this.draftData = []
                                this.noMore = false
                                this._getDraftlist()
                            }
                        })
                    } else {
                        // 取消
                    }
                },
                fail: () => {}
            })
        },
        //发布
        complete(id) {
            wx.navigateTo({
                url: '/pages/addset/main?from=draftBox&id=' + id
            })
        },
        // 跳转到预览
        toPreview(title, id) {
            getApp().articeParts = []
            getApp().editArticleId = ''
            var params = {
                guId: getApp().guid,
                isEdit: true
            }
            Article.ArticlesDetails(params, id).then((res) => {
                if (res.statusCode === 200) {
                    getApp().articeParts = res.data.sectionList //段落列表
                    wx.navigateTo({
                        url:
                            '/pages/preview/main?title=' +
                            encodeURIComponent(title) +
                            '&id=' +
                            id +
                            '&from=' +
                            'draftBox'
                    })
                    getApp().editArticleId = id
                }
            })
        }
    },
    onUnload() {
        wx.switchTab({
            url: '/pages/mine/main'
        })
    }
}
</script>

<style scoped lang="less"></style>
