const myserver = require('http');
port = 8080;

const server = myserver.createServer((req,res)=>{
    if(req.url ==='/')
    {
        res.write(`<h1>this is home page</h1>`);
        res.end();
    }
    else if(req.url ==='/about')
    {
        res.write("this is about page");
        res.end();
    }
    else{
        res.write("404 not found");
        res.end();

    }
   
});

server.listen(port,()=>{
    console.log(`server starting ${port}`);
});

