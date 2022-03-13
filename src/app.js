const { query } = require('express');
const express=require('express');
const res = require('express/lib/response');
let app=express();
const path=require('path');
const cookieparser=require('cookie-parser');
const bodyParser = require('body-parser');


app.use(cookieparser());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

require('dotenv').config();

//app.use(express.static(path.resolve('src/public')));

/* express().use((req,res)=>{
     res.end("express app");
}).listen(8080); */

/* app.use((req,res)=>{
     res.setHeader('Content-Type','text/html');
     res.status(200).send("<h1>express app running</h1>");
}); */

app.use((req,res,next)=>{
     //console.log(`Login at ${Date.now()}`);
     next();
});

app.get("/",(req,res)=>{
     //res.status(200).send("Homepage");
     //res.status(200).send("Home Page");
     //res.status(200).send(req.url);
     //res.status(200).send(req.query);
     //res.status(200).send(Object.keys(req.cookies));

    if(req.cookies.location){
          res.status(200).send(req.cookies);
    }
    else{
          res.status(200).send("no cookies");
    }
});
app.get("/savecookie",(req,res)=>{
     res.cookie("name","avinash", {maxAge:86400, httpOnly: true});
     res.send("cookie saved");
})
app.get("/search",(req,res)=>{
     //res.status(200).send(req.query);
     res.status(200).json({search:req.query});
});
app.get("/products",(req,res)=>{
     res.status(200).send(req.url);
});
app.get("/products/:brand",(req,res)=>{
     res.status(200).send(req.params);
});
app.get("/products/:brand/:products/",(req,res)=>{
     res.status(200).send(req.params);
});
app.get("/products/:brand/:products/:productname",(req,res)=>{
     res.status(200).send(req.params);
});
app.get("/products/:brand/:products/:productname/:variant",(req,res)=>{
     res.status(200).send(req.params);
});

app.get("/app",(req,res)=>{
     res.status(200).send("app");
});

app.post('/postdata',(req,res)=>{
     let id=req.body.username;
     let pass=req.body.userpass;

     if( id=="admin" && pass=="123456"){
          res.status(200).send(req.body);
     }
     else{
          res.status(200).send('Invalid user id or password');
     }
});

/* from router */
const admin=require('./routes/admin');
const user=require('./routes/users');
app.use("/admin",admin);
app.use("/user",user);


app.get('/**',(req,res)=>{
     res.status(404).send("404 - Page not found");
});

app.listen(process.env.PORT,()=>{
     console.log(`App running at http://127.0.0.1:${process.env.PORT}`);
});