import Vue from 'vue'

const CONFIG = {
    HOST: 'http://interface.ibdsr.cn/mock/12/'
}

const vm = new Vue()

const indexApi = {
    /**
     * 1.1分页查询文章
     * @param {offset} params
     * @param {limit} params
     * @param {articleStatus} params
     */
    getArticleList(params) {
        return vm.$http.get({
            url: CONFIG.HOST + 'articleList',
            data: params,
            header: {'Content-type': 'application/x-www-form-urlencoded'}
        })
    },

    /**
     * @des:  获取微信小程序页面的二维码
     * @param:  {参数数据类型}  参数名  参数说明
     * @return:  {buffer} buffer
     */
    getQrCode(params) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/qrCodeFile',
            data: params
        })
    }
}

export {indexApi}
