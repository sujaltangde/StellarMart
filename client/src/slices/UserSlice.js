import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name: "user",
    initialState:{
        loading: false,
        isAuthenticated: false,
        user: {},
        error: null
    },
    reducers:{
        loginRequest: (state) => {
            state.loading = true ;
            state.isAuthenticated = false ;
        },
        loginSuccess: (state, action) => {
            state.loading = false ;
            state.isAuthenticated = true ;
            state.user = action.payload
        },
        loginFail: (state, action) => {
            state.loading = false ;
            state.isAuthenticated = false ;
            state.user = null ;
            state.error = action.payload ;
        },
        clearErrors: (state) => {
            state.error = null
        }
    }
})

export const { loginRequest, loginSuccess, loginFail, clearErrors } = userSlice.actions ;

export default userSlice.reducer