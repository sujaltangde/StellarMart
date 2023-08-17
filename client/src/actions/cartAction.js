import { addToCart } from '../slices/CartSlice'
import axios from 'axios'
import { toast } from 'react-toastify'


const addItemsToCart = (id, quantify) => async (dispatch) => {
    
        const { data } = await axios.get(`http://localhost:4000/api/v1/product/${id}`)

        dispatch(addToCart({
            product: data.product._id,
            name: data.product.name,
            price: data.product.price,
            image: data.product.images[0].url,
            stock: data.product.stock,
            quantify        
        }))

    
}