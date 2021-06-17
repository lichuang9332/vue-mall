import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Center from '@/components/Center'
//Router是插件

Vue.use(Router)

//ES6的导出语法export default和export
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/center',
      name: 'Center',
      component: Center
    }
  ]
})
