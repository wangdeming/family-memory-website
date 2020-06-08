function request(url, method, data, header) {
    wx.showLoading({
        title: '加载中'
    })
    let cookie = getApp().loginState.cookie.fm_sid
    return new Promise((resolve, reject) => {
        wx.request({
            url: url,
            method: method,
            data: data,
            header: header || {
                'content-type': 'application/json',
                Cookie: 'fm_sid=' + cookie
            },
            success: function(res) {
                wx.hideLoading()
                // 200(OK)：请求成功
                // 400(BAD_REQUEST)：请求参数不完整或参数有误
                // 401(UNAUTHORIZED)：用户未登录
                // 403(FORBIDDEN)：用户无权限操作
                // 404(NOT_FOUND)：请求资源不存在
                // 410(GONE)：用户被冻结（故被请求的资源不可用）
                // 500(INTERNAL_SERVER_ERROR)：服务端内部处理出错
                switch (res.statusCode) {
                    case 200:
                        wx.hideLoading()
                        break
                    case 401:
                        //用户未登录
                        wx.navigateTo({
                            url: '/pages/login/main'
                        })
                        break
                    case 400:
                        wx.showToast({
                            title: '请求参数不完整或参数有误',
                            icon: 'none'
                        })
                        break
                    case 403:
                        wx.showToast({
                            title: '用户无权限操作',
                            icon: 'none'
                        })
                        break
                    case 404:
                        wx.showToast({
                            title: '请求资源不存在',
                            icon: 'none'
                        })
                        break
                    case 406: 
                        //  文章正在被编辑
                        wx.showModal({
                            title: '',
                            content: '文章正在被其他家庭成员编辑，请稍后再参与编辑。',
                            showCancel: false,
                            confirmText: '我知道了',
                            confirmColor: '#FD6258',
                            success(res) {
                                if (res.confirm) {
                                    console.log('用户点击确定')
                                }
                            }
                        })
                        break
                    case 409:
                        // 有敏感信息
                        wx.showToast({
                            title: res.data.message,
                            icon: 'none',
                            duration: 2000,
                            complete() {
                                return false
                            }
                        })
                        break
                    case 410:
                        //用户被冻结
                        wx.reLaunch({
                            url: '/pages/410/main'
                        })
                        break
                    case 500:
                        wx.showToast({
                            title: '服务端内部处理出错',
                            icon: 'none'
                        })
                        break
                    default:
                        wx.showToast({
                            title: '请求失败',
                            icon: 'none'
                        })
                }
                resolve(res)
            },
            fail: function(res) {
                wx.showToast({
                    title: '请求失败',
                    icon: 'none'
                })
                reject(res)
            },
            complete: function() {
                // wx.hideLoading()
            }
        })
    })
}

function get(obj) {
    return request(obj.url, 'GET', obj.data, obj.header)
}

function post(obj) {
    return request(obj.url, 'POST', obj.data, obj.header)
}

function PUT(obj) {
    return request(obj.url, 'PUT', obj.data, obj.header)
}

function DELETE(obj) {
    return request(obj.url, 'DELETE', obj.data, obj.header)
}
export default {
    request,
    get,
    post,
    PUT,
    DELETE
}
