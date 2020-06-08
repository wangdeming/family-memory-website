import Vue from 'vue'
const vm = new Vue()

const FamilyApi = {
    /**
    * @des:  创建家庭
    * @param:  {string}  name  家庭名称
    * @param:  {string}  memberDisplayIds  家庭成员的displayId列表
    * @return:  {返回值数据类型}
    */
    CreateFamily(params) {
        return vm.$http.post({
            url: vm.$CONSTANTS.APPHOST + '/families',
            data: params
        })
    },

    /**
    * @des: 创建家庭时获取用户的好友列表
    * @param:  {string}  keyword  参数说明
    * @param:  {string}  familyId  参数说明
    * @param:  {number}  checkedUserIds  参数说明
    * @return:  {返回值数据类型}
    */
    GetMyFamilyFriendsList(params) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/users/friends',
            data: params
        })
    },

    /**
    * @des:  查询家庭列表（包括获取简单家庭名称列表）
    * @param:  {Boolean}  simpleData  是否返回简单数据（true或false）
    * @return:  {返回值数据类型}
    */
    GetUserFamilyList(params) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/families',
            data: params
        })
    },

    /**
    * @des:  查询单个家庭的信息
    * @param:  {number}  familyId  查询的家庭ID
    * @return:  {返回值数据类型}
    */
    GetFamilyInfo(familyId) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/families/' + familyId
        })
    },

    /**
    * @des:  更新家庭信息
    * @param:  {array}  memberDisplayIds  加入家庭的用户displayId列表（家庭增加成员时传入）
    * @param:  {string}  quitDisplayId  退出家庭的用户的displayId（用户退出家庭时传入）
    * @param:  {string}  name  家庭名称（更新一般家庭信息时使用）
    * @param:  {string}  adminDisplayId  管理员的displayId（更新一般家庭信息时使用）
    * @param:  {string}  editDisplayId  共同编辑相关用户的 displayId（增/减家庭的可共同编辑用户）
    * @param:  {Boolean}  editAllowed  是否允许编辑：true允许 false不允许（增/减家庭的可共同编辑用户）
    * @return:  {返回值数据类型}
    */
    updateFamilyInfo(params, familyId) {
        return vm.$http.PUT({
            url: vm.$CONSTANTS.APPHOST + '/families/' + familyId,
            data: params
        })
    },

    /**
    * @des:  判断用户是否可继续创建家庭
    * @return:  {Boolean}
    */
    CreateFamilyAble() {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/families/creatable'
        })
    },

    /**
    * @des:  获取家庭成员列表
    * @param:  {string}  familyId  参数说明
    */
    getFamilyMember(familyId) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/families/users/' + familyId
        })
    }
}
export {FamilyApi}
