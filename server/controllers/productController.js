const Product = require("../models/productModel.js")
const ApiFeatures = require("../utils/apiFeatures.js")


// Create Product -- Admin
exports.createProduct = async (req, res, next) => {
    try {

        req.body.user = req.user._id

        const product = await Product.create(req.body)

        res.status(201).json({
            success: true,
            product
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


// Get All Products
exports.getAllProducts = async (req, res) => {
    try {
        const resultPerPage = 5;
        const productCount = await Product.countDocuments();

        const apiFeature = new ApiFeatures(Product.find(), req.query)
            .search()
            .filter()
            .pagination(resultPerPage)

        const products = await apiFeature.query;


        res.status(200).json({
            success: true,
            products,
            productCount
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}



// Update product -- Admin
exports.updateProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(500).json({
                success: false,
                message: "Product not found"
            })
        }

        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })

        res.status(200).json({
            success: true,
            product
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


// Delete Product 
exports.deleteProduct = async (req, res, next) => {
    try {
        let product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(500).json({
                success: false,
                message: "Product not found"
            })
        }


        product = await Product.findByIdAndRemove(req.params.id);

        res.status(200).json({
            success: true,
            message: ["Product deleted successfully", product]
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}




// Get Single Product Details
exports.getProductDetails = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }

        res.status(200).json({
            success: true,
            product
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}



// Create New Review or Update the Review
exports.createProductReview = async (req, res) => {
    try {
        const { rating, comment, productId } = req.body;

        const review = {
            user: req.user._id,
            name: req.user.name,
            rating: Number(rating),
            comment
        }

        const product = await Product.findById(req.body.productId);

        const isReviewed = product.reviews.find(rev => rev.user.toString() === req.user._id.toString());

        if (isReviewed) {

            product.reviews.forEach(rev => {
                if (rev.user.toString() === req.user._id.toString()) {
                        rev.rating = rating,
                        rev.comment = comment
                }
            })

        } else {
            product.reviews.push(review) ;
            product.numOfReviews = product.reviews.length ;
        }

        let avg = 0 ;
        product.ratings = product.reviews.forEach(rev => {
            avg += rev.rating
        })
        product.rating = avg/ product.reviews.length ;

        await product.save({validateBeforeSave: false})

        res.status(200).json({
            success: true,
            message: "Review Done"
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}