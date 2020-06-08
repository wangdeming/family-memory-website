<!--
* @des: 编写文章页面
* @date: 2020-03-04 09:31:59
* @version:  1.0
*
* Date                   Author               Description
* ------------------------------------------------------
* 2020-03-04             曹天笑               创建
* 2020-03-16             邓红丽               优化
-->
<template>
    <!-- 输入文章内容页面 -->
    <div class="m_write_artice">
        <navigation-bar showBack title="添加文字"></navigation-bar>
        <div class="box">
            <div class="textarea">
                <textarea
                    name=""
                    maxlength="5000"
                    focus
                    :show-confirm-bar="false"
                    placeholder="输入内容"
                    v-model="inputStr"
                    @input="bindButtonTap"
                ></textarea>
            </div>
            <div class="handler clearfix">
                <div class="count fl">
                    <text class="num">{{ inputStrlength }}</text>
                    <text class="num">/</text>
                    <text class="num">5000</text>
                </div>
                <div class="btn active fr" @click="done()">完成</div>
            </div>
        </div>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
export default {
    data() {
        return {
            inputStr: '',
            // from: 'defaultinput',
            type: '',
            modify: '',
            articleId: '',
            inputStrlength: 0,
            // fromButton: false,
            index: 0 //段落插入的位置
        }
    },
    components: {
        'navigation-bar': NavigationBar
    },
    onLoad(options) {
        console.log(options)
        this.type = options.type
        this.from = options.from
        this.modify = options.modify
        this.articleId = options.id
        this.articeTitle = decodeURIComponent(options.title)
        this.index = Number(options.index)
        this.inputStr = decodeURIComponent(options.wordDes)
        this.inputStrlength = this.inputStr.length
    },
    methods: {
        bindButtonTap() {
            this.inputStrlength = this.inputStr.length
        },
        done() {
            // let inputStr = this.inputStr.trim() //trim移除字符串的头尾空格---产品不需要去除空格
            let inputStr = this.inputStr
            let item = {}
            if (this.type === 'button') {
                item.resourceUrl = null
                item.text = inputStr
                item.showShareBtn = false
                // 添加段落类型 段落类型1文本2图片3音频4视频
                item.sectionType = 1
                if (this.index === -1) {
                    getApp().articeParts.splice(0, 0, item)
                } else {
                    getApp().articeParts.splice(this.index + 1, 0, item) //新增
                }
            } else if (this.type === 'input') {
                let sectionType = getApp().articeParts[this.index].sectionType
                if (inputStr === '' && sectionType === 1) {
                    //描述为空且类型为文字，便删除数组
                    getApp().articeParts.splice(this.index, 1)
                } else {
                    this.$set(getApp().articeParts[this.index], 'text', this.inputStr) //更换文章数组中某个图片
                }
            }
            if (this.from === 'undefined') {
                wx.redirectTo({
                    url:
                        '/pages/publishStep1/main?from=defaultinput' +
                        '&title=' +
                        encodeURIComponent(this.articeTitle)
                })
            } else {
                wx.redirectTo({
                    url:
                        '/pages/publishStep1/main?from=' +
                        this.from +
                        '&id=' +
                        this.articleId +
                        '&modify=' +
                        this.modify +
                        '&title=' +
                        encodeURIComponent(this.articeTitle)
                })
            }
        }
    },
    created() {}
}
</script>

<style scoped></style>
