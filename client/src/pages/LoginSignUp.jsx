import React, { useState, useRef } from 'react';
import { AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai'
import { MdOutlineTagFaces } from 'react-icons/md'
import { MetaData } from '../components/MetaData.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { login, register } from '../actions/userAction.js';
import {setUserExistErrFalse, setWrongCredentialsErrFalse, setLoginNotifyTrue, setRegisterNotifyTrue} from '../slices/UserSlice.js'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiOutlineEye} from 'react-icons/ai'
import {AiOutlineEyeInvisible} from 'react-icons/ai'



export const LoginSignUp = () => {
  
  const UserExistErrorNotify = () => toast.error("User already exist !");
  const WrongCredentialsErrNotify = () => toast.error("Wrong Credentials !");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, error, userExistErr, wrongCredentialsErr, isLogin } = useSelector((state) => state.user)
  const [name, setName] = useState("Login")

  // Login States
  const [loginPassword, setLoginPassword] = useState("")
  const [loginEmail, setLoginEmail] = useState("")

  // Register States
  const [userName, setUserName] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [avatar, setAvatar] = useState("")
  const [avatarPreview, setAvatarPreview] = useState("/images/avatar.png")
  const [avatarName, setAvatarName] = useState("Select Profile Pic..")

  const [loginPassType, setLoginPassType] = useState("password")
  const [regPassType, setRegPassType] = useState("password")

  

  // Register User
  const registerSubmit = (e) => {
    e.preventDefault()

    const userForm = new FormData();
    userForm.set("name", userName);
    userForm.set("email", registerEmail);
    userForm.set("password", registerPassword);
    userForm.set("avatar", avatar);

    dispatch(register(userForm));
    dispatch(setRegisterNotifyTrue()) ;

  }

  if(userExistErr){
    UserExistErrorNotify()
    setTimeout(()=>{
      dispatch(setUserExistErrFalse())
    },3000) 
  }
  if(wrongCredentialsErr){
    WrongCredentialsErrNotify()
    setTimeout(()=>{
      dispatch(setWrongCredentialsErrFalse())
    },3000) 
  }

  const imageChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
          setAvatarName(e.target.files[0].name)
        }
      };
      console.log(avatarName)
      reader.readAsDataURL(e.target.files[0]);
      setAvatarName
    }
  }



  if(isLogin){
    navigate("/")
  }



  // Login USer
  const loginSubmit = (e) => {
    e.preventDefault()
    console.log({ loginEmail, loginPassword })

    dispatch(login(loginEmail, loginPassword));
    dispatch(setLoginNotifyTrue())



  }


  return (
    <>

      <MetaData title={name} />
    
      <div className='min-h-screen bg-gray-100 pt-14 flex justify-center '>

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
                    className="mt-14 font-bold"
                />

        <div className='flex-col pt-10  md:w-1/3 w-full md:px-0 px-4 h-90 pb-28 flex  justify-center'>

          <div className=' bg-white rounded-md shadow-md shadow-gray-400 w-full h-[70vh]' >

            <div className='flex justify-around'>
              <div onClick={() => {
                setName("Login")
                setUserName("")
                setAvatar("")
                setRegisterEmail("")
                setRegisterPassword("")
                setAvatarPreview("/images/avatar.png")
                setAvatarName("Select Profile Pic...")
              }} className={`text-center py-4  w-1/2 
              border-x-0 border-t-0 border-blue-700 border-2  ${name === "Register" ? "border-none" : null}
              text-xl cursor-pointer font-semibold hover:bg-gray-200 `}>Login</div>
              <div onClick={() => {
                  setName("Register") 
                  setLoginEmail("")
                  setLoginPassword("")
                }} className={`text-center py-4  w-1/2
               border-x-0 border-t-0 border-blue-700 border-2 ${name === "Login" ? "border-none" : null}
               text-xl cursor-pointer font-semibold  hover:bg-gray-200 `}>Register</div>
            </div>

            <div className='pt-8'>
              { /* Login Form */}

              <form action="" onSubmit={loginSubmit} className={` ${name === "Login" ? "flex" : "hidden"}  flex-col pt-8 gap-5 px-8`}>

                <div className='relative rounded pl-3  border border-gray-500 py-1 flex justify-around items-center'>
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
                <div className='relative px-3 border rounded border-gray-500 py-1 flex justify-around items-center'>
                  <AiOutlineUnlock className='text-gray-500' size={26} />
                  <input
                    type={loginPassType}
                    placeholder='Password'
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className=' w-full pl-4  outline-none py-1 pr-4'
                  />
                 { loginPassType === "password" ? 
                 <AiOutlineEyeInvisible onClick={()=>setLoginPassType("text")} className='text-gray-500 cursor-pointer' size={26}  />  : 
                 <AiOutlineEye onClick={()=>setLoginPassType("password")} className='text-gray-500 cursor-pointer' size={26} /> }
                </div>


                <input type="submit" value="Login" className='w-full cursor-pointer bg-blue-600 py-2 text-white font-medium hover:bg-blue-500 rounded' />


                <p className='text-center pt-4'>Don't have an account,
                  <span onClick={() => setName("Register")} className='cursor-pointer underline text-blue-800 font-medium' > Register</span> here.</p>

              </form>


              { /* Register Form */}

              <form action="" onSubmit={registerSubmit} className={` ${name === "Register" ? "flex" : "hidden"}  flex-col pt-0  gap-5 px-8`}>

                <div className='relative rounded pl-3 border border-gray-500 py-1 flex justify-around items-center'>
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
                <div className='relative pl-3 rounded border border-gray-500 py-1 flex justify-around items-center'>
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

                <div className='relative px-3 rounded border border-gray-500 py-1 flex justify-around items-center'>
                  <AiOutlineUnlock className='text-gray-500' size={26} />
                  <input
                    type={regPassType}
                    placeholder='Password'
                    required
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    className=' w-full pl-4 outline-none py-1 pr-4'
                  />
                  { regPassType === "password" ? 
                 <AiOutlineEyeInvisible onClick={()=>setRegPassType("text")} className='text-gray-500 cursor-pointer' size={26}  />  : 
                 <AiOutlineEye onClick={()=>setRegPassType("password")} className='text-gray-500 cursor-pointer' size={26} /> }
                </div>


                <div className='relative pl-3 rounded hover:bg-gray-100 border border-gray-500 py-1 flex justify-around items-center'>

                  <label htmlFor="fileinput" className='cursor-pointer w-full text-gray-500 flex justify-center items-center gap-4 py-1'>
                    <img src={avatarPreview} className='w-6' alt="" />
                    {avatarName}

                  </label>
                  <input type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={imageChange}
                    className='hidden w-full pl-4 outline-none py-1 pr-4  ' required id='fileinput' />
                </div>

                <input type="submit" value="Register" className='w-full cursor-pointer bg-blue-600 py-2 text-white font-medium rounded hover:bg-blue-500 ' />

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





