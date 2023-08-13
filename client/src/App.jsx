import { Routes, Route } from "react-router"
import {Home} from './pages/Home'
import {About} from './pages/About'
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { NotFound } from "./pages/NotFound"
import { Loader } from "./components/Loader"




function App() {


  return (
    <>
          
            <Navbar />
            <Routes>

              <Route exact path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="*" element={<NotFound/>} />
              <Route path="/loader" element={<Loader/>} />
          



            </Routes>
            <Footer />


    </>
  )   
}

export default App
