import axios from 'axios'
import { loginRequest, loginSuccess, loginFail, registerRequest, registerSuccess, registerFail, clearErrors, setIsLoginFalse, setIsLoginTrue } from '../slices/UserSlice'


export const login = (email, password) => async (dispatch) => {
    try {

        dispatch(loginRequest())

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        console.log({email, password})

        const { data } = await axios.post(`http://localhost:4000/api/v1/login`, { email, password }, config)

        localStorage.setItem('token', data.token) 
        
        dispatch(loginSuccess(data))
    }
    catch (err) {
            dispatch(loginFail(err.response.data.message));
            dispatch(loginFail("An error occurred."));
    }
}


export const register = (userData) => async (dispatch) => {
    try {

        dispatch(registerRequest())


        const config = { headers: { "Content-Type": "multipart/form-data" } };



        const { data } = await axios.post(`http://localhost:4000/api/v1/register`, userData, config)

        localStorage.setItem('token', data.token)

        console.log(data, "user registered and logged in");

        dispatch(registerSuccess(data))

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