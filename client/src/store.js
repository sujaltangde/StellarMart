import {configureStore} from '@reduxjs/toolkit'
import numReducer from './slices/NumSlice.js'
import productReducer from './slices/ProductSlice.js'

const store = configureStore({
    reducer:{
        num: numReducer,
        products: productReducer,

    } 
})

export default store