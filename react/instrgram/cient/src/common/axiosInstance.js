//axios 基本配置

import axios from 'axios';
import baseDomain from './config.js';
import { notification } from 'antd';
const instance=axios.create({
    xsrfCookieName:'xsrf-name',
    baseURL:baseDomain
})

instance.interceptors.response.use(function(response){
    console.log("===========",response);
    if(response.data.success){
        return Promise.resolve(response.data);
    }else{
        notification['error']({
            message:response.data.message
        });
        return Promise.reject({
            message:response.data.message
        })
    }
}, function(error){
    try{
        notification['error']({
            message:error.response.data.message||'系统异常'
        })
        if(error.response.status===401){
            setTimeout(() => {
                window.location.href='/login'
            },2000);
        }
    }catch(e){
        notification['error']({
            message:'系统异常，请稍后尝试 ！'
        })

    }
    return Promise.reject({
        messageCode:'sysError'
    })
})
//向中间件一样处理相应拦截 设置整站的报错处理和登入鉴权
export default instance;