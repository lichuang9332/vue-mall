//混入mixin

//导入防抖函数
import {debounce} from './utils'

export const itemListener = {
  //components/methods都可以混入
  data(){
    return {
      imgLoadListener:null
    }
  },
  mounted(){
    //监听图片加载完成
    const refresh = debounce(this.$refs.scroll.scroll.refresh(),200);
    this.imgLoadListener = ()=>{
      //应用防抖动函数
      refresh();

    };
    this.$bus.$on('imgLoadComplete', this.imgLoadListener)
    console.log('我是混入的图片加载完成事件')
  }
}


//导出回到顶部
export const backTopMixin ={
  components:{
    
  },
  data(){
    return {
        isShowBackTop: false,   //是否显示回到顶部
    }
  },
  methods:{

  }
}
