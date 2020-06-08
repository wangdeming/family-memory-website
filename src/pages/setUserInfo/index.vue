<!--
* @des: 设置头像昵称页
* @date: 2020-03-01 09:30:51
* @version:  1.0
*
* Date                   Author               Description
* ------------------------------------------------------
* 2020-03-01             曹天笑               创建
-->
<template>
    <!-- 设置头像,昵称页 -->
    <div class="m_setting">
        <navigation-bar showBack title="设置"></navigation-bar>
        <div class="box">
            <div class="set_item clearfix" @click="toChooseAvatar()">
                <div class="front fl">头像</div>
                <div class="behide fr">
                    <div class="avatar">
                        <image mode="aspectFill" :src="avatarUrl" />
                    </div>
                </div>
            </div>
            <navigator
                hover-class="none"
                open-type="navigate"
                :url="'/pages/revisePage/main?source=name&value=' + name"
                class="set_item clearfix"
            >
                <div class="front fl">昵称</div>
                <div class="behide fr">
                    <div class="content">
                        {{ name }}
                    </div>
                    <div class="icon icon_to"></div>
                </div>
            </navigator>
            <navigator
                hover-class="none"
                open-type="navigate"
                :url="'/pages/revisePage/main?source=mark&value=' + signature"
                class="set_item clearfix"
            >
                <div class="front fl">个性签名</div>
                <div class="behide fr">
                    <div class="content">
                        {{ signature }}
                    </div>
                    <div class="icon icon_to"></div>
                </div>
            </navigator>
        </div>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import {AppLoginApi} from '@/api/AppLogin'
export default {
    data() {
        return {
            avatarUrl: '/static/images/user.png',
            name: '',
            signature: ''
        }
    },
    components: {
        'navigation-bar': NavigationBar
    },
    onShow() {
        this.getAppUserInfo()
    },

    methods: {
        //查询信息
        getAppUserInfo() {
            AppLoginApi.getAppUserInfo().then((res) => {
                if (res.statusCode === 200 && res.data) {
                    this.avatarUrl = res.data.avatarUrl
                    this.name = res.data.name
                    this.signature = res.data.signature ? res.data.signature : ''
                } else {
                    //用户信息获取失败
                }
            })
        },
        //选择图片
        toChooseAvatar() {
            wx.chooseImage({
                count: 1,
                sizeType: ['original', 'compressed'],
                sourceType: ['album', 'camera'],
                success(res) {
                    if (res.tempFilePaths && res.tempFilePaths.length > 0) {
                        wx.getImageInfo({
                            src: res.tempFilePaths[0],
                            success(resq) {
                                let redirectToUrl =
                                    '/pages/changeAvatar/main?avatarUrl=' +
                                    resq.path +
                                    '&width=' +
                                    resq.width +
                                    '&height=' +
                                    resq.height
                                wx.redirectTo({
                                    url: redirectToUrl
                                })
                            }
                        })
                    }
                },
                fail(err) {
                    console.log(err)
                }
            })
        }
    },
    onHide() {}
}
</script>

<style scoped></style>
