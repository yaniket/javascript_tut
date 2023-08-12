// let arr = [1,2,2,2,2,3,4,2,4,5,3,3,4]

// let newArr = new Set(arr)
// console.log([...newArr])

// More better approach

// program to remove duplicate value from an array

function getUnique(arr){
    
    let uniqueArr = [];
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