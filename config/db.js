require("dotenv").config()
const mongoose = require ("mongoose")
const URL = process.env.database


mongoose.connect(URL).then(()=>{
    console.log("database connected successfully");
    
}).catch((error)=>{
    console.log("server not connected because", error);
    
})