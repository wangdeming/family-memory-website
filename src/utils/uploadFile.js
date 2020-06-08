/**
 * @des: 上传文件功能方法
 * @date: 2020-03-20 11:11:05
 * @version:  1.0
 *
 * Date                   Author               Description
 * ------------------------------------------------------
 * 2020-03-20             曹天笑               创建
 * 2020-03-20             曹天笑               封装上传文件方法
 */

function uploadFile(data) {
    wx.showLoading({
        title: '上传中'
    })
    var i = data.i ? data.i : 0, //当前上传的哪张(多个文件上传时显示当前文件序号)
        success = data.success ? data.success : 0, //上传成功的个数
        fail = data.fail ? data.fail : 0 //上传失败的个数

    return new Promise((resolve, reject) => {
        wx.uploadFile({
            url: data.url,
            filePath: data.path[i],
            name: 'file', //这里根据自己的实际情况改
            formDate: null, //这里是上传文件时一起上传的数据
            header: {
                'content-type': 'multipart/form-data',
                'Cookie': 'fm_sid=' + getApp().loginState.cookie.fm_sid
            },
            success: (resp) => {
                wx.hideLoading()
                // console.log(resp, 'resp')
                if (resp.statusCode === 200) {
                    success++ //上传成功的变量+1
                    // console.log('上传服务器成功')
                    resolve(resp)
                } else {
                    fail++ //上传失败的变量+1
                    // console.log('上传服务器失败')
                    wx.showToast({
                        title: '上传服务器失败',
                        icon: 'none'
                    })
                }
            },
            fail: (res) => {
                wx.hideLoading()
                fail++
                console.log('fail:' + i + 'fail:' + fail)
                wx.showToast({
                    title: '上传服务器失败',
                    icon: 'none'
                })
                reject(res)
            },
            complete: () => {
                wx.hideLoading()
                // console.log(i)
                i++
                if (i === data.path.length) {
                    //当文件传完时，停止调用
                    // console.log('执行完毕')
                    // console.log('成功：' + success + ' 失败：' + fail)
                } else {
                    //若文件还没有传完，则继续调用函数
                    // console.log(i)
                    data.i = i
                    data.success = success
                    data.fail = fail
                    uploadFile(data)
                }
            }
        })
    })
}

export {uploadFile}
