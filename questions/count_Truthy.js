const array = ["0", 0, undefined, null, 5]
let count = 0;

for(let i = 0; i < array.length; i++){
    if(array[i] != undefined && array[i] != 0 && array[i] != false && array[i] != "" && array[i] != NaN && array[i] != null ){
        count++;
    }
}

console.log(count);