
function getUnique(arr){
    
    let uniqueArr = [];
    // Creating temporory array
    let tempArr = [];
    console.log(uniqueArr);
    
    // loop through array
    for(let i of arr) {
        if(tempArr.indexOf(i) === -1) {
          
            tempArr.push(i);
        }else{
            uniqueArr.push(i)
        }
    }
    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 56,56,56,565,3];

// calling the function
// passing array argument
getUnique(array);