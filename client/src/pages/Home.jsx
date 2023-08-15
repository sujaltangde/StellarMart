import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HomeHeader } from '../components/HomeHeader';
import { Products } from '../components/Products';
import { MetaData } from '../components/MetaData';
import { getProducts } from '../actions/productAction';
import { useDispatch, useSelector } from 'react-redux'
import { setLoginNotifyFalse, setRegisterNotifyFalse } from '../slices/UserSlice';



export const Home = () => {
    // const LoginNotify = () => toast.success("Login Successful !");
    // const RegisterNotify = () => toast.success("Register Successful !");

    const { products, loading, error, productsCount } = useSelector(state => state.products)

    const dispatch = useDispatch()

    const { loginNotify, registerNotify } = useSelector(state => state.user)


    useEffect(() => {

        dispatch(getProducts())

    }, [dispatch, error])


    useEffect(() => {
        if (registerNotify) {
            toast.success("Register Successful !");
            dispatch(setRegisterNotifyFalse());
        }
    }, [registerNotify, dispatch]);

    useEffect(() => {
        if (loginNotify) {
            toast.success("Login Successful !");
            dispatch(setLoginNotifyFalse());
        }
    }, [loginNotify, dispatch]);

    return (
        <>
            <MetaData title="StellarMart" />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                className="mt-14 font-bold"
            />


            <HomeHeader />
            

            <Products products={products} loading={loading} />

        </>
    );
}