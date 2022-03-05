const { nextTick } = require('process');

//console.table(process.memoryUsage());

setImmediate(()=>{
     console.log("2nd");
});
nextTick(() => {
     console.log('nextTick callback');
});

console.log("done");