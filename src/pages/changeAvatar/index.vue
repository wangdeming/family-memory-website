<!--
* @des: 修改头像
* @date: 2020-03-20 14:36:12
* @version:  1.0
*
* Date                   Author               Description
* ------------------------------------------------------
* 2020-03-20             曹天笑               创建
* 2020-03-26             曹天笑               修改裁剪头像宽高
-->
<template>
    <div class="navigation-bar m_changeAvatar">
        <div
            class="box"
            :style="{
                paddingTop: paddingTop + 'px',
                height: NavigationBarHeight + 'px'
            }"
        >
            <div class="goback" @click="goBack"> </div>
        </div>
        <div class="page-body uni-content-info">
            <div class="cropper-content">
                <div
                    class="uni-corpper"
                    :style="
                        'width:' + cropperInitW + 'px;height:' + cropperInitH + 'px;background:#000'
                    "
                >
                    <div
                        class="uni-corpper-content"
                        :style="
                            'width:' +
                                cropperW +
                                'px;height:' +
                                cropperH +
                                'px;transform:translate(' +
                                tranBoxL +
                                'px,' +
                                tranBoxT +
                                'px)'
                        "
                        @touchstart.stop="contentStartMove"
                        @touchmove.stop="contentMoveing"
                        @touchend.stop="contentTouchEnd"
                    >
                        <image
                            class="avatarImg"
                            :src="imageSrc"
                            :style="
                                'width:' +
                                    cropperW +
                                    'px;height:' +
                                    cropperH +
                                    'px;transform:translate(' +
                                    tranL +
                                    'px, ' +
                                    tranT +
                                    'px)'
                            "
                        >
                        </image>
                        <div
                            class="uni-corpper-crop-box"
                            :style="
                                'width:' +
                                    qualityWidth +
                                    'px;height:' +
                                    qualityWidth +
                                    'px;left:' +
                                    drawCenterL +
                                    'px;top:' +
                                    drawCenterT +
                                    'px;'
                            "
                        >
                        </div>
                    </div>
                </div>
            </div>
            <div class="cropper-config">
                <div class="btn_confirm" @click="getImage" style="margin-top: 15px;">
                    选择图片
                </div>
                <div class="btn_confirm active" @click="getImageInfo" style="margin-top: 15px;">
                    确定
                </div>
            </div>
            <canvas
                canvas-id="myCanvas"
                :style="'width:' + cropperW + 'px;height:' + cropperH + 'px;top:-9999px;'"
            ></canvas>
        </div>
    </div>
</template>

<script>
import {uploadFile} from '@/utils/uploadFile.js'
import {AppLoginApi} from '@/api/AppLogin'

let sysInfo = wx.getSystemInfoSync()
let SCREEN_WIDTH = sysInfo.screenWidth
let PAGE_X, // 手按下的x位置
    PAGE_Y, // 手按下y的位置
    // IMG_RATIO, // 图片比例
    DRAFG_MOVE_RATIO = 1, //移动时候的比例,
    // INIT_DRAG_POSITION = 60, // 初始化屏幕宽度和裁剪区域的宽度之差，用于设置初始化裁剪的宽度
    DRAW_IMAGE_RATIO = 1, // 设置生成的图片比例
    DRAW_IMAGE_W = 300 // 设置生成的图片宽度

