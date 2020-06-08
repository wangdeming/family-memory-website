<!--
* @des:  文件说明
* @date: 2020-03-02 15:21:08
* @version:  1.0
* 
* Date                   Author               Description
* ------------------------------------------------------
* 2020-02-27             邓紅麗               创建
-->
<template>
    <div class="complain">
        <navigation-bar showBack :title="title"></navigation-bar>
        <div class="complain_con clearfix">
            <div class="complain_title"><span class="note">*</span>选择投诉原因</div>
            <div class="complain_res">
                <radio-group class="radio-group allcomplain">
                    <label class="label_radio" v-for="(item, index) in items" :key="index">
                        <radio
                            class="res_radio"
                            :value="item.id"
                            :checked="compliantType === item.id"
                            @click="radioChange(item.id)"
                            color="#FD6258"
                        >
                            <text>{{ item.value }}</text>
                        </radio>
                    </label>
                </radio-group>
            </div>
        </div>
        <div class="complain_con clearfix">
            <div class="complain_title"><span class="note">*</span>描述投诉内容</div>
            <textarea class="content" maxlength="300" placeholder="请输入投诉内容" v-model="inputStr" focus  :show-confirm-bar="false"/>
            <div class="length_count"><text>{{inputStr.length}}</text>/300</div>
        </div>
        <div class="complain_explain">
            投诉说明：1、平台将在收到投诉的5个工作日内给予核实处理，非真实信息投诉不予处理；
            2、感谢您对独家记忆的支持，我们将努力维护平台环境，给您更好的体验，祝您生活愉快。
        </div>
        <button class="complain_com" @click="Complaint">提交</button>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import {Article} from '@/api/Article.js'
export default {
    data() {
        return {
            type: 1,
            title: '举报投诉',
            inputStr: '',
            compliantType: '', //默认状态
            articleId: '',
            items: [
                {id: 1, value: '违法违规'},
                {id: 2, value: '政治有害', checked: 'true'},
                {id: 3, value: '诈骗敲诈'},
                {id: 4, value: '侵权威胁'},
                {id: 5, value: '淫秽色情'},
                {id: 6, value: '事实争议'},
                {id: 7, value: '其他'}
            ]
        }
    },
    computed: {},
    components: {
        'navigation-bar': NavigationBar
    },
    onLoad(options) {
        this.articleId = options.articleId
    },
    onShow() {
        this.inputStr = ''
        this.compliantType = ''
    },
    methods: {
        radioChange: function(id) {
            this.compliantType = id
        },
        Complaint() {
            this.inputStr = this.inputStr.trim()
            if (this.inputStr === '') {
                wx.showToast({
                    title: '请描述投诉内容',
                    icon: 'none'
                })
            } else if (this.compliantType === '') {
                wx.showToast({
                    title: '请选择投诉原因',
                    icon: 'none'
                })
            } else {
                var parms = {
                    description: this.inputStr,
                    compliantType: this.compliantType,
                    articleId: this.articleId
                }
                Article.gocomplaints(parms).then((res) => {
                    if (res.statusCode === 200) {
                        wx.showToast({
                            title: '投诉成功',
                            icon: 'success'
                        })
                        wx.navigateTo({
                            url: '/pages/articeDetail/main?id=' + this.articleId
                        })
                    }
                })
            }
        }
    },
    created() {}
}
</script>

<style scoped></style>
