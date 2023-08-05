
function checkPrime(param){
  for(let i = 2; i<param; i++){
    if(param%i == 0)
    return "It is not a prime number";
  }

  return "It is a prime number";
}


const output = checkPrime(1001);
console.log(output);