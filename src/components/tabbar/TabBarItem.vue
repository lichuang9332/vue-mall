<template>
    <div class="tab-bar-item">
<!--      <img src="../../assets/img/01.jpg" alt="">
      <div>首页</div> -->
      <!-- 这里还是设计成具名插槽 -->
      <slot name="item-icon"></slot>
      <slot name="item-text"></slot>
    </div>
</template>

<script>
  export default{
    name:"TabBarItem",
    data(){
      return {
        message:'我是TabBar组件！'
      }
    },

  }
</script>

<style>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }

</style>
