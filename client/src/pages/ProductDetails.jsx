import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../actions/productAction';
import ReactStars from 'react-rating-stars-component'
import { ReviewCard } from '../components/ReviewCard';
import { BiComment } from 'react-icons/bi'
import { Loader } from '../components/Loader.jsx'
import { MetaData } from '../components/MetaData';

const images = [{
    url: "sdsd"
}]


export const ProductDetails = () => {


    const images = [{
        url: "sdsd"
    }]

    const { id } = useParams();

    const dispatch = useDispatch()


    const { product, loading, error } = useSelector((state) => state.productDetails)
    const [quantity, setQuantity] = useState(1);


    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [])


    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: product.rating,
        isHalf: true,
    }

    const increaseQuantity = () => {
        if (product.stock <= quantity) return;

        const qty = quantity + 1;
        setQuantity(qty);
    };

    const decreaseQuantity = () => {
        if (1 >= quantity) return;

        const qty = quantity - 1;
        setQuantity(qty);
    };


    return (
        <>

            <div className='min-h-screen pt-16  '>
                {

                    loading ? <Loader /> :
                        <>
                            <div className='flex md:flex-row flex-col justify-between md:pt-10 pt-4  '>
                                <MetaData title={product.name} />

                                <div className="w-full md:w-2/3 lg:w-1/2 mx-auto ">
                                    <Carousel
                                        showThumbs={false}
                                        infiniteLoop={true}
                                        autoPlay={false}
                                        interval={3000}
                                        transitionTime={500}
                                        className='w-full md:px-40 px-20' >
                                        {product.images.map((img, i) => (
                                            <div key={i} className='h-1/2' >
                                                <img src={img.url} alt="Image 1" className='rounded-xl object-cover w-44 h-90 z-0 ' />
                                            </div>
                                        ))

                                        }


                                    </Carousel>
                                </div>



                                <div className='md:w-1/2 w-full  gap-4 flex flex-col md:pt-0 pt-5 md:pb-0 pb-5 md:px-0 px-6'>

                                    <div className='border pl-8 border-x-0 py-4 border-gray-400'>
                                        <p className='text-4xl py-2'>{product.name}</p>
                                        <p className='text-xl text-gray-500'>Product #{product._id}</p>
                                        <p className='font-medium text-lg text-gray-500'>In {product.category}'s</p>
                                    </div>


                                    <div className='flex z-0 pl-8 flex-wrap items-center gap-2' >
                                        <ReactStars {...options} /> <span className='md:text-sm text-xs'>({product.numOfReviews} Reviews)</span>
                                    </div>

                                    <div className=' border pl-8 border-x-0 py-4 border-gray-400'>
                                        <p className=' text-2xl font-medium'>₹{product.price}</p>

                                        <div className="flex gap-5">

                                            <div className="flex justify-center items-center">

                                                <button className='px-2  font-bold text-xl bg-black text-white' onClick={decreaseQuantity}>-</button>
                                                <input readOnly type="number" className='text-center outline-none font-bold w-14 cursor-default ' value={quantity} />
                                                <button className='px-2  font-bold text-xl bg-black text-white' onClick={increaseQuantity}>+</button>

                                            </div>
                                           

                                            <button className='bg-blue-600 text-white text-xl font-medium px-3 rounded py-1'
                                                disabled={product.Stock < 1 ? true : false}
                                            // onClick={addToCartHandler}
                                            >
                                                Add to Cart
                                            </button>

                                        </div>

                                    </div>


                                    <div className='flex gap-2 pl-8 text-lg font-medium border border-x-0 pt-3 pb-4 border-gray-400 border-t-0'>Status:
                                        <p className={`${product.stock < 1 ? "text-red-600" : "text-green-600"} font-bold `}>
                                            {product.stock < 1 ? " Out of Stock" : " In Stock"}
                                        </p>
                                    </div>


                                    <div className='pl-8'>
                                        <p className='text-xl '>Description :</p>
                                        <p className='pb-3'>{product.description}</p>

                                        <button className='bg-blue-600 text-white text-xl font-medium px-3 rounded py-1' >
                                            Submit Review
                                        </button>
                                    </div>




                                </div>






                            </div>


                            <div className='pb-44'>
                                <div className='text-2xl pt-12 pb-6 flex justify-center items-center '>

                                    <span className='border flex justify-center items-center border-gray-500 pb-1 border-x-0 border-t-0 px-12' >
                                        <BiComment /> Reviews</span>

                                </div>
                                {
                                    product.reviews && product.reviews[0] ? (
                                        // <div className=' grid md:grid-cols-4 grid-cols-1 justify-items-center gap-3 md:pt-3 md:px-5 px-4 '>
                                        <div className=' flex flex-wrap justify-center items-center '>
                                            {
                                                product.reviews &&
                                                product.reviews.map((review, i) => <ReviewCard key={i} review={review} rating={review.rating} />)
                                            }
                                        </div>
                                    ) : <p className='pt-14 text-xl text-center'>No Reviews Yet</p>
                                }
                            </div>
                        </>

                }

            </div>

        </>
    )
}





