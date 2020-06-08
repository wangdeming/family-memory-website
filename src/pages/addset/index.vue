<!--
* @des:  文件说明
* @date: 2020-03-02 10:23:07
* @version:  1.0
* 
* Date                   Author               Description
* ------------------------------------------------------
* 2020-03-03            邓紅麗               创建
* 2020-04-02            邓紅麗              接口对接
-->
<template>
    <div class="add_set">
        <navigation-bar showBack :title="title"></navigation-bar>
        <div class="my_set">
            <div class="set_cover">
                <div class="cover_unplode">
                    <img class="marn_img" mode="aspectFill" :src="coverPictureUrl" alt="" />
                    <span class="change_cover" @click="UploadImage()">更换封面</span>
                </div>
                <div class="cover_title">
                    {{ articletitle }}
                </div>
            </div>
            <div class="Dline"></div>
            <div class="set_list">
                <ul>
                    <div class="set_item clearfix">
                        <li>
                            <span>分类</span>
                            <span class="fa_info" @click.stop="editArticle('one')">
                                <span v-if="selcategoryName == ''">{{ categoryName }}</span>
                                <span v-else>{{ selcategoryName }}</span>
                                <img src="/static/images/my_icon_more.svg" alt="" />
                            </span>
                        </li>
                    </div>
                    <div class="set_item clearfix">
                        <li>
                            <span>谁可以看</span>
                            <span class="fa_info" @click.stop="editArticle('two')">
                                <span v-if="selvisibilityTypeName == ''">{{
                                    visibilityTypeName
                                }}</span>
                                <span v-else>{{ selvisibilityTypeName }}</span>
                                <img src="/static/images/my_icon_more.svg" alt="" />
                            </span>
                        </li>
                    </div>
                    <div class="set_item clearfix">
                        <li>
                            <span>评论功能</span>
                            <span class="fa_info" @click.stop="editArticle('three')">
                                <span v-if="selcommentablityTypeName == ''">{{
                                    commentablityTypeName
                                }}</span>
                                <span v-else>{{ selcommentablityTypeName }}</span>
                                 <img src="/static/images/my_icon_more.svg" alt="" />
                            </span>
                        </li>
                    </div>
                    <div class="set_item clearfix" v-if="ISedit">
                        <li>
                            <span>共同编辑</span>
                            <span class="fa_info" @click.stop="EditableFamil()">
                                <span v-if="seleditableFamilyName == ''">{{
                                    editableFamilyName
                                }}</span>
                                <span v-else>{{ seleditableFamilyName }}</span>
                                <img src="/static/images/my_icon_more.svg" alt="" />
                            </span>
                        </li>
                    </div>
                </ul>
            </div>
            <button class="complain_com" @click="complete(2)">发布</button>
            <div class="save_draft" v-if="!show" @click="complete(1)">存草稿</div>
        </div>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import {Article} from '@/api/Article.js'
