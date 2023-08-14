const myserver = require('http');
port = 8080;

const server = myserver.createServer((req,res)=>{
    res.write("this is index page");
    res.end();
   
});


server.listen(port,()=>{
    console.log(`server starting ${port}`);
});

