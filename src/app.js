const { query } = require('express');
const express=require('express');
const res = require('express/lib/response');
let app=express();
const path=require('path');
const cookieparser=require('cookie-parser');
const bodyParser = require('body-parser');
const session=require('express-session');
const parseurl=require('parseurl');
app.set('trust proxy', 1); 
app.use(session({
     secret:"session",
     resave:false,
     saveUninitialized:true,
     cookie:{secure:false,maxAge:5000}                          // session expires after 1 min
 }));


app.use(cookieparser());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

require('dotenv').config();

app.use(express.static(path.resolve('src/public')));

/* express().use((req,res)=>{
     res.end("express app");
}).listen(8080); */

/* app.use((req,res)=>{
     res.setHeader('Content-Type','text/html');
     res.status(200).send("<h1>express app running</h1>");
}); */

/* app.use((req,res,next)=>{
     //console.log(`Login at ${Date.now()}`);
     next();
}); */

app.use((req,res,next)=>{
     if(!req.session.views){req.session.views={};}

     var pathname=parseurl(req).pathname;

     req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;

     next()

});

app.get("/",(req,res)=>{
     //res.status(200).send("Homepage");
     //res.status(200).send("Home Page");
     //res.status(200).send(req.url);
     //res.status(200).send(req.query);
     //res.status(200).send(Object.keys(req.cookies));

    /* if(req.cookies.location){
          res.status(200).send(req.cookies);
    }
    else{
          res.status(200).send("no cookies");
    } */
    //req.session.time=Date.now();
    //res.status(200).send(`Session ID is ${req.sessionID} and time is ${req.session.time}`);
    res.send( req.sessionID +', Session Views :  '+ req.session.views['/'] + ' times');
});

let cars=[
          {"name": "swift","type": "hatchback","price":800000},
          {"name": "ciaz","type": "sedan","price":1000000},
          {"name": "baleno","type": "hatchback","price":850000},
          {"name": "scross","type": "crossover","price":11500000},
          {"name": "brezza","type": "suv","price":990000},
          {"name": "gypsy","type": "suv","price":750000}
     ];

app.get("/api",(req,res)=>{

     res.header('Access-Control-Allow-Origin',"*");
     let days=["sun","mon","tues","wed","thurs","fri","sat"];
     return res.status(200).send(cars);

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
const { off } = require('process');
app.use("/admin",admin);
app.use("/user",user);


app.get('/**',(req,res)=>{
     res.status(404).send("404 - Page not found");
});

app.listen(process.env.PORT,()=>{
     console.log(`App running at http://127.0.0.1:${process.env.PORT}`);
});