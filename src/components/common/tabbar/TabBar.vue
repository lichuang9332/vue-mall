<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBar',
    data(){
      return {
        message:'我是TabBar组件！'
      }
    },
    methods:{

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
  #tab-bar{
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -2px 1px rgba(100,100,100,0.10);
    padding-top: 5px;
  }
</style>