import {uploadFile} from '@/utils/uploadFile.js'
export default {
    data() {
        return {
            type: 1,
            title: '设置',
            show: false,
            textCount: 1, //文字上传图片，默认1
            from: '',
            tabData: [],
            familiesData: [],
            visibilityData: [
                {name: '所有人可见', id: 1},
                {name: '仅自己可见', id: 2}
            ],
            commentablityData: [
                {name: '所有人可评论', id: 1},
                {name: '我的粉丝可评论', id: 2},
                {name: '不可评论', id: 3}
            ],
            articleId: '',
            articletitle: '',
            coverPictureUrl: '',
            categoryId: '',
            categoryName: '',
            selcategoryName: '',
            visibilityType: '',
            visibilityTypeName: ' 所有人可见',
            selvisibilityTypeName: '',
            commentablityType: '',
            commentablityTypeName: ' 所有人可评论',
            selcommentablityTypeName: '',
            editableFamilyId: '',
            editableFamilyName: '',
            seleditableFamilyName: '',
            FamilyName: ' 不使用',
            ISshowFamily: false,
            ISedit: true,
            editName: ''
        }
    },
    computed: {},
    components: {
        'navigation-bar': NavigationBar
    },
    onLoad(options) {
        this.articleId = options.id
        this.from = options.from
    },
    onShow() {
        this.show = this.from === 'mine'
        this._getCategories()
        this._getfamilies()
        this._getConfiguration()
        this.init()
    },
    methods: {
        init() {
            this.selcategoryName = ''
            this.selvisibilityTypeName = ''
            this.selcommentablityTypeName = ''
            this.seleditableFamilyName = ''
            this.ISedit = true
            if (getApp().SetState.category) {
                this.tabData.forEach((item, index) => {
                    if (item.id === getApp().SetState.category) {
                        this.selcategoryName = item.categoryName
                        this.categoryId = item.id
                    }
                })
            }
            if (getApp().SetState.Whosee) {
                this.visibilityData.forEach((item, index) => {
                    if (item.id === getApp().SetState.Whosee) {
                        this.visibilityType = item.id
                        this.selvisibilityTypeName = item.name
                    }
                })
                this.ISedit = getApp().SetState.Whosee === 1
            }
            if (getApp().SetState.Whocomment) {
                this.commentablityData.forEach((item, index) => {
                    if (item.id === getApp().SetState.Whocomment) {
                        this.selcommentablityTypeName = item.name
                        this.commentablityType = item.id
                    }
                })
            }
            if (getApp().SetState.family) {
                this.familiesData.forEach((item, index) => {
                    if (item.id === getApp().SetState.family) {
                        this.seleditableFamilyName = item.name
                        this.editableFamilyId = item.id
                    }
                })
            } else {
                if (getApp().SetState.family === 0) {
                    this.editableFamilyId = 0 //家庭
                    this.seleditableFamilyName = '不使用'
                }
            }
        },
        // 查询文章类别列表
        _getCategories() {
            Article.Categories({isReject: true}).then((res) => {
                if (res.statusCode === 200) {
                    this.tabData = res.data
                }
            })
        },
        // 查询家庭列表
        _getfamilies() {
            var params = {
                simpleData: true,
                editAllowed: true
            }
            Article.getfamilies(params).then((res) => {
                if (res.statusCode === 200) {
                    this.familiesData = res.data
                    var Familylength = res.data.length
                    this.ISshowFamily = Familylength !== 0
                }
            })
        },
        // 获取文章配置信息
        _getConfiguration() {
            Article.getConfiguration('', this.articleId).then((res) => {
                if (res.statusCode === 200) {
                    this.articletitle = res.data.title
                    if (typeof res.data.coverPictureUrl !== 'undefined') {
                        this.coverPictureUrl = res.data.coverPictureUrl
                    }
                    if (typeof res.data.categoryId === 'undefined') {
                        if (getApp().SetState.category === '') {
                            this.categoryId = this.tabData[0].id //文章分类ID
                            this.categoryName = this.tabData[0].categoryName
                        }
                    } else {
                        this.categoryId = res.data.categoryId
                        this.categoryName = res.data.categoryName
                    }
                    if (typeof res.data.visibilityType === 'undefined') {
                        if (getApp().SetState.Whosee === '') {
                            this.visibilityType = this.visibilityData[0].id //1 所有，2 仅自己
                            this.visibilityTypeName = this.visibilityData[0].name
                            this.ISedit = true
                        }
                    } else {
                        this.visibilityType = res.data.visibilityType
                        this.visibilityTypeName = res.data.visibilityTypeName
                        if (getApp().SetState.Whosee === '') {
                            this.visibilityType = res.data.visibilityType
                            this.ISedit = this.visibilityType === 1 //设置了仅自己可见，共同编辑那一栏不能操作
                        }
                    }
                    if (typeof res.data.commentablityType === 'undefined') {
                        if (getApp().SetState.Whocomment === '') {
                            this.commentablityType = this.commentablityData[0].id //1: 所有人可评论，2 ：粉丝可评论，3：不可评论
                            this.commentablityTypeName = this.commentablityData[0].name
                        }
                    } else {
                        this.commentablityType = res.data.commentablityType
                        this.commentablityTypeName = res.data.commentablityTypeName
                    }
                    if (typeof res.data.editableFamilyId === 'undefined') {
                        if (getApp().SetState.family === '') {
                            this.editableFamilyId = 0 //家庭
                            this.editableFamilyName = '不使用'
                        }
                    } else {
                        this.editableFamilyId = res.data.editableFamilyId //家庭
                        this.editableFamilyName = res.data.editableFamilyName
                    }
                }
            })
        },
        UploadImage() {
            var _this = this
            wx.chooseImage({
                count: _this.textCount, // 文字上传选择的图片张，默认1
                sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有(ios才会返回压缩图，安卓需要手动压缩)
                success: (res) => {
                    wx.showLoading({
                        title: '加载中'
                    })
                    var imgsrc = res.tempFilePaths
                    if (res.tempFiles[0].size > 10 * 1024 * 1024) {
                        wx.showToast({
                            title: '单张图片不能超过10M',
                            icon: 'none'
                        })
                    } else {
                        uploadFile({
                            url: _this.$CONSTANTS.APPHOST + '/files',
                            path: imgsrc
                        }).then((j) => {
                            _this.coverPictureUrl = j.data
                            Article.Configuration({
                                id: _this.articleId,
                                coverPictureUrl: _this.coverPictureUrl
                            }).then((res) => {
                                if (res.statusCode !== 200) {
                                    wx.showToast({
                                        title: '更换封面失败',
                                        icon: 'none'
                                    })
                                }
                            })
                            wx.hideLoading()
                        })
                    }
                },
                fail: function() {},
                complete: function() {}
            })
        },
        editArticle(source) {
            if (source === 'one') {
                this.editName =
                    this.selcategoryName === '' ? this.categoryName : this.selcategoryName
            } else if (source === 'two') {
                this.editName =
                    this.selvisibilityTypeName === ''
                        ? this.visibilityTypeName
                        : this.selvisibilityTypeName
            } else if (source === 'three') {
                this.editName =
                    this.selcommentablityTypeName === ''
                        ? this.commentablityTypeName
                        : this.selcommentablityTypeName
            }
            wx.navigateTo({
                url: '/pages/addEditset/main?source=' + source + '&name=' + this.editName
            })
        },
        EditableFamil() {
            if (!this.ISshowFamily) {
                wx.showToast({
                    title: '请先创建/加入家庭后使用共同编辑功能',
                    icon: 'none',
                    duration: 3000
                })
            } else {
                this.editName =
                    this.seleditableFamilyName === ''
                        ? this.editableFamilyName
                        : this.seleditableFamilyName
                wx.navigateTo({
                    url: '/pages/addEditset/main?source=four' + '&name=' + this.editName
                })
            }
        },
        complete(status) {
            var params = {
                id: this.articleId, //文章id
                coverPictureUrl: this.coverPictureUrl, //封面
                status: status, //1 未发布（草稿文章），2 已发布
                categoryId:
                    this.selcategoryName === '' ? this.categoryId : getApp().SetState.category, //可共同编辑改文章的家庭名称, //文章分类ID
                visibilityType:
                    this.selvisibilityTypeName === ''
                        ? this.visibilityType
                        : getApp().SetState.Whosee, //1 所有，2 仅自己
                commentablityType:
                    this.selcommentablityTypeName === ''
                        ? this.commentablityType
                        : getApp().SetState.Whocomment, //1: 所有人可评论，2 ：粉丝可评论，3：不可评论
                editableFamilyId:
                    this.seleditableFamilyName === ''
                        ? this.editableFamilyId
                        : getApp().SetState.family, //可共同编辑改文章的家庭ID
                editableFamilyName:
                    this.seleditableFamilyName === ''
                        ? this.editableFamilyName
                        : this.seleditableFamilyName //可共同编辑改文章的家庭名称
            }
            Article.Configuration(params).then((res) => {
                if (res.statusCode === 200) {
                    if (status === 1) {
                        //草稿状态
                        wx.redirectTo({
                            url: '/pages/draftBox/main?id=' + this.articleId
                        })
                    } else {
                        //发布状态
                        wx.redirectTo({
                            url: '/pages/pubsuccess/main?id=' + this.articleId
                        })
                    }
                    getApp().SetState = {
                        category: '',
                        Whosee: '',
                        Whocomment: '',
                        family: ''
                    } //设置为原数据
                    getApp().articeTitle = ''
                    //  清空数组
                    getApp().articeParts.splice(0, getApp().articeParts.length)
                    getApp().deleteData.splice(0, getApp().deleteData.length)
                }
            })
        }
    },
    created() {}
}
</script>

<style scoped lang="less"></style>
