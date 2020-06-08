import Vue from 'vue'
const vm = new Vue()

const UserApi = {
    /**
    * @des:  获取用户关系列表
    * @param:  {string}  displayId  参数说明
    * @param:  {string}  relationType  1 粉丝，2 关注
    * @param:  {string}  pageNo  第几页，默认1
    * @param:  {string}  pageSize  页大小，默认10
    * @return:  {返回值数据类型}
    */
    getFollowsFans(params, id) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/users/' + id + '/relations',
            data: params
        })
    },
    /**
     * @des:  关注某个用户
     * @param:  {string}  targetUserDisplayId  被关注用户的displayId
     * @return:  {返回值数据类型}
     */
    followUser(params) {
        return vm.$http.post({
            url: vm.$CONSTANTS.APPHOST + '/relation',
            data: params
        })
    },

    /**
     * @des:  取消对某个用户的关注
     * @param:  {string}  followerDisplayId  关注者的displayId
     * @param:  {string}  targetUserDisplayId  被关注者的displayId
     * @return:  {返回值数据类型}
     */
    cancelFollowUser(params) {
        return vm.$http.request(vm.$CONSTANTS.APPHOST + '/relation', 'DELETE', params)
    },

    /**
    * @des:  分页查询用户收藏的文章
    * @param:  {string}  displayId  用户显示ID必须
    * @param:  {string}  pageNo  用户显示ID非必须
    * @param:  {string}  pageSize  用户显示ID非必须
    * @return:  {返回值数据类型}
    */
    userFavoritesArticles(params) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/articles/favorites',
            data: params
        })
    }
}
export {UserApi}
