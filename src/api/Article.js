import Vue from 'vue'
const vm = new Vue()

//文章模块
const Article = {
     /**
      * 创建文章
      * @return:  {返回值数据类型}
      */
    Addarticles(params) {
        return vm.$http.post({
            url: vm.$CONSTANTS.APPHOST + '/articles',
            data: params
        })
    }, 
     /**
      * 修改文章
      * @return:  {返回值数据类型}
      */
     Editarticles(params) {
         return vm.$http.PUT({
             url: vm.$CONSTANTS.APPHOST + '/articles',
             data: params
         })
     },
    /**
       * 小程序首页查询文章列表
       * @return:  {返回值数据类型}
    */
    Articleslist(params) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/articles',
            data: params
        })
    },
    /**
     * 查询文章详情
     * @return:  {返回值数据类型}
     */
    ArticlesDetails(params, id) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/articles/' + id,
            data: params
        })
    }, 
    /**
     * 点赞一篇文章
     * @return:  {返回值数据类型}
     */
    gothumbs(params) {
        return vm.$http.post({
            url: vm.$CONSTANTS.APPHOST + '/articles/thumbs',
            data: params
        })
    }, 
     /**
      * 取消点赞一篇文章
      * @return:  {返回值数据类型}
      */
     cancelthumbs(params) {
         return vm.$http.DELETE({
             url: vm.$CONSTANTS.APPHOST + '/articles/thumbs',
             data: params
         })
     },
     /**
      * 收藏一篇文章
      * @return:  {返回值数据类型}
      */
     gofavorite(params) {
        return vm.$http.post({
            url: vm.$CONSTANTS.APPHOST + '/articles/favorite',
            data: params
        })
    },
    /**
     * 取消收藏一篇文章
     * @return:  {返回值数据类型}
     */
    cancelfavorite(params) {
        return vm.$http.DELETE({
            url: vm.$CONSTANTS.APPHOST + '/articles/favorite',
            data: params
        })
    },
     /**
      * 分页查询文章评论列表
      * @return:  {返回值数据类型}
      */
    commentslist(params) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/articles/comments',
            data: params
        })
    },
    /**
      * 投诉一篇文章
      * @return:  {返回值数据类型}
    */
    gocomplaints(params) {
         return vm.$http.post({
             url: vm.$CONSTANTS.APPHOST + '/articles/complaints',
             data: params
         })
     },
    /**
     * 创建文章评论
     * @return:  {返回值数据类型}
     */
    createComments(params) {
        return vm.$http.post({
            url: vm.$CONSTANTS.APPHOST + '/articles/comments',
            data: params
        })
    },
    /**
     * 删除文章评论
     * @return:  {返回值数据类型}
     */
    deleteComments(params, id) {
        return vm.$http.DELETE({
            url: vm.$CONSTANTS.APPHOST + '/articles/comments/' + id,
            data: params
        })
    },
    /**
    * 分页查询评论回复
    * @return:  {返回值数据类型}
    */
    replyslist(params) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/articles/comments/replies',
            data: params
        })
    },
    /**
     * 创建一条评论回复
     * @return:  {返回值数据类型}
     */
    createReplys(params) {
        return vm.$http.post({
            url: vm.$CONSTANTS.APPHOST + '/articles/comments/replies',
            data: params
        })
    },
    /**
     * 删除一条评论回复
     * @return:  {返回值数据类型}
     */
    deleteReplys(params, id) {
        return vm.$http.DELETE({
            url: vm.$CONSTANTS.APPHOST + '/articles/comments/replies/' + id,
            data: params
        })
    },
    /**
     * 请求未删除的文章类别列表
     * @return:  {返回值数据类型}
     */
    Categories(params) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/articles/categories',
            data: params
        })
    },
    /**
     * 文章草稿列表修
     * @return:  {返回值数据类型}
     */
    Draftlist(params) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/articles/draft',
            data: params
        })
    },
    /**
     * 获取文章配置信息
     * @return:  {返回值数据类型}
     */
    Deletearticle(params, id) {
        return vm.$http.DELETE({
            url: vm.$CONSTANTS.APPHOST + '/articles/' + id,
            data: params
        })
    },
    /**
     * 修改文章配置信息
     * @return:  {返回值数据类型}
     */
    Configuration(params) {
        return vm.$http.PUT({
            url: vm.$CONSTANTS.APPHOST + '/articles/configuration',
            data: params
        })
    },
    /**
     * 获取文章配置信息
     * @return:  {返回值数据类型}
     */
    getConfiguration(params, id) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/articles/configuration/' + id,
            data: params
        })
    },
    /**
     * 查询家庭列表（ 包括获取简单家庭名称列表）
     * @return:  {返回值数据类型}
     */
    getfamilies(params) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/families',
            data: params
        })
    },
    /**
     * 获取预览页模板主题列表
     * @return:  {返回值数据类型}
     */
    templateThemes(params) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/articles/template/themes',
            data: params
        })
    }, 
    /**
     * 获取预览页模板列表
     * @return:  {返回值数据类型}
     */
    templatelist(params) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/articles/templates',
            data: params
        })
    },
    /**
     * 获取预览页音乐主题列表
     * @return:  {返回值数据类型}
     */
    musicThemes(params) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/articles/music/themes',
            data: params
        })
    },
    /**
     * 获取预览页音乐列表
     * @return:  {返回值数据类型}
     */
    musiclist(params) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/articles/musics',
            data: params
        })
    },
    /**
     * 获取预览字体列表
     * @return:  {返回值数据类型}
     */
    fontsThemes(params) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/articles/fonts',
            data: params
        })
    },
    /**
     * 获取文章详情 模板详情
     * @return:  {返回值数据类型}
     */
    templateDetails(params, id) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/articles/templates/' + id,
            data: params
        })
    },
    /**
     * 获取音乐详情
     * @return:  {返回值数据类型}
     */
    musicDetails(params, id) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/articles/musics/' + id,
            data: params
        })
    },
    /**
     * 获取字体详情
     * @return:  {返回值数据类型}
     */
    fontsDetails(params, id) {
        return vm.$http.get({
            url: vm.$CONSTANTS.APPHOST + '/articles/fonts/' + id,
            data: params
        })
    },
    /**
     * 刷新文章同步锁
     * @return:  {返回值数据类型}
     */
    Refreshlock(params, id) {
        return vm.$http.PUT({
            url: vm.$CONSTANTS.APPHOST + '/articles/lock/' + id,
            data: params
        })
    },
    /**
     * 移除文章同步锁
     * @return:  {返回值数据类型}
     */
    Removelock(params, id) {
        return vm.$http.DELETE({
            url: vm.$CONSTANTS.APPHOST + '/articles/lock/' + id,
            data: params
        })
    }
    
}

export {
    Article
}
