// var a = 800;
// var b = 5000;
// var d = 1000;

// if(a < b){
     
//     if(b > d){
//         console.log("largest number is", b);
//     }
//     else if(d > b){
//         console.log("largest number is",d)
//     }
//     else{
//         console.log("largest number is",a);
//     }
// }
// else if (a > b){
     
//     if(a > d){
//         console.log("largest number is", a);
//     }
//     else if(d > a){
//         console.log("largest number is",d)
//     }
// }

let str = "anniiket";
let hashfrequency = {};

let arr = str.split("");
console.log(arr);

let count = 0;
for(let element of arr){
    console.log(hashfrequency[element]);
    if(hashfrequency[element]){
     hashfrequency[element] = 6;
   
    }
    else{
        hashfrequency[element] = count;
    }
}

console.log(hashfrequency);




