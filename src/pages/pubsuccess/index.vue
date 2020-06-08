<!--
* @des:  文件说明
* @date: 2020-03-03 14:58:46
* @version:  1.0
* 
* Date                   Author               Description
* ------------------------------------------------------
* 2020-03-03             邓紅麗               创建
* 2020-04-21             曹磊                 分享
-->
<template>
    <!-- 设置头像,昵称页 -->
    <div class="pubsuccess">
        <navigation-bar showBack :title="title"></navigation-bar>
        <div class="success">
            <img src="../../assets/images/fabu_chenggong.svg" alt="" />
            <div class="pusu">发布成功</div>
        </div>
        <div class="share_other">
            <button class="share_list" hover-class="none" open-type="share">
                <img src="../../assets/images/fabu_weixin.svg" alt="" />
                <span class="word">分享给微信好友</span>
            </button>
            <div class="share_list" @click="shareToWxFriend">
                <img src="../../assets/images/fabu_pengyouquan.svg" alt="" />
                <span class="word">分享到朋友圈</span>
            </div>
            <div class="share_list" @click="shareToWxFriend">
                <img src="../../assets/images/fabu_haibao.svg" alt="" />
                <span class="word">生成海报</span>
            </div>
            <div class="share_later" @click="goBack">
                稍后分享
            </div>
        </div>
        <!-- 生成海报 -->
        <div class="createPoster" v-show="showCanvas" catchtouchmove="true">
            <div class="poster_box" :style="'width:' + canvasWidth + 'px'">
                <div class="box">
                    <canvas
                        canvas-id="myCanvas"
                        :style="'width:' + canvasWidth + 'px;height:' + canvasHeight + 'px'"
                    ></canvas>
                </div>
                <div class="btn_box">
                    <div class="btn" @click.stop="showCanvas = false">取消</div>
                    <div class="btn active" @click="savePosterImage()">保存图片</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import share from '@/components/Share'
