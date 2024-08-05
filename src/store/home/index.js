import {reqBannerList,reqCategoryList,reqFloorList} from '@/api'
const state = {
    categoryList:[],
    bannerList:[],
    floorList:[],
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    },
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList;
    },
    FLOORLIST(state,floorList){
        state.floorList = floorList;
    }
};
const actions = {
    async categoryList({commit}){
        let result = await reqCategoryList();
        // console.log(result);
        if(result.code === 200) {
            commit("CATEGORYLIST",result.data)
        }
    },
    async getBannerList({commit}){
        let result = await reqBannerList();
        if( result.code === 200) {
            commit("BANNERLIST",result.data)
        }
    },
    async getFloorList({commit}){
        let result = await reqFloorList();
        if( result.code === 200) {
            commit("FLOORLIST",result.data)
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters,
}