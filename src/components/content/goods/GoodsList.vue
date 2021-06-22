<template>
  <div class="goods-list" @click="itemClick">
    <!-- 未添加插槽，可以使用单标签 -->
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item"/>

  </div>
</template>

<script>
  import GoodsListItem from 'components/content/goods/GoodsListItem.vue'

  export default {
    name: 'GoodsList',
    //属性
    props:{
      goods:{
        type:Array,
        default(){
          return [];
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

      }
    },
    computed:{

    },
    filters:{

    },
    components:{
      GoodsListItem
    }

  }
</script>

<style>
  /* item的二均等分 */
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
  }

</style>
