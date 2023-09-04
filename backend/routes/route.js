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


// post / create  api
route.post("/create",async(req,res)=>{
    const {fullname,email,phone,comment,gender} = req.body;
    const adduser = new mymodal({
        fullname,email,phone,comment,gender
    });
    await adduser.save();
    res.status(201).json(adduser);
    console.log(adduser);
});







module.exports=route