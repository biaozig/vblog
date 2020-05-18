import request from '../api/request'

// 查询文章列表
export const getArticleList = async (params?:any) => {
    console.log(params)
    return await request({
        url: '/article/list',
        data: {}
    })
}

// 新增一条文章
export const createArticle = (params:any) => {
    console.log(params)
    return new Promise((resolve, reject) => {
        request({
            url: '/article/create',
            data: {
                
            }
        })


    })
}

// 查询文章详情
export const getArticleInfo = (params:any) => {
    console.log(params)
    return new Promise((resolve, reject) => {
        request({
            url: '/article/info',
            data: {

            }
        })


    })
}

// 更新文章信息
export const updateArticleOne = (params:any) => {
    console.log(params)
    return new Promise((resolve, reject) => {
        request({
            url: '/article/update',
            data: {
                
            }
        })


    })
}

// 删除一条文章
export const deleteArticleOne = (params:any) => {
    console.log(params)
    return new Promise((resolve, reject) => {
        request({
            url: '/article/delete',
            data: {
                
            }
        })


    })
}

