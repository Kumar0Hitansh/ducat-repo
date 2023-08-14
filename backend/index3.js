const myserver = require('http');
const path = require('path');
const fs = require('fs');
const abc = require('./myfunction');
let x=50;
let y=80;

port = 8080;

const server = myserver.createServer((req,res)=>{
    


    if(req.url ==='/')
    {
        fs.readFile('./public/landingpage.html',(err,html)=>{
            res.writeHead(200,{"Content-Type":"UTF-8"});
            res.end(html);
        });
    }
    else if(req.url.match("\.css$"))
    {
        var filepath = path.join(__dirname,"public",req.url);
        var filetype = fs.createReadStream(filepath,"UTF-8");
        res.writeHead(200,{"Content-Type":"text/css"});
        filetype.pipe(res);
    }
    else if(req.url.match("\.jpg$"))
    {
        var filepath = path.join(__dirname,"public",req.url);
        var filetype = fs.createReadStream(filepath);
        res.writeHead(200,{"Content-Type":"image/jpg"});
        filetype.pipe(res);
    }
    else if(req.url.match("\.js$"))
    {
        var filepath = path.join(__dirname,"public",req.url);
        var filetype = fs.createReadStream(filepath,"UTF-8");
        res.writeHead(200,{"Content-Type":"text/js"});
        filetype.pipe(res);
    }
    else if(req.url ==='/contact')
    {
        fs.readFile('./public/contact.html',(err,html)=>{
            res.writeHead(200,{"Content-Type":"UTF-8"});
            res.end(html);
        });
    }
    else if(req.url ==='/service')
    {
        res.write(`<h1>this is export moudles: ${abc.add(x,y)}
        </h1><h1>this is export moudles: ${abc.multi(x,y)}</h1>`);
        res.end();
    }
  
   
});

server.listen(port,()=>{
    console.log(`server starting ${port}`);
});

