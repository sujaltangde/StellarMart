import React, { useState } from 'react'
import { LuLayoutDashboard } from 'react-icons/lu'
import { FaRegListAlt, FaRegComments } from 'react-icons/fa'
import { PiUsersThreeLight } from 'react-icons/pi'
import { HiTemplate } from 'react-icons/hi'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAllProductsForAdmin } from '../actions/productAction'

export const Sidebar = ({ sideTog }) => {

    const dispatch = useDispatch()

    const [togTree, setTogTree] = useState(true)

    return (
        <>
            <div className={` ${sideTog ? "flex" : "hidden"} flex-col z-10 fixed border-gray-400 min-h-screen px-12 bg-white shadow-xl shadow-gray-600`}>
                <div className='flex justify-center items-center py-6 pt-12 '>
                    <img src={"/favicon.png"} alt="" />
                    <span className='text-xl font-bold'>StellarMart</span>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className="flex items-center gap-2">
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <LuLayoutDashboard />
                            <span className='text-lg font-medium'>Dashboard</span>
                        </div>
                    </div>
                    <div className="flex  flex-col">
                        <div className=' items-center gap-2 flex '>
                            <div className='flex items-center  gap-2 cursor-pointer' onClick={() => setTogTree(!togTree)}>
                                {
                                    togTree ? <MdOutlineKeyboardArrowDown size={23} /> :
                                        <MdOutlineKeyboardArrowRight size={23} />
                                }
                                <span className='text-lg font-medium' >Products</span>
                            </div>


                        </div>
                        <div className={`px-8 pt-1 gap-3 flex-col ${togTree ? "flex" : "hidden"} `}>
                            <Link onClick={()=>{
                                dispatch(getAllProductsForAdmin())
                            }} to="/admin/products">

                            <div className='flex items-center pt-1 gap-2'>
                                <HiTemplate />
                                <span>All</span>
                            </div>
                            </Link>
                            <div className='flex items-center gap-2'>
                                <AiOutlinePlus />
                                <span>Create</span>
                            </div>

                        </div>


                    </div>
                    <div className="flex items-center gap-2">
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <FaRegListAlt />
                            <span className='text-lg font-medium'>Orders</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <PiUsersThreeLight size={20} />
                            <span className='text-lg font-medium'>Users</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <FaRegComments />
                            <span className='text-lg font-medium'>Reviews</span>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
