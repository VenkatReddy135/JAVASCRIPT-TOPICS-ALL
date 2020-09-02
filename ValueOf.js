

// var number=1234;

// function add(){
//     return this.number.valueOf()    ///returns the value assigned to that number
// }
// console.log(add()) ///output is 1234



// var employee={
//     fname:"venkat",
//     lname:"reddy",
//     getFullName:function(){
//         return this.valueOf()     ////this.valueOf()  returns the total object
//     }
// }

// console.log(employee.getFullName());


//example of valueOf() method

let number=new Number(7);
console.log(number);  //result [Number:7]
console.log(typeof number);  //result object
//inorder to convert it ino an original number;

let num=number.valueOf();
console.log(num);   // here we get the original number
console.log(typeof num);  //result=> number