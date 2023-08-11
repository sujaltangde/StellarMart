import { Routes, Route } from "react-router"
import {Home} from './pages/Home'
import {About} from './pages/About'
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"




function App() {


  return (
    <>
          
            <Navbar />
            <Routes>

              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
          



            </Routes>
            <Footer />


    </>
  )   
}

export default App
