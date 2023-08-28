const express = require('express');
const route = express.Router();
const mymodal = require('../myschima/schima');



route.get("/",(req,res)=>{
    res.send("this is express api");
});


/*create get api */
route.get("/alldata",async(req,res)=>{
        const myalldata =  await mymodal.find();
        res.json(myalldata);
        console.log(myalldata);
});


module.exports=route