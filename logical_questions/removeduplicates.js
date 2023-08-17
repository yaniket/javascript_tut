function findDuplicatesUsingHashMap(arr) {
    const duplicates = [];
    const numFrequency = {};
    console.log(numFrequency);
    
    let unique = [];
    for (const num of arr) {
      if (numFrequency[num]) {
        duplicates.push(num);
      } else {
        numFrequency[num] = true;
        unique.push(num);
        console.log("current", numFrequency)
      }
      
      console.log("removing_duplicates", unique);
    }  
    return duplicates;
  }
  
  // Example usage:
  const array1 = [1, 2, 3, 4, 5, 2, 3, 6, 77, 77, 77];
  const duplicates1 = findDuplicatesUsingHashMap(array1);
  console.log("Duplicates using Hash Map:", duplicates1); // Output: [2, 3]
