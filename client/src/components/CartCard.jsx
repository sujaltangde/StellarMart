import React from 'react'
import {removeItemsFromCart} from '../actions/cartAction'
import { useDispatch } from 'react-redux'


export const CartCard = ({item}) => {

    const dispatch = useDispatch() ;

    const RemoveItem = (id)=>{

        dispatch(removeItemsFromCart(id))
    }

  return (
    <>
            <div>
                        <img src={item.image} alt="" />
                        <p>{item.name}</p>
                        <p>Price: ₹ {item.price}</p>
                        <span onClick={()=>RemoveItem(item.product)} className='text-red-700 cursor-pointer' >Remove</span>

            </div>
    
    
    </>
  )
}
