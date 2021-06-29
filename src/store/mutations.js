export default {
      // addCart(state,payload){
      //   //数组常用的函数：push pop shift unshift sort reverse map filter reduce join
      //   //find()
      //   let old = null;
      //   for(let item of state.cartList){
      //     if(item.id == payload.id){
      //       old = item;
      //     }
      //   }
      //   if(old){
      //     old.count +=1;
      //   }else{
      //     payload.count =1;
      //     state.cartList.push(payload);
      //   }

      // }
      //数量+1
      addCounter(state,payload){
        payload.count++;
      },
      //商品+1
      addToCart(state,payload){
        //默认加入就选中
        payload.checked = true
        state.cartList.push(payload);
      }

  }
