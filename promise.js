let a = new Promise((resolve, reject)=>{
    let a = 1+1;
    if(a == 2)
    resolve("success");
    else{
        reject("Wrong answer");
    }
})

console.log(a);