function characterFrequency(str) {
    const frequencyMap = {};
    
    for (const char of str) {
      console.log(frequencyMap[char]);
      if (frequencyMap[char]) {
        frequencyMap[char]++;
      } else {
        frequencyMap[char] = 1;
      }
    }
  
    let result = '';
    for (const char in frequencyMap) {
      result += char + frequencyMap[char];
    }
  
    return result;
  }
  
  // Example usage:
  const inputString = "Engineer";
  const result = characterFrequency(inputString);
  console.log("Output:", result); // Output: "e3n2g1i1r1"
  
  console.log("a"+"b"+"c"+"d");