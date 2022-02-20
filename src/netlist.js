const netList = require('network-list');

// netList.scanEach({}, (err, obj) => {
//     console.log(obj); // device object
// });


netList.scan({}, (err, arr) => {
    //console.log(arr); // array with all devices
    //console.table(arr);

    arr.forEach(element => {
         if( element.alive==true){
              console.log(element);
         }
    });

});

//setTimeout(()=>{},1000);