
const arr = [];
function factor(param, arr){
    for(let i = 1; i <= param; i ++){
        if(param%i == 0){
            arr.push(i);
        }
        
    }
    return arr;
    
}

const output = factor(1000, arr);
console.log(output);