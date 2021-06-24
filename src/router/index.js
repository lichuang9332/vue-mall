import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Center from '@/components/Center'
import Home from '@/views/home/Home'
import Category from '@/views/category/Category'
import Cart from '@/views/cart/Cart'
import Profile from '@/views/profile/Profile'
import Detail from '@/views/detail/Detail'
//Router是插件

Vue.use(Router)

//ES6的导出语法export default和export
//1.export default匿名导出，export 具名导出,要一样的名称才能匹配
//2.export default是唯一的，如export default a，import a from，export可以是多个，且要加{}，如export {a，b}，import {a，b} from
export default new Router({
  mode: "history",
  linkActiveClass:'active',
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      // name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      // name: 'Cart',
      component: Cart
    },{
      path: '/category',
      // name: 'Category',
      component: Category
    },
    {
      path: '/profile',
      // name: 'Profile',
      component: Profile
    },
    ,
    {
      // path: '/detail',
      path: '/detail/:id',  //动态路由
      // name: 'Profile',
      component: Detail
    }
  ]
})
