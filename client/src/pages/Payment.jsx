import React,{useState, useEffect, useRef} from 'react'
import { CheckoutSteps } from '../components/CheckoutSteps'
import { useSelector, useDispatch } from 'react-redux'
import { MetaData } from '../components/MetaData'
import { toast } from 'react-toastify'
import {CardNumberElement, CardCvcElement, CardExpiryElement, useStripe, useElements} from '@stripe/react-stripe-js'
import axios from 'axios'

export const Payment = () => {

  return (
    <>       
            <MetaData title="Payment" />   
            <div className='min-h-screen pt-14'>
                <div className='pt-3'>
                <CheckoutSteps activeStep={2} />
                </div>
                    <div>
                        <form  action="">
                            
                            <div>
                                <span>Credit Card icon</span>
                                <CardNumberElement  />
                            </div>
                            <div>
                                <span>Event icon</span>
                                <CardExpiryElement  />
                            </div>
                            <div>
                                <span>VPN key icon</span>
                                <CardCvcElement  />
                            </div>

                        </form>
                    </div>

                Payment

            </div>


    </>
  )
}
