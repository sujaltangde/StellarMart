import { toast } from 'react-toastify';
import {createOrderRequest, createOrderSuccess, createOrderFail, myOrderRequest, myOrderSuccess, myOrderFail, orderDetailsRequest, orderDetailsSuccess, orderDetailsFail} from '../slices/OrderSlice'
import axios from 'axios'

// Create New Order
export const createOrder = (order) => async (dispatch, getState) => {
    try{
        dispatch(createOrderRequest())

        const config = {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        const {data} = await axios.post("http://localhost:4000/api/v1/order/new",order,config)

        dispatch(createOrderSuccess(data.order)) ;
        toast.success("Payment successful! Thank you for your purchase.") ;

    }catch(err){
        dispatch(createOrderFail(err.response.data.message)) ;
        toast.error(err.response.data.message)
    }
}

// My Orders
export const myOrders = () => async (dispatch) => {
    try{    
        dispatch(myOrderRequest())
        const config = {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        const {data} = await axios.get("http://localhost:4000/api/v1/orders/me",config)

        dispatch(myOrderSuccess(data.orders))

    }catch(err){
        dispatch(myOrderFail(err.response.data.message))
        toast.error(err.response.data.message)
    }
}

// Get Order Details
export const getOrderDetails = (id) => async (dispatch) => {
    try{
        dispatch(orderDetailsRequest())
        const config = {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        const {data} = await axios.get(`http://localhost:4000/api/v1/order/${id}`,config) ;

        dispatch(orderDetailsSuccess(data.order)) ;
        
    }catch(err){
        dispatch(orderDetailsFail(err.response.data.message))
        toast.error(err.response.data.message)
    }
}