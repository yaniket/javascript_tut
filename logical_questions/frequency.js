// function characterFrequency(str) {
//     const frequencyMap = {};
    
//     for (const char of str) {
//       console.log(frequencyMap[char]);
//       if (frequencyMap[char]) {
//         frequencyMap[char]++;
//       } else {
//         frequencyMap[char] = 1;
//       }
//     }
  
//     let result = '';
//     for (const char in frequencyMap) {
//       result += char + frequencyMap[char];
//     }
  
//     return result;
//   }
  
//   // Example usage:
//   const inputString = "Engineer";
//   const result = characterFrequency(inputString);
//   console.log("Output:", result); // Output: "e3n2g1i1r1"
  
//   console.log("a"+"b"+"c"+"d");


const arr = [1,2,45,6,7,9,9,9];
// arr.sort();

let firstlargest = arr[0];
let secondlargest = arr[1];
let thirdLargest = arr[2];

if(firstlargest < secondlargest){
    secondlargest = firstlargest;
}
if(thirdLargest < secondlargest){
  
}

for(let i = 2; i < arr.length; i++){
    if(arr[i] > firstlargest){
        firstlargest = arr[i];
    }
    
    else if(arr[i] < firstlargest && arr[i] != firstlargest){
        secondlargest = arr[i];
    }

    else if (arr[i] < secondlargest && arr[i] != secondlargest){
      thirdLargest = arr[i];
    }
}
console.log(thirdLargest);




