//对于axios进行二次封装

import axios from 'axios';

import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

const requests = axios.create({
    baseURL: '/mock',
    timeout: 5000, //请求超时时间
})

//请求拦截器

requests.interceptors.request.use((config)=>{
    nProgress.start(); //开启进度条
    return config;
})

//响应拦截器

requests.interceptors.response.use((res)=>{
    return res.data;
    nProgress.done(); //关闭进度条
}, (err)=>{
    return Promise.reject(new Error('请求失败'))
})

export default requests;