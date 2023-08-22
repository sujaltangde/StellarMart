import axios from 'axios'
import { allProductRequest, allProductSuccess, allProductFail, clearErrors, newReviewRequest, newReviewSuccess, newReviewFail, adminProductRequest, adminProductSuccess, adminProductFail, newProductRequest, newProductSuccess, newProductFail, deleteProductRequest, deleteProductSuccess, deleteProductFail, updateProductRequest, updateProductSuccess,updateProductFail } from '../slices/ProductSlice.js'
import { productDetailsRequest, productDetailsSuccess, productDetailsFail, } from '../slices/ProductDetailSlice.js'
import { toast } from 'react-toastify'


// Getting All Products
export const getProducts = (keyword = "", currentPage = 1, price = [0, 25000], category = "", ratings = 0) => async (dispatch) => {
    try {
        dispatch(allProductRequest());

        let link = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&rating[gte]=${ratings}`

        if (category) {
            link = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&rating[gte]=${ratings}`
        }


        const { data } = await axios.get(link)

        // console.log(data)
        dispatch(allProductSuccess(data));

    } catch (err) {
        dispatch(allProductFail(err.message))
    }
}


// Getting Product Details
export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch(productDetailsRequest())
        const { data } = await axios.get(`http://localhost:4000/api/v1/products/${id}`)

        dispatch(productDetailsSuccess(data.product));

    } catch (err) {
        dispatch(productDetailsFail(err.message))
    }
}


// New Review
export const newReview = (reviewData) => async (dispatch) => {
    try {
        dispatch(newReviewRequest())

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        const { data } = await axios.put("http://localhost:4000/api/v1/review", reviewData, config);

        dispatch(newReviewSuccess(data.success))
        toast.success("Review Added !")

    } catch (err) {
        dispatch(newReviewFail(err.response.data.message));
    }
}


// Get All Products For Admin
export const getAllProductsForAdmin = () => async (dispatch) => {
    try {
        dispatch(adminProductRequest());

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        const { data } = await axios.get("http://localhost:4000/api/v1/admin/products", config)
        
        dispatch(adminProductSuccess(data.products));

    } catch (err) {
        dispatch(adminProductFail(err.response.data.message))
    }
}


// Create New Product
export const createNewProduct = (productData) => async (dispatch) => {
    try {
        dispatch(newProductRequest())

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        const { data } = await axios.post("http://localhost:4000/api/v1/products/new", productData, config)
        toast.success("New Product Created !")
        dispatch(newProductSuccess(data));
    } catch (err) {
        dispatch(newProductFail(err.response.data.message))
        toast.error(err.response.data.message)
    }
}


// Delete Product
export const deleteProduct = (id) => async (dispatch) => {
    try {
            dispatch(deleteProductRequest()) ;

            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }

            const { data } = await axios.delete(`http://localhost:4000/api/v1/products/${id}`,config) ;

            dispatch(deleteProductSuccess(data))
            toast.success("Product Deleted !");
            dispatch(getAllProductsForAdmin())
    } catch (err) {
        dispatch(deleteProductFail(err.response.data.message))
        toast.error("err.response.data.message")
    }
}


// Update Product
export const updateProduct = (id,newData) => async (dispatch)=>{
    try{
        dispatch(updateProductRequest()) ;

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        const { data } = await axios.put(`http://localhost:4000/api/v1/products/${id}`,newData,config) ;
        
        dispatch(updateProductSuccess(data)) ;
        dispatch(getAllProductsForAdmin())
        toast.success("Product Updated !") ;

        
    }catch(err){
        dispatch(updateProductFail(err.response.data.message)) ;
        toast.error(err.response.data.message)
    }
}




// Clearing Errors
export const clearError = () => async (dispatch) => {
    dispatch(clearErrors())
}