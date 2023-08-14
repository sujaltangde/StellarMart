import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        loading: false,
        error: null,
        productsCount: 0,
        resultPerPage: 0 ,
        filteredProductsCount: 0 ,
        
    },
    reducers: {
        allProductRequest: (state) => {
            state.loading = true;
            state.products = []
        },
        allProductSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload.products
            state.productsCount = action.payload.productCount
            state.resultPerPage = action.payload.resultPerPage
            state.filteredProductsCount = action.payload.filteredProductsCount
        },
        allProductFail: (state,action) => {
            state.loading = false;
            state.error = action.payload
        },
        

        productDetailsRequest: (state) => {
            state.loading = false ;
        },
        productDetailsSuccess: (state, action) => {
            state.loading = false;
            state.product = action.payload
        },
        productDetailsFail: (state,action) => {
            state.loading = false;
            state.error = action.payload
        },


        clearErrors: (state) => {
            state.error = null

        }
    }
})

export const { allProductRequest, allProductSuccess, allProductFail, clearErrors, productDetailsRequest, productDetailsSuccess, productDetailsFail} = productSlice.actions ;

export default productSlice.reducer ;