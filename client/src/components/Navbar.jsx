import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {ImSearch} from 'react-icons/im'
import {FiShoppingBag} from 'react-icons/fi'
import {MdAccountBox} from 'react-icons/md'
import {FaBars} from 'react-icons/fa'
import {RxCross1} from 'react-icons/rx'

export const Navbar = () => {

  const [toggle, setToggle ] = useState(true)

  return (
    <>
      <div className='fixed min-w-full '>
          <div className='bg-blue-950 text-white flex md:gap-12 gap-6 py-3 justify-between md:px-6 px-2'> 
            <Link to="/" className='md:text-2xl flex gap-1 text-lg font-bold  '>
              <img  src="/favicon.png" className='md:h-8 h-7 ' alt="" />
              StellarMart</Link>
            <ul className='gap-12 pr-8 md:flex hidden   text-xl justify-center items-center'>
              <Link className='hover:text-orange-400' to="/">Home</Link>
              <Link className='hover:text-orange-400' >Product</Link>
              <Link className='hover:text-orange-400' >Contact</Link>
              <Link className='hover:text-orange-400'  to="/about" >About</Link>
              
            </ul>
            <ul className='flex md:gap-8 gap-5 md:pr-0 pr-1 justify-center items-center'>
              <Link className='hover:text-orange-400' > <ImSearch size={22} /> </Link>
              <Link className='hover:text-orange-400' > <FiShoppingBag size={25} /> </Link>
              <Link className='hover:text-orange-400' > <MdAccountBox size={25} /> </Link>
              
            </ul>



            
            <div className='md:hidden flex justify-center items-center border px-1 rounded-md '>
              {
                toggle? <FaBars onClick={()=>setToggle(!toggle)}  size={23} />
                :
                <RxCross1 onClick={()=>setToggle(!toggle)}   size={23} />
              }
            </div>
          </div>

      </div>
      <div className={`${toggle? "hidden" : "flex"  } fixed top-12 `} >
            <div className='bg-blue-950 w-screen h-screen bg-opacity-90 z-10 pt-16'>
            <ul className='gap-20  flex flex-col text-white   text-2xl justify-center items-center'>
              <Link onClick={()=>setToggle(!toggle)}  className='hover:text-orange-400' to="/">Home</Link>
              <Link onClick={()=>setToggle(!toggle)}  className='hover:text-orange-400' >Product</Link>
              <Link onClick={()=>setToggle(!toggle)}  className='hover:text-orange-400' >Contact</Link>
              <Link onClick={()=>setToggle(!toggle)}  className='hover:text-orange-400'  to="/about" >About</Link>
              
            </ul>
                
            </div>
      </div>
    
    </>
  )
}
