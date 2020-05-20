import cookie from 'react-cookies';
import request from '../api/request';


// 用户登录
export const userLoginIn = async (params:any) => {
    let result:any = await request({
        url: '/login/in',
        method: 'POST',
        data: params
    })

    // 保持7天登录
    let maxAge = new Date().setDate(new Date().getDate()+7);
    cookie.save('opstk', (result.token||'1'), {path:'/', maxAge})
    return result;
}

// 注册账号
export const userLoginUp = async (params:any) => {
    return request({
        url: '/login/up',
        method: 'POST',
        data: params
    })
}

// 退出登录
export const userLoginOut = async (params:any) => {
    console.log(params)
    let result = request({
        url: '/login/out',
        method: 'POST',
        data: params
    })

    cookie.remove('token', {path:'/'})
    return result;
}


