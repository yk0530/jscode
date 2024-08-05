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

export function reqFloorList(){
    return mockRequests({
        url:'/floor',
        method:'get',
    })
}

export function reqGetSearchInfo(params){
    return requests({
        url:'/list',
        method:'post',
        data:params,
    })
}

export function reqGoodsInfo(skuId){
    return requests({
        url:`/item/${skuId}`,
        method:'get',
    })
}

export function reqAddOrUpdateShopCart(skuId,skuNum){
    return requests({
        url:`/cart/addToCart/${skuId}/${skuNum}`,
        method:'post',
    })
}

export function reqCartList(){
    return requests({
        url:'/cart/cartList',
        method:'get',
    })
}

export function reqDeleteCartById(skuId){
    return requests({
        url:`/cart/deleteCart/${skuId}`,
        method:'delete',
    
    })
}

export function reqUpdateCheckedById(skuId,isChecked){
    return requests({
        url:`/cart/checkCart/${skuId}/${isChecked}`,
        method:'get',
    })

}