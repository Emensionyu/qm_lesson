import instance from './axiosInstance.js'
exports.login=(data)=>{
    return instance.post('/login',data);
    }
    //实例发出post请求到login