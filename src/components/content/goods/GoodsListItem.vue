<template>
  <div class="goods-list-item"  @click="itemClick">
    <!-- <img :src="goodsItem.img" @load="imgLoad" v-lazy="showImage" :key="showImage" alt=""> -->
    <img :src="goodsItem.img" :key="showImage" alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.collect}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsListItem',
    //属性
    props:{
      goodsItem:{
          type:Object,
          default(){
            return {};
          }
      }
    },
    data(){
      return {
        message:''
      }
    },
    methods:{
      itemClick(){
        //获取详情ID
        const id = this.goodsItem.id;
        //跳转到详情页
        // this.$router.push({path:'/detail', query:{id}});
        this.$router.push('/detail/'+id); //动态路由形式

      },
      //@load监听图片的加载完成事件
      //事件总线发射事件this.$bus.$emit('aa')   接受this.$bus.$on('aa',()=>{})
      imgLoad(){
        //console.log('---')
        this.$bus.$emit('imgLoadCompleted');
      }
    },
    computed:{
      showImage(){
        return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
      }
    },
    filters:{

    },
    components:{

    }

  }
</script>

<style>
.goods-list-item{
  padding-bottom: 40px;
  /* 为了下面的绝对定位,这里需要相对定位 */
  position: relative;
  width: 48%;
}
.goods-list-item img{
  width: 100%;
  height: 200px;
  border-radius: 5px;
}
.goods-list-item .goods-info{
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-list-item .goods-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-list-item .goods-info .price{
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-list-item .goods-info .collect{
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
//伪元素
.goods-list-item .goods-info .collect::before{
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url(~assets/img/01.jpg) 0 0/14px 14px;
}
</style>
