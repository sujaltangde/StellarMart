import { Routes, Route } from "react-router"
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { NotFound } from "./pages/NotFound"
import { Loader } from "./components/Loader"
import { ProductDetails } from "./pages/ProductDetails"
import { AllProducts } from "./pages/AllProducts"
import { LoginSignUp } from "./pages/LoginSignUp"
import { useEffect, useState } from "react"
import { isLogin as IsLogin } from './actions/userAction.js'
import { useDispatch, useSelector } from "react-redux"
import { Dashboard } from "./pages/Dashboard"
import { Orders } from "./pages/Orders"
import { Account } from "./pages/Account"
import { me } from './actions/userAction.js'
import { ToastContainer, toast } from 'react-toastify';
import { UpdateProfile } from "./pages/UpdateProfile"
import { UpdatePassword } from "./pages/UpdatePassword"
import { Contact } from './pages/Contact'
import { Cart } from "./pages/Cart"
import { Shipping } from "./pages/Shipping"
import { Confirm } from "./pages/Confirm"
import { Payment } from "./pages/Payment"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios'
import { OrderSuccess } from './pages/OrderSuccess'
import {myOrders} from './actions/orderAction'


function App() {

  const dispatch = useDispatch()


  const { isLogin, isUpdated } = useSelector(state => state.user)

  const [stripeApiKey, setStripeApiKey] = useState("")

  async function getStripeApiKey() {

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }

    const { data } = await axios.get("http://localhost:4000/api/v1/stripeApiKey", config)
    setStripeApiKey(data.stripeApiKey)

  }


  useEffect(() => {
    dispatch(me());
  }, [dispatch, isLogin, isUpdated])


  useEffect(() => {
    const LogOrNot = () => {
      dispatch(IsLogin());
    }
    LogOrNot()
    getStripeApiKey()
  }, []);




  return (
    <>

      <Navbar />
      <Routes>

        <Route path="*" element={<NotFound />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/loader" element={<Loader />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/order/me" element={<Orders />} />
        <Route path="/account" element={<Account />} />

        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:keyword" element={<AllProducts />} />


        <Route path="/auth" element={<LoginSignUp />} />

        <Route path="/updateProfile" element={<UpdateProfile />} />


        <Route path="/updatePassword" element={<UpdatePassword />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/order/shipping" element={<Shipping />} />
        <Route path="/order/confirm" element={<Confirm />} />


        {stripeApiKey &&

          <Route path="/order/payment" element={
            <Elements stripe={loadStripe(stripeApiKey)}>
              <Payment />
            </Elements>
          } />
        }

        <Route path="/success" element={<OrderSuccess />} />


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
