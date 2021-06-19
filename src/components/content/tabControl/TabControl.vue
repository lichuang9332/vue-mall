<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item"
    :class="{active: index===currentIndex}" @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    props:{
      titles:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    data(){
      return {
        message:'',
        currentIndex: 0
      }
    },
    methods:{
      tabClick(index){
          this.currentIndex = index;
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

<style>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 16px;
    height: 44px;
    line-height: 44px;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item.active{
    color: var(--color-high-text);
  }
  .tab-control-item.active span{
    border-bottom: 3px solid var(--color-high-text);
    padding: 5px 3px;
  }
</style>
