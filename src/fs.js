const fs=require("fs");
const path=require('path');

//let file=fs.readFileSync('src/data.txt',{encoding:'utf-8'});
//console.log(file);

fs.readFile(path.resolve('src/data.txt'),{encoding:'utf-8'},(err,data)=>{
    if(err){ console.error(err);}
    else{console.log(data);}
});
/* fs.stat('src/step.txt',{encoding:'utf-8'},(err,stats)=>{
     if(err){ console.error(err);}
     else{console.log(stats.size);}
 }); */

let str="lorem ipsum dolor\n";

/*  fs.appendFile("src/data.txt",str,'utf-8',(err,data)=>{
     if(err){ console.error(err);}
     else{console.log("written in file");}
 }); */

/*  fs.unlink("src/del.txt",(err)=>{
      if(err){
          console.error(err);
      }
      else{
          console.log("file deleted");
      }
 }) */

console.log("done");
