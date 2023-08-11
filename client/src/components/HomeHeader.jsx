import React from 'react'
import { IoIosArrowDown } from 'react-icons/Io'
import { Link as LinkSr } from 'react-scroll'

export const HomeHeader = () => {
    return (
        <div>
            <div className='pt-16 min-h-screen bg-gradient-to-br from-blue-800 to-blue-950 '>

                <div className='flex justify-center items-center flex-col text-center md:px-0 px-4'>
                    <p className='text-white font-bold text-2xl pt-16'>Welcome to StellarMart</p>
                    <p className='text-white font-bold md:text-5xl text-4xl pt-16'>FIND AMAZING PRODUCTS BELOW</p>

                 
                    <LinkSr spy={true} smooth={true} offset={50} duration={300} to="products">
                        <button className='md:mt-14 mt-8 font-bold text-xl border md:px-12 px-8 py-2 bg-blue-600 text-white'>
                            <IoIosArrowDown />
                        </button>
                    </LinkSr>

                </div>
            </div>

        </div>
    )
}
