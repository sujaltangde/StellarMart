import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { getProducts } from '../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

 const Search = () => {

  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`)
      setKeyword('')
    } else {
      navigate('/products')
      setKeyword('')
    }
  }



  return (
    <>
      <form onSubmit={searchSubmitHandler} className='md:w-[30vw] w-[70vw]  flex  rounded '>

      <input value={keyword}  autoFocus placeholder='Search for Products' className='px-2 bg-gray-100  py-2 outline-none placeholder:font-extrabold w-full rounded rounded-e-none border border-gray-400 ' type="text"
      onChange={(e)=> setKeyword(e.target.value)}
      />

      <input value="Search" type="submit" className='bg-blue-600 hover:bg-blue-400 rounded cursor-pointer rounded-s-none px-4 text-white' />
        
      </form>


    </>
  )
}


export default Search