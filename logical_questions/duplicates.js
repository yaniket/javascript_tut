function findDuplicatesUsingHashMap(arr) {
    const duplicates = [];
    const numFrequency = {};
    console.log(numFrequency);
  
    for (const num of arr) {
      if (numFrequency[num]) {
        duplicates.push(num);
      } else {
        numFrequency[num] = true;
        console.log("current", numFrequency)
      }
    }  
    return duplicates;
  }
  
  // Example usage:
  const array1 = [1, 2, 3, 4, 5, 2, 3, 6];
  const duplicates1 = findDuplicatesUsingHashMap(array1);
  console.log("Duplicates using Hash Map:", duplicates1); // Output: [2, 3]
  

  const obj= {}
obj['name']='qwert';
console.log(obj);
