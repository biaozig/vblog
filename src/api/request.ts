import axios from 'axios';
import cookie from 'react-cookies';
import { message } from 'antd';
import { apiHost } from '../config';

type reqType = {
    url:string;
    method?: 'GET' | 'POST' | 'get' | 'post';
    data?: object;
}

// 定义请求api 
export default function request(params:reqType, hasToken?:boolean) {
    let apiUrl = params.url;
    let loginToken = cookie.load('token')||'';
    let method = params.method || 'GET';

    return new Promise((resolve, reject) => {
        axios(apiUrl, {
            method,
            baseURL: apiHost,
            data: (method==='POST'||method==='post')?obj2params(params.data, hasToken):{},
            headers: {
                'authorization': loginToken,
                'Accept': 'application/json', 
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
        .then((result:any) => {
            if(result.status === 200){
                if(loginToken){ // 更新cookie 有效期7天
                    let maxAge = new Date().setDate(new Date().getDate()+7);
                    cookie.save('opstk', loginToken, {path:'/', maxAge})
                }

                return result.data;
            };
            
            reject();
        })
        .then((res: any) => {
            console.log(res)
            if(res.code === 200) return resolve(res.data);
            message.error(res.message);
        })
        .catch((err) => reject(err))
    })
}

// 合并参数
function obj2params(data:any, token?:boolean){
    let searchParams = new URLSearchParams();

    if(token) {
        let sessionToken = cookie.load('sessionToken');
        searchParams.append('token', sessionToken)
    }

    for(let key in data){
        searchParams.append(key, data[key])
    }

    return searchParams;
}