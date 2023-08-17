import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: null,
        isLogin: false,
        me: null,
        isUpdated: false ,
        },

    reducers: {

        loginRequest: (state) => {
            state.loading = true;
            state.isAuthenticated = false;
        },

        loginSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
            state.isLogin = true
        },

        loginFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload;
            state.wrongCredentialsErr = true;
        },
        registerRequest: (state) => {
            state.loading = true;
            state.isAuthenticated = false;
        },

        registerSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
            state.isLogin = true;
        },

        registerFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload;
            state.userExistErr = true;
        },


        setIsLoginTrue: (state) => {
            state.isLogin = true
        },

        setIsLoginFalse: (state) => {
            state.isLogin = false
        },



        getMeRequest: (state) => {
            state.loading = true
        },
        getMeSuccess: (state, action) => {
            state.loading = false;
            state.me = action.payload;
        },
        getMeFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.me = null;
        },


        updateProfileRequest: (state) => {
            state.loading = true
        },
        updateProfileSuccess: (state, action) => {
            state.loading = false ;
            state.isUpdated = true
        },
        updateProfileFail: (state, action) => {
            state.loading = false ;
            state.error = action.payload
        },
        updateProfileReset: (state, action) => {
            state.isUpdated = false
        },


        changePasswordRequest: (state) => {
            state.loading = true
        },
        changePasswordSuccess: (state) => {
            state.loading = false
        },
        changePasswordFail: (state,action) => {
            state.loading = false ;
            state.error = action.payload
        },


        clearErrors: (state) => {
            state.error = null;
        },

    }
})

export const { loginRequest, loginSuccess, loginFail, registerRequest, registerSuccess, registerFail, clearErrors,  setIsLoginTrue, setIsLoginFalse, getMeRequest, getMeSuccess, getMeFail, updateProfileRequest, updateProfileSuccess, updateProfileFail,
updateProfileReset, changePasswordRequest, changePasswordSuccess, changePasswordFail
} = userSlice.actions;

export default userSlice.reducer