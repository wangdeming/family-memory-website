<!--
* @des:  文件说明
* @date: 2020-03-02 15:51:41
* @version:  1.0
* 
* Date                   Author               Description
* ------------------------------------------------------
* 2020-03-02             邓紅麗               创建
-->
<template>
    <!-- 生活圈，用户名称 -->
    <div class="personalData">
        <navigation-bar showBack showShare :title="title"></navigation-bar>
        <div class="user_info">
                <div class="info_detail">
                    <div class="user_main">
                        <div class="avatar">
                            <image src="../../assets/images/girl.png" />
                        </div>
                        <div class="user_name color-333 f36 fontbold">用户名称</div>
                        <div class="user_id color-999 f28">ID:123456789</div>
                    </div>
                    <div class="user_data user_gz">
                        <p class="num f32 color-333">54</p>
                        <p class="word f32 color-999">关注</p>
                    </div>
                    <div class="user_data user_fans">
                        <p class="num f32 color-333">87</p>
                        <p class="word f32 color-999">粉丝</p>
                    </div>

                    <div class="personal_btn">
                        <span class="num color-fff f28">家庭</span>
                    </div>
                </div>
                <div class="user_des f28 color-666">
                    默认获取微信的个性签默认获取微信的个性签默
                    认获取微信的个性签
                </div>
            </div>
        
        <div class="user_article clearfix">
            <div class="tab_bar_item active fl">文章<text class="num">999</text></div>
            <div class="tab_bar_item fl">收藏<text class="num">999</text></div>
        </div>
        <div class="container">
            <div class="article_list">
                <div class="article_item">
                    <div class="title">
                        俗语：“没钱不碰三生意，有钱不做三买卖”，创业者值得一看！
                    </div>
                    <div class="pic_box">
                        <image mode="aspectFill" src="/static/images/pic.png" />
                        <div class="tip_line">
                            <span class="tip_btn">公开</span>
                            <span class="tip_btn">共同编辑</span>
                        </div>
                    </div>
                    <div class="handler_line clearfix">
                        <div class="data_line fl clearfix">
                            <div class="data_item fl">
                                <span class="num">250</span>
                                <span>阅读</span>
                            </div>
                            <div class="dot fl"></div>
                            <div class="data_item fl">
                                <span class="num">88</span>
                                <span>评论</span>
                            </div>
                            <div class="dot fl"></div>
                            <div class="data_item fl">
                                <span class="num">250</span>
                                <span>点赞</span>
                            </div>
                        </div>
                        <div class="fr more_btn"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
export default {
    data() {
        return {
            type: 1,
            title: '用户名称'
        }
    },
    computed: {},
    components: {
        'navigation-bar': NavigationBar
    },

    methods: {},
    created() {}
}
</script>

<style scoped>

</style>
