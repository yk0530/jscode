import {reqGoodsInfo,reqAddOrUpdateShopCart} from '@/api'
import {getUUID} from '@/utils/uuid_token.js'

const state = {
    goodInfo:{},
    uuid_token: getUUID()
}

const mutations = {
    GETGOODINFO(state,goodInfo) {
        state.goodInfo = goodInfo
    }
}

const actions = {
    async getGoodInfo({commit},skuId){
        const result = await reqGoodsInfo(skuId)
        if(result.code === 200){
            // console.log(result.data)
            commit('GETGOODINFO',result.data)
        }
    },
    async getAddOrUpdateShopCart({commit}, {skuId,skuNum}){
        const result = await reqAddOrUpdateShopCart(skuId,skuNum)
        // console.log(result)
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }

}

const getters = {
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || []
    },
    skuInfo(state){
        return state.goodInfo.skuInfo || {}
    },
    
}

export default {
    state,
    mutations,
    actions,
    getters

}