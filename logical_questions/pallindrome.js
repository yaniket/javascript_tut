
let str = "12224421";
let reverstr = "";
for(let i = str.length-1; i >= 0; i--){
     reverstr += str[i];
     console.log(reverstr);
}

if(str == reverstr)
console.log("It is pallindrome");
else{
console.log("It is not a pallingrome");
}