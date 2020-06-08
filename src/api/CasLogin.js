import Vue from 'vue'
const vm = new Vue()

// 认证中心登录接口
const CasLoginApi = {
    /**
    * @des:  通过参数在【认证中心】进行登录认证
    * @param:  {authMethod}  认证方式 1（用户名+密码认证）, 2（微信小程序code认证） 必须
    * @param:  {redirectUrl}  认证通过后的跳转地址（经URL编码），以便在认证通过后进行跳转 必须
    * @param:  {userName}  用户名（密码验证时传入） 非必须
    * @param:  {password}  密码（密码验证时传入） 非必须
    * @param:  {wechatCode}  微信登录凭证code（微信认证时传入） 非必须
    */
    LoginCasWithCode: function(params) {
        return vm.$http.post({
            url: vm.$CONSTANTS.CASHOST + '/auth/login',
            data: params,
            header: {
                'content-type': 'application/json',
                Cookie: 'cas_sid=' + getApp().loginState.cookie.cas_sid
            }
        })
    },
    /**
    * @des:  通过cookie进行登录认证（需有认证中心的Cookie才能认证通过）get方法封装过cookie
    * @param:  {redirectUrl}  认证通过后的跳转地址（经URL编码），以便在认证通过后进行跳转
    */
    GetCasLoginState: function(params, header) {
        return vm.$http.get({
            url: vm.$CONSTANTS.CASHOST + '/auth/login',
            data: params,
            header: header
        })
    },
    /**
    * @des:  更新【认证中心】里用户的个人信息（这里只是绑定手机号）
    * @param:  {string}  wxInitialVector  AES算法初始向量
    * @param:  {string}  wxEncryptedData  微信返回的加密数据
    */
    UpdateCasUserInfo: function(params, header) {
        return vm.$http.PUT({
            url: vm.$CONSTANTS.CASHOST + '/user/update',
            data: params,
            header: header
        })
    }
}

export {CasLoginApi}
