const dotenv=require("dotenv").config();
const mod=require("./module");

//console.log(`Running node js app on ${process.env.PORT}`);

console.log(process.version);

console.log(__filename);
console.log(__dirname);

//console.log(mod);
console.log(global.name);
