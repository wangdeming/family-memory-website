<!--
* @des:  文件说明
* @date: 2020-03-13 17:06:04
* @version:  1.0
* 
* Date                   Author               Description
* ------------------------------------------------------
* 2020-02-3              曹天笑               创建
* 2020-03-12             邓紅麗               优化修改
* 2020-05-13             邓紅麗               修改段落-添加文字的逻辑
-->
<template>
    <div>
        <!-- 展示预览图片 -->
        <div class="amplification" v-if="show" @click="hideimgage()">
            <img class="plus_img" :src="plus_img" mode="aspectFit" alt="" />
        </div>
        <div class="add-part" :catchtouchmove="showkelong ? 'true' : ''">
            <div class="btn_box">
                <div
                    class="add_btn"
                    :class="openType ? 'close' : ''"
                    @click.stop="openClose(null, -1)"
                ></div>
                <div class="add_type" :class="openType ? 'close' : ''">
                    <div class="type_item" @click="chooseImage(-1)">
                        <image
                            mode="aspectFill"
                            style="width: 24px;height: 23px;"
                            src="/static/images/tuwen_tupian.svg"
                        />
                        <p class="word">图片</p>
                    </div>
                    <div class="type_item" @click="toInputPage(-1)">
                        <image
                            mode="aspectFill"
                            style="width: 24px;height: 22px;"
                            src="/static/images/tuwen_wenzi.svg"
                        />
                        <p class="word">文字</p>
                    </div>
                    <div class="type_item" @click="choosevideo">
                        <image
                            mode="aspectFill"
                            style="width: 26px;height: 26px;"
                            src="/static/images/tuwen_shipin.svg"
                        />
                        <p class="word">视频</p>
                    </div>
                </div>
            </div>
            <div v-if="parts && parts.length > 0" class="listbox">
                <div
                    class="inputValue kelong"
                    v-if="showkelong"
                    :style="{top: newkelong.top + 'px'}"
                >
                    <div class="box clearfix">
                        <div class="left fl">
                            <image mode="aspectFill" :src="newkelong.src" ref="previewimg" />
                        </div>
                        <div class="right fl">
                            <div class="value" v-if="replace.wordDes">{{ newkelong.wordDes }}</div>
                            <div class="value" v-else>点击添加描述</div>
                        </div>
                        <div class="icon icon_del"></div>
                        <div class="icon icon_drag"></div>
                    </div>
                </div>
                <div v-for="(item, index) in parts" :key="item">
                    <div class="inputValue">
                        <div class="box clearfix">
                            <div class="left fl">
                                <!-- 文本 -->
                                <image
                                    v-if="item.sectionType == 1 && item.resourceUrl == null"
                                    mode="aspectFill"
                                    style="width: 100%;height: 100%;"
                                    src="/static/images/tuwen_list_pic1.svg"
                                    @click="textUploadImage(index)"
                                />
                                <image
                                    v-if="item.sectionType == 1 && item.resourceUrl != null"
                                    mode="aspectFill"
                                    :src="item.resourceUrl"
                                    @click="previewImage(index)"
                                />
                                <!-- 图片 -->
                                <image
                                    v-if="item.sectionType == 2"
                                    mode="aspectFill"
                                    :src="item.resourceUrl"
                                    ref="previewimg"
                                    @click="previewImage(index)"
                                />
                                <!-- 视频 -->
                                <video
                                    v-else-if="item.sectionType == 4"
                                    style="width: 100%;height: 100%;"
                                    id="myVideo"
                                    :src="item.resourceUrl"
                                    :controls="false"
                                    :show-fullscreen-btn="false"
                                    :show-center-play-btn="false"
                                    :object-fit="videoSetting.objectFit"
                                ></video>
                            </div>
                            <div class="right fl">
                                <div class="value" v-if="item.text" @click="toAddInputPage(index)"
                                    ><text>{{ item.text }}</text></div
                                >
                                <div class="value" v-else @click="toAddInputPage(index)"
                                    >点击添加描述</div
                                >
                            </div>
                            <div
                                class="icon icon_del"
                                @click.stop="deletePart(index, item.id)"
                            ></div>
                            <div
                                class="icon icon_drag"
                                @click.stop="showInfo()"
                                @longpress.stop="dragStart($event, index)"
                                @touchmove.prevent="dragMove($event, index)"
                                @touchend.prevent="dragEnd($event, index)"
                            ></div>
                        </div>
                    </div>

                    <div class="btn_box">
                        <div
                            class="add_btn"
                            :class="!item.showShareBtn ? 'close' : ''"
                            @click.stop="openClose(item, index)"
                        ></div>
                        <div class="add_type " :class="!item.showShareBtn ? 'close' : ''">
                            <div class="type_item" @click="chooseImage(index)">
                                <image
                                    mode="aspectFill"
                                    style="width: 24px;height: 23px;"
                                    src="/static/images/tuwen_tupian.svg"
                                />
                                <p class="word">图片</p>
                            </div>
                            <div class="type_item" @click="toInputPage(index)">
                                <image
                                    mode="aspectFill"
                                    style="width: 24px;height: 22px;"
                                    src="/static/images/tuwen_wenzi.svg"
                                />
                                <p class="word">文字</p>
                            </div>
                            <div class="type_item" @click="choosevideo">
                                <image
                                    mode="aspectFill"
                                    style="width: 26px;height: 26px;"
                                    src="/static/images/tuwen_shipin.svg"
                                />
                                <p class="word">视频</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {uploadFile} from '@/utils/uploadFile.js'
