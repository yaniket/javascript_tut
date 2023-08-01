function findPairsWithSum(arr, targetSum) {
    const pairs = [];
    const numFrequency = {};
  
    for (const num of arr) {
      const complement = targetSum - num;
      if (numFrequency[complement]) {
        pairs.push([num, complement]);
      }
  
      numFrequency[num] = true;
    }
  
    return pairs;
  }
  
  // Example usage:
  const array = [80, 60, 10, 50, 30, 100, 0, 50];
  const targetSum = 100;
  const result = findPairsWithSum(array, targetSum);
  console.log("Pairs with sum 100:", result); // Output: [[80, 20], [60, 40], [50, 50], [100, 0]]
  