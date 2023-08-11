let arr = ["listen", "silent", "bat", "tea", "rahul"];


function groupAnagrams(arr){
// Checking whether it is anagram
const newArr = [];
for(let i = 0; i < arr.length; i++){
    
    for(let j = i+1; j < arr.length; j++){
       
        let str = arr[i].split("").sort().join("");
        let str2 = arr[j].split("").sort().join("");

        if(str == str2){
            newArr.push(new Array(arr[i],arr[j]));
        }
    }

}


for(let i = 0; i < arr.length; i++){
   console.log("hello danger");
   const templist = [];
   let tempcount =0
    for(let j = i+1; j < arr.length; j++){
       
        let str = arr[i].split("").sort().join("");
        let str2 = arr[j].split("").sort().join("");

    }
    templist.push(arr[i]);
    console.log(templist);
   return newArr;

}


}


let output = groupAnagrams(arr);
console.log(output);