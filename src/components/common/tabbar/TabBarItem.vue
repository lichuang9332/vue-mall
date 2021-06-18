<template>
    <div class="tab-bar-item" @click="cliItem">
<!--      <img src="../../assets/img/01.jpg" alt="">
      <div>首页</div> -->
      <!-- 这里还是设计成具名插槽 -->
      <div v-if="!isActive" >
          <slot name="item-icon"></slot>
      </div>
      <div v-else>
          <slot name="item-icon-active"></slot>
      </div>
      <!-- <div :class="{active:isActive}" > -->
      <div :style="styleActive" >
        <!-- 插槽最终会被替换，上面不适合绑定属性  一般加个div-->
        <slot name="item-text"></slot>
      </div>
    </div>
</template>

<script>
  export default{
    name:"TabBarItem",
    //属性
    props:{
      path:String,
      activeColor: {
        type:String,
        default:"red"
      }
    },
    data(){
      return {
        message:'我是TabBar组件！',
        //isActive: true
      }
    },
    //计算属性
    computed:{
      isActive(){
          return this.$route.path.indexOf(this.path) !==-1;
      },
      styleActive(){
          return this.isActive ? {color:this.activeColor}:{}
      }
    },
    methods:{
        cliItem(){
            //console.log(this.$router);
            //push（想要浏览器返回）和replace
            if(!this.isActive){ //不是活跃的表示点的其他的
              this.$router.replace(this.path);
            }
        }
    }

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
    border-radius: 4px;
  }
  .tab-bar-item .active{
    color: red;
  }

</style>
