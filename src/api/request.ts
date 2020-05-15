import axios from 'axios';
import cookie from 'react-cookies';
import config from './config';

type reqType = {
    url:string;
    method?: 'GET' | 'POST';
    data?: object;
}

// 定义请求api 
export default function request(params:reqType, token?:boolean) {
    let apiUrl = params.url;
    let sessionToken = token ? cookie.load('token') : '1111111111';
    let method = params.method || 'GET';

    console.log(method)

    return new Promise((resolve, reject) => {
        axios(apiUrl, {
            method,
            baseURL: config.baseURL,
            data: obj2params(params.data, token),
            headers: {
                sessionToken,
                'Accept': 'application/json', 
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            // proxy: {
            //     host: 'http://127.0.0.1',
            //     port: 3000,
            // }
        })
        .then((result:any) => {
            console.log(result)
            if(result.data.code === 200) return result.data;
            reject();
        })
        .then((res: any) => resolve(res.data))
        .catch((err) => {
            console.log(err)
            reject();
        })
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