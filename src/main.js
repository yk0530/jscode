import Vue from 'vue'
import App from './App.vue'

import router from './router';
import { reqCategoryList } from './api';

import store from './store';

import "../src/mock/mockServe";
import "swiper/css/swiper.css";

//三级联动组件--全局组件

import TypeNav from './components/TypeNav/index.vue';
reqCategoryList();
Vue.component(TypeNav.name,TypeNav);

new Vue ({
    render: h => h(App),
    router,
    store,
}).$mount('#app')

