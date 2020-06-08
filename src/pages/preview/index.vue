<!--
* @des: 预览文章页面
* @date: 2020-03-04 09:03:39
* @version:  1.0
*
* Date                   Author               Description
* ------------------------------------------------------
* 2020-03-04             曹天笑               创建
* 2020-03-10             邓紅麗               优化
* 2020-03-26             邓紅麗               优化
-->
<template>
    <div class="m_preview">
        <navigation-bar showBack title="预览"></navigation-bar>
        <div class="done_line" @click.stop="closeMsg()">
            <div class="btn btn_done" @click.stop="complete()">完成</div>
        </div>
        <div
            class=" m_artice_detail pb_200"
            :style="{backgroundColor: details.textbgcolor}"
            @click.stop="closeMsg()"
        >
            <div
                class="content_box"
                :style="(activeIndex === -1 ? '' : 'font-family: templateFont;') + 'height: auto'"
            >
                <div class="artice_detail">
                    <div class="container">
                        <div class="defaulttitle" v-if="details.type == 1">
                            <div class="title">{{ inputTitle }}</div>
                            <div class="author_line clearfix">
                                <div class="avatar_box fl">
                                    <image mode="aspectFill" :src="avatarUrl" />
                                </div>
                                <div class="author_detail fl">
                                    <div class="author_name">{{ nickName }}</div>
                                    <div class="author_time">{{ currentdate }}</div>
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
                                <div class="avatar_box">
                                    <image mode="aspectFill" :src="avatarUrl" />
                                </div>
                                <div class="author_name">{{ nickName }} </div>

                                <div class="title">{{ inputTitle }}</div>
                                <div class="author_time">{{ currentdate }}</div>
                            </div>
                        </div>
                        <!-- 
                            sectionType: 1 文本，2 图片，3 音频，4 视频
                            compositionType:1 //字上图下 2字下图上
                        -->
                        <div class="artice_main" v-for="(item, index) in parts" :key="index">
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
                                </div>
                                <div class="media video">
                                    <video
                                        id="myVideo"
                                        :controls="videoSetting.controls"
                                        :show-fullscreen-btn="videoSetting.showFullscreenBtn"
                                        :show-center-play-btn="videoSetting.showCenterPlayBtn"
                                        :object-fit="videoSetting.objectFit"
                                        :show-progress="videoSetting.showProgress"
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
                    </div>
                </div>
            </div>
        </div>
        <div class="set_style clearfix" :style="isNewModel ? 'padding-bottom: 34px' : ''">
            <div
                class="style_item  fl"
                :class="current === 'template' && msgShow ? 'active' : ''"
                @click="toGoal('template')"
            >
                <div class="icon icon_mb "></div>
                <p class="word">模板</p>
            </div>
            <div
                class="style_item fl"
                :class="current === 'music' && msgShow ? 'active' : ''"
                @click="toGoal('music')"
            >
                <div class="icon icon_yy"></div>
                <p class="word">音乐</p>
            </div>
            <div
                class="style_item fl"
                :class="current === 'Font' && msgShow ? 'active' : ''"
                @click="toGoal('Font')"
            >
                <div class="icon icon_zt"></div>
                <p class="word">字体</p>
            </div>
            <div
                class="style_item fl"
                :class="current === 'style' && msgShow ? 'active' : ''"
                @click="toGoal('style')"
            >
                <div class="icon icon_ys"></div>
                <p class="word">样式</p>
            </div>
        </div>
        <div class="template_style" v-show="msgShow" :style="isNewModel ? 'bottom: 84px' : ''">
            <div class="template" v-if="current === 'template'">
                <!-- @change="gettemplateDetails" 点击事件van-tabs  -->
                <van-tabs animated>
                    <van-tab v-for="(item, index) in templateDate" :key="index" :title="item.name">
                        <!-- 暂时只有2个，所以默认设置为2  -->
                        <swiper class="tap_swiper" :display-multiple-items="templateDatelength">
                            <swiper-item
                                class="tap_item"
                                v-for="(item1, index1) in templatelist"
                                :key="index1"
                                @click="seltemplate(index1, item1.id)"
                            >
                                <div class="item">
                                    <img
                                        :src="item1.pictureUrl"
                                        alt=""
                                        :class="activetemplateIndex === index1 ? 'active' : ''"
                                    />
                                </div>
                                <p class="name">{{ item1.name }}</p>
                            </swiper-item>
                        </swiper>
                    </van-tab>
                </van-tabs>
            </div>
            <div class="music" v-if="current === 'music'" :key="index">
                <van-tabs :active="active" animated @change="onClickmusic">
                    <van-tab v-for="(item, index) in musicDate" :key="index" :title="item.name">
                        <swiper class="tap_swiper" :display-multiple-items="musicDatelength">
                            <swiper-item
                                class="tap_item"
                                v-for="(item1, index1) in musiclist"
                                :key="index1"
                                @click="selmusic(item1, index1)"
                            >
                                <div class="item">
                                    <img
                                        :src="item1.pictureUrl"
                                        alt=""
                                        :class="musicId == item1.id ? 'active' : ''"
                                    />
                                </div>
                                <p :class="musicId == item1.id ? 'name active' : 'name'">{{
                                    item1.name
                                }}</p>
                            </swiper-item>
                        </swiper>
                    </van-tab>
                </van-tabs>
            </div>
            <div class="Font" v-if="current === 'Font'">
                <swiper
                    class="tap_swiper"
                    :display-multiple-items="fontsDatelength"
                    next-margin="30px"
                >
                    <swiper-item class="tap_item" :class="activeIndex === -1 ? 'active' : ''">
                        <div class="item" @click="selectFont(-1, '')">
                            <p class="name">默认字体</p>
                        </div>
                    </swiper-item>
                    <swiper-item
                        class="tap_item"
                        v-for="(item, index) in fontsDate"
                        :key="index"
                        :class="activeIndex === index ? 'active' : ''"
                    >
                        <div class="item" @click="selectFont(index, item.id)">
                            <p class="name">{{ item.name }}</p>
                        </div>
                    </swiper-item>
                </swiper>
            </div>
            <div class="style" v-if="current === 'style'">
                <div class="style_lists">
                    <div
                        class="list"
                        :class="compositionType === 1 ? 'active' : ''"
                        @click="selectType(1)"
                    >
                        <span class="wenzi">字上图下</span>
                    </div>
                    <div
                        class="list"
                        :class="compositionType === 2 ? 'active' : ''"
                        @click="selectType(2)"
                    >
                        <span class="wenzi">字下图上</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import {Article} from '@/api/Article.js'
