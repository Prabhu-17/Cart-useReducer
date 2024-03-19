import {
  CLEAR_CART,
  INCREASE,
  DECREASE,
  DISPLAY_ITEMS,
  LOADING,
  REMOVE,
} from './action'

const reducer = (state, action) => {
    if(action.type===CLEAR_CART){
        return {...state,cart:new Map()}
    }
    if(action.type ===REMOVE){
      const newCart=new Map(state.cart)
      newCart.delete(action.payload.id)
      return {...state,cart:newCart}
    }
    if(action.type===INCREASE){
      const newCart=new Map(state.cart)
      const itemId=action.payload.id
      const item=newCart.get(itemId)
      const newItem={...item,amount:item.amount+1}
      newCart.set(itemId,newItem)
      return{...state,cart:newCart}
    }
    if(action.type===DECREASE){
      const newCart=new Map(state.cart)
      const itemId=action.payload.id
      const item=newCart.get(itemId)
      if(item.amount===1){
        newCart.delete(itemId)
        return {...state,cart:newCart}
      }

      const newItem={...item,amount:item.amount-1}
      newCart.set(itemId,newItem)
      return{...state,cart:newCart}
    }
    if(action.type===LOADING){
      return {...state,Loading:true}
    }
    if(action.type===DISPLAY_ITEMS){
      const newCart=new Map(action.payload.cart.map((item)=>[item.id,item]))
      return {...state,Loading:false,cart:newCart}
    }
    throw new ERROR(`there is no action type:${action.type}`)
}

export default reducer
