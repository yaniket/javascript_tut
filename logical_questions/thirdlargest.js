function thirdLargest(arr) {
    if (arr.length < 3) {
      return "Array should have at least 3 elements";
    }
  
    let first = Number.MIN_SAFE_INTEGER;
    let second = Number.MIN_SAFE_INTEGER;
    let third = Number.MIN_SAFE_INTEGER;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > first) {
        third = second;
        second = first;
        first = arr[i];
      } else if (arr[i] > second && arr[i] !== first) {
        third = second;
        second = arr[i];
      } else if (arr[i] > third && arr[i] !== first && arr[i] !== second) {
        third = arr[i];
      }
    }
  
    return third;
  }
  
  const array = [10, 5, 8, 12, 14, 7, 9, 6];
  const thirdLargestElement = thirdLargest(array);
  console.log("Third largest element:", thirdLargestElement); // Output: Third largest element: 10
  