<!--
* @des: 搜索页面(暂时废弃)
* @date: 2020-03-01 09:30:18
* @version:  1.0
*
* Date                   Author               Description
* ------------------------------------------------------
* 2020-03-01             曹天笑               创建
-->
<template>
    <!-- 搜索页面 -->
    <div class="counter-warp">
        <navigation-bar showBack title="搜索"></navigation-bar>
        <div class="m_search">
            <div class="container">
                <div class="m_search_line mb-20 clearfix">
                    <div class="m_search_box fl">
                        <div class="m_box">
                            <input
                                type="text"
                                placeholder="输入关键词搜索"
                                placeholder-style="color: #999999"
                            />
                        </div>
                    </div>
                    <div class="m_search_btn fl f32 color-333">取消</div>
                </div>

                <div>
                    <!-- 历史搜索 -->
                    <search-item :list="historySearch"></search-item>
                    <!-- 热门推荐 -->
                    <search-item :list="hotSearch" type="2"></search-item>
                </div>

                <!-- 搜索结果 -->
                <div class="m_search_result">
                    <div class="u_item">
                        <div class="author_info f28 color-999 clearfix">
                            <div class="author_avatar fl clearfix">
                                <image
                                    class="fl"
                                    src="/static/images/user.png"
                                    mode="aspectFit"
                                    alt="avatar"
                                />
                                <div class="name fl">用户名称</div>
                            </div>
                            <div class="handler_line fr">
                                <span>2019-20-20</span>
                            </div>
                        </div>
                        <div class="article_detail clearfix">
                            <div class="article_pic fl">
                                <image src="/static/images/pic.png" mode="aspectFit" />
                            </div>
                            <div class="article_des fr">
                                <h3 class="title f32 color-333">俗语：“没钱不碰三生意呀</h3>
                                <p class="word f28 color-999">没钱不碰三生意没钱不碰三生意没钱不碰三生意意意意没没钱不碰三生意没钱不碰三生意没钱不碰三生意意意意没</p>
                                <div class="count f24 color-999">345</div>
                            </div>
                        </div>
                    </div>
                    <div class="u_item">
                        <div class="author_info f28 color-999 clearfix">
                            <div class="author_avatar fl clearfix">
                                <image
                                    class="fl"
                                    src="/static/images/user.png"
                                    mode="aspectFit"
                                    alt="avatar"
                                />
                                <div class="name fl">用户名称</div>
                            </div>
                            <div class="handler_line fr">
                                <span>2019-20-20</span>
                            </div>
                        </div>
                        <div class="article_detail clearfix">
                            <div class="article_pic fl">
                                <image src="/static/images/pic.png" mode="aspectFit" />
                            </div>
                            <div class="article_des fr">
                                <h3 class="title f32 color-333">俗语：“没钱不碰三生意呀</h3>
                                <p class="word f28 color-999">没钱不碰三生意没钱不碰三生意没钱不碰三生意意意意没没钱不碰三生意没钱不碰三生意没钱不碰三生意意意意没</p>
                                <div class="count f24 color-999">345</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import SearchItem from '@/components/SearchItem'
export default {
    data() {
        return {
            historySearch: ['豆豉果', '防控', '顶级特产零食', '测试', '顶级', '头疼啊'],
            hotSearch: ['豆豉果', '防控', '顶级特产零食', '测试', '顶级']
        }
    },
    components: {
        'navigation-bar': NavigationBar,
        'search-item': SearchItem
    },

    methods: {},
    created() {}
}
</script>

<style scoped>
.m_search_result .author_info {
    margin-top: 40rpx;
}
</style>
