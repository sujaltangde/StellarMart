import axios from 'axios'
import {allProductRequest, allProductSuccess, allProductFail, clearErrors } from '../slices/ProductSlice.js'
import {productDetailsRequest, productDetailsSuccess, productDetailsFail } from '../slices/ProductDetailSlice.js'


// Getting All Products
export const getProducts = (keyword = "",currentPage = 1)=> async (dispatch)=>{
    try{
        dispatch(allProductRequest()) ;
     
        const {data} = await axios.get(`http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}`)
        
        // console.log(data)
        dispatch(allProductSuccess(data)) ;
        
    }catch(err){
        dispatch(allProductFail(err.message))
    }
}


// Getting Product Details
export const getProductDetails = (id)=> async (dispatch)=>{
    try{
        dispatch(productDetailsRequest())
        const {data} = await axios.get(`http://localhost:4000/api/v1/products/${id}`)
        
        dispatch(productDetailsSuccess(data.product)) ;
        
    }catch(err){
        dispatch(productDetailsFail(err.message))
    }
}





// Clearing Errors
export const clearError = () => async (dispatch) => {
    dispatch(clearErrors())
}