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
import {isLogin } from './actions/userAction.js'
import { useDispatch } from "react-redux"




function App() {

  const dispatch = useDispatch()

 

  useEffect(() => {
    const LogOrNot = ()=>{
      dispatch(isLogin());
    }
    LogOrNot()
    
  },[]);


  return (
    <>
          
            <Navbar />
            <Routes>

              <Route exact path="/" element={<Home/>} />
              <Route path="*" element={<NotFound/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/:id" element={<ProductDetails/>}  />
              <Route path="/loader" element={<Loader/>} />

              <Route path="/products" element={<AllProducts/>} />
              <Route path="/products/:keyword" element={<AllProducts/>} />
              
             
              <Route path="/auth" element={<LoginSignUp />} />
          



            </Routes>
            <Footer />


    </>
  )   
}

export default App
