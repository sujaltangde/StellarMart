import {createSlice} from '@reduxjs/toolkit'

const orderSlice = createSlice({
    name: 'order',
    initialState:{
        loading: false,
        order: null ,
        myOrders: [] ,
        error: null,
        orderDetails:{}
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
        
        orderDetailsRequest: (state) => {
            state.loading = true
        },
        orderDetailsSuccess: (state,action) => {
            state.loading = false,
            state.orderDetails = action.payload
        },
        orderDetailsFail: (state,action) => {
            state.loading = false,
            state.error = action.payload
        }


    }
})

export const {createOrderRequest, createOrderSuccess, createOrderFail, myOrderRequest, myOrderSuccess, myOrderFail
, orderDetailsRequest, orderDetailsSuccess, orderDetailsFail } = orderSlice.actions ;
export default orderSlice.reducer