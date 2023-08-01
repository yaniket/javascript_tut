let str = "listen";
let str2 = "lent";

// Converting into array and sorting it 
const arr = str.split("").sort().join("");

const arr2 = str2.split("").sort().join("");

if(arr == arr2){
    console.log("true")
}else{
    console.log("false");
}