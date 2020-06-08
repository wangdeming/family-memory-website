<!--
* @des: 提示用户绑定手机号
* @date: 2020-03-31 11:32:01
* @version:  1.0
*
* Date                   Author               Description
* ------------------------------------------------------
* 2020-03-31             曹天笑               创建
-->
<template>
    <div class="bindPhoneNumTip" v-if="showModal" catchtouchmove="return">
        <div class="modal-box">
            <div class="content">
                <h1 class="title">提示</h1>
                <p class="word">为营造和谐环境，发布记忆前需绑定手机号。</p>
            </div>
            <div class="modal-footer">
                <div class="btn-cancel" @click="cancelTip">取消</div>
                <button
                    class="btn-confirm"
                    open-type="getPhoneNumber"
                    hover-class="none"
                    @getphonenumber="getphonenumber"
                    >确定</button
                >
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
        showModal: {
            type: Boolean,
            default: false
        }
    },
    created() {},
    methods: {
        getphonenumber(e) {
            this.$emit('getphonenumber', e)
        },
        cancelTip() {
            this.$emit('cancelTip')
        }
    }
}
</script>

<style scoped lang="less">
.bindPhoneNumTip {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.5);
    .modal-box {
        width: 72%;
        height: 140px;
        position: absolute;
        top: 50%;
        left: 14%;
        transform: translateY(-70px);
        background: #f9f9f9;
        border-radius: 6px;
        z-index: 101;
        overflow: hidden;
        .content {
            height: 94px;
            padding: 0 30px;
            text-align: center;
            display: flex;
            display: -webkit-flex;
            flex-direction: column;
            justify-content: center;
            .title {
                font-size: 18px;
                color: #000;
                margin-bottom: 6px;
            }
            .word {
                font-size: 14px;
                color: #333;
            }
        }
        .modal-footer {
            border-top: 1px solid #dedede;
            height: 46px;
            font-size: 34rpx;
            line-height: 46px;
            display: flex;
            display: -webkit-flex;
            flex-direction: row;
            text-align: center;
            .btn-cancel {
                width: 50%;
                color: #000;
                border-right: 1px solid #dedede;
            }
            .btn-confirm {
                width: 50%;
                color: #fd6258;
            }
        }
    }
}
</style>
