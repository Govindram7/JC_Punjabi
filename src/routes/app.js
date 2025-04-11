const express = require("express")
const routes = express.Router()

routes.get("/",(req,res)=>{
    res.status(200).render("index")
})


// routes.post("https://formspree.io/f/xdorplpd",(req,res)=>{
//     res.status(200).redirect("/index")
// })


module.exports = routes

