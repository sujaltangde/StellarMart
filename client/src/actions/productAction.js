import axios from 'axios'
import {allProductRequest, allProductSuccess, allProductFail, clearErrors, newReviewRequest, newReviewSuccess, newReviewFail, newReviewReset } from '../slices/ProductSlice.js'
import {productDetailsRequest, productDetailsSuccess, productDetailsFail } from '../slices/ProductDetailSlice.js'
import { host } from './Host.js'

// Getting All Products
export const getProducts = (keyword = "", currentPage = 1, price = [0, 25000], category = "", ratings = 0)=> async (dispatch)=>{
    try{
        dispatch(allProductRequest()) ;

  let link = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&rating[gte]=${ratings}`

  if(category){
    link = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&rating[gte]=${ratings}`
  }
     
  
  const {data} = await axios.get(link)
        
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