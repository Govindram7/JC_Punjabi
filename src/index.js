const express = require("express");
const port = process.env.PORT ||8282 ;
const connectdb = require("../config/db");
const dotenv = require("dotenv")
const hbs = require("hbs")


// routes config
const routes = require("./routes/app")

// configration 
dotenv.config()

// rest object
const app = express()

// Static file path 
app.use("/static",express.static("public"))



// DATABASE connection 
connectdb()


// template engine
app.set("view engine","hbs")
app.set("views","views")

// Parsials config 
hbs.registerPartials("views/partials")

// routes 
app.get("/",routes)

app.listen(port,()=>{
    console.log(`APP is running on port no ${port}`)
})

