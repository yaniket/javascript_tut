let num = 153;

function armstrong(num){
    let result = 0;
    console.log(num);
    while(num > 0){
        remainder = num%10;
        console.log("remainder", remainder);
        result += remainder*remainder*remainder;

        // Javascript returns floating point number
        num = parseInt(num/10);
        console.log(result);
    }
    if(result == num){
        console.log("It is a pallindrome");
    }
}

armstrong(num);
