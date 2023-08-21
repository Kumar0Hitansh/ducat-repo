const express = require('express');
require('dotenv').config();


const apps = express();

let port  = process.env.port || 6800

apps.get("/",(req,res)=>{
    res.send("welcome to express");
})


apps.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})