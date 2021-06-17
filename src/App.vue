<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/01.jpg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/02.jpg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/01.jpg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/02.jpg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "./components/tabbar/TabBar.vue"
  import TabBarItem from "./components/tabbar/TabBarItem.vue"
export default {
  name: 'App',
  data(){
    return {
      message:'我是APP的消息！'
    }
  },
  methods:{

  },
  computed:{

  },
  filters:{

  },
  components:{
    TabBar,
    TabBarItem
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
