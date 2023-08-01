function fibonacci(n) {
    if (n <= 0) {
      return "Invalid input: n must be a positive integer.";
    } else if (n === 1) {
      return 0; // Base case: Fibonacci(1) = 0
    } else if (n === 2) {
      return 1; // Base case: Fibonacci(2) = 1
    } else {
      // Recursive step: Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
// Example usage:
  const number = 10;
  const result = fibonacci(number);
  console.log(`Fibonacci of ${number} is: ${result}`);


// Without recursion
  let n1 =0; n2= 1; sum = 0;
  for(i=2;i<10;++i)//loop starts from 2 because 0 and 1 are already printed    
  {    
   sum=n1+n2;    
   n1=n2;    
   n2=sum;    
  }  

  console.log(sum);

  