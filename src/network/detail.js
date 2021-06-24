import {request} from './request.js'

export function getDetail(id){
  return request({
    url:'/detail',
    params:{id}
  })
}

export class Goods{
  //es6的语法
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    //.....
  }
}
