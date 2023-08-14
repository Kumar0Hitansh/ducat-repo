const express =require('express');
const apps = express();
require('dotenv').config();
let port = process.env.port || 8080;

apps.get('/',(req,res)=>{
    res.send("<h1>this is use express jseeeeeeeeeeeeeeeeeeeee </h1>")
})


apps.listen(port,()=>{
    console.log(`you application is running at ${port}`);
})