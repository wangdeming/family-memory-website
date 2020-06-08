<!--
* @des:  文件说明
* @date: 2020-03-02 15:21:37
* @version:  1.0
* 
* Date                   Author               Description
* ------------------------------------------------------
* 2020-02-28            邓紅麗               创建
-->
<template>
    <div class="CreatFamily">
        <navigation-bar showBack :title="title"></navigation-bar>
        <div class="my_Family">
            <img src="../../assets/images/family_pic.svg" alt="">
            <div class="Family_t1 color-333">创建“我的家庭”开启家庭回忆</div>
            <div class="Family_t2 color_999"> 全家一起写回忆，编织专属全家的共同记忆</div>
        </div>
        <button class="complain_com" @click="toFamilyIndexBar">创建我的家庭</button>
    </div>
</template>

<script>

import NavigationBar from '@/components/NavigationBar'
export default {
    data() {
        return {
            type: 1,
            title: '我的家庭',
            isQuit: ''
        }
    },
    computed: {},
    components: {
        'navigation-bar': NavigationBar
    },
    onLoad(options) {
        this.isQuit = options.isQuit ? options.isQuit : ''
    },
    onUnload() {
        if (this.isQuit) {
            wx.switchTab({
                url: '/pages/mine/main'
            })
        }
    },
    methods: {
        toFamilyIndexBar() {
            wx.navigateTo({
                url: '/pages/familyIndexBar/main?isToCreate=isToCreate'
            })
        }
    },
    created() {}
}
</script>

<style scoped lang="less"></style>
