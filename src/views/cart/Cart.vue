<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <!-- 商品的列表 -->
    <cart-list></cart-list>

    <!-- 底部的汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  //引入navbar
import  NavBar from 'components/common/navbar/NavBar.vue'
import CartList from './child/CartList.vue'
import CartBottomBar from './child/CartBottomBar.vue'
//导入mapGetters
import {mapGetters} from 'vuex'
  export default {
    name: 'Cart',
    data(){
      return {
        message:'',

      }
    },
    methods:{

    },
    computed:{
      // cartLength(){
      //   return this.$store.getters.cartLength
      // }
      //映射store里面的getters属性到该计算属性
      // ...mapGetters([
      //     'cartLength'
      // ])
      //起别名的写法
      ...mapGetters({
          length: 'cartLength',
      })
    },
    filters:{

    },
    components:{
      NavBar,
      CartList,
      CartBottomBar
    }

  }
</script>

<style scoped>
.cart{
  height: 100vh;
}
.nav-bar{
  background-color: #ff5777;
  color: #FFFFFF;
  font-weight: 600;
}
</style>
