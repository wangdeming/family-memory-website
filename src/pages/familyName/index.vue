<!--
* @des: 创建家庭是填写家庭名称
* @date: 2020-04-03 11:29:22
* @version:  1.0
*
* Date                   Author               Description
* ------------------------------------------------------
* 2020-04-03             曹天笑               创建
-->
<template>
    <!-- 修改昵称，签名输入页 -->
    <div class="m_input_page">
        <navigation-bar showBack :title="title"></navigation-bar>
        <div class="box">
            <div class="textarea">
                <textarea
                    focus
                    name=""
                    id=""
                    placeholder="请设置家庭名称"
                    maxlength="16"
                    v-model="value"
                ></textarea>
            </div>
            <div class="btn active" @click="createFamily">{{ btnWord }}</div>
        </div>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import {FamilyApi} from '@/api/Family'
export default {
    data() {
        return {
            value: '',
            title: '创建家庭',
            btnWord: '立即创建',
            familyId: '',
            isFromSet: false,
            isToCreate: '',
            flag: false
        }
    },
    onLoad(options) {
        this.isFromSet = options.fromSet ? options.fromSet : ''
        this.isToCreate = options.isToCreate ? options.isToCreate : ''
        this.value = options.value ? options.value : ''
        this.title = options.fromSet ? '修改家庭名称' : '创建家庭'
        this.btnWord = options.fromSet ? '保存' : '立即创建'
        this.familyId = options.familyId ? options.familyId : ''
    },
    onShow() {
        this.flag = false
    },
    components: {
        'navigation-bar': NavigationBar
    },
    methods: {
        createFamily() {
            let self = this
            let value = self.value.trim()
            if (!self.isFromSet && !self.flag) {
                // 创建家庭
                FamilyApi.CreateFamily({
                    name: value,
                    memberDisplayIds: getApp().selectedMemberIdList
                }).then((res) => {
                    if (res.statusCode === 200) {
                        wx.showToast({
                            title: '创建成功',
                            icon: 'none'
                        })
                        self.flag = true
                        wx.redirectTo({
                            url: '/pages/myFamily/main?isToCreate=' + self.isToCreate
                        })
                    }
                })
            } else {
                if (value && !self.flag) {
                    // 修改家庭信息
                    FamilyApi.updateFamilyInfo(
                        {
                            name: value
                        },
                        self.familyId
                    ).then((res) => {
                        if (res.statusCode === 200) {
                            wx.showToast({
                                title: '修改成功',
                                icon: 'none'
                            })
                            self.flag = true
                            wx.redirectTo({
                                url: '/pages/familySet/main?familyId=' + self.familyId
                            })
                        }
                    })
                } else {
                    wx.showToast({
                        title: '修改名称不能为空',
                        icon: 'none'
                    })
                }
            }
        }
    }
}
</script>

<style scoped></style>
