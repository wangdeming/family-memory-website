<template>
    <div
        id="popover"
        v-if="showPopover"
        class="popover-view"
        :style="{width: popW + 'rpx', right: popX + 'rpx', bottom: popY + 'rpx'}"
    >
        <div v-for="(item, index) in datalist" :key="index" class="popover-item" @click.stop="itemBtnClick(index)">{{ item }}</div>
    </div>
</template>

<script>
export default {
    name: 'Popover',
    props: ['showPopover', 'datalist', 'popX', 'popY'],
    data() {
        return {
            popW: 200
        }
    },
    created() {},
    methods: {
        onHide() {
            this.setData({
                showPopover: false
            })
        },
        itemBtnClick(index) {
            this.$emit('itemBtnClick', index)
        }
    }
}
</script>

<style scoped>
.popover-view {
    position: absolute;
    background-color: white;
    border-radius: 6rpx;
    border: 2rpx solid #eeeeee;
    z-index: 1;
    height: auto;
}
/* 实现三角形 */
.popover-view::before {
    content: '';
    width: 0;
    height: 0;
    border: 24rpx solid;
    position: absolute;
    bottom: -48rpx;
    left: 100rpx;
    border-color: #eeeeee transparent transparent;
}
.popover-view::after {
    content: '';
    width: 0;
    height: 0;
    border: 24rpx solid;
    position: absolute;
    bottom: -44rpx;
    left: 100rpx;
    border-color: #fff transparent transparent;
}
.popover-item {
    box-sizing: border-box;
    width: 100%;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 2rpx solid #eeeeee;
}
.popover-item:last-child {
    border: none;
}
</style>
