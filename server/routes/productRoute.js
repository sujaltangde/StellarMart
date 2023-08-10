const express = require('express')
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, } = require('../controllers/productController');
const { isAuthenticated, authorizationRoles } = require('../middleware/auth');

const router = express.Router()




router.route("/products").get(isAuthenticated, getAllProducts);

router.route("/products/new").post(isAuthenticated, authorizationRoles("admin"), createProduct) ;

router.route("/review/create").post(isAuthenticated, createProductReview) ;

router.route("/products/:id").get(getProductDetails)
                             .put(isAuthenticated, authorizationRoles("admin"), updateProduct)
                             .delete(isAuthenticated, authorizationRoles("admin"), deleteProduct) ;


router.route("/review").put(isAuthenticated, createProductReview)

module.exports = router