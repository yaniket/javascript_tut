const array = ["0", 0, undefined, null, 5, 7, 8]
let count = 0;

for(let i = 0; i < array.length; i++){
    if(array[i]){
        count++;
    }
}


console.log(count);