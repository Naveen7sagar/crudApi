const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    mobile:{
        type:String
    },
})
module.exports = mongoose.model('EnsData',userSchema)