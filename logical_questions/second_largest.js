let a =[1,33,88,101, 2,4, 99, 99.5];

let largest = a[0];
let secondlargest = a[0];

for(let i = 0; i < a.length; i++){
     if(a[i] > largest){
     secondlargest = largest
     largest =a[i];
     }
     else if(a[i] < largest && a[i] > secondlargest){
        secondlargest = a[i];
        console.log("secondlargest", secondlargest);
     }
    
     
}