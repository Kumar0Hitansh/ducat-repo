const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
let port  = process.env.port || 6800
const route = require('./routes/route');
require('./db/connect');





app.use(express.json());
app.use(cors());
app.use(route);





app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})