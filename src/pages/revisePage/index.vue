<!--
* @des: 修改昵称页面
* @date: 2020-03-01 09:29:42
* @version:  1.0
*
* Date                   Author               Description
* ------------------------------------------------------
* 2020-03-01             曹天笑               创建
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
                    :placeholder="placeholder"
                    :show-confirm-bar="false"
                    :maxlength="maxlength"
                    v-model="value"
                ></textarea>
            </div>
            <div :class="'btn ' + (value ? 'active' : '')" @click="updatedInfo">完成</div>
        </div>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import {AppLoginApi} from '@/api/AppLogin'
export default {
    data() {
        return {
            title: '',
            placeholder: '',
            value: '',
            source: {
                name: '昵称',
                mark: '个性签名'
            },
            maxlength: 30, //修改昵称最多16个字符，个性签名最多30个字符
            type: '',
            params: {}
        }
    },
    onLoad: function(options) {
        let source = options.source
        this.value = options.value ? options.value : ''
        this.title = '修改' + this.source[source]
        this.placeholder = '请输入' + this.source[source]
        this.type = options.source
        if (options.source === 'name') {
            this.maxlength = 16
        } else {
            this.maxlength = 30
        }
    },
    components: {
        'navigation-bar': NavigationBar
    },
    methods: {
        updatedInfo() {
            let value = this.value.trim()
            if (value) {
                if (this.type === 'name') {
                    this.params.name = value
                } else {
                    this.params.signature = value
                }
                AppLoginApi.upDatedAppUserInfo(this.params, getApp().userInfo.displayId).then(
                    (res) => {
                        if (res.statusCode === 200) {
                            if (this.type === 'name') {
                                getApp().userInfo.name = value
                            } else {
                                getApp().userInfo.signature = value
                            }
                            wx.showToast({
                                title: '更新用户信息成功',
                                icon: 'none'
                            })
                            wx.navigateBack({
                                delta: 1
                            })
                        }
                    }
                )
            } else {
                wx.showToast({
                    title: '用户信息不能为空',
                    icon: 'none'
                })
            }
        }
    }
}
</script>

<style scoped></style>
