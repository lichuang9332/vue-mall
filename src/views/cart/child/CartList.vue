<template>
  <div class="cart-list">
    <scroll class="content-list"
      :probeType="3"
      @scrollEmit="scrollEmit"
      ref="scrollcart">
        <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll.vue'
  import CartListItem from './CartListItem.vue'
  import {mapGetters} from 'vuex'

  export default {
    name: 'CartList',
    data(){
      return {
        message:''
      }
    },
    methods:{
      scrollEmit(){

      }
    },
    computed:{
      ...mapGetters(['cartList'])
    },
    filters:{

    },
    components:{
      Scroll,
      CartListItem
    },
    activated() {
      //console.log(this.cartList)
      this.$refs.scrollcart.scroll.refresh();
    }

  }
</script>

<style>
.cart-list{
  height: calc(100% - 44px - 49px - 40px);
}
.content-list{
  height: 100%;
  overflow: hidden;
}
</style>
