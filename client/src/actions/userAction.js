import axios from 'axios'
import { loginRequest, loginSuccess, loginFail, registerRequest, registerSuccess, registerFail, clearErrors, setIsLoginFalse, setIsLoginTrue, setRegisterNotifyTrue, setLoginNotifyTrue } from '../slices/UserSlice'


export const login = (email, password) => async (dispatch) => {
    try {

        dispatch(loginRequest())

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };


        const { data } = await axios.post(`http://localhost:4000/api/v1/login`, { email, password }, config)

        localStorage.setItem('token', data.token)

        dispatch(loginSuccess(data))
        dispatch(setLoginNotifyTrue())
    }
    catch (err) {
        dispatch(loginFail(err.response.data.message));
    }
}


export const register = (userData) => async (dispatch) => {
    try {

        dispatch(registerRequest())

        const { data } = await axios.post(`http://localhost:4000/api/v1/register`, userData)

        localStorage.setItem('token', data.token)

        dispatch(registerSuccess(data));
        dispatch(setRegisterNotifyTrue());

    } catch (err) {
        dispatch(registerFail(err.response.data.message))
    }
}



export const isLogin = () => async (dispatch) => {
    try {

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        const { data } = await axios.get(`http://localhost:4000/api/v1/isLogin`, config);

        dispatch(setIsLoginTrue())
        
   

    } catch (err) {
        dispatch(setIsLoginFalse())
    }
}



// Clearing Errors
export const clearError = () => async (dispatch) => {
    dispatch(clearErrors())
}