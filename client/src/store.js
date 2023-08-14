import {configureStore} from '@reduxjs/toolkit'
import numReducer from './slices/NumSlice.js'
import productReducer from './slices/ProductSlice.js'
import productDetailReducer from './slices/ProductDetailSlice.js'

const store = configureStore({
    reducer:{
        num: numReducer,
        products: productReducer,
        productDetails: productDetailReducer

    } 
})

export default store