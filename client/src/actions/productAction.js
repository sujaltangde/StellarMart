import axios from 'axios'
import {allProductFail, allProductRequest, allProductSuccess, clearErrors} from '../slices/ProductSlice.js'


// Getting errors
export const getProduct = ()=> async (dispatch)=>{
    try{
        dispatch(allProductRequest())
        const {data} = await axios.get("http://localhost:4000/api/v1/products")
        
        dispatch(allProductSuccess(data)) ;
        
    }catch(err){
        dispatch(allProductFail(err.message))
    }
}


// Clearing Errors
export const clearError = () => async (dispatch) => {
    dispatch(clearErrors())
}