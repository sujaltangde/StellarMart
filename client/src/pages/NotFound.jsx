import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <>

        <div className='min-h-screen pt-16 flex justify-center '>

        <div className='pt- text-center flex flex-col justify-center items-center pb-28 md:px-0 px-6'>
            <img src="/images/notfound.png" className='h-80' alt="" />
        <h className="text-2xl pt-3 pb-1 font-bold">404 - Page Not Found</h>
      <p className='py-2 text-xl'>The page you are looking for does not exist.</p>

      <Link to="/"><button className=' bg-blue-600 text-white px-6 py-2 ' >Go back to Home</button></Link>

        </div>

        </div>
    
    </>
  )
}
