<template>
  <div class="detail-bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar',
    data(){
      return {
        message:''
      }
    },
    methods:{
      //加入购物车的点击事件
      addToCart(){
        // console.log('加入购物车')
        //发送事件到父组件
        this.$emit('addToCartEmit');
      }
    },
    computed:{

    },
    filters:{

    },
    components:{

    }

  }
</script>

<style scoped>
.detail-bottom-bar{
  height: 49px;
  background-color: #FFFFFF;
  position: relative;
  /* 前面有用 height: calc(100% - 44px - 49px); */
  /* bottom: 49px; */
  z-index: 99;
  display: flex;
  text-align: center;
}
.bar-item{
  flex: 1;
  display: flex;
}
.bar-item>div{
  flex: 1;
}
.bar-left .text{
  font-size: 13px;
}
.bar-left .icon{
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 3px;
  background: url("~assets/img/07.jpg") 0 0/100%;
}
.bar-left .service{
  background-position: 0 -54px;
}
.bar-left .shop{
  background-position: 0 -54px;
}
.bar-right{
  font-size: 15px;
  color: #fff;
  line-height: 49px;

}
.bar-right .cart{
  background-color: #ffe817;
  color: #333;

}
.bar-right .buy{
  background-color: #f69;
  /* color: #333; */
}
</style>