import {Article} from '@/api/Article.js'
export default {
    data() {
        return {
            title: '发布',
            articeTitle: '',
            articePicUrl: '', //分享文章的封面
            nickName: '',
            avatarUrl: '',
            articeId: '',
            showShare: false,
            ArticlesDetail: {}, //文章详情
            ctx: null, //canvas实例
            showCanvas: false,
            screenHeight: getApp().systemInfo.screenHeight,
            canvasWidth: getApp().systemInfo.screenWidth * 0.86,
            canvasHeight: getApp().systemInfo.screenHeight * 0.77,
            shareAdUrl: '/static/images/share_ad.jpg', //分享海报顶部广告图地址
            qCodeUrl: '', //分享海报顶部二维码地址
            qCodeWidth: 80,
            shareAdScale: 1.72, //分享海报顶部广告宽高比例
            avatarWidht: 60, //需要绘制的头像宽度
            avatarHeight: 60, //需要绘制的头像高度
            posterImageUrl: '', //生成的海报地址
            shareCoverPictureScale: 0.45, //需要绘制海报的宽高比
            getCodeParams: {
                scene: '',
                page: 'pages/pubsuccess/main'
            } //获取二维码接口需要的参数
        }
    },
    components: {
        'navigation-bar': NavigationBar,
        'v-share': share
    },
    onHide() {
        this.init()
    },
    onShow() {},
    onLoad(options) {
        /* eslint-disable */
        let pages = getCurrentPages()
        getApp().prevPageRoute = pages[pages.length - 1].__displayReporter.route

        this.getCodeParams.scene = options.id
        this.articeId = options.id
        Article.ArticlesDetails('', this.articeId).then((res) => {
            if (res.statusCode === 200) {
                this.ArticlesDetail = res.data
                this.articeTitle = res.data.title
                this.articePicUrl = res.data.coverPictureUrl
                this.nickName = res.data.authorName
                this.avatarUrl = res.data.avatarUrl
            } else {
                console.log(res.errMsg)
            }
        })
    },
    onShareAppMessage(res) {
        let self = this
        return {
            title: self.ArticlesDetail.title + '【阅读全文】',
            imageUrl: this.articePicUrl,
            path: '/pages/articeDetail/main?id=' + self.articeId + '&isFromShare=isFromShare'
        }
    },
    methods: {
        init() {
            this.ctx = null
        },
        goBack() {
            this.init()
            wx.switchTab({
                url: '/pages/mine/main'
            })
        },
        // 生成图片分享朋友圈
        shareToWxFriend() {
            this.showCanvas = true
            if (!this.ctx) {
                this.drawImage()
            }
        },
        // 绘制文字时自动换行
        textAutoWrap(ctx, word, x, y, color) {
            let self = this
            let canvasWidth = self.canvasWidth //画布宽度
            let textareaWidth = Math.ceil(canvasWidth / 16) //画布宽度除以字号()
            let text = []

            while (word.length > 0 && text.length < 2) {
                //标题最多设置为2行
                text.push(word.substr(0, textareaWidth))
                word = word.substr(textareaWidth, word.length)
            }
            // 设置文本垂直居中
            for (let i = 0; i < text.length; i++) {
                let h = canvasWidth / self.shareAdScale + self.avatarHeight / 2 + 20 * i + 20
                ctx.fillText(text[i], 15, h, canvasWidth - 30)
            }
        },

        // 画圆角矩形
        drawRoundRectPath(cxt, width, height, radius) {
            cxt.beginPath(0)
            //从右下角顺时针绘制，弧度从0到1/2PI
            cxt.arc(width - radius, height - radius, radius, 0, Math.PI / 2)
            //矩形下边线
            cxt.lineTo(radius, height)
            //左下角圆弧，弧度从1/2PI到PI
            cxt.arc(radius, height - radius, radius, Math.PI / 2, Math.PI)
            //矩形左边线
            cxt.lineTo(0, radius)
            //左上角圆弧，弧度从PI到3/2PI
            cxt.arc(radius, radius, radius, Math.PI, (Math.PI * 3) / 2)
            //上边线
            cxt.lineTo(width - radius, 0)
            //右上角圆弧
            cxt.arc(width - radius, radius, radius, (Math.PI * 3) / 2, Math.PI * 2)
            //右边线
            cxt.lineTo(width, height - radius)
            cxt.closePath()
        },

        /**该方法用来绘制一个有填充色的圆角矩形
         *@param cxt:canvas的上下文环境
         *@param x:左上角x轴坐标
         *@param y:左上角y轴坐标
         *@param width:矩形的宽度
         *@param height:矩形的高度
         *@param radius:圆的半径
         *@param fillColor:填充颜色
         **/
        fillRoundRect(cxt, x, y, width, height, radius, fillColor) {
            //圆的直径必然要小于矩形的宽高
            if (2 * radius > width || 2 * radius > height) {
                return false
            }

            cxt.save()
            cxt.translate(x, y)
            //绘制圆角矩形的各个边
            this.drawRoundRectPath(cxt, width, height, radius)
            cxt.fillStyle = fillColor || '#000' //若是给定了值就用给定的值否则给予默认值
            cxt.fill()
            cxt.restore()
        },

        // 绘制圆形头像
        circleImg(ctx, url, w, h, x, y) {
            ctx.save()
            ctx.beginPath()

            //先画个圆  前两个参数确定了圆心 （x,y） 坐标  第三个参数是圆的半径  四参数是绘图方向  默认是false，即顺时针

            ctx.arc(w / 2 + x, h / 2 + y, w / 2, 0, Math.PI * 2, false)

            ctx.clip() //画好了圆 剪切  原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内 这也是我们要save上下文的原因

            ctx.drawImage(url, x, y, w, h) // 推进去图片，必须是https图片

            ctx.restore() //恢复之前保存的绘图上下文 恢复之前保存的绘图上下午即状态 还可以继续绘制
        },

        drawAvatar() {
            // 绘制头像
            // 网络图片需要下载下来才能进行操作
            // (记得把微信头像https://wx.qlogo.cn地址添加到合法downLoad域名下)
            let that = this
            return new Promise((resolve, reject) => {
                wx.downloadFile({
                    url: that.avatarUrl,
                    success(res) {
                        let url = ''
                        if (res.statusCode === 200) {
                            url = res.tempFilePath
                        } else {
                            url = that.defaultAvatarUrl
                        }
                        that.circleImg(
                            that.ctx,
                            url,
                            that.avatarWidht,
                            that.avatarHeight,
                            (that.canvasWidth - that.avatarWidht) / 2,
                            that.canvasWidth / that.shareAdScale - that.avatarHeight / 2 - 40
                        )
                        resolve()
                    },
                    fail() {
                        that.circleImg(
                            that.ctx,
                            that.defaultAvatarUrl,
                            that.avatarWidht,
                            that.avatarHeight,
                            (that.canvasWidth - that.avatarWidht) / 2,
                            that.canvasWidth / that.shareAdScale - that.avatarHeight / 2 - 40
                        )
                        reject()
                    }
                })
            })
        },

        drawCoverImg() {
            //绘制文章图片(需要绘制图片的中间部分)
            let that = this
            return new Promise((resolve, reject) => {
                wx.getImageInfo({
                    src: that.articePicUrl,
                    success(resq) {
                        let imgWidth = resq.width
                        let imgHeight = resq.height
                        let scalc = resq.height / resq.width

                        let sx = '' //需要绘制到画布中的，imageResource的矩形（裁剪）选择框的左上角 x 坐标
                        let sy = '' //需要绘制到画布中的，imageResource的矩形（裁剪）选择框的左上角 y 坐标
                        let sw = '' //需要绘制到画布中的，imageResource的矩形（裁剪）选择框的宽度
                        let sh = '' //需要绘制到画布中的，imageResource的矩形（裁剪）选择框的高度
                        let dx = 15 //imageResource的左上角在目标 canvas 上 x 轴的位置
                        let dy = that.canvasWidth / that.shareAdScale + that.avatarHeight / 2 + 50 //imageResource的左上角在目标 canvas 上 y 轴的位置
                        let dw = that.canvasWidth - 30 //在目标画布上绘制imageResource的宽度，允许对绘制的imageResource进行缩放
                        let dh = (that.canvasWidth - 30) * that.shareCoverPictureScale //在目标画布上绘制imageResource的高度，允许对绘制的imageResource进行缩放

                        if (scalc >= that.shareCoverPictureScale) {
                            sh = imgWidth * that.shareCoverPictureScale
                            sx = 0
                            sy = (imgHeight - sh) / 2
                            sw = imgWidth
                        } else {
                            sw = imgHeight / that.shareCoverPictureScale
                            sx = (imgWidth - sw) / 2
                            sy = 0
                            sh = imgHeight
                        }

                        that.ctx.drawImage(resq.path, sx, sy, sw, sh, dx, dy, dw, dh)
                        resolve()
                    },
                    fail() {
                        that.ctx.drawImage(
                            '/static/images/share_default_pic.jpg',
                            0,
                            0,
                            that.canvasWidth - 30,
                            (that.canvasWidth - 30) * that.shareCoverPictureScale
                        )
                        reject()
                    }
                })
            })
        },

        drawQcodeImg() {
            //绘制二维码图片
            let that = this
            return new Promise((resolve, reject) => {
                wx.downloadFile({
                    url:
                        that.$CONSTANTS.APPHOST + '/qrCodeFile?page=' +
                        encodeURIComponent(that.getCodeParams.page) +
                        '&scene=' + that.getCodeParams.scene + '&width=280',
                    success(res) {
                        if (res.statusCode === 200) {
                            that.qCodeUrl = res.tempFilePath
                        } else {
                            that.qCodeUrl = '/static/images/chengxu_erweima@3x.png'
                        }
                        that.ctx.drawImage(
                            that.qCodeUrl,
                            30,
                            that.canvasWidth / that.shareAdScale +
                                that.avatarHeight / 2 +
                                (that.canvasWidth - 30) * 0.45 +
                                65,
                            that.qCodeWidth,
                            that.qCodeWidth
                        )
                        resolve()
                    },
                    fail() {
                        that.qCodeUrl = '/static/images/chengxu_erweima@3x.png'
                        that.ctx.drawImage(
                            that.qCodeUrl,
                            30,
                            that.canvasWidth / that.shareAdScale +
                                that.avatarHeight / 2 +
                                (that.canvasWidth - 30) * 0.45 +
                                65,
                            that.qCodeWidth,
                            that.qCodeWidth
                        )
                        reject()
                    },
                    complete() {
                        that.ctx.draw()
                        wx.hideLoading()
                    }
                })
            })
        },

        //绘制canvas海报图片
        drawImage: async function drawImage() {
            console.log('开始绘制图片')
            wx.showLoading({
                title: '绘制中'
            })
            var that = this
            that.ctx = wx.createCanvasContext('myCanvas')

            //绘制顶部广告图片
            that.ctx.drawImage(
                that.shareAdUrl,
                0,
                0,
                that.canvasWidth,
                that.canvasWidth / that.shareAdScale
            )

            // 绘制下半部分白色圆角矩形
            that.fillRoundRect(
                that.ctx,
                0,
                that.canvasWidth / that.shareAdScale - 40,
                that.canvasWidth,
                that.canvasHeight - that.canvasWidth / that.shareAdScale,
                20,
                '#ffffff'
            )

            //绘制头像边的圆形
            that.ctx.beginPath()
            that.ctx.lineWidth = 4
            that.ctx.strokeStyle = '#ffffff'
            that.ctx.arc(
                that.canvasWidth / 2,
                that.canvasWidth / that.shareAdScale - 40,
                that.avatarWidht / 2,
                0,
                Math.PI * 2,
                false
            )
            that.ctx.stroke()

            // 绘制用户名
            that.ctx.setFillStyle('#333333')
            that.ctx.font = 'bold 16px sans-serif'
            that.ctx.setTextAlign('center')
            that.ctx.fillText(
                that.nickName,
                that.canvasWidth / 2,
                that.canvasWidth / that.shareAdScale + that.avatarHeight / 2 - 10
            )

            // 绘制文章标题
            that.ctx.setFillStyle('#000000')
            that.ctx.setTextAlign('left')
            that.ctx.setFontSize(16) //字体大小
            that.textAutoWrap(that.ctx, that.articeTitle)

            //绘制第三段文本
            that.ctx.setFillStyle('#333333')
            that.ctx.setFontSize(16)
            that.ctx.setTextAlign('left')
            that.ctx.fillText(
                '长按识别小程序',
                20 + that.canvasWidth * 0.36,
                that.canvasWidth / that.shareAdScale +
                    that.avatarHeight / 2 +
                    (that.canvasWidth - 30) * 0.45 +
                    100
            )

            //绘制第四段文本
            that.ctx.setFillStyle('#666666')
            that.ctx.setFontSize(14)
            that.ctx.font = 'normal 14px sans-serif'
            that.ctx.setTextAlign('left')
            that.ctx.fillText(
                '让朋友也留下美好记忆',
                20 + that.canvasWidth * 0.36,
                that.canvasWidth / that.shareAdScale +
                    that.avatarHeight / 2 +
                    (that.canvasWidth - 30) * 0.45 +
                    120
            )
            
            await that.drawAvatar()
            await that.drawCoverImg()
            await that.drawQcodeImg()

        },

        //  点击保存到相册
        savePosterImage() {
            var that = this
            //将生成好的图片保存到本地，需要延迟一会，绘制期间耗时
            setTimeout(function() {
                wx.canvasToTempFilePath({
                    canvasId: 'myCanvas',
                    success: function(res) {
                        console.log('朋友圈分享图生成成功:' + res.tempFilePath)
                        that.posterImageUrl = res.tempFilePath
                        wx.saveImageToPhotosAlbum({
                            filePath: that.posterImageUrl,
                            success(res) {
                                wx.showToast({
                                    title: '保存成功',
                                    icon: 'none',
                                    duration: 2000
                                })
                            },
                            fail(err) {
                                if (err.errMsg === 'saveImageToPhotosAlbum:fail auth deny') {
                                    console.log(err.errMsg)
                                    //用户未授权使用相册
                                    wx.openSetting({
                                        success(res) {
                                            if (res.authSetting['scope.writePhotosAlbum']) {
                                                console.log('授权成功')
                                            }
                                        },
                                        fail() {
                                            console.log('授权失败')
                                        }
                                    })
                                }
                                wx.showToast({
                                    title: '保存失败',
                                    icon: 'none',
                                    duration: 2000
                                })
                            }
                        })
                    },
                    fail: function(err) {
                        console.log('失败', err)
                    }
                })
            }, 200)
        }
    },
    onUnload() {
        wx.switchTab({
            url: '/pages/mine/main'
        })
    }
}
</script>

<style scoped lang="less">
@import '../../assets/css/var.less';
.createPoster {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1100;
    overflow: hidden;
    .poster_box {
        // height: 575px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        right: 0;
        margin: 0 auto;
        .btn_box {
            margin-top: 15px;
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .btn {
                width: 150px;
                height: 44px;
                line-height: 44px;
                border-radius: 44px;
                background: #fff;
                text-align: center;
                color: @theme_color;
                font-size: 18px;
                letter-spacing: -0.45px;
            }
            .btn.active {
                background: @theme_color;
                color: #fff;
            }
        }
    }
    .box {
        max-height: 516px;
        overflow: hidden;
    }
    ._canvas {
        // width: 100%;
        max-height: 516px;
        // height: 516px;
        background: #fff;
    }
}
.mask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
}
</style>
