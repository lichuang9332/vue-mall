<template>
  <div class="cart-bottom-bar">
    <div class="check-content">
      <check-button
      class="check-button"
       @click.native="clickAllChecked"
      :isChecked="isSelectedAll"></check-button><span>全选</span>
    </div>
    <div class="price">
      合计：{{totalPrice}}
    </div>
    <div class="calculate">
      去结算：{{checkLength}}
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  export default {
    name: 'CartBottomBar',
    data(){
      return {
        message:''
      }
    },
    methods:{
      //全选与反选
      clickAllChecked(){
        if(this.isSelectedAll){
          //已经全选
          this.$store.state.cartList.forEach(item=>{item.checked=false})
        }else{
          //没有全选
          this.$store.state.cartList.forEach(item=>{item.checked=true})
        }

      }

    },
    computed:{
      totalPrice(){
        return '￥' + this.$store.state.cartList.filter(item=>{
          return item.checked
        }).reduce((preValue,item)=>{
            return preValue + item.price*item.count;
        },0)
      },
      //计算商品的个数
      checkLength(){
        return this.$store.state.cartList.filter(item=>{return item.checked}).reduce((preValue,item)=>{
            return preValue + item.count;
        },0);
      },
      isSelectedAll(){
        return this.$store.state.cartList.length>0 && this.$store.state.cartList.filter(item=>{return item.checked}).length == this.$store.state.cartList.length;
      }
    },
    filters:{

    },
    components:{
      CheckButton
    }

  }
</script>

<style scoped>
.cart-bottom-bar{
  height: 40px;
  background-color: #F6F6F6;
  position: relative;
  line-height: 40px;
  display: flex;
  color: #333333;
  font-weight: 500;
  padding: 0 0 0 10px;
}
.check-content{
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: 100px;
}
.check-button{
  width: 20px;
  height: 20px;
  line-height: 20px;
}
.price{
  width: calc(100% - 180px);
  text-align: center;
}
.calculate{
  width: 80px;
  text-align: right;
  background-color: #ff5777;
  padding-right: 10px;
  color: #F6F6F6;
  font-weight: 600;
}
</style>
