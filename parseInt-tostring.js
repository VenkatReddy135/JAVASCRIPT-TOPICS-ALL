
///converting number to string
// var m=12345;
// var n=m.toString();
// console.log(n);
// console.log(typeof n);




//// converting string to number
// var str="123";
// var y=parseInt(str);
// console.log(y);
// console.log(typeof y);




///converting the floatingpoint string to floating point number

// var string="3.245";
// var x=parseFloat(string)
// console.log(x);
// console.log(typeof x);



//example to tosring() wht it does??
let string=new String("venkat");
console.log(string);
console.log(typeof string);
//here new string is generated like this [string:'venkat]
//inorder to convert it ito an original string use "tostring()"
console.log(string.toString()); //result=> venkat
console.log(typeof string.toString());  //result => string





//example to valueOf() and what it does??
let number=new Number(7);
console.log(number);  //result [Number:7]
console.log(typeof number);  //result object
//inorder to convert it ino an original number;

let num=number.valueOf();
console.log(num);   // here we get the original number
console.log(typeof num);  //result=> number