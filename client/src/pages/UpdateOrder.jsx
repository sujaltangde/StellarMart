import React from 'react'
import {useParams} from 'react-router'

export const UpdateOrder = () => {

    const {id} = useParams()

  return (
    <>

        <div className="min-h-screen pt-14">

            {id}

        </div>
    
    </>
  )
}
