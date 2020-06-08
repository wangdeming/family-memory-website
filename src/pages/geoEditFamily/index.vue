<!--
* @des:  文件说明
* @date: 2020-03-04 09:32:41
* @version:  1.0
* 
* Date                   Author               Description
* ------------------------------------------------------
* 2020-03-04              邓紅麗               创建
-->
<template>
    <!-- 家庭管理,共同编辑页 -->
    <div class="geoEditFamily">
        <navigation-bar showBack title="共同编辑管理"></navigation-bar>
        <div class="box" v-for="item in familyMemberList" :key="item">
            <div class="geoEdit_item clearfix">
                <img :src="item.avatarUrl" alt="" />
                <span class="name">{{ item.userName }}</span>
                <switch v-if="!item.isAdmin"
                    class="fr"
                    :checked="item.editAllowed"
                    color="#FD6258"
                    @change="switchState($event, item)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import {FamilyApi} from '@/api/Family.js'
export default {
    data() {
        return {
            switch1Checked: true,
            switch2Checked: false,
            familyMemberList: [] //家庭成员列表
        }
    },
    components: {
        'navigation-bar': NavigationBar
    },
    onLoad(options) {
        this.familyId = options.familyId ? options.familyId : ''
        this.getFamilyMemberList(this.familyId)
    },
    methods: {
        getFamilyMemberList(id) {
            //获取家庭成员列表
            FamilyApi.getFamilyMember(id).then((res) => {
                if (res.statusCode === 200) {
                    this.familyMemberList = res.data
                }
            })
        },

        switchState($event, item) {
            let self = this
            // 修改家庭信息
            FamilyApi.updateFamilyInfo(
                {
                    editDisplayId: item.userDisplayId,
                    editAllowed: $event.mp.detail.value
                },
                self.familyId
            ).then((res) => {
                if (res.statusCode === 200) {
                    wx.showToast({
                        title: '修改成功',
                        icon: 'none'
                    })
                } else {
                    wx.showToast({
                        title: '修改失败',
                        icon: 'none'
                    })
                }
            })
        }
    },
    onShow() {},
    onHide() {}
}
</script>

<style scoped></style>
