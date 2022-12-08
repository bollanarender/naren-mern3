const express = require('express')
//const cors = require('cors')
const app = express();
require("dotenv").config()
const dbConfig = require("./config/dbConfig")

const portfolioRoute = require('./routes/portfolioRoute')
app.use(express.json())
app.use('/api/portfolio', portfolioRoute)


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`server running on ${port}`)
});