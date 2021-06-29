import Vue from 'vue'
import App from './App'
//导入路由
import router from './router'
//导入vuex
import store from './store'
//导入fasctclick,解决移动端的300ms点击事件
import fastclick from 'fastclick'
import toast from 'components/common/toast'  //文件夹的话默认加载下面的index.js
//导入懒加载vue-lazyload
import vueLazyLoad from 'vue-lazyload'
//完整引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';   //样式也要导入

Vue.config.productionTip = false

Vue.use(ElementUI);
//加载懒加载插件
Vue.use(vueLazyLoad,{
  loading: require('./assets/img/top01.jpg')
})

//通过new 一个vue()实例，实现事件总线$bus
Vue.prototype.$bus = new Vue();

//混入 mixin

//安装toast插件
Vue.use(toast)
//解决移动端的300ms点击事件
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