export default {
    props: {
        articeTitle: {
            type: String,
            default: ''
        },
        showmask: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            showTopAddBtn: true, //初次进入页面展开
            //对应的段落类型
            PART_TYPE: {
                WORD: 1, //文字
                IMAGE: 2, //图片
                AUDIO: 3, //音频
                VIDEO: 4 //视频
            },
            // 视频播放器配置
            videoSetting: {
                objectFit: 'cover'
            },
            from: '',
            modify: '',
            articleId: '',
            openType: true, //默认收起
            parts: [], //文章段落
            deleteData: [], //删除的段落id数组
            currentClickIndex: '', //当前点击的展开按钮
            count: 9, //最多可以选择的图片张数，默认9
            textCount: 1, //文字上传图片，默认1
            source: '', //判断添加文字的来源
            plus_img: '', //预览图片
            show: false, //默认展示预览图片
            showdes: false, //默认展示文字描述页面
            showkelong: false, //默认隐藏展示拖拽数据
            startindex: '', //展示拖拽图片
            currenttouch: '',
            display: '',
            replace: {
                src: '',
                wordDes: ''
            },
            listnum: '',
            newkelong: {
                top: 0,
                src: '',
                wordDes: ''
            }
        }
    },
    components: {},
    computed: {},
    watch: {
        currentClickIndex(newIndex, oldIndex) {
            this.parts.forEach((part, index) => {
                part.showShareBtn = newIndex === index
            })
            this.openType = newIndex !== -1
        }
    },
    onLoad(options) {
        this.parts = getApp().articeParts
        this.currentClickIndex = ''
    },
    onShow() {},
    onUnload() {
        this.show = false
    },
    methods: {
        // 开始拖拽
        dragStart(e, index) {
            // console.log('长按拖拽')
            var self = this
            self.newkelong.src = self.parts[index].resourceUrl
            self.newkelong.wordDes = self.parts[index].text
            var query = wx.createSelectorQuery()
            //选择id
            query
                .select('.listbox')
                .boundingClientRect(function(rect) {
                    self.newkelong.top = e.touches[0].clientY - rect.top - 74
                    self.showkelong = true
                })
                .exec()
        },
        dragMove(e, index) {
            var self = this
            e.preventDefault()
            e.stopPropagation()
            var query = wx.createSelectorQuery()
            self.listnum = self.parts.length
            query
                .select('.listbox')
                .boundingClientRect(function(rect) {
                    self.newkelong.top = e.touches[0].clientY - rect.top - 74
                    if (self.newkelong.top < -148) {
                        self.newkelong.top = -148
                    } else if (self.newkelong.top > rect.height) {
                        self.newkelong.top = rect.height - 148
                    }
                })
                .exec()
        },
        dragEnd(e, index) {
            var self = this
            var query = wx.createSelectorQuery()
            self.listnum = self.parts.length
            query
                .select('.listbox')
                .boundingClientRect(function(rect) {
                    self.newkelong.top = e.mp.changedTouches[0].clientY - rect.top - 74
                    const targetp = parseInt(self.newkelong.top / 148)
                    const targetn = Math.abs(targetp) //转化为正数
                    // console.log('拖动对象' + index)
                    // console.log('放置对象' + targetn)
                    if (self.showkelong) {
                        // 往上拖拽
                        if (index > targetn) {
                            if (targetn === 0) {
                                console.log('移动到最前')
                                //移动到最前
                                self.parts.splice(0, 0, self.parts[index]) //新增要移除的
                                self.parts.splice(index + 1, 1) // 删除要移除的
                            } else {
                                console.log('往上拖拽,且不移动到最前')
                                self.parts.splice(targetn, 0, self.parts[index]) //新增要移除的
                                self.parts.splice(index + 1, 1) // 删除要移除的
                            }
                        } else if (index < targetn) {
                            // 往下拖拽
                            if (targetn + 1 === self.parts.length) {
                                console.log('移动到最后')
                                //移动到最后
                                self.parts.splice(self.parts.length, 0, self.parts[index]) //新增要移除的
                                self.parts.splice(index, 1) // 删除要移除的
                            } else {
                                console.log('往下拖拽,且不移动到最后')
                                self.parts.splice(targetn + 1, 0, self.parts[index]) //新增要移除的
                                self.parts.splice(index, 1) // 删除要移除的
                            }
                        }
                        self.showkelong = false
                        getApp().articeParts = self.parts
                    }
                })
                .exec()
        },
        // 点击拖拽提示信息
        showInfo() {
            wx.showToast({
                title: '长按段落并拖拽可调整顺序',
                icon: 'none',
                duration: 3000
            })
        },
        // 展开收起切换
        openClose(item, newIndex) {
            if (newIndex === this.currentClickIndex) {
                this.currentClickIndex = ''
            } else {
                this.currentClickIndex = newIndex
            }
        },
        // 删除段落
        deletePart(index, id) {
            wx.showModal({
                title: '',
                content: '确定要删除这部分内容？',
                success: (res) => {
                    if (res.confirm) {
                        if (id) {
                            getApp().deleteData.splice(0, 0, id)
                        }
                        this.parts.splice(index, 1)
                        getApp().articeParts = this.parts
                        // 删除段落为0展示选择
                        if (this.parts.length === 0) {
                            this.currentClickIndex = -1
                        }
                    } else if (res.cancel) {
                        console.log('用户点击取消')
                    }
                }
            })
        },
        uploadFile(data, current) {
            wx.showLoading({
                title: '上传中'
            })
            let self = this
            let i = data.i ? data.i : 0, //当前上传的哪张(多个文件上传时显示当前文件序号)
                success = data.success ? data.success : 0, //上传成功的个数
                fail = data.fail ? data.fail : 0 //上传失败的个数
            return new Promise((resolve, reject) => {
                wx.uploadFile({
                    url: data.url,
                    filePath: data.path[i],
                    name: 'file', //这里根据自己的实际情况改
                    formDate: null, //这里是上传文件时一起上传的数据
                    header: {
                        'content-type': 'multipart/form-data',
                        Cookie: 'fm_sid=' + getApp().loginState.cookie.fm_sid
                    },
                    success: (resq) => {
                        if (resq.statusCode === 200) {
                            wx.hideLoading()
                            success++ //上传成功的变量+1
                            let elem = {}
                            elem.resourceUrl = resq.data
                            // 添加段落类型
                            elem.sectionType = self.PART_TYPE.IMAGE
                            elem.showShareBtn = false
                            elem.text = ''
                            // result.push(elem)
                            current = current + 1
                            if (self.currentClickIndex === -1) {
                                getApp().articeParts.splice(0, 0, elem)
                            } else {
                                getApp().articeParts.splice(current, 0, elem)
                            }
                            self.parts = getApp().articeParts
                            self.currentClickIndex = ''
                        } else {
                            fail++ //上传失败的变量+1
                            wx.showToast({
                                title: '上传服务器失败',
                                icon: 'none'
                            })
                        }
                        resolve(resq)
                    },
                    fail: (res) => {
                        fail++
                        wx.showToast({
                            title: '上传服务器失败',
                            icon: 'none'
                        })
                        reject(res)
                    },
                    complete: () => {
                        i++
                        if (i === data.path.length) {
                            //当文件传完时，停止调用
                            console.log('执行完毕')
                            console.log('成功：' + success + ' 失败：' + fail)
                        } else {
                            //若文件还没有传完，则继续调用函数
                            // console.log(i)
                            data.i = i
                            data.success = success
                            data.fail = fail
                            // 需要按顺序加载图片，异步操作由于接口快慢问题导致顺序错误，故采用递归实现
                            self.uploadFile(data, current)
                        }
                    }
                })
            })
        },
        // 选择图片
        chooseImage(index) {
            let self = this
            wx.chooseImage({
                count: self.count, // 最多可以选择的图片张数，默认9
                sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有(ios才会返回压缩图，安卓需要手动压缩)
                success(res) {
                    var imgObj = res.tempFiles
                    var imgPaths = []
                    imgObj.forEach((item, index) => {
                        if (item.size > 10 * 1024 * 1024) {
                            wx.showToast({
                                title: '单张图片不能超过10M',
                                icon: 'none'
                            })
                            imgObj.splice(index, 1)
                            index--
                        } else {
                            imgPaths.push(item.path)
                        }
                    })
                    
                    self.uploadFile({
                        url: self.$CONSTANTS.APPHOST + '/files',
                        path: imgPaths
                    }, index)

                    // imgObj.forEach((item, index) => {
                    //     var elem = {}
                    //     if (item.size > 10 * 1024 * 1024) {
                    //         wx.showToast({
                    //             title: '单张图片不能超过10M',
                    //             icon: 'none'
                    //         })
                    //         imgObj.splice(index, 1)
                    //         index--
                    //     } else {
                    //         wx.uploadFile({
                    //             url: self.$CONSTANTS.APPHOST + '/files', //仅为示例，非真实的接口地址
                    //             filePath: item.path,
                    //             name: 'file', //这里根据自己的实际情况改
                    //             formDate: null, //这里是上传文件时一起上传的数据
                    //             header: {
                    //                 'content-type': 'multipart/form-data',
                    //                 Cookie: 'fm_sid=' + getApp().loginState.cookie.fm_sid
                    //             },
                    //             success(res) {
                    //                 elem.resourceUrl = res.data
                    //                 // 添加段落类型
                    //                 elem.sectionType = self.PART_TYPE.IMAGE
                    //                 elem.showShareBtn = false
                    //                 elem.text = ''
                    //                 // result.push(elem)

                    //                 if (self.currentClickIndex === -1) {
                    //                     getApp().articeParts.splice(0, 0, elem)
                    //                 } else {
                    //                     getApp().articeParts.splice(
                    //                         self.currentClickIndex + 1,
                    //                         0,
                    //                         elem
                    //                     )
                    //                 }
                    //                 self.parts = getApp().articeParts
                    //                 self.currentClickIndex = ''
                    //             }
                    //         })
                    //     }
                    // })
                },
                fail: function() {},
                complete: function() {}
            })
        },
        // 选择文字
        toInputPage(index) {
            this.currentClickIndex = ''
            this.$emit('showMask', 'button', index)
        },
        // 添加描述
        toAddInputPage(index) {
            this.currentClickIndex = ''
            this.$emit('showMask', 'input', index)
        },
        // 预览图片
        previewImage(index) {
            this.plus_img = this.parts[index].resourceUrl
            this.show = true
        },
        // 关闭预览图片
        hideimgage() {
            this.show = false
        },
        // 文字上传图片
        textUploadImage(index) {
            var _this = this
            wx.chooseImage({
                count: this.textCount, // 文字上传选择的图片张，默认1
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
                            console.log(j.data)
                            this.$set(this.parts[index], 'resourceUrl', j.data) //更换文章数组中某个图片
                            getApp().articeParts = this.parts
                            wx.hideLoading()
                        })
                    }
                },
                fail: function() {},
                complete: function() {}
            })
        },
        // 选择视频
        choosevideo() {
            var _this = this
            let result = []
            wx.chooseVideo({
                sourceType: ['album', 'camera'],
                maxDuration: 60, //拍摄视频最长为2个小时拍摄时间，单位秒
                camera: 'back',
                compressed: true,
                success: (res) => {
                    if (res.size > 50 * 1024 * 1024) {
                        wx.showToast({
                            title: '视频不能超过50M',
                            icon: 'none'
                        })
                    } else {
                        uploadFile({
                            url: _this.$CONSTANTS.APPHOST + '/files',
                            path: [res.tempFilePath]
                        }).then((j) => {
                            var elem = {}
                            elem.resourceUrl = j.data
                            // 添加段落类型
                            elem.sectionType = _this.PART_TYPE.VIDEO
                            elem.showShareBtn = false
                            elem.text = ''
                            result.push(elem)
                            if (_this.currentClickIndex === -1) {
                                getApp().articeParts.splice(0, 0, ...result)
                            } else {
                                getApp().articeParts.splice(
                                    _this.currentClickIndex + 1,
                                    0,
                                    ...result
                                )
                            }
                            _this.parts = getApp().articeParts
                            _this.currentClickIndex = ''
                        })
                    }
                },
                fail: function() {},
                complete: function() {}
            })
        }
    }
}
</script>
<style lang="less" scoped>
.noscroll {
    overflow-y: hidden;
}
.listbox {
    .kelong {
        position: absolute;
        z-index: 1;
        right: 0;
        left: 0;
        box-shadow: 8rpx 4rpx 8rpx 0 rgba(0, 0, 0, 0.05);
    }
}
.amplification {
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    img {
        width: 100%;
        height: 100%;
        max-height: 70vh;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-40%);
    }
}
.add-part {
    width: 100%;
    margin: 0 auto;
    margin-top: 15px;
    position: relative;
    .btn_box {
        width: 100%;
        margin-bottom: 15px;
        position: relative;
        .add_btn {
            width: 28px;
            height: 28px;
            background: url('../assets/images/tuwen_add_pre.svg') no-repeat center top;
            background-size: 28px 28px;
            margin: 0 auto;
            margin-top: 15px;
        }
        .add_btn.close {
            background: url('../assets/images/tuwen_add_nor.svg') no-repeat center;
            background-size: 100%;
        }
    }
    .add_type {
        background: #fff;
        width: 460rpx;
        height: 88px;
        opacity: 1;
        transform: scale(1);
        margin: 0 auto;
        position: absolute;
        background: #fff;
        top: 40px;
        left: 50%;
        margin-left: -230rpx;
        display: flex;
        display: -webkit-flex;
        flex-direction: row;
        justify-content: center;
        border-radius: 8px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.04);
        transition: all 0.3s linear;
        z-index: 2;
        .type_item {
            width: 60px;
            height: 52px;
            margin-top: 20px;
            display: flex;
            display: -webkit-flex;
            flex-direction: column;
            justify-content: space-between;
            text-align: center;
            image {
                margin: 0 auto;
            }
            .word {
                height: 20px;
                line-height: 20px;
                font-size: 14px;
                color: #333333;
                letter-spacing: 0.54px;
            }
        }
    }
    .add_type::after {
        content: '';
        display: inline-block;
        width: 0;
        height: 0;
        border-right: 10px solid transparent;
        border-left: 10px solid transparent;
        border-bottom: 10px solid #fff;
        position: absolute;
        top: -8px;
        left: 50%;
        margin-left: -8px;
    }
    .add_type.close {
        height: 0;
        opacity: 0;
        transform: scale(0);
    }
}
</style>
