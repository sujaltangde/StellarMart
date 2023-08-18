import React from 'react'
import { CartCard } from '../components/CartCard'
import { useDispatch, useSelector } from 'react-redux'
import {removeAllItemsFromCart} from '../actions/cartAction'

export const Cart = () => {

    const dispatch = useDispatch()
  
    const {cartItems} = useSelector((state) => state.cart)

    console.log(cartItems)

    
  
  return (
    
    
    <>
        <div className='min-h-screen pt-14 '>

            <div className='w-full bg-blue-600 text-white grid grid-cols-3 px-12 text-center py-2 font-medium'>
                <div>Product</div>
                <div>Quantity</div>
                <div>Subtotal</div>
            </div>
            <div className='grid grid-cols-3'>
            { cartItems.length !== 0 ? cartItems.map((item,i)=>(
                 <div key={i}>
                      <CartCard item={item} />
             </div>
            )) : <p>No items in the cart</p>
               
            }

            </div>

                <div>
                    <button onClick={()=> dispatch(removeAllItemsFromCart())} >Remove All</button>
                </div>

        </div>

    </>
  )
}
