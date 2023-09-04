const mongoose = require('mongoose');

const datapattern = new mongoose.Schema({
    fullname:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    gender:{
        type:String
    },
    comment:{
        type:String
    },
});

const mymodal = new mongoose.model("mern45",datapattern);
module.exports = mymodal;