export default {
    data() {
        return {
            bgimg: '',
            details: {
                type: 1, //头像摆放位置（左对齐、 居中） type： 1 / 2
                themecolor: '#FD6258'
            },
            // 视频播放器配置
            videoSetting: {
                controls: true,
                showFullscreenBtn: false,
                showCenterPlayBtn: false,
                showProgress: true,
                src: '',
                objectFit: 'cover'
            },
            current: 'template', //默认选择模板格式
            msgShow: true,
            visitorIsAuthor: true,
            nickName: '',
            avatarUrl: '',
            from: '',
            // 模板
            active: '', //默认展示分类列表
            musicThemeId: '', //分类列表id
            articleId: '', //编辑时的文章id
            templateId: '', //模板id
            activetemplateIndex: 0, //默认模板
            musicId: '', //音乐id
            activemusicIndex: '', //默认音乐
            contentFontId: '', //字体id
            activeIndex: -1, //默认字体
            compositionType: 1,
            inputTitle: '', //标题文字
            parts: [], //文章段落
            currentdate: '', // 获取当前时间
            templateDate: [], //模板主题数据
            templatelist: [], //模板列表数据
            templateDatelength: 2, //现在只有两个，设置默认数据
            musicDate: [], //音乐主题数据
            musiclist: [], //音乐列表数据
            musicDatelength: 0,
            fontsDate: [], //字体主题数据
            fontsDatelength: 0,
            audioObj: '',
            isNewModel: false,
            currentMusicThemeIndex: -1 //当前的音乐主题
        }
    },
    components: {
        'navigation-bar': NavigationBar
    },
    onLoad(options) {
        this.audioObj = wx.createInnerAudioContext()
        this.inputTitle = decodeURIComponent(options.title) //图文标题
        this.init()
        this._getTemplateThemes()
        this._getMusicThemes()
        this._getfontsThemes()
        this.from = options.from
        this.articleId = options.id //编辑id
        if (this.articleId) {
            setTimeout(() => {
                this._getArticlesDetails() //文章详情
            }, 1000)
            this.parts = getApp().articeParts
        }
    },
    onShow() {
        this.activemusicIndex = -1
    },
    onHide() {
        this.audioObj.pause()
    },
    created() {
        const systemInfo = wx.getSystemInfoSync()
        const ratio = systemInfo.screenHeight / systemInfo.screenWidth // 高宽比例
        this.isNewModel = ratio >= 2 && systemInfo.model.indexOf('iPhone') >= 0
    },
    methods: {
        init() {
            this.parts = getApp().articeParts //图文列表
            if (!this.articleId) {
                this.nickName = getApp().userInfo.name //用户名字
                this.avatarUrl = getApp().userInfo.avatarUrl //用户头像
            }
            var date = new Date()
            var year = date.getFullYear()
            var month = date.getMonth() + 1
            var strDate = date.getDate()
            this.currentdate = year + '-' + month + '-' + strDate //当前时间
            this.current = 'template' //初始化展示模板选择
            this.msgShow = true //初始化
            this.activeIndex = -1
            this.activetemplateIndex = 0 //默认模板
            this.active = 0
            this.templateId = ''
            this.details = {
                type: 1, //头像摆放位置（左对齐、 居中） type： 1 / 2
                themecolor: '#FD6258'
            }
        },
        // 查询文章详情
        _getArticlesDetails() {
            var params = {
                guId: getApp().guid
            }
            Article.ArticlesDetails(params, this.articleId).then((res) => {
                if (res.statusCode === 200) {
                    if (getApp().editArticleId) {
                        this.avatarUrl = res.data.avatarUrl //用户头像
                        this.nickName = res.data.authorName //用户名字
                    }
                    this.compositionType = res.data.compositionType //图文样式:1 字上图下,2 字下图上
                    this.templateId = res.data.templateId //模板id
                    if (this.templateId) {
                        this.templatelist.find((value, index, arr) => {
                            if (value.id === this.templateId) {
                                this.activetemplateIndex = index //默认展示
                            }
                        })
                        this._gettemplateDetails(res.data.templateId) //模板详情
                    } else {
                        this.activetemplateIndex = 0 //编辑获取的文章id
                    }
                    this.musicThemeId = res.data.musicThemeId //分类列表id
                    this.musicId = res.data.musicId //音乐id
                    if (this.musicThemeId) {
                        this.musicDate.find((value, index, arr) => {
                            //获取音乐主题列表
                            if (value.id === this.musicThemeId) {
                                this.active = index //默认展示
                            }
                        })
                        this._getmusicDetails(res.data.musicThemeId).then((elem) => {
                            let item = ''
                            this.musiclist.filter((e) => {
                                if (e.id === this.musicId) {
                                    item = e
                                    return false
                                }
                            })
                            this.audioObj.src = item.fileUrl
                            this.audioObj.play()
                        }) //默认详情
                    }
                    this.contentFontId = res.data.contentFontId //字体id
                    if (this.contentFontId) {
                        this._getfontsDetails(res.data.contentFontId) //字体详情
                        this.fontsDate.find((value, index, arr) => {
                            if (value.id === this.contentFontId) {
                                this.activeIndex = index //默认展示
                            }
                        })
                    } else {
                        this.activeIndex = -1
                    }
                }
            })
        },
        // 获取模板主题列表
        _getTemplateThemes() {
            Article.templateThemes().then((res) => {
                if (res.statusCode === 200) {
                    this.templateDate = res.data
                    this._gettemplatelist(res.data[0].id)
                }
            })
        },
        // 获取模板列表
        _gettemplatelist(id) {
            Article.templatelist({templateThemeId: id}).then((res) => {
                if (res.statusCode === 200) {
                    this.templatelist = res.data
                    if (res.data && res.data.length > 0) {
                        this.templateDatelength = res.data.length < 5 ? res.data.length : 4
                    }
                }
            })
        },
        // 获取音乐主题列表
        _getMusicThemes() {
            Article.musicThemes().then((res) => {
                if (res.statusCode === 200) {
                    this.musicDate = res.data
                    this._getmusicDetails(res.data[0].id)
                }
            })
        },
        // 获取首先显示默认音乐列表
        _getmusicDetails(id) {
            return new Promise((resolve, reject) => {
                Article.musiclist({musicThemeId: id}).then((res) => {
                    if (res.statusCode === 200) {
                        this.musiclist = res.data
                        if (res.data && res.data.length > 0) {
                            this.musicDatelength = res.data.length < 5 ? res.data.length : 4
                        }
                        resolve()
                    } else {
                        reject(res)
                    }
                })
            })
        },
        // 点击音乐主题列表
        onClickmusic(name) {
            var musicname = name.mp.detail.title
            this.musicDate.find((value, index, arr) => {
                if (value.name === musicname) {
                    this._getmusicDetails(value.id)
                }
            })
        },
        // 获取字体列表
        _getfontsThemes() {
            Article.fontsThemes().then((res) => {
                if (res.statusCode === 200) {
                    this.fontsDate = res.data
                    if (res.data && res.data.length > 0) {
                        this.fontsDatelength = res.data.length < 4 ? res.data.length : 3
                    }
                }
            })
        },
        //选择模板
        seltemplate(index, id) {
            this.activetemplateIndex = index
            this.templateId = id
            this._gettemplateDetails(id) //模板详情
        },
        // 模板详情
        _gettemplateDetails(id) {
            //模板详情
            Article.templateDetails('', id).then((res) => {
                if (res.statusCode === 200) {
                    this.details = res.data.jsonProperties
                    this.bgimg = res.data.bgimg
                }
            })
        },
        //选择音乐
        selmusic(item, index) {
            this.audioObj.stop()
            this.audioObj.src = item.fileUrl
            if (this.musicId !== item.id) {
                this.activemusicIndex = index
                this.musicId = item.id
                this.audioObj.play()
            } else {
                this.activemusicIndex = -1
                this.musicId = ''
                this.audioObj.pause()
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
        // 选择字体格式
        selectFont(index, id) {
            this.activeIndex = index
            this.contentFontId = id
            if (index !== -1) {
                //字体详情
                this._getfontsDetails(id)
            } else {
            }
        },
        // 完成
        complete() {
            if (this.from === 'Editarticle' || this.from === 'draftBox') {
                var editparams = {
                    title: this.inputTitle, //文章标题
                    id: this.articleId,
                    templateId: this.templateId, //模板id
                    musicId: this.musicId, //音乐id
                    contentFontId: this.contentFontId, //字体id
                    compositionType: this.compositionType, //图文样式:1字上图下2 字下图上
                    sectionList: this.parts, //段落列表
                    deleteSectionIdList: getApp().deleteData
                }
                console.log(editparams)
                Article.Editarticles(editparams).then((res) => {
                    if (res.statusCode === 200) {
                        this.visitorIsAuthor = res.data.visitorIsAuthor
                        if (this.visitorIsAuthor) {
                            if (this.from === 'Editarticle') {
                                wx.navigateTo({
                                    url: '/pages/addset/main?from=mine&id=' + res.data.articleId
                                })
                            } else {
                                wx.navigateTo({
                                    url: '/pages/addset/main?from=artic&id=' + res.data.articleId
                                })
                            }
                        } else {
                            wx.reLaunch({
                                url: '/pages/myFamily/main?from=mine'
                            })
                        }
                        this.compositionType = 1
                        this.contentFontId = ''
                        this.musicId = ''
                        this.templateId = ''
                    }
                })
            } else {
                var params = {
                    status: 5, //创建文章假数据状态值
                    title: this.inputTitle, //文章标题
                    templateId: this.templateId, //模板id
                    musicId: this.musicId, //音乐id
                    contentFontId: this.contentFontId, //字体id
                    compositionType: this.compositionType, //图文样式:1字上图下2 字下图上
                    sectionList: this.parts //段落列表
                }
                console.log(params)
                Article.Addarticles(params).then((res) => {
                    if (res.statusCode === 200) {
                        wx.navigateTo({
                            url: '/pages/addset/main?from=artic&id=' + res.data
                        })
                    }
                })
            }
        },
        // 跳转模板样式
        toGoal(name) {
            if (this.current !== name) {
                this.current = name
            } else {
                this.current = ''
            }
            this.msgShow = true
        },
        // 关闭模板样式
        closeMsg() {
            this.msgShow = false
        },
        // 选择字上图下
        selectType(type) {
            this.compositionType = type
        }
    },
    onUnload() {
        this.audioObj.destroy()
    }
}
</script>
<style scoped lang="less"></style>
