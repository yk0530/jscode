import { reqCartList,reqAddOrUpdateShopCart,reqDeleteCartById,reqUpdateCheckedById } from "@/api";

const state = {
    cartList:[]
    
}

const mutations = {
    GETCARTLIST(state,cartList){
        state.cartList = cartList
    }
}

const actions = {
    async getCartList({commit}){
        const result = await reqCartList();
        if(result.code === 200){
            commit('GETCARTLIST',result.data)
        }
    },
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        const result = await reqAddOrUpdateShopCart(skuId,skuNum);
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    
    },
    async deleteCartById({commit},skuId){
        const result = await reqDeleteCartById(skuId);
        if(result.code === 200){
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async UpdateCheckedById({commit},{skuId,isChecked}){
        const result = await reqUpdateCheckedById(skuId,isChecked);
        if(result.code === 200){
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
}

const getters = {
    cartList(state){
        return state.cartList[0] || {}
    }
}

export default {
    state,
    mutations,
    actions,
    getters

}