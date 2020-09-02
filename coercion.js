//coercion is the process of converting value from
// one type to the other....such as strin to number and number to string etc

//1) Implicit conversions
//  var num1=5;
//  var num2=num1+5;    //value is 10 which is a integer
//  var num3=num1+"hello" //value is "5hello" which is a string


 //2)explicit conversions

 var num1=prompt("enter some value"); //enter 2 in prompt when page opens
 console.log(num1);    //value is 2 of type string
 console.log(typeof num1);  //output is "string"
 //parseInt converts string to number
 console.log(parseInt(num1)+9);  //value is 11



