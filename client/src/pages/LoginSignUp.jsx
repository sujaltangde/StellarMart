import React, { useState, useRef } from 'react';
import { AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai'
import { MdOutlineTagFaces } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { MetaData } from '../components/MetaData.jsx'
import {useDispatch, useSelector} from 'react-redux'
import { login, clearError } from '../actions/userAction.js';



export const LoginSignUp = () => {

  const dispatch = useDispatch() ;

  const [name, setName] = useState("Login")

  // Login States
  const [loginPassword, setLoginPassword] = useState("")
  const [loginEmail, setLoginEmail] = useState("")

  // Register States
  const [userName, setUserName] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")



  // Register User
  const registerSubmit = (e) => {
    e.preventDefault()
    console.log({ userName, registerEmail, registerPassword });
  }


  // Login USer
  const loginSubmit = (e) => {
    e.preventDefault()
    console.log({ loginEmail, loginPassword })
    dispatch(login(loginEmail, loginPassword)) ;
  }


  return (
    <>

      <MetaData title={name} />

      <div className='min-h-screen bg-gray-100 pt-14 flex justify-center '>


        <div className='flex-col pt-10  md:w-1/3 w-full md:px-0 px-10 h-90 pb-28 flex  justify-center'>

          <div className=' bg-white rounded-md shadow-md shadow-gray-400 w-full h-[70vh]' >

            <div className='flex justify-around'>
              <div onClick={() => setName("Login")} className={`text-center py-4 w-1/2 
              border-x-0 border-t-0 border-blue-700 border-2  ${name === "Register" ? "border-none" : null}
              text-lg cursor-pointer font-medium `}>Login</div>
              <div onClick={() => setName("Register")} className={`text-center py-4 w-1/2
               border-x-0 border-t-0 border-blue-700 border-2 ${name === "Login" ? "border-none" : null}
               text-lg cursor-pointer font-medium `}>Register</div>
            </div>

            <div className='pt-8'>

              { /* Login Form */}

              <form action="" onSubmit={loginSubmit} className={` ${name === "Login" ? "flex" : "hidden"}  flex-col pt-12 gap-5 px-12`}>

                <div className='relative pl-3 border border-gray-500 py-1 flex justify-around items-center'>
                  <AiOutlineMail className='text-gray-500 ' size={26} />
                  <input
                    type="email"
                    placeholder='Email'
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className=' w-full pl-4 outline-none py-1 pr-4'
                  />
                </div>
                <div className='relative pl-3 border border-gray-500 py-1 flex justify-around items-center'>
                  <AiOutlineUnlock className='text-gray-500' size={26} />
                  <input
                    type="password"
                    placeholder='Password'
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className=' w-full pl-4 outline-none py-1 pr-4'
                  />
                </div>


                <input type="submit" value="Login" className='w-full cursor-pointer bg-blue-600 py-2 text-white font-medium ' />


                <p className='text-center pt-4'>Don't have an account,
                  <span onClick={() => setName("Register")} className='cursor-pointer underline text-blue-800 font-medium' > Register</span> here.</p>

              </form>


              { /* Register Form */}

              <form action="" onSubmit={registerSubmit} className={` ${name === "Register" ? "flex" : "hidden"}  flex-col pt-0  gap-5 px-12`}>

                <div className='relative pl-3 border border-gray-500 py-1 flex justify-around items-center'>
                  <MdOutlineTagFaces className='text-gray-500 ' size={26} />
                  <input
                    type="text"
                    placeholder='Full Name'
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className=' w-full pl-4 outline-none py-1 pr-4'
                  />
                </div>
                <div className='relative pl-3 border border-gray-500 py-1 flex justify-around items-center'>
                  <AiOutlineMail className='text-gray-500 ' size={26} />
                  <input
                    type="email"
                    placeholder='Email'
                    required
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    className=' w-full pl-4 outline-none py-1 pr-4'
                  />
                </div>

                <div className='relative pl-3 border border-gray-500 py-1 flex justify-around items-center'>
                  <AiOutlineUnlock className='text-gray-500' size={26} />
                  <input
                    type="password"
                    placeholder='Password'
                    required
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    className=' w-full pl-4 outline-none py-1 pr-4'
                  />
                </div>


                <div className='relative pl-3 hover:bg-gray-200 border border-gray-500 py-1 flex justify-around items-center'>

                  <label htmlFor="fileinput" className='cursor-pointer w-full text-gray-500 flex justify-center items-center gap-4 py-1'>
                    <CgProfile className=' ' size={26} />
                    Select Profile Pic...

                  </label>
                  <input type="file"
                    className='hidden w-full pl-4 outline-none py-1 pr-4  ' id='fileinput' />
                </div>

                <input type="submit" value="Register" className='w-full cursor-pointer bg-blue-600 py-2 text-white font-medium ' />

                <p className='text-center '>Already have a account,
                  <span onClick={() => setName("Login")} className='cursor-pointer underline text-blue-800 font-medium' > Login</span> here.</p>

              </form>




            </div>



          </div>



        </div>


      </div>



    </>
  );
};





