import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem("cartItems")) : [],
    },
    reducers:{

        addToCart: (state, action)=>{
            const item = action.payload ;
            const isItemExist = state.cartItems.find(
                (i) => i.product === item.product
            );

            if(isItemExist){
                state.cartItems = state.cartItems.map((i) =>
                i.product === isItemExist.product ? item : i
            ); 
            }else{
                state.cartItems.push(item);
            } 
        },
        removeFromCart:(state)=>{
            state.cartItems = JSON.parse(localStorage.getItem("cartItems")) ;
        },
        removeAllItems:(state)=>{
            state.cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem("cartItems")) : []
        }

    }
})


export const { addToCart, removeFromCart, removeAllItems } = cartSlice.actions

export default cartSlice.reducer ;
