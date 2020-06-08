<!--
* @des: 转让管理员
* @date: 2020-03-04 10:05:26
* @version:  1.0
* 
* Date                   Author               Description
* ------------------------------------------------------
* 2020-04-10             曹磊                 创建
-->
<template>
    <!-- 创建家庭 -->
    <div class="Create_family">
        <navigation-bar showBack title="管理员转让"></navigation-bar>
        <div class="Addressbook modify">
            <div class="index-list">
                <scroll-view class="scroll_list" scroll-y="true">
                    <ul class="index-list-wrap bg-fff" ref="indexWrap">
                        <li
                            v-for="(item, index) in familyMemberList"
                            :key="item"
                            class="index-group-item"
                        >
                            <img :src="item.avatarUrl" class="avatar" alt="" />
                            <span class="name">{{
                                item.isAdmin ? item.userName + '(我)' : item.userName
                            }}</span>
                            <div class="checkbox item_sel" v-if="item.isAdmin">
                                <div class="radio disable"></div>
                            </div>
                            <div class="checkbox item_sel" v-if="!item.isAdmin">
                                <div :class="'radio ' + (currentIndex === index ? 'active' : '')" @click="updataFamily(item.userDisplayId, index)"></div>
                            </div>
                        </li>
                    </ul>
                </scroll-view>
            </div>
        </div>
        <button class="complain_com" @click="cancel">取消</button>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import {FamilyApi} from '@/api/Family.js'
export default {
    data() {
        return {
            familyMemberList: [], //家庭成员列表
            familyId: '',
            type: 1,
            currentIndex: 0
        }
    },
    components: {
        'navigation-bar': NavigationBar
    },
    onLoad(options) {
        this.type = Number(options.type)
        this.familyId = options.familyId ? options.familyId : ''
        this.getFamilyMemberList()
    },
    onUnload() {
        this.currentIndex = 0
    },
    onShow() {},
    methods: {
        getFamilyMemberList() {
            //获取家庭成员列表
            FamilyApi.getFamilyMember(this.familyId).then((res) => {
                if (res.statusCode === 200) {
                    this.familyMemberList = res.data
                }
            })
        },
        // 修改管理员
        updataFamily(id, index) {
            let self = this
            wx.showModal({
                content: '是否确认转让',
                success(res) {
                    if (res.confirm) {
                        // 修改家庭信息
                        FamilyApi.updateFamilyInfo(
                            {
                                adminDisplayId: id
                            },
                            self.familyId
                        ).then((res) => {
                            if (res.statusCode === 200) {
                                wx.showToast({
                                    title: '修改成功',
                                    icon: 'none'
                                })
                                self.currentIndex = index
                                wx.redirectTo({
                                    url: '/pages/familySet/main?familyId=' + self.familyId
                                })
                            }
                        })
                    }
                }
            })
        },
        cancel() {
            wx.redirectTo({
                url: '/pages/familySet/main?familyId=' + this.familyId
            })
        }
    }
}
</script>

<style scoped lang="less"></style>
