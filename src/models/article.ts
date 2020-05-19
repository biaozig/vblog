import request from '../api/request'

// 查询文章列表
export const getArticleList = async (params?:string) => {
    console.log(params)
    return await request({
        url: '/article/list?' + (params||''),
    })
}

// 新增一条文章
export const createArticle = async (params:any) => {
    return await request({
        url: '/article/create',
        method: 'POST',
        data: params
    })
}

// 查询文章详情
export const getArticleInfo = async (params:string) => {
    return request({
        url: '/article/info?'+(params||''),
    })
}

// 更新文章信息
export const updateArticleOne = async (params:any) => {
    console.log(params)
    return request({
        url: '/article/update',
        method: 'POST',
        data: params
    })
}

// 删除一条文章
export const deleteArticleOne = async (params:any) => {
    console.log(params)
    return request({
        url: '/article/delete',
        method: 'POST',
        data: params
    })
}

