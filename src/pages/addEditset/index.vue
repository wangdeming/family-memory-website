<!--
* @des:  文件说明
* @date: 2020-03-03 16:21:02
* @version:  1.0
* 
* Date                   Author               Description
* ------------------------------------------------------
* 2020-03-03             邓紅麗               创建
* 2020-04-02             邓紅麗              接口对接
-->
<template>
    <!-- 文章-设置页 -->
    <div class="a_setting">
        <navigation-bar showBack title="设置"></navigation-bar>
        <div class="box">
            <div class="category" v-if="source == 'one'">
                <div v-for="(item, index) in tabData" :key="index">
                    <div class="set_item" @click="selcategory(index, item.id)">
                        <div
                            class="front fl main_color"
                            v-if="editName === item.categoryName"
                            >{{ item.categoryName }}</div
                        >
                        <div
                            class="front fl"
                            v-else
                            :class="editName === item.categoryName  ? 'main_color' : ''"
                            >{{ item.categoryName }}</div
                        >
                        <div class="behide fr" v-if="editName === item.categoryName">
                            <img src="../../assets/images/set_xuanzhong.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="category" v-if="source == 'two'">
                <div v-for="(item, index) in visibilityData" :key="index">
                    <div class="set_item" @click="selWhosee(index, item.id)">
                        <div class="front fl main_color" v-if="editName === item.name">{{
                            item.name
                        }}</div>
                        <div
                            class="front fl"
                            v-else
                            :class="editName === item.name ? 'main_color' : ''"
                            >{{ item.name }}</div
                        >
                        <div class="behide fr" v-if="editName === item.name">
                            <img src="../../assets/images/set_xuanzhong.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="category" v-if="source == 'three'">
                <div v-for="(item, index) in commentablityData" :key="index">
                    <div class="set_item" @click="selWhocomment(index, item.id)">
                        <div class="front fl main_color" v-if="editName === item.name">{{
                            item.name
                        }}</div>
                        <div
                            class="front fl"
                            v-else
                            :class="editName === item.name ? 'main_color' : ''"
                            >{{ item.name }}</div
                        >
                        <div class="behide fr" v-if="editName === item.name">
                            <img src="../../assets/images/set_xuanzhong.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="category" v-if="source == 'four'">
                <div v-for="(item, index) in familiesData" :key="index">
                    <div class="set_item" @click="selfamily(index, item.id)">
                        <div class="front fl main_color" v-if="editName === item.name">{{
                            item.name
                        }}</div>
                        <div
                            class="front fl"
                            v-else
                            :class="editName === item.name ? 'main_color' : ''"
                            >{{ item.name }}</div
                        >
                        <div class="behide fr" v-if="editName === item.name">
                            <img src="../../assets/images/set_xuanzhong.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import {Article} from '@/api/Article.js'
export default {
    data() {
        return {
            source: 'one',
            categoryIndex: 0,
            categoryid: '',
            whoseeIndex: 0,
            whoseeid: '',
            WhocommentIndex: 0,
            Whocommentid: '',
            familyIndex: 0,
            familyid: '',
            visibilityData: [
                {name: '所有人可见', id: 1},
                {name: '仅自己可见', id: 2}
            ],
            commentablityData: [
                {name: '所有人可评论', id: 1},
                {name: '我的粉丝可评论', id: 2},
                {name: '不可评论', id: 3}
            ],
            familiesData: [],
            tabData: [],
            editName: ''
        }
    },
    computed: {},
    components: {
        'navigation-bar': NavigationBar
    },
    onLoad: function(options) {
        this.source = options.source
        this.editName = options.name
    },
    onShow() {
        this._getCategories()
        this._getfamilies()
    },
    methods: {
        // 查询文章类别列表
        _getCategories() {
            Article.Categories({isReject: true}).then((res) => {
                if (res.statusCode === 200) {
                    this.tabData = res.data
                }
            })
        },
        // 查询家庭列表
        _getfamilies() {
            var params = {
                simpleData: true,
                editAllowed: true
            }
            Article.getfamilies(params).then((res) => {
                if (res.statusCode === 200) {
                    this.familiesData = res.data
                    var firstdata = {
                        name: '不使用',
                        id: 0
                    }
                    this.familiesData.splice(0, 0, firstdata)
                }
            })
        },
        // 选择文章类别
        selcategory(index, id) {
            this.categoryIndex = index
            this.categoryid = id
            getApp().SetState.category = id
            wx.navigateBack({
                delta: 1
            })
        },
        selWhosee(index, id) {
            this.whoseeIndex = index
            this.whoseeid = id
            getApp().SetState.Whosee = id
            wx.navigateBack({
                delta: 1
            })
        },
        selWhocomment(index, id) {
            this.WhocommentIndex = index
            this.Whocommentid = id
            getApp().SetState.Whocomment = id
            wx.navigateBack({
                delta: 1
            })
        },
        selfamily(index, id) {
            this.familyIndex = index
            this.familyid = id
            getApp().SetState.family = id
            wx.navigateBack({
                delta: 1
            })
        }
    }
}
</script>

<style scoped></style>
