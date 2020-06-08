<!--
* @des: 小程序底部自定义tabBar组件
* @date: 2020-02-25 14:03:42
* @version:  1.0
*
* Date                   Author               Description
* ------------------------------------------------------
* 2020-02-25             曹天笑               创建
-->
<template>
    <div class="footer" :class="isNewModel ? 'newModel' : ''">
        <div class="box clearfix">
            <div
                v-for="(item, index) in tabBar.list"
                class="item fl"
                :class="{special_img: item.isSpecial}"
                @click="selectNavItem(index, item.pagePath)"
                :key="item"
            >
                <p class="item-images">
                    <image
                        mode="aspectFit"
                        :class="currentNavIndex === index ? 'active' : ''"
                        :src="currentNavIndex === index ? item.selectedIconPath : item.iconPath"
                        :animation="item.isSpecial ? animation : ''"
                        :style="{width: item.width + 'rpx', height: item.height + 'rpx'}"
                        alt="iconPath"
                    />
                </p>
                <p
                    class="f24 footer-word"
                    v-if="item.text"
                    :style="{
                        color: currentNavIndex === index ? tabBar.selectedColor : tabBar.color
                    }"
                    >{{ item.text }}</p
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        currentNavIndex: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            animation: '',
            isNewModel: false, //兼容iphonex
            tabBar: {
                color: '#333',
                selectedColor: '#f60',
                list: [
                    {
                        pagePath: '../index/main',
                        iconPath: '/static/tabs/home.png',
                        selectedIconPath: '/static/tabs/home-active.png',
                        width: 50,
                        height: 50,
                        isSpecial: false, //是否为特殊样式
                        ref: 'index',
                        text: '生活圈'
                    },
                    {
                        pagePath: '../publish/main',
                        iconPath: '/static/tabs/home_add_jia.svg',
                        selectedIconPath: '/static/tabs/home_add_jia.svg',
                        width: 50,
                        height: 50,
                        ref: 'special',
                        isSpecial: true, //是否为特殊样式
                        text: ''
                    },
                    {
                        pagePath: '../mine/main',
                        iconPath: '/static/tabs/orders.png',
                        selectedIconPath: '/static/tabs/orders-active.png',
                        width: 50,
                        height: 50,
                        ref: 'mine',
                        isSpecial: false, //是否为特殊样式
                        text: '我的'
                    }
                ]
            }
        }
    },
    created() {
        const systemInfo = wx.getSystemInfoSync()
        const ratio = systemInfo.screenHeight / systemInfo.screenWidth // 高宽比例
        this.isNewModel = ratio >= 2 && systemInfo.model.indexOf('iPhone') >= 0
    },
    methods: {
        /**
         * @des:  点击导航栏
         * @param:  {Number}  index
         * @param:  {String}  pagePath
         * @return
         */
        selectNavItem(index, pagePath) {
            let self = this
            if (index === self.currentNavIndex) {
                return false
            }
            getApp().articeParts = []
            getApp().articeData = []
            getApp().articedraftData = []
            getApp().editArticleId = ''
            getApp().articeTitle = ''
            getApp().from = ''
            getApp().editArticleId = ''

            // 中间按钮的动画效果(暂时不用)
            // let option = {
            //     duration: 200,
            //     timingFunction: 'linear'
            // }

            // let animation = wx.createAnimation(option)

            // if (pagePath === '../publish/main') {
            //     getApp().tabBarAnimate = true
            //     animation.rotate(45).step()
            //     self.animation = animation.export()
            //     setTimeout(() => {
            //         animation.rotate(0).step(option)
            //         self.animation = animation.export()
            //     }, option.duration)
            // } else {
            //     if (getApp().tabBarAnimate) {
            //         animation.rotate(0).step()
            //         self.animation = animation.export()
            //         setTimeout(() => {
            //             animation.rotate(45).step(option)
            //             self.animation = animation.export()
            //         }, option.duration)
            //     }
            //     getApp().tabBarAnimate = false
            // }

            self.bindViewTap(pagePath)
        },
        /**
         * @des:  tabBar路由跳转
         * @param:  {String}  url
         * @return
         */
        bindViewTap(url) {
            wx.switchTab({
                url: url
            })
        }
    }
}
</script>
<style lang="less" scoped></style>
