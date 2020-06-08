<!--
* @des:  文件说明
* @date: 2020-03-02 15:23:07
* @version:  1.0
* 
* Date                   Author               Description
* ------------------------------------------------------
* 2020-02-28             邓紅麗               创建
-->
<template>
    <div class="set_Family">
        <navigation-bar showBack :title="title"></navigation-bar>
        <div class="my_set">
            <div class="family_number">
                <div class="main_mumber">
                    <img class="huangguan" src="../../assets/images/family_huangguan.svg" alt="" />
                    <img
                        class="touxiang"
                        v-for="item in familyInfo.memberList"
                        :key="item"
                        :src="item.avatarUrl"
                        alt=""
                    />
                    <img
                        class="add_mun"
                        v-if="type == 1 && memberRestCount > 0"
                        @click="toAddFamilyNum"
                        src="../../assets/images/family_add.svg"
                        alt=""
                    />
                </div>
            </div>
            <div class="set_list">
                <ul>
                    <li @click="toSetPage('/pages/familyName/main', familyInfo.name)">
                        <span>家庭名称</span>
                        <span class="fa_info">
                            <span class="word">{{ familyInfo.name }}</span>
                            <img
                                v-if="type == 1"
                                src="/static/images/my_icon_more.svg"
                                alt=""
                            />
                        </span>
                    </li>
                    <li @click="toSetPage('/pages/modifyFamilyAdmin/main')">
                        <span>{{ type == 1 ? '管理员转让' : '管理员' }}</span>
                        <span class="fa_info">
                            <span class="word">{{ type == 1 ? '我' : familyInfo.adminName }}</span>
                            <img
                                v-if="type == 1"
                                src="/static/images/my_icon_more.svg"
                                alt=""
                            />
                        </span>
                    </li>
                    <li v-if="type == 1" @click="toSetPage('/pages/geoEditFamily/main')">
                        <span>谁可参与共同编辑</span>
                        <span class="fa_info">
                            <img src="/static/images/my_icon_more.svg" alt="" />
                        </span>
                    </li>
                    <li v-if="type == 2">
                        <span>共同编辑</span>
                        <span class="fa_info">
                            {{ familyInfo.visitorEditAllowed ? '可参与' : '不可参与' }}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <button class="set_com bg-fff" @click="quitFamily">退出家庭</button>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import {FamilyApi} from '@/api/Family.js'
export default {
    data() {
        return {
            type: 1, //家主1，其他人员2
            familyId: '',
            memberRestCount: 20, // 该家庭还能添加多少成员
            familyInfo: {}, //家庭信息
            familyCount: 5 //家庭数
        }
    },
    components: {
        'navigation-bar': NavigationBar
    },

    computed: {
        title() {
            return this.type === 1 ? '家庭设置' : '家庭资料'
        }
    },

    onLoad(options) {
        this.familyId = options.familyId
        this.getFamilyList()
        this.GetFamilyInfo(this.familyId)
        this.GetFriendsList()
    },

    methods: {
        // 获取用户的家庭列表(如果只有一个家庭的话，退出时要跳转到创建家庭页)
        getFamilyList() {
            FamilyApi.GetUserFamilyList({
                simpleData: true
            }).then((res) => {
                if (res.statusCode === 200) {
                    this.familyCount = res.data.length
                }
            })
        },

        // 获取用户的好友列表
        GetFriendsList() {
            FamilyApi.GetMyFamilyFriendsList({
                familyId: this.familyId,
                keyword: '',
                checkedUserIds: ''
            }).then((res) => {
                if (res.statusCode === 200) {
                    this.memberRestCount = res.data.memberRestCount
                }
            })
        },

        // 获取单个家庭信息
        GetFamilyInfo(id) {
            FamilyApi.GetFamilyInfo(id).then((res) => {
                if (res.statusCode === 200) {
                    this.familyInfo = res.data
                    this.type = this.familyInfo.visitorIsAdmin ? 1 : 2
                }
            })
        },

        // 跳转到添加家庭成员页
        toAddFamilyNum() {
            wx.redirectTo({
                url:
                    '/pages/familyIndexBar/main?familyId=' +
                    this.familyId +
                    '&familyName=' +
                    this.familyInfo.name +
                    '&from=button'
            })
        },

        // 跳转到设置页面
        toSetPage(pageUrl, value) {
            if (this.type === 1) {
                wx.redirectTo({
                    url:
                        pageUrl +
                        '?fromSet=fromSet&familyId=' +
                        this.familyId +
                        '&type=' +
                        this.type + 
                        '&value=' + value
                })
            } else {
            }
        },

        // 退出家庭
        quitFamily() {
            let self = this
            let familyId = self.familyId
            wx.showModal({
                content: '是否确认退出家庭',
                success(v) {
                    if (v.confirm) {
                        FamilyApi.updateFamilyInfo(
                            {
                                quitDisplayId: getApp().userInfo.displayId
                            },
                            familyId
                        ).then((res) => {
                            if (res.statusCode === 200) {
                                getApp().currentFamily = ''
                                if (self.familyCount < 2) {
                                    wx.redirectTo({
                                        url: '/pages/CreatFamily/main?isQuit=isQuit'
                                    })
                                } else {
                                    wx.redirectTo({
                                        url: '/pages/myFamily/main'
                                    })
                                }
                            } else {
                                wx.showToast({
                                    title: '退出失败',
                                    icon: 'none'
                                })
                            }
                        })
                    } else {
                        console.log('用户点击取消')
                    }
                },
                fail() {}
            })
        }
    }
}
</script>

<style scoped lang="less">
.set_Family .my_set .family_number .main_mumber .touxiang {
    padding-left: 0;
    margin-left: 10px;
}
</style>
