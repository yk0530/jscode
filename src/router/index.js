//配置路由

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'
Vue.use(VueRouter);

let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
}

//配置路由
export default new VueRouter({
    routes,
    //滚动行为，控制路由跳转时页面的滚动行为
    scrollBehavior(to,from,savePosition){
        return {y:0}
    }
})