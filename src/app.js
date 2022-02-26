const dotenv=require("dotenv").config();
const colors=require('colors');
const mod=require("./module");
const maths=require("./maths");
const os=require('os');
require('./fs');

//console.log(`Running node js app on ${process.env.PORT}`);

//console.log(process.version.green);

//console.log(__filename);
//console.log(__dirname);

//console.log(mod);
//console.log(global.name.red);

//console.log(`Area of circle with radius ${maths.r} is ${maths.area}.`);

//console.log(maths.toFixed(2));

//console.log(os.cpus().length);                         // 8 threads
//console.table(os.cpus());

//console.log(os.freemem()/1024/1024);
//console.log(os.totalmem()/1024/1024);



//console.log(os.networkInterfaces());
//console.log(os.platform());
//console.log(os.type());
//console.log(os.uptime()/3600);

//console.log(os.userInfo());