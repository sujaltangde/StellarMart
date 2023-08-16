import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name: "user",
    initialState:{
        loading: false,
        isAuthenticated: false,
        user: null,
        error: null,
        userExistErr: false,
        wrongCredentialsErr: false,
        isLogin: false,
        loginNotify: false,
        registerNotify: false,
        logoutNotify: false,
        me: null
    },

    reducers:{

        loginRequest: (state) => {
            state.loading = true ;
            state.isAuthenticated = false ;
        },

        loginSuccess: (state, action) => {
            state.loading = false ;
            state.isAuthenticated = true ;
            state.user = action.payload ;
            state.isLogin = true
        },
 
        loginFail: (state, action) => {
            state.loading = false ;
            state.isAuthenticated = false ;
            state.user = null ;
            state.error = action.payload ;
            state.wrongCredentialsErr = true ; 
        },
        registerRequest: (state) => {
            state.loading = true ;
            state.isAuthenticated = false ;
        },

        registerSuccess: (state, action) => {
            state.loading = false ;
            state.isAuthenticated = true ;
            state.user = action.payload ;
            state.isLogin = true ;
        },
 
        registerFail: (state, action) => {
            state.loading = false ;
            state.isAuthenticated = false ;
            state.user = null ;
            state.error = action.payload ;
            state.userExistErr = true ;
        },
        
        setUserExistErrFalse: (state)=>{
            state.userExistErr = false
        },

        setWrongCredentialsErrFalse: (state)=>{
            state.wrongCredentialsErr = false
        },

        setIsLoginTrue: (state) => {
            state.isLogin = true 
        },

        setIsLoginFalse: (state) => {
            state.isLogin = false 
        },

        setLoginNotifyTrue: (state) => {
            state.loginNotify = true 
        },

        setLoginNotifyFalse: (state) => {
            state.loginNotify = false 
        },

        setRegisterNotifyTrue: (state) => {
            state.registerNotify = true 
        },

        setRegisterNotifyFalse: (state) => {
            state.registerNotify = false 
        },

        setLogoutNotifyTrue: (state) => {
            state.logoutNotify = true 
        },

        setLogoutNotifyFalse: (state) => {
            state.logoutNotify = false 
        },
        
        getMeRequest: (state) => {
            state.loading = true
        },
        getMeSuccess: (state,action) => {
            state.loading = false  ;
            state.me = action.payload ;
        },
        getMeFail: (state,action) => {
            state.loading = false ;
            state.error = action.payload ;
            state.me = null ;
        },


        clearErrors: (state) => {
            state.error = null ;
        },

    }
})

export const { loginRequest, loginSuccess, loginFail, registerRequest, registerSuccess, registerFail, clearErrors, setUserExistErrFalse, setWrongCredentialsErrFalse, setIsLoginTrue, setIsLoginFalse, setLoginNotifyTrue,
    setLoginNotifyFalse, setRegisterNotifyTrue, setRegisterNotifyFalse, setLogoutNotifyTrue, setLogoutNotifyFalse, 
    getMeRequest, 
    getMeSuccess,
     getMeFail } = userSlice.actions ;

export default userSlice.reducer