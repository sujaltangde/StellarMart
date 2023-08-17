import axios from 'axios'
import { loginRequest, loginSuccess, loginFail, registerRequest, registerSuccess, registerFail, clearErrors, setIsLoginFalse, setIsLoginTrue, getMeRequest, getMeSuccess, getMeFail, updateProfileRequest, updateProfileSuccess, updateProfileFail, changePasswordRequest, changePasswordSuccess, changePasswordFail } from '../slices/UserSlice'
import { toast } from 'react-toastify';


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
        toast.success("Login Successful !");
    }
    catch (err) {
        dispatch(loginFail(err.response.data.message));
        console.log(err.response.data.message)
        toast.error(err.response.data.message)
    }
}






export const register = (userData) => async (dispatch) => {
    try {

        dispatch(registerRequest())

        const { data } = await axios.post(`http://localhost:4000/api/v1/register`, userData)

        localStorage.setItem('token', data.token)

        dispatch(registerSuccess(data));
        toast.success("Register Successful !");

    } catch (err) {
        dispatch(registerFail(err.response.data.message))
        if (err.response.data.message.includes("duplicate")) {
            toast.error("User already exists")
        } else {
            toast.error(err.response.data.message)
        }

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


export const me = () => async (dispatch) => {
    try {

        dispatch(getMeRequest());

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        const { data } = await axios.get("http://localhost:4000/api/v1/me", config)

        dispatch(getMeSuccess(data.user));

    } catch (err) {
        dispatch(getMeFail(err.response.data.message));
    }
}


export const updateMe = (userData) => async (dispatch) => {

    try {
        dispatch(updateProfileRequest());

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        const { data } = await axios.put("http://localhost:4000/api/v1/me/update", userData, config);

        dispatch(updateProfileSuccess(data));
        dispatch(getMeSuccess(data.user))
        toast.success("Profile Updated Successfully !")
    } catch (err) {
        dispatch(updateProfileFail(err.response.data.message));
        toast.error(err.response.data.message)
    }

}


export const changePassword = (passData) => async (dispatch) => {
    try{    

        dispatch(changePasswordRequest()) ;

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        const {data} = await axios.put("http://localhost:4000/api/v1/password/update",passData,config) ;

        dispatch(changePasswordSuccess()) ;

        toast.success("Password Updated Successfully !")

    }catch(err){
        dispatch(changePasswordFail(err.response.data.message))
        toast.error(err.response.data.message) ;
    }
}

// Clearing Errors
export const clearError = () => async (dispatch) => {
    dispatch(clearErrors())
}