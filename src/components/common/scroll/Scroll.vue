<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll'

  export default {
    name: 'Scroll',
    props:{
      //是否实时监听
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }

    },
    data(){
      return {
        message:'',
        scroll: null
      }
    },
    methods:{

    },
    computed:{

    },
    filters:{

    },
    components:{

    },
    mounted(){
      this.scroll = new BetterScroll(this.$refs.wrapper,{
        //点击事件有效
        click:true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
      });
      //监听scroll事件
      this.scroll.on('scroll',(position)=>{
        //发送事件出去
        this.$emit('scrollEmit',position)
        
      })
      //设置了true才能监听
      if(this.pullUpLoad){
        //监听上拉下载更多
        this.scroll.on('pullingUp',()=>{
            //发送事件出去
            this.$emit('pullingUpEmit')
        })
      }
    }

  }
</script>

<style>

</style>
