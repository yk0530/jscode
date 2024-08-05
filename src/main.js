import Vue from 'vue'
import App from './App.vue'

import router from './router';
import { reqCategoryList } from './api';

import store from './store';

import "../src/mock/mockServe";
import "swiper/css/swiper.css";


import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);

//三级联动组件--全局组件

import TypeNav from './components/TypeNav/index.vue';
import Carousel from './components/Carousel/index.vue';
import Pagination from './components/Pagination/index.vue';

reqCategoryList();
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);
Vue.component(Pagination.name,Pagination);

new Vue ({
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this;
    },
    router,
    store,
}).$mount('#app')

