function findSquareRoot(number) {
    if (number < 0) {
      return "Invalid input: Cannot find square root of a negative number.";
    }
  
    return Math.sqrt(number);
  }
  
  // Example usage:
  const number = 3;
  const squareRoot = findSquareRoot(number);
  console.log("Square root of", number, "is:", squareRoot);
  