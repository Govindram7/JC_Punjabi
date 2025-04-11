
const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        firstName: String,
        require: true,
        max: 2
    },
    {
        lastName: String,
        max: 2
    },
    {
        email: String,
        require: true,
    },
    {
        Password: String,
        require: true,   
    },

)

const userModel = mongoose.model("user",userSchema)
module.exports = userModel
