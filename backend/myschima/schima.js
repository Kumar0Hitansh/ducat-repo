const mongoose = require('mongoose');

const datapattern = new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    }
});

const mymodal = new mongoose.model("mean45",datapattern);
module.exports = mymodal;


