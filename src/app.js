const dotenv=require("dotenv").config();
const colors=require('colors');
const mod=require("./module");
const maths=require("./maths");


//console.log(`Running node js app on ${process.env.PORT}`);

console.log(process.version.green);

//console.log(__filename);
//console.log(__dirname);

//console.log(mod);
console.log(global.name.red);

//console.log(`Area of circle with radius ${maths.r} is ${maths.area}.`);

console.log(maths.toFixed(2));