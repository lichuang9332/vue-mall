import {request} from './request.js'

export function getHomeMenuData(){
  return request({
    url:'/home/multidata'
  })
}
