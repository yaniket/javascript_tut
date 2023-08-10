function findMissingElements(arr, maxElement) {
    const allElements = new Array(maxElement + 1).fill(false); // Create a boolean array to mark present elements
    
    console.log("allElements", allElements);
    for (const num of arr) {
      allElements[num] = true; // Mark elements present in the array
    }
    
    const missingElements = [];
    for (let i = 1; i <= maxElement; i++) {
      if (!allElements[i]) {
        missingElements.push(i); // Add missing elements to the result array
      }
    }
    
    return missingElements;
  }
  
  const inputArray = [1, 3, 5, 9];
  const maxElement = 10;
  const missingElements = findMissingElements(inputArray, maxElement);
  console.log("Missing elements:", missingElements); // Output: [2, 4, 6, 7, 8, 10]
  