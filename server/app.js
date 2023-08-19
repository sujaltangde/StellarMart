const express = require('express')
const cors = require('cors')
const app = express()
const fileUpload = require('express-fileupload')
const dotenv = require('dotenv')
dotenv.config({path:"./config/config.env"})



app.use(express.json({ limit: '10mb' }));
app.use(cors({
	origin: "*",
	credentials: true
}))

app.use(fileUpload());


// Routes Import
const product = require("./routes/productRoute.js")
const user = require("./routes/userRoutes.js")
const order = require("./routes/orderRoutes.js")
const payment = require("./routes/paymentRoute.js")



app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1",order)
app.use("/api/v1",payment)



module.exports = app;