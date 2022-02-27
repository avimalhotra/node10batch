const event= require('./events');

event.on("purchasePlan",(x)=>{
     console.log(`${x} Plan purchased`);
});
event.on("purchasePlan",()=>{
     console.log(`Payment done`);
});