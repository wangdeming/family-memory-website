<!--
* @des: 开始制作页面
* @date: 2020-03-01 09:28:00
* @version:  1.0
*
* Date                   Author               Description
* ------------------------------------------------------
* 2020-03-01             曹天笑               创建
-->
<template>
    <!-- 新增入口 -->
    <div class="m_publish">
        <navigation-bar title="开始制作"></navigation-bar>
        <v-tabBar :currentNavIndex="footerNavIndex"></v-tabBar>
        <image class="publish_bg" src="/static/images/tuwen_pic@3x.png" mode="aspectFill" alt="" />
        <div class="publish_type" :animation="animation">
            <div class="type_item" @click="routeTo()">
                <image src="/static/images/tuwen.svg" />
                <p class="word color-333 f32">图文</p>
            </div>
        </div>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import tabBar from '@/components/tabBar'
import {AppLoginApi} from '@/api/AppLogin.js'
export default {
    data() {
        return {
            animation: '',
            animationOption: {duration: 100, timingFunction: 'linear'},
            footerNavIndex: 1
        }
    },
    components: {
        'navigation-bar': NavigationBar,
        'v-tabBar': tabBar
    },

    methods: {
        routeTo() {
            wx.navigateTo({
                url: '/pages/publishStep1/main'
            })
        },
        // 获取小程序用户的信息（昵称，签名等）
        getAppUserInfo() {
            AppLoginApi.getAppUserInfo().then((r) => {
                getApp().phoneBound = r.data.phoneBound
                getApp().userInfo.displayId = r.data.displayId
                getApp().userInfo.name = r.data.name
                getApp().userInfo.avatarUrl = r.data.avatarUrl
                getApp().userInfo.signature = r.data.signature
            })
        }
    },
    onShow() {
        wx.hideTabBar()
        let self = this
        let animation = wx.createAnimation(self.animationOption)
        animation
            .translateY(100)
            .scale(0.6, 0.6)
            .step()
        self.animation = animation.export()
        setTimeout(() => {
            animation
                .translateY(0)
                .scale(1, 1)
                .step()
            self.animation = animation.export()
        }, self.animationOption.duration)
    },
    onLoad() {
        this.getAppUserInfo()
    },
    onHide() {}
}
</script>

<style scoped></style>
