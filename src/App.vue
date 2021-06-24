<template>
  <div id="app">
    <!-- 占位放到App.vue 并且设置keep-alive不让其销毁-->
    <keep-alive exclude="Detail">
        <router-view></router-view>
    </keep-alive>
    <main-bar></main-bar>
  </div>
</template>

<script>
  //高度封装的底部菜单（TabBar(TabBarItem)）
  import MainBar from "components/content/mainBar/MainBar.vue"
export default {
  name: 'App',
  data(){
    return {
      message:'我是APP的消息！'
    }
  },
  methods:{

  },
  //计算属性，函数，调用的时候是不加()的，属性一般是没有set方法的，只读属性
  computed:{

  },
  filters:{

  },
  components:{
    MainBar
  }

}
</script>

<style>
  @import url("assets/css/base.css");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/*  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

</style>
