const fs=require('fs')

fs.writeFile("welcome.txt","hello node",function(err) {
    if (err) {
       return console.error(err);
    }})

fs.readFile("welcome.txt",(error,data)=>{
    if (error) {
        console.log(error);
    }
    else console.log(data.toString());
})