const express = require('express')

const app = express()

app.use(express.json())

// Routes Import
const product = require("./routes/productRoute.js")
const user = require("./routes/userRoutes.js")

app.use("/api/v1", product);
app.use("/api/v1", user);


module.exports = app;