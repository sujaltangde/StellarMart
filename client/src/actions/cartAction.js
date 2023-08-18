import { addToCart, removeFromCart, removeAllItems } from '../slices/CartSlice'
import axios from 'axios'
import { toast } from 'react-toastify'


export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {

    const { data } = await axios.get(`http://localhost:4000/api/v1/products/${id}`)

    dispatch(addToCart({
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].url,
        stock: data.product.stock,
        quantity
    }))

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    
}


export const removeItemsFromCart = (id) => async (dispatch) => {
    const items = JSON.parse(localStorage.getItem('cartItems'))
    const modifiedItems = items.filter((item) => (
        item.product !== id
    ))

    localStorage.setItem('cartItems', JSON.stringify(modifiedItems))
    dispatch(removeFromCart());
    toast.success("Item removed")
}

export const removeAllItemsFromCart = () => async (dispatch) => {    
    localStorage.removeItem('cartItems') ;
    dispatch(removeAllItems())
    toast.success("All items removed")
}

export const removeAllItemsFromCartWhenLogout = () => async (dispatch) => {    
    localStorage.removeItem('cartItems') ;
    dispatch(removeAllItems())
}