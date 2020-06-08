<!--
* @des:  文件说明
* @date: 2020-03-04 10:05:26
* @version:  1.0
* 
* Date                   Author               Description
* ------------------------------------------------------
* 2020-03-04             邓紅麗               创建
* 2020-04-07             曹磊                 调接口
* 2020-04-08             曹磊                 顶部搜索功能
-->
<template>
    <!-- 创建家庭 -->
    <div class="Create_family">
        <navigation-bar showBack title="创建家庭"></navigation-bar>
        <div class="numbers" id="numbers">
            <div class="m_search_line clearfix">
                <div class="m_search_box fl">
                    <div class="m_box clearfix" v-if="showInput">
                        <div class="input_box fl">
                            <input
                                class="fl"
                                type="text"
                                placeholder="输入关键词搜索"
                                placeholder-style="color: #999999"
                                v-model="keyword"
                                @input="GetFriendsList()"
                            />
                        </div>
                        <div class="m_search_btn fr f32 color-333" @click="cancelSearch()"
                            >取消</div
                        >
                    </div>

                    <div class="selected_avatar clearfix" v-if="!showInput">
                        <div class="avatar_box fl">
                            <img
                                class="item fl"
                                v-for="(elem, index) in selectedMemberAvatarList"
                                :key="elem"
                                :src="elem"
                                alt=""
                                :style="{
                                    'left': translate * index + 'px'
                                }"
                            />
                        </div>
                        <div class="m_search_btn fr f32 color-333" @click="toSearch()">搜索</div>
                    </div>
                </div>
            </div>
            <div class="serch-info">可邀请相互关注的好友创建家庭，共同记录家庭专属回忆</div>
        </div>
        <div class="Addressbook">
            <div class="index-list">
                <scroll-view class="scroll_list" 
                    :scroll-top="scrollTop"
                    :scroll-into-view="scrollIntoView" 
                    scroll-with-animation 
                    v-if="MemberList && MemberList.length > 0" scroll-y>
                    <ul class="index-list-wrap" ref="indexWrap">
                        <li
                            v-for="(group, index) in MemberList"
                            :key="index"
                            class="index-group"
                            ref="indexGroup"
                            :id="maostr + group.title"
                        >
                            <h3 class="index-group-title">{{ group.title }}</h3>
                            <ul class="bg-fff">
                                <li
                                    v-for="(item, index1) in group.items"
                                    :key="index1"
                                    class="index-group-item"
                                >
                                    <img :src="item.avatarUrl" class="avatar" alt="" />
                                    <span class="name">{{ item.name }}</span>
                                    <label class="checkbox item_sel">
                                        <span
                                            class="block"
                                            :class="(item.checked ? 'checked ' : '') + (item.isFamilyMember ? 'disabled' : '')"
                                            :value="item.displayId"
                                            @click="pushData(item)"
                                        ></span>
                                    </label>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </scroll-view>

                <div class="index-nav">
                    <ul>
                        <li
                            v-for="(item, index) in indexList"
                            :key="index"
                            :data-index="index"
                            :class="'nav-item ' + (currentIndex == index ? 'active' : '')"
                            @click="toScrollPos(item, index)"
                            >{{ item }}</li
                        >
                    </ul>
                </div>
                <div class="empty" v-if="MemberList && MemberList.length == 0">无相互关注好友</div>
            </div>
        </div>
        <button class="complain_com" @click="confirm()">确定</button>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import {FamilyApi} from '@/api/Family.js'
