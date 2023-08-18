import { Routes, Route } from "react-router"
import {Home} from './pages/Home'
import {About} from './pages/About'
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { NotFound } from "./pages/NotFound"
import { Loader } from "./components/Loader"
import { ProductDetails } from "./pages/ProductDetails"
import { AllProducts } from "./pages/AllProducts"
import { LoginSignUp } from "./pages/LoginSignUp"
import { useEffect, useState } from "react"
import {isLogin as IsLogin} from './actions/userAction.js'
import { useDispatch, useSelector } from "react-redux"
import { Dashboard } from "./pages/Dashboard"
import { Orders } from "./pages/Orders"
import { Account } from "./pages/Account"
import {me} from './actions/userAction.js'
import { ToastContainer, toast } from 'react-toastify';
import { UpdateProfile } from "./pages/UpdateProfile"
import { UpdatePassword } from "./pages/UpdatePassword"
import { Cart } from "./pages/Cart"


function App() {

  const dispatch = useDispatch()
  const {isLogin, isUpdated} = useSelector(state => state.user)

  useEffect(()=>{
    dispatch(me()) ;
  },[dispatch, isLogin, isUpdated])
 

  useEffect(() => {
    const LogOrNot = ()=>{
      dispatch(IsLogin());
    }
    LogOrNot()
    
  },[]);


  

  return (
    <>
          
            <Navbar />
            <Routes>

              <Route path="*" element={<NotFound/>} />
              <Route exact path="/" element={<Home/>} />
              <Route path="/product/:id" element={<ProductDetails/>}  />
              <Route path="/about" element={<About/>} />
              <Route path="/loader" element={<Loader/>} />

              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/orders" element={<Orders/>} />
              <Route path="/account" element={<Account/>} />

              <Route path="/products" element={<AllProducts/>} />
              <Route path="/products/:keyword" element={<AllProducts/>} />
              
             
              <Route path="/auth" element={<LoginSignUp />} />
             
              <Route path="/updateProfile" element={<UpdateProfile/>} />
              
              
              <Route path="/updatePassword" element={<UpdatePassword/>} />

              <Route path="/cart" element={<Cart/>} />

              



            </Routes>
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
                className="mt-14 font-bold  "
                
            />
            
            <Footer />


    </>
  )   
}

export default App
