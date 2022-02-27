const event= require('./events');

event.on("watchSeries",(x)=>{
     console.log(`watching ${x} series on netflix`);
});