/**========================分         割         线==================
 *                             _ooOoo_
 *                            o8888888o
 *                            88" . "88
 *                            (| -_- |)
 *                            O\  =  /O
 *                         ____/`---'\____
 *                       .'  \\|     |//  `.
 *                      /  \\|||  :  |||//  \
 *                     /  _||||| -:- |||||-  \
 *                     |   | \\\  -  /// |   |
 *                     | \_|  ''\---/''  |   |
 *                     \  .-\__  `-`  ___/-. /
 *                   ___`. .'  /--.--\  `. . __
 *                ."" '<  `.___\_<|>_/___.'  >'"".
 *               | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *               \  \ `-.   \_ __\ /__ _/   .-` /  /
 *          ======`-.____`-.___\_____/___.-`____.-'======
 *                             `=---='
 *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *                             永无 BUG 
**/
<script>
/* eslint-disable */
export default {
    created() {
        // 关闭微信自带的tabBar，使用自定义的tabBar
        wx.hideTabBar()

        // 微信授权

        // 调用API从本地缓存中获取数据
        /*
         * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
         * 微信：mpvue === wx, mpvuePlatform === 'wx'
         * 头条：mpvue === tt, mpvuePlatform === 'tt'
         * 百度：mpvue === swan, mpvuePlatform === 'swan'
         * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
         */
        let logs
        if (mpvuePlatform === 'my') {
            logs = mpvue.getStorageSync({key: 'logs'}).data || []
            logs.unshift(Date.now())
            mpvue.setStorageSync({
                key: 'logs',
                data: logs
            })
        } else {
            logs = mpvue.getStorageSync('logs') || []
            logs.unshift(Date.now())
            mpvue.setStorageSync('logs', logs)
        }
    }
}
</script>
<style>
    @import url('./assets/css/iconfont.css');
</style>
<style lang="less">
    @import url('./assets/css/common.less');
    @import url('./assets/css/style.less');
    @import url('./assets/css/lifeCircle.less'); //生活圈
    @import url('./assets/css/mine.less'); //我的
    @import url('./assets/css/add.less'); //新增
    @import url('./assets/css/familyIndexBar.less'); //家庭-创建家庭-通讯录 -我的 （100%）
</style>
