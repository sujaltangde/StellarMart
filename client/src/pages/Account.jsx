import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Loader } from '../components/Loader'
import {me as Me} from '../actions/userAction'


export const Account = () => {

  const { me, isLogin, loading } = useSelector((state) => state.user)

  const dispatch = useDispatch();
  const navigate = useNavigate()

  if(me == null && !loading){
    navigate("/")
  }

  return (
    <>

      <div className='pt-14 min-h-screen '>
        {

          loading ? <Loader /> : 
          
          <>
            <div>

                <p>{me.name}</p>
                <p>{me.email}</p>

            </div>
          </>
        }

      </div>


    </>
  )
}
