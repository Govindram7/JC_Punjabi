
const mongoose = require("mongoose")

const connectdb = async ()=>{
    try {
        const connect = await mongoose.connect("mongodb://127.0.0.1:27017/punjabi")
    console.log("Database connected sucessfully ")
    } catch (error) {
        console.log("error")
    }
}
module.exports = connectdb 
