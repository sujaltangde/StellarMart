import axios from 'axios'
import { loginRequest, loginSuccess, loginFail, clearErrors } from '../slices/UserSlice' 


export const login = (email, password) => async (dispatch) => {
    try{    

        dispatch(loginRequest())

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        const {data} = await axios.post("http://localhost:4000/api/v1/login",{email, password},config)

        console.log(data) ;
        dispatch(loginSuccess(data.user))

    }
    catch(err){
        dispatch(loginFail(err.message))
    }
}




// Clearing Errors
export const clearError = () => async (dispatch) => {
    dispatch(clearErrors())
}