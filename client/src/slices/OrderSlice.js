import {createSlice} from '@reduxjs/toolkit'

const orderSlice = createSlice({
    name: 'order',
    initialState:{
        loading: false,
        order: null ,
        myOrders: [] ,
        error: null,
    },
    reducers:{
        createOrderRequest: (state)=>{
            state.loading = true ;
        },
        createOrderSuccess: (state,action)=>{
            state.loading = false ;
            state.order = action.payload
        },
        createOrderFail: (state,action)=>{
            state.loading = false ;
            state.error = action.payload
        },
        myOrderRequest: (state)=>{
            state.loading = true ;
        },
        myOrderSuccess: (state,action)=>{
            state.loading = false ;
            state.myOrders = action.payload
        },
        myOrderFail: (state,action)=>{
            state.loading = false ;
            state.error = action.payload
        },

    }
})

export const {createOrderRequest, createOrderSuccess, createOrderFail, myOrderRequest, myOrderSuccess, myOrderFail} = orderSlice.actions ;
export default orderSlice.reducer