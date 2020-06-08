
<!--
* @des: 搜索历史和热门搜索组件
* @date: 2020-02-25 14:03:05
* @version:  1.0
*
* Date                   Author               Description
* ------------------------------------------------------
* 2020-02-25             曹天笑               创建
-->

<template>
    <div class="m_search_history">
        <div class="m_top_title clearfix">
            <div class="title f30 color-999 fl">{{ title }}</div>
            <div class="icon icon_delete fr" v-if="type === 1"></div>
        </div>
        <div class="m_search_list clearfix" v-if="list && list.length > 0">
            <div class="m_search_item f28 color-333 fl" v-for="item in list" :key="item">
                {{ item }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    props: {
        // 默认type=1为历史搜索，2为热门搜索
        type: {type: Number, default: 1},
        list: {type: Array, default: []}
    },
    computed: {
        title() {
            return this.type === 1 ? '历史搜索' : '热门推荐'
        }
    }
}
</script>
<style scoped lang="less">
.m_search_history {
    .m_top_title {
        height: 60rpx;
        line-height: 60rpx;
        .title {
        }
        .icon_delete {
            width: 32rpx;
            height: 34rpx;
            background: url('../assets/images/search_delet.svg') no-repeat;
            background-size: 32rpx 34rpx;
            margin-top: 13rpx;
        }
    }
    .m_search_list {
        .m_search_item {
            height: 72rpx;
            line-height: 72rpx;
            margin: 10rpx 0 20rpx 0;
            margin-right: 30rpx;
            padding: 0 28rpx;
            background: #f9f9f9;
            border-radius: 36px;
            letter-spacing: -0.34px;
        }
    }
}
</style>
