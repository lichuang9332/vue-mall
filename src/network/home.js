import {request} from './request.js'

//请求轮播和推荐
export function getHomeMenuData(){
  return request({
    url:'/home/multidata'
  })

}

//请求首页的商品列表
export function getHomeGoods(type, page, pagesize){
  return request({
    url:'/home/data',
    params:{
      type,
      page,
      pagesize
    }
  })
}

