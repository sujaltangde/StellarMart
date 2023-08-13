import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HomeHeader } from '../components/HomeHeader';
import { Products } from '../components/Products';
import { MetaData } from '../components/MetaData';
import { getProduct } from '../actions/productAction';
import {useDispatch, useSelector} from 'react-redux'



export const Home = () => {
    const notify = () => toast.success("Login Successful !");

    const {products, loading, error, productsCount} = useSelector( state =>  state.products )

    const dispatch = useDispatch()


    useEffect(()=>{

        dispatch(getProduct())
    },[dispatch])


    console.log(products, loading, productsCount)
    
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


                <HomeHeader/>
         <button onClick={notify}>Notify!</button>

            <Products products={products} loading={loading} />
            
        </>
    );
}