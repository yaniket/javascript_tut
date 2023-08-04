
function factorial(param){
    if(param == 1)
    return 1;
    return param* factorial(param - 1);
}

function addition(param){
    if(param > 0)
    return param + addition(param - 1);
    else{
        return param;
    }
}

function specialNumber(param){

    const output = factorial(param)
     const output2 = addition(param)
    console.log(output);
    if(output == output2){
        return " It is aspecial number";
    }
    else{
        return "It is not a special number"
    }



}

console.log(specialNumber(145))