import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  counter:0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart:(state,action)=>{
        const exist=state.items.find(item=>item.id===action.payload.id);
        if(exist){
            exist.quantity+=1
            
        }else{
            state.items.push({...action.payload,quantity: 1})
        }
        state.counter+=1
        
        console.log('in cart',state.items,state.counter);
              
    },
    increaseQuantity:(state,action)=>{
    const exist=state.items.find(item=>item.id===action.payload);
    if(exist){
        exist.quantity+=1
        

    }
    state.counter+=1
            console.log('increase item',state.items,state.counter);
            
},
    decreaseQuantity:(state,action)=>{
    const exist=state.items.find(item=>item.id===action.payload);
    if(exist && exist.quantity > 1){
      exist.quantity-=1
    
    }
    state.counter-=1
    console.log('decrease item',state.items,state.counter);
            
}
,removeItem:(state,action)=>{
    const removed = state.items.find(item=>(item.id===action.payload))
    state.counter-=removed.quantity;
   state.items=state.items.filter(item=>(item.id!==action.payload)
   ); 
           
}
  },
})

export const { addToCart,decreaseQuantity,increaseQuantity,removeItem } = cartSlice.actions

export default cartSlice.reducer