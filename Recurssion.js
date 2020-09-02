
/////Recursive Function Defination 

//A recursive function is a function that calls itself during its
// execution. This enables the function to repeat itself several times,
// outputting the result at the end of each iteration

function factorial(n){
    if(n===0){
        return 1;
    }else{
        return n * factorial(n-1)
    }
}
console.log(factorial(5));











