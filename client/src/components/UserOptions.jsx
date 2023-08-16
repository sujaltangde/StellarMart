
import {RiLogoutCircleRLine} from 'react-icons/ri'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoginFalse, setLogoutNotifyTrue } from '../slices/UserSlice'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaRegUserCircle} from 'react-icons/fa'
import {LuLayoutDashboard} from 'react-icons/lu'
import { Link } from 'react-router-dom'


export const UserOptions = () => {

    const {me} = useSelector((state) => state.user)

    const [menu, setMenu] = useState(false) ;
    const dispatch = useDispatch()
    const navigate = useNavigate() ;
    const logOut = () => {
        localStorage.removeItem('token')
        dispatch(setIsLoginFalse())
        dispatch(setLogoutNotifyTrue())
        navigate('/')
   }


   

    return (
        <>

            <div className='flex flex-col justify-start items-start  '>

                        <div onClick={()=>setMenu(!menu)} className='cursor-pointer  '>
                        {me !== null ?   <img src={me.avtar[0].url} alt="/images/avatar.png" className='h-8 w-8 rounded-full'  /> : 
                        <img src="/images/avatar.png" className='h-8 w-8 rounded-full'  /> 
                        }                        
                        <div>
                            {menu? <>
                                <div className='absolute z-20  flex md:flex-col flex-row justify-center rounded-xl rounded-t-none items-center  pt-2  md:right-12 right-2  text-gray-700 gap-5 mt-3 '>
                                
                                {/*  Dashboard   */}
                                
                                <Link to="/dashboard" className='bg-white border hover:bg-gray-300 p-2 rounded-full shadow-md shadow-gray-700 '><LuLayoutDashboard className=' cursor-pointer  ' size={28} /> </Link>                                

                                {/*  Orders   */}
                                <Link to="/orders" className='bg-white border hover:bg-gray-300 p-2 rounded-full shadow-md shadow-gray-700 '><AiOutlineShoppingCart  className='cursor-pointer ' size={28} /></Link>

                                {/*  Profile   */}
                                <Link to="/account" className='bg-white border hover:bg-gray-300 p-2 rounded-full shadow-md shadow-gray-700 '><FaRegUserCircle className=' cursor-pointer ' size={28}  /></Link>

                                {/*  Logout   */}
                                <Link className='bg-white border hover:bg-gray-300 p-2 rounded-full shadow-md shadow-gray-700 '><RiLogoutCircleRLine onClick={()=>logOut()}  className=' cursor-pointer   ' size={28} /></Link>
                                
                                

                                </div>
                            </> : null}
                        </div>
                        </div>

                
            </div>

        </>
    )
}
