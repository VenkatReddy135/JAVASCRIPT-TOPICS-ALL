///if pattern exits in value  then it logs the complete
//details of the value to the console.

// var pattern=/xyz/;
// var value="this is xyz a test";
// let result=value.match(pattern);
// console.log(result);


///if pattern doesn't exits in value  then it logs null
//to the console.

// var pattern=/xyz/;
// var value="this is just a test";
// let result=value.match(pattern);
// console.log(result);   //output null
   //console.log(typeof result) //output "object" that means empty but not undefined


//we use null in "if-else" conditions to check whether the condition
//is true or false

//from the above example code


var pattern=/xyz/;
var value="this is just a test";
let result=value.match(pattern);
console.log(result);  //output is null

if(result===null){
    console.log("match not found")  // this will execute because the statement is true
};