export default {
    data() {
        return {
            MemberList: [], //家庭成员列表
            currentIndex: 0,
            currentIndicator: 'A',
            listHeight: [],
            firstHeight: [],
            scrollId: '',
            keyword: '',
            familyId: '',
            familyName: '',
            showInput: true, //是否显示搜索框
            isFromBtn: false, //是否是从家庭页面新增按钮进入
            selectedItem: [], //选择人员对象（包括id和头像）
            selectedMemberIdList: [], //选择人员的ID数组
            selectedMemberAvatarList: [], //选择人员的头像数组
            memberRestCount: 20, // 该家庭还能添加多少成员
            isToCreate: '', //是否为创建家庭
            scrollIntoView: '',
            scrollTop: 0,
            maostr: 'cao', //锚点跳转必须以字母开头
            translate: 0 //图片折叠
        }
    },
    watch: {
        currentIndex(newVal) {
            this.currentIndicator = this.MemberList[newVal].title
        }
    },
    components: {
        'navigation-bar': NavigationBar
    },
    computed: {
        indexList() {
            if (this.MemberList && this.MemberList.length > 0) {
                return this.MemberList.map((group) => {
                    return group.title.substring(0, 1)
                })
            } else {
                return []
            }
        }
    },
    onLoad(options) {
        this.familyId = options.familyId ? options.familyId : ''
        this.familyName = options.familyName ? options.familyName : ''
        this.isFromBtn = options.from
        this.isToCreate = options.isToCreate ? options.isToCreate : ''
        this.init()
        this.GetFriendsList()
    },
    onShow() {
        // this.scrollTop = 0
        // this.scrollIntoView = ''
    },
    methods: {
        init() {
            //初始化
            this.selectedItem = []
            this.selectedMemberIdList = []
            this.selectedMemberAvatarList = []
            this.showInput = true
            this.keyword = ''
            this.scrollTop = 0
            this.scrollIntoView = ''
        },

        // 获取用户的好友列表
        GetFriendsList() {
            let checkedUserIds =
                this.selectedMemberIdList.length > 0 ? this.selectedMemberIdList.join(',') : ''
            FamilyApi.GetMyFamilyFriendsList({
                familyId: this.familyId,
                keyword: this.keyword,
                checkedUserIds: checkedUserIds
            }).then((res) => {
                if (res.statusCode === 200) {
                    this.memberRestCount = res.data.memberRestCount
                    this.MemberList = res.data.userData
                    // 原用前端方法实现搜索时标记已选择人员(接口调整后废弃)
                    // if (this.selectedMemberIdList.length > 0) {
                    //     this.MemberList = this.MemberList.filter((item) => {
                    //         let myitem = ''
                    //         item.items.filter((value) => {
                    //             this.selectedMemberIdList.filter((elem) => {
                    //                 if (value.displayId === elem) {
                    //                     value.checked = true //将选择过的做上标记
                    //                 }
                    //                 myitem = value
                    //             })
                    //         })
                    //         return myitem
                    //     })
                    // }
                }
            })
        },

        getIdAvatarList() {
            this.selectedMemberIdList = this.selectedItem.map((e) => {
                return e.displayId
            })
            this.selectedMemberAvatarList = this.selectedItem.map((v) => {
                return v.avatarUrl
            })

            if (this.selectedMemberAvatarList.length === 0) {
                this.showInput = true
            } else {
                this.showInput = false
            }
        },

        // 将数据推入
        pushData(item) {
            let self = this
            if (!item.isFamilyMember) {
                if (self.selectedMemberIdList.length < self.memberRestCount) {
                    if (item.checked) {
                        self.selectedItem = self.selectedItem.filter((i) => {
                            return i.displayId !== item.displayId
                        })
                    } else {
                        self.showInput = false
                        self.selectedItem.push(item)
                    }
                    self.getIdAvatarList()
                    if (self.selectedMemberIdList.length > 10) {
                        self.translate = 260 / self.selectedMemberIdList.length
                    } else {
                        self.translate = 26
                    }
                     
                    item.checked = !item.checked
                } else if (self.selectedMemberIdList.length === self.memberRestCount && item.checked) {
                    self.selectedItem = self.selectedItem.filter((i) => {
                        return i.displayId !== item.displayId
                    })
                    if (self.selectedMemberIdList.length >= 10) {
                        
                    }
                    self.getIdAvatarList()

                    item.checked = !item.checked
                } else {
                    wx.showToast({
                        title: '添加失败，已超过家庭人数上限',
                        icon: 'none'
                    })
                    return false
                }
            } else {
                return false
            }
        },

        // 跳转到对应
        toScrollPos(item, index) {
            this.currentIndex = index
            this.scrollIntoView = this.maostr + item
        },

        //取消搜索
        cancelSearch() {
            this.keyword = ''
            this.GetFriendsList()
            if (this.selectedMemberAvatarList.length > 0) {
                this.showInput = true
            }
        },

        toSearch() {
            this.showInput = true
        },

        // 确定创建家庭
        confirm() {
            let self = this
            getApp().selectedMemberIdList = self.selectedMemberIdList
            if (self.memberRestCount !== 0) {
                if (self.selectedMemberIdList.length > 0) {
                    if (self.isFromBtn) {
                        // 如果从添加人员按钮进入则走这里的逻辑
                        FamilyApi.updateFamilyInfo(
                            {
                                memberDisplayIds: self.selectedMemberIdList,
                                name: self.familyName
                            },
                            self.familyId
                        ).then((res) => {
                            if (res.statusCode === 200) {
                                if (res.data.errorInfo.length > 0) {
                                    wx.showToast({
                                        title: res.data.errorInfo.join('\n'),
                                        icon: 'none'
                                    })
                                } else {
                                    wx.showToast({
                                        title: '更新成功',
                                        icon: 'none',
                                        success() {
                                            wx.redirectTo({
                                                url:
                                                    '/pages/myFamily/main?familyId=' + res.data.familyId
                                            })
                                        }
                                    })
                                }
                            } else {
                                wx.showToast({
                                    title: '更新失败',
                                    icon: 'none'
                                })
                            }
                        })
                    } else {
                        wx.navigateTo({
                            url: '/pages/familyName/main?isToCreate=' + self.isToCreate
                        })
                    }
                } else {
                    wx.showToast({
                        title: '人员不能为空',
                        icon: 'none'
                    })
                }
            } else {
                wx.showToast({
                    title: '超过家庭人数上限',
                    icon: 'none'
                })
                return false
            }
        }
    }
}
</script>

<style scoped lang="less"></style>
