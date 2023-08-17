import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        item: null,
        cartItems: [],

    },
    reducers:{

        addToCart: (state, action)=>{
            const item = action.payload ;
            const isItemExist = state.cartItems.find(
                (i) => i.product === item.product
            );

            if(isItemExist){
                return {
                    cartItems: state.cartItems.map((i)=>   
                     i.product === isItemExist.product ? item : i 
                    ),
                }
            }else{
                return{
                    cartItems: [cartItems, item],
                }
            }
        },

    }
})


export const {addToCart} = cartSlice.actions

export default cartSlice.reducer ;
