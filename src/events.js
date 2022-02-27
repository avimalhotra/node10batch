 const fs=require('fs');
 // fs.ReadStream("src/data.txt").on("open",()=>{
//      console.log("file open");
// });

// console.log("app running");


const events=require("events").EventEmitter;
let emitter=new events();
module.exports=(emitter);

emitter.on("appstart",(par,checkOnce)=>{
     console.log(`event triggered by ${par}`);
     checkOnce.done=false;
});
emitter.on("appstart",(par,checkOnce)=>{
     if(checkOnce.done){
          console.log(`again event triggered by ${par}`);
     }
});
emitter.once("dbConnect",()=>{
     console.log("db connected");
});


// import events
require('./step1');
require('./step2');


//emitter.emit("appstart","avi",{});
//emitter.emit("dbConnect");

emitter.emit('purchasePlan',499);
emitter.emit('watchSeries',"abc");
