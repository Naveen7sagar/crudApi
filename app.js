const express = require('express')
const app = express();
const port = 3000;
const mongoose = require('mongoose')
require('./src/models/db')
const router = require('./src/controllers/controllers')
const schemamodel = require('./src/models/user.models')
app.use(express.json())
app.use(router)




app.listen(port,()=>{
    console.log(`Server is ready at ${port} `)
})