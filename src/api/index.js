//对所有API进行统一管理

import requests from './request';
import mockRequests from './mockAjax';

export function reqCategoryList(){
    return requests({
        url:'/product/getBaseCategoryList',
        method:'get',
    })
}

export function reqBannerList(){
    return mockRequests({
        url:'/banner',
        method:'get',
    })
}