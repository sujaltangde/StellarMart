import React from 'react'
import {BsSearch} from 'react-icons/bs'

export const Search = () => {
  return (
    <>
        <div className='md:w-[30vw] w-[70vw]'>
            <div className='flex justify-center items-center pl-2 bg-gray-100 w-full rounded '>
                <BsSearch className='text-gray-500 mr-1' size={20}/>
                <input autoFocus placeholder='Search for Products' className='px-2 bg-gray-100  py-2 outline-none placeholder:font-extrabold w-full rounded rounded-e ' type="text" />
            </div>
        </div>
    
    </>
  )
}
