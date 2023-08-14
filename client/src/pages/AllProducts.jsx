import React, { useEffect, useState } from 'react'
import { Product } from '../components/Product'
import { Loader } from '../components/Loader'
import { MetaData } from '../components/MetaData'
import { getProducts } from '../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { BsCart4 } from 'react-icons/bs'
import Search from '../components/Search';
import Pagination from 'react-js-pagination'
import { useParams } from 'react-router';
import Slider from '@mui/material/Slider';
import './allProducts.css'


export const AllProducts = () => {


  const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones"
  ]

  const { keyword } = useParams();
  const dispatch = useDispatch();
  const { products, loading, productsCount, resultPerPage } = useSelector(state => state.products)

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000])
  const [category, setCategory] = useState("")

  const [ratings, setRatings] = useState(0)


  // console.log(products)

  const setCurrentPageNo = (e) => {
    setCurrentPage(e)
  }

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice)
  }

  useEffect(() => {
    dispatch(getProducts(keyword, currentPage, price, category, ratings))

  }, [dispatch, keyword, currentPage, price, category, ratings])




  return (
    <>
      <MetaData title="Products" />
      <div className='min-h-screen pt-16 pb-20'>
        <div className='pb-6 flex justify-center items-center'>
          <Search />
        </div>



        {loading ? <Loader /> :
          <>

            <div className='text-2xl pt-2 pb-3 flex flex-col justify-center items-center '>



              <span className='border md:pt-0  flex justify-center items-center border-gray-500 pb-1 border-x-0 border-t-0 px-12' >
                <BsCart4 /> Products</span>

            </div>

            {products.length !== 0 ? 
            <div className='grid md:grid-cols-4 pb-14 grid-cols-2 md:gap-14 gap-2 md:pl-52 justify-items-end'>

              
               { 
                products.map((product, i) => {
                  return (
                    <Product key={i} product={product} />
                  )
                }) 
              }
            
            </div>

            : <div className='text-xl py-20 min-h-[60vh] text-center text-  '>No products matching your preferences yet. Check back later!</div>}

            {/* filter for desktop */}
            <div className='w-44 pl-8 absolute md:top-52 md:flex md:flex-col hidden '>
              <p className='text-lg font-medium'>Price Range</p>
              <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby='range-slider'
                min={0}
                max={25000}

              />

              <p className='text-lg font-medium pt-3'>Categories</p>
              <div className="list-none">
                {
                  categories.map((category) => (
                    <li className='hover:text-red-600 font-normal cursor-pointer ' key={category} onClick={() => setCategory(category)}> {category} </li>
                  ))
                }
              </div>

              <div>
                <p className='text-lg font-medium pt-3'>Ratings Above</p>
                <Slider
                  value={ratings}
                  onChange={(e, newRating) => {
                    setRatings(newRating);
                  }}
                  aria-labelledby="continuous-slider"
                  valueLabelDisplay="auto"
                  min={0}
                  max={5}

                />
              </div>

            </div>

            {/* filter for mobile devices */}
            <div className='md:hidden flex flex-col pl-8 left-4  pb-8'>

              <p className='text-lg font-medium'>Price Range</p>
              <div className='w-52 pl-8  md:hidden md:flex-col flex '>
                <Slider
                  value={price}
                  onChange={priceHandler}
                  valueLabelDisplay="auto"
                  aria-labelledby='range-slider'
                  min={0}
                  max={25000}

                />
              </div>

              <p className='text-lg font-medium pt-3'>Categories</p>
              <div className="list-none">
                {
                  categories.map((category) => (
                    <li className='hover:text-red-600 font-normal cursor-pointer ' key={category} onClick={() => setCategory(category)}> {category} </li>
                  ))
                }
              </div>

              <p className='text-lg font-medium pt-3'>Ratings Above</p>
              <div className="w-52 pl-8  md:hidden md:flex-col flex ">

                <Slider
                  value={ratings}
                  onChange={(e, newRating) => {
                    setRatings(newRating);
                  }}
                  aria-labelledby="continuous-slider"
                  valueLabelDisplay="auto"
                  min={0}
                  max={5}

                />

              </div>
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
