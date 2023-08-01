
// let fs = require("fs");

// fs.readFile("file2.txt", "UTF-8", (err, data)=>{
//     console.log(err, data);
// })

// console.log("This is eof");

async function weather(){

    let delhiweather = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve( 5 && NaN && "" && 6 );
        }, 5000)
    })

    let weather = await delhiweather
    console.log(weather);

}

weather();