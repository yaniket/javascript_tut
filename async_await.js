
let fs = require("fs");

fs.readFile("file.txt", "UTF-8", (err, data)=>{
    console.log(err, data);
})

console.log("This is eof");