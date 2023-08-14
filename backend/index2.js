const myserver = require('http');
const path = require('path');
const fs = require('fs');

port = 8080;

const server = myserver.createServer((req,res)=>{
    if(req.url ==='/')
    {
        fs.readFile('./public/landingpage.html',(err,html)=>{
            res.writeHead(200,{"Content-Type":"UTF-8"});
            res.end(html);
        });
    }
    else if(req.url ==='/contact')
    {
        fs.readFile('./public/contact.html',(err,html)=>{
            res.writeHead(250,{"Content-Type":"UTF-8"});
            res.end(html);
        });
    }
    
   
});

server.listen(port,()=>{
    console.log(`server starting ${port}`);
});

