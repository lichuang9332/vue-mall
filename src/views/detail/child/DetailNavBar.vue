<template>
  <div class="detail-nav-bar">
      <nav-bar >
        <div slot="left" class="back" @click="backClick">
          <img src="~assets/img/left.png" alt="">
        </div>
        <div slot="center" class="title">
          <div
          v-for="(item,index) in titils"
          class="title-item"
          :class="{active:index===currentIndex}"
          @click="itemClick(index)">{{item}}</div>
        </div>
      </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: 'DetailNavBar',
    data(){
      return {
        message:'',
        titils:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex=index;
        //发送事件出去
        this.$emit('backClickEmit',index)
      },

      backClick(){
        // this.$router.go(-1);
        this.$router.back();
      }
    },
    computed:{

    },
    filters:{

    },
    components:{
      NavBar
    },
    created() {

    }

  }
</script>

<style scoped>
.title{
  display: flex;
  font-size: 14px;
}
.title-item{
  flex: 1;

}
.active{
  color: var(--color-high-text);
}
.back img{
  width: 30px;
  height: 30px;
  margin-top: 5px;
  margin-left: 5px;
}
</style>