export default {
    data() {
        return {
            paddingTop: this.$StatusBar.android, // 默认为android大部分普通机型高度
            NavigationBarHeight: this.$NavigationBar.default + this.$StatusBar.android,
            imageSrc: '',
            // 初始化的宽高
            cropperInitW: SCREEN_WIDTH,
            cropperInitH: SCREEN_WIDTH,
            // 动态的宽高
            cropperW: SCREEN_WIDTH,
            cropperH: SCREEN_WIDTH,

            // 图片缩放值,位置,
            scalcP: 1, //图片缩放比例(把原图设置成宽高在DRAW_IMAGE_W 以内)
            img_radio: 1, //图片比例
            canvasW: DRAW_IMAGE_W,
            canvasH: DRAW_IMAGE_W * DRAW_IMAGE_RATIO,
            tranL: 0,
            tranT: 0,
            tranBoxL: 0,
            tranBoxT: 0,

            // 裁剪框 宽高
            qualityWidth: DRAW_IMAGE_W,
            innerAspectRadio: DRAFG_MOVE_RATIO,

            newAvatarSrc: ''
        }
    },
    computed: {
        // 裁剪框 居中
        drawCenterL() {
            return (this.cropperW - DRAW_IMAGE_W) / 2
        },
        drawCenterT() {
            return (this.cropperH - DRAW_IMAGE_W * DRAW_IMAGE_RATIO) / 2
        }
    },
    onLoad(options) {
        this.imageSrc = options.avatarUrl
        this.init()
        this.loadImage()
    },
    methods: {
        init: function() {
            //初始化位置
            this.tranL = 0
            this.tranT = 0
        },
        goBack() {
            wx.redirectTo({
                url: '/pages/setUserInfo/main'
            })
        },
        // 选择图片
        getImage: function() {
            var _this = this
            this.init()
            wx.chooseImage({
                success: function(res) {
                    _this.imageSrc = res.tempFilePaths[0]
                    _this.loadImage()
                }
            })
        },
        // 加载图片
        loadImage: function() {
            var _this = this
            wx.showLoading({
                title: '图片加载中...'
            })

            wx.getImageInfo({
                src: _this.imageSrc,
                success(res) {
                    _this.img_radio = res.width / res.height
                    if (_this.img_radio <= 1) {
                        _this.cropperW = DRAW_IMAGE_W
                        _this.cropperH = _this.cropperW / _this.img_radio
                        _this.tranBoxL = 0
                        _this.tranBoxT = -(_this.cropperH - SCREEN_WIDTH) / 2
                        _this.scalcP = res.width / DRAW_IMAGE_W
                    } else {
                        _this.cropperH = DRAW_IMAGE_W
                        _this.cropperW = _this.cropperH * _this.img_radio
                        _this.tranBoxL = -(_this.cropperW - SCREEN_WIDTH) / 2
                        _this.tranBoxT = -(_this.cropperH - SCREEN_WIDTH) / 2
                        _this.scalcP = res.height / DRAW_IMAGE_W
                    }

                    wx.hideLoading()
                },
                fail() {
                    wx.showToast({
                        title: '图片加载失败'
                    })
                    wx.hideLoading()
                },
                complete() {
                    wx.hideLoading()
                }
            })
        },
        // 拖动时候触发的touchStart事件
        contentStartMove(e) {
            PAGE_X = e.mp.touches[0].pageX
            PAGE_Y = e.mp.touches[0].pageY
        },

        // 拖动时候触发的touchMove事件
        contentMoveing(e) {
            var dragLengthX = (PAGE_X - e.mp.touches[0].pageX) * DRAFG_MOVE_RATIO
            var dragLengthY = (PAGE_Y - e.mp.touches[0].pageY) * DRAFG_MOVE_RATIO

            if (this.img_radio <= 1) {
                this.tranL = 0
                this.tranT = this.tranT - dragLengthY
                PAGE_Y = e.mp.touches[0].pageY
            } else {
                this.tranL = this.tranL - dragLengthX
                this.tranT = 0
                PAGE_X = e.mp.touches[0].pageX
            }
        },

        contentTouchEnd() {},

        // 获取图片
        getImageInfo() {
            var _this = this
            wx.showLoading({
                title: '图片生成中...'
            })

            let canvasX = (this.cropperW - DRAW_IMAGE_W) / 2 - this.tranL
            let canvasY = (this.cropperH - DRAW_IMAGE_W * DRAW_IMAGE_RATIO) / 2 - this.tranT

            // 将图片写入画布
            const ctx = wx.createCanvasContext('myCanvas')

            ctx.drawImage(_this.imageSrc, 0, 0, _this.cropperW, _this.cropperH)

            ctx.draw(true, () => {
                wx.canvasToTempFilePath({
                    x: canvasX,
                    y: canvasY,
                    width: DRAW_IMAGE_W,
                    height: DRAW_IMAGE_W * DRAW_IMAGE_RATIO,
                    destWidth: DRAW_IMAGE_W,
                    destHeight: DRAW_IMAGE_W * DRAW_IMAGE_RATIO,
                    canvasId: 'myCanvas',
                    success: function(res) {
                        uploadFile({
                            url: _this.$CONSTANTS.APPHOST + '/files',
                            path: [res.tempFilePath]
                        }).then((j) => {
                            if (j.data) {
                                console.log(j)
                                _this.newAvatarSrc = j.data
                                AppLoginApi.upDatedAppUserInfo(
                                    {
                                        avatarUrl: _this.newAvatarSrc
                                    },
                                    getApp().userInfo.displayId
                                ).then((v) => {
                                    if (v.statusCode === 200) {
                                        getApp().userInfo.avatarUrl = _this.newAvatarSrc
                                        wx.showToast({
                                            title: '更新用户信息成功',
                                            icon: 'none'
                                        })
                                    } else {
                                        wx.showToast({
                                            title: '更新用户信息失败',
                                            icon: 'none'
                                        })
                                    }
                                    wx.redirectTo({
                                        url: '/pages/setUserInfo/main'
                                    })
                                })
                            }
                        })
                        wx.hideLoading()
                    },
                    fail(err) {
                        wx.hideLoading()
                    },
                    complete() {
                        wx.hideLoading()
                    }
                })
            })
        }
    },
    onShow() {},
    onHide() {}
}
</script>

<style scoped lang="less"></style>
