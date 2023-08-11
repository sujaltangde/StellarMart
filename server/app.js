const express = require('express')

const app = express()

app.use(express.json())

// Routes Import
const product = require("./routes/productRoute.js")
const user = require("./routes/userRoutes.js")
const order = require("./routes/orderRoutes.js")

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1",order)


module.exports = app;