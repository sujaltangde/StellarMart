const express = require('express')
const cors = require('cors')
const app = express()


app.use(express.json())
app.use(cors({
	origin: "*",
	credentials: true
}))

// Routes Import
const product = require("./routes/productRoute.js")
const user = require("./routes/userRoutes.js")
const order = require("./routes/orderRoutes.js")



app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1",order)



module.exports = app;