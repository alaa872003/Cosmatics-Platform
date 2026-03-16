import React from 'react'
import {  useDispatch, useSelector,  } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeItem } from '../store/cartSlice'

export default function Cart() {
    const items =useSelector((state)=>state.cart.items)
    const counter =useSelector((state)=>state.cart.counter)
    const dispatch =useDispatch()
  return (
      <div className=' flex flex-col gap-5 mt-10 '>
        <div className='flex'>
        <h2 className='text-4xl font-semibold mb-10'>Cart</h2>
      <span className='text-red-600 text-2xl font-extrabold'>{counter}</span>
        </div>
     <div className='grid gap-10'>
      {
          
          items.map((item)=>(
              
              <div key={item.id} className='bg-gray-100 py-5 mx-5 flex justify-around  dark:bg-gray-600 dark:text-white'>
                <div>
                <h3>{item.title}</h3>
                <p>{item.price*item.quantity} $</p>
                </div>
                <div className='flex gap-5'>
                <button onClick={()=>dispatch(increaseQuantity(item.id))}> + </button>
                <p className='pt-3'>{item.quantity}</p>
                <button onClick={()=>dispatch(decreaseQuantity(item.id))}> - </button>
                <button onClick={()=>dispatch(removeItem(item.id))}>Remove</button>
                </div>
                    

            </div>
        ))
    }
    </div>
    </div>
  )
}
