<template>
  <div class="cart-list-item">
    <div class="item-selector">
      <check-button
      :isChecked="product.checked"
      @click.native='clickButton'></check-button>
    </div>
    <div class="item-img">
      <img :src="product.img" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="info-title">{{product.title}}</div>
      <div class="info-desc">{{product.id}}  {{product.collect}}</div>
      <div class="info-bottom">
        <div class="info-bottom-price left">￥{{product.price}}</div>
        <div class="info-bottom-count right">*{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  export default {
    name: 'CartListItem',
    //设置父端传递过来的属性
    props:{
      product:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {
        message:'',
      }
    },
    methods:{
        clickButton(){
          this.product.checked = !this.product.checked
        }
    },
    computed:{

    },
    filters:{

    },
    components:{
      CheckButton
    },

  }
</script>

<style scoped>
.cart-list-item{
  width: 100%;
  display: flex;
  font-size: 14px;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector{
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-img{
  padding: 5px;
}
.item-img img{
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-info{
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.info-title,.info-desc{
  height: 16px;
  width: 275px;
  font-size: 14px;
  color: #666;
  margin-top: 15px;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
}
.info-bottom{
  margin-top: 20px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.info-bottom-price{
  color: orangered;
}
.info-bottom .left{

}
.info-bottom .right{
  float: right;
  margin-top: -20px;

}
</style>
