import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsForAdmin } from '../actions/productAction'
import { Loader } from '../components/Loader'
import { ProductAdminTable } from './ProductAdminTable'


export const ProductList = () => {


    const dispatch = useDispatch()
    const { adminProducts, loading } = useSelector(state => state.products)


    useEffect(()=>{
        dispatch(getAllProductsForAdmin())
    },[])

  return (
    <>

            <div className='min-h-screen pt-14'>
                   {
                      loading || adminProducts.length === 0 ?  <Loader/> :
                      
                      <>
                            <div className='text-center py-4 text-2xl font-medium'>
                                <p>All Products</p>
                            </div>
                            <ProductAdminTable products={adminProducts} />

                      </>

                   }

            </div>    
    
    </>
  )
}
