import Vue from 'vue'
import App from './App'
//导入路由
import router from './router'
//导入vuex
import store from './store'
//完整引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

Vue.use(ElementUI);

//通过new 一个vue()实例，实现事件总线$bus
Vue.prototype.$bus = new Vue();

//混入 mixin


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
