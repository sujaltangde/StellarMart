import React, { useEffect, useState } from 'react'
import { Product } from '../components/Product'
import { Loader } from '../components/Loader'
import { MetaData } from '../components/MetaData'
import { getProducts } from '../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { BsCart4 } from 'react-icons/bs'
import  Search  from '../components/Search';
import Pagination from 'react-js-pagination'
import { useParams } from 'react-router';
import './allProducts.css'


export const AllProducts = () => {

  const { keyword } = useParams();
  const dispatch = useDispatch() ;
  const { products, loading, productsCount, resultPerPage } = useSelector(state => state.products)

  const [currentPage, setCurrentPage] = useState(1);
  

  const setCurrentPageNo = (e)=>{
    setCurrentPage(e)
  }
 
  useEffect(() => {
    dispatch(getProducts(keyword, currentPage))

  }, [dispatch, keyword, currentPage])

    console.log(currentPage)

  return (  
    <>
      <MetaData title="Products" />
      <div className='min-h-screen pt-16 pb-20'>
      <div className='pb-6 flex justify-center items-center'>
              <Search />
            </div>

        {loading ? <Loader /> :
          <>

            <div className='text-2xl pt-2 pb-3 flex justify-center items-center '>

              <span className='border flex justify-center items-center border-gray-500 pb-1 border-x-0 border-t-0 px-12' >
                <BsCart4 /> Products</span>

            </div>
            

            <div className='grid md:grid-cols-4 grid-cols-2 md:gap-14 gap-2 px-8'>

              {
                products &&
                products.map((product, i) => {
                  return (
                    <Product key={i} product={product} />
                  )
                })
              }
            </div>

            

            <div className='pt-24'>

              {
                resultPerPage < productsCount && (
                  <Pagination   
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass='page-item font-bold border  hover:bg-gray-200'
                linkClass="page-link"
                activeClass="pageItemActive text-red-700 border border-black "
                activeLinkClass="pageLinkActive  "     
                
                         
               />
                )
              }

            </div>


          </>}
      </div>


    </>
  )
}
