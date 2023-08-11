import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HomeHeader } from '../components/HomeHeader';
import { Products } from '../components/Products';



export const Home = () => {
    const notify = () => toast.success("Login Successful !");

    return (
        <>
         {/* <button onClick={notify}>Notify!</button> */}
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
                
                <Products/>
            
        </>
    );
}