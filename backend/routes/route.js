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

// delete api
route.delete("/deleterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const a = await mymodal.findByIdAndDelete({_id:id})
    console.log(a);
    res.status(201).json(a);
});

// get single data api
route.get("/view/:id",async(req,res)=>{
    console.log(req.params);
    const {id} = req.params;
    const singleuser = await mymodal.findById({_id:id});
    console.log(singleuser);
    res.status(201).json(singleuser);
});




module.exports=route