import Home from '../pages/Home';
import Search from '../pages/Search';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Detail from '../pages/Detail';
import AddCartSuccess from '../pages/AddCartSuccess';
import shopCart from '../pages/ShopCart';
export default [
    {
        path:'/home',
        component:Home,
        meta:{
            show:true,
        }
    },
    {
        path:'/search/:keyword?',
        component:Search,
        meta:{
            show:true,
        },
        name:'search'
    },
    {
        path:'/login',
        component:Login,
        meta:{
            show:false,
        }
    },
    {
        path:'/register',
        component:Register,
        meta:{
            show:false,
        }
    },
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/detail/:skuId',
        component:Detail,
        meta:{
            show:true,
        }
    },
    {
        path:'/addcartsuccess',
        name:'addcartsuccess',
        component:AddCartSuccess,
        meta:{
            show:true,
        }
    },
    {
        path:'/shopcart',
        component:shopCart,
        meta:{
            show:true,
        }
    },
]