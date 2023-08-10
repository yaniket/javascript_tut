function findSecondLargest(arr) {
   if (arr.length < 2) {
       return "Array should have at least two elements";
   }
   
   let firstLargest = arr[0];
   let secondLargest = arr[1];
   
   if (firstLargest < secondLargest) {
       // Swap the values if necessary
       [firstLargest, secondLargest] = [secondLargest, firstLargest];
   }
   
   for (let i = 2; i < arr.length; i++) {
       if (arr[i] > firstLargest) {
           secondLargest = firstLargest;
           firstLargest = arr[i];
       } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
           secondLargest = arr[i];
       }
   }
   
   return secondLargest;
}

const array = [10, 5, 8, 20, 9, 15];
const secondLargest = findSecondLargest(array);
console.log("The second largest element is:", secondLargest);
