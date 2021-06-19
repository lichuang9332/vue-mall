<template>
  <div id="main-bar">
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/01.jpg" alt="">
        <img slot="item-icon-active" src="~assets/img/05.jpg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="red">
        <img slot="item-icon" src="~assets/img/02.jpg" alt="">
        <img slot="item-icon-active" src="~assets/img/05.jpg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="red">
        <img slot="item-icon" src="~assets/img/03.jpg" alt="">
        <img slot="item-icon-active" src="~assets/img/05.jpg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="red">
        <img slot="item-icon" src="~assets/img/04.jpg" alt="">
        <img slot="item-icon-active" src="~assets/img/05.jpg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar.vue"
  import TabBarItem from "components/common/tabbar/TabBarItem.vue"
  export default {
    name: 'MainBar',
    data(){
      return {
        message:''
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

</style>
