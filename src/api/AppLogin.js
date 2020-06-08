import Vue from 'vue'
const vm = new Vue()

// 小程序登录接口
const AppLoginApi = {
    /**
     * @des:  独家记忆用户认证接口,在独家记忆域名下添加登录态的cookie。
     * @param:  {string}  casToken  在认证中心认证通过后得到的凭证(必须)
     * @param:  {string}  redirectUrl  用凭证认证通过后的跳转地址(非必须)
     * @return:  {返回值数据类型}
     */
    addAppCookie(params) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/authentication',
            data: params
        })
    },
    /**
     * @des:  查询用户信息详情（不登录也可查看）
     * @param:  {string}  displayId  用户9位数的展示ID(必须) 查询当前用户自己的信息时，displayId 填 self
     * @return:  {返回值数据类型}
     */
    getAppUserInfo(displayId = 'self') {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/users/' + displayId
        })
    },
    /**
    * @des:  更新【独家记忆】业务中的用户信息
    * @param:  {number}  displayId  用户9位数的展示ID
    * @param:  {string}  name  修改的昵称
    * @param:  {string}  avatarUrl  修改的头像
    * @param:  {string}  signature  修改的签名
    * @return:  {返回值数据类型}
    */
    upDatedAppUserInfo(params, displayId) {
        return vm.$http.PUT({
            url: vm.$CONSTANTS.APPHOST + '/users/' + displayId,
            data: params
        })
    }
}

export {AppLoginApi}
