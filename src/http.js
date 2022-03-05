const dotenv=require('dotenv').config();
const http=require("http");
const fs=require("fs");
const path=require("path");

let data=["jan","feb","mar"];

const server=http.createServer((req,res)=>{
     res.writeHead(200,{'Content-Type':'text/html'});

     if( req.url=="/" && req.method=="GET"){
          res.write("<h1>Hello HTTP</h1>");
          res.write(`<a href="/app">App</a>`);
          res.write("<ol>");
               data.forEach(i=>res.write(`<li>${i}</li>`));
          res.write("</ol>");
          res.write(`<p>URL: ${req.url}</p>`);
          res.write(`<p>method: ${req.method}</p>`);
          res.write(`<p>HOST: ${req.headers.host}</p>`);
          res.end();
     }
     else if(req.url=="/app" && req.method=="GET"){
          fs.readFile(path.resolve('src/index.html'),(err,data)=>{
               try{
                    res.write(data);
                    res.end();
               }
               catch(errText){
                    console.warn(errText);
                    res.end();
               }
          })
     }
     else{
          res.writeHead(404)
          console.warn("err");
          res.end("error");
     }

});

server.listen(process.env.PORT,()=>{
     console.log(`http server running at http://127.0.0.1:${process.env.PORT}`);
});